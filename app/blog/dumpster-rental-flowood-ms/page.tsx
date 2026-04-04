import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, generateCityGeoSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Dumpster Rental in Flowood, MS | Same-Day Roll-Off Service | Mid South',
    description:
        'Need a dumpster rental in Flowood, MS? Mid South Dumpster Rentals delivers 10, 15, and 20-yard roll-off dumpsters to Laurelwood, Traditions, Kensington, Aubry Hills, and all of zip code 39232. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Dumpster Rental in Flowood, MS | Same-Day Roll-Off Service',
        'Need a dumpster rental in Flowood, MS? Mid South delivers roll-off containers to Traditions, Kensington, Laurelwood, Aubry Hills, and all of 39232.',
        '2026-03-24',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Dumpster Rental in Flowood MS', url: 'https://midsouthdumpsterms.com/blog/dumpster-rental-flowood-ms' },
    ])

    // Flowood, MS — 32.3354° N, 90.0543° W
    const geoSchema = generateCityGeoSchema('Flowood', 32.3354, -90.0543, ['39232'])

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
                        <h1>Dumpster Rental in Flowood, MS — Fast Roll-Off Service for Rankin County&apos;s Newest City</h1>
                        <p className={styles.meta}>Published March 24, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Flowood is one of the fastest-growing cities in Mississippi — and with new development comes constant demand for debris removal. From luxury neighborhoods like Kensington and Traditions to established communities like Laurelwood, Mid South Dumpster Rentals serves all of Flowood (zip code 39232) with same-day roll-off dumpster delivery at flat-rate prices.
                        </p>

                        <h2>Neighborhoods We Deliver To in Flowood</h2>
                        <p>We cover every neighborhood in Flowood (39232, located at 32.3354° N, 90.0543° W), including:</p>
                        <ul>
                            <li><strong>Laurelwood &amp; Laurelwood Estates</strong> — one of Flowood&apos;s older established communities, popular for renovations and whole-home cleanouts</li>
                            <li><strong>Traditions</strong> — master-planned community with ongoing new construction and remodel activity</li>
                            <li><strong>Latter Rayne</strong> — newer neighborhood with high demand for landscaping and addition debris</li>
                            <li><strong>Lineage Lake</strong> — growing community perfect for contractor debris and roofing tear-offs</li>
                            <li><strong>Kensington</strong> — high-end executive subdivision with frequent large-scale renovation projects</li>
                            <li><strong>Lakeland East</strong> — active residential market near the Lakeland Drive corridor</li>
                            <li><strong>Aubry Hills</strong> — newer development with consistent cleanout and landscaping needs</li>
                        </ul>

                        <h2>Dumpster Rental Pricing for Flowood, MS</h2>
                        <table className={styles.table}>
                            <thead>
                                <tr><th>Size</th><th>1 Day</th><th>3 Day</th><th>7 Day</th><th>Included Weight</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>10 Yard</td><td>$349</td><td>$379</td><td>$399</td><td>1 ton</td></tr>
                                <tr><td>15 Yard</td><td>$399</td><td>$429</td><td>$449</td><td>2 tons</td></tr>
                                <tr><td>20 Yard</td><td>$449</td><td>$479</td><td>$499</td><td>3 tons</td></tr>
                            </tbody>
                        </table>
                        <p>Overage on 10 and 15-yard containers: $55/ton (prorated). 20-yard containers have a strict 3-ton maximum.</p>

                        <h2>Why Flowood Homeowners and Contractors Choose Mid South</h2>
                        <ul>
                            <li><strong>Same-day delivery</strong> — Flowood is minutes from our operations base</li>
                            <li><strong>Flat-rate pricing</strong> — no fuel surcharges or hidden fees</li>
                            <li><strong>Driveway protection</strong> — we use boards under the container to protect your surface</li>
                            <li><strong>Locally owned</strong> — a Central MS business, not a national chain</li>
                            <li><strong>7 days a week</strong> — including Saturday delivery for weekend project kickoffs</li>
                        </ul>

                        <h2>What Flowood Residents Rent Dumpsters For</h2>
                        <ul>
                            <li><strong>New construction debris</strong> — Flowood&apos;s rapid growth means active building sites citywide</li>
                            <li><strong>Kitchen and bathroom remodels</strong> — common in Laurelwood and Traditions homes</li>
                            <li><strong>Roofing tear-offs</strong> — storm season generates consistent roofing demand in Rankin County</li>
                            <li><strong>Whole-home cleanouts</strong> — estate sales and pre-listing purges</li>
                            <li><strong>Landscaping debris</strong> — large Flowood lots generate substantial yard waste</li>
                            <li><strong>Moving junk removal</strong> — items that won&apos;t make the move to the new home</li>
                        </ul>

                        <h2>How to Get Your Flowood Dumpster Delivered</h2>
                        <ol>
                            <li><strong>Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink></strong> or book online — 2 minutes max</li>
                            <li><strong>Give us your address</strong> — we&apos;ll confirm same-day availability for Flowood</li>
                            <li><strong>We deliver and place it</strong> — driveway, side yard, or job site</li>
                            <li><strong>Fill it at your pace</strong> — 1, 3, or 7-day rental options</li>
                            <li><strong>We pick it up and haul it away</strong> — you never touch it again</li>
                        </ol>

                        <div className={styles.cta}>
                            <h3>Ready to Book Your Flowood Dumpster?</h3>
                            <p>Visit our <Link href="/service-areas/flowood">Flowood Dumpster Rental</Link> page, or call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink>. Same-day delivery often available in 39232.</p>
                            <button type="button" className="btn btn-primary survcart-embed-presenter">Book Now</button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
