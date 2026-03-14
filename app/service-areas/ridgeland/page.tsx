import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Dumpster Rentals Ridgeland MS | Highland Colony Area',
    description:
        'Professional dumpster rentals for Highland Colony & Ridgeland. 10-20 yard roll-offs with same-day delivery. Transparent pricing, no hidden fees.',
    openGraph: {
        title: 'Dumpster Rentals in Ridgeland, MS | Mid South',
        description: 'Serving Highland Colony & Ridgeland with same-day dumpster delivery.',
        url: 'https://midsouthdumpsterms.com/service-areas/ridgeland',
    },
}

const faqs = [
    {
        question: 'Do I need an HOA permit to rent a dumpster in Ridgeland, MS?',
        answer: 'HOA neighborhoods like Bridgewater might require approval for visible exterior dumpsters. For street placement on public roads, contact the City of Ridgeland Public Works department.',
    },
    {
        question: 'How much does dumpster rental cost in Ridgeland?',
        answer: 'Our flat-rate pricing for Ridgeland includes delivery, pickup, and disposal. Prices start at $349 for a 10-yard dumpster, $399 for a 15-yard, and $449 for a 20-yard container, with no hidden fees.',
    },
    {
        question: 'What is prohibited from a Ridgeland dumpster rental?',
        answer: 'Hazardous materials, wet paint, tires, batteries, and appliances containing Freon are strictly prohibited for environmental safety.',
    },
]

export default function RidgelandPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Ridgeland, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Ridgeland',
        undefined,
        ['39157']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Ridgeland', url: 'https://midsouthdumpsterms.com/service-areas/ridgeland' },
    ])
    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Dumpster Rentals in Ridgeland, MS</h1>
                    <p className={styles.heroSubtext}>
                        Fast, affordable roll-off dumpster delivery throughout Ridgeland and surrounding areas
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Ridgeland Dumpster" location="Ridgeland Service Area Hero" />
                        <TrackedPhoneLink location="Ridgeland Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Ridgeland</h2>
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
                            <h2>Why Choose Us in Ridgeland?</h2>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day delivery available</li>
                                <li>✓ Serving Ridgeland and Madison County</li>
                                <li>✓ Transparent pricing with no hidden fees</li>
                                <li>✓ 10, 15, and 20-yard dumpsters</li>
                                <li>✓ Residential and commercial service</li>
                                <li>✓ 7 days a week, 7AM - 7PM</li>
                                <li>✓ Professional, courteous service</li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/gallery/20-yard-dumpster-rental-ridgeland-project.jpg"
                                alt="A 20-yard roll-off dumpster delivered to a Ridgeland MS construction project"
                                width={600}
                                height={400}
                                className={styles.contentImage}
                            />
                            <h2>Perfect For Ridgeland Projects</h2>
                            <p>Whether you're renovating a home in Highland Colony, <Link href="/blog/estate-cleanout-dumpster-rental-central-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>clearing out an estate</Link>, or managing a construction project in Ridgeland, we have the right dumpster size for your needs.</p>
                            <p><strong>Common uses in Ridgeland:</strong></p>
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
                    <h2>Neighborhoods We Serve in Ridgeland</h2>
                    <p>
                        We proudly serve all neighborhoods throughout Ridgeland, a thriving city in Madison County. Whether you're in <strong>Bridgewater</strong>, <strong>Lake Harbor</strong>, <strong>Old Town</strong>, <strong>The Township</strong>, or <strong>Dinsmor</strong>, we deliver fast, reliable dumpster rental service to your location.
                    </p>
                    <p>
                        From residential renovations to commercial construction projects, Mid South Dumpster Rentals is your trusted partner for waste management throughout Ridgeland's diverse neighborhoods.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection} style={{ padding: 'var(--spacing-3xl) 0', backgroundColor: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2 className="text-center">Ridgeland Dumpster Rental FAQs</h2>
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
                    <h2>Ready to Rent a Dumpster in Ridgeland?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Ridgeland Service Area CTA" />
                </div>
            </section>
        </>
    )
}
