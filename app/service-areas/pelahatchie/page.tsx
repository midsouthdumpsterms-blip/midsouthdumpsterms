import { Metadata } from 'next'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/pelahatchie' },
    title: 'Roll Off Dumpster Rental Pelahatchie MS | Rankin County',
    description:
        'Roll off dumpster rental in Pelahatchie, MS (ZIP 39145). 10, 15 & 20-yard dumpsters with same-day delivery to Pelahatchie and surrounding Rankin County communities. Flat-rate pricing from $349. Call 601-316-7891.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Pelahatchie MS | Rankin County',
        description: 'Locally owned roll off dumpster rental serving Pelahatchie & all of Rankin County. Same-day delivery, flat-rate pricing from $349, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/pelahatchie',
    },
}

export default function PelahatchePage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Pelahatchie, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects throughout Rankin County.',
        'Pelahatchie',
        undefined,
        ['39145']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Pelahatchie', url: 'https://midsouthdumpsterms.com/service-areas/pelahatchie' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: 'How much does it cost to rent a roll off dumpster in Pelahatchie, MS?',
            answer: 'Our roll off dumpster rentals in Pelahatchie start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. All prices include drop-off, pick-up, and a standard weight allowance with no hidden fees.',
        },
        {
            question: 'Do you deliver to rural properties around Pelahatchie?',
            answer: 'Yes — Pelahatchie is a rural Rankin County community and we serve properties throughout the area, including larger lots near the Ross Barnett Reservoir, Pelahatchie Shore Park, and the surrounding countryside. Long driveways and rural roads are no problem.',
        },
        {
            question: 'Do I need a permit to rent a dumpster in Pelahatchie, MS?',
            answer: 'You only need a permit if placing the dumpster on a public street. If placed on private property or your driveway, no permit is required. Contact the Town of Pelahatchie or Rankin County for specific regulations.',
        },
        {
            question: 'What items are not allowed in your dumpsters in Pelahatchie?',
            answer: 'For safety and environmental reasons, we cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. If you have specific items you\'re unsure about, call us before booking.',
        },
        {
            question: 'How quickly can you deliver a dumpster to Pelahatchie, MS?',
            answer: 'We offer same-day and next-day roll off dumpster delivery in Pelahatchie. Call us before noon at 601-316-7891 and we can typically deliver the same day, 7 days a week. Pelahatchie is about 30 miles east of Jackson — well within our service area.',
        },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Pelahatchie, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Pelahatchie and all of Rankin County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Pelahatchie Dumpster" location="Pelahatchie Service Area Hero" />
                        <TrackedPhoneLink location="Pelahatchie Service Area Hero" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Pelahatchie</h2>
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
                            <h2>Why Choose Mid South for Pelahatchie Dumpster Rental?</h2>
                            <p>We&apos;re a locally owned Central Mississippi company — not a national broker. We own our trucks and handle every delivery ourselves. Pelahatchie residents and Rankin County contractors get fast, reliable roll off service backed by our 5-star Google reputation.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Pelahatchie and all of Rankin County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup &amp; disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial &amp; construction service</li>
                                <li>✓ Rural property delivery — no job too far out</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ Licensed &amp; insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Pelahatchie Project</h2>
                            <p>Pelahatchie&apos;s mix of small-town charm and rural property means many projects involve larger lots, older homes, and outdoor cleanups. Whether you&apos;re renovating near <strong>Muscadine Park</strong> in downtown, clearing out a property near <strong>Pelahatchie Shore Park</strong> on the Ross Barnett Reservoir, or tackling a major cleanout in the surrounding countryside, we have the right roll off dumpster for the job.</p>
                            <p><strong>Common roll off dumpster uses in Pelahatchie, MS:</strong></p>
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
                    <h2>Roll Off Dumpster Rental Serving Pelahatchie &amp; Rankin County</h2>
                    <p>
                        Pelahatchie is a small, historic town in Rankin County — founded in 1850 and named after Pelahatchie Creek, a Native American name meaning &quot;crooked creek.&quot; Sitting about 30 miles east of Jackson, it&apos;s a tight-knit community with deep roots and a growing presence along the Ross Barnett Reservoir corridor. The town is home to the beloved <strong>Muscadine Jubilee</strong>, an annual festival celebrating the local muscadine grape harvest that draws visitors from across the region, and <strong>Yogi Bear&apos;s Jellystone Park</strong> on Lake Road — a popular family destination near town. With a mix of historic downtown properties, rural homesteads, and lakeside lots, there&apos;s always work to be done — and we&apos;re here to help haul it away.
                    </p>
                    <p>
                        We provide fast roll off dumpster delivery throughout Pelahatchie and all of Rankin County, including{' '}
                        <Link href="/service-areas/brandon" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Brandon</Link>,{' '}
                        <Link href="/service-areas/flowood" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Flowood</Link>,{' '}
                        <Link href="/service-areas/pearl" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Pearl</Link>,{' '}
                        <Link href="/service-areas/richland" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Richland</Link>, and{' '}
                        <Link href="/service-areas/florence" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Florence</Link>.
                    </p>

                    <h2>Areas &amp; Communities We Serve Near Pelahatchie</h2>
                    <p>
                        Pelahatchie doesn&apos;t have large subdivisions — it&apos;s defined by its <strong>historic downtown</strong>, the <strong>Ross Barnett Reservoir shoreline</strong>, and rural residential areas spreading east through Rankin County. We deliver to all of it, including:
                    </p>
                    <ul className={styles.projectsList} style={{ marginBottom: '1.5rem' }}>
                        <li>Downtown Pelahatchie &amp; Historic District</li>
                        <li>Muscadine Park area</li>
                        <li>Milltown Park area</li>
                        <li>Pelahatchie Shore Park corridor (Ross Barnett Reservoir)</li>
                        <li>Lake Road &amp; Jellystone Park area</li>
                        <li>Pelahatchie Attendance Center neighborhood</li>
                        <li>Rural Rankin County properties (ZIP 39145)</li>
                    </ul>
                    <p>
                        The reservoir-adjacent properties and rural homesteads around Pelahatchie often mean bigger cleanout jobs — storm debris, aging outbuildings, full estate hauls. Our 15 and 20-yard dumpsters are built for exactly that kind of work. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Rankin County customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Planning a rental?</strong> Read our guide on <Link href="/blog/how-to-choose-dumpster-size">how to choose the right dumpster size</Link> for your project.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Pelahatchie is located in <Link href="/service-areas/rankin-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Rankin County</Link> — see all Rankin County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions: Pelahatchie Dumpster Rentals</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>How much does it cost to rent a dumpster in Pelahatchie, MS?</h3>
                            <p>Our dumpster rentals in Pelahatchie start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size).</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Do you deliver to rural properties outside of Pelahatchie?</h3>
                            <p>Yes! We serve Pelahatchie and all surrounding rural Rankin County properties. Long driveways, rural roads, and larger rural lots near the reservoir are no problem — we just need enough clearance for the truck to back in safely.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What items are not allowed in your dumpsters in Pelahatchie?</h3>
                            <p>We cannot accept hazardous materials, wet paint, tires, batteries, oil, chemicals, or appliances containing Freon. Call us if you have specific items you&apos;re unsure about.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Pelahatchie?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now" location="Pelahatchie Service Area CTA" />
                        <TrackedPhoneLink location="Pelahatchie Service Area CTA" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
