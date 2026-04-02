import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, generateCityGeoSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Dumpster Rental in Florence, MS | Same-Day Roll-Off Service | Mid South',
    description:
        'Need a dumpster rental in Florence, MS? Mid South Dumpster Rentals delivers 10, 15, and 20-yard roll-off dumpsters to Southern Oaks, Deer Valley, Stonebrook, and all Florence zip codes 39073 and 39218. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Dumpster Rental in Florence, MS | Same-Day Roll-Off Service',
        'Need a dumpster rental in Florence, MS? Mid South delivers roll-off containers to Southern Oaks, Deer Valley, Stonebrook, and all of 39073 and 39218.',
        '2026-03-29',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Dumpster Rental in Florence MS', url: 'https://midsouthdumpsterms.com/blog/dumpster-rental-florence-ms' },
    ])
    // Florence, MS — 32.1540° N, 90.1312° W
    const geoSchema = generateCityGeoSchema('Florence', 32.1540, -90.1312, ['39073', '39218'])

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
                        <h1>Dumpster Rental in Florence, MS — Roll-Off Containers for Rankin County&apos;s Growing Community</h1>
                        <p className={styles.meta}>Published March 29, 2026</p>
                    </header>
                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Florence has grown quickly along the US-49 corridor as families seek more space south of Jackson. With that residential growth comes steady demand for dumpster rentals — from roofing and renovation projects to estate cleanouts and new construction. Mid South Dumpster Rentals serves all of Florence (zip codes 39073 and 39218) with fast, flat-rate roll-off delivery.
                        </p>

                        <h2>Neighborhoods We Serve in Florence</h2>
                        <ul>
                            <li><strong>Cleary</strong> — established residential area with active home renovation and cleanout demand</li>
                            <li><strong>Southern Oaks</strong> — popular neighborhood for roofing projects and garage cleanouts</li>
                            <li><strong>Triangle Acres</strong> — family community with consistent renovation and debris removal needs</li>
                            <li><strong>Eaglewood</strong> — growing subdivision with new construction and remodel activity</li>
                            <li><strong>Deer Valley</strong> — active community popular for whole-home and estate cleanouts</li>
                            <li><strong>Stonebrook</strong> — newer development with regular construction debris removal</li>
                            <li><strong>Hemphill Park</strong> — established area with frequent spring cleaning and pre-sale cleanout demand</li>
                            <li><strong>Burnside Estates</strong> — family neighborhood with consistent home improvement activity</li>
                        </ul>
                        <p>We cover zip codes <strong>39073 and 39218</strong>. GPS center: 32.1540° N, 90.1312° W.</p>

                        <h2>Dumpster Rental Pricing for Florence, MS</h2>
                        <table className={styles.table}>
                            <thead><tr><th>Size</th><th>1 Day</th><th>3 Day</th><th>7 Day</th><th>Included Weight</th></tr></thead>
                            <tbody>
                                <tr><td>10 Yard</td><td>$349</td><td>$379</td><td>$399</td><td>1 ton</td></tr>
                                <tr><td>15 Yard</td><td>$399</td><td>$429</td><td>$449</td><td>2 tons</td></tr>
                                <tr><td>20 Yard</td><td>$449</td><td>$479</td><td>$499</td><td>3 tons</td></tr>
                            </tbody>
                        </table>
                        <p>Overage on 10 and 15-yard containers: $55/ton (prorated). 20-yard containers: strict 3-ton cap, no overage.</p>

                        <h2>What Florence Residents Use Dumpsters For</h2>
                        <ul>
                            <li><strong>Roofing tear-offs</strong> — storm damage is common along the US-49 corridor; we handle shingle removal fast</li>
                            <li><strong>Home renovations</strong> — kitchen, bathroom, and flooring remodels throughout Florence</li>
                            <li><strong>Estate and home cleanouts</strong> — clearing longtime family properties in Deer Valley and Cleary</li>
                            <li><strong>New construction debris</strong> — active building in Eaglewood and Stonebrook</li>
                            <li><strong>Spring cleaning</strong> — large-volume junk removal before listing a home for sale</li>
                            <li><strong>Yard and land clearing</strong> — rural properties along Rankin County roads</li>
                        </ul>

                        <h2>How to Book Your Florence Dumpster Rental</h2>
                        <ol>
                            <li><strong>Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink></strong> or book online</li>
                            <li><strong>Give us your Florence address</strong> — we&apos;ll confirm same-day availability</li>
                            <li><strong>Choose 1, 3, or 7 days</strong></li>
                            <li><strong>We deliver to your driveway or yard</strong></li>
                            <li><strong>We pick up and haul it away</strong> — nothing left for you to do</li>
                        </ol>

                        <div className={styles.cta}>
                            <h3>Ready to Book Your Florence Dumpster?</h3>
                            <p>Visit our <Link href="/service-areas/florence">Florence Dumpster Rental</Link> page, or call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink>. Serving Florence, MS 39073 and 39218.</p>
                            <a href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Book Dumpster Rental in Florence
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
