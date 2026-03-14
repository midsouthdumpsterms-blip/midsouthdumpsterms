import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Roll-Off Dumpster Rentals Brandon MS | Crossgates Area',
    description:
        'Serving Crossgates, Winner\'s Circle & Reservoir Point with affordable dumpster rentals. 10-20 yard sizes, same-day delivery. Residential & commercial. Book online now.',
    openGraph: {
        title: 'Dumpster Rentals in Brandon, MS | Mid South',
        description: 'Serving Crossgates, Winner\'s Circle & Reservoir Point with same-day dumpster delivery.',
        url: 'https://midsouthdumpsterms.com/service-areas/brandon',
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
            question: "How much does it cost to rent a dumpster in Brandon, MS?",
            answer: "Our dumpster rentals in Brandon start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size)."
        },
        {
            question: "Can you deliver a dumpster to my neighborhood in Crossgates?",
            answer: "Yes! We regularly deliver roll-off dumpsters to Crossgates, Castlewoods, Shiloh, and all other subdivisions throughout Brandon and Rankin County. Our trucks are designed to safely navigate residential streets."
        },
        {
            question: "What items are not allowed in your dumpsters in Brandon?",
            answer: "For safety and environmental reasons, we cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. If you have specific items you are unsure about, just give us a call before booking."
        }
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll-Off Dumpster Rentals in Brandon, MS</h1>
                    <p className={styles.heroSubtext}>
                        Fast, affordable roll-off dumpster delivery throughout Brandon and surrounding areas
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
                            <h2>Why Choose Us in Brandon?</h2>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day delivery available</li>
                                <li>✓ Serving Brandon and Rankin County</li>
                                <li>✓ Transparent pricing with no hidden fees</li>
                                <li>✓ 10, 15, and 20-yard dumpsters</li>
                                <li>✓ Residential and commercial service</li>
                                <li>✓ 7 days a week, 7AM - 7PM</li>
                                <li>✓ Professional, courteous service</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Brandon Projects</h2>
                            <p>Whether you're renovating a home in Crossgates, clearing out an estate in Winner's Circle, managing a construction project in Reservoir Point, or working on a property in Shiloh, Castlewoods, or Pinebrook, we have the right dumpster size for your needs.</p>
                            <p><strong>Common uses in Brandon:</strong></p>
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
                                    src="/images/gallery/residential-dumpster-rental-brandon-driveway.jpg"
                                    alt="Residential dumpster rental delivery on a driveway in Brandon, MS"
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
                    <h2>Neighborhoods We Serve in Brandon</h2>
                    <p>
                        We proudly serve all neighborhoods throughout Brandon, a rapidly growing city in Rankin County. Whether you're in <strong>Castle Woods</strong>, <strong>Gardens of Manship</strong>, <strong>Hidden Hills</strong>, <strong>Crossgates</strong>, <strong>Crossview Plantation</strong>, <strong>Bellegrove</strong>, <strong>Waterwood</strong>, <strong>Copperfield</strong>, or <strong>Glen Arbor</strong>, we deliver fast, reliable dumpster rental service to your location.
                    </p>
                    <p>
                        Brandon's thriving community and expanding development make it one of the metro area's most desirable locations. We're here to support your projects with professional roll-off dumpster rental service tailored to Brandon's needs. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Brandon customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Planning a rental?</strong> Read our guide on <Link href="/blog/dumpster-rental-brandon-ms">Dumpster Rentals in Brandon, MS</Link> for more local tips and advice on sizing.
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
