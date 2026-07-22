import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
    const { rows } = await sql`SELECT image_url FROM blog_posts WHERE slug = 'spring-cleaning-checklist-for-jackson-homeowners-getting-the-most-out-of-your-dumpster'`;
    return NextResponse.json({ url: rows[0]?.image_url });
}
