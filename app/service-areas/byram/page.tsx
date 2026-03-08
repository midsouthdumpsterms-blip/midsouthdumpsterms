import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'

export const metadata: Metadata = {
    title: 'Dumpster Rentals Byram MS | Siwell Road Service',
    description:
        'Professional dumpster rentals for Byram & Siwell Road area. 10-20 yard roll-offs with transparent pricing. Perfect for renovations, cleanouts & construction.',
    openGraph: {
        title: 'Dumpster Rentals in Byram, MS | Mid South',
        description: 'Serving Byram & Siwell Road area with same-day dumpster delivery.',
        url: 'https://midsouthdumpsterms.com/service-areas/byram',
    },
}

const faqs = [
    {
        question: 'Do I need a permit to rent a dumpster in Byram, MS?',
        answer: 'You typically only need a permit if placing the dumpster on a public street or right-of-way in Byram. If placed in your private driveway, no permit is required. Contact Byram Public Works for street placement regulations.',
    },
    {
        question: 'How much does dumpster rental cost in Byram?',
        answer: 'Our flat-rate pricing for Byram includes delivery, pickup, and disposal. Prices start at $349 for a 10-yard dumpster, $399 for a 15-yard, and $449 for a 20-yard container, with no hidden fees.',
    },
    {
        question: 'What items are prohibited in Byram dumpsters?',
        answer: 'Prohibited items include hazardous materials, wet paint, tires, batteries, and appliances containing Freon. For these items, you will need to contact Hinds County solid waste management.',
    },
]

export default function ByramPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Byram, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Byram',
        undefined,
        ['39272']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Byram', url: 'https://midsouthdumpsterms.com/service-areas/byram' },
    ])
    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Dumpster Rentals in Byram, MS</h1>
                    <p className={styles.heroSubtext}>
                        Fast, affordable roll-off dumpster delivery throughout Byram and surrounding areas
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Byram Dumpster" location="Byram Service Area Hero" />
                        <a href="tel:6013167891" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Byram</h2>
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
                            <h2>Why Choose Us in Byram?</h2>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day delivery available</li>
                                <li>✓ Serving Byram and Hinds County</li>
                                <li>✓ Transparent pricing with no hidden fees</li>
                                <li>✓ 10, 15, and 20-yard dumpsters</li>
                                <li>✓ Residential and commercial service</li>
                                <li>✓ 7 days a week, 7AM - 7PM</li>
                                <li>✓ Professional, courteous service</li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/gallery/local-dumpster-service-byram-truck.jpg"
                                alt="Local dumpster rental delivery truck placing a roll-off container in Byram, MS"
                                width={600}
                                height={400}
                                className={styles.contentImage}
                            />
                            <h2>Perfect For Byram Projects</h2>
                            <p>Whether you're <Link href="/blog/dumpster-rental-guide-for-home-renovations" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>renovating a home</Link> in the Siwell Road area, clearing out an estate, or managing a construction project in Byram, we have the right dumpster size for your needs.</p>
                            <p><strong>Common uses in Byram:</strong></p>
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
                    <h2>Neighborhoods We Serve in Byram</h2>
                    <p>
                        We proudly serve all neighborhoods throughout Byram, a growing community in Hinds County. Whether you're in <strong>Lake Dockery</strong>, <strong>Lake Ridgelea</strong>, <strong>Byramdale Estates</strong>, <strong>Brannan Ridge</strong>, or <strong>Byram Estates</strong>, we deliver fast, reliable dumpster rental service to your location.
                    </p>
                    <p>
                        Byram's convenient location and residential communities make it a great place for families and businesses. We're committed to providing professional dumpster rental service for all your project needs.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection} style={{ padding: 'var(--spacing-3xl) 0', backgroundColor: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2 className="text-center">Byram Dumpster Rental FAQs</h2>
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
                    <h2>Ready to Rent a Dumpster in Byram?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Byram Service Area CTA" />
                </div>
            </section>
        </>
    )
}
