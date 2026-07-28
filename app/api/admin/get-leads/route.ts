import { NextRequest, NextResponse } from 'next/server'
import { getLeads } from '@/lib/db'
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
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }
        resetAttempts(ip)

        const leads = await getLeads()
        return NextResponse.json({ success: true, leads })
    } catch (err) {
        console.error('Get leads error:', err)
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
    }
}
