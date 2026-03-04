import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'

export const metadata: Metadata = {
    title: 'Dumpster Rental for Roofing Contractors in Jackson MS | Mid South',
    description:
        'Roofing contractors in Jackson and Central Mississippi — get roll-off dumpsters delivered same-day or next-day for shingles, decking, and roofing debris. Reliable, fast, and locally owned. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Dumpster Rental for Roofing Contractors in Jackson MS',
        'Roofing contractors in Jackson and Central Mississippi — get roll-off dumpsters delivered same-day or next-day for shingles, decking, and roofing debris.',
        '2026-02-17',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Dumpster Rental for Roofing Contractors', url: 'https://midsouthdumpsterms.com/blog/roofing-contractor-dumpster-rental-jackson-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container container-narrow">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Contractors</span>
                        <h1>Dumpster Rental for Roofing Contractors in Jackson, MS</h1>
                        <p className={styles.meta}>Published February 17, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            If you&apos;re a roofing contractor working in Central Mississippi, you need a dumpster provider who delivers on time, picks up without hassle, and doesn&apos;t get in the way of your job. Mid South Dumpster Rentals offers same-day and next-day roll-off dumpster delivery throughout Jackson, Brandon, Madison, Ridgeland, and surrounding areas — so your crew can stay focused on the roof, not the cleanup.
                        </p>

                        <h2>Why Roofers Trust Mid South Dumpster Rentals</h2>
                        <ul>
                            <li><strong>Same-day and next-day delivery</strong> — we know roofing jobs move fast and plans change</li>
                            <li><strong>Reliable pickup scheduling</strong> — we&apos;ll coordinate around your job timeline</li>
                            <li><strong>Transparent pricing, no surprises</strong> — flat-rate rentals with no hidden fuel fees</li>
                            <li><strong>Locally owned and operated</strong> — you&apos;re calling a real person in Jackson, not a call center</li>
                            <li><strong>7-day availability</strong> — we deliver and pick up 7 days a week, 7AM–7PM</li>
                        </ul>

                        <h2>What Size Dumpster Do You Need for Roofing?</h2>
                        <p>
                            Roofing debris — especially asphalt shingles — is heavy. Here&apos;s how to think about sizing:
                        </p>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Roof Size</th>
                                    <th>Recommended Dumpster</th>
                                    <th>Included Weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Up to 1,500 sq ft (single layer shingles)</td>
                                    <td>15 Yard</td>
                                    <td>2 tons</td>
                                </tr>
                                <tr>
                                    <td>1,500–2,500 sq ft or multiple layers</td>
                                    <td>20 Yard</td>
                                    <td>3 tons</td>
                                </tr>
                                <tr>
                                    <td>Large commercial or heavy tile roof</td>
                                    <td>20 Yard + overage plan</td>
                                    <td>3 tons max</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            <strong>Important weight note:</strong> Shingles are one of the heaviest types of roofing debris. Our 20-yard container has a strict 3-ton (6,000 lb) maximum with no overage allowed — plan accordingly. When in doubt, load by weight, not by volume. Call us at <a href="tel:6013167891">601-316-7891</a> and we&apos;ll help you plan the right setup for your job.
                        </p>

                        <h2>What Roofing Materials We Accept</h2>
                        <ul>
                            <li>Asphalt shingles (3-tab and architectural)</li>
                            <li>Wood shake and cedar shingles</li>
                            <li>Roofing felt and underlayment</li>
                            <li>Plywood decking and OSB</li>
                            <li>Flashing and metal drip edge</li>
                            <li>Gutters and downspouts</li>
                            <li>Fascia and soffit boards</li>
                        </ul>
                        <p>
                            <strong>We cannot accept:</strong> Asbestos-containing shingles (common in homes built before 1980) or roofing materials mixed with hazardous waste. If you&apos;re working on an older home, identify the shingle type before loading.
                        </p>

                        <h2>Contractor-Friendly Rental Options</h2>
                        <p>We offer 1-day, 3-day, and 7-day rentals to match your project timeline:</p>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Container</th>
                                    <th>1 Day</th>
                                    <th>3 Day</th>
                                    <th>7 Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>15 Yard (2 tons included)</td>
                                    <td>$399</td>
                                    <td>$429</td>
                                    <td>$449</td>
                                </tr>
                                <tr>
                                    <td>20 Yard (3 tons included)</td>
                                    <td>$449</td>
                                    <td>$479</td>
                                    <td>$499</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Need the dumpster for longer? Extended rentals are available at $50/day after your initial period.</p>

                        <h2>Tips for Efficient Roofing Job Site Cleanup</h2>
                        <ul>
                            <li><strong>Position the dumpster close to the roofline</strong> so shingles can be slid directly in rather than carried down a ladder.</li>
                            <li><strong>Load heavy materials on the bottom.</strong> Shingles first, lighter materials on top.</li>
                            <li><strong>Don&apos;t mix roofing debris with other job site waste</strong> unless it&apos;s also acceptable — keep things clean to avoid refused load fees.</li>
                            <li><strong>Check the weight often.</strong> Shingles are deceptively heavy. A 15-yard container loaded entirely with shingles can exceed the weight limit before it looks full.</li>
                        </ul>

                        <h2>Serving Roofing Crews Across Central Mississippi</h2>
                        <p>We deliver to job sites throughout the metro area and beyond: Jackson, Brandon, Madison, Ridgeland, Clinton, Flowood, Pearl, Byram, Richland, Gluckstadt, Flora, Florence, Canton, and Terry.</p>
                        <p>Need a dumpster at a job site in a city not listed? Give us a call — we&apos;ll let you know if we can make it work.</p>

                        <div className={styles.cta}>
                            <h3>Ready to Order for Your Next Roofing Job?</h3>
                            <p>Book online or call <a href="tel:6013167891">601-316-7891</a> — we&apos;ll get your container there fast.</p>
                            <a
                                href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Book Contractor Dumpster
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
