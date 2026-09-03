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
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/madison' },
    title: 'Dumpster Rental Madison MS | Same-Day',
    description:
        'Roll-off dumpster rental in Madison, MS from $349. 10, 15 and 20-yard containers, same-day delivery to Reunion, Lake Caroline and Annandale.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Madison MS | Madison County',
        description: 'Local roll off dumpster rental serving Madison, MS & all of Madison County. Same-day delivery, flat-rate pricing starting at $349.',
        url: 'https://midsouthdumpsterms.com/service-areas/madison',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

export default function MadisonPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Madison, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Madison',
        undefined,
        ['39110']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Madison', url: 'https://midsouthdumpsterms.com/service-areas/madison' },
    ])

    const faqs = [
        {
            question: "Do I need a permit to rent a dumpster in Madison, MS?",
            answer: "If you place the dumpster on your private property, such as your driveway in Reunion or Annandale, you typically do not need a permit. However, if the dumpster must be placed on a public street or right-of-way, a permit from the City of Madison may be required. We can help guide you through this process."
        },
        {
            question: "How quickly can you deliver a roll off dumpster to Madison?",
            answer: "We offer same-day and next-day roll off dumpster delivery throughout Madison and Madison County. Call us before noon at 601-316-7891 to secure a same-day drop-off for your project."
        },
        {
            question: "What roll off dumpster sizes are available in Madison, MS?",
            answer: "We provide 10-yard, 15-yard, and 20-yard roll off dumpsters in Madison. Our 20-yard dumpsters are our most popular size for home renovations and estate cleanouts in Madison County."
        },
        {
            question: "How much does roll off dumpster rental cost in Madison, MS?",
            answer: "Our roll off dumpster rentals in Madison start at $349 for a 10-yard, $399 for a 15-yard, and $449 for a 20-yard. All prices are flat-rate and include delivery, pickup, and disposal with no hidden fees."
        },
        {
            question: "Do you serve all of Madison County, MS?",
            answer: "Yes! We provide roll off dumpster rental throughout all of Madison County including Madison, Ridgeland, Canton, Gluckstadt, Flora, Pocahontas, and surrounding communities. Same-day delivery is available when you call before noon."
        }
    ]

    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Madison, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Madison and all of Madison County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Madison Dumpster" location="Madison Service Area Hero" />
                        <TrackedPhoneLink location="Madison Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Madison</h2>
                    <PriceSummary place="Madison" />
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Choose Mid South for Madison Dumpster Rental?</h2>
                            <p>We're a locally owned Central Mississippi company. When you call us, you reach the owner directly — not a national call center. Our roll off dumpsters serve Madison's finest communities with the same care and professionalism that residents there expect.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Madison and all of Madison County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Madison Project</h2>
                            <p>Whether you're renovating a home in Reunion, clearing out an estate in Lake Caroline, managing a construction project in Annandale or Providence, we have the right roll off dumpster for your Madison project.</p>
                            <p><strong>Common roll off dumpster uses in Madison, MS:</strong></p>
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
                        Madison is the heart of Madison County, and we serve every corner of it. From roll off dumpster rental in Madison and Ridgeland to Canton, Gluckstadt, Flora, and Pocahontas — our locally owned trucks cover all of Madison County, MS. We&apos;re not a broker: we own our trucks and control every delivery.
                    </p>
                    <h2 style={{ marginTop: '2.5rem' }}>Neighborhoods &amp; Communities We Serve in Madison, MS</h2>
                    <p>
                        Madison is one of the fastest-growing cities in Mississippi — and one of our most active delivery areas. We deliver roll off dumpsters across every subdivision, corridor, and community in Madison, including:
                    </p>
                    <ul className={styles.projectsList} style={{ marginBottom: '1.5rem' }}>
                        <li><strong>Reunion</strong> — Master-planned community off Hwy 463 with golf course, 400-acre lake &amp; equestrian facilities; large estate homes with frequent renovation &amp; cleanout needs (ZIP 39110)</li>
                        <li><strong>Lake Caroline</strong> — Waterfront residential community on Lake Caroline; older homes &amp; active remodeling (ZIP 39110)</li>
                        <li><strong>Annandale</strong> — Upscale golf community off Old Canton Road; estate cleanouts &amp; high-end remodeling projects</li>
                        <li><strong>Lost Rabbit</strong> — Urban neighborhood along the Natchez Trace corridor; mixed residential &amp; townhome development</li>
                        <li><strong>Colony Park / The Township at Colony Park</strong> — Mixed-use corridor off Highland Colony Parkway; retail buildouts &amp; commercial contractor work</li>
                        <li><strong>Strawberry Patch area</strong> — Historic residential area near Old Canton Road &amp; St. Augustine Drive; Strawberry Patch Park &amp; historic 1860s landmarks nearby</li>
                        <li><strong>Georgetown &amp; Germantown</strong> — Established residential neighborhoods along Hwy 51 North corridor</li>
                        <li><strong>Woodland Estates &amp; Providence</strong> — Suburban residential development in the I-55 North / Hwy 463 corridor</li>
                        <li><strong>Highland Colony Parkway corridor</strong> — Professional offices, medical facilities &amp; commercial development between Madison &amp; Ridgeland</li>
                        <li><strong>Highway 51 &amp; Main Street Madison</strong> — Historic downtown core; commercial cleanouts &amp; older residential stock</li>
                        <li><strong>Old Canton Road corridor</strong> — Residential and rural properties running south toward Ridgeland (ZIP 39110)</li>
                    </ul>
                    <p>
                        From residential cleanouts to large commercial builds in Madison&apos;s growing business corridors, Mid South Dumpster Rentals is Madison County&apos;s trusted local roll off dumpster provider. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Madison customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Want to learn more?</strong> Check out our complete guide on <Link href="/service-areas/madison">Dumpster Rental in Madison, MS</Link>.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Madison is the heart of <Link href="/service-areas/madison-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Madison County</Link> — view all Madison County cities we serve.
                    </p>
                </div>
            </section>

            <FaqSection faqs={faqs} title="Frequently Asked Questions: Madison Dumpster Rentals" background />
            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
                        <Image
                            src="/images/gallery/roll-off-dumpster-madison-ms-clean.jpg"
                            alt="Mid South Dumpster Rentals clean 20-yard roll-off container delivered to a residential driveway in Madison, Mississippi (Madison County) — serving Reunion, Lake Caroline, Annandale &amp; Old Canton Road corridor"
                            width={760}
                            height={480}
                            style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        Mid South Dumpster Rentals delivery in Madison, MS (Madison County) — same-day roll-off service to Reunion, Lake Caroline, Annandale &amp; surrounding communities.
                    </p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Madison?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Madison Service Area CTA" />
                </div>
            </section>
        </>
    )
}
