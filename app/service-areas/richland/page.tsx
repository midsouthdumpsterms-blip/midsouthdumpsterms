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
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/richland' },
    title: 'Dumpster Rental Richland MS | Same-Day',
    description:
        'Roll-off dumpster rental in Richland, MS from $349. 10, 15 and 20-yard containers, same-day delivery to Richland and the Highway 49 corridor.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Richland MS | Rankin County',
        description: 'Locally owned roll off dumpster rental serving Richland & all of Rankin County. Same-day delivery, flat-rate pricing, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/richland',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

export default function RichlandPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Richland, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Richland',
        undefined,
        ['39218']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Richland', url: 'https://midsouthdumpsterms.com/service-areas/richland' },
    ])

    const faqs = [
        {
            question: "How much does it cost to rent a roll off dumpster in Richland, MS?",
            answer: "Our roll off dumpster rentals in Richland start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size) with no hidden fees."
        },
        {
            question: "Do I need a permit to rent a dumpster in Richland?",
            answer: "You only need a permit if placing the dumpster on a public street or right-of-way in Richland. If placed in your private driveway, no permit is required. Contact Richland City Hall for specific street placement regulations."
        },
        {
            question: 'Which Richland neighborhoods do you serve?',
            answer: 'We deliver across Richland in ZIP 39218, including Richland Hills and Richland East, Sylvan Hills and Monterey Woods, Southwind and West Wind, and Bradford Place. Richland sits where Highway 49 meets the I-20 corridor in Rankin County, which makes it one of the quicker runs from our yard and an easy same-day booking. See our FAQ page for what we cannot accept.'
        },
        {
            question: "Do you serve all of Rankin County, MS?",
            answer: "Yes! We provide roll off dumpster rental throughout all of Rankin County including Richland, Brandon, Pearl, Flowood, Florence, Pelahatchie, and surrounding communities. Same-day delivery is available when you call before noon."
        },
        {
            question: "How quickly can you deliver a roll off dumpster to Richland, MS?",
            answer: "We offer same-day and next-day roll off dumpster delivery in Richland and Rankin County. Call us before noon at 601-316-7891 and we can typically deliver the same day, 7 days a week."
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
                    <h1>Roll Off Dumpster Rental in Richland, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Richland and all of Rankin County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Richland Dumpster" location="Richland Service Area Hero" />
                        <TrackedPhoneLink location="Richland Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Richland</h2>
                    <PriceSummary place="Richland" />
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Choose Mid South for Richland Dumpster Rental?</h2>
                            <p>We're a locally owned Central Mississippi company. We own our trucks and handle every delivery ourselves — no third-party brokers. Richland residents and contractors get fast, reliable roll off dumpster service backed by our 5-star Google reputation.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Richland and all of Rankin County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Richland Project</h2>
                            <p>Whether you're renovating a home in one of Richland's established neighborhoods, clearing an office building near the industrial corridor on US-49, handling <Link href="/blog/dumpster-rental-guide-for-home-renovations" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>a home remodel</Link>, or managing construction debris along Greenfield Road, we have the right roll off dumpster for your needs.</p>
                            <p><strong>Common roll off dumpster uses in Richland, MS:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Construction and demolition debris</li>
                                <li>Estate and foreclosure cleanouts</li>
                                <li>Commercial and industrial cleanouts</li>
                                <li>Yard waste and storm cleanup</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Roll Off Dumpster Rental Serving All of Rankin County, MS</h2>
                    <p>
                        Richland sits at the heart of the Jackson metro's industrial and residential corridor, right on the Rankin County border. We provide fast roll off dumpster rental throughout all of Rankin County — from Richland and Pearl to Brandon, Flowood, Florence, and Pelahatchie. Whether your project is a quick residential cleanout or a multi-week commercial job, our locally owned trucks are ready.
                    </p>
                    <h2 style={{ marginTop: '2.5rem' }}>Neighborhoods &amp; Areas We Serve in Richland, MS</h2>
                    <p>
                        Richland is a growing city at the crossroads of Rankin County&apos;s residential and industrial corridors &mdash; and we deliver to every part of it. Our roll off dumpsters reach every neighborhood and road in Richland, including:
                    </p>
                    <ul className={styles.projectsList} style={{ marginBottom: '1.5rem' }}>
                        <li><strong>Richland Hills &amp; Richland East</strong> &mdash; Established residential neighborhoods; active roofing, remodeling &amp; cleanout work (ZIP 39218)</li>
                        <li><strong>Sylvan Hills &amp; Monterey Woods</strong> &mdash; Family subdivisions; frequent estate cleanout &amp; renovation deliveries</li>
                        <li><strong>Southwind &amp; West Wind</strong> &mdash; Residential communities in the western Richland corridor</li>
                        <li><strong>Bradford Place of Richland</strong> &mdash; Established subdivision off the US-49 corridor</li>
                        <li><strong>Bluebird &amp; Bullock Forrest</strong> &mdash; Residential areas in Richland&apos;s growing zones</li>
                        <li><strong>Richland Industrial Park &amp; US-49 corridor</strong> &mdash; Major logistics &amp; distribution hub; commercial container &amp; demo cleanouts (ZIP 39218)</li>
                        <li><strong>Wise Road corridor</strong> &mdash; Residential &amp; commercial access road through central Richland</li>
                        <li><strong>Greenfield Road area</strong> &mdash; Commercial &amp; residential zone near the Rankin County border</li>
                        <li><strong>Hinds Community College (Rankin Branch) area</strong> &mdash; Educational corridor; contractor &amp; commercial projects</li>
                        <li><strong>I-55 &amp; I-20 interchange corridor</strong> &mdash; Major transportation hub; commercial &amp; industrial contractor work (ZIP 39218)</li>
                        <li><strong>Jackson-Evers Airport access corridor</strong> &mdash; Commercial &amp; light industrial zone; frequent job site deliveries</li>
                    </ul>
                    <p>
                        Richland&apos;s mix of residential neighborhoods and commercial areas makes it an active hub for home improvement, commercial work, and construction. We&apos;re proud to serve this community with professional roll off dumpster rentals. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Rankin County customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Planning a rental?</strong> Read our guide on <Link href="/blog/how-to-choose-dumpster-size">how to choose the right dumpster size</Link> for your project.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Richland is part of <Link href="/service-areas/rankin-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Rankin County</Link> — view all Rankin County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Dumpster Delivery in Richland — Local Notes</h2>
                    <p>Richland sits where Highway 49 meets the I-20 corridor, and it has more light industrial and commercial activity per square mile than most of the towns we serve. Shop cleanouts, warehouse clear-downs, tenant turnovers in commercial space and contractor job-site debris make up a large share of the work here alongside ordinary residential jobs.</p>
                    <p>Commercial placement in Richland is usually easy — there is room to work on most of these lots — but it does mean thinking about truck traffic. If the container is going somewhere a delivery vehicle or forklift also needs to move through, tell us and we will place it out of the path rather than in the most convenient spot for us.</p>
                    <p>Richland is one of the quickest runs from our yard, which makes it a reliable same-day area. It is also close enough that a second container on the same day is usually workable if a job turns out bigger than expected.</p>
                    <p><strong>What we most often haul out of Richland:</strong></p>
                    <ul className={styles.projectsList}>
                        <li>Shop, warehouse and light industrial cleanouts</li>
                        <li>Commercial tenant turnovers</li>
                        <li>Contractor job-site debris</li>
                        <li>Residential renovations and cleanouts</li>
                    </ul>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>Richland Runs on US-49</h2>
                    <p>
                        Richland sits where US-49 meets the I-20 corridor, which makes it one of the
                        quickest runs we make and one of the most industrial places we serve. The Richland
                        Industrial Park and the logistics and distribution operations along US-49 generate
                        a different kind of work from the residential streets a few blocks away.
                    </p>
                    <p>
                        On the commercial side that means larger containers, faster turnarounds and
                        swap-outs booked in advance rather than called in. On the residential side &mdash;
                        Richland Hills, Richland East, Sylvan Hills, Monterey Woods, Southwind, West Wind
                        and Bradford Place &mdash; it is conventional driveway placement with roofing and
                        cleanout work leading the way.
                    </p>

                    <h2>Placement Notes for Richland</h2>
                    <ul className={styles.projectsList}>
                        <li>
                            <strong>The US-49 and Industrial Park corridor.</strong> Plenty of room, but
                            check for height bars at yard entrances and confirm whether the site needs a
                            driver check-in. Loading-dock and service-yard placements can have a tight
                            turning radius.
                        </li>
                        <li>
                            <strong>Wise Road and the central Richland corridor.</strong> Mixed
                            residential and commercial frontage; straightforward drops, but the road
                            carries traffic, so we would rather place on private ground than at the curb.
                        </li>
                        <li>
                            <strong>Greenfield Road and the Rankin County border.</strong> Larger lots and
                            easier approaches. Ground can be soft after heavy rain &mdash; keep the
                            container on the drive.
                        </li>
                        <li>
                            <strong>The established residential streets.</strong> Standard two-car
                            driveways take a 10 or 15-yard without blocking the garage. Clear the drive
                            before we arrive.
                        </li>
                    </ul>

                    <h2>Permits in Richland</h2>
                    <p>
                        Private property needs no permit, and that covers nearly every Richland delivery.
                        For a container on a public street or right-of-way, contact the City of Richland
                        first to confirm what is required and how long it takes &mdash; start it before the
                        project rather than during it.
                    </p>
                    <p>
                        Job-site sizing and swap-outs are covered on{' '}
                        <Link href="/services/construction-dumpster-rental">construction dumpster rental</Link>;
                        for the industrial-corridor work see{' '}
                        <Link href="/services/commercial-dumpster-rental">commercial dumpster rental</Link>,
                        or <Link href="/sizes">compare container sizes</Link>.
                    </p>
                </div>
            </section>

            <FaqSection faqs={faqs} title="Frequently Asked Questions: Richland Dumpster Rentals" background />
            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)', maxHeight: '480px' }}>
                        <Image
                            src="/images/gallery/same-day-dumpster-rental-richland.jpg"
                            alt="Mid South Dumpster Rentals same-day roll-off container delivery in Richland, Mississippi (Rankin County) — serving US-49, Richland Industrial Park &amp; surrounding neighborhoods"
                            width={760}
                            height={480}
                            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        Mid South Dumpster Rentals in Richland, MS (Rankin County) — same-day roll-off delivery to US-49, Richland Industrial Park &amp; all Richland neighborhoods.
                    </p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Richland?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Richland Service Area CTA" />
                </div>
            </section>
        </>
    )
}
