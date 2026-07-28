import { NextRequest, NextResponse } from 'next/server'
import { getLeads } from '@/lib/db'

export async function POST(req: NextRequest) {
    try {
        const { pin } = await req.json()

        const envPin = process.env.ADMIN_PIN?.trim()
        const userPIN = pin?.trim()

        if (!envPin || userPIN !== envPin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const leads = await getLeads()
        return NextResponse.json({ success: true, leads })
    } catch (err) {
        console.error('Get leads error:', err)
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
    }
}
