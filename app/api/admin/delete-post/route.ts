import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function POST(req: Request) {
    try {
        const { id, pin } = await req.json()
        const validPin = process.env.ADMIN_PIN || '90210'

        if (pin !== validPin) {
            return NextResponse.json({ success: false, error: 'Invalid PIN' }, { status: 401 })
        }

        await sql`DELETE FROM blog_posts WHERE id = ${id}`

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to delete post' }, { status: 500 })
    }
}
