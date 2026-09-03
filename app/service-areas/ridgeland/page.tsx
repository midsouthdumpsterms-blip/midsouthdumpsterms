import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import PriceSummary from '@/components/PriceSummary'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/ridgeland' },
    title: 'Dumpster Rental Ridgeland MS | Same-Day',
    description:
        'Roll-off dumpster rental in Ridgeland, MS from $349. 10, 15 and 20-yard containers, same-day delivery to Highland Colony, Bridgewater and County Line.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Ridgeland MS | Madison County',
        description: 'Local roll off dumpster rental serving Ridgeland & all of Madison County. Same-day delivery, flat-rate pricing starting at $349.',
        url: 'https://midsouthdumpsterms.com/service-areas/ridgeland',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

const faqs = [
    {
        question: 'Do I need an HOA permit to rent a dumpster in Ridgeland, MS?',
        answer: 'HOA neighborhoods like Bridgewater might require approval for visible exterior dumpsters. For street placement on public roads, contact the City of Ridgeland Public Works department. Placement on your own private driveway typically requires no permit.',
    },
    {
        question: 'How much does roll off dumpster rental cost in Ridgeland, MS?',
        answer: 'Our flat-rate pricing for Ridgeland includes delivery, pickup, and disposal with no hidden fees. A 10-yard roll off dumpster starts at $349, a 15-yard at $399, and a 20-yard at $449. Extended rentals are available at $50/day.',
    },
    {
        question: 'Which Ridgeland neighborhoods do you deliver to?',
        answer: 'We cover all of Ridgeland in ZIP 39157, including Bridgewater, Ashbrooke, Northbay and Cypress Lake, Greenbrook and Dinsmor, the Township at Colony Park, and Old Town Ridgeland along the Highway 51 corridor. A good number of these are HOA neighborhoods, so check your association rules on container placement and rental length before you book. Our FAQ page lists the items we cannot take.',
    },
    {
        question: 'Do you serve all of Madison County, MS?',
        answer: 'Yes! We serve all cities and communities throughout Madison County including Ridgeland, Madison, Canton, Gluckstadt, Flora, and Pocahontas. Same-day roll off dumpster delivery is available throughout Madison County when you call before noon.',
    },
    {
        question: 'How quickly can you deliver a dumpster to Ridgeland?',
        answer: 'We offer same-day roll off dumpster delivery in Ridgeland, MS, 7 days a week. Call us before noon at 601-316-7891 and we can typically have a dumpster at your location the same day.',
    },
]

