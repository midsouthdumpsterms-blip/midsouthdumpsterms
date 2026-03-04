import { Metadata } from 'next'
import Link from 'next/link'
import { generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import styles from './blog.module.css'

export const metadata: Metadata = {
    title: 'Blog | Dumpster Rental Tips & Guides',
    description:
        'Expert tips and guides for dumpster rentals, waste management, and home improvement projects in Central Mississippi.',
}

const blogPosts = [
    {
        slug: 'storm-cleanup-dumpster-rental-jackson-ms',
        title: 'Storm Cleanup Dumpster Rental in Jackson MS | Same-Day Service',
        excerpt: 'Need a dumpster after a storm in Central Mississippi? We offer same-day storm debris removal across Jackson, Brandon, Ridgeland, Madison, and surrounding areas.',
        date: '2026-03-03',
        category: 'Storm & Disaster',
    },
    {
        slug: 'spring-cleaning-dumpster-rental-central-ms',
        title: 'Spring Cleaning Dumpster Rental in Central Mississippi',
        excerpt: 'Spring is the best time to tackle big cleanout projects in Mississippi. Rent a roll-off dumpster and get it done in one weekend — same-day delivery available.',
        date: '2026-02-24',
        category: 'Seasonal',
    },
    {
        slug: 'roofing-contractor-dumpster-rental-jackson-ms',
        title: 'Dumpster Rental for Roofing Contractors in Jackson, MS',
        excerpt: 'Roofing crews in Central Mississippi — get same-day or next-day roll-off dumpsters for shingles, decking, and roofing debris. Reliable, fast, locally owned.',
        date: '2026-02-17',
        category: 'Contractors',
    },
    {
        slug: 'estate-cleanout-dumpster-rental-central-ms',
        title: 'Estate Cleanout Dumpster Rental in Central Mississippi',
        excerpt: 'Handling an estate cleanout in Jackson, Brandon, or Central MS? We make the cleanup side easier with flexible roll-off dumpster rentals and fast delivery.',
        date: '2026-02-10',
        category: 'Cleanouts',
    },
    {
        slug: 'rental-property-cleanout-dumpster-rental-ms',
        title: 'Rental Property & Foreclosure Cleanout Dumpsters in Mississippi',
        excerpt: 'Property managers and landlords — get fast, reliable roll-off dumpster service for tenant turnover, foreclosure cleanouts, and eviction cleanup across Central MS.',
        date: '2026-02-03',
        category: 'Property Management',
    },
    {
        slug: 'dumpster-rental-brandon-ms',
        title: 'Dumpster Rental in Brandon, MS — Fast, Local, and Fairly Priced',
        excerpt: 'Looking for dumpster rental in Brandon, MS? We deliver 10, 15, and 20-yard roll-off dumpsters to Brandon and all of Rankin County. Same-day delivery available.',
        date: '2026-01-27',
        category: 'Local Guides',
    },
    {
        slug: 'dumpster-rental-vs-junk-removal-jackson-ms',
        title: 'Dumpster Rental vs. Junk Removal in Jackson, MS — Which Is Right for You?',
        excerpt: 'Not sure whether to rent a dumpster or hire a junk removal company? We break down the cost, convenience, and best-use scenarios for both options.',
        date: '2026-01-20',
        category: 'Guides',
    },
    {
        slug: 'same-day-dumpster-rental-jackson-ms',
        title: 'Same-Day Dumpster Rental in Jackson, MS — We Deliver Today',
        excerpt: 'Need a dumpster today? Mid South Dumpster Rentals offers same-day roll-off dumpster delivery across Central Mississippi with no rush fees. Call now.',
        date: '2026-01-13',
        category: 'Local Guides',
    },
    {
        slug: 'garage-cleanout-dumpster-rental-central-ms',
        title: 'Garage Cleanout Dumpster Rental in Central Mississippi',
        excerpt: 'Finally cleaning out that garage? A roll-off dumpster parked in your driveway is the fastest way to get it done. Same-day delivery in Jackson, Brandon, and beyond.',
        date: '2026-01-06',
        category: 'Cleanouts',
    },
    {
        slug: 'dumpster-rental-prices-jackson-ms',
        title: 'Dumpster Rental Prices in Jackson MS | Cost Guide',
        excerpt: 'Complete guide to dumpster rental costs in Jackson and Central Mississippi. Compare prices, learn about fees, and get tips to save money.',
        date: '2024-02-05',
        category: 'Local Guides',
    },
    {
        slug: 'home-renovation-dumpster-guide-central-ms',
        title: 'Dumpster Rental for Home Renovations in Central MS',
        excerpt: 'Planning a renovation in Jackson, Madison, or Brandon? Learn how to choose the right dumpster size and manage debris efficiently.',
        date: '2024-02-01',
        category: 'Home Improvement',
    },
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
