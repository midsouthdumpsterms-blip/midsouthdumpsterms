import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/gluckstadt' },
    title: 'Dumpster Rental Gluckstadt MS | Same-Day',
    description:
        'Roll-off dumpster rental in Gluckstadt, MS from $349. 10, 15 and 20-yard containers, same-day delivery to Gluckstadt and the Highway 51 corridor.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Gluckstadt MS | Madison County',
        description: 'Locally owned roll off dumpster rental serving Gluckstadt & all of Madison County. Same-day delivery, flat-rate pricing, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/gluckstadt',
    },
}

export default function GluckstadtPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Gluckstadt, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Gluckstadt',
        undefined,
        ['39110']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Gluckstadt', url: 'https://midsouthdumpsterms.com/service-areas/gluckstadt' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: "How much does it cost to rent a roll off dumpster in Gluckstadt, MS?",
            answer: "Our roll off dumpster rentals in Gluckstadt start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size) with no hidden fees."
        },
        {
            question: "Can you deliver to the neighborhoods off Highway 463 in Gluckstadt?",
            answer: "Yes! We regularly deliver roll off dumpsters to communities throughout the Gluckstadt area including Bellegrove, Reunion, Bridgewater, and all neighborhoods along the Highway 463 corridor. Our trucks safely navigate residential streets without damaging driveways."
        },
        {
            question: "What items are not allowed in your dumpsters in Gluckstadt?",
            answer: "For safety and environmental reasons, we cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. If you have specific items you are unsure about, just give us a call before booking."
        },
        {
            question: "Do you serve all of Madison County, MS?",
            answer: "Yes! We provide roll off dumpster rental throughout all of Madison County including Gluckstadt, Madison, Ridgeland, Canton, Flora, and surrounding communities. Same-day delivery is available when you call before noon."
        },
        {
            question: "How quickly can you deliver a roll off dumpster to Gluckstadt, MS?",
            answer: "We offer same-day and next-day roll off dumpster delivery in Gluckstadt and Madison County. Call us before noon at 601-316-7891 and we can typically deliver the same day, 7 days a week."
        }
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Gluckstadt, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Gluckstadt and all of Madison County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Gluckstadt Dumpster" location="Gluckstadt Service Area Hero" />
                        <TrackedPhoneLink location="Gluckstadt Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Gluckstadt</h2>
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
                            <h2>Why Choose Mid South for Gluckstadt Dumpster Rental?</h2>
                            <p>We're a locally owned Central Mississippi company. We own our trucks and handle every delivery ourselves — no third-party brokers or dispatch centers. Gluckstadt residents and contractors get fast, reliable roll off dumpster service backed by our 5-star Google reputation.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Gluckstadt and all of Madison County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Gluckstadt Project</h2>
                            <p>Whether you're renovating a home in Reunion or Bridgewater, clearing out a garage in Bellegrove, managing <Link href="/blog/dumpster-rental-guide-for-home-renovations" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>a major home remodel</Link> along the Hwy 463 corridor, or handling roofing work in one of Gluckstadt's premier neighborhoods, we have the right roll off dumpster for your needs.</p>
                            <p><strong>Common roll off dumpster uses in Gluckstadt, MS:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Construction and demolition debris</li>
                                <li>Estate and property cleanouts</li>
                                <li>Yard waste and storm cleanup</li>
                                <li>New home construction debris</li>
                            </ul>

                            <div style={{ marginTop: '2rem' }}>
                                <Image
                                    src="/images/gallery/same-day-dumpster-rental-gluckstadt.jpg"
                                    alt="Roll off dumpster rental delivery in Gluckstadt, MS"
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
                    <h2>Roll Off Dumpster Rental Serving All of Madison County, MS</h2>
                    <p>
                        Gluckstadt is one of the hottest-growing communities in Madison County, with new subdivisions and developments expanding rapidly. We provide fast roll off dumpster rental throughout all of Madison County — from Gluckstadt and Madison to Ridgeland, Canton, and Flora. Whether your project is a quick residential cleanout or a multi-week construction job, our locally owned trucks are ready.
                    </p>
                    <h2>Neighborhoods & Subdivisions We Serve in Gluckstadt, MS</h2>
                    <p>
                        We proudly deliver roll off dumpsters to every neighborhood in Gluckstadt. Whether you're in <strong>Reunion</strong>, <strong>Bridgewater</strong>, <strong>Bellegrove</strong>, <strong>Wolf Creek</strong>, <strong>Trace Ridge</strong>, along <strong>Highway 463</strong>, near <strong>Gluckstadt Road</strong>, or in any of the newer developments expanding north of Madison, we deliver fast and reliable roll off dumpster service.
                    </p>
                    <p>
                        Gluckstadt's explosive residential growth makes it one of the most active markets for home construction, remodeling, and cleanout work in Central Mississippi. We're proud to serve this booming community with professional roll off dumpster rentals. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Madison County customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Planning a rental?</strong> Read our guide on <Link href="/service-areas/madison">dumpster rentals in Madison County</Link> for more local tips and advice on sizing.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Gluckstadt is part of <Link href="/service-areas/madison-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Madison County</Link> — view all Madison County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions: Gluckstadt Dumpster Rentals</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>How much does it cost to rent a dumpster in Gluckstadt, MS?</h3>
                            <p>Our dumpster rentals in Gluckstadt start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size).</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Can you deliver to new construction neighborhoods in Gluckstadt?</h3>
                            <p>Yes! We work with many builders and homeowners in Gluckstadt's growing neighborhoods like Reunion, Bridgewater, and Bellegrove. We can schedule deliveries around your construction timeline and regularly service active job sites.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What items are not allowed in your dumpsters in Gluckstadt?</h3>
                            <p>For safety and environmental reasons, we cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. If you have specific items you are unsure about, just give us a call before booking.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Gluckstadt?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Gluckstadt Service Area CTA" />
                </div>
            </section>
        </>
    )
}