export default function RidgelandPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Ridgeland, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Ridgeland',
        undefined,
        ['39157']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Ridgeland', url: 'https://midsouthdumpsterms.com/service-areas/ridgeland' },
    ])
    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Ridgeland, MS</h1>
                    <p className={styles.heroSubtext}>
                        Local roll off dumpster rental serving Ridgeland and all of Madison County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Ridgeland Dumpster" location="Ridgeland Service Area Hero" />
                        <TrackedPhoneLink location="Ridgeland Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Ridgeland</h2>
                    <PriceSummary place="Ridgeland" />
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Choose Mid South for Ridgeland Dumpster Rental?</h2>
                            <p>We're a locally owned, Central Mississippi company — not a national broker. When you call us, you talk directly to the owner. Our roll off dumpsters are delivered by our own trucks and drivers, ensuring reliability and accountability that national chains can't match.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Ridgeland and all of Madison County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Ridgeland Project</h2>
                            <p>Whether you're renovating a home along Highland Colony Parkway, <Link href="/services/estate-cleanout-dumpster-rental" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>clearing out an estate</Link>, or running a roofing job off the Old Canton Road corridor near I-55, we have the right roll off dumpster for your project.</p>
                            <p><strong>Common uses in Ridgeland, MS:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Construction and demolition debris</li>
                                <li>Estate and foreclosure cleanouts</li>
                                <li>Yard waste and storm cleanup</li>
                                <li>Commercial contractor projects</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Roll Off Dumpster Rental Serving All of Madison County, MS</h2>
                    <p>
                        Ridgeland is our home base for Madison County operations. We provide fast roll off dumpster rental service to every corner of Madison County — from the I-55 corridor in Ridgeland to the neighborhoods of Madison, Canton, Gluckstadt, and Flora. No matter where your project is, we deliver on time.
                    </p>
                    <h2 style={{ marginTop: '2.5rem' }}>Neighborhoods &amp; Communities We Serve in Ridgeland, MS</h2>
                    <p>
                        Ridgeland is one of Madison County&apos;s most upscale and active communities — and we&apos;re in its neighborhoods every week. We deliver roll off dumpsters to every subdivision, corridor, and community in Ridgeland, including:
                    </p>
                    <ul className={styles.projectsList} style={{ marginBottom: '1.5rem' }}>
                        <li><strong>Bridgewater</strong> — Upscale gated residential community; HOA-managed, estate cleanouts &amp; high-end renovation projects (ZIP 39157)</li>
                        <li><strong>Ashbrooke, Northbay &amp; Cypress Lake</strong> — Established residential subdivisions throughout Ridgeland&apos;s interior</li>
                        <li><strong>Greenbrook &amp; Dinsmor</strong> — Quiet family neighborhoods in the central Ridgeland corridor</li>
                        <li><strong>The Township at Colony Park</strong> — Master-planned mixed-use community off Highland Colony Parkway; retail buildouts &amp; residential remodels</li>
                        <li><strong>Old Town Ridgeland / Highway 51 corridor</strong> — Historic residential &amp; commercial zone along Hwy 51 North</li>
                        <li><strong>Highland Colony Parkway corridor</strong> — Premier commercial, office &amp; retail spine; Renaissance at Colony Park, high-end buildouts</li>
                        <li><strong>Lake Harbour Drive corridor</strong> — Major east-west retail &amp; residential connector; active commercial contractor projects</li>
                        <li><strong>County Line Road corridor</strong> — Northpark Mall area; high-traffic commercial zone with frequent contractor cleanouts</li>
                        <li><strong>I-55 frontage &amp; business parks</strong> — Commercial &amp; light industrial corridor running through Ridgeland (ZIP 39157)</li>
                        <li><strong>Ross Barnett Reservoir (The Rez) access area</strong> — Spillway Road residential &amp; lakefront properties; storm debris &amp; outdoor cleanouts</li>
                        <li><strong>Natchez Trace Parkway corridor</strong> — Rural-residential properties along the historic parkway; estate workouts &amp; land clearing</li>
                        <li><strong>Old Canton Road corridor</strong> — Residential neighborhoods south toward Jackson; frequent roofing &amp; remodel projects</li>
                    </ul>
                    <p>
                        From residential cleanouts to large commercial construction on the Ridgeland Parkway corridors, Mid South Dumpster Rentals is Madison County&apos;s trusted local roll off dumpster provider.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Ridgeland is part of <Link href="/service-areas/madison-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Madison County</Link> — view all Madison County cities we serve.
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)', maxHeight: '480px' }}>
                        <Image
                            src="/images/gallery/20-yard-dumpster-rental-ridgeland-project.jpg"
                            alt="Mid South Dumpster Rentals 20-yard roll-off container at a project in Ridgeland, Mississippi (Madison County) — serving Highland Colony Parkway, Bridgewater &amp; surrounding communities"
                            width={760}
                            height={480}
                            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        Mid South Dumpster Rentals on a project in Ridgeland, MS (Madison County) — same-day roll-off service near Highland Colony Parkway, Bridgewater &amp; The Rez.
                    </p>
                </div>
            </section>

            <FaqSection faqs={faqs} title="Ridgeland Dumpster Rental FAQ" background />

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Ridgeland?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Ridgeland Service Area CTA" />
                </div>
            </section>
        </>
    )
}
