import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const { slug } = await request.json();

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    const result = await sql`
      UPDATE blog_posts 
      SET status = 'PUBLISHED', published_at = CURRENT_TIMESTAMP
      WHERE slug = ${slug}
      RETURNING slug
    `;

    if (result.rowCount === 0) {
        return NextResponse.json({ error: 'Draft not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Approved and Published successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error approving draft:', error);
    return NextResponse.json({ error: 'Failed to approve draft' }, { status: 500 });
  }
}
