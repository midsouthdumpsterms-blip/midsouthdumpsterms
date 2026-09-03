import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import { SITE_URL, ogBase, twitterBase } from '@/lib/seo'
import styles from '../../city.module.css'
import FaqSection from '@/components/FaqSection'

const PATH = '/service-areas/jackson/same-day-dumpster-rental'
const TITLE = 'Same-Day Dumpster Rental in Jackson MS'
const DESCRIPTION =
    'Call before noon and we deliver a roll-off in Jackson the same day. No rush fee. Cutoff times, neighborhood routing and what makes a same-day drop fail.'

export const metadata: Metadata = {
    alternates: { canonical: `${SITE_URL}${PATH}` },
    title: TITLE,
    description: DESCRIPTION,
    openGraph: ogBase({ title: TITLE, description: DESCRIPTION, path: PATH }),
    twitter: twitterBase({ title: TITLE, description: DESCRIPTION }),
}

export default function JacksonSameDayPage() {
    const serviceSchema = generateServiceSchema(
        'Same-Day Dumpster Rental',
        'Same-day roll-off dumpster delivery in Jackson, Mississippi. Order before noon for delivery the same day, seven days a week, with no rush surcharge.',
        'Jackson',
        [
            { price: '349', description: '10 Yard Dumpster - 1 Day Rental (Includes 1 ton)' },
            { price: '399', description: '15 Yard Dumpster - 1 Day Rental (Includes 2 tons)' },
            { price: '449', description: '20 Yard Dumpster - 1 Day Rental (Includes 3 tons)' },
        ],
        ['39201', '39202', '39203', '39204', '39206', '39209', '39211', '39212', '39213', '39216', '39217']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Service Areas', url: `${SITE_URL}/service-areas` },
        { name: 'Jackson', url: `${SITE_URL}/service-areas/jackson` },
        { name: 'Same-Day Dumpster Rental', url: `${SITE_URL}${PATH}` },
    ])

    const faqs = [
        {
            question: 'How late can I call and still get a dumpster today in Jackson?',
            answer: 'Noon is the honest cutoff for most of Jackson. Before noon we can almost always work a drop into the afternoon route. Between noon and about 2PM it depends on where the trucks already are and whether anyone has cancelled. After 2PM we will usually book you first thing the next morning rather than promise something we cannot deliver.',
        },
        {
            question: 'Do you charge extra for same-day delivery?',
            answer: 'No. A container delivered three hours from now costs exactly what one booked three weeks out costs: $349 for a 10-yard, $399 for a 15-yard, $449 for a 20-yard, all flat rate including delivery, pickup and disposal. There is no rush fee, no fuel surcharge and no weekend rate.',
        },
        {
            question: 'Should I book online or call for same-day?',
            answer: 'Call 601-316-7891. The online form is built for scheduled deliveries and gets checked in batches. On the phone we can look at where the trucks are, confirm a real delivery window against the day’s routing, and dispatch while you are still on the line.',
        },
        {
            question: 'Which Jackson neighborhoods can you reach same-day?',
            answer: 'All of them. Our yard is on John R Lynch Street in West Jackson, so downtown, Belhaven, Fondren, Midtown and West Jackson are typically inside 30 minutes. Northeast Jackson, Eastover and the County Line Road corridor add a little time in traffic but are still comfortably same-day when you call in the morning.',
        },
    ]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(generateFAQSchema(faqs)) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Same-Day Dumpster Rental in Jackson, MS</h1>
                    <p className={styles.heroSubtext}>
                        Call before noon and a roll-off is on your driveway this afternoon. No rush fee,
                        seven days a week, dispatched from our yard in West Jackson.
                    </p>
                    <div className={styles.heroButtons}>
                        <TrackedPhoneLink location="Jackson Same-Day Hero" className="btn btn-primary btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                        <BookingButton label="Book Online" location="Jackson Same-Day Hero" />
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>What &ldquo;Same-Day&rdquo; Actually Means Here</h2>
                    <p>
                        Most companies advertising same-day delivery in Jackson are booking centers in
                        another state that subcontract the haul to whoever has a truck free. That is why
                        they quote lead times in days and cannot tell you when the driver will arrive.
                    </p>
                    <p>
                        We are based at 3080 B John R Lynch Street and we own the trucks. When you call,
                        you reach the people who decide where those trucks go next. That is the whole
                        reason we can commit to a delivery window on the phone instead of calling you back
                        to confirm.
                    </p>
                    <p>
                        In practice, a Jackson same-day order placed at 8AM is usually on site before
                        lunch. One placed at 11:30AM lands mid-afternoon. The constraint is never the
                        distance &mdash; it is how many drops are already committed for the day.
                    </p>

                    <h2>Cutoff Times by Time of Day</h2>
                    <div className={styles.tableWrap}>
                        <table className={styles.dataTable}>
                            <thead>
                                <tr>
                                    <th>When you call</th>
                                    <th>What we can usually commit to</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>7:00&ndash;9:00 AM</td>
                                    <td>Same-day, generally a morning or early-afternoon window</td>
                                </tr>
                                <tr>
                                    <td>9:00 AM&ndash;noon</td>
                                    <td>Same-day, afternoon window</td>
                                </tr>
                                <tr>
                                    <td>Noon&ndash;2:00 PM</td>
                                    <td>Often same-day, depending on the day&rsquo;s routing</td>
                                </tr>
                                <tr>
                                    <td>After 2:00 PM</td>
                                    <td>First delivery the following morning</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        These are the real numbers rather than marketing ones. If we cannot make today, we
                        will say so on the call and give you a morning slot instead.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection} style={{ background: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2>When Jackson Customers Need One Today</h2>
                    <p>
                        Same-day is rarely about poor planning. Four situations account for most of the
                        calls we take:
                    </p>
                    <ul className={styles.projectsList}>
                        <li>
                            <strong>Storm damage.</strong> After severe weather moves through Hinds County
                            the phone does not stop. Downed limbs, fence sections and roof debris need to
                            be off the lawn before the insurance adjuster arrives.
                        </li>
                        <li>
                            <strong>A crew starting sooner than expected.</strong> A roofing or renovation
                            contractor moves a Jackson job forward and suddenly needs the container on site
                            before the tear-off begins that morning.
                        </li>
                        <li>
                            <strong>Out-of-town family with a narrow window.</strong> Relatives fly in for
                            a few days to clear a property. Losing a day waiting on a container is losing a
                            meaningful share of the time they have.
                        </li>
                        <li>
                            <strong>Insurance remediation.</strong> Water or fire damage where the
                            restoration company cannot begin until the debris is gone.
                        </li>
                    </ul>
                    <p>
                        For the storm cases specifically, see{' '}
                        <Link href="/services/storm-cleanup-dumpster-rental">storm cleanup dumpster rental</Link>{' '}
                        &mdash; the sizing advice is different when the load is mostly wet vegetation.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>What Actually Stops a Same-Day Drop</h2>
                    <p>
                        Almost every same-day delivery we cannot complete fails for one of four reasons,
                        and all four are avoidable in about two minutes on the phone:
                    </p>
                    <ul className={styles.projectsList}>
                        <li>
                            <strong>Nowhere to put it.</strong> We need roughly 60 feet of straight
                            clearance to roll a container off the truck and about 23 feet of vertical
                            clearance. Low limbs over a Belhaven driveway are the single most common
                            obstacle in Jackson.
                        </li>
                        <li>
                            <strong>A car in the way.</strong> If the container is going on the driveway,
                            everything needs to be off it before we arrive. We cannot wait for someone to
                            get home from work.
                        </li>
                        <li>
                            <strong>A locked gate and no code.</strong> Common on commercial lots and in
                            gated Northeast Jackson subdivisions. Give us the code or arrange access when
                            you book.
                        </li>
                        <li>
                            <strong>Street placement without a permit.</strong> If the only option is the
                            public right-of-way, the City of Jackson requires a permit and that is not a
                            same-day process. See{' '}
                            <Link href="/service-areas/jackson">Jackson delivery and permit rules</Link>{' '}
                            before you plan on the street.
                        </li>
                    </ul>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
                        <Image
                            src="/images/gallery/dumpster-rental-jackson-ms-delivery.jpg"
                            alt="Mid South Dumpster Rentals roll-off container being delivered the same day in Jackson, Mississippi"
                            width={760}
                            height={480}
                            sizes="(max-width: 800px) 100vw, 760px"
                            style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        A same-day drop in Jackson, MS &mdash; dispatched from our West Jackson yard.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection} style={{ background: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2>Pricing &mdash; Identical to a Scheduled Delivery</h2>
                    <p>
                        Same-day carries no premium. The 15-yard is the size most Jackson same-day callers
                        end up with, because it handles a room-sized cleanout or a single-layer tear-off
                        without the weight risk of a 10-yard.
                    </p>
                    <div className={styles.tableWrap}>
                        <table className={styles.dataTable}>
                            <thead>
                                <tr>
                                    <th>Container</th>
                                    <th>Included weight</th>
                                    <th>1-day rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>10 yard</td><td>1 ton</td><td>$349</td></tr>
                                <tr><td>15 yard</td><td>2 tons</td><td>$399</td></tr>
                                <tr><td>20 yard</td><td>3 tons</td><td>$449</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        Full pricing including 3-day and 7-day rates is on{' '}
                        <Link href="/sizes">dumpster sizes and pricing</Link>. If you are unsure which size
                        fits the job, tell us what you are clearing on the call and we will size it with
                        you rather than upselling you.
                    </p>
                </div>
            </section>

            <FaqSection faqs={faqs} title="Same-Day Dumpster FAQ — Jackson" background />

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Need a Container in Jackson Today?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Call now &mdash; we answer 7AM to 7PM, seven days a week.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <TrackedPhoneLink location="Jackson Same-Day CTA" className="btn btn-primary btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                        <BookingButton label="Book Online" location="Jackson Same-Day CTA" />
                    </div>
                </div>
            </section>
        </>
    )
}
