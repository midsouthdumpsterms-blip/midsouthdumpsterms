import type { Metadata } from 'next'
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Dumpster Rental Jackson MS | MidSouth Dumpster Rentals',
    description: 'Need reliable dumpster rental in Jackson, MS? MidSouth offers flat-rate pricing from $349, same-day delivery 7 days a week, and serves all of Central Mississippi.',
    openGraph: {
        title: 'Dumpster Rental Jackson MS | MidSouth Dumpster Rentals',
        description: 'Flat-rate pricing from $349. Same-day delivery 7 days a week across Jackson, Hinds County, and Central Mississippi.',
        url: 'https://midsouthdumpsterms.com/blog/dumpster-rental-jackson-ms',
    },
}

const faqs = [
    {
        question: 'How much does dumpster rental cost in Jackson, MS?',
        answer: 'MidSouth Dumpster Rentals charges flat-rate, all-inclusive pricing: 10-yard from $349 (1-day) to $399 (7-day), 15-yard from $399 to $449, and 20-yard from $449 to $499. Delivery, pickup, and disposal are all included — no hidden fees.',
    },
    {
        question: 'What size dumpster do I need for my project in Jackson?',
        answer: 'For garage cleanouts and small remodels, a 10-yard dumpster (1 ton limit) is usually enough. Home renovations and roofing projects typically need a 15-yard (2 ton limit), our most popular size. Large construction or demolition jobs go with the 20-yard (3 ton limit). Call 601-316-7891 if you\'re not sure — we\'ll help you choose.',
    },
    {
        question: 'Do I need a permit to rent a dumpster in Jackson, MS?',
        answer: 'No permit is needed if the dumpster is placed entirely on private property like your driveway. If it extends onto a public street or sidewalk, you\'ll need a permit from the City of Jackson Public Works Department. Most residential customers place their dumpster in the driveway and avoid the permit process entirely.',
    },
    {
        question: 'Can I get same-day dumpster delivery in Jackson?',
        answer: 'Yes! MidSouth Dumpster Rentals offers same-day delivery when you call before noon at 601-316-7891. We operate 7AM–7PM, 7 days a week including weekends.',
    },
    {
        question: 'What items are NOT allowed in a dumpster rental?',
        answer: 'Prohibited items include: hazardous waste (paints, solvents, chemicals, motor oil), tires, batteries, electronics, appliances containing Freon, asbestos, medical waste, propane tanks, and hot water heaters. For prohibited items, contact Hinds County solid waste services for proper disposal options.',
    },
]

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Dumpster Rental Jackson MS | MidSouth Dumpster Rentals',
        'Need reliable dumpster rental in Jackson, MS? MidSouth offers flat-rate pricing from $349, same-day delivery 7 days a week, and serves all of Central Mississippi.',
        '2026-03-04',
        'https://midsouthdumpsterms.com/opengraph-image.jpg',
        '2026-03-04'
    )
    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Dumpster Rental Jackson MS', url: 'https://midsouthdumpsterms.com/blog/dumpster-rental-jackson-ms' },
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
                        <h1>Dumpster Rental in Jackson, MS — Fast, Local, and Fairly Priced</h1>
                        <p className={styles.meta}>Updated March 4, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Facing a major cleanout, renovation, or construction project in Jackson, MS? MidSouth Dumpster Rentals is your local, Jackson-based partner for roll-off dumpster rentals with flat-rate pricing, same-day delivery, and zero hidden fees.
                        </p>

                        <h2>Why Jackson Residents Choose MidSouth Dumpster Rentals</h2>
                        <p>
                            When you&apos;re searching for dumpster rental in Jackson, you want a company that knows the area and shows up when they say they will. MidSouth is a locally owned business — not a national franchise — which means faster service, real local knowledge, and someone who picks up the phone.
                        </p>
                        <ul>
                            <li><strong>Same-day delivery</strong> when you call before noon — 7 days a week</li>
                            <li><strong>Flat-rate pricing</strong> — delivery, pickup, and disposal all included</li>
                            <li><strong>7AM–7PM hours</strong>, Monday through Sunday</li>
                            <li><strong>Driveway-friendly</strong> — we protect your concrete with boards on placement</li>
                            <li><strong>No surprise bills</strong> — you know the full cost before we arrive</li>
                        </ul>

                        <h2>Dumpster Sizes &amp; Pricing for Jackson, MS</h2>
                        <p>
                            We offer three roll-off dumpster sizes sized to fit the most common projects in the Jackson area. All prices include delivery, pickup, disposal, and your weight allowance.
                        </p>

                        <h3>
                            <Link href="/services/10-yard-dumpster">10-Yard Dumpster</Link> — from $349
                        </h3>
                        <p>
                            Best for: garage cleanouts, small bathroom remodels, attic decluttering, minor yard debris. Includes 1 ton (2,000 lbs) weight allowance. Fits easily in a standard driveway.
                        </p>

                        <h3>
                            <Link href="/services/15-yard-dumpster">15-Yard Dumpster</Link> — from $399 <em>(Most Popular)</em>
                        </h3>
                        <p>
                            Best for: home renovations, roofing projects, multi-room cleanouts, estate cleanouts. Includes 2 tons (4,000 lbs) weight allowance. This is what most Jackson homeowners rent.
                        </p>

                        <h3>
                            <Link href="/services/20-yard-dumpster">20-Yard Dumpster</Link> — from $449
                        </h3>
                        <p>
                            Best for: large renovations, new construction debris, major demolition, commercial site work. Includes 3 tons (6,000 lbs) weight allowance with a strict 3-ton maximum.
                        </p>

                        <h2>How the Rental Process Works</h2>
                        <ol>
                            <li><strong>Book online or call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink></strong> — takes about 2 minutes</li>
                            <li><strong>We deliver the dumpster</strong> to your driveway or job site — often same day</li>
                            <li><strong>Fill it up</strong> at your own pace during your rental period (1, 3, or 7 days)</li>
                            <li><strong>Call us when you&apos;re done</strong> and we&apos;ll come pick it up and haul everything away</li>
                        </ol>

                        <h2>What Can (and Can&apos;t) Go in Your Dumpster</h2>
                        <p>
                            We accept most common household junk and construction debris including furniture, drywall, wood, roofing shingles, yard waste, and non-hazardous renovation materials.
                        </p>
                        <p>
                            <strong>Prohibited items</strong> include: hazardous waste, tires, batteries, electronics, Freon-containing appliances, asbestos, medical waste, and propane tanks. Contact{' '}
                            <a href="https://www.co.hinds.ms.us/department.aspx?d=14" target="_blank" rel="noopener noreferrer">Hinds County Solid Waste Management</a>{' '}
                            for proper disposal of prohibited items.
                        </p>

                        <h2>Service Areas Around Jackson</h2>
                        <p>
                            We deliver dumpsters across Central Mississippi at no extra charge. Our Jackson-based team serves:
                        </p>
                        <ul>
                            <li><strong>Hinds County:</strong> <Link href="/service-areas/jackson">Jackson</Link>, Clinton, Byram, Terry, Raymond</li>
                            <li><strong>Rankin County:</strong> <Link href="/service-areas/brandon">Brandon</Link>, Pearl, Flowood, Florence, Richland</li>
                            <li><strong>Madison County:</strong> <Link href="/service-areas/madison">Madison</Link>, Ridgeland, Canton, Flora</li>
                        </ul>
                        <p>
                            Not sure if we serve your area? Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> and we&apos;ll let you know in under a minute.
                        </p>

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
                            <h3>Ready to Book Your Dumpster in Jackson?</h3>
                            <p>For more local details, visit our dedicated <Link href="/service-areas/jackson">Jackson Dumpster Rental</Link> service page. Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> or book online &mdash; same-day delivery available 7 days a week.</p>
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
