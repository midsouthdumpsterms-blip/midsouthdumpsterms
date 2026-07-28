const { sql } = require('@vercel/postgres');
async function run() {
    const res = await sql`SELECT slug, title, image_url FROM blog_posts ORDER BY published_at DESC LIMIT 1`;
    console.log(res.rows);
}
run();
