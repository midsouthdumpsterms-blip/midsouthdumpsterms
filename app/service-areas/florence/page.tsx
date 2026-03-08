import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'

export const metadata: Metadata = {
    title: 'Dumpster Rentals Florence MS | Rankin County Service',
    description:
        'Serving Florence & Rankin County with affordable dumpster rentals. 10-20 yard sizes for home renovations, cleanouts & construction. Call 601-316-7891.',
    openGraph: {
        title: 'Dumpster Rentals in Florence, MS | Mid South',
        description: 'Serving Florence & Rankin County with same-day dumpster delivery.',
        url: 'https://midsouthdumpsterms.com/service-areas/florence',
    },
}

const faqs = [
    {
        question: 'Do I need a permit to rent a dumpster in Florence, MS?',
        answer: 'For placement on your own private property, such as a driveway, no permit is required. If the dumpster needs to sit on a public street, you must contact the City of Florence for permit requirements.',
    },
    {
        question: 'How much does dumpster rental cost in Florence?',
        answer: 'Our flat-rate pricing for Florence includes delivery, pickup, and a set disposal weight. Prices start at $349 for a 10-yard dumpster, $399 for a 15-yard, and $449 for a 20-yard container, with no hidden fees.',
    },
    {
        question: 'What items cannot be thrown in a dumpster in Florence?',
        answer: 'Prohibited items include hazardous materials, wet paint, tires, batteries, and Freon items. Contact Rankin County solid waste for instructions on safely disposing of these.',
    },
]

export default function FlorencePage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Florence, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Florence',
        undefined,
        ['39073']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Florence', url: 'https://midsouthdumpsterms.com/service-areas/florence' },
    ])
    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Dumpster Rentals in Florence, MS</h1>
                    <p className={styles.heroSubtext}>
                        Fast, affordable roll-off dumpster delivery throughout Florence and surrounding areas
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Florence Dumpster" location="Florence Service Area Hero" />
                        <a href="tel:6013167891" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Florence</h2>
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
                            <h2>Why Choose Us in Florence?</h2>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day delivery available</li>
                                <li>✓ Serving Florence and Rankin County</li>
                                <li>✓ Transparent pricing with no hidden fees</li>
                                <li>✓ 10, 15, and 20-yard dumpsters</li>
                                <li>✓ Residential and commercial service</li>
                                <li>✓ 7 days a week, 7AM - 7PM</li>
                                <li>✓ Professional, courteous service</li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/gallery/affordable-dumpster-rental-jackson-pricing.jpg"
                                alt="Affordable roll-off dumpster delivered to a driveway in Florence, MS"
                                width={600}
                                height={400}
                                className={styles.contentImage}
                            />
                            <h2>Perfect For Florence Projects</h2>
                            <p>Whether you're <Link href="/blog/dumpster-rental-guide-for-home-renovations" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>renovating a home</Link>, clearing out an estate, or managing a construction project in Florence, we have the right dumpster size for your needs.</p>
                            <p><strong>Common uses in Florence:</strong></p>
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
                    <h2>Neighborhoods We Serve in Florence</h2>
                    <p>
                        We proudly serve all neighborhoods throughout Florence, a growing community in Rankin County. Whether you're in <strong>Cleary</strong>, <strong>Southern Oaks</strong>, <strong>Triangle Acres</strong>, <strong>Eaglewood</strong>, <strong>Deer Valley</strong>, <strong>Stonebrook</strong>, <strong>Hemphill Park</strong>, or <strong>Burnside Estates</strong>, we deliver fast, reliable dumpster rental service to your location.
                    </p>
                    <p>
                        Florence's convenient location and residential communities make it a great place for families and businesses. We're committed to providing professional dumpster rental service for all your project needs.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection} style={{ padding: 'var(--spacing-3xl) 0', backgroundColor: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2 className="text-center">Florence Dumpster Rental FAQs</h2>
                    <div className={styles.faqList}>
                        {faqs.map((faq, index) => (
                            <div key={index} className={styles.faqItem} style={{ marginBottom: 'var(--spacing-xl)' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Florence?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Florence Service Area CTA" />
                </div>
            </section>
        </>
    )
}
