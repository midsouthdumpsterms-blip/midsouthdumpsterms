import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'

export const metadata: Metadata = {
    title: 'Roll-Off Dumpster Rentals Madison MS | Reunion & Annandale',
    description:
        'Premium dumpster rental service for Reunion, Lake Caroline & Annandale. 10-20 yard roll-off dumpsters with transparent pricing. Same-day delivery available.',
    openGraph: {
        title: 'Dumpster Rentals in Madison, MS | Mid South',
        description: 'Serving Reunion, Lake Caroline & Annandale with same-day dumpster delivery.',
        url: 'https://midsouthdumpsterms.com/service-areas/madison',
    },
}

export default function MadisonPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Madison, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Madison',
        undefined,
        ['39110']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Madison', url: 'https://midsouthdumpsterms.com/service-areas/madison' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: "Do I need a permit to rent a dumpster in Madison, MS?",
            answer: "If you place the dumpster on your private property, such as your driveway in Reunion or Annandale, you typically do not need a permit. However, if the dumpster must be placed on a public street or right-of-way, a permit from the City of Madison may be required. We can help guide you through this process."
        },
        {
            question: "How quickly can you deliver a roll-off dumpster to Madison?",
            answer: "We offer same-day and next-day dumpster delivery throughout Madison and Madison County. Call us early in the day to secure a same-day drop-off for your project."
        },
        {
            question: "What roll-off dumpster sizes are available in Madison?",
            answer: "We provide 10-yard, 15-yard, and 20-yard roll-off dumpsters in Madison. Our 20-yard dumpsters are our most popular size for home renovations and estate cleanouts in the area."
        }
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll-Off Dumpster Rentals in Madison, MS</h1>
                    <p className={styles.heroSubtext}>
                        Fast, affordable roll-off dumpster delivery throughout Madison and surrounding areas
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Madison Dumpster" location="Madison Service Area Hero" />
                        <a href="tel:6013167891" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Madison</h2>
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
                            <h2>Why Choose Us in Madison?</h2>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day delivery available</li>
                                <li>✓ Serving Madison and Madison County</li>
                                <li>✓ Transparent pricing with no hidden fees</li>
                                <li>✓ 10, 15, and 20-yard dumpsters</li>
                                <li>✓ Residential and commercial service</li>
                                <li>✓ 7 days a week, 7AM - 7PM</li>
                                <li>✓ Professional, courteous service</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Madison Projects</h2>
                            <p>Whether you're renovating a home in Reunion, clearing out an estate in Lake Caroline, managing a construction project in Annandale or Providence, we have the right dumpster size for your needs.</p>
                            <p><strong>Common uses in Madison:</strong></p>
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
                                    src="/images/gallery/roll-off-dumpster-madison-ms-clean.jpg"
                                    alt="Clean 20-yard roll-off dumpster rental delivery in a Madison, MS residential driveway"
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
                    <h2>Neighborhoods We Serve in Madison</h2>
                    <p>
                        We proudly serve all neighborhoods throughout Madison, one of Mississippi's premier communities. Whether you're in <strong>Reunion</strong>, <strong>Lake Caroline</strong>, <strong>Annandale</strong>, <strong>Lost Rabbit</strong>, or <strong>Woodland Estates</strong>, we deliver fast, reliable dumpster rental service to your location.
                    </p>
                    <p>
                        From <strong>Georgetown</strong> to <strong>Germantown</strong> and beyond, we're committed to providing roll-off dumpster rental service that matches the quality standards of this exceptional community. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Madison customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Want to learn more?</strong> Check out our complete guide on <Link href="/blog/dumpster-rental-madison-ms">Dumpster Rental in Madison, MS</Link>.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions: Madison Dumpster Rentals</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>Do I need a permit to rent a dumpster in Madison, MS?</h3>
                            <p>If you place the dumpster on your private property, such as your driveway in Reunion or Annandale, you typically do not need a permit. However, if the dumpster must be placed on a public street or right-of-way, a permit from the City of Madison may be required. We can help guide you through this process.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>How quickly can you deliver a roll-off dumpster to Madison?</h3>
                            <p>We offer same-day and next-day dumpster delivery throughout Madison and Madison County. Call us early in the day to secure a same-day drop-off for your project.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What roll-off dumpster sizes are available in Madison?</h3>
                            <p>We provide 10-yard, 15-yard, and 20-yard roll-off dumpsters in Madison. Our 20-yard dumpsters are our most popular size for home renovations and estate cleanouts in the area.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Madison?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Madison Service Area CTA" />
                </div>
            </section>
        </>
    )
}
