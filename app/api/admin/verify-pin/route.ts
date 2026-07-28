import { NextResponse } from 'next/server'
import { checkRateLimit, recordFailedAttempt, resetAttempts } from '@/lib/rate-limit'

/**
 * POST /api/admin/verify-pin
 *
 * Validates the admin PIN and sets a short-lived httpOnly session cookie.
 * Subsequent requests to admin server components check this cookie rather
 * than requiring the PIN to be passed every time.
 */
export async function POST(req: Request) {
    // Get client IP for rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

    const { allowed, retryAfterSeconds } = checkRateLimit(ip)
    if (!allowed) {
        return NextResponse.json(
            { error: `Too many attempts. Try again in ${retryAfterSeconds} seconds.` },
            {
                status: 429,
                headers: { 'Retry-After': String(retryAfterSeconds) },
            }
        )
    }

    try {
        const { pin } = await req.json()
        const envPin = process.env.ADMIN_PIN?.trim()
        const userPIN = pin?.trim()

        if (!envPin || userPIN !== envPin) {
            recordFailedAttempt(ip)
            return NextResponse.json({ success: false, error: 'Invalid PIN' }, { status: 401 })
        }

        // PIN correct — clear failed attempts and issue session cookie
        resetAttempts(ip)

        const response = NextResponse.json({ success: true })
        response.cookies.set('admin_session', 'verified', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/situationroom',
            maxAge: 60 * 60 * 8, // 8-hour session
        })
        return response
    } catch {
        return NextResponse.json({ success: false, error: 'Bad request' }, { status: 400 })
    }
}
