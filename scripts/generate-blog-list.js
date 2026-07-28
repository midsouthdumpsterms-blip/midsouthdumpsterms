const fs = require('fs');
const path = require('path');

function getLocalBlogPosts() {
    const blogDir = path.join(__dirname, '../app/blog');
    const folders = fs.readdirSync(blogDir).filter(f =>
        fs.statSync(path.join(blogDir, f)).isDirectory() && !f.startsWith('[')
    );

    const posts = folders.map(slug => {
        const filePath = path.join(blogDir, slug, 'page.tsx');
        if (!fs.existsSync(filePath)) return null;

        const content = fs.readFileSync(filePath, 'utf8');

        const titleMatch = content.match(/title:\s*'([^']+)'/) || content.match(/<h1>([^<]+)<\/h1>/);
        const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ');

        const descMatch = content.match(/description:\s*'\s*([^']+)'/s) || content.match(/<p className={styles.lead}>\s*([^<]+)<\/p>/s);
        const excerpt = descMatch ? descMatch[1].trim() : '';

        const catMatch = content.match(/category:\s*'([^']+)'/) || content.match(/className={styles.category}>([^<]+)<\/span>/);
        const category = catMatch ? catMatch[1] : 'Guides';

        const dateMatch =
            content.match(/'(\d{4}-\d{2}-\d{2})'/) ||
            content.match(/Published ([A-Z][a-z]+ \d{1,2}, \d{4})/) ||
            content.match(/Updated ([A-Z][a-z]+ \d{1,2}, \d{4})/);

        let date = '2024-01-01';
        if (dateMatch) {
            const rawDate = dateMatch[1];
            if (rawDate.includes('-')) {
                date = rawDate;
            } else {
                try {
                    date = new Date(rawDate).toISOString().split('T')[0];
                } catch {
                    date = '2024-01-01';
                }
            }
        }

        return {
            slug,
            title,
            excerpt,
            date,
            category,
            source: 'local',
            href: `/blog/${slug}`
        };
    }).filter(p => p !== null);

    return posts;
}

const posts = getLocalBlogPosts();
fs.writeFileSync(path.join(__dirname, '../lib/blog-posts.json'), JSON.stringify(posts, null, 2));
console.log(`[Blog Setup] Generated blog-posts.json with ${posts.length} posts.`);
