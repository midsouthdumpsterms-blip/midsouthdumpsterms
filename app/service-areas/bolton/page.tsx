import { Metadata } from 'next'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/bolton' },
    title: 'Roll Off Dumpster Rental Bolton MS | Hinds County',
    description:
        'Roll off dumpster rental in Bolton, MS (ZIP 39041). 10, 15 & 20-yard dumpsters with same-day delivery to Bolton and surrounding Hinds County communities. Flat-rate pricing from $349. Call 601-316-7891.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Bolton MS | Hinds County',
        description: 'Locally owned roll off dumpster rental serving Bolton & all of Hinds County. Same-day delivery, flat-rate pricing from $349, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/bolton',
    },
}

export default function BoltonPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Bolton, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects throughout Hinds County.',
        'Bolton',
        undefined,
        ['39041']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Bolton', url: 'https://midsouthdumpsterms.com/service-areas/bolton' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: 'How much does it cost to rent a roll off dumpster in Bolton, MS?',
            answer: 'Our roll off dumpster rentals in Bolton start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. All prices include drop-off, pick-up, and a standard weight allowance with no hidden fees.',
        },
        {
            question: 'Do you deliver to rural properties around Bolton?',
            answer: 'Yes — Bolton is a rural Hinds County community and we serve properties throughout the area. Whether you\'re in town or on a larger rural property along Bolton Brownsville Road, Champion Hill Road, or Bennie Hill Road, we can deliver and pick up your roll off dumpster.',
        },
        {
            question: 'Do I need a permit to rent a dumpster in Bolton, MS?',
            answer: 'You only need a permit if placing the dumpster on a public street in Bolton. If placed on private property or your driveway, no permit is required. Contact Hinds County for specific regulations.',
        },
        {
            question: 'What items are not allowed in your dumpsters in Bolton?',
            answer: 'For safety and environmental reasons, we cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. If you have specific items you\'re unsure about, call us before booking.',
        },
        {
            question: 'How quickly can you deliver a dumpster to Bolton, MS?',
            answer: 'We offer same-day and next-day roll off dumpster delivery in Bolton. Call us before noon at 601-316-7891 and we can typically deliver the same day, 7 days a week. Bolton is less than 30 minutes from our operating area via I-20.',
        },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Bolton, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Bolton and all of Hinds County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Bolton Dumpster" location="Bolton Service Area Hero" />
                        <TrackedPhoneLink location="Bolton Service Area Hero" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Bolton</h2>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard size="10" capacity="4 Pickup Truck Loads" weight="1 Ton Included" pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }} idealFor={['Small Cleanouts', 'Garage Cleanup', 'Minor Renovations', 'Yard Debris']} />
                        <DumpsterSizeCard size="15" capacity="6 Pickup Truck Loads" weight="2 Tons Included" pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }} idealFor={['Home Renovations', 'Roofing Projects', 'Estate Cleanouts', 'Farm Cleanouts']} popular />
                        <DumpsterSizeCard size="20" capacity="8 Pickup Truck Loads" weight="3 Tons Included" pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }} idealFor={['Large Renovations', 'New Construction', 'Major Demolition', 'Commercial Projects']} />
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Choose Mid South for Bolton Dumpster Rental?</h2>
                            <p>We&apos;re a locally owned Central Mississippi company — not a national broker. We own our trucks and handle every delivery ourselves. Bolton residents and Hinds County contractors get fast, reliable roll off service backed by our 5-star Google reputation.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Bolton and all of Hinds County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup &amp; disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial &amp; construction service</li>
                                <li>✓ Rural property delivery — no job too far out</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ Licensed &amp; insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Bolton Project</h2>
                            <p>Bolton&apos;s rural character means many projects involve larger properties, older structures, and farm or estate work. Whether you&apos;re clearing out a home near <strong>Gaddis &amp; McLaurin Mercantile</strong>, renovating a property near <strong>Bolton City Park</strong>, or tackling a larger cleanout in the surrounding Hinds County countryside, we have the right roll off dumpster for the job.</p>
                            <p><strong>Common roll off dumpster uses in Bolton, MS:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Estate and property cleanouts</li>
                                <li>Farm and outbuilding cleanouts</li>
                                <li>Construction and demolition debris</li>
                                <li>Yard waste and storm cleanup</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Roll Off Dumpster Rental Serving Bolton &amp; Hinds County</h2>
                    <p>
                        Bolton is a small, historic Hinds County town situated right along Interstate 20, roughly 18 miles west of Jackson. It&apos;s one of the area&apos;s most charming communities — home to the legendary <strong>Gaddis &amp; McLaurin Mercantile</strong>, one of the oldest continuously operating general stores in Mississippi (est. 1871), and a <strong>Historic Cotton Gin</strong> that draws visitors from across the state. Bolton was also the birthplace of blues legends <strong>Bo Carter</strong> and <strong>Charley Patton</strong>, and Olympian <strong>Calvin Smith</strong>. It&apos;s a place with deep roots — and when residents and contractors there need a dumpster, we&apos;re proud to be the local option they can call.
                    </p>
                    <p>
                        We provide fast roll off dumpster delivery throughout Bolton and all of Hinds County, including{' '}
                        <Link href="/service-areas/clinton" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Clinton</Link>,{' '}
                        <Link href="/service-areas/raymond" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Raymond</Link>,{' '}
                        <Link href="/service-areas/byram" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Byram</Link>,{' '}
                        <Link href="/service-areas/terry" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Terry</Link>, and{' '}
                        <Link href="/service-areas/jackson" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Jackson</Link>.
                    </p>

                    <h2>Areas &amp; Communities We Serve Near Bolton</h2>
                    <p>
                        Bolton doesn&apos;t have large subdivisions — it&apos;s defined by its <strong>historic downtown</strong>, local roads spreading across rural Hinds County, and a tight-knit community that&apos;s been here since 1830. We deliver to all of it, including:
                    </p>
                    <ul className={styles.projectsList} style={{ marginBottom: '1.5rem' }}>
                        <li>Downtown Bolton &amp; Historic District</li>
                        <li>Bolton City Park area</li>
                        <li>Bolton Brownsville Road corridor</li>
                        <li>Champion Hill Road &amp; surrounding rural properties</li>
                        <li>Bennie Hill Road area</li>
                        <li>Clinton-Raymond Road corridor</li>
                        <li>I-20 Exit 27 surrounding area</li>
                        <li>Rural Hinds County properties (ZIP 39041)</li>
                    </ul>
                    <p>
                        Bolton&apos;s rural setting often means larger cleanout jobs — older farmhouses, outbuildings, estate sales — and our 15 and 20-yard dumpsters are ideal for that kind of work. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Hinds County customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Planning a rental?</strong> Read our guide on <Link href="/blog/how-to-choose-dumpster-size">how to choose the right dumpster size</Link> for your project.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Bolton is located in <Link href="/service-areas/hinds-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Hinds County</Link> — see all Hinds County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions: Bolton Dumpster Rentals</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>How much does it cost to rent a dumpster in Bolton, MS?</h3>
                            <p>Our dumpster rentals in Bolton start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size).</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Do you deliver to rural properties outside of Bolton?</h3>
                            <p>Yes! We serve Bolton and all surrounding rural Hinds County properties. Long driveways, rural roads, and farm properties are no problem — we just need enough clearance for the truck to back in safely.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What items are not allowed in your dumpsters in Bolton?</h3>
                            <p>We cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. Call us if you have specific items you&apos;re unsure about.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Bolton?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now" location="Bolton Service Area CTA" />
                        <TrackedPhoneLink location="Bolton Service Area CTA" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
