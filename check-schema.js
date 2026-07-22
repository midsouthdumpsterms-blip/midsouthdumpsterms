const { sql } = require('@vercel/postgres');
require('@next/env').loadEnvConfig(process.cwd());

async function check() {
    try {
        const { rows } = await sql`
            SELECT column_name, data_type, character_maximum_length 
            FROM information_schema.columns 
            WHERE table_name = 'blog_posts' AND column_name = 'content_html';
        `;
        console.log("Schema:", rows);
    } catch (e) {
        console.error(e);
    }
}
check();
