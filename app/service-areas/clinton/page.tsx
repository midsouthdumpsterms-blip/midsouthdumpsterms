import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'

export const metadata: Metadata = {
    title: 'Dumpster Rentals Clinton MS | Hinds County Service',
    description:
        'Reliable dumpster rental service for Clinton & Hinds County. 10-20 yard roll-offs for residential & commercial projects. Transparent pricing, fast delivery.',
    openGraph: {
        title: 'Dumpster Rentals in Clinton, MS | Mid South',
        description: 'Serving Clinton & Hinds County with same-day dumpster delivery.',
        url: 'https://midsouthdumpsterms.com/service-areas/clinton',
    },
}

export default function ClintonPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Clinton, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Clinton',
        undefined,
        ['39056']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Clinton', url: 'https://midsouthdumpsterms.com/service-areas/clinton' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: "Do you provide same-day dumpster rentals in Clinton, MS?",
            answer: "Yes! Mid South Dumpster Rentals is locally owned and operates in Hinds County every day. If you call early, we can typically provide same-day roll-off delivery to Clinton."
        },
        {
            question: "How do I protect my driveway when renting a dumpster in Clinton?",
            answer: "We know your property is an investment. Our professional drivers are trained in precision placement. We can carefully position the dumpster on wooden boards so that the heavy steel wheels never scrape or damage your driveway."
        },
        {
            question: "Are there things I can't put in my rental dumpster in Clinton?",
            answer: "Standard household junk, lumber, and yard debris are totally fine. However, we cannot accept hazardous waste, items containing Freon (like refrigerators), wet paint, tires, or batteries. Give us a call if you are unsure about an item."
        }
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Dumpster Rentals in Clinton, MS</h1>
                    <p className={styles.heroSubtext}>
                        Fast, affordable roll-off dumpster delivery throughout Clinton and surrounding areas
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Clinton Dumpster" location="Clinton Service Area Hero" />
                        <a href="tel:6013167891" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Clinton</h2>
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
                            <h2>Why Choose Us in Clinton?</h2>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day delivery available</li>
                                <li>✓ Serving Clinton and Hinds County</li>
                                <li>✓ Transparent pricing with no hidden fees</li>
                                <li>✓ 10, 15, and 20-yard dumpsters</li>
                                <li>✓ Residential and commercial service</li>
                                <li>✓ 7 days a week, 7AM - 7PM</li>
                                <li>✓ Professional, courteous service</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Clinton Projects</h2>
                            <p>Whether you're renovating a home, clearing out an estate, or managing a construction project in Clinton, we have the right dumpster size for your needs.</p>
                            <p><strong>Common uses in Clinton:</strong></p>
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
                                    src="/images/gallery/15-yard-dumpster-clinton-ms-rental.jpg"
                                    alt="Roll-off 15-yard dumpster rental in a residential neighborhood in Clinton, Mississippi"
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
                    <h2>Neighborhoods We Serve in Clinton</h2>
                    <p>
                        We proudly serve all neighborhoods throughout Clinton, a vibrant city in Hinds County. Whether you're in <strong>Woodmoor</strong>, <strong>Green Acres</strong>, <strong>Pinehaven Estates</strong>, <strong>Olde Town District</strong>, <strong>Countrywood</strong>, <strong>Oakhurst</strong>, <strong>College Hills</strong>, or <strong>Hunter's Ridge</strong>, we deliver fast, reliable dumpster rental service to your location.
                    </p>
                    <p>
                        Clinton's family-friendly neighborhoods and growing community make it a great place to live and work. We're here to support your home improvement and construction projects with professional dumpster rental service. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other local customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Cleaning out a house?</strong> Read our comprehensive guide on <Link href="/blog/estate-cleanout-dumpster-rental-central-ms">Renting a Dumpster for Estate Cleanouts in Central MS</Link>.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions: Clinton Dumpster Rentals</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>Do you provide same-day dumpster rentals in Clinton, MS?</h3>
                            <p>Yes! Mid South Dumpster Rentals is locally owned and operates in Hinds County every day. If you call early, we can typically provide same-day roll-off delivery to Clinton.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>How do I protect my driveway when renting a dumpster in Clinton?</h3>
                            <p>We know your property is an investment. Our professional drivers are trained in precision placement. We can carefully position the dumpster on wooden boards so that the heavy steel wheels never scrape or damage your driveway.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Are there things I can't put in my rental dumpster in Clinton?</h3>
                            <p>Standard household junk, lumber, and yard debris are totally fine. However, we cannot accept hazardous waste, items containing Freon (like refrigerators), wet paint, tires, or batteries. Give us a call if you are unsure about an item.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Clinton?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Clinton Service Area CTA" />
                </div>
            </section>
        </>
    )
}
