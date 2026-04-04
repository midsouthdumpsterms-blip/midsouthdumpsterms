import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, generateCityGeoSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Dumpster Rental in Richland, MS | Same-Day Roll-Off Service | Mid South',
    description:
        'Need a dumpster rental in Richland, MS? Mid South Dumpster Rentals delivers 10, 15, and 20-yard roll-off dumpsters to Bluebird, Bradford Place, Monterey Woods, Richland East, and zip codes 39204, 39207, 39218. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Dumpster Rental in Richland, MS | Same-Day Roll-Off Service',
        'Need a dumpster rental in Richland, MS? Mid South delivers roll-off containers to Bluebird, Bradford Place, Monterey Woods, and all Richland zip codes.',
        '2026-03-30',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Dumpster Rental in Richland MS', url: 'https://midsouthdumpsterms.com/blog/dumpster-rental-richland-ms' },
    ])
    // Richland, MS — 32.2373° N, 90.1590° W
    const geoSchema = generateCityGeoSchema('Richland', 32.2373, -90.1590, ['39204', '39207', '39218'])

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
                        <h1>Dumpster Rental in Richland, MS — Affordable Roll-Off Service for Rankin County</h1>
                        <p className={styles.meta}>Published March 30, 2026</p>
                    </header>
                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Richland sits at the crossroads of Rankin and Hinds counties, just minutes south of Jackson. It&apos;s a working community with a mix of residential neighborhoods and commercial corridors — and a consistent demand for dumpster rentals. Mid South Dumpster Rentals delivers roll-off containers throughout Richland (zip codes 39204, 39207, and 39218) with flat-rate pricing and same-day availability.
                        </p>

                        <h2>Neighborhoods We Serve in Richland</h2>
                        <ul>
                            <li><strong>Bluebird</strong> — established residential neighborhood with regular renovation and cleanout demand</li>
                            <li><strong>Bradford Place</strong> — active community popular for pre-sale cleanouts and home remodels</li>
                            <li><strong>Bullock Forrest</strong> — older area with frequent estate cleanout and junk removal projects</li>
                            <li><strong>Monterey Woods</strong> — family neighborhood with consistent home improvement and debris removal</li>
                            <li><strong>Richland East</strong> — growing area near the I-20 corridor with active construction</li>
                            <li><strong>Southwind</strong> — residential community with regular roofing and renovation activity</li>
                        </ul>
                        <p>We serve zip codes <strong>39204, 39207, and 39218</strong>. GPS center: 32.2373° N, 90.1590° W.</p>

                        <h2>Dumpster Rental Pricing for Richland, MS</h2>
                        <table className={styles.table}>
                            <thead><tr><th>Size</th><th>1 Day</th><th>3 Day</th><th>7 Day</th><th>Included Weight</th></tr></thead>
                            <tbody>
                                <tr><td>10 Yard</td><td>$349</td><td>$379</td><td>$399</td><td>1 ton</td></tr>
                                <tr><td>15 Yard</td><td>$399</td><td>$429</td><td>$449</td><td>2 tons</td></tr>
                                <tr><td>20 Yard</td><td>$449</td><td>$479</td><td>$499</td><td>3 tons</td></tr>
                            </tbody>
                        </table>
                        <p>Overage on 10 and 15-yard containers: $55/ton (prorated). 20-yard containers: strict 3-ton cap, no overage.</p>

                        <h2>What Richland Residents and Contractors Use Dumpsters For</h2>
                        <ul>
                            <li><strong>Home renovations</strong> — kitchen remodels, flooring tear-outs, and bathroom updates throughout Richland</li>
                            <li><strong>Roofing debris removal</strong> — storm damage repairs are common in this part of Rankin County</li>
                            <li><strong>Estate and whole-home cleanouts</strong> — clearing properties in Bradford Place and Bullock Forrest</li>
                            <li><strong>Commercial cleanouts</strong> — businesses along the US-49 and I-20 corridors renovating older spaces</li>
                            <li><strong>Moving junk removal</strong> — purging unwanted items before or after a move</li>
                            <li><strong>Construction debris</strong> — new builds and additions in Richland East</li>
                        </ul>

                        <h2>How to Book Your Richland Dumpster Rental</h2>
                        <ol>
                            <li><strong>Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink></strong> or book online</li>
                            <li><strong>Give us your Richland address</strong> — we&apos;ll confirm same-day availability</li>
                            <li><strong>Choose 1, 3, or 7 days</strong></li>
                            <li><strong>We deliver and place the container</strong></li>
                            <li><strong>We pick up when you&apos;re done</strong></li>
                        </ol>

                        <div className={styles.cta}>
                            <h3>Ready to Book Your Richland Dumpster?</h3>
                            <p>Visit our <Link href="/service-areas/richland">Richland Dumpster Rental</Link> page, or call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink>. Serving Richland, MS 39204, 39207, and 39218.</p>
                            <button type="button" className="btn btn-primary survcart-embed-presenter">Book Now</button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
