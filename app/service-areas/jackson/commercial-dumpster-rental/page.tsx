import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import { SITE_URL, ogBase, twitterBase } from '@/lib/seo'
import styles from '../../city.module.css'

const PATH = '/service-areas/jackson/commercial-dumpster-rental'
const TITLE = 'Commercial Dumpster Rental Jackson MS'
const DESCRIPTION =
    'Project roll-offs for Jackson businesses and property managers: parking-lot placement, tenant turnovers, retail refits and office cleanouts. Flat rates from $349.'

export const metadata: Metadata = {
    alternates: { canonical: `${SITE_URL}${PATH}` },
    title: TITLE,
    description: DESCRIPTION,
    openGraph: ogBase({ title: TITLE, description: DESCRIPTION, path: PATH }),
    twitter: twitterBase({ title: TITLE, description: DESCRIPTION }),
}

export default function JacksonCommercialPage() {
    const serviceSchema = generateServiceSchema(
        'Commercial Dumpster Rental',
        'Project-based commercial roll-off dumpster rental in Jackson, Mississippi. Office and retail cleanouts, tenant turnovers, refits and property management work.',
        'Jackson',
        [
            { price: '399', description: '15 Yard Commercial Dumpster - 1 Day Rental (Includes 2 tons)' },
            { price: '449', description: '20 Yard Commercial Dumpster - 1 Day Rental (Includes 3 tons)' },
        ],
        ['39201', '39202', '39203', '39204', '39206', '39209', '39211', '39212', '39213', '39216', '39217']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Service Areas', url: `${SITE_URL}/service-areas` },
        { name: 'Jackson', url: `${SITE_URL}/service-areas/jackson` },
        { name: 'Commercial Dumpster Rental', url: `${SITE_URL}${PATH}` },
    ])

    const faqs = [
        {
            question: 'Do you provide ongoing weekly waste pickup for a Jackson business?',
            answer: 'No — and it is worth being straight about that. We run temporary roll-off containers for projects: cleanouts, refits, turnovers, construction. The permanent enclosed bin behind a restaurant on a weekly route is front-load service, which is a different operation. If a project is what you have, we are a good fit. If you need recurring collection, you want a front-load hauler.',
        },
        {
            question: 'Can a container go in our parking lot?',
            answer: 'Yes, and that is where most Jackson commercial drops end up. We need about 60 feet of straight approach, roughly 23 feet of overhead clearance, and two to three parking spaces coned off before we arrive. Tell us if the lot has a low canopy, a height bar at the entrance or a tight turning radius, because those are the three things that turn a truck around.',
        },
        {
            question: 'Can you deliver outside business hours?',
            answer: 'We run 7AM to 7PM, seven days a week, so early morning and weekend drops are straightforward and are what most Jackson retail and office clients choose. If a delivery genuinely has to happen before we open or after we close, call and ask rather than booking online — it depends on the day.',
        },
        {
            question: 'Do you carry insurance and can you provide a certificate?',
            answer: 'Yes, we are a licensed and insured Mississippi LLC. If your property manager or general contractor needs a certificate of insurance naming them, call the office with the requirements and we will get it over to you.',
        },
    ]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(generateFAQSchema(faqs)) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Commercial Dumpster Rental in Jackson, MS</h1>
                    <p className={styles.heroSubtext}>
                        Project roll-offs for Jackson businesses and property managers. Parking-lot
                        placement, early-morning drops and flat rates from $349.
                    </p>
                    <div className={styles.heroButtons}>
                        <TrackedPhoneLink location="Jackson Commercial Hero" className="btn btn-primary btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                        <BookingButton label="Book a Container" location="Jackson Commercial Hero" />
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>Make Sure You Want a Roll-Off</h2>
                    <p>
                        &ldquo;Commercial dumpster&rdquo; means two entirely different services and it is
                        worth thirty seconds to establish which one you are after, because booking the
                        wrong one wastes everybody&rsquo;s time.
                    </p>
                    <p>
                        <strong>A temporary roll-off</strong> &mdash; what we do &mdash; is an open-top
                        container delivered for a defined piece of work. It arrives, you fill it, it goes.
                        Cleanouts, refits, turnovers, demolition, construction.
                    </p>
                    <p>
                        <strong>A front-load bin</strong> is the permanent enclosed unit behind a business,
                        emptied on a recurring weekly or twice-weekly route. We do not run that service. If
                        that is what you need, a front-load hauler is the right call and we would rather
                        tell you now.
                    </p>

                    <h2>What Jackson Businesses Use Us For</h2>
                    <ul className={styles.projectsList}>
                        <li>
                            <strong>Tenant turnovers.</strong> Apartment and rental turnovers across
                            Jackson, where a unit has to be cleared and re-let quickly. Property managers
                            are our steadiest commercial work.
                        </li>
                        <li>
                            <strong>Retail refits.</strong> Fixtures, shelving, flooring and signage out
                            before the new build-out starts. Usually a 20-yard and usually on a deadline.
                        </li>
                        <li>
                            <strong>Office cleanouts and downsizing.</strong> Cubicle systems, filing
                            cabinets, old workstations and carpet &mdash; bulky, light, and volume runs out
                            long before weight does.
                        </li>
                        <li>
                            <strong>Restaurant and bar changeovers.</strong> Kitchen equipment, seating and
                            fit-out when a space changes hands.
                        </li>
                        <li>
                            <strong>Foreclosure and bank-owned property clearances.</strong> See{' '}
                            <Link href="/blog/foreclosure-cleanout-dumpster-rental-ms">foreclosure cleanouts</Link>.
                        </li>
                        <li>
                            <strong>Storm and flood remediation.</strong> Commercial water damage where
                            restoration cannot begin until debris is out.
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.contentSection} style={{ background: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2>Placement on a Commercial Site</h2>
                    <p>
                        Commercial placement fails for different reasons than residential does. The drive
                        is never too narrow; the obstacles are structural and procedural:
                    </p>
                    <div className={styles.tableWrap}>
                        <table className={styles.dataTable}>
                            <thead>
                                <tr>
                                    <th>Obstacle</th>
                                    <th>Tell us before delivery</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Height bar at the lot entrance</td>
                                    <td>Very common on Jackson retail and apartment lots &mdash; a roll-off truck will not clear one</td>
                                </tr>
                                <tr>
                                    <td>Covered parking or a canopy</td>
                                    <td>We need about 23 ft of vertical clearance to complete the drop</td>
                                </tr>
                                <tr>
                                    <td>Gated lot or badge access</td>
                                    <td>Give us the code or a site contact who will be there</td>
                                </tr>
                                <tr>
                                    <td>Loading dock or service alley only</td>
                                    <td>Tight turning radius &mdash; we may need to scout it first</td>
                                </tr>
                                <tr>
                                    <td>Trading hours you cannot disrupt</td>
                                    <td>Book an early-morning slot before the lot fills</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        Downtown Jackson and the Capitol district frequently have no usable private ground
                        at all, which puts the container on the street and brings a City of Jackson permit
                        into play. Sort that first &mdash; see the{' '}
                        <Link href="/service-areas/jackson">Jackson delivery and permit page</Link>.
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
                        <Image
                            src="/images/gallery/commercial-dumpster-rental-jackson-business.jpg"
                            alt="Commercial roll-off dumpster placed at a business property in Jackson, Mississippi"
                            width={760}
                            height={480}
                            sizes="(max-width: 800px) 100vw, 760px"
                            style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        Commercial placement in Jackson &mdash; sited to keep the lot working.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>For Property Managers</h2>
                    <p>
                        If you manage several Jackson properties, the thing that actually costs you is not
                        the container price &mdash; it is coordination. A turnover that slips two days
                        because nobody could get a container is two days of lost rent.
                    </p>
                    <p>
                        Two things help. First, book the container at the same time you book the cleaning
                        crew rather than after they finish. Second, call rather than using the form when the
                        date is tight; we can confirm against the day&rsquo;s routing in real time. If you
                        run multiple jobs a month, ask about contractor pricing while you are on the phone.
                    </p>
                    <p>
                        Sizing for turnovers is usually a 15-yard for a one or two-bedroom unit and a
                        20-yard where furniture is being left behind. See{' '}
                        <Link href="/blog/rental-property-cleanout-dumpster-rental-ms">rental property cleanouts</Link>{' '}
                        for the full breakdown, or{' '}
                        <Link href="/sizes">compare all three sizes</Link>.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection} style={{ background: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2>Commercial Rental FAQ &mdash; Jackson</h2>
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
                    <h2>Book a Commercial Container in Jackson</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Tell us the site constraints on the call and we will route the right truck.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <TrackedPhoneLink location="Jackson Commercial CTA" className="btn btn-primary btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                        <BookingButton label="Book Online" location="Jackson Commercial CTA" />
                    </div>
                </div>
            </section>
        </>
    )
}
