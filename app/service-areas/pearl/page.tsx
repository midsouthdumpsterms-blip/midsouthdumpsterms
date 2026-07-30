import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/pearl' },
    title: 'Roll Off Dumpster Rental Pearl MS | Same-Day Service | Mid South',
    description:
        'Roll off dumpster rental in Pearl, MS starting at $349. 10, 15 & 20-yard dumpsters with same-day delivery to Westside, Parkbridge, Airport Road & all Pearl neighborhoods. Flat-rate pricing. Call 601-316-7891.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Pearl, MS | Mid South',
        description: 'Same-day roll off dumpster rental in Pearl, MS. Flat-rate pricing from $349, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/pearl',
    },
}

export default function PearlPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Pearl, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Pearl',
        undefined,
        ['39208']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Pearl', url: 'https://midsouthdumpsterms.com/service-areas/pearl' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: 'How much does roll off dumpster rental cost in Pearl, MS?',
            answer: 'Our flat-rate prices in Pearl start at $349 for a 10-yard dumpster (1-day), $399 for a 15-yard, and $449 for a 20-yard. All prices include delivery, pickup, and disposal. No hidden fees — ever.'
        },
        {
            question: 'Can I get same-day roll off dumpster delivery in Pearl?',
            answer: 'Yes! We offer same-day delivery throughout Pearl, MS when you call before noon at 601-316-7891. We deliver 7 days a week, 7AM–7PM.'
        },
        {
            question: 'Do I need a permit to rent a dumpster in Pearl, MS?',
            answer: 'If you place the dumpster on your private driveway or property in Pearl, no permit is required. For placement on a public street, contact the City of Pearl for permit requirements.'
        },
        {
            question: 'What size dumpster do I need for a roofing project in Pearl?',
            answer: 'A 10-yard dumpster handles most residential roofing tear-offs in Pearl. For larger roofs or multi-layer shingles, our 15-yard is the better choice. Call us at 601-316-7891 and we can help you size it right.'
        },
        {
            question: 'Can I put construction debris in a rented dumpster in Pearl?',
            answer: 'Yes — we accept wood, drywall, roofing shingles, carpet, concrete, and most construction debris. Prohibited items include hazardous materials, wet paint, tires, and appliances with Freon.'
        },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Pearl, MS</h1>
                    <p className={styles.heroSubtext}>
                        Same-day roll off dumpster delivery throughout Pearl — serving Westside, Parkbridge, Airport Road & all Pearl neighborhoods
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Pearl Dumpster" location="Pearl Service Area Hero" />
                        <TrackedPhoneLink location="Pearl Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Pearl</h2>
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
                            <h2>Why Choose Mid South for Pearl Dumpster Rental?</h2>
                            <p>Pearl is one of the fastest-growing communities in Rankin County — and one of our most active delivery routes. We're locally owned and we know Pearl well: from the Old Brandon Road corridor to the neighborhoods near the airport and the medical mile on Pearson Road.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving all of Pearl and Rankin County</li>
                                <li>✓ Flat-rate pricing — no hidden fees</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters</li>
                                <li>✓ Residential and commercial service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Roll Off Dumpster Uses in Pearl, MS</h2>
                            <p>Whether you're renovating a home near the Pearson Road corridor, cleaning out a rental property on the Westside, tearing off a roof in Parkbridge, or running a commercial project near the Airport Road industrial area — we have the right roll off dumpster for your Pearl project.</p>
                            <p><strong>Common roll off dumpster uses in Pearl:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Construction and demolition debris</li>
                                <li>Estate and foreclosure cleanouts</li>
                                <li>Yard waste and storm cleanup</li>
                                <li>Commercial and retail contractor projects</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Roll Off Dumpster Rental Serving All of Rankin County from Pearl</h2>
                    <p>
                        Pearl sits at the heart of Rankin County and is a key part of our daily delivery route. We provide fast roll off dumpster rental throughout all of Rankin County — from Pearl and Flowood to Brandon, Richland, Florence, and beyond. Whether your project is residential or a multi-week commercial job, our locally owned trucks are ready.
                    </p>
                    <h2 style={{ marginTop: '2.5rem' }}>Neighborhoods &amp; Communities We Serve in Pearl, MS</h2>
                    <p>
                        Pearl is one of the Jackson metro&apos;s fastest-growing cities — and one of our most active daily delivery zones. We cover every neighborhood, subdivision, and corridor in Pearl, including:
                    </p>
                    <ul className={styles.projectsList} style={{ marginBottom: '1.5rem' }}>
                        <li><strong>Westside</strong> — Established residential neighborhood along the western Pearl corridor near the Pearl River (ZIP 39208)</li>
                        <li><strong>Parkbridge &amp; Pauline Creek</strong> — Mid-city residential communities with active roofing and remodel projects</li>
                        <li><strong>Patrick Farms</strong> — Growing subdivision in northeast Pearl; frequent new construction &amp; renovation deliveries</li>
                        <li><strong>Country Place &amp; Wood Ridge</strong> — Established family subdivisions with regular cleanout &amp; remodeling work</li>
                        <li><strong>Bridgepoint &amp; The Hollows</strong> — Newer residential developments in the Pearl growth corridor</li>
                        <li><strong>McLaurin Heights &amp; Grandview Heights</strong> — Elevated residential areas off Old Brandon Road</li>
                        <li><strong>Hickory Glen &amp; Longwood Estates</strong> — Quiet subdivisions in the eastern Pearl residential zone</li>
                        <li><strong>Lee Park &amp; Green Meadow</strong> — Family neighborhoods near Pearl City Park</li>
                        <li><strong>Airport Road / Flowood Drive corridor</strong> — Commercial &amp; industrial zone near Jackson-Medgar Wiley Evers International Airport; contractor &amp; commercial projects (ZIP 39208)</li>
                        <li><strong>Outlets of Mississippi / Riverwind corridor</strong> — Major retail &amp; commercial district; Bass Pro Shops, Trustmark Park area; commercial contractor projects</li>
                        <li><strong>Pearson Road / Old Brandon Road corridor</strong> — Medical mile, retail strip &amp; residential mix running through central Pearl</li>
                        <li><strong>Highway 80 East corridor</strong> — Commercial strip connecting Pearl to Brandon; industrial &amp; residential service</li>
                    </ul>
                    <p>
                        Pearl&apos;s convenient location, active commercial corridors, and growing residential base make it one of our highest-demand service areas. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Pearl customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Wondering what costs are like in the area?</strong> Get an idea from our <Link href="/blog/dumpster-rental-prices-jackson-ms">Dumpster Rental Cost Guide</Link> for Central Mississippi.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Pearl is part of <Link href="/service-areas/rankin-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Rankin County</Link> — view all Rankin County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions: Pearl Dumpster Rentals</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>How much does roll off dumpster rental cost in Pearl, MS?</h3>
                            <p>Our flat-rate prices in Pearl start at $349 for a 10-yard dumpster, $399 for a 15-yard, and $449 for a 20-yard. All prices include delivery, pickup, and disposal — no hidden fees.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Can I get same-day dumpster delivery in Pearl?</h3>
                            <p>Yes! We offer same-day roll off dumpster delivery throughout Pearl when you call before noon at 601-316-7891. We deliver 7 days a week, 7AM–7PM.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Do I need a permit to rent a dumpster in Pearl, MS?</h3>
                            <p>If you place the dumpster on your private driveway or property, no permit is required. For street placement in Pearl, contact the City of Pearl for permit requirements.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What size dumpster do I need for a roofing project in Pearl?</h3>
                            <p>A 10-yard handles most single-layer roof tear-offs. For larger roofs or multi-layer shingles, the 15-yard is usually better. Call us and we'll help you size it.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Can I put construction debris in my Pearl dumpster?</h3>
                            <p>Yes — wood, drywall, roofing shingles, carpet, and most construction debris are all accepted. Prohibited items include hazardous materials, wet paint, tires, and appliances with Freon.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
                        <Image
                            src="/images/gallery/construction-dumpster-pearl-ms-site.jpg"
                            alt="Mid South Dumpster Rentals roll-off container at a construction job site in Pearl, Mississippi (Rankin County) — serving Airport Road, Outlets of Mississippi &amp; surrounding neighborhoods"
                            width={760}
                            height={480}
                            style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        Mid South Dumpster Rentals on a job site in Pearl, MS (Rankin County) — same-day roll-off service near Airport Road, Outlets of Mississippi &amp; Trustmark Park.
                    </p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Pearl?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Pearl Service Area CTA" />
                </div>
            </section>
        </>
    )
}
