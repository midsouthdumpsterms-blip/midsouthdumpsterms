import { Metadata } from 'next'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import PriceSummary from '@/components/PriceSummary'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/madison-county' },
    title: 'Dumpster Rental Madison County MS',
    description:
        'Roll-off dumpster rental throughout Madison County, Mississippi. 10, 15 and 20-yard containers, same-day delivery, flat rates from $349.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Madison County MS',
        description: 'Locally owned roll off dumpster rental serving all of Madison County, MS. Same-day delivery, flat-rate pricing starting at $349.',
        url: 'https://midsouthdumpsterms.com/service-areas/madison-county',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

export default function MadisonCountyPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll off dumpster rentals throughout Madison County, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Madison County',
        undefined,
        ['39110', '39157', '39046', '39029', '39071', '39179']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Madison County', url: 'https://midsouthdumpsterms.com/service-areas/madison-county' },
    ])

    const faqs = [
        {
            question: 'Do you provide roll off dumpster rental throughout all of Madison County, MS?',
            answer: 'Yes! Mid South Dumpster Rentals serves all of Madison County including Madison, Ridgeland, Canton, Gluckstadt, Flora, Pocahontas, and surrounding communities. We own our trucks and handle every delivery ourselves.',
        },
        {
            question: 'How much does roll off dumpster rental cost in Madison County, MS?',
            answer: 'Our roll off dumpster rentals in Madison County start at $349 for a 10-yard container, $399 for a 15-yard, and $449 for a 20-yard. All prices include delivery, pickup, and disposal with no hidden fees.',
        },
        {
            question: 'Can I get same-day dumpster delivery in Madison County?',
            answer: 'Yes! We offer same-day roll off dumpster delivery throughout Madison County when you call before noon at 601-316-7891. We deliver 7 days a week, 7AM–7PM.',
        },
        {
            question: 'Do I need a permit for a dumpster in Madison County?',
            answer: 'If placing the dumpster on your private driveway or property, no permit is typically needed. For placement on a public road or right-of-way, check with the City of Madison or City of Ridgeland depending on your location. We can help guide you through the process.',
        },
        {
            question: 'What cities in Madison County do you serve?',
            answer: 'We serve the entire Madison County area including Madison, Ridgeland, Canton, Gluckstadt, Flora, Pocahontas, Livingston, and surrounding communities. Call us at 601-316-7891 if you have questions about your specific location.',
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
                    <h1>Roll Off Dumpster Rental in Madison County, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving all of Madison County — same-day delivery to Madison, Ridgeland, Canton, Gluckstadt, Flora & more
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Madison County Dumpster" location="Madison County Service Area Hero" />
                        <TrackedPhoneLink location="Madison County Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Roll Off Dumpster Sizes Available in Madison County</h2>
                    <PriceSummary place="Madison County" />
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>What Makes Madison County Different</h2>
                    <p>
                        Madison County is the fastest-growing county in Mississippi, and nearly everything
                        we haul here reflects that. Where Hinds County work is dominated by clearing out
                        old houses, Madison County work is dominated by building new ones and fitting out
                        the ones just finished.
                    </p>
                    <p>
                        That changes the container. New-construction debris &mdash; framing offcuts,
                        drywall, packaging, siding &mdash; is bulky and light, so you run out of volume
                        long before you run out of weight. The 20-yard is the default here, where a 15
                        would do the same job in an older neighborhood.
                    </p>
                    <p>
                        The other Madison County specific is covenants. Reunion, Annandale, Providence and
                        the newer Gluckstadt subdivisions all sit under active HOAs, and a good number
                        restrict how long a container may sit in a driveway, where it can be placed, or
                        require notice before delivery. An HOA rule is separate from and additional to
                        anything the city or county requires. Check yours before you book a 7-day rental
                        &mdash; it is the single most common surprise we run into in this county.
                    </p>
                    <p>
                        Canton adds a different kind of demand again: the Nissan plant and its supplier
                        base mean commercial and industrial clearances alongside the residential work. See{' '}
                        <Link href="/services/construction-dumpster-rental">construction dumpster rental</Link>{' '}
                        for job-site sizing, or{' '}
                        <Link href="/services/commercial-dumpster-rental">commercial dumpster rental</Link>{' '}
                        for refits and turnovers.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Choose Mid South for Madison County Dumpster Rental?</h2>
                            <p>We're a locally owned Central Mississippi company — not a national broker. When you call us, you reach the owner directly. Our roll off dumpsters serve every corner of Madison County with the reliability and accountability that national chains can't offer.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving all cities in Madison County, MS</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Roll Off Dumpster Uses Across Madison County</h2>
                            <p>Whether you're renovating in Reunion, clearing an estate in Lake Caroline, running a roofing crew off Old Canton Road in Ridgeland, or doing new construction in Gluckstadt — we have the right roll off dumpster for your Madison County project.</p>
                            <p><strong>Common roll off dumpster uses in Madison County:</strong></p>
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
                    <h2>Cities We Serve Across Madison County, MS</h2>
                    <p>
                        As Madison County's locally owned roll off dumpster company, we cover the entire county. Here are the cities and communities we regularly serve:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
                        {[
                            { name: 'Madison', href: '/service-areas/madison' },
                            { name: 'Ridgeland', href: '/service-areas/ridgeland' },
                            { name: 'Canton', href: '/service-areas/canton' },
                            { name: 'Gluckstadt', href: '/service-areas/gluckstadt' },
                            { name: 'Flora', href: '/service-areas/flora' },
                            { name: 'Pocahontas', href: null },
                            { name: 'Livingston', href: null },
                            { name: 'Camden', href: null },
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
                        Don't see your city? Call us at <TrackedPhoneLink location="Madison County Cities Section">601-316-7891</TrackedPhoneLink> — we likely serve your area and can confirm availability.
                    </p>
                </div>
            </section>

            <FaqSection faqs={faqs} title="Madison County Dumpster Rental FAQ" background />

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Roll Off Dumpster in Madison County?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service throughout Madison County, MS
                    </p>
                    <BookingButton label="Book Madison County Dumpster" location="Madison County Service Area CTA" />
                </div>
            </section>
        </>
    )
}
