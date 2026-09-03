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
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/flora' },
    title: 'Dumpster Rental Flora MS | Same-Day',
    description:
        'Roll-off dumpster rental in Flora, MS from $349. 10, 15 and 20-yard containers, same-day delivery to Flora and the surrounding Madison County acreage.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Flora MS | Madison County',
        description: 'Locally owned roll off dumpster rental serving Flora & all of Madison County. Same-day delivery, flat-rate pricing, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/flora',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

export default function FloraPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Flora, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Flora',
        undefined,
        ['39071']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Flora', url: 'https://midsouthdumpsterms.com/service-areas/flora' },
    ])

    const faqs = [
        {
            question: "How much does it cost to rent a roll off dumpster in Flora, MS?",
            answer: "Our roll off dumpster rentals in Flora start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size) with no hidden fees."
        },
        {
            question: "Do I need a permit to rent a dumpster in Flora?",
            answer: "You only need a permit if placing the dumpster on a public street or right-of-way in Flora. If placed in your private driveway or on private property, no permit is required. Contact the Town of Flora for specific street placement regulations."
        },
        {
            question: 'Do you deliver out to Flora?',
            answer: 'Yes. Flora is in western Madison County at ZIP 39071, and rural delivery is routine for us \u2014 long drives, open lots and gravel approaches are all fine. Because the lots out there tend to be larger, placement is usually easier in Flora than in town; the one thing to watch is soft ground after heavy rain. Prohibited items are listed on our FAQ page.'
        },
        {
            question: "Do you serve all of Madison County, MS?",
            answer: "Yes! We provide roll off dumpster rental throughout all of Madison County including Flora, Canton, Madison, Ridgeland, Gluckstadt, and surrounding communities. Same-day delivery is available when you call before noon."
        },
        {
            question: "How quickly can you deliver a roll off dumpster to Flora, MS?",
            answer: "We offer same-day and next-day roll off dumpster delivery in Flora and Madison County. Call us before noon at 601-316-7891 and we can typically deliver the same day, 7 days a week."
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
                    <h1>Roll Off Dumpster Rental in Flora, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Flora and all of Madison County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Flora Dumpster" location="Flora Service Area Hero" />
                        <TrackedPhoneLink location="Flora Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Flora</h2>
                    <PriceSummary place="Flora" />
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Choose Mid South for Flora Dumpster Rental?</h2>
                            <p>We're a locally owned Central Mississippi company. We own our trucks and handle every delivery ourselves — no third-party brokers. Flora residents and contractors get fast, reliable roll off dumpster service backed by our 5-star Google reputation.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Flora and all of Madison County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Flora Project</h2>
                            <p>Whether you're renovating a home in a Flora subdivision along Hwy 49, clearing a multi-acre estate, managing <Link href="/blog/dumpster-rental-guide-for-home-renovations" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>a home renovation</Link> in Farmington Hills, or handling a roofing project between Flora and Canton, we have the right roll off dumpster for your needs.</p>
                            <p><strong>Common roll off dumpster uses in Flora, MS:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Construction and demolition debris</li>
                                <li>Estate and property cleanouts</li>
                                <li>Yard waste and storm cleanup</li>
                                <li>Commercial contractor projects</li>
                            </ul>

                            <div style={{ marginTop: '2rem' }}>
                                <Image
                                    src="/images/gallery/same-day-dumpster-rental-flora.jpg"
                                    alt="Roll off dumpster rental delivery in Flora, MS"
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
                        Flora is a small but growing community in western Madison County, and it's an important part of our service area. We provide fast roll off dumpster rental throughout all of Madison County — from Flora and Canton to Madison, Gluckstadt, and Ridgeland. Whether your project is a quick residential cleanout or a multi-week construction job, our locally owned trucks are ready.
                    </p>
                    <h2>Neighborhoods & Areas We Serve in Flora, MS</h2>
                    <p>
                        We proudly deliver roll off dumpsters throughout Flora and surrounding communities. Whether you're in the <strong>Town of Flora</strong>, along <strong>Highway 49</strong>, in <strong>Farmington Hills</strong>, near <strong>Plum Point Road</strong>, or on a rural property west of Canton, we deliver fast and reliable roll off dumpster service to your location.
                    </p>
                    <p>
                        Flora's rural character and growing mix of residential and agricultural properties makes it a unique corner of Madison County. We're proud to serve this community with professional roll off dumpster rentals. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Madison County customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Planning a rental?</strong> Read our guide on <Link href="/service-areas/madison">dumpster rentals in Madison County</Link> for more local tips and advice on sizing.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Flora is part of <Link href="/service-areas/madison-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Madison County</Link> — view all Madison County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Dumpster Delivery in Flora — Local Notes</h2>
                    <p>Flora sits in the rural north-west corner of Madison County, and most of what we haul out of it reflects that. Land clearing brush, barn and outbuilding tear-downs, fence lines, and acreage cleanouts make up far more of the work here than kitchen remodels do. Those loads are bulky rather than heavy, which usually means a 20-yard is the right call even when the debris does not look like much stacked in a pile.</p>
                    <p>Placement is the thing worth planning here. A lot of Flora properties are set well back from the road down a long gravel or dirt drive, and a loaded roll-off truck is heavy enough to rut soft ground badly after rain. If your drive is gravel, narrow, or crosses a culvert, tell us when you book and we will either set the container closer to the road or schedule around wet weather.</p>
                    <p>The run up Highway 49 from our yard in west Jackson takes a little longer than a delivery inside the metro, so same-day in Flora is realistic but tighter. Calling in the morning rather than at noon makes it far more likely we can get to you the same day.</p>
                    <p><strong>What we most often haul out of Flora:</strong></p>
                    <ul className={styles.projectsList}>
                        <li>Land clearing, brush and fence-line debris</li>
                        <li>Barn, shed and outbuilding demolition</li>
                        <li>Rural estate and acreage cleanouts</li>
                        <li>Storm debris after wind events</li>
                    </ul>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>Flora Is a Longer Run &mdash; Call Earlier</h2>
                    <p>
                        Flora sits in western Madison County at ZIP 39071, up Highway 49 from our yard in
                        West Jackson. It is a longer drive than a delivery inside the metro, so same-day is
                        realistic in Flora but tighter than it is closer in. Calling in the morning rather
                        than at lunchtime makes a real difference here. There is no distance surcharge for
                        the run.
                    </p>
                    <p>
                        Most of what we haul out of Flora comes off larger properties &mdash; multi-acre
                        lots, older farmhouses, outbuildings and land clearing, along with the residential
                        work in the town itself and around Farmington Hills. Because the lots are big,
                        placement is usually the easy part; access and ground condition are what matter.
                    </p>

                    <h2>Rural Delivery Notes</h2>
                    <ul className={styles.projectsList}>
                        <li>
                            <strong>Gravel and dirt approaches are routine.</strong> Tell us if yours holds
                            water &mdash; Madison County ground west of the highway can stay soft for days
                            after heavy rain.
                        </li>
                        <li>
                            <strong>Turning room matters more than driveway width.</strong> If a loaded
                            truck cannot turn at the house we need to know before we route it.
                        </li>
                        <li>
                            <strong>Estate and land-clearing work runs large.</strong> For a multi-acre
                            clearance or an old farmhouse, take the 20-yard and plan on 7 days rather than
                            trying to squeeze it into a 15 over a weekend.
                        </li>
                    </ul>
                    <p>
                        No permit is needed on your own land. For a public street or right-of-way, contact
                        the Town of Flora first. See{' '}
                        <Link href="/services/estate-cleanout-dumpster-rental">estate cleanout dumpster rental</Link>{' '}
                        for property clearances, or{' '}
                        <Link href="/sizes">compare container sizes</Link>.
                    </p>
                </div>
            </section>

            <FaqSection faqs={faqs} title="Frequently Asked Questions: Flora Dumpster Rentals" background />
            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Flora?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Flora Service Area CTA" />
                </div>
            </section>
        </>
    )
}
