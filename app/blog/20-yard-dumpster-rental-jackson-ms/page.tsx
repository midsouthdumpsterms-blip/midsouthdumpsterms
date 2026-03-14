import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: '20 Yard Dumpster Rental in Jackson MS | Mid South Dumpster Rentals',
    description:
        'Looking for a 20 yard dumpster rental in Jackson, MS? Mid South Dumpster Rentals offers fast delivery, affordable pricing, and locally-owned service. Perfect for home renovations and cleanouts. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        '20 Yard Dumpster Rental in Jackson MS | Mid South Dumpster Rentals',
        'Looking for a 20 yard dumpster rental in Jackson, MS? Mid South Dumpster Rentals offers fast delivery, affordable pricing, and locally-owned service. Perfect for home renovations and cleanouts.',
        '2026-03-08',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: '20 Yard Dumpster Rental in Jackson MS', url: 'https://midsouthdumpsterms.com/blog/20-yard-dumpster-rental-jackson-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container container-narrow">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Dumpster Sizes</span>
                        <h1>20 Yard Dumpster Rental in Jackson, MS: The Perfect Size for Most Projects</h1>
                        <p className={styles.meta}>Published March 8, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            When it comes to waste removal, the 20-yard dumpster is the "Goldilocks" of roll-off containers—not too excessively large, but not too small. At Mid South Dumpster Rentals, our 20-yard roll-off is our most popular rental in Jackson, MS, and for good reason!
                        </p>

                        <h2>How Big is a 20 Yard Dumpster?</h2>
                        <p>
                            A typical 20-yard dumpster measures about <strong>22 feet long, 8 feet wide, and 4 feet tall</strong>. It holds roughly 20 cubic yards of debris, which is equivalent to about 110-130 large contractor trash bags, or 6 pickup truck loads.
                        </p>
                        <p>
                            Despite its impressive capacity, its 4-foot walls make it incredibly easy to load. You can effortlessly toss items over the side or use the swinging back door to walk heavy items right inside.
                        </p>

                        <h2>What Projects is a 20 Yard Dumpster Best For?</h2>
                        <ul>
                            <li><strong>Home Renovations:</strong> Kitchen remodels, master bathroom renovations, or flooring removal.</li>
                            <li><strong>Estate Cleanouts:</strong> Clearing out a medium-to-large sized home.</li>
                            <li><strong>Roofing Projects:</strong> Holds up to 60 squares of asphalt shingles (be sure to check our weight limits for heavy materials!).</li>
                            <li><strong>Landscaping & Yard Waste:</strong> Large yard cleanups, tree removals, and deck demolitions.</li>
                            <li><strong>Moving Cleanouts:</strong> Getting rid of years of accumulated junk before you pack up and move.</li>
                        </ul>

                        <h2>Why Rent Your 20 Yard Dumpster from Mid South?</h2>
                        <p>
                            Based right here in Central Mississippi, we know the Jackson area inside and out. Here is why locals choose Mid South Dumpster Rentals:
                        </p>
                        <ul>
                            <li><strong>Flat-Rate Pricing:</strong> We believe in transparent pricing without hidden fees. Our 20-yard dumpsters come with clear weight allowances so you know exactly what to expect.</li>
                            <li><strong>Driveway Protection:</strong> We respect your property. Our drivers are trained to carefully place dumpsters on your driveway safely.</li>
                            <li><strong>Same-Day & Next-Day Delivery:</strong> When you're ready to work, we're ready to deliver. Give us a call at <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> and ask about same-day availability.</li>
                        </ul>

                        <h2>Book Your 20 Yard Dumpster in Jackson, MS Today</h2>
                        <p>
                            Whether you're tackling a massive spring cleaning or a major home flip, our 20-yard dumpsters will save you countless trips to the landfill. Ready to get started? Our team is standing by to help you schedule your drop-off.
                        </p>

                        <div className={styles.cta}>
                            <h3>Reserve Your Dumpster Now</h3>
                            <p>Book online or call us directly for fast, friendly service in Jackson and the surrounding areas.</p>
                            <a
                                href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Book Your 20 Yard Dumpster
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
