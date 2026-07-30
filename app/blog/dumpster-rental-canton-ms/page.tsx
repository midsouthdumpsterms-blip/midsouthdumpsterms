import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, generateCityGeoSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/blog/dumpster-rental-canton-ms' },
    title: 'Dumpster Rental in Canton, MS | Same-Day Roll-Off Service | Mid South',
    description:
        'Need a dumpster rental in Canton, MS? Mid South Dumpster Rentals delivers 10, 15, and 20-yard roll-off dumpsters to Harvey Crossing, Deerfield, Panther Creek, Hampton Hills, and all of zip code 39046. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Dumpster Rental in Canton, MS | Same-Day Roll-Off Service',
        'Need a dumpster rental in Canton, MS? Mid South delivers roll-off containers to Harvey Crossing, Deerfield, Panther Creek, Hampton Hills, and all of 39046.',
        '2026-03-27',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Dumpster Rental in Canton MS', url: 'https://midsouthdumpsterms.com/blog/dumpster-rental-canton-ms' },
    ])
    // Canton, MS — 32.6126° N, 90.0368° W
    const geoSchema = generateCityGeoSchema('Canton', 32.6126, -90.0368, ['39046'])

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
                        <h1>Dumpster Rental in Canton, MS — Roll-Off Container Service for Madison County&apos;s Historic City</h1>
                        <p className={styles.meta}>Published March 27, 2026</p>
                    </header>
                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Canton is one of Central Mississippi&apos;s most charming and historically rich communities, known for its courthouse square and growing residential neighborhoods. Mid South Dumpster Rentals delivers roll-off containers to Canton (zip code 39046) for everything from estate cleanouts in older homes to debris removal on new construction sites in Panther Creek and The Links of Madison.
                        </p>

                        <h2>Neighborhoods We Serve in Canton</h2>
                        <ul>
                            <li><strong>Harvey Crossing</strong> — active residential community with renovation and cleanout demand</li>
                            <li><strong>Deerfield</strong> — established neighborhood popular for estate sales and garage cleanouts</li>
                            <li><strong>Panther Creek</strong> — newer subdivision with active new construction and addition projects</li>
                            <li><strong>Hampton Hills</strong> — growing community with consistent roofing and remodel activity</li>
                            <li><strong>The Links of Madison</strong> — upscale neighborhood with frequent large-scale renovation needs</li>
                            <li><strong>Bainbridge</strong> — established area with steady home improvement and cleanout demand</li>
                        </ul>
                        <p>All of zip code <strong>39046</strong> is within our service area. GPS center: 32.6126° N, 90.0368° W.</p>

                        <h2>Dumpster Rental Pricing for Canton, MS</h2>
                        <table className={styles.table}>
                            <thead><tr><th>Size</th><th>1 Day</th><th>3 Day</th><th>7 Day</th><th>Included Weight</th></tr></thead>
                            <tbody>
                                <tr><td>10 Yard</td><td>$349</td><td>$379</td><td>$399</td><td>1 ton</td></tr>
                                <tr><td>15 Yard</td><td>$399</td><td>$429</td><td>$449</td><td>2 tons</td></tr>
                                <tr><td>20 Yard</td><td>$449</td><td>$479</td><td>$499</td><td>3 tons</td></tr>
                            </tbody>
                        </table>
                        <p>Overage on 10 and 15-yard containers: $55/ton (prorated). 20-yard containers: strict 3-ton cap, no overage.</p>

                        <h2>What Canton Residents and Contractors Use Dumpsters For</h2>
                        <ul>
                            <li><strong>Historic home renovations</strong> — Canton&apos;s older homes near the square often require full interior gutting</li>
                            <li><strong>Estate cleanouts</strong> — longtime Canton families downsizing or settling estates</li>
                            <li><strong>Roofing projects</strong> — storm damage is common throughout Madison County</li>
                            <li><strong>Commercial cleanouts</strong> — downtown Canton businesses renovating older storefronts</li>
                            <li><strong>New construction debris</strong> — active development in Panther Creek and Hampton Hills</li>
                            <li><strong>Yard and land clearing</strong> — rural properties along Madison County roads</li>
                        </ul>

                        <h2>How to Book Your Canton Dumpster Rental</h2>
                        <ol>
                            <li><strong>Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink></strong> or book online</li>
                            <li><strong>Give us your Canton address</strong> — we&apos;ll confirm delivery availability</li>
                            <li><strong>Choose your rental length</strong> — 1, 3, or 7 days</li>
                            <li><strong>We deliver to your driveway or job site</strong></li>
                            <li><strong>We pick up when you call</strong> — fully handled</li>
                        </ol>

                        <div className={styles.cta}>
                            <h3>Ready to Book Your Canton Dumpster?</h3>
                            <p>Visit our <Link href="/service-areas/canton">Canton Dumpster Rental</Link> page, or call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink>. Serving all of Canton, MS 39046.</p>
                            <button type="button" className="btn btn-primary survcart-embed-presenter">Book Now</button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
