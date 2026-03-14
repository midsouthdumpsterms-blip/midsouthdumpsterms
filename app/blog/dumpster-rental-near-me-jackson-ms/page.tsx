import { Metadata } from 'next'
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Dumpster Rental Near Me in Jackson, MS | MidSouth',
    description: 'Searching for dumpster rental near me in Jackson, MS? MidSouth offers affordable roll-off dumpsters with same-day delivery and flat rates. Book online or call 601-316-7891.',
    openGraph: {
        title: 'Dumpster Rental Near Me in Jackson, MS | MidSouth',
        description: 'Same-day roll-off dumpster delivery in Jackson and all of Central Mississippi. Flat-rate pricing from $349. No hidden fees.',
        url: 'https://midsouthdumpsterms.com/blog/dumpster-rental-near-me-jackson-ms',
    },
}

const faqs = [
    {
        question: 'How do I find reliable dumpster rental near me in Jackson, MS?',
        answer: 'MidSouth Dumpster Rentals is a locally owned company based in Jackson. Call 601-316-7891 or book online at midsouthdumpsterms.com. We offer same-day delivery when you call before noon, and serve all of Hinds, Rankin, and Madison counties.',
    },
    {
        question: 'What does dumpster rental near me cost in Jackson?',
        answer: 'MidSouth uses flat-rate pricing with no hidden fees: 10-yard from $349, 15-yard from $399, and 20-yard from $449. Delivery, pickup, and disposal are all included. You\'ll know the exact cost before we deliver.',
    },
    {
        question: 'What sizes of dumpster are available near Jackson, MS?',
        answer: 'We offer 10-yard (best for garage cleanouts and small projects), 15-yard (most popular — great for home renovations and roofing), and 20-yard (best for large construction or major demolition). Call us if you\'re unsure which size fits your project.',
    },
    {
        question: 'Can I get same-day dumpster delivery near me?',
        answer: 'Yes — MidSouth offers same-day delivery 7 days a week when you call before noon at 601-316-7891. We operate 7AM–7PM every day including weekends and holidays.',
    },
    {
        question: 'Will a dumpster damage my driveway?',
        answer: 'We take precautions to protect your property. Our drivers place wood boards under the dumpster to prevent scratches or cracks on your asphalt or concrete. Most customers in Jackson have no driveway issues after rental.',
    },
]

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Dumpster Rental Near Me in Jackson, MS | MidSouth',
        'Searching for dumpster rental near me in Jackson, MS? MidSouth offers same-day roll-off dumpster delivery with flat-rate pricing and no hidden fees.',
        '2026-03-04',
        'https://midsouthdumpsterms.com/opengraph-image.jpg',
        '2026-03-04'
    )
    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Dumpster Rental Near Me Jackson MS', url: 'https://midsouthdumpsterms.com/blog/dumpster-rental-near-me-jackson-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container container-narrow">
                    <Link href="/blog" className={styles.backLink}>&#8592; Back to Blog</Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Local Guides</span>
                        <h1>Dumpster Rental Near Me in Jackson, MS &mdash; Your Local Waste Solution</h1>
                        <p className={styles.meta}>Updated March 4, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Dealing with a big cleanout, home renovation, or construction project in Jackson, MS? MidSouth Dumpster Rentals is your locally-owned answer for &ldquo;dumpster rental near me&rdquo; &mdash; with flat-rate pricing, same-day delivery, and 7-days-a-week availability.
                        </p>

                        <h2>Why Choose a Local Jackson Dumpster Rental Company?</h2>
                        <p>
                            National chains give you a call center. MidSouth gives you a local team that knows Jackson&apos;s neighborhoods, roads, and typical project needs. We&apos;re based right here in Central Mississippi, which means faster service and real accountability.
                        </p>
                        <ul>
                            <li><strong>Locally owned &amp; operated</strong> — not a franchise or national broker</li>
                            <li><strong>Same-day delivery</strong> available when you call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> before noon</li>
                            <li><strong>Flat-rate, all-inclusive pricing</strong> — no fuel surcharges, no hidden fees</li>
                            <li><strong>7AM–7PM, 7 days a week</strong> including weekends</li>
                            <li><strong>Driveway-friendly</strong> delivery using protective boards</li>
                        </ul>

                        <h2>Dumpster Sizes Available Near Jackson, MS</h2>
                        <p>
                            We offer three roll-off dumpster sizes to fit any project in the Jackson metro area:
                        </p>

                        <h3><Link href="/services/10-yard-dumpster">10-Yard Dumpster</Link> &mdash; from $349</h3>
                        <p>
                            Ideal for: garage cleanouts, small bathroom remodels, single-room renovations, attic decluttering. Includes 1 ton (2,000 lbs) weight allowance. Fits easily in most residential driveways.
                        </p>

                        <h3><Link href="/services/15-yard-dumpster">15-Yard Dumpster</Link> &mdash; from $399 <em>(Most Popular)</em></h3>
                        <p>
                            Ideal for: home renovations, roofing debris, estate cleanouts, full garage cleanouts, multiple-room remodels. Includes 2 tons (4,000 lbs) weight allowance. This is our most-rented size in the Jackson area.
                        </p>

                        <h3><Link href="/services/20-yard-dumpster">20-Yard Dumpster</Link> &mdash; from $449</h3>
                        <p>
                            Ideal for: large home renovations, new construction, commercial site cleanups, major demolition. Includes 3 tons (6,000 lbs) weight allowance with a strict 3-ton maximum.
                        </p>

                        <h2>What Can (and Can&apos;t) Go in Your Dumpster</h2>
                        <p>
                            <strong>Accepted materials</strong> include: household junk and furniture, construction debris (wood, drywall, insulation, flooring), yard waste, roofing materials, renovation waste, and non-hazardous demolition debris.
                        </p>
                        <p>
                            <strong>Prohibited items</strong> include: hazardous waste (paints, solvents, chemicals, pesticides), tires, batteries, electronics, appliances containing Freon, asbestos, medical waste, propane tanks, and hot water heaters. Contact the City of Jackson Public Works Department for guidance on disposing of prohibited materials.
                        </p>

                        <h2>Permit Requirements for Dumpster Rental in Jackson</h2>
                        <p>
                            If the dumpster is placed entirely on your private property (driveway, yard, private lot) &mdash; no permit is needed. A permit from the City of Jackson Public Works Department is required if the dumpster extends onto any public right-of-way. Most residential customers avoid this by using their driveway.
                        </p>

                        <h2>Areas We Serve Near Jackson, MS</h2>
                        <p>
                            MidSouth delivers roll-off dumpsters across the full Jackson metro at no extra charge:
                        </p>
                        <ul>
                            <li><strong>Hinds County:</strong> <Link href="/service-areas/jackson">Jackson</Link>, Clinton, Byram, Terry, Raymond</li>
                            <li><strong>Rankin County:</strong> <Link href="/service-areas/brandon">Brandon</Link>, Pearl, Flowood, Florence, Richland</li>
                            <li><strong>Madison County:</strong> <Link href="/service-areas/madison">Madison</Link>, Ridgeland, Canton, Flora, Gluckstadt</li>
                        </ul>

                        <h2>Frequently Asked Questions</h2>
                        <div>
                            {faqs.map((faq, i) => (
                                <div key={i} style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{faq.question}</h3>
                                    <p>{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.cta}>
                            <h3>Ready to Book Your Dumpster?</h3>
                            <p>Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> or book online &mdash; same-day delivery available 7 days a week.</p>
                            <a
                                href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Book Your Dumpster Now
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
