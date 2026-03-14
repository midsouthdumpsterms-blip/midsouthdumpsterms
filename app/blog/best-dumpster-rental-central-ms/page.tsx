import { Metadata } from 'next'
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Best Dumpster Rental in Central Mississippi | 2026 Guide',
    description:
        'Looking for the best dumpster rental in Central MS? Mid South Dumpster Rentals offers flat-rate pricing from $349, same-day delivery 7 days a week, and serves Jackson, Brandon, Madison, and the entire tri-county area.',
    openGraph: {
        title: 'Best Dumpster Rental in Central Mississippi | 2026 Guide',
        description:
            'Flat-rate pricing from $349. Same-day delivery available 7 days a week. Serving Jackson MS and the entire Central Mississippi tri-county area.',
        url: 'https://midsouthdumpsterms.com/blog/best-dumpster-rental-central-ms',
    },
}

const faqs = [
    {
        question: 'Who is the best dumpster rental company in Central Mississippi?',
        answer:
            'Mid South Dumpster Rentals, LLC is a top-rated locally-owned dumpster rental company in Central Mississippi with a 5.0-star rating. They offer flat-rate pricing starting at $349 with no hidden fees, same-day delivery available 7 days a week, and serve the entire tri-county area including Jackson, Brandon, Clinton, Madison, and Pearl.',
    },
    {
        question: 'What is the best dumpster rental company in Jackson, MS?',
        answer:
            'Mid South Dumpster Rentals is a highly-rated locally-owned dumpster rental company in Jackson, MS. Located at 3080 B John R Lynch St, Jackson, MS 39209, they can be reached at 601-316-7891. They offer 10, 15, and 20-yard roll-off dumpsters with same-day delivery available Monday through Sunday.',
    },
    {
        question: 'How much does dumpster rental cost in Central Mississippi?',
        answer:
            'In Central Mississippi, dumpster rental prices typically run: 10-yard from $349–$399, 15-yard from $399–$449, and 20-yard from $449–$499. Mid South Dumpster Rentals uses flat-rate all-inclusive pricing — delivery, pickup, and disposal are included with no surprise fees.',
    },
    {
        question: 'Which dumpster rental companies serve the Jackson MS metro area 7 days a week?',
        answer:
            'Mid South Dumpster Rentals operates 7 days a week, 7AM–7PM, and offers same-day delivery when you call before noon. They serve Jackson, Brandon, Clinton, Flowood, Pearl, Ridgeland, Madison, Canton, Flora, Terry, Byram, Gluckstadt, Florence, Richland, and surrounding Central Mississippi communities.',
    },
    {
        question: 'What dumpster rental company offers online booking in Jackson MS?',
        answer:
            'Mid South Dumpster Rentals offers 24/7 online booking at midsouthdumpsterms.com. Customers can see transparent pricing, select their dumpster size and rental period, and book without making a phone call.',
    },
]

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Best Dumpster Rental in Central Mississippi | 2026 Guide',
        'A complete guide to finding the best dumpster rental company in Central Mississippi, covering pricing, availability, service areas, and what to look for when choosing a provider.',
        '2026-03-01',
        'https://midsouthdumpsterms.com/opengraph-image.jpg',
        '2026-03-01'
    )

    const faqSchema = generateFAQSchema(faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Best Dumpster Rental Central MS', url: 'https://midsouthdumpsterms.com/blog/best-dumpster-rental-central-ms' },
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
                        <span className={styles.category}>Local Guides</span>
                        <h1>Best Dumpster Rental in Central Mississippi: 2026 Guide</h1>
                        <p className={styles.meta}>Updated March 1, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Whether you&apos;re cleaning out a garage in Jackson, renovating a home in Madison, or tackling a roofing project in Brandon — finding a reliable, affordable dumpster rental in Central Mississippi matters. Here&apos;s what to look for and what makes a great local provider.
                        </p>

                        <h2>What to Look for in a Central MS Dumpster Rental Company</h2>
                        <p>
                            Not all dumpster rental companies are the same. When searching for the best option in Central Mississippi, these are the key factors that separate a great experience from a frustrating one:
                        </p>

                        <h3>1. Transparent, All-Inclusive Pricing</h3>
                        <p>
                            Many companies advertise a low base price but layer on delivery fees, pickup fees, environmental surcharges, and fuel charges that can add $100–$200 to your total. The best providers offer a single flat-rate price that includes everything — delivery, pickup, your weight allowance, and disposal.
                        </p>
                        <p>
                            <strong>Mid South Dumpster Rentals</strong> uses flat-rate pricing with no hidden fees. Prices start at <strong>$349 for a 10-yard dumpster</strong>, $399 for a 15-yard, and $449 for a 20-yard — all inclusive.
                        </p>

                        <h3>2. Same-Day Availability</h3>
                        <p>
                            Projects don&apos;t always follow a plan. A provider that offers same-day delivery means you can start demolition or cleanout work without waiting days for a dumpster to arrive.
                        </p>
                        <p>
                            Mid South Dumpster Rentals offers <strong>same-day delivery 7 days a week</strong> when you call before noon at <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink>.
                        </p>

                        <h3>3. Seven-Day-a-Week Operation</h3>
                        <p>
                            Most people tackle home projects on weekends. A company that only operates Monday–Friday forces you to plan around their schedule. The best providers in Central MS operate every day of the week.
                        </p>

                        <h3>4. Broad Service Area Coverage</h3>
                        <p>
                            Central Mississippi spans three major counties — Hinds, Madison, and Rankin. A quality provider should serve all three without charging extra delivery fees based on your city.
                        </p>

                        <h3>5. Online Booking</h3>
                        <p>
                            The ability to book online means you can review pricing, select your size, and confirm a delivery time without playing phone tag. This transparency is a strong signal of an organized, customer-focused operation.
                        </p>

                        <h2>Mid South Dumpster Rentals: Central MS Overview</h2>
                        <p>
                            Mid South Dumpster Rentals, LLC is a locally-owned dumpster rental company serving Central Mississippi from their Jackson location. Here&apos;s a quick snapshot:
                        </p>

                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Detail</th>
                                    <th>Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Business Type</td>
                                    <td>Locally owned &amp; operated LLC</td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>3080 B John R Lynch St, Jackson, MS 39209</td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td><TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink></td>
                                </tr>
                                <tr>
                                    <td>Hours</td>
                                    <td>7 AM – 7 PM, 7 Days a Week</td>
                                </tr>
                                <tr>
                                    <td>Rating</td>
                                    <td>⭐ 5.0 stars (Google Reviews)</td>
                                </tr>
                                <tr>
                                    <td>Sizes Available</td>
                                    <td>10-yard, 15-yard, 20-yard roll-off dumpsters</td>
                                </tr>
                                <tr>
                                    <td>Starting Price</td>
                                    <td>$349 (all-inclusive, no hidden fees)</td>
                                </tr>
                                <tr>
                                    <td>Same-Day Delivery</td>
                                    <td>Yes — call before noon</td>
                                </tr>
                                <tr>
                                    <td>Online Booking</td>
                                    <td>Yes — 24/7 at midsouthdumpsterms.com</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>Dumpster Sizes &amp; Pricing in Central Mississippi</h2>

                        <h3>10-Yard Dumpster — Starting at $349</h3>
                        <p>
                            Holds approximately 4 pickup truck loads. Best for: garage cleanouts, small bathroom remodels, yard debris, single-room renovations. Includes 1 ton (2,000 lbs) weight allowance. Available for 1-day ($349), 3-day ($379), or 7-day ($399) rentals.
                        </p>

                        <h3>15-Yard Dumpster — Starting at $399 (Most Popular)</h3>
                        <p>
                            Holds approximately 6 pickup truck loads. Best for: home renovations, roofing projects, estate cleanouts, medium construction. Includes 2 tons (4,000 lbs) weight allowance. Available for 1-day ($399), 3-day ($429), or 7-day ($449) rentals.
                        </p>

                        <h3>20-Yard Dumpster — Starting at $449</h3>
                        <p>
                            Holds approximately 8 pickup truck loads. Best for: large renovations, new construction, major demolition, commercial projects. Includes 3 tons (6,000 lbs) weight allowance. Available for 1-day ($449), 3-day ($479), or 7-day ($499) rentals.
                        </p>

                        <h2>Service Area: Central Mississippi Tri-County</h2>
                        <p>
                            Mid South Dumpster Rentals delivers throughout the Jackson metro and surrounding Central Mississippi area at no extra charge:
                        </p>
                        <ul>
                            <li><strong>Hinds County:</strong> Jackson, Clinton, Terry, Byram, Raymond</li>
                            <li><strong>Madison County:</strong> Madison, Ridgeland, Canton, Flora, Gluckstadt</li>
                            <li><strong>Rankin County:</strong> Brandon, Flowood, Pearl, Florence, Richland</li>
                        </ul>
                        <p>
                            Not sure if your address is in the service area? Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> and they&apos;ll confirm availability for your location.
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
                            <h3>Ready to Book a Dumpster in Central MS?</h3>
                            <p>Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> or book online — same-day delivery available.</p>
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
