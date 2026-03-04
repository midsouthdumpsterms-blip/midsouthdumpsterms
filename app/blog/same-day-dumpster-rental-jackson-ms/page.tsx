import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'

export const metadata: Metadata = {
    title: 'Same-Day Dumpster Rental in Jackson, MS | Mid South Dumpster Rentals',
    description:
        'Need a dumpster today in Jackson, MS? Mid South Dumpster Rentals offers same-day roll-off dumpster delivery across Central Mississippi. Call 601-316-7891 — we deliver 7 days a week.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Same-Day Dumpster Rental in Jackson, MS',
        'Need a dumpster today in Jackson, MS? Mid South Dumpster Rentals offers same-day roll-off dumpster delivery across Central Mississippi.',
        '2026-03-03',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Same-Day Dumpster Rental Jackson MS', url: 'https://midsouthdumpsterms.com/blog/same-day-dumpster-rental-jackson-ms' },
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
                        <h1>Same-Day Dumpster Rental in Jackson, MS — We Deliver Today</h1>
                        <p className={styles.meta}>Published March 3, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Sometimes a project can&apos;t wait. Whether it&apos;s an unexpected cleanout, a contractor ready to start work, or storm damage that needs addressing today — Mid South Dumpster Rentals offers same-day dumpster delivery across Jackson, Brandon, Madison, Ridgeland, and all of Central Mississippi. Call before noon for the best chance at same-day delivery.
                        </p>

                        <h2>How Same-Day Dumpster Rental Works</h2>
                        <ol>
                            <li><strong>Call us at <a href="tel:6013167891">601-316-7891</a></strong> as early in the day as possible — the earlier you call, the better your chances of same-day delivery</li>
                            <li><strong>Give us your address and project details</strong> — we&apos;ll confirm a delivery window</li>
                            <li><strong>We deliver and place the container</strong> — you&apos;ll know exactly when to expect us</li>
                            <li><strong>Start loading immediately</strong> — no waiting around</li>
                            <li><strong>Call for pickup when you&apos;re done</strong> — we&apos;ll schedule your haul-out</li>
                        </ol>

                        <h2>When People Need a Dumpster the Same Day</h2>
                        <p>We get same-day requests every week. Common situations include:</p>
                        <ul>
                            <li><strong>Storm damage cleanup</strong> — downed trees, scattered debris after severe weather</li>
                            <li><strong>Contractor job starts</strong> — roofing or renovation crew arriving and needing debris hauling on day one</li>
                            <li><strong>Unexpected estate situations</strong> — family members arriving to clean out a property need to be productive right away</li>
                            <li><strong>Moving day</strong> — last-minute decision to dump what won&apos;t fit in the moving truck</li>
                            <li><strong>Insurance remediation</strong> — flood or fire damage that requires fast debris removal</li>
                        </ul>

                        <h2>Same-Day Service Area</h2>
                        <p>We deliver same-day to properties throughout Central Mississippi, including:</p>
                        <ul>
                            <li>Jackson, MS and all Jackson metro neighborhoods</li>
                            <li>Brandon, Flowood, and Pearl (Rankin County)</li>
                            <li>Ridgeland, Madison, and Gluckstadt (Madison County)</li>
                            <li>Clinton and Byram (Hinds County)</li>
                            <li>Richland, Terry, Flora, Florence, and Canton</li>
                        </ul>

                        <h2>Tips to Secure Same-Day Delivery</h2>
                        <ul>
                            <li><strong>Call early.</strong> Same-day slots fill up. Calling at 7AM gives you the best shot. Wait until afternoon and availability depends on our schedule.</li>
                            <li><strong>Have a spot ready.</strong> Know where you want the container — driveway, yard, or job site. If we can place it quickly, the whole process goes faster.</li>
                            <li><strong>Have your credit card handy.</strong> Payment is taken at time of booking so we can process your order and get a driver dispatched quickly.</li>
                            <li><strong>Call instead of booking online</strong> for same-day requests — we can confirm availability and ETA in real time over the phone.</li>
                        </ul>

                        <h2>Pricing — No Rush Fees</h2>
                        <p>We don&apos;t charge extra for same-day delivery. Our flat-rate pricing applies regardless of when you call:</p>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Size</th>
                                    <th>1-Day Rate</th>
                                    <th>3-Day Rate</th>
                                    <th>7-Day Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10 Yard</td>
                                    <td>$349</td>
                                    <td>$379</td>
                                    <td>$399</td>
                                </tr>
                                <tr>
                                    <td>15 Yard</td>
                                    <td>$399</td>
                                    <td>$429</td>
                                    <td>$449</td>
                                </tr>
                                <tr>
                                    <td>20 Yard</td>
                                    <td>$449</td>
                                    <td>$479</td>
                                    <td>$499</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>What Separates Us From National Companies</h2>
                        <p>
                            Many national dumpster rental companies operate booking centers out of state and rely on local third-party haulers. That means longer lead times, less scheduling flexibility, and no real accountability when something goes wrong. Mid South Dumpster Rentals is based right here in Jackson. When you call, you reach the people who own the truck. That&apos;s how we can offer same-day service — because we control our own schedule.
                        </p>

                        <div className={styles.cta}>
                            <h3>Need a Dumpster Today? Call Now.</h3>
                            <p><a href="tel:6013167891">601-316-7891</a> — Available 7AM–7PM, 7 days a week.</p>
                            <a
                                href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Book Same-Day Dumpster
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
