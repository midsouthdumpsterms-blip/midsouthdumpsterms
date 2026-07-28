/**
 * Simple in-memory rate limiter for admin PIN attempts.
 *
 * Uses a module-level Map so state persists across requests within the same
 * serverless function instance. Not distributed — each Vercel instance has its
 * own counter — but still provides meaningful protection against sequential
 * brute-force attacks on a single warm instance.
 *
 * For full distributed rate limiting, replace with @upstash/ratelimit + Redis.
 */

interface RateLimitEntry {
    count: number
    resetAt: number
}

const attempts = new Map<string, RateLimitEntry>()

const MAX_ATTEMPTS = 5        // max failed PIN attempts
const WINDOW_MS = 15 * 60 * 1000  // 15-minute window

export function checkRateLimit(ip: string): { allowed: boolean; retryAfterSeconds?: number } {
    const now = Date.now()
    const entry = attempts.get(ip)

    if (!entry || now > entry.resetAt) {
        // No entry or window expired — fresh start
        attempts.set(ip, { count: 0, resetAt: now + WINDOW_MS })
        return { allowed: true }
    }

    if (entry.count >= MAX_ATTEMPTS) {
        const retryAfterSeconds = Math.ceil((entry.resetAt - now) / 1000)
        return { allowed: false, retryAfterSeconds }
    }

    return { allowed: true }
}

export function recordFailedAttempt(ip: string): void {
    const now = Date.now()
    const entry = attempts.get(ip)

    if (!entry || now > entry.resetAt) {
        attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    } else {
        entry.count += 1
    }
}

export function resetAttempts(ip: string): void {
    attempts.delete(ip)
}
