import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import { SITE_URL, ogBase, twitterBase } from '@/lib/seo'
import styles from '../../city.module.css'

const PATH = '/service-areas/jackson/roll-off-dumpster-rental'
const TITLE = 'Roll-Off Dumpster Rental in Jackson MS'
const DESCRIPTION =
    'How roll-off delivery works in Jackson: the clearance we need, driveway protection, and what a roll-off is versus a front-load. From $349.'

export const metadata: Metadata = {
    alternates: { canonical: `${SITE_URL}${PATH}` },
    title: TITLE,
    description: DESCRIPTION,
    openGraph: ogBase({ title: TITLE, description: DESCRIPTION, path: PATH }),
    twitter: twitterBase({ title: TITLE, description: DESCRIPTION }),
}

export default function JacksonRollOffPage() {
    const serviceSchema = generateServiceSchema(
        'Roll-Off Dumpster Rental',
        'Roll-off dumpster rental in Jackson, Mississippi. 10, 15 and 20-yard open-top containers delivered by roll-off truck to residential driveways and commercial sites.',
        'Jackson',
        [
            { price: '349', description: '10 Yard Roll-Off - 1 Day Rental (Includes 1 ton)' },
            { price: '399', description: '15 Yard Roll-Off - 1 Day Rental (Includes 2 tons)' },
            { price: '449', description: '20 Yard Roll-Off - 1 Day Rental (Includes 3 tons)' },
        ],
        ['39201', '39202', '39203', '39204', '39206', '39209', '39211', '39212', '39213', '39216', '39217']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Service Areas', url: `${SITE_URL}/service-areas` },
        { name: 'Jackson', url: `${SITE_URL}/service-areas/jackson` },
        { name: 'Roll-Off Dumpster Rental', url: `${SITE_URL}${PATH}` },
    ])

    const faqs = [
        {
            question: 'What is a roll-off dumpster, exactly?',
            answer: 'An open-top steel container delivered on a truck with a hydraulic bed. The truck tilts and the container rolls off on rails onto your driveway or site, which is where the name comes from. There is no lifting arm and no permanent placement — it is dropped, filled at your pace, then winched back on and hauled away. That is a different service from the front-load dumpster a restaurant keeps behind the building on a weekly pickup schedule.',
        },
        {
            question: 'How much room do you need to deliver a roll-off in Jackson?',
            answer: 'About 60 feet of straight, reasonably level approach to set the container down, and roughly 23 feet of vertical clearance because the truck bed lifts high during the drop. Low branches are the most common obstacle on older Jackson streets — Belhaven and Fondren in particular have mature oaks over the driveways.',
        },
        {
            question: 'Will the container damage my driveway?',
            answer: 'We place boards under the rails on request and it is worth asking for. The container itself spreads its weight well, but the roll-on and roll-off is where a concrete or asphalt drive can scuff. Older asphalt in the Jackson heat is the most vulnerable. Mention it when you book and the driver will plan for it.',
        },
        {
            question: 'How long can I keep a roll-off in Jackson?',
            answer: 'Standard rentals are 1, 3 or 7 days and we price all three up front. If you need longer, extensions are $50 per day. If you finish early, call and we will collect it sooner at no extra charge — there is no penalty for a short rental.',
        },
    ]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(generateFAQSchema(faqs)) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll-Off Dumpster Rental in Jackson, MS</h1>
                    <p className={styles.heroSubtext}>
                        10, 15 and 20-yard open-top containers delivered anywhere in Jackson. Flat rates
                        from $349 including delivery, pickup and disposal.
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book a Roll-Off" location="Jackson Roll-Off Hero" />
                        <TrackedPhoneLink location="Jackson Roll-Off Hero" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>Roll-Off or Front-Load: Which One You Actually Want</h2>
                    <p>
                        People searching for a dumpster in Jackson are usually after one of two completely
                        different things, and the words get used interchangeably.
                    </p>
                    <p>
                        A <strong>roll-off</strong> is temporary. It arrives for a project, sits on your
                        driveway or job site while you fill it, and leaves when you are done. Open top, no
                        lid, loaded by hand or by machine. Everything on this page is a roll-off.
                    </p>
                    <p>
                        A <strong>front-load</strong> is the permanent enclosed bin behind a business,
                        emptied on a recurring route by a truck with forks on the front. If you are a
                        Jackson restaurant or office looking for weekly waste service, that is what you
                        want, and it is a different conversation &mdash; start at{' '}
                        <Link href="/services/commercial-dumpster-rental">commercial dumpster rental</Link>.
                    </p>

                    <h2>Delivery Requirements in Jackson</h2>
                    <p>
                        A roll-off truck is a big vehicle doing a precise thing in a small space. What we
                        need at the address:
                    </p>
                    <div className={styles.tableWrap}>
                        <table className={styles.dataTable}>
                            <thead>
                                <tr>
                                    <th>Requirement</th>
                                    <th>Why</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>~60 ft of straight approach</td>
                                    <td>The container rolls off behind the truck; it cannot be set sideways</td>
                                </tr>
                                <tr>
                                    <td>~23 ft of overhead clearance</td>
                                    <td>The bed lifts high during the drop &mdash; low limbs and power drops are the usual blockers</td>
                                </tr>
                                <tr>
                                    <td>~10 ft of width</td>
                                    <td>Container plus room for the driver to work safely alongside it</td>
                                </tr>
                                <tr>
                                    <td>Firm, reasonably level ground</td>
                                    <td>Soft ground after Jackson rain is how trucks get stuck and lawns get rutted</td>
                                </tr>
                                <tr>
                                    <td>A clear driveway</td>
                                    <td>Cars, trailers and basketball goals all have to be moved before we arrive</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        If you are not sure the approach works, take a photo from the street and text it to{' '}
                        <TrackedPhoneLink location="Jackson Roll-Off Requirements">601-316-7891</TrackedPhoneLink>.
                        We would rather look first than send a truck that has to turn around.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection} style={{ background: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2>Placement in Older Jackson Neighborhoods</h2>
                    <p>
                        Jackson&rsquo;s housing stock varies enormously and the placement problem changes
                        with it:
                    </p>
                    <ul className={styles.projectsList}>
                        <li>
                            <strong>Belhaven and Fondren.</strong> Narrow drives, mature oaks and short
                            setbacks. Overhead clearance is the binding constraint far more often than
                            width. A 10 or 15-yard usually places where a 20 will not.
                        </li>
                        <li>
                            <strong>Northeast Jackson and Eastover.</strong> Long drives and plenty of
                            room, but often gated. We need the code or someone on site.
                        </li>
                        <li>
                            <strong>Downtown and the Capitol district.</strong> Frequently no private
                            driveway at all, which means street placement and a City of Jackson permit.
                            Plan several days ahead.
                        </li>
                        <li>
                            <strong>South and West Jackson.</strong> Generally the easiest placements in
                            the city &mdash; wider lots, straight drives, good approach angles.
                        </li>
                    </ul>
                    <p>
                        Permit rules and neighborhood-by-neighborhood detail live on the{' '}
                        <Link href="/service-areas/jackson">Jackson delivery page</Link>.
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
                        <Image
                            src="/images/gallery/mid-south-truck-dumpster-trailer-full-view.jpg"
                            alt="Mid South Dumpster Rentals roll-off truck and open-top container, Jackson Mississippi"
                            width={760}
                            height={480}
                            sizes="(max-width: 800px) 100vw, 760px"
                            style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        Our own truck and container &mdash; we are not a broker subcontracting the haul.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>Sizes and Flat Rates</h2>
                    <p>
                        Every rate below includes delivery, pickup, disposal and the tonnage shown. There
                        is no fuel surcharge, environmental fee or weekend rate.
                    </p>
                    <div className={styles.tableWrap}>
                        <table className={styles.dataTable}>
                            <thead>
                                <tr>
                                    <th>Container</th>
                                    <th>Holds about</th>
                                    <th>Included weight</th>
                                    <th>From</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>10 yard</td><td>4 pickup loads</td><td>1 ton</td><td>$349</td></tr>
                                <tr><td>15 yard</td><td>6 pickup loads</td><td>2 tons</td><td>$399</td></tr>
                                <tr><td>20 yard</td><td>8 pickup loads</td><td>3 tons</td><td>$449</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        Dimensions, weight guidance and 3-day and 7-day rates are all on{' '}
                        <Link href="/sizes">dumpster sizes and pricing</Link>. For heavy material &mdash;
                        shingles, concrete, dirt &mdash; size on weight rather than volume; see{' '}
                        <Link href="/blog/dumpster-weight-limits-jackson-ms">dumpster weight limits</Link>.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection} style={{ background: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2>Roll-Off Rental FAQ &mdash; Jackson</h2>
                    {faqs.map((faq) => (
                        <div key={faq.question} style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{faq.question}</h3>
                            <p style={{ color: 'var(--color-gray-600)' }}>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Book a Roll-Off in Jackson</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Same-day delivery available. Call and we will size it with you.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Online" location="Jackson Roll-Off CTA" />
                        <TrackedPhoneLink location="Jackson Roll-Off CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
