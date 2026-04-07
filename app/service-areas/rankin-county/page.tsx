import { Metadata } from 'next'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Roll Off Dumpster Rental Rankin County MS | Mid South Dumpster Rentals',
    description:
        'Roll off dumpster rental serving all of Rankin County, MS. 10, 15 & 20-yard dumpsters with same-day delivery to Brandon, Pearl, Flowood, Richland, Florence & more. Flat-rate pricing, no hidden fees. Call 601-316-7891.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Rankin County MS | Mid South',
        description: 'Locally owned roll off dumpster rental serving all of Rankin County, MS. Same-day delivery, flat-rate pricing starting at $349.',
        url: 'https://midsouthdumpsterms.com/service-areas/rankin-county',
    },
}

export default function RankinCountyPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll off dumpster rentals throughout Rankin County, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Rankin County',
        undefined,
        ['39042', '39047', '39208', '39157', '39218', '39073', '39167', '39208']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Rankin County', url: 'https://midsouthdumpsterms.com/service-areas/rankin-county' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: 'Do you provide roll off dumpster rental throughout all of Rankin County, MS?',
            answer: 'Yes! Mid South Dumpster Rentals serves all of Rankin County including Brandon, Pearl, Flowood, Richland, Florence, Pelahatchie, Brandon, and surrounding communities. We own our trucks and do every delivery ourselves.',
        },
        {
            question: 'How much does roll off dumpster rental cost in Rankin County, MS?',
            answer: 'Our roll off dumpster rentals in Rankin County start at $349 for a 10-yard container, $399 for a 15-yard, and $449 for a 20-yard. All prices include delivery, pickup, and disposal with no hidden fees.',
        },
        {
            question: 'Can I get same-day dumpster delivery in Rankin County?',
            answer: 'Yes! We offer same-day roll off dumpster delivery throughout Rankin County when you call before noon at 601-316-7891. We deliver 7 days a week, 7AM–7PM.',
        },
        {
            question: 'Do I need a permit for a dumpster in Rankin County?',
            answer: 'If the dumpster is placed on your private property or driveway, no permit is typically needed. If it must be placed on a public street or right-of-way in Rankin County, check with your local city hall. We can help guide you through the process.',
        },
        {
            question: 'What cities in Rankin County do you serve?',
            answer: 'We serve the entire Rankin County area including Brandon, Pearl, Flowood, Richland, Florence, Pelahatchie, Ludlow, Sandhill, and surrounding communities. Call us at 601-316-7891 if you have questions about your specific location.',
        },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Rankin County, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving all of Rankin County — same-day delivery to Brandon, Pearl, Flowood, Richland, Florence & more
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Rankin County Dumpster" location="Rankin County Service Area Hero" />
                        <TrackedPhoneLink location="Rankin County Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Roll Off Dumpster Sizes Available in Rankin County</h2>
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
                            <h2>Why Choose Mid South for Rankin County Dumpster Rental?</h2>
                            <p>We're Central Mississippi's locally owned roll off dumpster company — not a national broker passing your call to a stranger. We own our trucks, employ our own drivers, and control every delivery and pickup in Rankin County. When you call us, you talk to the owner.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving all of Rankin County, MS</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Roll Off Dumpster Uses in Rankin County</h2>
                            <p>Whether you're remodeling in Brandon, clearing an estate in Pearl, running a roofing crew in Flowood, or doing new construction in Florence, we have the right roll off dumpster for your Rankin County project.</p>
                            <p><strong>Common roll off dumpster uses in Rankin County:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Construction and demolition debris</li>
                                <li>Estate and foreclosure cleanouts</li>
                                <li>Yard waste and storm cleanup</li>
                                <li>Retail and commercial contractor projects</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Cities We Serve Across Rankin County, MS</h2>
                    <p>
                        As Rankin County's locally owned roll off dumpster company, we cover the entire county. Here are the cities and communities we regularly serve:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
                        {[
                            { name: 'Brandon', href: '/service-areas/brandon' },
                            { name: 'Pearl', href: '/service-areas/pearl' },
                            { name: 'Flowood', href: '/service-areas/flowood' },
                            { name: 'Richland', href: '/service-areas/richland' },
                            { name: 'Florence', href: '/service-areas/florence' },
                            { name: 'Pelahatchie', href: '/service-areas/pelahatchie' },
                            { name: 'Sandhill', href: null },
                            { name: 'Ludlow', href: null },
                        ].map(({ name, href }) => (
                            <div key={name} style={{ padding: '0.75rem 1rem', backgroundColor: 'var(--color-gray-50)', borderRadius: '8px', fontWeight: '500' }}>
                                {href ? (
                                    <Link href={href} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                                        {name} →
                                    </Link>
                                ) : (
                                    <span>{name}</span>
                                )}
                            </div>
                        ))}
                    </div>
                    <p>
                        Don't see your city? Call us at <TrackedPhoneLink location="Rankin County Cities Section">601-316-7891</TrackedPhoneLink> — we likely serve your area. We regularly go beyond our listed cities for the right project.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection} style={{ padding: 'var(--spacing-3xl) 0', backgroundColor: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2 className="text-center">Rankin County Dumpster Rental FAQs</h2>
                    <div className={styles.faqList}>
                        {[
                            {
                                question: 'Do you provide roll off dumpster rental throughout all of Rankin County, MS?',
                                answer: 'Yes! Mid South Dumpster Rentals serves all of Rankin County including Brandon, Pearl, Flowood, Richland, Florence, Pelahatchie, and surrounding communities. We own our trucks and do every delivery ourselves.',
                            },
                            {
                                question: 'How much does roll off dumpster rental cost in Rankin County, MS?',
                                answer: 'Our roll off dumpster rentals in Rankin County start at $349 for a 10-yard container, $399 for a 15-yard, and $449 for a 20-yard. All prices include delivery, pickup, and disposal with no hidden fees.',
                            },
                            {
                                question: 'Can I get same-day dumpster delivery in Rankin County?',
                                answer: 'Yes! We offer same-day roll off dumpster delivery throughout Rankin County when you call before noon at 601-316-7891. We deliver 7 days a week, 7AM–7PM.',
                            },
                            {
                                question: 'Do I need a permit for a dumpster in Rankin County?',
                                answer: 'If the dumpster is placed on your private property or driveway, no permit is typically needed. If it must be placed on a public street or right-of-way, check with your local city hall. We can help guide you through the process.',
                            },
                            {
                                question: 'What cities in Rankin County do you serve?',
                                answer: 'We serve the entire Rankin County area including Brandon, Pearl, Flowood, Richland, Florence, Pelahatchie, Ludlow, Sandhill, and surrounding communities.',
                            },
                        ].map((faq, index) => (
                            <div key={index} className={styles.faqItem} style={{ marginBottom: 'var(--spacing-xl)' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Roll Off Dumpster in Rankin County?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service throughout Rankin County
                    </p>
                    <BookingButton label="Book Rankin County Dumpster" location="Rankin County Service Area CTA" />
                </div>
            </section>
        </>
    )
}
