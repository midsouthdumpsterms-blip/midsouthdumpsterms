import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function POST(req: Request) {
    try {
        const { pin } = await req.json()
        const envPin = process.env.ADMIN_PIN?.trim()
        const userPIN = pin?.trim()

        if (!envPin || userPIN !== envPin) {
            return NextResponse.json({ success: false, error: 'Invalid PIN' }, { status: 401 })
        }

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
