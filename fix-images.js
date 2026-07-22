const { loadEnvConfig } = require('@next/env');
loadEnvConfig(process.cwd());
const { sql } = require('@vercel/postgres');

async function main() {
    try {
        const { rows } = await sql`SELECT id, image_url FROM blog_posts WHERE image_url LIKE '%thumbnail?id=%'`;
        
        for (const row of rows) {
            if (row.image_url) {
                const urlObj = new URL(row.image_url);
                const id = urlObj.searchParams.get('id');
                if (id) {
                    const newUrl = `https://drive.google.com/uc?export=view&id=${id}`;
                    await sql`UPDATE blog_posts SET image_url = ${newUrl} WHERE id = ${row.id}`;
                    console.log(`Updated post ${row.id}`);
                }
            }
        }
        console.log('Done!');
    } catch (e) {
        console.error(e);
    }
}
main();
