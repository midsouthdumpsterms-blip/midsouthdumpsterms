import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import styles from '../services.module.css'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/services/same-day-dumpster-rental' },
    title: 'Same-Day Dumpster Rental Jackson MS',
    description:
        'Need a dumpster today in Central Mississippi? Call before noon, seven days a week, and we deliver the same day. Flat rates from $349.',
    openGraph: {
        title: 'Same-Day Dumpster Rental Jackson MS',
        description: 'Same-day roll-off dumpster delivery in Central MS — call before noon. 10, 15 & 20-yard containers. 7 days a week.',
        url: 'https://midsouthdumpsterms.com/services/same-day-dumpster-rental',
    },
}

export default function SameDayDumpsterRentalPage() {
    const serviceSchema = generateServiceSchema(
        'Same-Day Dumpster Rental',
        'Same-day roll-off dumpster rental in Central Mississippi. Call before noon for same-day delivery across Jackson, Brandon, Madison, and surrounding areas.',
        'Central Mississippi',
        [
            { price: '349', description: '10 Yard Dumpster - 1 Day Rental (Includes 1 ton)' },
            { price: '399', description: '15 Yard Dumpster - 1 Day Rental (Includes 2 tons)' },
            { price: '449', description: '20 Yard Dumpster - 1 Day Rental (Includes 3 tons)' },
        ]
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Services', url: 'https://midsouthdumpsterms.com/services' },
        { name: 'Same-Day Dumpster Rental', url: 'https://midsouthdumpsterms.com/services/same-day-dumpster-rental' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Same-Day Dumpster Rental in Central Mississippi</h1>
                    <p className={styles.heroSubtext}>
                        Need a dumpster today? Call Mid South Dumpster Rentals — we offer same-day roll-off delivery across Jackson, Brandon, Madison, and surrounding Central MS cities
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        <TrackedPhoneLink location="Same-Day Hero" className="btn btn-primary btn-lg">
                            Call Now for Same-Day
                        </TrackedPhoneLink>
                        <BookingButton label="Book Online" location="Same-Day Hero" />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div style={{ background: 'var(--color-primary)', color: 'white', borderRadius: 'var(--radius-xl)', padding: '2rem', textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ color: 'white', marginBottom: '0.5rem' }}>⚡ Same-Day Delivery Available</h2>
                        <p style={{ fontSize: '1.2rem', margin: 0, opacity: 0.9 }}>
                            Call <strong>601-316-7891</strong> by noon — we'll deliver your dumpster the same day
                        </p>
                        <p style={{ margin: '0.5rem 0 0', opacity: 0.8 }}>7 days a week · 7AM – 7PM · All of Central Mississippi</p>
                    </div>

                    <h2 className="text-center">When You Need It Now</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-2xl)', fontSize: '1.125rem' }}>
                        Projects don't always come with advance notice. We get it — and we're built for that.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { icon: '⛈️', title: 'Storm Aftermath', desc: 'A storm blew through last night and you need debris cleared today. We can make that happen.' },
                            { icon: '📦', title: 'Unexpected Cleanout', desc: 'Family situation, estate, or sudden move — when cleanup can\'t wait, neither can we.' },
                            { icon: '🔨', title: 'Contractor Turnaround', desc: 'Job site ahead of schedule and ready for debris removal sooner than expected? Call us.' },
                            { icon: '🏚️', title: 'Rental Property Turnover', desc: 'Previous tenant left a mess and you need the unit cleared fast? Same-day delivery available.' },
                        ].map((item) => (
                            <div key={item.title} style={{ background: 'var(--color-gray-50)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Same-Day Dumpster Sizes</h2>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard size="10" capacity="4 Pickup Truck Loads" weight="1 Ton Included" pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }} idealFor={['Quick Cleanouts', 'Small Debris', 'Yard Waste', 'Minor Projects']} />
                        <DumpsterSizeCard size="15" capacity="6 Pickup Truck Loads" weight="2 Tons Included" pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }} idealFor={['Medium Cleanouts', 'Roofing Debris', 'Storm Cleanup', 'Renovation Debris']} popular />
                        <DumpsterSizeCard size="20" capacity="8 Pickup Truck Loads" weight="3 Tons Included" pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }} idealFor={['Large Cleanouts', 'Construction Debris', 'Full-Home Cleanouts', 'Commercial Use']} />
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>How to Get Same-Day Service</h2>
                            <ol style={{ paddingLeft: '1.5rem', lineHeight: 2.4, color: 'var(--color-gray-700)', fontSize: '1.05rem' }}>
                                <li>Call <strong>601-316-7891</strong> before noon</li>
                                <li>Tell us your address and what you need</li>
                                <li>We confirm availability and a delivery window</li>
                                <li>We deliver your dumpster same day</li>
                                <li>Load at your pace and we pick it up</li>
                            </ol>
                            <p style={{ marginTop: '1rem', color: 'var(--color-gray-500)', fontSize: '0.9rem' }}>
                                Same-day availability is subject to current route capacity. Call early to secure your spot.
                            </p>
                        </div>
                        <div>
                            <h2>Service Area for Same-Day Delivery</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                We offer same-day dumpster delivery throughout Central Mississippi, including:
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                                {['Jackson', 'Brandon', 'Madison', 'Clinton', 'Pearl', 'Ridgeland', 'Flowood', 'Byram', 'Richland', 'Florence', 'Canton', 'Terry', 'Flora', 'Gluckstadt'].map((city) => (
                                    <Link
                                        key={city}
                                        href={`/service-areas/${city.toLowerCase()}`}
                                        style={{ background: 'white', border: '1px solid var(--color-gray-200)', padding: '0.3rem 0.75rem', borderRadius: '999px', fontSize: '0.85rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}
                                    >
                                        {city}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Need a Dumpster Today?</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-xl)' }}>
                        Call <strong>601-316-7891</strong> right now — same-day delivery available
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <TrackedPhoneLink location="Same-Day CTA" className="btn btn-primary btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                        <BookingButton label="Book Online" location="Same-Day CTA" />
                    </div>
                    <p style={{ marginTop: '1rem', opacity: 0.8, fontSize: '0.9rem' }}>
                        <Link href="/blog/same-day-dumpster-rental-jackson-ms" style={{ color: 'white', textDecoration: 'underline' }}>Learn more about our same-day service</Link>
                    </p>
                </div>
            </section>
        </>
    )
}
