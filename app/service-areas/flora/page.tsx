import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/flora' },
    title: 'Roll Off Dumpster Rental Flora MS | Madison County | Mid South',
    description:
        'Roll off dumpster rental in Flora, MS and Madison County. 10, 15 & 20-yard dumpsters with same-day delivery to all Flora neighborhoods. Flat-rate pricing starting at $349. Call 601-316-7891.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Flora MS | Madison County',
        description: 'Locally owned roll off dumpster rental serving Flora & all of Madison County. Same-day delivery, flat-rate pricing, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/flora',
    },
}

export default function FloraPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Flora, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Flora',
        undefined,
        ['39071']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Flora', url: 'https://midsouthdumpsterms.com/service-areas/flora' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: "How much does it cost to rent a roll off dumpster in Flora, MS?",
            answer: "Our roll off dumpster rentals in Flora start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size) with no hidden fees."
        },
        {
            question: "Do I need a permit to rent a dumpster in Flora?",
            answer: "You only need a permit if placing the dumpster on a public street or right-of-way in Flora. If placed in your private driveway or on private property, no permit is required. Contact the Town of Flora for specific street placement regulations."
        },
        {
            question: "What items are not allowed in your dumpsters in Flora?",
            answer: "For safety and environmental reasons, we cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. If you have specific items you are unsure about, just give us a call before booking."
        },
        {
            question: "Do you serve all of Madison County, MS?",
            answer: "Yes! We provide roll off dumpster rental throughout all of Madison County including Flora, Canton, Madison, Ridgeland, Gluckstadt, and surrounding communities. Same-day delivery is available when you call before noon."
        },
        {
            question: "How quickly can you deliver a roll off dumpster to Flora, MS?",
            answer: "We offer same-day and next-day roll off dumpster delivery in Flora and Madison County. Call us before noon at 601-316-7891 and we can typically deliver the same day, 7 days a week."
        }
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Flora, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Flora and all of Madison County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Flora Dumpster" location="Flora Service Area Hero" />
                        <TrackedPhoneLink location="Flora Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Flora</h2>
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
                            <h2>Why Choose Mid South for Flora Dumpster Rental?</h2>
                            <p>We're a locally owned Central Mississippi company. We own our trucks and handle every delivery ourselves — no third-party brokers. Flora residents and contractors get fast, reliable roll off dumpster service backed by our 5-star Google reputation.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Flora and all of Madison County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Flora Project</h2>
                            <p>Whether you're renovating a home in a Flora subdivision along Hwy 49, clearing a multi-acre estate, managing <Link href="/blog/dumpster-rental-guide-for-home-renovations" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>a home renovation</Link> in Farmington Hills, or handling a roofing project between Flora and Canton, we have the right roll off dumpster for your needs.</p>
                            <p><strong>Common roll off dumpster uses in Flora, MS:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Construction and demolition debris</li>
                                <li>Estate and property cleanouts</li>
                                <li>Yard waste and storm cleanup</li>
                                <li>Commercial contractor projects</li>
                            </ul>

                            <div style={{ marginTop: '2rem' }}>
                                <Image
                                    src="/images/gallery/same-day-dumpster-rental-flora.jpg"
                                    alt="Roll off dumpster rental delivery in Flora, MS"
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
                        Flora is a small but growing community in western Madison County, and it's an important part of our service area. We provide fast roll off dumpster rental throughout all of Madison County — from Flora and Canton to Madison, Gluckstadt, and Ridgeland. Whether your project is a quick residential cleanout or a multi-week construction job, our locally owned trucks are ready.
                    </p>
                    <h2>Neighborhoods & Areas We Serve in Flora, MS</h2>
                    <p>
                        We proudly deliver roll off dumpsters throughout Flora and surrounding communities. Whether you're in the <strong>Town of Flora</strong>, along <strong>Highway 49</strong>, in <strong>Farmington Hills</strong>, near <strong>Plum Point Road</strong>, or on a rural property west of Canton, we deliver fast and reliable roll off dumpster service to your location.
                    </p>
                    <p>
                        Flora's rural character and growing mix of residential and agricultural properties makes it a unique corner of Madison County. We're proud to serve this community with professional roll off dumpster rentals. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Madison County customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Planning a rental?</strong> Read our guide on <Link href="/blog/dumpster-rental-madison-ms">dumpster rentals in Madison County</Link> for more local tips and advice on sizing.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Flora is part of <Link href="/service-areas/madison-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Madison County</Link> — view all Madison County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions: Flora Dumpster Rentals</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>How much does it cost to rent a dumpster in Flora, MS?</h3>
                            <p>Our dumpster rentals in Flora start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size).</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Can you deliver out to rural properties near Flora?</h3>
                            <p>Yes! We service Flora and the surrounding rural areas of Madison County. Whether you're on a residential lot in town or a larger rural property along Hwy 49, we can deliver and pick up your roll off dumpster.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What items are not allowed in your dumpsters in Flora?</h3>
                            <p>For safety and environmental reasons, we cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. If you have specific items you are unsure about, just give us a call before booking.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Flora?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Flora Service Area CTA" />
                </div>
            </section>
        </>
    )
}
