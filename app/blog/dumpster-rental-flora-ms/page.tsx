import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, generateCityGeoSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/blog/dumpster-rental-flora-ms' },
    title: 'Dumpster Rental in Flora, MS | Same-Day Roll-Off Service | Mid South',
    description:
        'Need a dumpster rental in Flora, MS? Mid South Dumpster Rentals delivers 10, 15, and 20-yard roll-off dumpsters to Chestnut Hill, Kearney Park, Springwood, and all of zip code 39071. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Dumpster Rental in Flora, MS | Same-Day Roll-Off Service',
        'Need a dumpster rental in Flora, MS? Mid South delivers roll-off containers to Chestnut Hill, Kearney Park, Springwood, and all of 39071.',
        '2026-03-28',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Dumpster Rental in Flora MS', url: 'https://midsouthdumpsterms.com/blog/dumpster-rental-flora-ms' },
    ])
    // Flora, MS — 32.5437° N, 90.3106° W
    const geoSchema = generateCityGeoSchema('Flora', 32.5437, -90.3106, ['39071'])

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
                        <h1>Dumpster Rental in Flora, MS — Roll-Off Container Delivery to Madison County&apos;s Small Town</h1>
                        <p className={styles.meta}>Published March 28, 2026</p>
                    </header>
                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Flora is a small but growing community in Madison County, where homeowners value personal service and straightforward pricing. Mid South Dumpster Rentals delivers roll-off containers throughout Flora (zip code 39071) — whether you&apos;re cleaning out a family home, tackling a renovation, or clearing land on a rural property. Flat-rate pricing, same-day delivery when available.
                        </p>

                        <h2>Neighborhoods We Serve in Flora</h2>
                        <ul>
                            <li><strong>Chestnut Hill</strong> — established residential area with consistent renovation and cleanout demand</li>
                            <li><strong>Kearney Park</strong> — active community popular for garage cleanouts and yard debris removal</li>
                            <li><strong>Springwood</strong> — family neighborhood with frequent home improvement projects</li>
                            <li><strong>Weeks End</strong> — quieter residential area with estate and moving cleanout needs</li>
                            <li><strong>Heartland Estates</strong> — newer subdivision with active construction debris removal</li>
                            <li><strong>Woodlands of Flora</strong> — larger lot community with significant land clearing and brush removal demand</li>
                        </ul>
                        <p>All of zip code <strong>39071</strong> is covered. GPS center: 32.5437° N, 90.3106° W.</p>

                        <h2>Dumpster Rental Pricing for Flora, MS</h2>
                        <table className={styles.table}>
                            <thead><tr><th>Size</th><th>1 Day</th><th>3 Day</th><th>7 Day</th><th>Included Weight</th></tr></thead>
                            <tbody>
                                <tr><td>10 Yard</td><td>$349</td><td>$379</td><td>$399</td><td>1 ton</td></tr>
                                <tr><td>15 Yard</td><td>$399</td><td>$429</td><td>$449</td><td>2 tons</td></tr>
                                <tr><td>20 Yard</td><td>$449</td><td>$479</td><td>$499</td><td>3 tons</td></tr>
                            </tbody>
                        </table>
                        <p>Overage on 10 and 15-yard containers: $55/ton (prorated). 20-yard containers: strict 3-ton cap.</p>

                        <h2>What Flora Residents Use Dumpsters For</h2>
                        <ul>
                            <li><strong>Land and brush clearing</strong> — Flora&apos;s rural character means frequent land clearing projects</li>
                            <li><strong>Home renovations</strong> — remodeling older homes throughout the Chestnut Hill and Springwood areas</li>
                            <li><strong>Estate cleanouts</strong> — settling longtime family properties in Madison County</li>
                            <li><strong>Roofing tear-offs</strong> — storm damage repair common in this part of Central MS</li>
                            <li><strong>Moving cleanouts</strong> — purging items before relocating</li>
                            <li><strong>Construction debris</strong> — new builds and additions in Heartland Estates</li>
                        </ul>

                        <h2>How to Book Your Flora Dumpster Rental</h2>
                        <ol>
                            <li><strong>Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink></strong> or book online</li>
                            <li><strong>Give us your Flora address</strong> — we&apos;ll confirm same-day availability</li>
                            <li><strong>Choose 1, 3, or 7 days</strong></li>
                            <li><strong>We deliver and place it</strong> — driveway, yard, or rural property</li>
                            <li><strong>We pick up when you&apos;re done</strong></li>
                        </ol>

                        <div className={styles.cta}>
                            <h3>Ready to Book Your Flora Dumpster?</h3>
                            <p>Visit our <Link href="/service-areas/flora">Flora Dumpster Rental</Link> page, or call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink>. Same-day delivery available in 39071.</p>
                            <button type="button" className="btn btn-primary survcart-embed-presenter">Book Now</button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
