import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'

export const metadata: Metadata = {
    title: 'Dumpster Rental in Madison MS | Same-Day Service | Mid South',
    description:
        'Need a dumpster rental in Madison, MS? Mid South Dumpster Rentals delivers 10, 15, and 20-yard roll-off dumpsters directly to your driveway. HOA-friendly and locally owned. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Dumpster Rental in Madison, MS | Fast, Reliable Roll-Off Service',
        'Need a dumpster rental in Madison, MS? Mid South Dumpster Rentals delivers 10, 15, and 20-yard roll-off dumpsters directly to your driveway. HOA-friendly and locally owned.',
        '2026-03-14',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Dumpster Rental in Madison MS', url: 'https://midsouthdumpsterms.com/blog/dumpster-rental-madison-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container container-narrow">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Local Service Areas</span>
                        <h1>Dumpster Rental in Madison, MS: Fast, Reliable Roll-Off Service</h1>
                        <p className={styles.meta}>Published March 14, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Tackling a major home renovation in Reunion, cleaning out an estate, or clearing out a commercial property in Madison? You need a reliable, professional waste management partner. Mid South Dumpster Rentals provides top-tier roll-off dumpster rentals to residents and contractors across Madison, Mississippi.
                        </p>

                        <h2>Locally Owned, Community Focused</h2>
                        <p>
                            Unlike massive national brokers who outsource their deliveries to the lowest bidder, Mid South Dumpster Rentals is a locally owned business right here in Central Mississippi. When you rent with us, you are speaking directly to the team that will deliver and pick up your dumpster. We know the neighborhoods of Madison—from the historic downtown district to the newer developments up Highway 51—which ensures a smooth, on-time delivery.
                        </p>

                        <h2>HOA-Friendly Dumpster Solutions</h2>
                        <p>
                            Madison is known for its beautiful neighborhoods and strict Homeowner Associations. We understand that leaving a rusty, eyesore of a dumpster in your driveway is a surefire way to get a letter from your HOA.
                        </p>
                        <p>
                            At Mid South Dumpster Rentals, we take pride in our equipment. Our 10-yard, 15-yard, and 20-yard containers are well-maintained, clean, and neatly placed. They fit perfectly in a standard residential driveway without blocking the sidewalk, keeping your property compliant and your neighbors happy.
                        </p>

                        <h2>What Sizes Are Available in Madison?</h2>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Dumpster Size</th>
                                    <th>Best Used For...</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>10-Yard Dumpster</strong></td>
                                    <td>Small garage cleanouts, minor bathroom remodels, yard debris, and dirt/concrete removal.</td>
                                </tr>
                                <tr>
                                    <td><strong>15-Yard Dumpster</strong></td>
                                    <td>Medium-sized cleanouts, flooring removal projects, and small-to-medium roofing jobs.</td>
                                </tr>
                                <tr>
                                    <td><strong>20-Yard Dumpster</strong></td>
                                    <td>Whole-home cleanouts, large kitchen renovations, moving junk removal, and large estate clearing.</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>Protecting Your Driveway</h2>
                        <p>
                            Your driveway is a significant investment. We utilize precision delivery techniques, and our drivers are incredibly careful when lowering our roll-off containers. We can also utilize wooden boards as a buffer between the steel wheels and your concrete or asphalt to guarantee your property remains pristine.
                        </p>

                        <h2>Call Today for Delivery to Madison, MS</h2>
                        <p>
                            Ready to clear out the clutter? Have a construction crew waiting for a container? We offer prompt, often same-day or next-day delivery to all of Madison County. Reach out to the local experts today.
                        </p>

                        <div className={styles.cta}>
                            <h3>Get Your Madison MS Dumpster Rental</h3>
                            <p>For more local details, visit our dedicated <Link href="/service-areas/madison">Madison Dumpster Rental</Link> service page. Call <a href="tel:6013167891">601-316-7891</a> or book completely online in minutes.</p>
                            <a
                                href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View Pricing & Book
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
