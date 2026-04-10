import { NextRequest, NextResponse } from 'next/server'
import { updateLeadStatus } from '@/lib/db'

export async function POST(req: NextRequest) {
    try {
        const { id, status, pin } = await req.json()

        const ADMIN_PIN = process.env.ADMIN_PIN?.trim()
        const userPIN = pin?.trim()

        if (!ADMIN_PIN || userPIN !== ADMIN_PIN) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        if (!id || !status) {
            return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
        }

        const success = await updateLeadStatus(Number(id), status)
        
        if (success) {
            return NextResponse.json({ success: true })
        } else {
            return NextResponse.json({ success: false }, { status: 500 })
        }
    } catch (err) {
        console.error('Update status error:', err)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
