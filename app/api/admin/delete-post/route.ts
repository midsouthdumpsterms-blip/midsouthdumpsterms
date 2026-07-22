import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function POST(req: Request) {
    try {
        const { id, pin } = await req.json()
        const ADMIN_PIN = process.env.ADMIN_PIN?.trim() || '90210'
        const userPIN = pin?.trim()

        if (userPIN !== ADMIN_PIN) {
            return NextResponse.json({ success: false, error: 'Invalid PIN' }, { status: 401 })
        }

        await sql`DELETE FROM blog_posts WHERE id = ${id}`

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to delete post' }, { status: 500 })
    }
}
