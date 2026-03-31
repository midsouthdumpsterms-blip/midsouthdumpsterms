import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Roll Off Dumpster Rental Byram MS | Hinds County | Mid South',
    description:
        'Roll off dumpster rental in Byram, MS and Hinds County. 10, 15 & 20-yard dumpsters with same-day delivery to Siwell Road, Lake Dockery & all Byram neighborhoods. Flat-rate pricing starting at $349. Call 601-316-7891.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Byram MS | Hinds County',
        description: 'Locally owned roll off dumpster rental serving Byram & all of Hinds County. Same-day delivery, flat-rate pricing, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/byram',
    },
}

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

    const faqSchema = generateFAQSchema([
        {
            question: "How much does it cost to rent a roll off dumpster in Byram, MS?",
            answer: "Our roll off dumpster rentals in Byram start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size) with no hidden fees."
        },
        {
            question: "Can you deliver a dumpster to my neighborhood along Siwell Road?",
            answer: "Yes! We regularly deliver roll off dumpsters to neighborhoods throughout the Siwell Road corridor including Lake Dockery, Byramdale Estates, Brannan Ridge, and all surrounding communities. Our trucks are designed to safely navigate residential streets without damaging driveways."
        },
        {
            question: "What items are not allowed in your dumpsters in Byram?",
            answer: "For safety and environmental reasons, we cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. If you have specific items you are unsure about, just give us a call before booking."
        },
        {
            question: "Do you serve all of Hinds County, MS?",
            answer: "Yes! We provide roll off dumpster rental throughout all of Hinds County including Byram, Jackson, Clinton, Terry, and surrounding communities. Same-day delivery is available when you call before noon."
        },
        {
            question: "How quickly can you deliver a roll off dumpster to Byram, MS?",
            answer: "We offer same-day and next-day roll off dumpster delivery in Byram and Hinds County. Call us before noon at 601-316-7891 and we can typically deliver the same day, 7 days a week."
        }
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Byram, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Byram and all of Hinds County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Byram Dumpster" location="Byram Service Area Hero" />
                        <TrackedPhoneLink location="Byram Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
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
                            <h2>Why Choose Mid South for Byram Dumpster Rental?</h2>
                            <p>We're a locally owned Central Mississippi company. We own our trucks and handle every delivery ourselves — no third-party brokers or dispatch centers. Byram customers along the Siwell Road corridor get fast, dependable roll off dumpster service backed by our 5-star reputation.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Byram and all of Hinds County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Byram Project</h2>
                            <p>Whether you're <Link href="/blog/dumpster-rental-guide-for-home-renovations" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>renovating a home</Link> in Byramdale Estates, clearing an estate near Lake Dockery, managing a construction project along the Siwell Road corridor, or handling a roofing job in one of Byram's growing subdivisions, we have the right roll off dumpster for your needs.</p>
                            <p><strong>Common roll off dumpster uses in Byram, MS:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Construction and demolition debris</li>
                                <li>Estate and foreclosure cleanouts</li>
                                <li>Yard waste and storm cleanup</li>
                                <li>Commercial contractor projects</li>
                            </ul>

                            <div style={{ marginTop: '2rem' }}>
                                <Image
                                    src="/images/gallery/local-dumpster-service-byram-truck.jpg"
                                    alt="Roll off dumpster rental delivery truck placing a container in Byram, MS"
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
                    <h2>Roll Off Dumpster Rental Serving All of Hinds County, MS</h2>
                    <p>
                        Byram is one of Hinds County's fastest-growing communities, and it's a key part of our service territory. We provide fast roll off dumpster rental throughout all of Hinds County — from Byram and Jackson to Clinton, Terry, and Bolton. Whether your project is a quick residential cleanout or a multi-week commercial job, our locally owned trucks are ready.
                    </p>
                    <h2>Neighborhoods We Serve in Byram, MS</h2>
                    <p>
                        We proudly deliver roll off dumpsters to every neighborhood in Byram. Whether you're in <strong>Lake Dockery</strong>, <strong>Lake Ridgelea</strong>, <strong>Byramdale Estates</strong>, <strong>Brannan Ridge</strong>, <strong>Byram Estates</strong>, <strong>Smith Creek</strong>, <strong>Summerwind</strong>, or anywhere else along the <strong>Siwell Road corridor</strong>, we deliver fast and reliable roll off dumpster service.
                    </p>
                    <p>
                        Byram's growing residential developments and convenient location just south of Jackson make it one of the metro's most active areas for home improvement and construction. We're proud to serve this community with professional roll off dumpster rentals. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Byram customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Planning a rental?</strong> Read our guide on <Link href="/blog/dumpster-rental-guide-for-home-renovations">home renovation dumpster rentals</Link> for more local tips and advice on sizing.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Byram is located in <Link href="/service-areas/hinds-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Hinds County</Link> — see all Hinds County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions: Byram Dumpster Rentals</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>How much does it cost to rent a dumpster in Byram, MS?</h3>
                            <p>Our dumpster rentals in Byram start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size).</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Can you deliver a dumpster along Siwell Road or Lake Dockery?</h3>
                            <p>Yes! We regularly deliver roll off dumpsters throughout the Siwell Road corridor and all of Byram's neighborhoods. Our trucks are designed to safely navigate residential streets without damaging driveways.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What items are not allowed in your dumpsters in Byram?</h3>
                            <p>For safety and environmental reasons, we cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. If you have specific items you are unsure about, just give us a call before booking.</p>
                        </div>
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
