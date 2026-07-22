import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function POST(req: Request) {
    try {
        const { pin } = await req.json()
        const ADMIN_PIN = process.env.ADMIN_PIN?.trim() || '90210'
        const userPIN = pin?.trim()

        if (userPIN !== ADMIN_PIN) {
            return NextResponse.json({ success: false, error: 'Invalid PIN' }, { status: 401 })
        }

        const { rows: posts } = await sql`
            SELECT id, title, slug, status, created_at 
            FROM blog_posts 
            ORDER BY created_at DESC
        `

        return NextResponse.json({ success: true, posts })
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to fetch posts' }, { status: 500 })
    }
}
