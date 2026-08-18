import { Metadata } from 'next'
import Link from 'next/link'
import { generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import styles from './blog.module.css'
import { sql } from '@vercel/postgres'
import localPostsData from '@/lib/blog-posts.json'

export const dynamic = 'force-dynamic' // Always show fresh database content

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/blog' },
    title: 'Dumpster Rental Tips & Guides | Jackson MS',
    description:
        'Practical guides on dumpster sizing, pricing, weight limits, permits and cleanouts for homeowners and contractors across Central Mississippi.',
    openGraph: {
        title: 'Dumpster Rental Tips & Local Guides',
        description: 'Expert dumpster rental guides for Central Mississippi homeowners and contractors.',
        url: 'https://midsouthdumpsterms.com/blog',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
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
    return localPostsData as UnifiedPost[];
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
