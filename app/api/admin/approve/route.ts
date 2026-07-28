import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  try {
    const { slug, pin } = await request.json();

    const envPin = process.env.ADMIN_PIN?.trim();
    const userPIN = pin?.trim();

    if (!envPin || userPIN !== envPin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

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

    revalidatePath('/blog');

    return NextResponse.json({ message: 'Approved and Published successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error approving draft:', error);
    return NextResponse.json({ error: 'Failed to approve draft' }, { status: 500 });
  }
}

