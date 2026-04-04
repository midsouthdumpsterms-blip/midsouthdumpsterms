import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Roll Off Dumpster Rental Raymond MS | Hinds County | Mid South',
    description:
        'Roll off dumpster rental in Raymond, MS and Hinds County. 10, 15 & 20-yard dumpsters with same-day delivery to Raymond and surrounding rural communities. Flat-rate pricing from $349. Call 601-316-7891.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Raymond MS | Hinds County',
        description: 'Locally owned roll off dumpster rental serving Raymond & all of Hinds County. Same-day delivery, flat-rate pricing, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/raymond',
    },
}

export default function RaymondPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Raymond, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects throughout Hinds County.',
        'Raymond',
        undefined,
        ['39154']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Raymond', url: 'https://midsouthdumpsterms.com/service-areas/raymond' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: 'How much does it cost to rent a roll off dumpster in Raymond, MS?',
            answer: 'Our roll off dumpster rentals in Raymond start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size) with no hidden fees.',
        },
        {
            question: 'Do you deliver to rural properties around Raymond?',
            answer: 'Yes — Raymond is surrounded by rural Hinds County properties, and we serve them all. Whether you\'re in town on a residential lot or on a larger rural property along Dry Grove Road, Ratliff Road, or Ranger Road, we can deliver and pick up your roll off dumpster.',
        },
        {
            question: 'Do I need a permit to rent a dumpster in Raymond?',
            answer: 'You only need a permit if placing the dumpster on a public street in Raymond. If placed on private property or your driveway, no permit is required. Contact the Town of Raymond or Hinds County for specific regulations.',
        },
        {
            question: 'What items are not allowed in your dumpsters in Raymond?',
            answer: 'For safety and environmental reasons, we cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. If you have specific items you\'re unsure about, call us before booking.',
        },
        {
            question: 'How quickly can you deliver a dumpster to Raymond, MS?',
            answer: 'We offer same-day and next-day roll off dumpster delivery in Raymond. Call us before noon at 601-316-7891 and we can typically deliver the same day, 7 days a week. Raymond is less than 30 minutes from our operating area.',
        },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Raymond, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Raymond and all of Hinds County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Raymond Dumpster" location="Raymond Service Area Hero" />
                        <TrackedPhoneLink location="Raymond Service Area Hero" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Raymond</h2>
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
                            <h2>Why Choose Mid South for Raymond Dumpster Rental?</h2>
                            <p>We&apos;re a locally owned Central Mississippi company — not a national broker. We own our trucks and handle every delivery ourselves. Raymond residents and Hinds County contractors get fast, reliable roll off service backed by our 5-star Google reputation.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Raymond and all of Hinds County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup &amp; disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial &amp; construction service</li>
                                <li>✓ Rural property delivery — no job too far out</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ Licensed &amp; insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Raymond Project</h2>
                            <p>Raymond&apos;s rural character means many projects involve large properties, older structures, and estate work. Whether you&apos;re clearing a farmstead, renovating a historic home near downtown, doing roofing work near <strong>Hinds Community College</strong>, or handling a <Link href="/blog/dumpster-rental-guide-for-home-renovations" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>full property cleanout</Link>, we have the right roll off dumpster for the job.</p>
                            <p><strong>Common roll off dumpster uses in Raymond, MS:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Estate and property cleanouts</li>
                                <li>Farm and outbuilding cleanouts</li>
                                <li>Construction and demolition debris</li>
                                <li>Yard waste and storm cleanup</li>
                            </ul>

                            <div style={{ marginTop: '2rem' }}>
                                <Image
                                    src="/images/gallery/same-day-dumpster-rental-raymond.jpg"
                                    alt="Roll off dumpster rental delivery in Raymond, MS"
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
                    <h2>Roll Off Dumpster Rental Serving Raymond &amp; Hinds County</h2>
                    <p>
                        Raymond is one of Hinds County&apos;s two county seats and sits at the geographic heart of Central Mississippi — less than 30 minutes from Jackson. It&apos;s a small, historic town with a strong community, and it&apos;s one of the areas we&apos;re proud to serve. We provide fast roll off dumpster delivery throughout Raymond and all of Hinds County, including{' '}
                        <Link href="/service-areas/clinton" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Clinton</Link>,{' '}
                        <Link href="/service-areas/byram" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Byram</Link>,{' '}
                        <Link href="/service-areas/terry" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Terry</Link>, and{' '}
                        <Link href="/service-areas/jackson" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Jackson</Link>.
                    </p>

                    <h2>Areas &amp; Communities We Serve Near Raymond</h2>
                    <p>
                        Raymond doesn&apos;t have large subdivisions like a bigger city — it&apos;s defined by its <strong>historic downtown</strong>, the <strong>Hinds Community College campus</strong>, and the rural residential areas spreading out along local roads. We deliver to all of it, including:
                    </p>
                    <ul className={styles.projectsList} style={{ marginBottom: '1.5rem' }}>
                        <li>Downtown Raymond &amp; Historic District</li>
                        <li>Hinds Community College area</li>
                        <li>Dry Grove Road corridor</li>
                        <li>Ratliff Road &amp; Ranger Road areas</li>
                        <li>Parsons Road &amp; surrounding rural properties</li>
                        <li>Learned community (nearby)</li>
                        <li>Rural Hinds County properties (ZIP 39154)</li>
                    </ul>
                    <p>
                        Raymond&apos;s rural setting often means larger cleanout jobs — barn cleanouts, estate sales, older farmhouses — and our 15 and 20-yard dumpsters are ideal for that kind of work. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Hinds County customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Planning a rental?</strong> Read our guide on <Link href="/blog/how-to-choose-dumpster-size">how to choose the right dumpster size</Link> for your project.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Raymond is located in <Link href="/service-areas/hinds-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Hinds County</Link> — see all Hinds County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions: Raymond Dumpster Rentals</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>How much does it cost to rent a dumpster in Raymond, MS?</h3>
                            <p>Our dumpster rentals in Raymond start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size).</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Do you deliver to rural properties outside of Raymond?</h3>
                            <p>Yes! We serve Raymond and all surrounding rural Hinds County properties. Long driveways, rural roads, and farm properties are no problem — we just need enough clearance for the truck to back in safely.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What items are not allowed in your dumpsters in Raymond?</h3>
                            <p>We cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. Call us if you have specific items you&apos;re unsure about.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Raymond?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now" location="Raymond Service Area CTA" />
                        <TrackedPhoneLink location="Raymond Service Area CTA" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
