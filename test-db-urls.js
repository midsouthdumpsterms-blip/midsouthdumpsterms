require('@next/env').loadEnvConfig(process.cwd());
const { sql } = require('@vercel/postgres');

async function test() {
    try {
        const { rows } = await sql`SELECT slug, image_url, status FROM blog_posts WHERE slug IN (
            'how-to-choose-the-right-dumpster-size-for-a-home-remodel-in-jackson-ms',
            'dumpster-rental-vs-junk-removal-in-central-mississippi-which-is-better',
            'what-items-are-prohibited-in-roll-off-dumpsters-in-rankin-county'
        )`;
        console.log(JSON.stringify(rows, null, 2));
    } catch (e) {
        console.error(e);
    }
}
test();
