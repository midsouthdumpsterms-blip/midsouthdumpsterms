import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'

export const metadata: Metadata = {
    title: 'Dumpster Rental in Brandon, MS | Same-Day Roll-Off Service | Mid South',
    description:
        'Looking for dumpster rental in Brandon, MS? Mid South Dumpster Rentals delivers 10, 15, and 20-yard roll-off dumpsters to Brandon and all of Rankin County. Same-day delivery available. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Dumpster Rental in Brandon, MS | Same-Day Roll-Off Service',
        'Looking for dumpster rental in Brandon, MS? Mid South Dumpster Rentals delivers 10, 15, and 20-yard roll-off dumpsters to Brandon and all of Rankin County.',
        '2026-01-27',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Dumpster Rental in Brandon MS', url: 'https://midsouthdumpsterms.com/blog/dumpster-rental-brandon-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container container-narrow">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Local Guides</span>
                        <h1>Dumpster Rental in Brandon, MS — Fast, Local, and Fairly Priced</h1>
                        <p className={styles.meta}>Published January 27, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Brandon is one of the fastest-growing communities in Central Mississippi, and with that growth comes a lot of renovation, cleanout, and construction work. Mid South Dumpster Rentals is based right here in the metro area and delivers roll-off dumpsters to Brandon and all of Rankin County — often the same day you call.
                        </p>

                        <h2>Why Brandon Residents and Contractors Choose Mid South</h2>
                        <ul>
                            <li><strong>We know the area</strong> — we&apos;re a locally owned Jackson-area business, not a national chain</li>
                            <li><strong>Fast delivery</strong> — Brandon is a short drive from our operations base; we can often deliver same-day</li>
                            <li><strong>Transparent pricing</strong> — flat-rate rental fees, no fuel surcharges or surprise add-ons</li>
                            <li><strong>7AM–7PM, 7 days a week</strong> — we work when you work</li>
                            <li><strong>Real customer service</strong> — you call and reach a real person every time</li>
                        </ul>

                        <h2>Dumpster Rental Pricing for Brandon, MS</h2>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Size</th>
                                    <th>1 Day</th>
                                    <th>3 Day</th>
                                    <th>7 Day</th>
                                    <th>Included Weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10 Yard</td>
                                    <td>$349</td>
                                    <td>$379</td>
                                    <td>$399</td>
                                    <td>1 ton</td>
                                </tr>
                                <tr>
                                    <td>15 Yard</td>
                                    <td>$399</td>
                                    <td>$429</td>
                                    <td>$449</td>
                                    <td>2 tons</td>
                                </tr>
                                <tr>
                                    <td>20 Yard</td>
                                    <td>$449</td>
                                    <td>$479</td>
                                    <td>$499</td>
                                    <td>3 tons</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Overage on 10 and 15-yard containers: $55/ton (prorated). 20-yard containers have a strict 3-ton maximum with no overage allowed.</p>

                        <h2>What Are People in Brandon Renting Dumpsters For?</h2>
                        <p>Brandon is a mix of established neighborhoods and newer developments. The most common dumpster uses we see in Brandon include:</p>
                        <ul>
                            <li><strong>Home renovations</strong> — kitchen and bathroom remodels are huge in Brandon&apos;s growing housing market</li>
                            <li><strong>Roofing projects</strong> — frequent in Rankin County due to storm activity</li>
                            <li><strong>Estate and house cleanouts</strong> — clearing out older homes in established Brandon neighborhoods</li>
                            <li><strong>Garage and attic cleanouts</strong> — accumulation cleared out before listing a home for sale</li>
                            <li><strong>New construction debris</strong> — the Brandon area has active residential development</li>
                            <li><strong>Moving cleanouts</strong> — people dumping what they won&apos;t take with them before a move</li>
                        </ul>

                        <h2>How to Get a Dumpster Delivered to Brandon</h2>
                        <ol>
                            <li><strong>Call us at <a href="tel:6013167891">601-316-7891</a></strong> or book online — takes about 2 minutes</li>
                            <li><strong>Tell us your project</strong> — we&apos;ll recommend the right size if you&apos;re not sure</li>
                            <li><strong>Choose your rental period</strong> — 1, 3, or 7 days</li>
                            <li><strong>We deliver and place your container</strong> — driveway, yard, or job site</li>
                            <li><strong>Fill it up at your pace</strong> — then call us when you&apos;re done</li>
                        </ol>

                        <h2>Driveway Delivery in Brandon — What to Know</h2>
                        <p>Most of our Brandon customers have us deliver to their driveway. A few things to keep in mind:</p>
                        <ul>
                            <li>Make sure there&apos;s enough clearance — our trucks need about 60 feet of straight-line access</li>
                            <li>Don&apos;t park vehicles in the driveway before delivery day</li>
                            <li>Let us know if there are overhead power lines or tree branches at the delivery spot</li>
                            <li>If you live in an HOA community, check whether roll-off containers require approval</li>
                        </ul>

                        <h2>Also Serving the Rest of Rankin County</h2>
                        <p>
                            We don&apos;t just serve Brandon — we deliver throughout Rankin County including Flowood, Pearl, Richland, and Pelahatchie, as well as across all of Central Mississippi. If you&apos;re not sure whether we cover your area, just call and we&apos;ll let you know.
                        </p>

                        <div className={styles.cta}>
                            <h3>Ready to Book Your Brandon Dumpster?</h3>
                            <p>Call <a href="tel:6013167891">601-316-7891</a> or book online. Same-day delivery often available in Brandon.</p>
                            <a
                                href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Book Dumpster Rental in Brandon
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
