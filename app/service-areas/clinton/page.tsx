import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/clinton' },
    title: 'Roll Off Dumpster Rental Clinton MS | Hinds County | Mid South',
    description:
        'Roll off dumpster rental in Clinton, MS and Hinds County. 10, 15 & 20-yard dumpsters with same-day delivery. Flat-rate pricing starting at $349 — delivery, pickup & disposal included. Call 601-316-7891.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Clinton MS | Hinds County',
        description: 'Local roll off dumpster rental in Clinton, MS. Same-day delivery, flat-rate pricing, no hidden fees. Serving all of Hinds County.',
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
            answer: "Yes! Mid South Dumpster Rentals is locally owned and operates in Hinds County every day. Call before noon at 601-316-7891 and we can typically provide same-day roll off dumpster delivery to Clinton."
        },
        {
            question: "How do I protect my driveway when renting a dumpster in Clinton?",
            answer: "We know your property is an investment. Our professional drivers are trained in precision placement. We can carefully position the dumpster on wooden boards so that the heavy steel wheels never scrape or damage your driveway."
        },
        {
            question: "Are there things I can't put in my rental dumpster in Clinton?",
            answer: "Standard household junk, lumber, and yard debris are totally fine. However, we cannot accept hazardous waste, items containing Freon (like refrigerators), wet paint, tires, or batteries. Give us a call if you are unsure about an item."
        },
        {
            question: "How much does roll off dumpster rental cost in Clinton, MS?",
            answer: "Our roll off dumpster rentals in Clinton start at $349 for a 10-yard, $399 for a 15-yard, and $449 for a 20-yard container. All prices include delivery, pickup, and disposal — no surprise fees at the end."
        },
        {
            question: "Do you serve all of Hinds County, MS?",
            answer: "Yes, we serve all of Hinds County including Clinton, Jackson, Byram, Raymond, Terry, Bolton, and Edwards. We're Central Mississippi's locally owned roll off dumpster rental company."
        }
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Clinton, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Clinton and all of Hinds County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Clinton Dumpster" location="Clinton Service Area Hero" />
                        <TrackedPhoneLink location="Clinton Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
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
                            <h2>Why Choose Mid South for Clinton Dumpster Rental?</h2>
                            <p>We're a locally owned Central Mississippi company — not an out-of-state broker forwarding your call. Our roll off dumpsters are owned and operated by us, so you get reliable delivery and responsive service every time.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Clinton and all of Hinds County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential and commercial projects welcome</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Clinton, MS Project</h2>
                            <p>Whether you're renovating a home near Mississippi College, clearing an estate off Pinehaven Drive, or running a roofing crew along the Highway 80 corridor, we have the right roll off dumpster for your Clinton project.</p>
                            <p><strong>Common roll off dumpster uses in Clinton, MS:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Construction and demolition debris</li>
                                <li>Estate and foreclosure cleanouts</li>
                                <li>Yard waste and storm debris cleanup</li>
                                <li>Commercial contractor projects</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Roll Off Dumpster Rental Serving All of Hinds County, MS</h2>
                    <p>
                        Clinton is a key part of our Hinds County service area. We provide fast roll off dumpster rental throughout all of Hinds County — from Clinton to Jackson, Byram, Raymond, Terry, and Bolton. Whether your project is residential or commercial, our locally owned trucks are ready to deliver.
                    </p>
                    <h2 style={{ marginTop: '2.5rem' }}>Neighborhoods &amp; Communities We Serve in Clinton, MS</h2>
                    <p>
                        Clinton is a college town with a rich historic core and fast-growing residential corridors — and we deliver to every corner of it. Our roll off dumpsters reach every neighborhood and road in Clinton, including:
                    </p>
                    <ul className={styles.projectsList} style={{ marginBottom: '1.5rem' }}>
                        <li><strong>Olde Towne Clinton</strong> — Historic district on the National Register of Historic Places; brick-paved streets near Mississippi College; commercial cleanouts &amp; older home renovations (ZIP 39056)</li>
                        <li><strong>Mississippi College campus area</strong> — State&apos;s oldest private university corridor; residential &amp; commercial projects along College Street &amp; Jefferson Street</li>
                        <li><strong>Cascades &amp; Copper Creek</strong> — Active residential subdivisions in the Clinton growth corridor; roofing, remodeling &amp; yard debris projects</li>
                        <li><strong>Woodmoor &amp; Trailwood</strong> — Established subdivisions with frequent estate cleanout &amp; renovation activity</li>
                        <li><strong>Hunter&apos;s Ridge &amp; Horseshoe Bend</strong> — Residential communities off Clinton Parkway &amp; Northside Drive</li>
                        <li><strong>Southern Oaks &amp; Indian Trails</strong> — Family neighborhoods in the western Clinton corridor</li>
                        <li><strong>Lakeridge &amp; Lakeview Heights</strong> — Established residential areas with active home improvement projects</li>
                        <li><strong>Clinton Park</strong> — Residential subdivision near Clinton Parkway; frequent driveway dumpster deliveries</li>
                        <li><strong>Northside Drive corridor</strong> — Major arterial with mixed residential &amp; commercial service; runs north through the city (ZIP 39056)</li>
                        <li><strong>Clinton Boulevard &amp; Highway 80 corridor</strong> — Commercial strip &amp; older residential stock heading toward Jackson</li>
                        <li><strong>Natchez Trace Parkway (Milepost 89) area</strong> — Scenic rural-residential corridor at Clinton&apos;s western edge; rural property cleanouts</li>
                        <li><strong>I-20 Clinton exits &amp; Pinehaven area</strong> — Commercial &amp; contractor projects along the interstate corridor</li>
                    </ul>
                    <p>
                        Clinton&apos;s family-friendly neighborhoods and active development make it one of Hinds County&apos;s most in-demand service areas. We&apos;re proud to support Clinton residents with professional roll off dumpster rentals backed by 5-star service. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other local customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Cleaning out a house?</strong> Read our comprehensive guide on <Link href="/blog/estate-cleanout-dumpster-rental-central-ms">Renting a Dumpster for Estate Cleanouts in Central MS</Link>.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Clinton is located in <Link href="/service-areas/hinds-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Hinds County</Link> — see all Hinds County cities we serve.
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
                        <Image
                            src="/images/gallery/15-yard-dumpster-clinton-ms-rental.jpg"
                            alt="Mid South Dumpster Rentals 15-yard roll-off container in a residential neighborhood in Clinton, Mississippi (Hinds County) — near Olde Towne &amp; Mississippi College"
                            width={760}
                            height={480}
                            style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        Mid South Dumpster Rentals delivery in Clinton, MS (Hinds County) — same-day roll-off service near Olde Towne, Mississippi College &amp; surrounding neighborhoods.
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
