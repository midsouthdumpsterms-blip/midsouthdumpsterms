import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import PriceSummary from '@/components/PriceSummary'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/brandon' },
    title: 'Dumpster Rental Brandon MS | Same-Day',
    description:
        'Roll-off dumpster rental in Brandon, MS from $349. 10, 15 and 20-yard containers, same-day delivery to Crossgates, Castlewoods and the Reservoir.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Brandon MS | Rankin County',
        description: 'Locally owned roll off dumpster rental serving Brandon & all of Rankin County. Same-day delivery, flat-rate pricing, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/brandon',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

export default function BrandonPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Brandon, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Brandon',
        undefined,
        ['39042', '39047', '39043']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Brandon', url: 'https://midsouthdumpsterms.com/service-areas/brandon' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: "How much does it cost to rent a roll off dumpster in Brandon, MS?",
            answer: "Our roll off dumpster rentals in Brandon start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size) with no hidden fees."
        },
        {
            question: "Can you deliver a dumpster to my neighborhood in Crossgates or Castlewoods?",
            answer: "Yes! We regularly deliver roll off dumpsters to Crossgates, Castlewoods, Shiloh, and all other subdivisions throughout Brandon and Rankin County. Our trucks are designed to safely navigate residential streets without damaging driveways."
        },
        {
            question: "What items are not allowed in your dumpsters in Brandon?",
            answer: "For safety and environmental reasons, we cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. If you have specific items you are unsure about, just give us a call before booking."
        },
        {
            question: "Do you serve all of Rankin County, MS?",
            answer: "Yes! We provide roll off dumpster rental throughout all of Rankin County including Brandon, Pearl, Flowood, Richland, Florence, Pelahatchie, and surrounding communities. Same-day delivery is available when you call before noon."
        },
        {
            question: "How quickly can you deliver a roll off dumpster to Brandon, MS?",
            answer: "We offer same-day and next-day roll off dumpster delivery in Brandon and Rankin County. Call us before noon at 601-316-7891 and we can typically deliver the same day, 7 days a week."
        }
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Brandon, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Brandon and all of Rankin County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Brandon Dumpster" location="Brandon Service Area Hero" />
                        <TrackedPhoneLink location="Brandon Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Brandon</h2>
                    <PriceSummary place="Brandon" />
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Choose Mid South for Brandon Dumpster Rental?</h2>
                            <p>We're a locally owned Central Mississippi company. We own our trucks and do our own deliveries — no third-party brokers. Rankin County customers get fast, reliable roll off dumpster service backed by our 5-star reputation.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Brandon and all of Rankin County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Brandon Project</h2>
                            <p>Whether you're renovating a home in Crossgates, clearing an estate in Winner's Circle, managing a construction project in Reservoir Point, or working a roofing job near the Rankin County Courthouse area, we have the right roll off dumpster for your needs.</p>
                            <p><strong>Common roll off dumpster uses in Brandon, MS:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Construction and demolition debris</li>
                                <li>Estate and foreclosure cleanouts</li>
                                <li>Yard waste and storm cleanup</li>
                                <li>Commercial contractor projects</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Roll Off Dumpster Rental Serving All of Rankin County, MS</h2>
                    <p>
                        Brandon is the Rankin County seat, and it&apos;s a key part of our service territory. We provide fast roll off dumpster rental throughout all of Rankin County — from Brandon and Pearl to Flowood, Richland, Florence, and Pelahatchie. Whether your project is a quick residential cleanout or a multi-week commercial job, our locally owned trucks are ready.
                    </p>
                    <h2>Neighborhoods &amp; Communities We Serve in Brandon, MS</h2>
                    <p>
                        Brandon is one of the fastest-growing cities in Mississippi, and our trucks are in its neighborhoods every week. We deliver roll off dumpsters across every subdivision, road, and community in Brandon, including:
                    </p>
                    <ul className={styles.projectsList} style={{ marginBottom: '1.5rem' }}>
                        <li><strong>Crossgates</strong> — One of Brandon&apos;s largest and most established subdivisions; active roofing, remodeling &amp; cleanout work along Crossgates Boulevard (ZIP 39042)</li>
                        <li><strong>Castlewoods</strong> — Upscale gated community with golf course off Castlewoods Boulevard; estate cleanouts &amp; high-end renovation projects</li>
                        <li><strong>Shiloh &amp; Shiloh Crossing</strong> — Established residential area along Hwy 80 East; frequent home renovation &amp; yard debris projects</li>
                        <li><strong>Castle Woods / Bellegrove</strong> — Newer residential developments in northeast Brandon; active new construction &amp; remodeling corridor</li>
                        <li><strong>Gardens of Manship</strong> — Established subdivision off Hwy 471 / Manship Road corridor</li>
                        <li><strong>Hidden Hills &amp; Copperfield</strong> — Residential neighborhoods off Old Hwy 80 &amp; Brandon Road areas</li>
                        <li><strong>Waterwood &amp; Glen Arbor</strong> — Quiet residential communities in the west Brandon corridor</li>
                        <li><strong>Crossview Plantation</strong> — Established subdivision along the Hwy 80 East / Rankin County line corridor</li>
                        <li><strong>Winner&apos;s Circle &amp; Reservoir Point</strong> — Brandon communities near the Ross Barnett Reservoir spillway area</li>
                        <li><strong>Downtown Brandon / Rankin County Courthouse area</strong> — Historic downtown core; commercial cleanouts, contractor staging &amp; older residential stock (ZIP 39042)</li>
                        <li><strong>Highway 80 East corridor</strong> — Commercial strip east of Jackson; industrial &amp; contractor work heading toward Pelahatchie</li>
                        <li><strong>Highway 471 / Airport Road corridor</strong> — Growth corridor connecting Brandon to Flowood &amp; Pearl; new construction &amp; commercial projects</li>
                    </ul>
                    <p>
                        Brandon&apos;s thriving community and expanding development make it one of the metro area&apos;s most desirable locations for home improvement and construction. We&apos;re proud to serve Rankin County with professional roll off dumpster rentals. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Brandon customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Planning a rental?</strong> Read our guide on <Link href="/service-areas/brandon">Dumpster Rentals in Brandon, MS</Link> for more local tips and advice on sizing.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Brandon is the seat of <Link href="/service-areas/rankin-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Rankin County</Link> — view all Rankin County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions: Brandon Dumpster Rentals</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>How much does it cost to rent a dumpster in Brandon, MS?</h3>
                            <p>Our dumpster rentals in Brandon start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size).</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Can you deliver a dumpster to my neighborhood in Crossgates?</h3>
                            <p>Yes! We regularly deliver roll-off dumpsters to Crossgates, Castlewoods, Shiloh, and all other subdivisions throughout Brandon and Rankin County. Our trucks are designed to safely navigate residential streets.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What items are not allowed in your dumpsters in Brandon?</h3>
                            <p>For safety and environmental reasons, we cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. If you have specific items you are unsure about, just give us a call before booking.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
                        <Image
                            src="/images/gallery/residential-dumpster-rental-brandon-driveway.jpg"
                            alt="Mid South Dumpster Rentals roll-off container on a residential driveway in Brandon, Mississippi (Rankin County) — serving Crossgates, Castlewoods &amp; surrounding neighborhoods"
                            width={760}
                            height={480}
                            style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        Mid South Dumpster Rentals delivery in Brandon, MS (Rankin County) — same-day roll-off service to Crossgates, Castlewoods &amp; all Brandon neighborhoods.
                    </p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Brandon?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Brandon Service Area CTA" />
                </div>
            </section>
        </>
    )
}
