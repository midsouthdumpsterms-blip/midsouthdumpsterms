import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import styles from '../services.module.css'

export const metadata: Metadata = {
    title: 'Commercial Dumpster Rental Jackson MS | Mid South Dumpster Rentals',
    description:
        'Commercial roll-off dumpster rental in Jackson MS and Central Mississippi. Reliable waste disposal for contractors, property managers, retail, and office cleanouts. Same-day delivery available. Call 601-316-7891.',
    openGraph: {
        title: 'Commercial Dumpster Rental Jackson MS | Mid South',
        description: 'Roll-off dumpster rental for businesses across Central MS — contractors, property managers, retail cleanouts & more. Same-day delivery.',
        url: 'https://midsouthdumpsterms.com/services/commercial-dumpster-rental',
    },
}

export default function CommercialDumpsterRentalPage() {
    const serviceSchema = generateServiceSchema(
        'Commercial Dumpster Rental',
        'Roll-off dumpster rental for commercial projects in Central Mississippi. Reliable waste disposal for contractors, property managers, businesses, and commercial cleanouts.',
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
        { name: 'Commercial Dumpster Rental', url: 'https://midsouthdumpsterms.com/services/commercial-dumpster-rental' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Commercial Dumpster Rental in Central Mississippi</h1>
                    <p className={styles.heroSubtext}>
                        Reliable roll-off dumpster service for businesses, contractors, and property managers across the Jackson MS metro — on-time every time
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        <BookingButton label="Book Online" location="Commercial Hero" />
                        <TrackedPhoneLink location="Commercial Hero" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Commercial Use Cases We Handle</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-2xl)', fontSize: '1.125rem' }}>
                        From single-day office cleanouts to ongoing contractor job sites, we keep your project moving.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                        {[
                            { icon: '🏢', title: 'Office Cleanouts', desc: 'Clearing out an office suite? We drop off, you load furniture and equipment, we haul it away.' },
                            { icon: '🏪', title: 'Retail Buildouts & Cleanouts', desc: 'Renovating or clearing a retail space? Our dumpsters handle fixtures, shelving, and debris.' },
                            { icon: '🏗️', title: 'Contractor Job Sites', desc: 'Keep your job site clean with reliable roll-off service. We work around your schedule.' },
                            { icon: '🏘️', title: 'Property Management', desc: 'Rental turnovers, foreclosure cleanouts, and between-tenant clearouts — fast and hassle-free.' },
                            { icon: '🏨', title: 'Hotel & Hospitality', desc: 'Room renovations, lobby remodels, and large-scale interior updates across the property.' },
                            { icon: '🏭', title: 'Warehouse Clearouts', desc: 'Clearing old inventory, equipment, or pallets? A 20-yard dumpster is the efficient solution.' },
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
                    <h2 className="text-center">Available Dumpster Sizes</h2>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard size="10" capacity="4 Pickup Truck Loads" weight="1 Ton Included" pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }} idealFor={['Small Office Cleanouts', 'Light Demo', 'Minor Renovations', 'Quick Turnovers']} />
                        <DumpsterSizeCard size="15" capacity="6 Pickup Truck Loads" weight="2 Tons Included" pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }} idealFor={['Retail Buildouts', 'Office Renovations', 'Mid-Size Cleanouts', 'Contractor Work']} popular />
                        <DumpsterSizeCard size="20" capacity="8 Pickup Truck Loads" weight="3 Tons Included" pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }} idealFor={['Warehouse Clearouts', 'Large Renovations', 'Commercial Demo', 'Multi-Room Projects']} />
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Businesses & Contractors Trust Us</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                                <li>✅ On-time delivery — we show up when we say we will</li>
                                <li>✅ Same-day service available — 7 days a week</li>
                                <li>✅ Flat-rate pricing — predictable costs for project budgeting</li>
                                <li>✅ Insured and professional service</li>
                                <li>✅ Flexible pickup scheduling around your project timeline</li>
                                <li>✅ We serve the entire Jackson MS metro area</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Property Managers & Landlords</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                We're the preferred partner for property managers across Central Mississippi who need fast, reliable dumpster service for rental turnovers, foreclosure cleanouts, and between-tenant projects.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                We keep your timeline tight and your costs predictable. Read our guide on <Link href="/blog/rental-property-cleanout-dumpster-rental-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>rental property cleanouts</Link> to see how we help landlords throughout Central MS.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                Also see: <Link href="/blog/foreclosure-cleanout-dumpster-rental-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Foreclosure Cleanout Dumpster Rentals</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Get a Commercial Dumpster Quote</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Call us directly for same-day commercial service or book online for next-day delivery
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Commercial CTA" />
                        <TrackedPhoneLink location="Commercial CTA" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
