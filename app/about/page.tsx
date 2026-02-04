import { Metadata } from 'next'
import { generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import styles from './about.module.css'

export const metadata: Metadata = {
    title: 'About Us | Mid South Dumpster Rentals',
    description:
        'Learn about Mid South Dumpster Rentals, your trusted local dumpster rental provider in Central Mississippi. Quality service, transparent pricing, and reliable delivery.',
}

export default function About() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'About', url: 'https://midsouthdumpsterms.com/about' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <section className={styles.heroSection}>
                <div className="container">
                    <h1>About Mid South Dumpster Rentals</h1>
                    <p className={styles.heroSubtext}>
                        Your trusted partner for dumpster rentals in Central Mississippi
                    </p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2>Who We Are</h2>
                            <p>
                                Mid South Dumpster Rentals, LLC is a locally-owned and operated dumpster rental company proudly serving Central Mississippi. We're dedicated to providing reliable, affordable, and convenient waste disposal solutions for residential, commercial, and construction projects of any size.
                            </p>
                            <p>
                                Our commitment is simple: deliver quality dumpsters on time, provide transparent pricing, and offer exceptional customer service. Whether you're a homeowner tackling a weekend project or a contractor managing a large construction site, we have the right solution for you.
                            </p>
                        </div>
                        <div className={styles.infoCard}>
                            <h3>Business Information</h3>
                            <div className={styles.infoItem}>
                                <strong>Address:</strong>
                                <p>3080 B John R Lynch St<br />Jackson, MS 39209</p>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>Phone:</strong>
                                <p><a href="tel:6013167891">601-316-7891</a></p>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>Hours:</strong>
                                <p>7AM - 7PM<br />7 Days a Week</p>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>Service Area:</strong>
                                <p>Central Mississippi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.valuesSection}>
                <div className="container">
                    <h2 className="text-center">Why Choose Us?</h2>
                    <div className="grid grid-3">
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🚛</div>
                            <h3>Fast Delivery</h3>
                            <p>Same-day delivery available. We work around your schedule, 7 days a week.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>💰</div>
                            <h3>Transparent Pricing</h3>
                            <p>No hidden fees. What you see is what you pay. Simple, honest pricing.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>⭐</div>
                            <h3>Quality Service</h3>
                            <p>Professional, courteous service from start to finish. Your satisfaction is our priority.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>📍</div>
                            <h3>Local Expertise</h3>
                            <p>We know Central Mississippi. Serving Jackson and surrounding communities.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>♻️</div>
                            <h3>Eco-Friendly</h3>
                            <p>Responsible waste disposal and recycling practices for a cleaner Mississippi.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🤝</div>
                            <h3>Reliable Partner</h3>
                            <p>Count on us for consistent service and dependable dumpster rentals.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Work With Us?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Experience the Mid South difference. Book your dumpster rental today.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--spacing-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                            Book Online
                        </a>
                        <a href="/contact" className="btn btn-outline btn-lg">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
