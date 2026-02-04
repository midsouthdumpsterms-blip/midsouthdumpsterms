import { Metadata } from 'next'
import Link from 'next/link'
import styles from './blog.module.css'

export const metadata: Metadata = {
    title: 'Blog | Dumpster Rental Tips & Guides',
    description:
        'Expert tips and guides for dumpster rentals, waste management, and home improvement projects in Central Mississippi.',
}

const blogPosts = [
    {
        slug: 'how-to-choose-dumpster-size',
        title: 'How to Choose the Right Dumpster Size for Your Project',
        excerpt: 'Not sure which dumpster size you need? Our comprehensive guide helps you select the perfect dumpster for your project.',
        date: '2024-01-15',
        category: 'Guides',
    },
    {
        slug: 'what-can-i-put-in-a-dumpster',
        title: 'What Can You Throw in a Dumpster Rental?',
        excerpt: 'Learn what items are acceptable and prohibited in dumpster rentals to avoid extra fees and ensure proper disposal.',
        date: '2024-01-10',
        category: 'Tips',
    },
    {
        slug: 'dumpster-rental-guide-for-home-renovations',
        title: 'Dumpster Rental Guide for Home Renovations',
        excerpt: 'Planning a home renovation? Discover how to manage debris efficiently with the right dumpster rental.',
        date: '2024-01-05',
        category: 'Home Improvement',
    },
]

export default function Blog() {
    return (
        <>
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
                                <p className={styles.postExcerpt}>{post.excerpt}</p>
                                <div className={styles.postMeta}>
                                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
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
