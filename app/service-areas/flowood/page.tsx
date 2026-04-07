import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Roll Off Dumpster Rental Flowood MS | Same-Day Service | Mid South',
    description:
        'Roll off dumpster rental in Flowood, MS starting at $349. Same-day delivery to Kensington, Laurelwood, Traditions & all Flowood neighborhoods. Serving Rankin County contractors & homeowners. Call 601-316-7891.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Flowood, MS | Mid South',
        description: 'Same-day roll off dumpster rental in Flowood, MS. Flat-rate pricing from $349, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/flowood',
    },
}

export default function FlowoodPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Flowood, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Flowood',
        undefined,
        ['39232']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Flowood', url: 'https://midsouthdumpsterms.com/service-areas/flowood' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: 'How much does roll off dumpster rental cost in Flowood, MS?',
            answer: 'Our flat-rate prices in Flowood start at $349 for a 10-yard dumpster, $399 for a 15-yard, and $449 for a 20-yard. All prices include delivery, pickup, and disposal. No hidden fees.'
        },
        {
            question: 'Can you place a dumpster on my driveway in Flowood?',
            answer: 'Yes — we specialize in residential driveway delivery throughout Flowood. We use protective boards to prevent damage to concrete or asphalt, especially in neighborhoods like Laurelwood and Kensington.'
        },
        {
            question: 'Do you offer same-day dumpster delivery in Flowood?',
            answer: 'Yes! We offer same-day roll off dumpster delivery throughout Flowood when you call before noon at 601-316-7891. We deliver 7 days a week, 7AM–7PM.'
        },
        {
            question: 'Do I need a permit for a dumpster in Flowood?',
            answer: 'If placing the dumpster on your private driveway or property, no permit is required. For placement on a public street or right-of-way in Flowood, contact the City of Flowood.'
        },
        {
            question: 'What size dumpster is best for a commercial renovation in Flowood?',
            answer: 'For commercial renovations along Lakeland Drive or in Flowood business parks, we typically recommend a 20-yard dumpster. Call us at 601-316-7891 and we can help size your project correctly.'
        },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Flowood, MS</h1>
                    <p className={styles.heroSubtext}>
                        Same-day roll off dumpster delivery throughout Flowood — serving Kensington, Laurelwood, Traditions & surrounding Rankin County
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Flowood Dumpster" location="Flowood Service Area Hero" />
                        <TrackedPhoneLink location="Flowood Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Flowood</h2>
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
                            <h2>Why Choose Mid South for Flowood Dumpster Rental?</h2>
                            <p>Flowood is one of our most active commercial service areas — from the Lakeland Drive retail corridor to new construction along the I-20 frontage. We're locally owned, we know Flowood's streets and HOA rules, and we deliver on time every time.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving all of Flowood and Rankin County</li>
                                <li>✓ Flat-rate pricing — no hidden fees</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters</li>
                                <li>✓ Residential and commercial service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Roll Off Dumpster Uses in Flowood, MS</h2>
                            <p>Whether you&apos;re remodeling a home in Kensington, managing a roofing crew in Laurelwood, running a commercial buildout along Lakeland Drive, or cleaning out a rental property near the Flowood business parks off I-20 — we have the right roll off dumpster for your project.</p>
                            <p><strong>Common roll off dumpster uses in Flowood:</strong></p>
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
                    <h2>Roll Off Dumpster Rental Serving All of Rankin County from Flowood</h2>
                    <p>
                        Flowood&apos;s prime location at the crossroads of I-20 and Lakeland Drive makes it a central hub for our Rankin County service area. We provide fast roll off dumpster rental throughout all of Rankin County — from Flowood and Pearl to Brandon, Richland, Florence, and beyond.
                    </p>
                    <h2>Neighborhoods &amp; Areas We Serve in Flowood, MS</h2>
                    <p>
                        Flowood is one of the Jackson metro&apos;s most active commercial and residential growth areas — and one of our busiest delivery zones. We deliver roll off dumpsters throughout every neighborhood and corridor in Flowood, including:
                    </p>
                    <ul className={styles.projectsList} style={{ marginBottom: '1.5rem' }}>
                        <li><strong>Dogwood &amp; Oakridge</strong> — Upscale gated communities with estate-sized lots off Lakeland Drive; high-end remodels &amp; renovation projects (ZIP 39232)</li>
                        <li><strong>Laurelwood &amp; Laurelwood Estates</strong> — Established residential neighborhoods; active roofing, remodeling &amp; cleanout work</li>
                        <li><strong>Kensington</strong> — Residential subdivision off Old Fannin Road; HOA community with frequent driveway dumpster deliveries</li>
                        <li><strong>Traditions &amp; Latter Rayne</strong> — Newer residential communities in the Flowood growth corridor</li>
                        <li><strong>Lineage Lake &amp; Mirror Lake</strong> — Lakeside residential areas off the Flowood / Pearl border zone</li>
                        <li><strong>Bradford Place &amp; Abundance Pointe</strong> — Established subdivisions in southeast Flowood</li>
                        <li><strong>Lakeland Drive (Hwy 25) corridor</strong> — Major commercial spine; retail buildouts at Dogwood Festival Market, Dogwood Promenade &amp; surrounding business parks</li>
                        <li><strong>Winner&apos;s Circle Park area</strong> — Active residential corridor off Winner&apos;s Circle Drive; park, walking tracks &amp; nearby neighborhoods</li>
                        <li><strong>Sheraton Flowood / The Refuge area</strong> — Hospitality &amp; conference center corridor; commercial renovation &amp; hotel cleanout projects</li>
                        <li><strong>I-20 frontage &amp; business parks</strong> — New construction, commercial demo &amp; contractor job sites along the interstate corridor (ZIP 39232)</li>
                        <li><strong>Old Fannin Road corridor</strong> — Connecting Flowood to Pearl; mixed residential &amp; commercial service area</li>
                    </ul>
                    <p>
                        Flowood&apos;s growing business district and prime residential communities make it one of the metro area&apos;s most dynamic service zones. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Flowood customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Tip for Flowood Homeowners:</strong> We highly recommend our 15-yard dumpster for most mid-sized renovations in the Laurelwood and Kensington areas.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Flowood is part of <Link href="/service-areas/rankin-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Rankin County</Link> — view all Rankin County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions: Flowood Dumpster Rentals</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>How much does roll off dumpster rental cost in Flowood, MS?</h3>
                            <p>Our flat-rate prices in Flowood start at $349 for a 10-yard, $399 for a 15-yard, and $449 for a 20-yard. All prices include delivery, pickup, and disposal — no hidden fees.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Can you place a dumpster on my driveway in Flowood?</h3>
                            <p>Yes — we specialize in residential driveway delivery. We use protective boards to prevent damage to concrete or asphalt in neighborhoods like Laurelwood and Kensington.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Do you offer same-day dumpster delivery in Flowood?</h3>
                            <p>Yes! Call before noon at 601-316-7891 for same-day roll off dumpster delivery. We deliver throughout Flowood and Rankin County 7 days a week, 7AM–7PM.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Do I need a permit for a dumpster in Flowood?</h3>
                            <p>For driveway or private property placement, no permit is needed. For street placement, contact the City of Flowood for requirements.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What size dumpster is best for commercial work in Flowood?</h3>
                            <p>For commercial renovations along Lakeland Drive or in Flowood business parks, we typically recommend a 20-yard. Call us and we'll help you size it correctly.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
                        <Image
                            src="/images/gallery/clean-dumpster-delivery-flowood-blue.jpg"
                            alt="Mid South Dumpster Rentals blue roll-off container delivered on a residential driveway in Flowood, Mississippi (Rankin County) — Lakeland Drive corridor"
                            width={760}
                            height={480}
                            style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        Mid South Dumpster Rentals delivery in Flowood, MS (Rankin County) — same-day roll-off service near Lakeland Drive &amp; I-20.
                    </p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Flowood?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Flowood Service Area CTA" />
                </div>
            </section>
        </>
    )
}
