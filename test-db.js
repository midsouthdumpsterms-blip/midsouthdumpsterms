require('@next/env').loadEnvConfig(process.cwd());
const { sql } = require('@vercel/postgres');

async function test() {
    try {
        const { rows } = await sql`SELECT slug, image_url FROM blog_posts WHERE slug = 'dumpster-rental-vs-junk-removal-in-central-mississippi-which-is-better'`;
        console.log(rows);
    } catch (e) {
        console.error(e);
    }
}
test();
