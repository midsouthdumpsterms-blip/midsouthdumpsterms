import { Metadata } from 'next'
import Link from 'next/link'
import styles from './service-areas.module.css'

export const metadata: Metadata = {
    title: 'Service Areas | Central Mississippi Dumpster Rental Coverage',
    description:
        'Mid South Dumpster Rentals serves Jackson, Brandon, Clinton, Flowood, Pearl, Ridgeland, Madison, Flora, Canton, Terry, Byram, Gluckstadt, and surrounding Central Mississippi areas.',
    openGraph: {
        title: 'Service Areas | Mid South Dumpster Rentals',
        description: 'Dumpster rental service coverage across Central Mississippi.',
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
    { city: 'Canton', state: 'MS', description: 'Expert dumpster rental services in Canton' },
    { city: 'Terry', state: 'MS', description: 'Quality dumpster rentals serving Terry and surrounding areas' },
    { city: 'Byram', state: 'MS', description: 'Professional waste disposal solutions in Byram' },
    { city: 'Gluckstadt', state: 'MS', description: 'Dependable dumpster rental service for Gluckstadt' },
]

export default function ServiceAreas() {
    return (
        <>
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
                    <a href="tel:6013167891" className="btn btn-secondary btn-lg">
                        Call 601-316-7891
                    </a>
                </div>
            </section>
        </>
    )
}
