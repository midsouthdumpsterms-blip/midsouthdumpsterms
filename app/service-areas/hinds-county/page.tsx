import { Metadata } from 'next'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import PriceSummary from '@/components/PriceSummary'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/hinds-county' },
    title: 'Dumpster Rental Hinds County MS',
    description:
        'Roll-off dumpster rental throughout Hinds County, Mississippi. 10, 15 and 20-yard containers, same-day delivery, flat rates from $349.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Hinds County MS',
        description: 'Locally owned roll off dumpster rental serving all of Hinds County, MS. Same-day delivery, flat-rate pricing starting at $349.',
        url: 'https://midsouthdumpsterms.com/service-areas/hinds-county',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

export default function HindsCountyPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll off dumpster rentals throughout Hinds County, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Hinds County',
        undefined,
        ['39201', '39202', '39203', '39204', '39205', '39206', '39209', '39056', '39272', '39083', '39170']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Hinds County', url: 'https://midsouthdumpsterms.com/service-areas/hinds-county' },
    ])

    const faqs = [
        {
            question: 'Do you provide roll off dumpster rental throughout all of Hinds County, MS?',
            answer: 'Yes! Mid South Dumpster Rentals serves all of Hinds County including Jackson, Clinton, Byram, Terry, Raymond, Bolton, Edwards, and surrounding communities. We own our trucks and handle every delivery ourselves.',
        },
        {
            question: 'How much does roll off dumpster rental cost in Hinds County, MS?',
            answer: 'Our roll off dumpster rentals in Hinds County start at $349 for a 10-yard container, $399 for a 15-yard, and $449 for a 20-yard. All prices are flat-rate and include delivery, pickup, and disposal with no hidden fees.',
        },
        {
            question: 'Can I get same-day dumpster delivery in Hinds County?',
            answer: 'Yes! We offer same-day roll off dumpster delivery throughout Hinds County when you call before noon at 601-316-7891. We deliver 7 days a week, 7AM–7PM.',
        },
        {
            question: 'Do I need a permit for a dumpster in Hinds County?',
            answer: 'If placing the dumpster on your private driveway or property in Hinds County, no permit is typically needed. For placement on a public street or right-of-way in Jackson or another city, a permit may be required. We can help guide you through the process.',
        },
        {
            question: 'What cities in Hinds County do you serve?',
            answer: 'We serve the entire Hinds County area including Jackson, Clinton, Byram, Terry, Raymond, Bolton, Edwards, Utica, and surrounding communities. Call us at 601-316-7891 if you have questions about your specific location.',
        },
    ]

    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Hinds County, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving all of Hinds County — same-day delivery to Jackson, Clinton, Byram, Terry, Raymond & more
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Hinds County Dumpster" location="Hinds County Service Area Hero" />
                        <TrackedPhoneLink location="Hinds County Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Roll Off Dumpster Sizes Available in Hinds County</h2>
                    <PriceSummary place="Hinds County" />
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>What Makes Hinds County Different</h2>
                    <p>
                        Hinds County is the one with the state capital in it, and that shapes almost every
                        job we run here. Roughly a quarter of Mississippi&rsquo;s population lives inside
                        the Jackson metro, and the housing stock skews old &mdash; Belhaven and Fondren
                        date to the early 1900s, and much of West and South Jackson is pre-war.
                    </p>
                    <p>
                        Three practical consequences. Placement is tighter than anywhere else we serve:
                        narrow driveways, short setbacks and a mature oak canopy that sits below the
                        clearance a roll-off truck needs. Estate and probate cleanouts are a far larger
                        share of the work here than in the newer counties, because the homes have been
                        held by the same families for decades. And downtown jobs frequently have no
                        private ground at all, which puts the container on the street and brings a City of
                        Jackson permit into play.
                    </p>
                    <p>
                        Outside the city the county changes character completely. Raymond, Bolton, Utica
                        and Edwards are rural, with long drives, open lots and easy placement &mdash; and
                        with Hinds Community College in Raymond, a steady flow of rental turnovers.
                    </p>
                    <p>
                        Detail on capital-city deliveries is on the{' '}
                        <Link href="/service-areas/jackson">Jackson delivery page</Link>, and{' '}
                        <Link href="/services/estate-cleanout-dumpster-rental">estate cleanout dumpster rental</Link>{' '}
                        covers the sizing and the sequence for a probate clearance.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Choose Mid South for Hinds County Dumpster Rental?</h2>
                            <p>We're a locally owned Hinds County company — not a national call center. Our roll off dumpsters are owned and operated by us, meaning you get reliable delivery, responsive service, and a real person on the phone every time you call.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving all cities in Hinds County, MS</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Roll Off Dumpster Uses Across Hinds County</h2>
                            <p>Whether you're clearing an estate in Belhaven, remodeling in North Jackson, running a roofing crew in Clinton, or cleaning out a rental property in Byram — we have the right roll off dumpster for your Hinds County project.</p>
                            <p><strong>Common roll off dumpster uses in Hinds County:</strong></p>
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
                    <h2>Cities We Serve Across Hinds County, MS</h2>
                    <p>
                        As Hinds County's locally owned roll off dumpster company, we cover the entire county — from the heart of Jackson to the smaller communities throughout Hinds County:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
                        {[
                            { name: 'Jackson', href: '/service-areas/jackson' },
                            { name: 'Clinton', href: '/service-areas/clinton' },
                            { name: 'Byram', href: '/service-areas/byram' },
                            { name: 'Terry', href: '/service-areas/terry' },
                            { name: 'Raymond', href: null },
                            { name: 'Bolton', href: '/service-areas/bolton' },
                            { name: 'Edwards', href: null },
                            { name: 'Utica', href: null },
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
                        Don't see your city? Call us at <TrackedPhoneLink location="Hinds County Cities Section">601-316-7891</TrackedPhoneLink> — we likely serve your area and can confirm availability.
                    </p>
                </div>
            </section>

            <FaqSection faqs={faqs} title="Hinds County Dumpster Rental FAQ" background />

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Roll Off Dumpster in Hinds County?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service throughout Hinds County, MS
                    </p>
                    <BookingButton label="Book Hinds County Dumpster" location="Hinds County Service Area CTA" />
                </div>
            </section>
        </>
    )
}
