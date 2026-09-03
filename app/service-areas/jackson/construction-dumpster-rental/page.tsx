import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import { SITE_URL, ogBase, twitterBase } from '@/lib/seo'
import styles from '../../city.module.css'

const PATH = '/service-areas/jackson/construction-dumpster-rental'
const TITLE = 'Construction Dumpster Rental Jackson MS'
const DESCRIPTION =
    'Job-site roll-offs for Jackson contractors: same-day swap-outs, contractor pricing for repeat crews, and why brick and concrete need their own container.'

export const metadata: Metadata = {
    alternates: { canonical: `${SITE_URL}${PATH}` },
    title: TITLE,
    description: DESCRIPTION,
    openGraph: ogBase({ title: TITLE, description: DESCRIPTION, path: PATH }),
    twitter: twitterBase({ title: TITLE, description: DESCRIPTION }),
}

export default function JacksonConstructionPage() {
    const serviceSchema = generateServiceSchema(
        'Construction Dumpster Rental',
        'Construction and demolition roll-off dumpster rental for job sites in Jackson, Mississippi. Same-day swap-outs, contractor pricing and flat-rate disposal.',
        'Jackson',
        [
            { price: '399', description: '15 Yard Construction Dumpster - 1 Day Rental (Includes 2 tons)' },
            { price: '449', description: '20 Yard Construction Dumpster - 1 Day Rental (Includes 3 tons)' },
        ],
        ['39201', '39202', '39203', '39204', '39206', '39209', '39211', '39212', '39213', '39216', '39217']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Service Areas', url: `${SITE_URL}/service-areas` },
        { name: 'Jackson', url: `${SITE_URL}/service-areas/jackson` },
        { name: 'Construction Dumpster Rental', url: `${SITE_URL}${PATH}` },
    ])

    const faqs = [
        {
            question: 'Can you swap a full container the same day on a Jackson job site?',
            answer: 'Usually yes, if we know before noon. A swap is a pull and a re-drop, so it takes one truck movement rather than two and slots into the route more easily than a fresh delivery. Crews on a demo schedule should tell us the expected fill rate when they book the first container so we can plan the second.',
        },
        {
            question: 'Why can I not put brick and concrete in a regular container?',
            answer: 'Weight. A 20-yard filled with mixed C&D debris runs about 3 tons. The same container filled with brick, block or broken concrete can exceed 10 tons, which is past what the truck can legally lift and haul. Clean concrete, brick and block need a dedicated heavy-material load, usually a 10-yard filled part way. Call us and we will price it properly rather than letting you overload.',
        },
        {
            question: 'Do you offer contractor pricing for repeat work in Jackson?',
            answer: 'Yes. If you run multiple jobs a month, call 601-316-7891 and ask about contractor pricing. We work with roofers, general contractors, remodelers and property management companies across Central Mississippi.',
        },
        {
            question: 'What construction debris do you accept?',
            answer: 'Lumber, drywall, roofing, flooring, tile, insulation, PVC and plastics, siding, cabinetry, porcelain fixtures, doors and windows, metal and general mixed C&D. We cannot take asbestos-containing material, liquid paint, solvents, fuels, batteries, tires, or refrigerant-bearing appliances. Brick and concrete are accepted but need their own container as above.',
        },
    ]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(generateFAQSchema(faqs)) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Construction Dumpster Rental in Jackson, MS</h1>
                    <p className={styles.heroSubtext}>
                        Job-site roll-offs for Jackson contractors. Same-day swap-outs, flat-rate
                        disposal and contractor pricing for crews running repeat work.
                    </p>
                    <div className={styles.heroButtons}>
                        <TrackedPhoneLink location="Jackson Construction Hero" className="btn btn-primary btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                        <BookingButton label="Book a Container" location="Jackson Construction Hero" />
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>What Contractors Need That Homeowners Do Not</h2>
                    <p>
                        A homeowner rents one container, fills it over a weekend and calls when it is
                        done. A framing or demo crew has a different problem: the container is part of the
                        schedule, and a full one with nowhere to put the next load stops the job.
                    </p>
                    <p>
                        That changes what matters. Not the headline price &mdash; the swap turnaround, the
                        weight allowance, whether anyone answers the phone at 6:45AM, and whether you have
                        to hand over a card every single time.
                    </p>
                    <ul className={styles.projectsList}>
                        <li>
                            <strong>Swap-outs, not just deliveries.</strong> Call before noon and a full
                            container is usually pulled and replaced the same day.
                        </li>
                        <li>
                            <strong>Contractor pricing.</strong> If you run several jobs a month, call
                            and ask &mdash; we work with roofers, GCs, remodelers and property managers
                            across Central Mississippi.
                        </li>
                        <li>
                            <strong>Weight included, not metered.</strong> 2 tons on a 15-yard, 3 on a
                            20-yard. Overage on the 10 and 15-yard is a published $55 per ton rather than
                            a surprise on the invoice.
                        </li>
                        <li>
                            <strong>Local dispatch.</strong> Our yard is on John R Lynch Street. Most
                            Jackson job sites are inside a 25-minute run.
                        </li>
                    </ul>

                    <h2>Sizing a Job-Site Container</h2>
                    <div className={styles.tableWrap}>
                        <table className={styles.dataTable}>
                            <thead>
                                <tr>
                                    <th>Job</th>
                                    <th>Container</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Single-room gut &mdash; kitchen or bath</td>
                                    <td>10&ndash;15 yard</td>
                                    <td>Tile and plaster load heavy; do not size on volume alone</td>
                                </tr>
                                <tr>
                                    <td>Whole-house interior demo</td>
                                    <td>20 yard, often two</td>
                                    <td>Book the swap when you book the first drop</td>
                                </tr>
                                <tr>
                                    <td>Framing and drywall scrap, new build</td>
                                    <td>20 yard</td>
                                    <td>Bulky and light &mdash; volume runs out well before weight</td>
                                </tr>
                                <tr>
                                    <td>Roof tear-off</td>
                                    <td>15&ndash;20 yard</td>
                                    <td>See <Link href="/services/roofing-dumpster-rental">roofing sizing by roof area</Link></td>
                                </tr>
                                <tr>
                                    <td>Concrete, brick or block</td>
                                    <td>10 yard, part filled</td>
                                    <td>Heavy-material load &mdash; call before you order</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection} style={{ background: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2>The Mistake That Costs Jackson Crews the Most</h2>
                    <p>
                        Mixing heavy material into a general debris container. It is easy to do &mdash;
                        the chimney comes down mid-demo and the brick goes in with everything else.
                    </p>
                    <p>
                        The container then weighs more than the truck can legally haul, which means it
                        cannot be collected until it is partly emptied by hand. That is a lost day on the
                        schedule plus the labour to unload it. If a job is going to produce masonry,
                        separate it from the start and take a second small container for it. It is cheaper
                        every time.
                    </p>
                    <p>
                        The same logic applies to wet material. Rain-soaked drywall and insulation left
                        open through a Jackson thunderstorm can add a ton overnight. Tarp the container if
                        weather is coming and the load is already close to its allowance.
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
                        <Image
                            src="/images/gallery/dumpster-on-construction-site-new-build-ms.jpg"
                            alt="Roll-off construction dumpster on a new-build job site in Mississippi"
                            width={760}
                            height={480}
                            sizes="(max-width: 800px) 100vw, 760px"
                            style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        Job-site placement &mdash; positioned for the crew, not just for the truck.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>Job-Site Placement in Jackson</h2>
                    <p>
                        On a new build with an open lot, placement is easy. On an infill or renovation job
                        in an established Jackson neighborhood it usually is not:
                    </p>
                    <ul className={styles.projectsList}>
                        <li>
                            <strong>Downtown and the Capitol district.</strong> Rarely any private ground
                            to use. Street placement requires a City of Jackson permit and lead time.
                        </li>
                        <li>
                            <strong>Belhaven, Fondren and Midtown renovations.</strong> Tight lots and low
                            oak canopy. Tell us the container has to go behind the house before we route
                            the truck, not when it arrives.
                        </li>
                        <li>
                            <strong>Medical corridor and UMMC-area work.</strong> Access windows and
                            institutional site rules. Give us the contact and any badge requirement up
                            front.
                        </li>
                        <li>
                            <strong>Soft ground after rain.</strong> A loaded roll-off truck on a
                            saturated lot leaves ruts and can get stuck. Plan a gravel or paved approach if
                            you can.
                        </li>
                    </ul>
                    <p>
                        Full neighborhood and permit detail is on the{' '}
                        <Link href="/service-areas/jackson">Jackson delivery page</Link>. For demolition
                        work specifically, see{' '}
                        <Link href="/services/demolition-dumpster-rental">demolition dumpster rental</Link>.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection} style={{ background: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2>Construction Dumpster FAQ &mdash; Jackson</h2>
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
                    <h2>Set Up a Container for Your Jackson Job</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Ask about contractor pricing while you are on the phone.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <TrackedPhoneLink location="Jackson Construction CTA" className="btn btn-primary btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                        <BookingButton label="Book Online" location="Jackson Construction CTA" />
                    </div>
                </div>
            </section>
        </>
    )
}
