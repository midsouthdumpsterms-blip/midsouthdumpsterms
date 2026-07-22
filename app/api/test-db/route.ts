import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const { rows } = await sql`
            SELECT slug, image_url 
            FROM blog_posts 
            WHERE slug IN (
                'how-to-choose-the-right-dumpster-size-for-a-home-remodel-in-jackson-ms',
                'dumpster-rental-vs-junk-removal-in-central-mississippi-which-is-better',
                'what-items-are-prohibited-in-roll-off-dumpsters-in-rankin-county'
            )
        `;
        return NextResponse.json({ rows });
    } catch (e) {
        return NextResponse.json({ error: String(e) }, { status: 500 });
    }
}
