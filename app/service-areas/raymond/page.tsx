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
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/raymond' },
    title: 'Dumpster Rental Raymond MS | Same-Day',
    description:
        'Roll-off dumpster rental in Raymond, MS from $349. 10, 15 and 20-yard containers, same-day delivery to Raymond and western Hinds County.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Raymond MS | Hinds County',
        description: 'Locally owned roll off dumpster rental serving Raymond & all of Hinds County. Same-day delivery, flat-rate pricing, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/service-areas/raymond',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

export default function RaymondPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Raymond, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects throughout Hinds County.',
        'Raymond',
        undefined,
        ['39154']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Raymond', url: 'https://midsouthdumpsterms.com/service-areas/raymond' },
    ])

    const faqs = [
        {
            question: 'How much does it cost to rent a roll off dumpster in Raymond, MS?',
            answer: 'Our roll off dumpster rentals in Raymond start at $349 for a 10-yard container for a 1-day rental. A 15-yard is $399, and a 20-yard is $449. This includes drop-off, pick-up, and a standard weight allowance (1 to 3 tons depending on size) with no hidden fees.',
        },
        {
            question: 'Do you deliver to rural properties around Raymond?',
            answer: 'Yes — Raymond is surrounded by rural Hinds County properties, and we serve them all. Whether you\'re in town on a residential lot or on a larger rural property along Dry Grove Road, Ratliff Road, or Ranger Road, we can deliver and pick up your roll off dumpster.',
        },
        {
            question: 'Do I need a permit to rent a dumpster in Raymond?',
            answer: 'You only need a permit if placing the dumpster on a public street in Raymond. If placed on private property or your driveway, no permit is required. Contact the Town of Raymond or Hinds County for specific regulations.',
        },
        {
            question: 'Which parts of Raymond do you cover?',
            answer: 'All of Raymond and the surrounding western Hinds County area at ZIP 39154 \u2014 the historic downtown and courthouse district, the Hinds Community College campus area, and the properties out toward the Battle of Raymond site. Student-rental turnovers around the college are a steady part of our work here, and those usually take a 15-yard. Prohibited items are listed on our FAQ page.',
        },
        {
            question: 'How quickly can you deliver a dumpster to Raymond, MS?',
            answer: 'We offer same-day and next-day roll off dumpster delivery in Raymond. Call us before noon at 601-316-7891 and we can typically deliver the same day, 7 days a week. Raymond is less than 30 minutes from our operating area.',
        },
    ]

    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Raymond, MS</h1>
                    <p className={styles.heroSubtext}>
                        Locally owned roll off dumpster rental serving Raymond and all of Hinds County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Raymond Dumpster" location="Raymond Service Area Hero" />
                        <TrackedPhoneLink location="Raymond Service Area Hero" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Raymond</h2>
                    <PriceSummary place="Raymond" />
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Choose Mid South for Raymond Dumpster Rental?</h2>
                            <p>We&apos;re a locally owned Central Mississippi company — not a national broker. We own our trucks and handle every delivery ourselves. Raymond residents and Hinds County contractors get fast, reliable roll off service backed by our 5-star Google reputation.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Raymond and all of Hinds County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup &amp; disposal included</li>
                                <li>✓ 10, 15, and 20-yard roll off dumpsters in stock</li>
                                <li>✓ Residential, commercial &amp; construction service</li>
                                <li>✓ Rural property delivery — no job too far out</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ Licensed &amp; insured</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Any Raymond Project</h2>
                            <p>Raymond&apos;s rural character means many projects involve large properties, older structures, and estate work. Whether you&apos;re clearing a farmstead, renovating a historic home near downtown, doing roofing work near <strong>Hinds Community College</strong>, or handling a <Link href="/blog/dumpster-rental-guide-for-home-renovations" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>full property cleanout</Link>, we have the right roll off dumpster for the job.</p>
                            <p><strong>Common roll off dumpster uses in Raymond, MS:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Estate and property cleanouts</li>
                                <li>Farm and outbuilding cleanouts</li>
                                <li>Construction and demolition debris</li>
                                <li>Yard waste and storm cleanup</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Roll Off Dumpster Rental Serving Raymond &amp; Hinds County</h2>
                    <p>
                        Raymond is one of Hinds County&apos;s two county seats and sits at the geographic heart of Central Mississippi — less than 30 minutes from Jackson. It&apos;s a small, historic town with a strong community, and it&apos;s one of the areas we&apos;re proud to serve. We provide fast roll off dumpster delivery throughout Raymond and all of Hinds County, including{' '}
                        <Link href="/service-areas/clinton" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Clinton</Link>,{' '}
                        <Link href="/service-areas/byram" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Byram</Link>,{' '}
                        <Link href="/service-areas/terry" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Terry</Link>, and{' '}
                        <Link href="/service-areas/jackson" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Jackson</Link>.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>Areas &amp; Communities We Serve Near Raymond, MS</h2>
                    <p>
                        Raymond doesn&apos;t have large subdivisions like a bigger city — it&apos;s defined by its <strong>historic downtown</strong>, the <strong>Hinds Community College campus</strong>, Civil War landmarks, and the rural residential areas spreading out along local roads. We deliver to all of it, including:
                    </p>
                    <ul className={styles.projectsList} style={{ marginBottom: '1.5rem' }}>
                        <li><strong>Downtown Raymond &amp; Historic Courthouse District</strong> — Greek Revival courthouse (1857), St. Marks Episcopal Church; commercial cleanouts &amp; historic home renovations (ZIP 39154)</li>
                        <li><strong>Hinds Community College (Raymond Campus)</strong> — Mississippi&apos;s largest community college at 501 E. Main St; institutional &amp; residential projects in the campus corridor</li>
                        <li><strong>Battle of Raymond Military Park area</strong> — Fourteenmile Creek battlefield corridor; rural residential properties around the historic site</li>
                        <li><strong>Magnolia Terrace &amp; Wyndalwood</strong> — Residential subdivisions in the Raymond area</li>
                        <li><strong>Whispering Pines &amp; Windsor Forest</strong> — Established residential communities with estate cleanout &amp; renovation activity</li>
                        <li><strong>Mayfair &amp; Willow Wood</strong> — Neighborhood residential areas near Raymond&apos;s core</li>
                        <li><strong>Appleridge &amp; Lakewood Drive</strong> — Residential corridors in the Raymond community</li>
                        <li><strong>Dry Grove Road corridor</strong> — Rural residential properties &amp; farm cleanouts north of Raymond</li>
                        <li><strong>Ratliff Road &amp; Ranger Road</strong> — Rural Hinds County roads; large lot &amp; farmstead cleanouts</li>
                        <li><strong>Parsons Road &amp; surrounding rural properties</strong> — Deep rural delivery; older structures, estate &amp; land clearing projects</li>
                        <li><strong>Highway 18 corridor</strong> — Primary Raymond thoroughfare running through the historic battlefield zone</li>
                        <li><strong>Learned community &amp; rural Hinds County (ZIP 39154)</strong> — Surrounding unincorporated rural areas west of Raymond</li>
                    </ul>
                    <p>
                        Raymond&apos;s rural setting often means larger cleanout jobs — barn cleanouts, estate sales, older farmhouses — and our 15 and 20-yard dumpsters are ideal for that kind of work. <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">See our Google reviews</a> to hear from other Hinds County customers.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Planning a rental?</strong> Read our guide on <Link href="/blog/how-to-choose-dumpster-size">how to choose the right dumpster size</Link> for your project.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Raymond is located in <Link href="/service-areas/hinds-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Hinds County</Link> — see all Hinds County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Dumpster Delivery in Raymond — Local Notes</h2>
                    <p>Raymond is the Hinds County seat and home to the main Hinds Community College campus, which gives the town a mix you do not see elsewhere in the county: historic properties around the courthouse square, a steady rhythm of rental turnovers driven by the academic calendar, and rural acreage spreading out west of town.</p>
                    <p>The rental turnover work has its own timing. Landlords clearing units between tenants generally need a container fast and only for a day or two, and they need it gone before the next move-in. Tell us the deadline when you book and we will schedule the pickup around it rather than leaving it to a standard rental window.</p>
                    <p>Older properties near the square can throw up the same problem as any historic area — plaster, lath and old tile weigh far more than modern renovation debris, so size by weight rather than by how full the container looks. Delivery from our yard runs out Highway 18 or I-20 and is comfortably inside same-day range.</p>
                    <p><strong>What we most often haul out of Raymond:</strong></p>
                    <ul className={styles.projectsList}>
                        <li>Rental and student-housing turnovers</li>
                        <li>Historic property renovation debris</li>
                        <li>Rural acreage and estate cleanouts</li>
                        <li>Yard waste, brush and storm debris</li>
                    </ul>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>The College Changes What Raymond Needs</h2>
                    <p>
                        Raymond has fewer than 2,000 residents on paper, but Hinds Community College sits
                        here and enrols several times that number on the Raymond campus. That single fact
                        shapes most of what we haul out of town.
                    </p>
                    <p>
                        It means a rental market far larger than the population suggests, and it means the
                        work is seasonal in a way it is not anywhere else we serve. Turnovers cluster
                        around the end of terms &mdash; a landlord clearing a student let has days, not
                        weeks, and usually wants a 15-yard on the drive and gone again inside three. If you
                        manage property near the campus corridor, book the container when you book the
                        cleaners rather than after they finish.
                    </p>

                    <h2>The Rest of Raymond Is Rural</h2>
                    <p>
                        Away from the campus and the courthouse, Raymond is farmland and large lots, and
                        the jobs change completely: farmstead clearances, outbuilding tear-downs, land
                        clearing and estate work on properties that have been in the same family for
                        generations.
                    </p>
                    <ul className={styles.projectsList}>
                        <li>
                            <strong>Downtown and the historic courthouse district.</strong> Older
                            commercial stock and period homes on tighter lots. Deep-set drives and mature
                            trees mean overhead clearance decides the container size more often than width
                            does.
                        </li>
                        <li>
                            <strong>Dry Grove Road, Ratliff Road and Ranger Road.</strong> Rural
                            residential and farm properties. Long approaches are fine; what matters is
                            whether a loaded truck can turn around, and whether the ground holds after rain.
                        </li>
                        <li>
                            <strong>Parsons Road and the deeper rural addresses.</strong> Older structures
                            and land-clearing work. Tell us on the call if there is a cattle gate, a
                            low-hanging limb run, or a bridge or culvert on the approach.
                        </li>
                        <li>
                            <strong>Appleridge and Lakewood Drive.</strong> Conventional residential
                            placement on standard driveways.
                        </li>
                    </ul>

                    <h2>Permits and Sizing</h2>
                    <p>
                        On private property &mdash; which is nearly every Raymond delivery &mdash; no
                        permit applies. For a public street or right-of-way, contact the City of Raymond
                        first; it is not a same-day path.
                    </p>
                    <p>
                        For farmstead and estate work see{' '}
                        <Link href="/services/estate-cleanout-dumpster-rental">estate cleanout dumpster rental</Link>,
                        for outbuilding tear-downs see{' '}
                        <Link href="/services/demolition-dumpster-rental">demolition dumpster rental</Link>, or{' '}
                        <Link href="/sizes">compare all three container sizes</Link>.
                    </p>
                </div>
            </section>

            <FaqSection faqs={faqs} title="Frequently Asked Questions: Raymond Dumpster Rentals" background />
            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)', maxHeight: '480px' }}>
                        <Image
                            src="/images/gallery/same-day-dumpster-rental-raymond.jpg"
                            alt="Mid South Dumpster Rentals same-day roll-off container delivery in Raymond, Mississippi (Hinds County) — serving Hinds Community College, historic downtown &amp; surrounding rural communities"
                            width={760}
                            height={480}
                            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        Mid South Dumpster Rentals in Raymond, MS (Hinds County) — same-day roll-off service near Hinds Community College, Battle of Raymond &amp; surrounding rural properties.
                    </p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Raymond?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now" location="Raymond Service Area CTA" />
                        <TrackedPhoneLink location="Raymond Service Area CTA" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
