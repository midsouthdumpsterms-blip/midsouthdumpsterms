import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import { SITE_URL, ogBase, twitterBase } from '@/lib/seo'
import styles from '../../city.module.css'
import FaqSection from '@/components/FaqSection'

const PATH = '/service-areas/jackson/residential-dumpster-rental'
const TITLE = 'Residential Dumpster Rental Jackson MS'
const DESCRIPTION =
    'Driveway dumpster rental for Jackson homeowners. Protecting your drive, what fits in a 10 versus a 15-yard, and the household items we cannot take.'

export const metadata: Metadata = {
    alternates: { canonical: `${SITE_URL}${PATH}` },
    title: TITLE,
    description: DESCRIPTION,
    openGraph: ogBase({ title: TITLE, description: DESCRIPTION, path: PATH }),
    twitter: twitterBase({ title: TITLE, description: DESCRIPTION }),
}

export default function JacksonResidentialPage() {
    const serviceSchema = generateServiceSchema(
        'Residential Dumpster Rental',
        'Residential roll-off dumpster rental for homeowners in Jackson, Mississippi. Driveway-friendly 10 and 15-yard containers for cleanouts, remodels and yard work.',
        'Jackson',
        [
            { price: '349', description: '10 Yard Residential Dumpster - 1 Day Rental (Includes 1 ton)' },
            { price: '399', description: '15 Yard Residential Dumpster - 1 Day Rental (Includes 2 tons)' },
        ],
        ['39201', '39202', '39203', '39204', '39206', '39209', '39211', '39212', '39213', '39216', '39217']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Service Areas', url: `${SITE_URL}/service-areas` },
        { name: 'Jackson', url: `${SITE_URL}/service-areas/jackson` },
        { name: 'Residential Dumpster Rental', url: `${SITE_URL}${PATH}` },
    ])

    const faqs = [
        {
            question: 'Will a dumpster fit in a normal Jackson driveway?',
            answer: 'A 10-yard is about 12 feet long and a 15-yard about 16, so both sit comfortably on a standard two-car driveway without blocking the garage. The 20-yard needs a longer run. The constraint in Jackson is more often overhead than length — mature oaks over the drives in Belhaven, Fondren and parts of Northeast Jackson mean we need roughly 23 feet of vertical clearance to complete the drop.',
        },
        {
            question: 'Do I need a permit for a dumpster at my Jackson home?',
            answer: 'Not if it goes on your own driveway or yard — that is private property and no permit applies. You only need one if the container has to sit on a public street or right-of-way, which the City of Jackson requires a permit for. If your home has no usable driveway, sort the permit before you book.',
        },
        {
            question: 'Can I put a mattress or an old sofa in it?',
            answer: 'Yes. Mattresses, box springs, sofas, dressers, tables and general furniture are all fine, and they are the bulk of most household cleanouts. What we cannot take is refrigerators and freezers, window AC units and anything else holding refrigerant, plus televisions and electronics, paint, chemicals, fuels, batteries and tires.',
        },
        {
            question: 'How long do I get to fill it?',
            answer: 'You choose 1, 3 or 7 days and all three are priced up front. Most Jackson homeowners doing a garage or single-room cleanout take the 3-day so they have a full weekend. If you finish early we will collect sooner at no extra charge, and extra days after your window are $50 each.',
        },
    ]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(generateFAQSchema(faqs)) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Residential Dumpster Rental in Jackson, MS</h1>
                    <p className={styles.heroSubtext}>
                        A container on your driveway, filled at your pace, gone when you say so. Flat rates
                        from $349 with delivery, pickup and disposal included.
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book for My Home" location="Jackson Residential Hero" />
                        <TrackedPhoneLink location="Jackson Residential Hero" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>Which Size for a Jackson Home</h2>
                    <p>
                        Homeowners almost always overestimate volume and underestimate weight. A container
                        that looks half empty can already be at its tonnage limit if you have been loading
                        tile, plaster or wet yard debris.
                    </p>
                    <div className={styles.tableWrap}>
                        <table className={styles.dataTable}>
                            <thead>
                                <tr>
                                    <th>What you are clearing</th>
                                    <th>Size</th>
                                    <th>From</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Garage, attic or one packed room</td>
                                    <td>10 yard</td>
                                    <td>$349</td>
                                </tr>
                                <tr>
                                    <td>Bathroom or small kitchen remodel</td>
                                    <td>10&ndash;15 yard</td>
                                    <td>$349</td>
                                </tr>
                                <tr>
                                    <td>Several rooms, or a move-out</td>
                                    <td>15 yard</td>
                                    <td>$399</td>
                                </tr>
                                <tr>
                                    <td>Whole-house cleanout or large remodel</td>
                                    <td>20 yard</td>
                                    <td>$449</td>
                                </tr>
                                <tr>
                                    <td>Storm debris, limbs and fencing</td>
                                    <td>15&ndash;20 yard</td>
                                    <td>$399</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        The 15-yard is the one most Jackson households end up wanting. It is the size where
                        a weekend cleanout stops feeling tight, and it is only $50 more than the 10. Full
                        dimensions are on <Link href="/sizes">dumpster sizes and pricing</Link>.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection} style={{ background: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2>Protecting Your Driveway</h2>
                    <p>
                        This is the question homeowners ask most and the one worth two minutes of
                        attention. The container sitting still is not the risk &mdash; its weight spreads
                        across the rails. The risk is the roll-on and roll-off, where the rails bear on a
                        small area while the container moves.
                    </p>
                    <ul className={styles.projectsList}>
                        <li>
                            <strong>Ask for boards.</strong> We will lay planks under the rails on request.
                            Say so when you book and the driver arrives ready.
                        </li>
                        <li>
                            <strong>Asphalt in a Jackson August is the vulnerable case.</strong> Hot asphalt
                            softens and marks far more easily than concrete. If your drive is older
                            blacktop, the boards matter.
                        </li>
                        <li>
                            <strong>Avoid the apron and the gutter cut.</strong> The lip where the drive
                            meets the street is the thinnest, least-supported concrete on the property.
                        </li>
                        <li>
                            <strong>Do not place on a soft lawn after rain.</strong> Jackson gets sudden
                            heavy rain and a loaded container sinks. Ruts in a wet yard are far harder to
                            put right than a scuff on concrete.
                        </li>
                    </ul>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
                        <Image
                            src="/images/gallery/driveway-safe-dumpster-gluckstadt-boards.jpg"
                            alt="Roll-off dumpster placed on boards to protect a residential driveway"
                            width={760}
                            height={480}
                            sizes="(max-width: 800px) 100vw, 760px"
                            style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        Boards under the rails &mdash; ask for them when you book and there is no charge.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>What Cannot Go In</h2>
                    <p>
                        Most of a household cleanout is fine. A short list is not, and it is worth knowing
                        before you start rather than when the driver arrives:
                    </p>
                    <ul className={styles.projectsList}>
                        <li>
                            <strong>Refrigerators, freezers and window AC units.</strong> Refrigerant has
                            to be recovered by a certified technician first. Stoves, washers and dryers are
                            fine.
                        </li>
                        <li>
                            <strong>Televisions and electronics.</strong> These need e-waste handling
                            rather than landfill.
                        </li>
                        <li>
                            <strong>Paint, solvents, fuels and pool chemicals.</strong> Hinds County runs
                            household hazardous waste collection events &mdash; hold these for one.
                        </li>
                        <li>
                            <strong>Tires and car batteries.</strong> Most Jackson tire shops and auto
                            parts stores take these back directly.
                        </li>
                        <li>
                            <strong>Medications.</strong> Pharmacy take-back, not the container. This comes
                            up constantly on estate cleanouts.
                        </li>
                    </ul>
                    <p>
                        The complete list is in{' '}
                        <Link href="/blog/what-can-i-put-in-a-dumpster">what you can put in a dumpster</Link>,
                        and appliance-specific guidance is in{' '}
                        <Link href="/blog/how-to-dispose-appliances-mattresses-jackson-ms">how to dispose of appliances and mattresses</Link>.
                    </p>

                    <h2>Common Jackson Household Projects</h2>
                    <p>
                        If your job is one of these, we have written it up in more detail:{' '}
                        <Link href="/services/estate-cleanout-dumpster-rental">estate cleanouts</Link>,{' '}
                        <Link href="/services/yard-waste-dumpster-rental">yard waste and landscaping</Link>,{' '}
                        <Link href="/services/storm-cleanup-dumpster-rental">storm cleanup</Link>, and{' '}
                        <Link href="/blog/bathroom-remodel-dumpster-rental-jackson-ms">bathroom remodels</Link>.
                    </p>
                </div>
            </section>

            <FaqSection faqs={faqs} title="Residential Dumpster FAQ — Jackson" background />

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Book a Dumpster for Your Jackson Home</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Tell us what you are clearing and we will size it with you.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Online" location="Jackson Residential CTA" />
                        <TrackedPhoneLink location="Jackson Residential CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
