import { Metadata } from 'next'
import Link from 'next/link'
import { generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import styles from './blog.module.css'
import fs from 'fs'
import path from 'path'

export const metadata: Metadata = {
    title: 'Blog | Dumpster Rental Tips & Guides',
    description:
        'Expert tips and guides for dumpster rentals, waste management, and home improvement projects in Central Mississippi.',
}

function getBlogPosts() {
    const blogDir = path.join(process.cwd(), 'app/blog')
    const folders = fs.readdirSync(blogDir).filter(f =>
        fs.statSync(path.join(blogDir, f)).isDirectory()
    )

    const posts = folders.map(slug => {
        const filePath = path.join(blogDir, slug, 'page.tsx')
        if (!fs.existsSync(filePath)) return null

        const content = fs.readFileSync(filePath, 'utf8')

        // Extract title from metadata or H1
        const titleMatch = content.match(/title:\s*'([^']+)'/) || content.match(/<h1>([^<]+)<\/h1>/)
        const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ')

        // Extract description/excerpt from metadata
        const descMatch = content.match(/description:\s*'\s*([^']+)'/s) || content.match(/<p className={styles.lead}>\s*([^<]+)<\/p>/s)
        const excerpt = descMatch ? descMatch[1].trim() : ''

        // Extract category
        const catMatch = content.match(/category:\s*'([^']+)'/) || content.match(/className={styles.category}>([^<]+)<\/span>/)
        const category = catMatch ? catMatch[1] : 'Guides'

        // Extract date
        // Try to find a date in articleSchema or meta text
        const dateMatch = content.match(/'(\d{4}-\d{2}-\d{2})'/) || content.match(/Published ([A-Z][a-z]+ \d{1,2}, \d{4})/) || content.match(/Updated ([A-Z][a-z]+ \d{1,2}, \d{4})/)

        let date = '2024-01-01'
        if (dateMatch) {
            const rawDate = dateMatch[1]
            if (rawDate.includes('-')) {
                date = rawDate
            } else {
                // Parse "Month Day, Year"
                try {
                    date = new Date(rawDate).toISOString().split('T')[0]
                } catch (e) {
                    date = '2024-01-01'
                }
            }
        }

        return {
            slug,
            title,
            excerpt,
            date,
            category
        }
    }).filter(p => p !== null)

    // Sort by date descending
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default function Blog() {
    const blogPosts = getBlogPosts()
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Blog & Resources</h1>
                    <p className={styles.heroSubtext}>
                        Tips, guides, and insights for your dumpster rental needs
                    </p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className={styles.blogGrid}>
                        {blogPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postCard}>
                                <div className={styles.postCategory}>{post.category}</div>
                                <h2>{post.title}</h2>
                                <p className={styles.postExcerpt}>{post.excerpt.length > 160 ? post.excerpt.substring(0, 157) + '...' : post.excerpt}</p>
                                <div className={styles.postMeta}>
                                    <span>{new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
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
