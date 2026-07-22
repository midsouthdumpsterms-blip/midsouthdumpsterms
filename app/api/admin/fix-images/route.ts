import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const { rows } = await sql`SELECT id, image_url FROM blog_posts`;
        
        let fixedCount = 0;
        for (const row of rows) {
            if (row.image_url) {
                let id = null;
                const urlObj = new URL(row.image_url);
                if (row.image_url.includes('uc?export=view')) {
                    id = urlObj.searchParams.get('id');
                } else if (row.image_url.includes('lh3.googleusercontent.com/d/')) {
                    // Extract ID from path like /d/12345=w1200...
                    const parts = urlObj.pathname.split('/');
                    const dIndex = parts.indexOf('d');
                    if (dIndex !== -1 && parts.length > dIndex + 1) {
                        id = parts[dIndex + 1].split('=')[0];
                    }
                }
                
                if (id) {
                    const newUrl = `https://lh3.googleusercontent.com/d/${id}`;
                    await sql`UPDATE blog_posts SET image_url = ${newUrl} WHERE id = ${row.id}`;
                    fixedCount++;
                }
            }
        }
        return NextResponse.json({ success: true, fixed: fixedCount });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 });
    }
}
