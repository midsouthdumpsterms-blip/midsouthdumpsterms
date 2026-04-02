import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, generateCityGeoSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Dumpster Rental in Clinton, MS | Same-Day Roll-Off Service | Mid South',
    description:
        'Need a dumpster rental in Clinton, MS? Mid South Dumpster Rentals delivers 10, 15, and 20-yard roll-off dumpsters to Clinton, Woodmoor, College Hills, and surrounding neighborhoods. Same-day delivery available. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Dumpster Rental in Clinton, MS | Same-Day Roll-Off Service',
        'Need a dumpster rental in Clinton, MS? Mid South Dumpster Rentals delivers 10, 15, and 20-yard roll-off dumpsters to Clinton and surrounding Hinds County neighborhoods.',
        '2026-03-22',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Dumpster Rental in Clinton MS', url: 'https://midsouthdumpsterms.com/blog/dumpster-rental-clinton-ms' },
    ])

    // Clinton, MS — 32.3407° N, 90.3212° W
    const geoSchema = generateCityGeoSchema('Clinton', 32.3407, -90.3212, ['39056', '39058', '39060', '39209'])

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
                        <h1>Dumpster Rental in Clinton, MS — Flat-Rate Roll-Off Service for Hinds County</h1>
                        <p className={styles.meta}>Published March 22, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Clinton is one of Central Mississippi&apos;s most established communities — home to Mississippi College, thriving neighborhoods, and a steady stream of renovation and cleanout projects. Mid South Dumpster Rentals delivers roll-off dumpsters directly to Clinton homes and job sites, often the same day you call, with flat-rate pricing and no hidden fees.
                        </p>

                        <h2>Serving All of Clinton&apos;s Neighborhoods</h2>
                        <p>We deliver to every corner of Clinton, including:</p>
                        <ul>
                            <li><strong>Woodmoor</strong> — established residential neighborhood with frequent home renovation projects</li>
                            <li><strong>Green Acres</strong> — popular area for estate and garage cleanouts</li>
                            <li><strong>Pinehaven Estates</strong> — mature neighborhood with high demand for roofing debris removal</li>
                            <li><strong>Olde Town District</strong> — older homes often need full cleanouts during estate sales</li>
                            <li><strong>Countrywood</strong> — active renovation market near the Mississippi College corridor</li>
                            <li><strong>Oakhurst &amp; College Hills</strong> — professors and students alike need cleanout solutions</li>
                            <li><strong>Hunter&apos;s Ridge</strong> — newer construction and addition projects</li>
                        </ul>
                        <p>We serve all Clinton zip codes: <strong>39056, 39058, 39060, and 39209</strong>. Location coordinates: 32.3407° N, 90.3212° W.</p>

                        <h2>Dumpster Rental Pricing for Clinton, MS</h2>
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

                        <h2>What Clinton Residents Use Dumpsters For</h2>
                        <ul>
                            <li><strong>Home renovations</strong> — kitchen and bathroom remodels in established neighborhoods</li>
                            <li><strong>Storm debris cleanup</strong> — Clinton sees frequent wind and storm damage throughout the year</li>
                            <li><strong>Estate cleanouts</strong> — clearing longtime family homes near Olde Town and Green Acres</li>
                            <li><strong>Roofing tear-offs</strong> — shingle and underlayment disposal after roof replacements</li>
                            <li><strong>Garage and shed cleanouts</strong> — accumulated junk cleared before home sales</li>
                            <li><strong>Moving cleanouts</strong> — disposing of items that won&apos;t make the move</li>
                            <li><strong>Contractor debris</strong> — new additions and flooring projects generate significant waste</li>
                        </ul>

                        <h2>Do You Need a Permit for a Dumpster in Clinton?</h2>
                        <p>
                            If the dumpster is placed on your private property (driveway or yard), no permit is typically required in Clinton. If you need to place the container on a public street, check with the City of Clinton Public Works department. Most of our Clinton customers place dumpsters on their driveway without any permit issues.
                        </p>

                        <h2>How to Book Your Clinton Dumpster Rental</h2>
                        <ol>
                            <li><strong>Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink></strong> or book online — takes about 2 minutes</li>
                            <li><strong>Tell us your project</strong> — we&apos;ll recommend the right size</li>
                            <li><strong>Choose your rental period</strong> — 1, 3, or 7 days</li>
                            <li><strong>We deliver and place your container</strong> — driveway, yard, or job site</li>
                            <li><strong>Fill it up at your pace</strong> — then call us for pickup when ready</li>
                        </ol>

                        <div className={styles.cta}>
                            <h3>Ready to Book Your Clinton Dumpster?</h3>
                            <p>Visit our <Link href="/service-areas/clinton">Clinton Dumpster Rental</Link> service page, or call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink>. Same-day delivery often available in Clinton, MS.</p>
                            <a href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Book Dumpster Rental in Clinton
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
