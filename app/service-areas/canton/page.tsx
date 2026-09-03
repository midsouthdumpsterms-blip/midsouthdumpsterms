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
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/canton' },
    title: 'Dumpster Rental Canton MS | Same-Day',
    description:
        'Roll-off dumpster rental in Canton, MS from $349. 10, 15 and 20-yard containers, same-day delivery to downtown Canton and the historic district.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Canton MS | Madison County',
        description: 'Locally owned roll off dumpster rental serving Canton & all of Madison County. Same-day delivery, flat-rate pricing, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/canton',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

export default function CantonPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Canton, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Canton',
        undefined,
        ['39046']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Canton', url: 'https://midsouthdumpsterms.com/service-areas/canton' },
    ])

    const faqs = [
        {
            question: "How much does it cost to rent a roll off dumpster in Canton, MS?",
            answer: "Our roll off dumpster rentals in Canton start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size) with no hidden fees."
        },
        {
            question: "Do I need a permit to rent a dumpster in Canton?",
            answer: "You only need a permit if placing the dumpster on a public street or right-of-way in Canton. If placed in your private driveway, no permit is required. Contact Canton Public Works for street placement regulations."
        },
        {
            question: 'Do you deliver to Canton and the surrounding Madison County area?',
            answer: 'Yes. Canton is the Madison County seat at ZIP 39046 and we run there regularly, including the properties out toward the Nissan plant and its supplier base. The flat rate is the same as anywhere else we serve \u2014 there is no travel surcharge for northern Madison County. What we cannot accept is listed on the FAQ page.'
        },
        {
            question: "Do you serve all of Madison County, MS?",
            answer: "Yes! We provide roll off dumpster rental throughout all of Madison County including Canton, Madison, Ridgeland, Gluckstadt, Flora, and surrounding communities. Same-day delivery is available when you call before noon."
        },
        {
            question: "How quickly can you deliver a roll off dumpster to Canton, MS?",
            answer: "We offer same-day and next-day roll off dumpster delivery in Canton and Madison County. Call us before noon at 601-316-7891 and we can typically deliver the same day, 7 days a week."
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
                    <h1>Roll Off Dumpster Rental in Canton, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Canton and all of Madison County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Canton Dumpster" location="Canton Service Area Hero" />
                        <TrackedPhoneLink location="Canton Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Canton</h2>
                    <PriceSummary place="Canton" />
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Choose Mid South for Canton Dumpster Rental?</h2>
                            <p>We're a locally owned Central Mississippi company. We own our trucks and handle every delivery ourselves — no third-party brokers or intermediaries. Canton customers get fast, dependable roll off dumpster service backed by our 5-star Google reputation.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Canton and all of Madison County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Canton Project</h2>
                            <p>Whether you're renovating a home near the <Link href="/blog/dumpster-rental-near-me-jackson-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Canton Square</Link>, clearing an estate in Harvey Crossing, managing a construction project in Hampton Hills, or working a roofing job near the Madison County Courthouse, we have the right roll off dumpster for your needs.</p>
                            <p><strong>Common roll off dumpster uses in Canton, MS:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Construction and demolition debris</li>
                                <li>Estate and foreclosure cleanouts</li>
                                <li>Yard waste and storm cleanup</li>
                                <li>Commercial contractor projects</li>
                            </ul>

                            <div style={{ marginTop: '2rem' }}>
                                <Image
                                    src="/images/gallery/same-day-dumpster-rental-canton.jpg"
                                    alt="Roll off dumpster rental delivery on a driveway in Canton, MS"
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
                    <h2>Roll Off Dumpster Rental Serving All of Madison County, MS</h2>
                    <p>
                        Canton is the Madison County seat, and it's a key part of our service territory. We provide fast roll off dumpster rental throughout all of Madison County — from Canton and Gluckstadt to Madison, Flora, and Ridgeland. Whether your project is a quick residential cleanout or a multi-week commercial job, our locally owned trucks are ready.
                    </p>
                    <h2>Neighborhoods We Serve in Canton, MS</h2>
                    <p>
                        We proudly deliver roll off dumpsters to every neighborhood in Canton. Whether you're in <strong>Harvey Crossing</strong>, <strong>Deerfield</strong>, <strong>Panther Creek</strong>, <strong>Hampton Hills</strong>, <strong>The Links of Madison</strong>, <strong>Bainbridge</strong>, <strong>Cains Landing</strong>, or anywhere near the historic <strong>Canton Square</strong>, we deliver fast and reliable roll off dumpster service.
                    </p>
                    <p>
                        Canton's rich history as a Civil War-era city and its growing community make it a unique and vibrant place in Central Mississippi. We're proud to serve Canton with professional roll off dumpster rentals. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other customers in Madison County.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Planning a rental?</strong> Read our guide on <Link href="/service-areas/madison">dumpster rentals in Madison County</Link> for more local tips and advice on sizing.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Canton is part of <Link href="/service-areas/madison-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Madison County</Link> — view all Madison County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Dumpster Delivery in Canton — Local Notes</h2>
                    <p>Canton is the Madison County seat, and its older housing stock changes what size container makes sense. Renovations in and around the historic district turn up plaster and lath, old tile, and dimensional lumber — all of it considerably heavier than the drywall and modern framing that comes out of a newer house. A 15-yard of plaster can hit its weight allowance while it still looks half empty, so we usually recommend sizing by weight rather than by volume on these jobs.</p>
                    <p>The older streets near the square are narrower than the newer parts of the county, and some have limited room to set a container without encroaching on the roadway. If the only workable spot is the street rather than a driveway, you will need to clear that with the city first — placement on a public right-of-way is the one situation that normally requires a permit anywhere in Central Mississippi.</p>
                    <p>Canton also generates a steady stream of commercial and industrial work along the interstate corridor east of town. Those jobs are typically 20-yard containers on a swap schedule rather than single drops.</p>
                    <p><strong>What we most often haul out of Canton:</strong></p>
                    <ul className={styles.projectsList}>
                        <li>Historic-home renovation debris (plaster, lath, old tile)</li>
                        <li>Downtown commercial and retail tear-outs</li>
                        <li>Industrial and warehouse cleanouts</li>
                        <li>Estate and probate property clearing</li>
                    </ul>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>Canton Is Two Different Jobs</h2>
                    <p>
                        Canton is the Madison County seat and the oldest town we serve regularly, and the
                        work here splits cleanly in two. Around the Canton Square and the historic
                        district the housing stock is old &mdash; deep-set homes, narrow drives, mature
                        trees over them. Out along the interstate corridor east of town it is industrial:
                        the Nissan plant and the supplier base around it, where the containers are bigger
                        and the schedules are tighter.
                    </p>
                    <p>
                        Those want different things from us. A historic-district cleanout usually takes a
                        10 or 15-yard, because a 20 often will not place under the tree canopy or fit the
                        drive. A plant-corridor job is almost always a 20-yard, frequently more than one,
                        and the question is turnaround rather than size.
                    </p>

                    <h2>Getting a Container to Canton</h2>
                    <p>
                        Canton sits north of the metro at ZIP 39046, up I-55 from our yard in West
                        Jackson. It is a longer run than a delivery inside the Jackson city limits, so
                        calling early matters more here than it does closer in &mdash; before noon puts you
                        comfortably in same-day range, and there is no distance surcharge for the drive.
                    </p>
                    <p>
                        For the commercial and industrial work east of town, tell us on the call whether
                        the site has a height bar at the entrance, a gate code, or restricted hours. Those
                        three things account for nearly every commercial delivery that has to be
                        rescheduled &mdash; see{' '}
                        <Link href="/services/commercial-dumpster-rental">commercial dumpster rental</Link>.
                    </p>

                    <h2>Permits in Canton</h2>
                    <p>
                        On your own driveway, yard or lot, no permit applies. If the container has to sit
                        on a public street or right-of-way &mdash; which comes up more often around the
                        Square than anywhere else in Canton, because several of those properties have no
                        usable private ground &mdash; contact the City of Canton to confirm the current
                        process and lead time before you book. It is not a same-day path.
                    </p>
                    <p>
                        Not sure what size? <Link href="/sizes">Compare all three containers</Link>, or see{' '}
                        <Link href="/services/estate-cleanout-dumpster-rental">estate cleanout dumpster rental</Link>{' '}
                        for the older properties around the historic district.
                    </p>
                </div>
            </section>

            <FaqSection faqs={faqs} title="Frequently Asked Questions: Canton Dumpster Rentals" background />
            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Canton?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Canton Service Area CTA" />
                </div>
            </section>
        </>
    )
}
