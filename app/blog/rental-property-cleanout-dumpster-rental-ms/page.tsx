import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Rental Property & Foreclosure Cleanout Dumpsters in Mississippi | Mid South',
    description:
        'Property managers and landlords in Central Mississippi — get fast, reliable roll-off dumpster service for rental property turnover, foreclosure cleanouts, and eviction cleanup. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Rental Property & Foreclosure Cleanout Dumpsters in Mississippi',
        'Property managers and landlords in Central Mississippi — get fast, reliable roll-off dumpster service for rental property turnover, foreclosure cleanouts, and eviction cleanup.',
        '2026-02-03',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Rental Property Cleanout Dumpster', url: 'https://midsouthdumpsterms.com/blog/rental-property-cleanout-dumpster-rental-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container container-narrow">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Property Management</span>
                        <h1>Rental Property & Foreclosure Cleanout Dumpsters in Central Mississippi</h1>
                        <p className={styles.meta}>Published February 3, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Every day a rental property sits empty costs you money. Whether you&apos;re turning over a unit between tenants, cleaning up after an eviction, or clearing out a foreclosure property, you need a dumpster provider who can move fast. Mid South Dumpster Rentals offers same-day and next-day delivery across Central Mississippi — so you can get the property cleaned up and back on the market as quickly as possible.
                        </p>

                        <h2>Who We Serve</h2>
                        <ul>
                            <li><strong>Landlords and property owners</strong> doing turnover work between tenants</li>
                            <li><strong>Property management companies</strong> managing multiple units across Hinds, Rankin, and Madison counties</li>
                            <li><strong>Real estate investors</strong> cleaning up foreclosures and REO properties</li>
                            <li><strong>Real estate agents</strong> helping sellers prepare homes for market</li>
                            <li><strong>Banks and servicers</strong> managing REO properties across Central Mississippi</li>
                        </ul>

                        <h2>Common Cleanout Scenarios</h2>

                        <h3>Tenant Turnover Cleanout</h3>
                        <p>
                            When tenants leave behind furniture, appliances, trash, or years&apos; worth of accumulated belongings, you can&apos;t afford to make 10 trips to the dump. A dumpster on-site lets your team clear the property in one shot — typically in a single day.
                        </p>

                        <h3>Eviction Cleanout</h3>
                        <p>
                            Post-eviction properties often require rapid cleanup to comply with local health and safety codes. We can have a container delivered the same day you call, so you can start immediately.
                        </p>

                        <h3>Foreclosure and REO Cleanout</h3>
                        <p>
                            Foreclosure properties can range from lightly furnished to completely packed. Our 15 and 20-yard containers are sized for the job, and we offer flexible rental periods when you&apos;re not sure how long the work will take.
                        </p>

                        <h2>What Size Dumpster for a Property Cleanout?</h2>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Property Size</th>
                                    <th>Recommended Size</th>
                                    <th>Starting Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Apartment or small condo</td>
                                    <td>10 Yard</td>
                                    <td>$349</td>
                                </tr>
                                <tr>
                                    <td>2–3 bedroom home, moderately loaded</td>
                                    <td>15 Yard</td>
                                    <td>$399</td>
                                </tr>
                                <tr>
                                    <td>Larger home, heavy contents, full cleanout</td>
                                    <td>20 Yard</td>
                                    <td>$449</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>Why Property Managers Keep Calling Us Back</h2>
                        <ul>
                            <li><strong>Fast turnaround</strong> — same-day delivery available when you call early</li>
                            <li><strong>Predictable pricing</strong> — flat-rate rentals so you can budget accurately</li>
                            <li><strong>Flexible scheduling</strong> — 1, 3, or 7-day rentals to fit your timeline</li>
                            <li><strong>Locally owned</strong> — you talk to a real person, every time</li>
                            <li><strong>7-day availability</strong> — we work weekends because you do too</li>
                        </ul>

                        <h2>What Can Go In</h2>
                        <p>For most property cleanouts, you can load:</p>
                        <ul>
                            <li>All furniture and household goods</li>
                            <li>Mattresses and bedding</li>
                            <li>Clothing and personal items left behind</li>
                            <li>Carpeting, flooring, and fixtures</li>
                            <li>Stoves, washers, and dryers (not refrigerators)</li>
                            <li>Trash and bagged debris</li>
                            <li>Renovation materials if you&apos;re doing repairs between tenants</li>
                        </ul>

                        <h2>We Cover All of Central Mississippi</h2>
                        <p>
                            We serve property managers and landlords throughout Hinds, Rankin, and Madison counties — including Jackson, Brandon, Flowood, Pearl, Clinton, Ridgeland, Madison, Byram, Richland, Terry, Gluckstadt, Flora, Florence, and Canton.
                        </p>
                        <p>
                            Need service at multiple properties? Call us and let&apos;s talk about how to make that work efficiently for your portfolio.
                        </p>

                        <div className={styles.cta}>
                            <h3>Need a Dumpster for a Property Cleanout?</h3>
                            <p>Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> or book online. Same-day delivery often available.</p>
                            <a
                                href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Book Property Cleanout Dumpster
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
