import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, generateCityGeoSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Dumpster Rental in Terry, MS | Same-Day Roll-Off Service | Mid South',
    description:
        'Need a dumpster rental in Terry, MS? Mid South Dumpster Rentals delivers 10, 15, and 20-yard roll-off dumpsters to Terry Park, South Fork Estates, Cedarstone, and all of zip code 39170. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Dumpster Rental in Terry, MS | Same-Day Roll-Off Service',
        'Need a dumpster rental in Terry, MS? Mid South delivers roll-off containers to Terry Park, South Fork Estates, Cedarstone, and all of 39170.',
        '2026-03-26',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Dumpster Rental in Terry MS', url: 'https://midsouthdumpsterms.com/blog/dumpster-rental-terry-ms' },
    ])
    // Terry, MS — 32.0887° N, 90.2898° W
    const geoSchema = generateCityGeoSchema('Terry', 32.0887, -90.2898, ['39170'])

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
                        <h1>Dumpster Rental in Terry, MS — Roll-Off Container Delivery to Hinds County&apos;s Quiet Community</h1>
                        <p className={styles.meta}>Published March 26, 2026</p>
                    </header>
                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Terry is a tight-knit Hinds County community south of Jackson, where homeowners and contractors regularly need reliable dumpster service without the big-city hassle. Mid South Dumpster Rentals delivers roll-off containers throughout Terry (zip code 39170) — same day when possible, always at flat-rate pricing with no hidden fees.
                        </p>

                        <h2>Neighborhoods We Serve in Terry</h2>
                        <ul>
                            <li><strong>Terry Park</strong> — central neighborhood with steady home renovation and cleanout demand</li>
                            <li><strong>South Fork Estates</strong> — growing subdivision with regular roofing and addition projects</li>
                            <li><strong>Cedarstone</strong> — established community ideal for estate cleanouts and whole-home junk removal</li>
                            <li><strong>Downtown Terry</strong> — older buildings and commercial properties with demolition and renovation needs</li>
                        </ul>
                        <p>All of zip code <strong>39170</strong> is within our service area. GPS center: 32.0887° N, 90.2898° W.</p>

                        <h2>Dumpster Rental Pricing for Terry, MS</h2>
                        <table className={styles.table}>
                            <thead><tr><th>Size</th><th>1 Day</th><th>3 Day</th><th>7 Day</th><th>Included Weight</th></tr></thead>
                            <tbody>
                                <tr><td>10 Yard</td><td>$349</td><td>$379</td><td>$399</td><td>1 ton</td></tr>
                                <tr><td>15 Yard</td><td>$399</td><td>$429</td><td>$449</td><td>2 tons</td></tr>
                                <tr><td>20 Yard</td><td>$449</td><td>$479</td><td>$499</td><td>3 tons</td></tr>
                            </tbody>
                        </table>
                        <p>Overage on 10 and 15-yard containers: $55/ton (prorated). 20-yard containers: strict 3-ton cap, no overage.</p>

                        <h2>What Terry Residents Rent Dumpsters For</h2>
                        <ul>
                            <li><strong>Estate cleanouts</strong> — clearing longtime family homes in Terry Park and Cedarstone</li>
                            <li><strong>Roofing projects</strong> — shingle tear-offs after Hinds County storm seasons</li>
                            <li><strong>Home renovations</strong> — flooring, drywall, and kitchen remodel debris</li>
                            <li><strong>Land clearing debris</strong> — brush, stumps, and vegetation from rural properties</li>
                            <li><strong>Moving cleanouts</strong> — items left behind before or after a move</li>
                            <li><strong>Commercial cleanouts</strong> — Downtown Terry businesses refreshing older spaces</li>
                        </ul>

                        <h2>How to Book Your Terry Dumpster Rental</h2>
                        <ol>
                            <li><strong>Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink></strong> or book online</li>
                            <li><strong>Give us your Terry address</strong> — we&apos;ll confirm availability</li>
                            <li><strong>Choose 1, 3, or 7 days</strong> — whatever your project needs</li>
                            <li><strong>We deliver and place the container</strong> — driveway or yard</li>
                            <li><strong>We pick up when you&apos;re done</strong> — no hassle</li>
                        </ol>

                        <div className={styles.cta}>
                            <h3>Ready to Book Your Terry Dumpster?</h3>
                            <p>Visit our <Link href="/service-areas/terry">Terry Dumpster Rental</Link> page, or call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink>. Same-day delivery available in 39170.</p>
                            <button type="button" className="btn btn-primary survcart-embed-presenter">Book Now</button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
