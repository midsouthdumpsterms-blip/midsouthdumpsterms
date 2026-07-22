import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const { rows } = await sql`SELECT id, image_url FROM blog_posts WHERE image_url LIKE '%thumbnail?id=%'`;
        
        for (const row of rows) {
            if (row.image_url) {
                const urlObj = new URL(row.image_url);
                const id = urlObj.searchParams.get('id');
                if (id) {
                    const newUrl = `https://drive.google.com/uc?export=view&id=${id}`;
                    await sql`UPDATE blog_posts SET image_url = ${newUrl} WHERE id = ${row.id}`;
                }
            }
        }
        return NextResponse.json({ success: true, fixed: rows.length });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 });
    }
}
