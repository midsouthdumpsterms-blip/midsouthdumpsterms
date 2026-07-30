import { Metadata } from 'next'
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/blog/contractor-dumpster-rental-jackson-ms' },
    title: 'Contractor Dumpster Rental Jackson MS | Roll-Off for Job Sites',
    description:
        'Reliable roll-off dumpster rental for contractors in Jackson, MS. Mid South Dumpster Rentals offers same-day delivery, flexible scheduling, and flat-rate pricing for construction, roofing, and remodeling projects. Call 601-316-7891.',
    openGraph: {
        title: 'Contractor Dumpster Rental Jackson MS',
        description: 'Same-day roll-off delivery for contractors across Central Mississippi. Flat-rate pricing, no hidden fees, 7 days a week.',
        url: 'https://midsouthdumpsterms.com/blog/contractor-dumpster-rental-jackson-ms',
    },
}

const faqs = [
    {
        question: 'Do you offer contractor accounts or repeat-customer pricing?',
        answer: 'Yes. If you run multiple jobs per month, call us at 601-316-7891 and ask about our contractor pricing. We work with roofers, GCs, remodelers, and property management companies across Central Mississippi.',
    },
    {
        question: 'Can a dumpster be delivered directly to a construction site?',
        answer: 'Absolutely. We deliver to residential driveways, commercial lots, construction sites, and private land across Hinds, Rankin, and Madison counties. Just let us know the address and any access details when you book.',
    },
    {
        question: 'What happens if my project runs longer than expected?',
        answer: 'No problem. We offer flexible rental extensions at $50/day beyond your original rental period. Just call us before your rental expires and we will extend it — no penalty and no surprise charges.',
    },
    {
        question: 'Can I have two dumpsters on the same job site?',
        answer: 'Yes. For larger projects like new construction or commercial renovations, we can place multiple containers on site. Call 601-316-7891 to coordinate logistics and we will work around your schedule.',
    },
    {
        question: 'What construction debris is allowed in the dumpster?',
        answer: 'We accept lumber, drywall, roofing shingles, concrete (limited amounts), insulation, flooring, siding, and general construction waste. Prohibited items include hazardous materials, asbestos, liquids, tires, and appliances containing Freon.',
    },
]

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Contractor Dumpster Rental Jackson MS | Roll-Off for Job Sites',
        'Reliable roll-off dumpster rental for contractors in Jackson, MS. Same-day delivery, flexible scheduling, and flat-rate pricing for construction, roofing, and remodeling projects.',
        '2026-03-22',
        'https://midsouthdumpsterms.com/opengraph-image.jpg',
        '2026-03-22'
    )
    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Contractor Dumpster Rental Jackson MS', url: 'https://midsouthdumpsterms.com/blog/contractor-dumpster-rental-jackson-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container container-narrow">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Contractors</span>
                        <h1>Contractor Dumpster Rental in Jackson, MS — Roll-Offs Built for the Job Site</h1>
                        <p className={styles.meta}>Published March 22, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Running a construction, roofing, or remodeling project in Central Mississippi? You need a dumpster company that answers the phone, shows up on time, and doesn&apos;t hit you with surprise fees at the end of the job. Mid South Dumpster Rentals works with contractors across Hinds, Rankin, and Madison counties — delivering roll-off dumpsters directly to job sites with same-day availability and flat-rate pricing.
                        </p>

                        <h2>Why Contractors in the Jackson Metro Choose Mid South</h2>
                        <p>
                            Most national dumpster brokers route your call through a dispatch center three states away. By the time you get a confirmation, you&apos;ve lost half a day. Mid South is different — we&apos;re a locally owned company based in Jackson, which means:
                        </p>
                        <ul>
                            <li><strong>Same-day delivery</strong> — call before noon and we&apos;ll have a container on your site today</li>
                            <li><strong>Direct communication</strong> — you talk to the same team that drives the truck</li>
                            <li><strong>No-surprise pricing</strong> — delivery, pickup, disposal, and weight allowance are all included in one flat rate</li>
                            <li><strong>Flexible scheduling</strong> — 7AM–7PM, 7 days a week, including weekends</li>
                            <li><strong>Job site placement</strong> — driveways, commercial lots, active construction sites, and private land</li>
                        </ul>
                        <p>
                            When you&apos;re juggling subcontractors, inspections, and material deliveries, the last thing you need is a dumpster company that can&apos;t keep up. We match your pace.
                        </p>

                        <h2>Which Dumpster Size Fits Your Project?</h2>
                        <p>
                            Choosing the right container saves you money and avoids delays. Here&apos;s how our sizes map to typical contractor projects:
                        </p>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Recommended Size</th>
                                    <th>Price From</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bathroom remodel, small interior demo</td>
                                    <td><Link href="/services/10-yard-dumpster">10 Yard</Link></td>
                                    <td>$349</td>
                                </tr>
                                <tr>
                                    <td>Roof tear-off, kitchen gut, multi-room reno</td>
                                    <td><Link href="/services/15-yard-dumpster">15 Yard</Link></td>
                                    <td>$399</td>
                                </tr>
                                <tr>
                                    <td>New construction, full-house demo, commercial</td>
                                    <td><Link href="/services/20-yard-dumpster">20 Yard</Link></td>
                                    <td>$449</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Not sure? Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> and describe the job — we&apos;ll recommend the right size based on what we&apos;ve seen on similar projects in the Jackson area.
                        </p>

                        <h2>Common Contractor Use Cases</h2>

                        <h3>Roofing Contractors</h3>
                        <p>
                            A standard residential roof tear-off in Jackson typically produces 2–4 tons of old shingles, underlayment, and flashing. Our <Link href="/blog/roofing-dumpster-rental-jackson-ms">15-yard dumpster</Link> is the most popular choice for single-layer tear-offs, while the 20-yard handles multi-layer or larger commercial roofs. We can have the dumpster on-site before your crew arrives and pick it up the same day the job wraps.
                        </p>

                        <h3>General Contractors &amp; Remodelers</h3>
                        <p>
                            Kitchen guts, bathroom demos, flooring replacement, drywall tear-out — renovation debris adds up fast. Most GCs running a whole-house remodel in the Jackson metro go with a 15- or 20-yard container. If the project spans multiple weeks, we offer 7-day rentals with extensions at just $50/day.
                        </p>

                        <h3>Property Flippers &amp; Investors</h3>
                        <p>
                            If you&apos;re flipping houses in Central Mississippi, time is money. We work with several local real estate investors who need fast turnaround between purchase and renovation. Our <Link href="/blog/rental-property-cleanout-dumpster-rental-ms">rental property cleanout service</Link> is designed exactly for this — clean out the old, demo what needs to go, and get the dumpster out of the way so your crews can start working.
                        </p>

                        <h2>What Construction Debris We Accept</h2>
                        <p><strong>Accepted materials include:</strong></p>
                        <ul>
                            <li>Lumber, framing, and plywood</li>
                            <li>Drywall and sheetrock</li>
                            <li>Roofing shingles and underlayment</li>
                            <li>Insulation (non-asbestos)</li>
                            <li>Flooring — tile, hardwood, laminate, carpet</li>
                            <li>Siding, trim, and gutters</li>
                            <li>Concrete and brick (limited quantities — call for guidance)</li>
                            <li>Metal scraps, nails, and hardware</li>
                        </ul>
                        <p><strong>Prohibited items:</strong> hazardous waste, asbestos, paint cans with liquid, chemicals, tires, batteries, appliances with Freon, and propane tanks. See our full guide on <Link href="/blog/what-can-i-put-in-a-dumpster">what can go in a dumpster</Link>.</p>

                        <h2>Service Area for Contractor Delivery</h2>
                        <p>We deliver to job sites across the entire Central Mississippi tri-county area:</p>
                        <ul>
                            <li><strong>Hinds County:</strong> <Link href="/service-areas/jackson">Jackson</Link>, <Link href="/service-areas/clinton">Clinton</Link>, <Link href="/service-areas/byram">Byram</Link>, <Link href="/service-areas/terry">Terry</Link>, Raymond</li>
                            <li><strong>Rankin County:</strong> <Link href="/service-areas/brandon">Brandon</Link>, <Link href="/service-areas/pearl">Pearl</Link>, <Link href="/service-areas/flowood">Flowood</Link>, <Link href="/service-areas/florence">Florence</Link>, <Link href="/service-areas/richland">Richland</Link></li>
                            <li><strong>Madison County:</strong> <Link href="/service-areas/madison">Madison</Link>, <Link href="/service-areas/ridgeland">Ridgeland</Link>, <Link href="/service-areas/canton">Canton</Link>, <Link href="/service-areas/flora">Flora</Link>, <Link href="/service-areas/gluckstadt">Gluckstadt</Link></li>
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
                            <h3>Need a Dumpster on Your Job Site?</h3>
                            <p>Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> or book online — same-day delivery available 7 days a week.</p>
                            <button type="button" className="btn btn-primary survcart-embed-presenter">Book Now</button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
