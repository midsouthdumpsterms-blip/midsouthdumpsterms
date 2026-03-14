import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Dumpster Rentals Richland MS | Rankin County Area',
    description:
        'Professional dumpster rentals for Richland & Rankin County. 10-20 yard roll-offs with same-day delivery. Residential & commercial service. Book online.',
    openGraph: {
        title: 'Dumpster Rentals in Richland, MS | Mid South',
        description: 'Serving Richland & Rankin County with same-day dumpster delivery.',
        url: 'https://midsouthdumpsterms.com/service-areas/richland',
    },
}

const faqs = [
    {
        question: 'Do I need a permit to rent a dumpster in Richland, MS?',
        answer: 'You only need a permit if placing the dumpster on a public street or right-of-way in Richland. If placed in your private driveway or commercial lot, no permit is required. Contact Richland Public Works for street placement regulations.',
    },
    {
        question: 'How much does dumpster rental cost in Richland?',
        answer: 'Our flat-rate pricing for Richland includes delivery, pickup, and disposal. Prices start at $349 for a 10-yard dumpster, $399 for a 15-yard, and $449 for a 20-yard container, with no hidden fees.',
    },
    {
        question: 'What items are prohibited in Richland dumpsters?',
        answer: 'Prohibited items include hazardous materials, wet paint, tires, batteries, and appliances containing Freon. For disposal options, contact Rankin County solid waste management.',
    },
]

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
    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Dumpster Rentals in Richland, MS</h1>
                    <p className={styles.heroSubtext}>
                        Fast, affordable roll-off dumpster delivery throughout Richland and surrounding areas
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
                            <h2>Why Choose Us in Richland?</h2>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day delivery available</li>
                                <li>✓ Serving Richland and Rankin County</li>
                                <li>✓ Transparent pricing with no hidden fees</li>
                                <li>✓ 10, 15, and 20-yard dumpsters</li>
                                <li>✓ Residential and commercial service</li>
                                <li>✓ 7 days a week, 7AM - 7PM</li>
                                <li>✓ Professional, courteous service</li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/gallery/reliable-waste-management-ms-delivery.jpg"
                                alt="Reliable dumpster rental and waste management delivery truck operating in Richland, MS"
                                width={600}
                                height={400}
                                className={styles.contentImage}
                            />
                            <h2>Perfect For Richland Projects</h2>
                            <p>Whether you're renovating a home, clearing out an estate, or managing a commercial construction project in Richland, we have the right <Link href="/blog/how-to-choose-dumpster-size" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>dumpster size</Link> for your needs.</p>
                            <p><strong>Common uses in Richland:</strong></p>
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
                    <h2>Neighborhoods We Serve in Richland</h2>
                    <p>
                        We proudly serve all neighborhoods throughout Richland, a vibrant community in Rankin County. Whether you're in <strong>Bluebird</strong>, <strong>Bradford Place</strong>, <strong>Bullock Forrest</strong>, <strong>Monterey Woods</strong>, <strong>Richland East</strong>, or <strong>Southwind</strong>, we deliver fast, reliable dumpster rental service to your location.
                    </p>
                    <p>
                        Richland's established neighborhoods and convenient location make it a desirable place to live and work. We're here to support your home improvement and construction projects with professional dumpster rental service.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection} style={{ padding: 'var(--spacing-3xl) 0', backgroundColor: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2 className="text-center">Richland Dumpster Rental FAQs</h2>
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
