import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'

export const metadata: Metadata = {
    title: 'Dumpster Rentals Flowood MS | Kensington & Lakeland',
    description:
        'Serving Kensington, Castlewoods & Laurelwood with reliable dumpster rentals. 10-20 yard sizes for renovations & construction. Call 601-316-7891 today.',
    openGraph: {
        title: 'Dumpster Rentals in Flowood, MS | Mid South',
        description: 'Serving Kensington, Castlewoods & Laurelwood with same-day dumpster delivery.',
        url: 'https://midsouthdumpsterms.com/service-areas/flowood',
    },
}

export default function FlowoodPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Flowood, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Flowood',
        undefined,
        ['39232']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Flowood', url: 'https://midsouthdumpsterms.com/service-areas/flowood' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: "How much does a dumpster rental cost in Flowood, MS?",
            answer: "In Flowood, our 10-yard dumpster starts at $349, our 15-yard at $399, and our 20-yard at $449. This is a flat-rate price that includes delivery, pickup, and a generous weight allowance, so there are no hidden fees."
        },
        {
            question: "Can you place a dumpster on my driveway in Flowood?",
            answer: "Yes, we specialize in residential delivery. We carefully place the roll-off container on your driveway in neighborhoods like Laurelwood or Kensington, and we can use protective boards to prevent any damage to the concrete or asphalt."
        },
        {
            question: "Do you offer same-day dumpster delivery in Flowood?",
            answer: "Absolutely. We are based locally and offer same-day and next-day dumpster rentals throughout Flowood and the surrounding Rankin County area. Call early to secure same-day service."
        }
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Dumpster Rentals in Flowood, MS</h1>
                    <p className={styles.heroSubtext}>
                        Fast, affordable roll-off dumpster delivery throughout Flowood and surrounding areas
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Flowood Dumpster" location="Flowood Service Area Hero" />
                        <a href="tel:6013167891" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Flowood</h2>
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
                            <h2>Why Choose Us in Flowood?</h2>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day delivery available</li>
                                <li>✓ Serving Flowood and Rankin County</li>
                                <li>✓ Transparent pricing with no hidden fees</li>
                                <li>✓ 10, 15, and 20-yard dumpsters</li>
                                <li>✓ Residential and commercial service</li>
                                <li>✓ 7 days a week, 7AM - 7PM</li>
                                <li>✓ Professional, courteous service</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Flowood Projects</h2>
                            <p>Whether you're renovating a home in Kensington, clearing out an estate in Castlewoods, managing a construction project in Laurelwood or Laurelwood Estates, we have the right dumpster size for your needs.</p>
                            <p><strong>Common uses in Flowood:</strong></p>
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
                                    src="/images/gallery/clean-dumpster-delivery-flowood-blue.jpg"
                                    alt="Clean blue Mid South Dumpster Rentals container delivered to a home in Flowood, MS"
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
                    <h2>Neighborhoods We Serve in Flowood</h2>
                    <p>
                        We proudly serve all neighborhoods throughout Flowood, a thriving city in Rankin County. Whether you're in <strong>Laurelwood</strong>, <strong>Laurelwood Estates</strong>, <strong>Traditions</strong>, <strong>Latter Rayne</strong>, <strong>Lineage Lake</strong>, <strong>Kensington</strong>, <strong>Lakeland East</strong>, or <strong>Aubry Hills</strong>, we deliver fast, reliable dumpster rental service to your location.
                    </p>
                    <p>
                        Flowood's prime location and growing business district make it one of the metro area's most dynamic communities. We're here to support your residential and commercial projects with professional dumpster rental service. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other local customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Tip for Flowood Homeowners:</strong> We highly recommend our 15-yard dumpster for most mid-sized renovations in the Laurelwood and Kensington areas.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions: Flowood Dumpster Rentals</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>How much does a dumpster rental cost in Flowood, MS?</h3>
                            <p>In Flowood, our 10-yard dumpster starts at $349, our 15-yard at $399, and our 20-yard at $449. This is a flat-rate price that includes delivery, pickup, and a generous weight allowance, so there are no hidden fees.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Can you place a dumpster on my driveway in Flowood?</h3>
                            <p>Yes, we specialize in residential delivery. We carefully place the roll-off container on your driveway in neighborhoods like Laurelwood or Kensington, and we can use protective boards to prevent any damage to the concrete or asphalt.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Do you offer same-day dumpster delivery in Flowood?</h3>
                            <p>Absolutely. We are based locally and offer same-day and next-day dumpster rentals throughout Flowood and the surrounding Rankin County area. Call early to secure same-day service.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Flowood?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Flowood Service Area CTA" />
                </div>
            </section>
        </>
    )
}
