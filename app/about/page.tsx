import { Metadata } from 'next'
import BookingButton from '@/components/BookingButton'
import { generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import styles from './about.module.css'

export const metadata: Metadata = {
    title: 'About Mid South Dumpster Rentals | Jackson, MS Local Dumpster Company',
    description:
        'Mid South Dumpster Rentals is a locally-owned, licensed & insured dumpster rental company in Jackson, MS. Serving the entire Central Mississippi tri-county area (Hinds, Madison, Rankin) with 10, 15, and 20-yard roll-off dumpsters. Same-day delivery 7 days a week.',
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
                                Mid South Dumpster Rentals, LLC is a locally-owned and operated dumpster rental company proudly serving Central Mississippi. We&apos;re a family-owned business dedicated to providing reliable, affordable, and convenient waste disposal solutions for residential, commercial, and construction projects of any size.
                            </p>
                            <p>
                                We serve the entire tri-county area — Hinds County (Jackson, Clinton, Terry, Byram), Madison County (Madison, Ridgeland, Canton, Flora, Gluckstadt), and Rankin County (Brandon, Flowood, Pearl, Florence, Richland) — 7 days a week with same-day delivery available when you call before noon.
                            </p>
                            <p>
                                Our commitment is simple: deliver quality dumpsters on time, provide transparent flat-rate pricing with no hidden fees, and offer exceptional customer service. Whether you&apos;re a homeowner tackling a weekend project or a contractor managing a large construction site, we have the right solution for you.
                            </p>
                            <hr style={{ margin: 'var(--spacing-xl) 0', border: 'none', borderTop: '2px dashed var(--color-gray-200)' }} />
                            <h2>About the Founder</h2>
                            <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                                <div style={{ flex: '1 1 300px' }}>
                                    <p>
                                        Mid South Dumpster Rentals is locally owned and operated by Andrew Tyre. For over 7 years, Andrew has been deeply entrenched in the Mississippi real estate market, working as a real estate professional and developer in the Jackson metro area.
                                    </p>
                                    <p>
                                        Having managed numerous renovations, flips, and new construction sites himself, Andrew knows firsthand how critical a reliable, transparent, and prompt dumpster rental service can be to keeping a job on schedule. He founded Mid South Dumpster Rentals to solve the exact problems he was facing as a contractor—hidden fees, delayed pickups, and poor communication.
                                    </p>
                                    <p>
                                        When you book a dumpster with us, you aren&apos;t dealing with a faceless national call center or an anonymous broker. You are dealing with a local business owner who understands your project deadlines, values your property, and works 7 days a week to ensure your job site stays clean and moving forward.
                                    </p>
                                </div>
                                <div style={{ flex: '0 0 250px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', margin: '0 auto' }}>
                                    {/* Placeholder for Andrew Tyre's photo */}
                                    <img src="/images/andrew-tyre.png" alt="Andrew Tyre, Founder of Mid South Dumpster Rentals" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                </div>
                            </div>
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
                                <p>7AM – 7PM<br />7 Days a Week</p>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>Service Area:</strong>
                                <p>Hinds, Madison &amp; Rankin Counties<br />(Central Mississippi tri-county area)</p>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>Licensed &amp; Insured:</strong>
                                <p>Fully licensed and insured for your protection</p>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>Google Rating:</strong>
                                <p>⭐ 5.0 stars</p>
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
                        <BookingButton label="Book Now" location="About Page CTA" />
                        <a href="/contact" className="btn btn-outline btn-lg">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
