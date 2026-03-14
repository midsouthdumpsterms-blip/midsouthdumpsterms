import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'How Long Can You Keep a Rental Dumpster? | Mid South Dumpster Rentals',
    description:
        'Wondering how long you can keep a rental dumpster in Central Mississippi? Mid South Dumpster Rentals explains standard rental periods, extensions, and what you need to know about overage fees. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'How Long Can You Keep a Rental Dumpster?',
        'Wondering how long you can keep a rental dumpster in Central Mississippi? Mid South Dumpster Rentals explains standard rental periods, extensions, and what you need to know about overage fees.',
        '2026-03-11',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'How Long Can You Keep a Rental Dumpster?', url: 'https://midsouthdumpsterms.com/blog/how-long-can-you-keep-a-rental-dumpster' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container container-narrow">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Renting Guide</span>
                        <h1>How Long Can You Keep a Rental Dumpster? A Complete Guide</h1>
                        <p className={styles.meta}>Published March 11, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Whether you are tearing down an old deck, doing a massive garage cleanout, or managing a multi-week home renovation, one of the most common questions we get at Mid South Dumpster Rentals is: <em>"How long can I actually keep this dumpster?"</em> Let's break down the typical rental periods and what happens if your project takes longer than expected.
                        </p>

                        <h2>Standard Dumpster Rental Periods</h2>
                        <p>
                            In the waste management industry, standard roll-off dumpster rental periods typically range from <strong>7 to 14 days</strong>. This timeframe accommodates the vast majority of residential and commercial cleanouts, giving you a full weekend (or two!) to load up your debris.
                        </p>
                        <p>
                            At Mid South Dumpster Rentals, our baseline rental period gives you plenty of time to work at your own pace without feeling rushed.
                        </p>

                        <h2>What If I Finish Early?</h2>
                        <p>
                            Finished your cleanup in just two days? Great job! You never have to keep a dumpster for the entire rental period. As soon as you are done loading your debris, simply give us a call at <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink>. We'll dispatch a driver to haul it away, keeping your driveway clear and your property looking great.
                        </p>

                        <h2>What If I Need More Time?</h2>
                        <p>
                            Projects almost always take longer than expected— Mississippi weather delays, contractors running behind, or discovering more junk hidden in the attic. We completely understand! If you need to extend your rental beyond the standard timeframe, here is what you should do:
                        </p>
                        <ul>
                            <li><strong>Call Us Early:</strong> Inform us as soon as you realize you'll need the dumpster longer. Don't wait until the scheduled pickup day.</li>
                            <li><strong>Pay a Daily Extension Fee:</strong> Extensions are very common and are typically handled through a small, affordable daily fee (often around $10-$20/day depending on the dumpster size and availability).</li>
                        </ul>

                        <h2>Do I Need a Permit for Long-Term Rentals?</h2>
                        <p>
                            If the dumpster is placed entirely on your <strong>private property</strong> (like your driveway or yard), you generally do not need a permit, regardless of how long you keep it.
                        </p>
                        <p>
                            However, if the dumpster needs to be placed on a <strong>public street, sidewalk, or right-of-way</strong> in Jackson, Madison, or Brandon, you will likely need a Right-of-Way permit from your local city government. These permits are usually time-limited (e.g., valid for 30 days). If you extend your rental, you must also ensure your city permit is still valid!
                        </p>

                        <h2>Book Your Hassle-Free Rental Today</h2>
                        <p>
                            At Mid South Dumpster Rentals, we pride ourselves on our flexibility and incredible customer service. We will work with you to ensure you have the container you need for the exact amount of time you need it.
                        </p>

                        <div className={styles.cta}>
                            <h3>Ready to Schedule Your Drop-off?</h3>
                            <p>Reserve your roll-off dumpster today with flexible rental periods.</p>
                            <a
                                href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Book Your Dumpster Online
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
