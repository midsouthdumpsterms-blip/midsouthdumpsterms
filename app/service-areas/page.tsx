import { Metadata } from 'next'
import { generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from './service-areas.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: { absolute: 'Dumpster Rental Near Me | Jackson, Brandon, Madison MS' },
    description:
        'Same-day dumpster rentals in Jackson, Brandon, Clinton, Madison, Pearl, Ridgeland & more. 14 Central Mississippi cities served. From $349. Call 601-316-7891.',
    openGraph: {
        title: 'Dumpster Rental Near Me | Mid South Dumpster Rentals',
        description: 'Same-day dumpster rentals across 14 Central Mississippi cities. From $349.',
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
    { city: 'Canton', state: 'MS', description: 'Expert dumpster rental services in Canton' },
    { city: 'Terry', state: 'MS', description: 'Quality dumpster rentals serving Terry and surrounding areas' },
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
                    <h1>Our Service Areas</h1>
                    <p className={styles.heroSubtext}>
                        Proudly serving Central Mississippi with fast, reliable dumpster rental services
                    </p>
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
