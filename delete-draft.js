const { sql } = require('@vercel/postgres');
require('dotenv').config({ path: '.env.local' });

async function deletePost() {
  const result = await sql`DELETE FROM blog_posts WHERE slug LIKE '%concrete%' RETURNING *`;
  console.log(result.rows);
}

deletePost().catch(console.error);
