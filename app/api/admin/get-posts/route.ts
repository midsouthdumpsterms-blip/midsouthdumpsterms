import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { NextRequest } from 'next/server'
import { checkRateLimit, recordFailedAttempt, resetAttempts } from '@/lib/rate-limit'

export async function POST(req: NextRequest) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    const { allowed, retryAfterSeconds } = checkRateLimit(ip)
    if (!allowed) {
        return NextResponse.json(
            { error: `Too many attempts. Try again in ${retryAfterSeconds} seconds.` },
            { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } }
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
        resetAttempts(ip)

        const { rows: posts } = await sql`
            SELECT id, title, slug, status, published_at AS created_at 
            FROM blog_posts 
            ORDER BY id DESC
        `

        return NextResponse.json({ success: true, posts })
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to fetch posts' }, { status: 500 })
    }
}
