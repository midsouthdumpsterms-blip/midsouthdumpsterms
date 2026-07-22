import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function POST(req: Request) {
    try {
        const { pin } = await req.json()
        const validPin = process.env.ADMIN_PIN || '90210' // Assuming 90210 from previous context or env

        if (pin !== validPin) {
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
