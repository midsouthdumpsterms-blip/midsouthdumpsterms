import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import PriceSummary from '@/components/PriceSummary'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas/jackson' },
    // The homepage owns "dumpster rental Jackson MS". This page had a nearly
    // identical title and was splitting the 10,648 impressions that query
    // carries. It now targets the intent the homepage cannot serve: which
    // neighborhood, which driveway, which permit.
    title: 'Jackson MS Dumpster Delivery by Neighborhood',
    description:
        'Where we drop roll-offs in Jackson: Belhaven, Fondren, Eastover, South and West Jackson. Driveway clearances, permits and same-day delivery windows.',
    openGraph: {
        title: 'Dumpster Delivery Across Jackson, MS',
        description: 'Neighborhood-by-neighborhood delivery, driveway clearances and City of Jackson permit rules for roll-off dumpsters.',
        url: 'https://midsouthdumpsterms.com/service-areas/jackson',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

export default function JacksonPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Roll-off dumpster delivery throughout Jackson, Mississippi. 10, 15 and 20-yard containers placed on driveways, yards and job sites across every Jackson neighborhood.',
        'Jackson',
        undefined,
        ['39201', '39202', '39203', '39204', '39206', '39209', '39211', '39212', '39213', '39216', '39217']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Jackson', url: 'https://midsouthdumpsterms.com/service-areas/jackson' },
    ])

    const faqs = [
        {
            question: 'Do I need a permit to put a dumpster at my house in Jackson, MS?',
            answer: 'Not if it sits on your own driveway or yard. That is private property and no permit applies. You only need one if the container has to go on a public street or right-of-way, which the City of Jackson requires a permit for. Contact the city before you book if the street is your only option, and confirm current requirements and lead time with them directly — it is not a same-day process.',
        },
        {
            question: 'How much clearance do you need to deliver in Jackson?',
            answer: 'Roughly 60 feet of straight approach to roll the container off behind the truck, about 10 feet of width, and around 23 feet of vertical clearance because the truck bed lifts high during the drop. In Jackson the vertical measurement is what catches people out — the oak canopy over driveways in Belhaven, Fondren and parts of Northeast Jackson is lower than it looks.',
        },
        {
            question: 'Which Jackson neighborhoods do you deliver to?',
            answer: 'All of them, across every Jackson ZIP from 39201 to 39217. Our yard is on John R Lynch Street in West Jackson, so downtown, Belhaven, Fondren, Midtown and West Jackson are typically a short run. Northeast Jackson, Eastover and the County Line Road corridor take a little longer in traffic but are same-day when you call in the morning.',
        },
        {
            question: 'Can you deliver a dumpster to Jackson the same day?',
            answer: 'Usually, if you call before noon. We run 7AM to 7PM seven days a week and there is no rush fee — same-day costs exactly what a scheduled delivery costs. After about 2PM we will normally book you first thing the next morning rather than promise something we cannot deliver.',
        },
        {
            question: 'What size dumpster do most Jackson homeowners rent?',
            answer: 'The 15-yard. It handles a multi-room cleanout, a bathroom or small kitchen remodel, or a single-layer roof tear-off without the weight risk of a 10-yard, and it still fits a standard two-car driveway. The 10-yard suits a garage or attic clearance; the 20-yard is for whole-house cleanouts and larger remodels.',
        },
    ]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(generateFAQSchema(faqs)) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Dumpster Delivery Across Jackson, MS</h1>
                    <p className={styles.heroSubtext}>
                        We are based in West Jackson and deliver to every Jackson ZIP code. This page covers
                        what actually decides a delivery here &mdash; the driveway, the tree canopy and the
                        permit.
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Jackson Dumpster" location="Jackson Service Area Hero" />
                        <TrackedPhoneLink location="Jackson Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>Our Yard Is in Jackson</h2>
                    <p>
                        Mid South Dumpster Rentals operates out of 3080 B John R Lynch Street, in West
                        Jackson. That matters more than it sounds. Most companies advertising dumpster
                        rental in Jackson are national brands routing calls through an out-of-state booking
                        center and subcontracting the haul to whichever local operator has a truck free.
                        It is why they quote lead times in days and cannot tell you when a driver will
                        arrive.
                    </p>
                    <p>
                        We own the trucks and we dispatch them from inside the city. When you call, you are
                        talking to the people who decide where those trucks go next &mdash; which is the
                        only reason same-day delivery is possible at all.
                    </p>

                    <h2>Typical Delivery Windows by Area</h2>
                    <p>
                        These are drive times from our West Jackson yard under normal traffic, not
                        guarantees. Call before noon and any of them is comfortably same-day.
                    </p>
                    <div className={styles.tableWrap}>
                        <table className={styles.dataTable}>
                            <thead>
                                <tr>
                                    <th>Area</th>
                                    <th>ZIP</th>
                                    <th>Typical run from our yard</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>West Jackson, downtown, Capitol district</td><td>39203, 39209, 39201</td><td>Under 15 minutes</td></tr>
                                <tr><td>Belhaven, Midtown, Fondren</td><td>39202, 39216</td><td>15&ndash;20 minutes</td></tr>
                                <tr><td>South Jackson, Alta Woods, Forest Hill</td><td>39204, 39212</td><td>15&ndash;25 minutes</td></tr>
                                <tr><td>Northeast Jackson, Eastover, Ridgewood</td><td>39211, 39206</td><td>20&ndash;30 minutes</td></tr>
                                <tr><td>North Jackson, Tougaloo, County Line corridor</td><td>39213</td><td>25&ndash;35 minutes</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection} style={{ background: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2>What We Deliver in Jackson</h2>
                    <p>
                        Each of these has its own page with sizing, pricing and the logistics specific to
                        that kind of job in Jackson:
                    </p>
                    <ul className={styles.projectsList}>
                        <li>
                            <Link href="/service-areas/jackson/same-day-dumpster-rental"><strong>Same-day dumpster rental</strong></Link>{' '}
                            &mdash; cutoff times by hour, and the four things that actually stop a same-day drop
                        </li>
                        <li>
                            <Link href="/service-areas/jackson/roll-off-dumpster-rental"><strong>Roll-off dumpster rental</strong></Link>{' '}
                            &mdash; clearance requirements, driveway protection, roll-off versus front-load
                        </li>
                        <li>
                            <Link href="/service-areas/jackson/residential-dumpster-rental"><strong>Residential dumpster rental</strong></Link>{' '}
                            &mdash; sizing by what you are clearing, and the household items we cannot take
                        </li>
                        <li>
                            <Link href="/service-areas/jackson/construction-dumpster-rental"><strong>Construction dumpster rental</strong></Link>{' '}
                            &mdash; same-day swap-outs, job-site sizing, contractor pricing
                        </li>
                        <li>
                            <Link href="/service-areas/jackson/commercial-dumpster-rental"><strong>Commercial dumpster rental</strong></Link>{' '}
                            &mdash; lot placement obstacles, tenant turnovers, property managers
                        </li>
                    </ul>
                    <p>
                        Also common in Jackson:{' '}
                        <Link href="/services/roofing-dumpster-rental">roofing tear-offs</Link>,{' '}
                        <Link href="/services/estate-cleanout-dumpster-rental">estate cleanouts</Link>,{' '}
                        <Link href="/services/storm-cleanup-dumpster-rental">storm cleanup</Link> and{' '}
                        <Link href="/services/yard-waste-dumpster-rental">yard waste removal</Link>.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container container-narrow">
                    <h2>Placement: What Jackson Streets Actually Do to a Delivery</h2>
                    <p>
                        Jackson&rsquo;s housing stock ranges from 1900s cottages on narrow lots to
                        post-war ranches with long drives, and the placement problem changes completely
                        between them. This is the part no national booking center can tell you.
                    </p>

                    <h3>Belhaven, Belhaven Heights and Fondren</h3>
                    <p>
                        The constraint here is almost never width &mdash; it is the oak canopy. These are
                        Jackson&rsquo;s oldest tree-lined streets and the mature oaks over the driveways sit
                        well below the roughly 23 feet we need to raise the truck bed and complete a drop.
                        Setbacks are short too, so the container often has to sit close to the street.
                    </p>
                    <p>
                        In practice a 10 or 15-yard places in Belhaven and Fondren where a 20-yard will
                        not. If you are unsure, stand at the curb, photograph the driveway looking toward
                        the house, and text it to{' '}
                        <TrackedPhoneLink location="Jackson Placement Section">601-316-7891</TrackedPhoneLink>.
                        We would far rather look first than send a truck that has to turn around.
                    </p>

                    <h3>Northeast Jackson, Eastover and Ridgewood</h3>
                    <p>
                        Long drives and plenty of room, so placement is rarely the issue. Access is.
                        A good share of these properties are gated, and the single most common reason a
                        Northeast Jackson delivery fails is a locked gate with nobody on site and no code
                        on the order. Give us the code when you book.
                    </p>

                    <h3>Downtown and the Capitol District</h3>
                    <p>
                        Frequently there is no private ground at all, which means the container goes on the
                        street and the City of Jackson permit applies. Plan several days ahead. Loading
                        zones, one-way sections around the Capitol and limited curb space also mean we may
                        need to scout the address before committing to a delivery window.
                    </p>

                    <h3>South and West Jackson</h3>
                    <p>
                        Generally the easiest placements in the city. Wider lots, straighter drives and
                        better approach angles, and we are already close by. If you have a choice of where
                        to put the container on the property, put it on the drive rather than the lawn
                        &mdash; Jackson gets sudden heavy rain and a loaded container on soft ground leaves
                        ruts that are far more trouble than a scuff on concrete.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection} style={{ background: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2>City of Jackson Permits, in Plain Terms</h2>
                    <p>
                        The rule is simpler than most people expect, and it turns on one question: whose
                        ground is the container standing on?
                    </p>
                    <ul className={styles.projectsList}>
                        <li>
                            <strong>On your driveway, yard or private lot &mdash; no permit.</strong> This
                            covers the overwhelming majority of Jackson deliveries. Nothing to file, no
                            waiting.
                        </li>
                        <li>
                            <strong>On a public street or right-of-way &mdash; permit required.</strong> The
                            City of Jackson has to authorize anything occupying the public right-of-way.
                            Contact the city directly to confirm the current process, cost and lead time
                            before you book the container, because requirements change and we cannot file
                            it on your behalf.
                        </li>
                    </ul>
                    <p>
                        Two practical notes. First, this is not a same-day path &mdash; if the street is
                        your only option, start the permit before you start the project. Second, if you are
                        in a neighborhood with an HOA, check their rules as well; an HOA restriction is
                        separate from and additional to city permission.
                    </p>
                    <p>
                        More on permit timing and rules across Central Mississippi is in{' '}
                        <Link href="/blog/do-i-need-a-permit-dumpster-jackson-ms">do I need a permit for a dumpster in Jackson</Link>.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes and Pricing in Jackson</h2>
                    <PriceSummary place="Jackson" />
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Neighborhoods and ZIP Codes We Cover</h2>
                    <p>
                        Jackson is Mississippi&rsquo;s largest city and our home base. We deliver roll-off
                        dumpsters across all of it:
                    </p>
                    <ul className={styles.projectsList} style={{ marginBottom: '1.5rem' }}>
                        <li><strong>Belhaven &amp; Belhaven Heights</strong> &mdash; historic 1900s homes near Belhaven University and the Eudora Welty House (39202)</li>
                        <li><strong>Fondren</strong> &mdash; arts district, older housing stock, dense renovation and cleanout activity (39216)</li>
                        <li><strong>Midtown</strong> &mdash; near Millsaps College and the medical corridor; active renovation area (39202)</li>
                        <li><strong>Eastover &amp; Ridgewood</strong> &mdash; established Northeast Jackson; estate cleanouts and remodels (39211)</li>
                        <li><strong>North Jackson</strong> &mdash; Old Canton Road, Ridgewood Road and the County Line Road corridor (39211)</li>
                        <li><strong>South Jackson</strong> &mdash; McDowell Road and the Highway 18 corridor (39204)</li>
                        <li><strong>West Jackson</strong> &mdash; Lynch Street and Capitol Street corridors, where our yard is (39209)</li>
                        <li><strong>Downtown Jackson</strong> &mdash; Capitol District, Farish Street, State Street and Amite Street (39201)</li>
                        <li><strong>Northeast Jackson</strong> &mdash; Sherwood and Forest Hill near Lakeland Drive and Spillway Road (39206)</li>
                        <li><strong>Tougaloo &amp; the North Jackson border</strong> &mdash; near Tougaloo College and County Line Road (39213)</li>
                        <li><strong>Alta Woods, Presidential Hills &amp; Forest Hill</strong> &mdash; southeast Jackson (39212)</li>
                        <li><strong>Northpointe, Cedar Hills &amp; Pear Orchard</strong> &mdash; northwest Jackson (39213)</li>
                    </ul>
                    <p>
                        We also cover the commercial and institutional corridors &mdash; the{' '}
                        <strong>University of Mississippi Medical Center</strong> area, the{' '}
                        <strong>Metrocenter</strong> district, and properties along <strong>I-55</strong>,{' '}
                        <strong>I-20</strong> and <strong>Highway 80</strong>.{' '}
                        <a href="https://maps.app.goo.gl/kHUeHwhx8FYcUqDfA" target="_blank" rel="noopener noreferrer">
                            Read our Google reviews
                        </a>{' '}
                        to hear from other Jackson customers.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Jackson sits in{' '}
                        <Link href="/service-areas/hinds-county">Hinds County</Link> &mdash; see every
                        Hinds County city we serve, or browse{' '}
                        <Link href="/service-areas">all service areas</Link>.
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '760px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
                        <Image
                            src="/images/gallery/dumpster-rental-jackson-ms-delivery.jpg"
                            alt="Mid South Dumpster Rentals roll-off container on delivery in Jackson, Mississippi — serving Hinds County residential and commercial customers"
                            width={760}
                            height={480}
                            sizes="(max-width: 800px) 100vw, 760px"
                            style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                        A delivery in Jackson, MS &mdash; same-day roll-off service available seven days a week.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container container-narrow">
                    <h2 className="text-center">Jackson Dumpster Rental FAQ</h2>
                    {faqs.map((faq) => (
                        <div key={faq.question} className={styles.faqItem} style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Jackson?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online or call 601-316-7891 for same-day service.
                    </p>
                    <BookingButton label="Book Now" location="Jackson Service Area CTA" />
                </div>
            </section>
        </>
    )
}
