import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import styles from '../services.module.css'

export const metadata: Metadata = {
    title: 'Residential Dumpster Rental Jackson MS | Mid South Dumpster Rentals',
    description:
        'Residential roll-off dumpster rental in Jackson MS and Central Mississippi. 10, 15 & 20-yard containers for home cleanouts, renovations, yard waste & more. Same-day delivery. Flat-rate pricing from $349. Call 601-316-7891.',
    openGraph: {
        title: 'Residential Dumpster Rental Jackson MS | Mid South',
        description: 'Roll-off dumpsters for home projects across Central MS — garage cleanouts, renovations, yard waste & more. Same-day delivery from $349.',
        url: 'https://midsouthdumpsterms.com/services/residential-dumpster-rental',
    },
}

export default function ResidentialDumpsterRentalPage() {
    const serviceSchema = generateServiceSchema(
        'Residential Dumpster Rental',
        'Roll-off dumpster rental for residential projects in Central Mississippi. 10, 15, and 20-yard containers for home cleanouts, renovations, yard waste removal, and more.',
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
        { name: 'Residential Dumpster Rental', url: 'https://midsouthdumpsterms.com/services/residential-dumpster-rental' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Residential Dumpster Rental in Central Mississippi</h1>
                    <p className={styles.heroSubtext}>
                        Roll-off dumpsters for homeowners across Jackson, Brandon, Madison & surrounding areas — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        <BookingButton label="Book Online" location="Residential Hero" />
                        <TrackedPhoneLink location="Residential Hero" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Perfect for Every Home Project</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-2xl)', fontSize: '1.125rem' }}>
                        Whether you're doing a quick garage cleanout or a full home renovation, we have the right dumpster size for the job.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                        {[
                            { icon: '🏠', title: 'Garage Cleanouts', desc: 'Clear years of clutter in a single weekend. A 10-yard dumpster handles most garage cleanouts easily.' },
                            { icon: '🔨', title: 'Home Renovations', desc: 'Kitchen, bathroom, or flooring remodel? Our 15-yard is the go-to for single-room renovation debris.' },
                            { icon: '📦', title: 'Moving & Estate Cleanouts', desc: 'Moving out or clearing an estate? Load up furniture, boxes, and old household items without multiple trips to the dump.' },
                            { icon: '🌿', title: 'Yard Waste & Landscaping', desc: 'Tree trimmings, brush, grass clippings, and storm debris — toss it all in and we haul it away.' },
                            { icon: '🏚️', title: 'Attic & Basement Cleanouts', desc: 'Decades of stored items gone in a weekend. Same-day delivery means you can start immediately.' },
                            { icon: '🏘️', title: 'Rental Property Cleanouts', desc: 'Fast turnaround between tenants. We deliver, you load, we haul — simple and affordable.' },
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
                    <h2 className="text-center">Choose Your Dumpster Size</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                        Not sure which size? Read our <Link href="/blog/how-to-choose-dumpster-size" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Dumpster Size Guide</Link>.
                    </p>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard size="10" capacity="4 Pickup Truck Loads" weight="1 Ton Included" pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }} idealFor={['Garage Cleanouts', 'Small Cleanouts', 'Minor Renovations', 'Yard Debris']} />
                        <DumpsterSizeCard size="15" capacity="6 Pickup Truck Loads" weight="2 Tons Included" pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }} idealFor={['Home Renovations', 'Estate Cleanouts', 'Roofing Projects', 'Medium Cleanouts']} popular />
                        <DumpsterSizeCard size="20" capacity="8 Pickup Truck Loads" weight="3 Tons Included" pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }} idealFor={['Large Renovations', 'Whole-Home Cleanouts', 'Major Projects', 'Multi-Room Remodels']} />
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Homeowners Choose Mid South</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                                <li>✅ Same-day delivery — 7 days a week</li>
                                <li>✅ Flat-rate pricing — no surprise fees at pickup</li>
                                <li>✅ Driveway-safe delivery — we protect your property</li>
                                <li>✅ Locally owned and operated in Central MS</li>
                                <li>✅ We haul away everything — you just load it</li>
                                <li>✅ Flexible rental periods — 1, 3, or 7 days</li>
                                <li>✅ We accept furniture, appliances, renovation debris & yard waste</li>
                            </ul>
                        </div>
                        <div>
                            <h2>What Can Go In?</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>We accept most household and renovation materials:</p>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2, color: 'var(--color-gray-700)' }}>
                                <li>✓ Furniture and household items</li>
                                <li>✓ Carpet, flooring, and drywall</li>
                                <li>✓ Lumber and building materials</li>
                                <li>✓ Yard waste and natural vegetation</li>
                                <li>✓ Washers, dryers, stoves, and ovens</li>
                                <li>✓ Roofing shingles</li>
                            </ul>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-500)', marginTop: '1rem' }}>
                                <strong>Not accepted:</strong> Concrete, hazardous materials, refrigerators, HVAC units, tires, or liquids. See our <Link href="/services" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>full accepted items list</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Areas We Serve</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        We deliver residential dumpsters throughout Central Mississippi — typically same day or next day.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                        {['Jackson', 'Brandon', 'Madison', 'Clinton', 'Pearl', 'Ridgeland', 'Flowood', 'Byram', 'Richland', 'Florence', 'Canton', 'Terry', 'Flora', 'Gluckstadt'].map((city) => (
                            <Link
                                key={city}
                                href={`/service-areas/${city.toLowerCase()}`}
                                style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)', transition: 'all 0.2s' }}
                            >
                                {city}, MS
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Residential Dumpster?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online in minutes or call us and we'll get you set up with same-day delivery
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Residential CTA" />
                        <TrackedPhoneLink location="Residential CTA" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
