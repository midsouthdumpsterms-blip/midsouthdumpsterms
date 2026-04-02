import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, generateCityGeoSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Dumpster Rental in Byram, MS | Same-Day Roll-Off Service | Mid South',
    description:
        'Need a dumpster rental in Byram, MS? Mid South Dumpster Rentals delivers 10, 15, and 20-yard roll-off dumpsters to Lake Dockery, Byramdale Estates, Brannan Ridge, and all Byram zip codes. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Dumpster Rental in Byram, MS | Same-Day Roll-Off Service',
        'Need a dumpster rental in Byram, MS? Mid South delivers roll-off containers to Lake Dockery, Byramdale Estates, Brannan Ridge, and all Byram zip codes.',
        '2026-03-25',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Dumpster Rental in Byram MS', url: 'https://midsouthdumpsterms.com/blog/dumpster-rental-byram-ms' },
    ])
    // Byram, MS — 32.2137° N, 90.2701° W
    const geoSchema = generateCityGeoSchema('Byram', 32.2137, -90.2701, ['39272', '39212', '39170'])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(geoSchema) }} />

            <article className={styles.article}>
                <div className="container container-narrow">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>
                    <header className={styles.header}>
                        <span className={styles.category}>Local Guides</span>
                        <h1>Dumpster Rental in Byram, MS — Affordable Roll-Off Service for South Jackson&apos;s Growing Community</h1>
                        <p className={styles.meta}>Published March 25, 2026</p>
                    </header>
                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Byram sits just south of Jackson and has grown significantly over the past decade. With that growth comes steady demand for dumpster rentals — from home renovations and storm cleanups to new construction and estate clearouts. Mid South Dumpster Rentals delivers roll-off containers throughout Byram (zip codes 39272, 39212, and 39170) at flat-rate prices, often the same day you call.
                        </p>

                        <h2>Neighborhoods We Serve in Byram</h2>
                        <ul>
                            <li><strong>Lake Dockery</strong> — lakeside community with active renovation and yard cleanup demand</li>
                            <li><strong>Lake Ridgelea</strong> — residential neighborhood with frequent storm debris and roofing projects</li>
                            <li><strong>Byramdale Estates</strong> — established subdivision popular for whole-home cleanouts</li>
                            <li><strong>Brannan Ridge</strong> — newer development with new construction and addition debris</li>
                            <li><strong>Byram Estates</strong> — active community with consistent home improvement activity</li>
                        </ul>
                        <p>We serve zip codes <strong>39272, 39212, and 39170</strong>. GPS center: 32.2137° N, 90.2701° W.</p>

                        <h2>Dumpster Rental Pricing for Byram, MS</h2>
                        <table className={styles.table}>
                            <thead><tr><th>Size</th><th>1 Day</th><th>3 Day</th><th>7 Day</th><th>Included Weight</th></tr></thead>
                            <tbody>
                                <tr><td>10 Yard</td><td>$349</td><td>$379</td><td>$399</td><td>1 ton</td></tr>
                                <tr><td>15 Yard</td><td>$399</td><td>$429</td><td>$449</td><td>2 tons</td></tr>
                                <tr><td>20 Yard</td><td>$449</td><td>$479</td><td>$499</td><td>3 tons</td></tr>
                            </tbody>
                        </table>
                        <p>Overage on 10 and 15-yard containers: $55/ton (prorated). 20-yard containers have a strict 3-ton maximum.</p>

                        <h2>Common Dumpster Rental Projects in Byram</h2>
                        <ul>
                            <li><strong>Storm debris removal</strong> — Byram is in a storm corridor; cleanup after severe weather is our #1 call</li>
                            <li><strong>Home renovations</strong> — bathroom and kitchen remodels in Byramdale Estates and Lake Dockery</li>
                            <li><strong>Roofing tear-offs</strong> — shingles and underlayment require a roll-off, not a pickup truck</li>
                            <li><strong>Whole-home cleanouts</strong> — estate sales and pre-listing junk removal</li>
                            <li><strong>Yard and landscaping debris</strong> — brush, limbs, and demolition of old sheds or fences</li>
                            <li><strong>Moving cleanouts</strong> — purging items before or after a move</li>
                        </ul>

                        <h2>How to Book Your Byram Dumpster Rental</h2>
                        <ol>
                            <li><strong>Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink></strong> or book online — 2 minutes</li>
                            <li><strong>Tell us your address and project</strong> — we&apos;ll size it right</li>
                            <li><strong>Choose your rental period</strong> — 1, 3, or 7 days</li>
                            <li><strong>We deliver to your driveway or yard</strong> — same-day when available</li>
                            <li><strong>We pick up and haul away</strong> — done</li>
                        </ol>

                        <div className={styles.cta}>
                            <h3>Ready to Book Your Byram Dumpster?</h3>
                            <p>Visit our <Link href="/service-areas/byram">Byram Dumpster Rental</Link> page, or call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink>. Same-day delivery often available.</p>
                            <a href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Book Dumpster Rental in Byram
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
