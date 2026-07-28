import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function POST(req: Request) {
    try {
        const { id, pin } = await req.json()
        const envPin = process.env.ADMIN_PIN?.trim()
        const userPIN = pin?.trim()

        if (!envPin || userPIN !== envPin) {
            return NextResponse.json({ success: false, error: 'Invalid PIN' }, { status: 401 })
        }

        await sql`DELETE FROM blog_posts WHERE id = ${id}`

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to delete post' }, { status: 500 })
    }
}
