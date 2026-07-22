const { sql } = require('@vercel/postgres');
require('@next/env').loadEnvConfig(process.cwd());

async function check() {
    const { rows } = await sql`SELECT image_url FROM blog_posts WHERE slug = 'spring-cleaning-checklist-for-jackson-homeowners-getting-the-most-out-of-your-dumpster'`;
    console.log("URL:", rows[0]?.image_url);
}
check();
