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
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/terry' },
    title: 'Dumpster Rental Terry MS | Same-Day',
    description:
        'Roll-off dumpster rental in Terry, MS from $349. 10, 15 and 20-yard containers, same-day delivery to Terry and rural south Hinds County.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Terry MS | Hinds County',
        description: 'Locally owned roll off dumpster rental serving Terry & all of Hinds County. Same-day delivery, flat-rate pricing, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/terry',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

export default function TerryPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Terry, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Terry',
        undefined,
        ['39170']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Terry', url: 'https://midsouthdumpsterms.com/service-areas/terry' },
    ])

    const faqs = [
        {
            question: "How much does it cost to rent a roll off dumpster in Terry, MS?",
            answer: "Our roll off dumpster rentals in Terry start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size) with no hidden fees."
        },
        {
            question: "Do I need a permit to rent a dumpster in Terry?",
            answer: "You only need a permit if placing the dumpster on a public street or right-of-way in Terry. If placed in your private driveway or on private property, no permit is required. Contact the Town of Terry for specific street placement regulations."
        },
        {
            question: 'Do you deliver to Terry and southern Hinds County?',
            answer: 'Yes. Terry is at ZIP 39170 in southern Hinds County along the Highway 27 and I-55 corridor, and it is an easy run from our West Jackson yard. Rural properties with long drives are routine; the flat rate applies with no distance surcharge. What we cannot accept is listed on the FAQ page.'
        },
        {
            question: "Do you serve all of Hinds County, MS?",
            answer: "Yes! We provide roll off dumpster rental throughout all of Hinds County including Terry, Jackson, Clinton, Byram, Raymond, and surrounding communities. Same-day delivery is available when you call before noon."
        },
        {
            question: "How quickly can you deliver a roll off dumpster to Terry, MS?",
            answer: "We offer same-day and next-day roll off dumpster delivery in Terry and Hinds County. Call us before noon at 601-316-7891 and we can typically deliver the same day, 7 days a week."
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
                    <h1>Roll Off Dumpster Rental in Terry, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Terry and all of Hinds County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Terry Dumpster" location="Terry Service Area Hero" />
                        <TrackedPhoneLink location="Terry Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Terry</h2>
                    <PriceSummary place="Terry" />
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Choose Mid South for Terry Dumpster Rental?</h2>
                            <p>We're a locally owned Central Mississippi company. We own our trucks and handle every delivery ourselves — no third-party brokers. Terry residents and contractors get fast, reliable roll off dumpster service backed by our 5-star Google reputation.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Terry and all of Hinds County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Terry Project</h2>
                            <p>Whether you're renovating a farmhouse on a rural Terry property, clearing out an estate along Hwy 49, handling <Link href="/blog/dumpster-rental-guide-for-home-renovations" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>a home renovation</Link> in Terry, or managing roofing work for a local contractor, we have the right roll off dumpster for your needs.</p>
                            <p><strong>Common roll off dumpster uses in Terry, MS:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Construction and demolition debris</li>
                                <li>Estate and property cleanouts</li>
                                <li>Yard waste and storm cleanup</li>
                                <li>Barn and outbuilding cleanouts</li>
                            </ul>

                            <div style={{ marginTop: '2rem' }}>
                                <Image
                                    src="/images/gallery/same-day-dumpster-rental-terry.jpg"
                                    alt="Roll off dumpster rental delivery in Terry, MS"
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
                    <h2>Roll Off Dumpster Rental Serving All of Hinds County, MS</h2>
                    <p>
                        Terry is a small, tight-knit community in southern Hinds County, and it's an important part of our service area. We provide fast roll off dumpster rental throughout all of Hinds County — from Terry and Byram to Jackson, Clinton, Bolton, and Raymond. Whether your project is a quick residential cleanout or a multi-week construction job, our locally owned trucks are ready.
                    </p>
                    <h2>Neighborhoods & Areas We Serve in Terry, MS</h2>
                    <p>
                        We proudly deliver roll off dumpsters throughout Terry and surrounding communities. Whether you're in the <strong>Town of Terry</strong>, along <strong>Highway 49 South</strong>, in <strong>Terry Pines</strong>, near <strong>Old Highway 49</strong>, or on a rural property south of Jackson approaching <strong>Crystal Springs</strong>, we deliver fast and reliable roll off dumpster service to your location.
                    </p>
                    <p>
                        Terry's quiet, rural character makes it a great place for home improvement projects, estate work, and agricultural property cleanouts. We're proud to serve this community with professional roll off dumpster rentals. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Hinds County customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Planning a rental?</strong> Read our guide on <Link href="/blog/how-to-choose-dumpster-size">how to choose the right dumpster size</Link> for your project.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Terry is located in <Link href="/service-areas/hinds-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Hinds County</Link> — see all Hinds County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Dumpster Delivery in Terry — Local Notes</h2>
                    <p>Terry runs along the I-55 corridor in south Hinds County, and the work here splits fairly evenly between in-town residential jobs and rural property cleanups further out. Outbuilding demolition, old mobile home cleanouts, and clearing years of accumulation off family land come up far more often here than commercial work does.</p>
                    <p>Because so many Terry properties sit on acreage, we can usually place a container almost anywhere you want it — which is an advantage, but it does mean thinking about where the truck can turn around. We need a straight run to set a container down and a clear path back out. Soft ground and narrow gravel drives are the two things that most often force us to reposition, so mention them when you book.</p>
                    <p>The I-55 run from our yard is quick, which makes Terry one of the easier same-day calls in the southern half of the county. Book before noon and there is a good chance the container is on your property that afternoon.</p>
                    <p><strong>What we most often haul out of Terry:</strong></p>
                    <ul className={styles.projectsList}>
                        <li>Outbuilding and shed demolition</li>
                        <li>Rural property and land cleanouts</li>
                        <li>Yard waste, brush and storm debris</li>
                        <li>Residential renovation debris</li>
                    </ul>
                </div>
            </section>

            <FaqSection faqs={faqs} title="Frequently Asked Questions: Terry Dumpster Rentals" background />
            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Terry?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Terry Service Area CTA" />
                </div>
            </section>
        </>
    )
}
