import { Metadata } from 'next'
import Link from 'next/link'
import { generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import styles from './blog.module.css'
import fs from 'fs'
import path from 'path'
import { sql } from '@vercel/postgres'

export const revalidate = 3600 // revalidate hourly to pick up approved posts

export const metadata: Metadata = {
    title: 'Dumpster Rental Tips & Guides | Jackson MS | Mid South Dumpster Rentals',
    description:
        'Expert dumpster rental guides for Jackson, Rankin, Hinds & Madison County MS. Learn what to throw away, how to choose a size, pricing tips, and more.',
    openGraph: {
        title: 'Dumpster Rental Tips & Local Guides | Mid South',
        description: 'Expert dumpster rental guides for Central Mississippi homeowners and contractors.',
        url: 'https://midsouthdumpsterms.com/blog',
    },
}

interface UnifiedPost {
    slug: string
    title: string
    excerpt: string
    date: string
    category: string
    source: 'local' | 'db'
    href: string
}

function getLocalBlogPosts(): UnifiedPost[] {
    const blogDir = path.join(process.cwd(), 'app/blog')
    const folders = fs.readdirSync(blogDir).filter(f =>
        fs.statSync(path.join(blogDir, f)).isDirectory() && !f.startsWith('[')
    )

    const posts = folders.map(slug => {
        const filePath = path.join(blogDir, slug, 'page.tsx')
        if (!fs.existsSync(filePath)) return null

        const content = fs.readFileSync(filePath, 'utf8')

        const titleMatch = content.match(/title:\s*'([^']+)'/) || content.match(/<h1>([^<]+)<\/h1>/)
        const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ')

        const descMatch = content.match(/description:\s*'\s*([^']+)'/s) || content.match(/<p className={styles.lead}>\s*([^<]+)<\/p>/s)
        const excerpt = descMatch ? descMatch[1].trim() : ''

        const catMatch = content.match(/category:\s*'([^']+)'/) || content.match(/className={styles.category}>([^<]+)<\/span>/)
        const category = catMatch ? catMatch[1] : 'Guides'

        const dateMatch =
            content.match(/'(\d{4}-\d{2}-\d{2})'/) ||
            content.match(/Published ([A-Z][a-z]+ \d{1,2}, \d{4})/) ||
            content.match(/Updated ([A-Z][a-z]+ \d{1,2}, \d{4})/)

        let date = '2024-01-01'
        if (dateMatch) {
            const rawDate = dateMatch[1]
            if (rawDate.includes('-')) {
                date = rawDate
            } else {
                try {
                    date = new Date(rawDate).toISOString().split('T')[0]
                } catch {
                    date = '2024-01-01'
                }
            }
        }

        return {
            slug,
            title,
            excerpt,
            date,
            category,
            source: 'local' as const,
            href: `/blog/${slug}`,
        }
    }).filter((p): p is NonNullable<typeof p> => p !== null)

    return posts
}

async function getDbBlogPosts(): Promise<UnifiedPost[]> {
    try {
        const { rows } = await sql`
            SELECT slug, title, excerpt, published_at
            FROM blog_posts
            WHERE status = 'PUBLISHED'
            ORDER BY published_at DESC
        `;
        
        return rows.map(row => ({
            slug: row.slug,
            title: row.title,
            excerpt: row.excerpt,
            date: new Date(row.published_at).toISOString().split('T')[0],
            category: 'Tips & Guides',
            source: 'db' as const,
            href: `/blog/${row.slug}`,
        }));
    } catch (err) {
        console.error('Failed to fetch DB posts', err);
        return [];
    }
}

export default async function Blog() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
    ])

    const [localPosts, dbPosts] = await Promise.all([
        Promise.resolve(getLocalBlogPosts()),
        getDbBlogPosts(),
    ])

    // One unified list sorted newest → oldest
    const allPosts = [...localPosts, ...dbPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }}
            />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Dumpster Rental Tips & Guides for Central Mississippi</h1>
                    <p className={styles.heroSubtext}>
                        Local guides for Jackson, Rankin, Hinds & Madison County homeowners and contractors
                    </p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className={styles.blogGrid}>
                        {allPosts.map((post) => (
                            <Link key={post.slug} href={post.href} className={styles.postCard}>
                                <div className={styles.postCategory}>{post.category}</div>
                                <h2>{post.title}</h2>
                                <p className={styles.postExcerpt}>
                                    {post.excerpt.length > 160
                                        ? post.excerpt.substring(0, 157) + '...'
                                        : post.excerpt}
                                </p>
                                <div className={styles.postMeta}>
                                    <span>
                                        {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}
                                    </span>
                                    <span className={styles.readMore}>Read More →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
