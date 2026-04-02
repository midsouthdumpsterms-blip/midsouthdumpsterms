import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, generateCityGeoSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Dumpster Rental in Ridgeland, MS | Same-Day Roll-Off Service | Mid South',
    description:
        'Looking for dumpster rental in Ridgeland, MS? Mid South delivers 10, 15, and 20-yard roll-off dumpsters to Bridgewater, Lake Harbor, Old Town, The Township, and all of zip code 39157. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Dumpster Rental in Ridgeland, MS | Same-Day Roll-Off Service',
        'Looking for dumpster rental in Ridgeland, MS? Mid South Dumpster Rentals delivers roll-off containers to Bridgewater, Lake Harbor, The Township, and all of 39157.',
        '2026-03-23',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Dumpster Rental in Ridgeland MS', url: 'https://midsouthdumpsterms.com/blog/dumpster-rental-ridgeland-ms' },
    ])

    // Ridgeland, MS — 32.4282° N, 90.1326° W
    const geoSchema = generateCityGeoSchema('Ridgeland', 32.4282, -90.1326, ['39157'])

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
                        <h1>Dumpster Rental in Ridgeland, MS — Roll-Off Containers for Madison County&apos;s Premier City</h1>
                        <p className={styles.meta}>Published March 23, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Ridgeland is one of the most affluent and active real estate markets in Central Mississippi. From large estate homes near Lake Harbor to townhomes in The Township, renovation and cleanout activity runs year-round. Mid South Dumpster Rentals serves all of Ridgeland (zip code 39157) with flat-rate roll-off dumpster delivery — often available the same day you call.
                        </p>

                        <h2>Neighborhoods We Deliver To in Ridgeland</h2>
                        <p>We deliver dumpsters throughout Ridgeland (39157), including:</p>
                        <ul>
                            <li><strong>Bridgewater</strong> — established executive neighborhood with frequent renovation and addition projects</li>
                            <li><strong>Lake Harbor</strong> — high-end lakeside homes often undertake major remodels</li>
                            <li><strong>Old Town Ridgeland</strong> — historic district with estate cleanouts and structural renovation needs</li>
                            <li><strong>The Township</strong> — mixed residential and commercial development with active construction debris needs</li>
                            <li><strong>Dinsmor</strong> — active family neighborhood with regular garage and spring cleanout demand</li>
                        </ul>
                        <p>All of zip code <strong>39157</strong> is covered. GPS center: 32.4282° N, 90.1326° W.</p>

                        <h2>Dumpster Rental Pricing for Ridgeland, MS</h2>
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
                        <p>Overage on 10 and 15-yard containers: $55/ton (prorated). 20-yard containers have a strict 3-ton limit.</p>

                        <h2>Common Projects in Ridgeland That Require a Dumpster</h2>
                        <ul>
                            <li><strong>Kitchen and bathroom remodels</strong> — especially in older Lake Harbor and Bridgewater homes</li>
                            <li><strong>Roofing projects</strong> — Ridgeland homes see the same severe weather as the rest of Central MS</li>
                            <li><strong>Estate and downsizing cleanouts</strong> — longtime Ridgeland residents downsizing to smaller homes</li>
                            <li><strong>Landscaping and yard debris</strong> — large lots mean large amounts of organic waste</li>
                            <li><strong>HOA flip renovations</strong> — investment properties being refreshed for resale</li>
                            <li><strong>Commercial renovation debris</strong> — The Township&apos;s mixed-use development generates contractor waste</li>
                        </ul>

                        <h2>Ridgeland HOA Considerations</h2>
                        <p>
                            Many Ridgeland neighborhoods have active HOAs. If you live in Bridgewater, Lake Harbor, or The Township, check your HOA rules before scheduling delivery. Most associations allow roll-off containers on private driveways for a limited duration. We&apos;ll work around any placement restrictions — just let us know when you book.
                        </p>

                        <h2>How to Get a Dumpster Delivered in Ridgeland</h2>
                        <ol>
                            <li><strong>Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink></strong> or book online in 2 minutes</li>
                            <li><strong>Tell us your address and project type</strong> — we&apos;ll confirm same-day availability</li>
                            <li><strong>Choose your rental period</strong> — 1, 3, or 7 days</li>
                            <li><strong>We deliver and place the container</strong> — driveway, yard, or job site</li>
                            <li><strong>Call for pickup</strong> when you&apos;re done — we handle the rest</li>
                        </ol>

                        <div className={styles.cta}>
                            <h3>Ready to Book Your Ridgeland Dumpster?</h3>
                            <p>See our <Link href="/service-areas/ridgeland">Ridgeland Dumpster Rental</Link> page, or call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink>. Same-day delivery often available in 39157.</p>
                            <a href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Book Dumpster Rental in Ridgeland
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
