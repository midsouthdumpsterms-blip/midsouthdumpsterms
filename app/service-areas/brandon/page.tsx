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
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/brandon' },
    title: 'Dumpster Rental Brandon MS | Same-Day',
    description:
        'Roll-off dumpster rental in Brandon, MS from $349. 10, 15 and 20-yard containers, same-day delivery to Crossgates, Castlewoods and the Reservoir.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Brandon MS | Rankin County',
        description: 'Locally owned roll off dumpster rental serving Brandon & all of Rankin County. Same-day delivery, flat-rate pricing, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/brandon',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

export default function BrandonPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Brandon, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Brandon',
        undefined,
        ['39042', '39047', '39043']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Brandon', url: 'https://midsouthdumpsterms.com/service-areas/brandon' },
    ])

    const faqs = [
        {
            question: "How much does it cost to rent a roll off dumpster in Brandon, MS?",
            answer: "Our roll off dumpster rentals in Brandon start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size) with no hidden fees."
        },
        {
            question: "Can you deliver a dumpster to my neighborhood in Crossgates or Castlewoods?",
            answer: "Yes! We regularly deliver roll off dumpsters to Crossgates, Castlewoods, Shiloh, and all other subdivisions throughout Brandon and Rankin County. Our trucks are designed to safely navigate residential streets without damaging driveways."
        },
        {
            question: 'Which Brandon subdivisions do you deliver to?',
            answer: 'All of them. We are in Crossgates, Castlewoods, Shiloh and Shiloh Crossing, Castle Woods and Bellegrove, and the Gardens of Manship most weeks, along with the Highway 471 and Highway 80 East corridors across ZIPs 39042, 39043 and 39047. If your subdivision is gated \u2014 Castlewoods in particular \u2014 give us the gate code when you book, because a locked gate with nobody on site is the single most common reason a Rankin County delivery has to be rescheduled. See our FAQ page for what we cannot accept.'
        },
        {
            question: "Do you serve all of Rankin County, MS?",
            answer: "Yes! We provide roll off dumpster rental throughout all of Rankin County including Brandon, Pearl, Flowood, Richland, Florence, Pelahatchie, and surrounding communities. Same-day delivery is available when you call before noon."
        },
        {
            question: "How quickly can you deliver a roll off dumpster to Brandon, MS?",
            answer: "We offer same-day and next-day roll off dumpster delivery in Brandon and Rankin County. Call us before noon at 601-316-7891 and we can typically deliver the same day, 7 days a week."
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
                    <h1>Roll Off Dumpster Rental in Brandon, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Brandon and all of Rankin County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Brandon Dumpster" location="Brandon Service Area Hero" />
                        <TrackedPhoneLink location="Brandon Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Brandon</h2>
                    <PriceSummary place="Brandon" />
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div>
                        <div>
                            <h2>Why Choose Mid South for Brandon Dumpster Rental?</h2>
                            <p>We're a locally owned Central Mississippi company. We own our trucks and do our own deliveries — no third-party brokers. Rankin County customers get fast, reliable roll off dumpster service backed by our 5-star reputation.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Brandon and all of Rankin County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Roll Off Dumpster Rental Serving All of Rankin County, MS</h2>
                    <p>
                        Brandon is the Rankin County seat, and it&apos;s a key part of our service territory. We provide fast roll off dumpster rental throughout all of Rankin County — from Brandon and Pearl to Flowood, Richland, Florence, and Pelahatchie. Whether your project is a quick residential cleanout or a multi-week commercial job, our locally owned trucks are ready.
                    </p>
                    <h2>Neighborhoods &amp; Communities We Serve in Brandon, MS</h2>
                    <p>
                        Brandon is one of the fastest-growing cities in Mississippi, and our trucks are in its neighborhoods every week. We deliver roll off dumpsters across every subdivision, road, and community in Brandon, including:
                    </p>
                    <ul className={styles.projectsList} style={{ marginBottom: '1.5rem' }}>
                        <li><strong>Crossgates</strong> — One of Brandon&apos;s largest and most established subdivisions; active roofing, remodeling &amp; cleanout work along Crossgates Boulevard (ZIP 39042)</li>
                        <li><strong>Castlewoods</strong> — Upscale gated community with golf course off Castlewoods Boulevard; estate cleanouts &amp; high-end renovation projects</li>
                        <li><strong>Shiloh &amp; Shiloh Crossing</strong> — Established residential area along Hwy 80 East; frequent home renovation &amp; yard debris projects</li>
                        <li><strong>Castle Woods / Bellegrove</strong> — Newer residential developments in northeast Brandon; active new construction &amp; remodeling corridor</li>
                        <li><strong>Gardens of Manship</strong> — Established subdivision off Hwy 471 / Manship Road corridor</li>
                        <li><strong>Hidden Hills &amp; Copperfield</strong> — Residential neighborhoods off Old Hwy 80 &amp; Brandon Road areas</li>
                        <li><strong>Waterwood &amp; Glen Arbor</strong> — Quiet residential communities in the west Brandon corridor</li>
                        <li><strong>Crossview Plantation</strong> — Established subdivision along the Hwy 80 East / Rankin County line corridor</li>
                        <li><strong>Winner&apos;s Circle &amp; Reservoir Point</strong> — Brandon communities near the Ross Barnett Reservoir spillway area</li>
                        <li><strong>Downtown Brandon / Rankin County Courthouse area</strong> — Historic downtown core; commercial cleanouts, contractor staging &amp; older residential stock (ZIP 39042)</li>
                        <li><strong>Highway 80 East corridor</strong> — Commercial strip east of Jackson; industrial &amp; contractor work heading toward Pelahatchie</li>
                        <li><strong>Highway 471 / Airport Road corridor</strong> — Growth corridor connecting Brandon to Flowood &amp; Pearl; new construction &amp; commercial projects</li>
                    </ul>
                    <p>
                        Brandon&apos;s thriving community and expanding development make it one of the metro area&apos;s most desirable locations for home improvement and construction. We&apos;re proud to serve Rankin County with professional roll off dumpster rentals. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Brandon customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Planning a rental?</strong> Compare <Link href="/sizes">all three container sizes and prices</Link>, or read our <Link href="/blog/how-to-choose-dumpster-size">guide to choosing the right dumpster size</Link>.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Brandon is the seat of <Link href="/service-areas/rankin-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Rankin County</Link> — view all Rankin County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>Getting a Container Out to Brandon</h2>
                    <p>
                        Brandon is a straight run east from our yard on John R Lynch Street in West
                        Jackson &mdash; out I-20, roughly half an hour depending on how the interstate is
                        moving. That matters because we are dispatching our own trucks rather than
                        brokering the job to whoever has one free, which is what most of the national
                        names advertising in Rankin County are doing.
                    </p>
                    <p>
                        Call before noon and a Brandon address is comfortably same-day. After about 2PM
                        we will normally book you first thing the next morning rather than promise
                        something the routing cannot support. There is no distance surcharge for
                        crossing into Rankin County &mdash; the flat rate is the flat rate.
                    </p>

                    <h2>Placement Across Brandon&rsquo;s Subdivisions</h2>
                    <p>
                        Brandon is newer than Jackson and the lots are generally bigger, so the container
                        almost always fits. What catches people out here is access rather than space.
                    </p>
                    <ul className={styles.projectsList}>
                        <li>
                            <strong>Castlewoods.</strong> Gated, and the single most common reason a
                            Brandon delivery has to be rescheduled is a locked gate with nobody on site.
                            Give us the code or arrange access when you book, not when the driver calls
                            from the entrance.
                        </li>
                        <li>
                            <strong>Crossgates.</strong> One of the older and more established
                            subdivisions, so the tree canopy over the driveways is taller than in the
                            newer developments. We need roughly 23 feet of vertical clearance to raise the
                            bed and complete a drop; if your drive is under mature oaks, a 10 or 15-yard
                            places where a 20 may not.
                        </li>
                        <li>
                            <strong>Winner&rsquo;s Circle and Reservoir Point.</strong> Close to the Ross
                            Barnett Reservoir, where the ground holds water. A loaded roll-off truck on
                            saturated lawn leaves ruts or gets stuck outright &mdash; put the container on
                            the drive and tell us if the approach is soft.
                        </li>
                        <li>
                            <strong>The Highway 471 and Airport Road corridor.</strong> New construction,
                            open lots, easy placement. The debris here is bulky and light &mdash; framing
                            offcuts, drywall, packaging &mdash; so you run out of volume long before
                            weight and the 20-yard is usually the right call.
                        </li>
                        <li>
                            <strong>Downtown Brandon and the courthouse area.</strong> Older stock, tighter
                            lots, and occasionally no private ground at all. If the container has to sit on
                            the street, that is a permit question &mdash; see below.
                        </li>
                    </ul>

                    <h2>Permits: City of Brandon or Unincorporated Rankin County?</h2>
                    <p>
                        The rule turns on one question, same as anywhere: whose ground is the container
                        standing on? On your own driveway, yard or lot, no permit applies, and that covers
                        the large majority of Brandon deliveries.
                    </p>
                    <p>
                        If it has to go on a public street or right-of-way, you need permission &mdash; and
                        in Rankin County the authority depends on which side of the city line you are on.
                        Inside Brandon city limits that is the City of Brandon; on an address in
                        unincorporated Rankin County it is the county. Contact whichever applies to confirm
                        the current process and lead time before you book the container, because it is not
                        a same-day path and we cannot file it for you. If your neighborhood has an HOA,
                        check its rules as well &mdash; those are separate from, and additional to,
                        anything the city requires.
                    </p>

                    <h2>What We Haul Most in Rankin County</h2>
                    <p>
                        Storm and vegetation debris is a bigger share of the work in Brandon than in Hinds
                        or Madison, because of the Reservoir and the wooded lots along the Spillway. Wet
                        vegetation is deceptively heavy, so size those loads on weight rather than the
                        volume they appear to take up &mdash; see{' '}
                        <Link href="/services/storm-cleanup-dumpster-rental">storm cleanup dumpster rental</Link>{' '}
                        for the sizing, or{' '}
                        <Link href="/services/yard-waste-dumpster-rental">yard waste dumpster rental</Link>{' '}
                        for routine clearing.
                    </p>
                    <p>
                        Otherwise it is the usual mix:{' '}
                        <Link href="/services/roofing-dumpster-rental">roofing tear-offs</Link>,{' '}
                        <Link href="/services/residential-dumpster-rental">residential cleanouts</Link>,{' '}
                        <Link href="/services/construction-dumpster-rental">construction and demolition</Link>{' '}
                        along the 471 corridor, and{' '}
                        <Link href="/services/estate-cleanout-dumpster-rental">estate cleanouts</Link> in
                        the established neighborhoods. Not sure which size?{' '}
                        <Link href="/sizes">Compare all three</Link>.
                    </p>
                </div>
            </section>

            <FaqSection faqs={faqs} title="Frequently Asked Questions: Brandon Dumpster Rentals" background />
            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
                        <Image
                            src="/images/gallery/residential-dumpster-rental-brandon-driveway.jpg"
                            alt="Mid South Dumpster Rentals roll-off container on a residential driveway in Brandon, Mississippi (Rankin County) — serving Crossgates, Castlewoods &amp; surrounding neighborhoods"
                            width={760}
                            height={480}
                            style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        Mid South Dumpster Rentals delivery in Brandon, MS (Rankin County) — same-day roll-off service to Crossgates, Castlewoods &amp; all Brandon neighborhoods.
                    </p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Brandon?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Brandon Service Area CTA" />
                </div>
            </section>
        </>
    )
}
