import { Metadata } from 'next'
import { generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from './service-areas.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

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

const serviceAreas = [
    { city: 'Jackson', state: 'MS', description: 'Comprehensive dumpster rental services in Mississippi\'s capital city' },
    { city: 'Brandon', state: 'MS', description: 'Reliable roll-off dumpster delivery throughout Brandon' },
    { city: 'Clinton', state: 'MS', description: 'Fast and affordable dumpster rentals in Clinton' },
    { city: 'Flowood', state: 'MS', description: 'Professional dumpster services for Flowood residents and businesses' },
    { city: 'Pearl', state: 'MS', description: 'Same-day dumpster rental delivery available in Pearl' },
    { city: 'Ridgeland', state: 'MS', description: 'Convenient dumpster rentals serving Ridgeland' },
    { city: 'Madison', state: 'MS', description: 'Top-rated dumpster rental service in Madison' },
    { city: 'Flora', state: 'MS', description: 'Affordable dumpster rentals for Flora area projects' },
    { city: 'Florence', state: 'MS', description: 'Reliable dumpster rental service for Florence and Rankin County' },
    { city: 'Pelahatchie', state: 'MS', description: 'Rankin County dumpster rental near the Ross Barnett Reservoir' },
    { city: 'Canton', state: 'MS', description: 'Expert dumpster rental services in Canton' },
    { city: 'Terry', state: 'MS', description: 'Quality dumpster rentals serving Terry and surrounding areas' },
    { city: 'Raymond', state: 'MS', description: 'Roll-off dumpster rental in Raymond and rural Hinds County' },
    { city: 'Bolton', state: 'MS', description: 'Historic Hinds County town — dumpster delivery along the I-20 corridor' },
    { city: 'Byram', state: 'MS', description: 'Professional waste disposal solutions in Byram' },
    { city: 'Richland', state: 'MS', description: 'Professional dumpster rentals for Richland neighborhoods' },
    { city: 'Gluckstadt', state: 'MS', description: 'Dependable dumpster rental service for Gluckstadt' },
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
                    <h1>Dumpster Rental Service Areas — Central Mississippi</h1>
                    <p className={styles.heroSubtext}>
                        Proudly serving Hinds, Madison & Rankin Counties with fast, same-day roll off dumpster rental
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0', backgroundColor: 'var(--color-gray-50)' }}>
                <div className="container">
                    <h2 className="text-center">Browse by County</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>Each county page lists every city we serve in that area.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>
                        {[
                            { name: 'Hinds County', href: '/service-areas/hinds-county', description: 'Jackson, Clinton, Byram, Terry, Raymond & more' },
                            { name: 'Madison County', href: '/service-areas/madison-county', description: 'Madison, Ridgeland, Canton, Gluckstadt, Flora & more' },
                            { name: 'Rankin County', href: '/service-areas/rankin-county', description: 'Brandon, Pearl, Flowood, Richland, Florence & more' },
                        ].map(({ name, href, description }) => (
                            <Link key={name} href={href} className={styles.areaCard}>
                                <h2>{name}</h2>
                                <p>{description}</p>
                                <span className={styles.learnMore}>View All Cities →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className={styles.grid}>
                        {serviceAreas.map((area) => (
                            <Link
                                key={area.city}
                                href={`/service-areas/${area.city.toLowerCase()}`}
                                className={styles.areaCard}
                            >
                                <h2>{area.city}, {area.state}</h2>
                                <p>{area.description}</p>
                                <span className={styles.learnMore}>
                                    Learn More →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Don't See Your City?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        We serve many areas throughout Central Mississippi. Call us to confirm availability in your area.
                    </p>
                    <TrackedPhoneLink location="Page CTA" className="btn btn-secondary btn-lg">
                        Call 601-316-7891
                    </TrackedPhoneLink>
                </div>
            </section>
        </>
    )
}
