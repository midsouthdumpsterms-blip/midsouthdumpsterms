const { loadEnvConfig } = require('@next/env');
loadEnvConfig(process.cwd());
const { sql } = require('@vercel/postgres');

async function main() {
    try {
        const result = await sql`
            SELECT column_name
            FROM information_schema.columns
            WHERE table_name = 'blog_posts'
        `;
        console.log(result.rows);
    } catch (e) {
        console.error(e);
    }
}
main();
