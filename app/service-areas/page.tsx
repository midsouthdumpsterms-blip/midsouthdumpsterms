import { Metadata } from 'next'
import { generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from './service-areas.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import BookingButton from '@/components/BookingButton'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-areas' },
    title: 'Dumpster Rental Near Me | Central MS Cities',
    description:
        'Same-day roll-off dumpster delivery across Hinds, Madison and Rankin counties, from Jackson and Brandon to Flora and Terry. Flat rates from $349.',
    openGraph: {
        title: 'Dumpster Rental Near Me | Mid South Dumpster Rentals',
        description: 'Same-day roll off dumpster rentals across Hinds, Madison & Rankin Counties in Central MS. From $349.',
        url: 'https://midsouthdumpsterms.com/service-areas',
    },
}

const COUNTIES = [
    {
        name: 'Hinds County',
        href: '/service-areas/hinds-county',
        blurb: 'Jackson, Clinton, Byram, Terry, Raymond and Bolton',
        cities: [
            { city: 'Jackson', zips: '39201–39216', note: 'Our home base. Belhaven, Fondren, Northeast and South Jackson, plus downtown commercial work.' },
            { city: 'Clinton', zips: '39056', note: 'Roof tear-offs and garage cleanouts around Mississippi College and the older subdivisions.' },
            { city: 'Byram', zips: '39272', note: 'Siwell Road and Lake Dockery — residential cleanouts and yard debris south of Jackson.' },
            { city: 'Terry', zips: '39170', note: 'Rural south Hinds. Outbuilding demolition, land clearing and property cleanouts.' },
            { city: 'Raymond', zips: '39154', note: 'Hinds Community College area and the rural western half of the county.' },
            { city: 'Bolton', zips: '39041', note: 'Small-town Hinds County along the I-20 corridor. Delivery on request.' },
        ],
    },
    {
        name: 'Madison County',
        href: '/service-areas/madison-county',
        blurb: 'Madison, Ridgeland, Canton, Gluckstadt and Flora',
        cities: [
            { city: 'Madison', zips: '39110', note: 'Reunion, Lake Caroline and Annandale. Mostly remodels and landscaping debris.' },
            { city: 'Ridgeland', zips: '39157', note: 'Highland Colony and Bridgewater, plus retail and office build-outs near County Line Road.' },
            { city: 'Canton', zips: '39046', note: 'Historic-district renovations and municipal cleanup projects.' },
            { city: 'Gluckstadt', zips: '39110', note: 'One of the fastest-growing parts of the metro — heavy new-construction debris.' },
            { city: 'Flora', zips: '39071', note: 'Acreage cleanups, brush piles and shed removals north-west of the metro.' },
        ],
    },
    {
        name: 'Rankin County',
        href: '/service-areas/rankin-county',
        blurb: 'Brandon, Pearl, Flowood, Richland, Florence and Pelahatchie',
        cities: [
            { city: 'Brandon', zips: '39042, 39047', note: 'Crossgates, Castlewoods and the Reservoir. New construction and storm debris.' },
            { city: 'Pearl', zips: '39208', note: 'Westside, Parkbridge and the Airport Road commercial corridor.' },
            { city: 'Flowood', zips: '39232', note: 'Medical-office and retail renovation work along Lakeland Drive.' },
            { city: 'Richland', zips: '39218', note: 'Light industrial and residential debris along the Highway 49 corridor.' },
            { city: 'Florence', zips: '39073', note: 'Land clearing, barn tear-downs and rural property cleanups.' },
            { city: 'Pelahatchie', zips: '39145', note: 'Eastern Rankin County near the Reservoir. Delivery on request.' },
        ],
    },
]

export default function ServiceAreas() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Dumpster Rental Service Areas in Central Mississippi</h1>
                    <p className={styles.heroSubtext}>
                        Same-day roll-off delivery across Hinds, Madison and Rankin counties — 17 cities, seven days a week
                    </p>
                </div>
            </section>

            <section>
                <div className="container container-narrow">
                    <h2>Where We Deliver</h2>
                    <p style={{ color: 'var(--color-gray-600)' }}>
                        We run the Jackson metro and the tri-county area around it. Our yard is on John R Lynch Street in
                        west Jackson, which puts most of our service area inside a 30-minute drive — that is the reason we
                        can commit to same-day delivery when you call before noon, and the reason our pricing does not
                        change from one town to the next.
                    </p>
                    <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                        Every city gets the same flat rate: <strong>$349 for a 10-yard</strong>,{' '}
                        <strong>$399 for a 15-yard</strong>, and <strong>$449 for a 20-yard</strong> on a one-day rental,
                        with delivery, pickup and disposal included. There is no separate fuel surcharge, no
                        environmental fee, and no distance-based pricing inside the counties listed below. Compare all
                        three sizes on our <Link href="/sizes">dumpster sizes page</Link>, or see the full breakdown on
                        the <Link href="/services">pricing page</Link>.
                    </p>
                    <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                        Outside these counties? Call anyway. We take jobs in surrounding towns case by case, depending on
                        the day and the load.
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0', backgroundColor: 'var(--color-gray-50)' }}>
                <div className="container">
                    <h2 className="text-center">Browse by County</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        Each county page lists every city we serve in that area, with local permit notes.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>
                        {COUNTIES.map((county) => (
                            <Link key={county.name} href={county.href} className={styles.areaCard}>
                                <h3>{county.name}</h3>
                                <p>{county.blurb}</p>
                                <span className={styles.learnMore}>View All Cities →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {COUNTIES.map((county) => (
                <section key={county.name}>
                    <div className="container">
                        <h2>
                            <Link href={county.href}>{county.name}</Link>
                        </h2>
                        <div className={styles.grid}>
                            {county.cities.map((area) => (
                                <Link
                                    key={area.city}
                                    href={`/service-areas/${area.city.toLowerCase()}`}
                                    className={styles.areaCard}
                                >
                                    <h3>Dumpster Rental {area.city}, MS</h3>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)', margin: '0 0 0.4rem' }}>
                                        ZIP {area.zips}
                                    </p>
                                    <p>{area.note}</p>
                                    <span className={styles.learnMore}>See {area.city} pricing →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            <section style={{ backgroundColor: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container container-narrow">
                    <h2>What to Expect on Delivery Day</h2>
                    <p style={{ color: 'var(--color-gray-600)' }}>
                        You do not need to be home. Tell us where the container goes — driveway, side yard, job site — and
                        we will place it there. A roll-off truck needs a long, straight run to set a container down and
                        overhead clearance to raise the bed, so if your driveway is tight, gated, or has low branches or
                        power lines over it, mention that when you book and we will work out the placement in advance.
                    </p>
                    <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                        We put boards under the rails on request to protect asphalt and pavers. If the container has to sit
                        on a public street or right-of-way rather than private property, most Central Mississippi cities
                        require a permit — we cover which ones in our{' '}
                        <Link href="/blog/do-i-need-a-permit-dumpster-jackson-ms">dumpster permit guide</Link>.
                    </p>
                    <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                        When you are finished, call or book the pickup online. Overage above the included weight runs
                        $55 per ton on the 10 and 15-yard containers; the 20-yard has a hard 6,000 lb cap. Details are in
                        our <Link href="/blog/dumpster-weight-limits-jackson-ms">weight limits guide</Link>.
                    </p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Don&apos;t See Your City?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        We take jobs across Central Mississippi. Call and we will tell you straight away whether we can
                        get a container to you and when.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Service Areas CTA" />
                        <TrackedPhoneLink location="Service Areas CTA" className="btn btn-secondary btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
