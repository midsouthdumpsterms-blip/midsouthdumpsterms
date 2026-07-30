import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/richland' },
    title: 'Roll Off Dumpster Rental Richland MS | Rankin County',
    description:
        'Roll off dumpster rental in Richland, MS and Rankin County. 10, 15 & 20-yard dumpsters with same-day delivery to all Richland neighborhoods. Flat-rate pricing starting at $349. Call 601-316-7891.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Richland MS | Rankin County',
        description: 'Locally owned roll off dumpster rental serving Richland & all of Rankin County. Same-day delivery, flat-rate pricing, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/richland',
    },
}

export default function RichlandPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Richland, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Richland',
        undefined,
        ['39218']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Richland', url: 'https://midsouthdumpsterms.com/service-areas/richland' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: "How much does it cost to rent a roll off dumpster in Richland, MS?",
            answer: "Our roll off dumpster rentals in Richland start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size) with no hidden fees."
        },
        {
            question: "Do I need a permit to rent a dumpster in Richland?",
            answer: "You only need a permit if placing the dumpster on a public street or right-of-way in Richland. If placed in your private driveway, no permit is required. Contact Richland City Hall for specific street placement regulations."
        },
        {
            question: "What items are not allowed in your dumpsters in Richland?",
            answer: "For safety and environmental reasons, we cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. If you have specific items you are unsure about, just give us a call before booking."
        },
        {
            question: "Do you serve all of Rankin County, MS?",
            answer: "Yes! We provide roll off dumpster rental throughout all of Rankin County including Richland, Brandon, Pearl, Flowood, Florence, Pelahatchie, and surrounding communities. Same-day delivery is available when you call before noon."
        },
        {
            question: "How quickly can you deliver a roll off dumpster to Richland, MS?",
            answer: "We offer same-day and next-day roll off dumpster delivery in Richland and Rankin County. Call us before noon at 601-316-7891 and we can typically deliver the same day, 7 days a week."
        }
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Richland, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Richland and all of Rankin County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Richland Dumpster" location="Richland Service Area Hero" />
                        <TrackedPhoneLink location="Richland Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Richland</h2>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard size="10" capacity="4 Pickup Truck Loads" weight="1 Ton Included" pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }} idealFor={['Small Cleanouts', 'Garage Cleanup', 'Minor Renovations', 'Yard Debris']} />
                        <DumpsterSizeCard size="15" capacity="6 Pickup Truck Loads" weight="2 Tons Included" pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }} idealFor={['Home Renovations', 'Roofing Projects', 'Estate Cleanouts', 'Medium Construction']} popular />
                        <DumpsterSizeCard size="20" capacity="8 Pickup Truck Loads" weight="3 Tons Included" pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }} idealFor={['Large Renovations', 'New Construction', 'Major Demolition', 'Commercial Projects']} />
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Choose Mid South for Richland Dumpster Rental?</h2>
                            <p>We're a locally owned Central Mississippi company. We own our trucks and handle every delivery ourselves — no third-party brokers. Richland residents and contractors get fast, reliable roll off dumpster service backed by our 5-star Google reputation.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Richland and all of Rankin County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Richland Project</h2>
                            <p>Whether you're renovating a home in one of Richland's established neighborhoods, clearing an office building near the industrial corridor on US-49, handling <Link href="/blog/dumpster-rental-guide-for-home-renovations" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>a home remodel</Link>, or managing construction debris along Greenfield Road, we have the right roll off dumpster for your needs.</p>
                            <p><strong>Common roll off dumpster uses in Richland, MS:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Construction and demolition debris</li>
                                <li>Estate and foreclosure cleanouts</li>
                                <li>Commercial and industrial cleanouts</li>
                                <li>Yard waste and storm cleanup</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Roll Off Dumpster Rental Serving All of Rankin County, MS</h2>
                    <p>
                        Richland sits at the heart of the Jackson metro's industrial and residential corridor, right on the Rankin County border. We provide fast roll off dumpster rental throughout all of Rankin County — from Richland and Pearl to Brandon, Flowood, Florence, and Pelahatchie. Whether your project is a quick residential cleanout or a multi-week commercial job, our locally owned trucks are ready.
                    </p>
                    <h2 style={{ marginTop: '2.5rem' }}>Neighborhoods &amp; Areas We Serve in Richland, MS</h2>
                    <p>
                        Richland is a growing city at the crossroads of Rankin County&apos;s residential and industrial corridors &mdash; and we deliver to every part of it. Our roll off dumpsters reach every neighborhood and road in Richland, including:
                    </p>
                    <ul className={styles.projectsList} style={{ marginBottom: '1.5rem' }}>
                        <li><strong>Richland Hills &amp; Richland East</strong> &mdash; Established residential neighborhoods; active roofing, remodeling &amp; cleanout work (ZIP 39218)</li>
                        <li><strong>Sylvan Hills &amp; Monterey Woods</strong> &mdash; Family subdivisions; frequent estate cleanout &amp; renovation deliveries</li>
                        <li><strong>Southwind &amp; West Wind</strong> &mdash; Residential communities in the western Richland corridor</li>
                        <li><strong>Bradford Place of Richland</strong> &mdash; Established subdivision off the US-49 corridor</li>
                        <li><strong>Bluebird &amp; Bullock Forrest</strong> &mdash; Residential areas in Richland&apos;s growing zones</li>
                        <li><strong>Richland Industrial Park &amp; US-49 corridor</strong> &mdash; Major logistics &amp; distribution hub; commercial container &amp; demo cleanouts (ZIP 39218)</li>
                        <li><strong>Wise Road corridor</strong> &mdash; Residential &amp; commercial access road through central Richland</li>
                        <li><strong>Greenfield Road area</strong> &mdash; Commercial &amp; residential zone near the Rankin County border</li>
                        <li><strong>Hinds Community College (Rankin Branch) area</strong> &mdash; Educational corridor; contractor &amp; commercial projects</li>
                        <li><strong>I-55 &amp; I-20 interchange corridor</strong> &mdash; Major transportation hub; commercial &amp; industrial contractor work (ZIP 39218)</li>
                        <li><strong>Jackson-Evers Airport access corridor</strong> &mdash; Commercial &amp; light industrial zone; frequent job site deliveries</li>
                    </ul>
                    <p>
                        Richland&apos;s mix of residential neighborhoods and commercial areas makes it an active hub for home improvement, commercial work, and construction. We&apos;re proud to serve this community with professional roll off dumpster rentals. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Rankin County customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Planning a rental?</strong> Read our guide on <Link href="/blog/how-to-choose-dumpster-size">how to choose the right dumpster size</Link> for your project.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Richland is part of <Link href="/service-areas/rankin-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Rankin County</Link> — view all Rankin County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions: Richland Dumpster Rentals</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>How much does it cost to rent a dumpster in Richland, MS?</h3>
                            <p>Our dumpster rentals in Richland start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size).</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Do you serve commercial and industrial customers in Richland?</h3>
                            <p>Yes! In addition to residential service, we're experienced with commercial and industrial projects in the Richland area. We can service ongoing job sites or one-time cleanout projects for businesses, contractors, and property managers.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What items are not allowed in your dumpsters in Richland?</h3>
                            <p>For safety and environmental reasons, we cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. If you have specific items you are unsure about, just give us a call before booking.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)', maxHeight: '480px' }}>
                        <Image
                            src="/images/gallery/same-day-dumpster-rental-richland.jpg"
                            alt="Mid South Dumpster Rentals same-day roll-off container delivery in Richland, Mississippi (Rankin County) — serving US-49, Richland Industrial Park &amp; surrounding neighborhoods"
                            width={760}
                            height={480}
                            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        Mid South Dumpster Rentals in Richland, MS (Rankin County) — same-day roll-off delivery to US-49, Richland Industrial Park &amp; all Richland neighborhoods.
                    </p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Richland?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Richland Service Area CTA" />
                </div>
            </section>
        </>
    )
}
