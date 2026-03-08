import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'

export const metadata: Metadata = {
    title: 'Dumpster Rentals Jackson MS | Same-Day Service',
    description:
        'Serving Fondren, Belhaven & Northeast Jackson with 10-20 yard dumpsters. Same-day delivery, flat-rate pricing. Perfect for home renovations & construction. Call 601-316-7891.',
    openGraph: {
        title: 'Dumpster Rentals in Jackson, MS | Mid South',
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
                        <a href="tel:6013167891" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </a>
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
                            <p>Whether you're renovating a home in Fondren, clearing out an estate in Belhaven, or managing a construction project in downtown Jackson, we have the right dumpster size for your needs.</p>
                            <p><strong>Common uses in Jackson:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Construction and demolition</li>
                                <li>Estate and foreclosure cleanouts</li>
                                <li>Roofing projects</li>
                                <li>Yard waste and landscaping</li>
                                <li>Commercial cleanouts</li>
                            </ul>

                            <div style={{ marginTop: '2rem' }}>
                                <Image
                                    src="/images/gallery/dumpster-rental-jackson-ms-delivery.jpg"
                                    alt="Dumpster rental delivery in Jackson, Mississippi"
                                    width={600}
                                    height={400}
                                    style={{ borderRadius: '8px', objectFit: 'cover', width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Neighborhoods We Serve in Jackson</h2>
                    <p>
                        We proudly serve all neighborhoods throughout Jackson, Mississippi's capital city. Whether you're in the historic charm of <strong>Belhaven</strong> or <strong>Fondren</strong>, the communities of <strong>Tougaloo</strong>, <strong>Forest Hill Place</strong>, or <strong>Presidential Hills</strong>, we deliver fast, reliable dumpster rental service to your location.
                    </p>
                    <p>
                        From <strong>Alta Woods</strong> and <strong>Cedar Hills</strong> to <strong>Pear Orchard</strong>, <strong>Northpointe</strong>, and <strong>Wildwood</strong>, our service covers every corner of Jackson. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Jackson customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Need a specific dumpster size in Jackson?</strong> Check out our guide on renting a <Link href="/blog/20-yard-dumpster-rental-jackson-ms">20-Yard Dumpster in Jackson, MS</Link>.
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
