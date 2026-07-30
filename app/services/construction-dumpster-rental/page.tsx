import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import styles from '../services.module.css'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/services/construction-dumpster-rental' },
    title: 'Construction Dumpster Rental Jackson MS | Mid South Dumpster Rentals',
    description:
        'Construction dumpster rental in Jackson MS and Central Mississippi. Roll-off containers for roofing, demolition, remodeling & construction debris removal. Same-day delivery. Contractors welcome. Call 601-316-7891.',
    openGraph: {
        title: 'Construction Dumpster Rental Jackson MS | Mid South',
        description: 'Roll-off dumpsters for construction & demo projects across Central MS. Roofing, remodeling, demolition debris. Same-day delivery.',
        url: 'https://midsouthdumpsterms.com/services/construction-dumpster-rental',
    },
}

export default function ConstructionDumpsterRentalPage() {
    const serviceSchema = generateServiceSchema(
        'Construction Dumpster Rental',
        'Roll-off dumpster rental for construction projects in Central Mississippi. Handles roofing debris, demolition waste, remodeling materials, lumber, drywall, and general construction debris.',
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
        { name: 'Construction Dumpster Rental', url: 'https://midsouthdumpsterms.com/services/construction-dumpster-rental' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Construction Dumpster Rental in Central Mississippi</h1>
                    <p className={styles.heroSubtext}>
                        Roll-off dumpsters built for construction sites, roofing jobs, and demolition projects — reliable, on-time, and priced flat across the Jackson MS metro
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        <BookingButton label="Book Online" location="Construction Hero" />
                        <TrackedPhoneLink location="Construction Hero" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">What We Handle on Construction Sites</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-2xl)', fontSize: '1.125rem' }}>
                        From roofing tear-offs to full demolition debris, our roll-off dumpsters keep your job site clean and your project on schedule.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                        {[
                            { icon: '🏠', title: 'Roofing Projects', desc: 'Shingles, underlayment, flashing, and roofing debris. Our 15-yard is the most popular choice for roofing tear-offs.' },
                            { icon: '🔨', title: 'Demo & Gut Jobs', desc: 'Interior demolition debris including drywall, lumber, trim, tile, and flooring materials.' },
                            { icon: '🛠️', title: 'Remodeling Projects', desc: 'Kitchen and bathroom remodels, room additions, and structural renovations generate debris fast — we keep up.' },
                            { icon: '🏗️', title: 'New Construction', desc: 'Construction waste, scrap lumber, packaging, and site cleanup throughout the build process.' },
                            { icon: '🪟', title: 'Window & Door Replacements', desc: 'Old windows, frames, trim, and materials hauled away cleanly and efficiently.' },
                            { icon: '🏢', title: 'Commercial Build-Outs', desc: 'Retail and office build-outs that generate large volumes of construction debris throughout the project.' },
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
                    <h2 className="text-center">Available Dumpster Sizes for Construction</h2>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard size="10" capacity="4 Pickup Truck Loads" weight="1 Ton Included" pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }} idealFor={['Small Demo Jobs', 'Bathroom Remodels', 'Light Roofing', 'Single-Room Gut']} />
                        <DumpsterSizeCard size="15" capacity="6 Pickup Truck Loads" weight="2 Tons Included" pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }} idealFor={['Roofing Tear-Offs', 'Kitchen Remodels', 'Medium Demo', 'Multi-Room Projects']} popular />
                        <DumpsterSizeCard size="20" capacity="8 Pickup Truck Loads" weight="3 Tons Included" pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }} idealFor={['New Construction', 'Full Gut Renovations', 'Large Demo', 'Commercial Build-Outs']} />
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>What Construction Debris We Accept</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                                <li>✓ Roofing shingles and underlayment</li>
                                <li>✓ Drywall and plaster</li>
                                <li>✓ Lumber and framing materials</li>
                                <li>✓ Tile, flooring, and carpet</li>
                                <li>✓ PVC pipe and electrical materials</li>
                                <li>✓ Windows, doors, and trim</li>
                                <li>✓ Insulation materials</li>
                                <li>✓ General construction demolition debris</li>
                            </ul>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-500)', marginTop: '1rem' }}>
                                <strong>Note:</strong> We do not accept concrete, brick, cinderblock, dirt, hazardous materials, or asbestos.
                            </p>
                        </div>
                        <div>
                            <h2>Built for Contractors</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                We understand that job sites run on tight timelines. That's why we offer same-day delivery across the Jackson metro — so you're never waiting on a dumpster to start work.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                Our flat-rate pricing means no surprise overages at the end of your project. You know the cost upfront, and it includes delivery, pickup, and disposal.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                Read our guide for <Link href="/blog/contractor-dumpster-rental-jackson-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>contractors renting dumpsters in Jackson, MS</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Order a Construction Dumpster?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Same-day delivery available — call now or book online to lock in your delivery slot
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Construction CTA" />
                        <TrackedPhoneLink location="Construction CTA" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
