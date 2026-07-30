import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/jackson' },
    title: 'Dumpster Rentals Jackson MS | Same-Day Service',
    description:
        'Serving Fondren, Belhaven & Northeast Jackson with 10-20 yard dumpsters. Same-day delivery, flat-rate pricing. Perfect for home renovations & construction. Call 601-316-7891.',
    openGraph: {
        title: 'Dumpster Rentals in Jackson, MS',
        description: 'Serving Fondren, Belhaven & Northeast Jackson with same-day dumpster delivery.',
        url: 'https://midsouthdumpsterms.com/service-areas/jackson',
    },
}

export default function JacksonPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Jackson, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Jackson',
        undefined,
        ['39201', '39202', '39203', '39204', '39206', '39209', '39211', '39212', '39213', '39216', '39217']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Jackson', url: 'https://midsouthdumpsterms.com/service-areas/jackson' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: "Do I need a permit to rent a dumpster in Jackson, MS?",
            answer: "If the dumpster is placed on your private driveway or yard in Jackson, no permit is required. However, if the dumpster needs to be placed on a public street or right-of-way, you will need to obtain a permit from the City of Jackson."
        },
        {
            question: "How long can I keep my dumpster rental in Jackson?",
            answer: "Our standard rental period gives you plenty of time to complete your project. If you finish early, just give us a call and we'll pick it up! Need it longer? We offer flexible, affordable daily extensions."
        },
        {
            question: "What roll-off dumpster sizes are best for a home cleanout in Jackson?",
            answer: "For a standard garage cleanout or small remodel in Belhaven or Fondren, a 10-yard dumpster is often sufficient. For larger whole-home cleanouts, we recommend our most popular size: the 20-yard dumpster."
        }
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Dumpster Rentals in Jackson, MS</h1>
                    <p className={styles.heroSubtext}>
                        Fast, affordable roll-off dumpster delivery throughout Jackson and surrounding areas
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Jackson Dumpster" location="Jackson Service Area Hero" />
                        <TrackedPhoneLink location="Jackson Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Jackson</h2>
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
                            <h2>Why Choose Us in Jackson?</h2>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day delivery available</li>
                                <li>✓ Serving Jackson since day one</li>
                                <li>✓ Transparent pricing with no hidden fees</li>
                                <li>✓ 10, 15, and 20-yard dumpsters</li>
                                <li>✓ Residential and commercial service</li>
                                <li>✓ 7 days a week, 7AM - 7PM</li>
                                <li>✓ Professional, courteous service</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Jackson Projects</h2>
                            <p>Whether you&apos;re renovating a home in Fondren, clearing out an estate in Belhaven, or managing a construction project in downtown Jackson, we have the right dumpster size for your needs.</p>
                            <p><strong>Common uses in Jackson:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Construction and demolition</li>
                                <li>Estate and foreclosure cleanouts</li>
                                <li>Roofing projects</li>
                                <li>Yard waste and landscaping</li>
                                <li>Commercial cleanouts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Areas &amp; Neighborhoods We Serve in Jackson, MS</h2>
                    <p>
                        Jackson is Mississippi&apos;s largest city and our home base — we know every corner of it. From the historic Belhaven streetscapes to the busy commercial strips of North Jackson, we deliver roll off dumpsters across all of Jackson&apos;s neighborhoods, ZIP codes, and surrounding corridors. No neighborhood is too small, no property too large.
                    </p>
                    <ul className={styles.projectsList} style={{ marginBottom: '1.5rem' }}>
                        <li><strong>Belhaven &amp; Belhaven Heights</strong> — Historic 1900s-era homes near Belhaven University &amp; the Eudora Welty House (ZIP 39202)</li>
                        <li><strong>Fondren</strong> — Arts district, older homes, dense residential &amp; commercial renovation activity (ZIP 39216)</li>
                        <li><strong>Midtown</strong> — Near Millsaps College &amp; the medical corridor; active renovation &amp; cleanout area (ZIP 39202)</li>
                        <li><strong>Eastover &amp; Ridgewood</strong> — Established Northeast Jackson residential area; estate cleanouts &amp; remodels (ZIP 39211)</li>
                        <li><strong>North Jackson</strong> — Residential neighborhoods along Old Canton Road, Ridgewood Road &amp; County Line Road corridor (ZIP 39211)</li>
                        <li><strong>South Jackson</strong> — McDowell Road, Highway 18 corridor, industrial &amp; residential service (ZIP 39204)</li>
                        <li><strong>West Jackson</strong> — Lynch Street &amp; Capitol Street corridors, older residential stock &amp; commercial (ZIP 39209)</li>
                        <li><strong>Downtown Jackson</strong> — Capitol District, Farish Street, State Street &amp; Amite Street commercial corridor (ZIP 39201)</li>
                        <li><strong>Northeast Jackson</strong> — Sherwood &amp; Forest Hill communities near Lakeland Drive &amp; Spillway Road (ZIP 39206)</li>
                        <li><strong>Tougaloo &amp; North Jackson border</strong> — Near Tougaloo College &amp; County Line Road (ZIP 39213)</li>
                        <li><strong>Alta Woods, Presidential Hills &amp; Forest Hill</strong> — Southeast Jackson residential communities (ZIP 39212)</li>
                        <li><strong>Northpointe, Cedar Hills &amp; Pear Orchard</strong> — Northwest Jackson residential neighborhoods (ZIP 39213)</li>
                    </ul>
                    <p>
                        We also serve the major commercial and institutional corridors throughout Jackson — including the <strong>University of Mississippi Medical Center (UMMC)</strong> area, the <strong>Metrocenter</strong> district, and properties along <strong>I-55</strong>, <strong>I-20</strong>, and <strong>Highway 80</strong>. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Jackson customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Need a specific dumpster size in Jackson?</strong> Check out our guide on renting a <Link href="/blog/20-yard-dumpster-rental-jackson-ms">20-Yard Dumpster in Jackson, MS</Link>.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Jackson is located in <Link href="/service-areas/hinds-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Hinds County</Link> — see all Hinds County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions: Jackson Dumpster Rentals</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>Do I need a permit to rent a dumpster in Jackson, MS?</h3>
                            <p>If the dumpster is placed on your private driveway or yard in Jackson, no permit is required. However, if the dumpster needs to be placed on a public street or right-of-way, you will need to obtain a permit from the City of Jackson.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>How long can I keep my dumpster rental in Jackson?</h3>
                            <p>Our standard rental period gives you plenty of time to complete your project. If you finish early, just give us a call and we'll pick it up! Need it longer? We offer flexible, affordable daily extensions.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What roll-off dumpster sizes are best for a home cleanout in Jackson?</h3>
                            <p>For a standard garage cleanout or small remodel in Belhaven or Fondren, a 10-yard dumpster is often sufficient. For larger whole-home cleanouts, we recommend our most popular size: the 20-yard dumpster.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
                        <Image
                            src="/images/gallery/dumpster-rental-jackson-ms-delivery.jpg"
                            alt="Mid South Dumpster Rentals roll-off container on delivery in Jackson, Mississippi — serving Hinds County residential and commercial customers"
                            width={760}
                            height={480}
                            style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        Mid South Dumpster Rentals delivery in Jackson, MS (Hinds County) — same-day roll-off service available 7 days a week.
                    </p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Jackson?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Jackson Service Area CTA" />
                </div>
            </section>
        </>
    )
}
