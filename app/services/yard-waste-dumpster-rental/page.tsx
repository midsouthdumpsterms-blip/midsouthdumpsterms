import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import styles from '../services.module.css'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/services/yard-waste-dumpster-rental' },
    title: 'Yard Waste Dumpster Rental Jackson MS',
    description:
        'Haul off brush, limbs, sod and landscaping debris in Jackson MS. Roll-off containers sized for yard cleanups and land clearing. From $349.',
    openGraph: {
        title: 'Yard Waste Dumpster Rental Jackson MS',
        description: 'Yard waste roll-off dumpsters across Central MS. Branches, brush, grass, storm debris — same-day delivery from $349.',
        url: 'https://midsouthdumpsterms.com/services/yard-waste-dumpster-rental',
    },
}

export default function YardWasteDumpsterRentalPage() {
    const serviceSchema = generateServiceSchema(
        'Yard Waste Dumpster Rental',
        'Yard waste roll-off dumpster rental in Central Mississippi. Ideal for tree trimmings, brush, grass clippings, storm cleanup, and landscaping debris removal.',
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
        { name: 'Yard Waste Dumpster Rental', url: 'https://midsouthdumpsterms.com/services/yard-waste-dumpster-rental' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Yard Waste Dumpster Rental in Central Mississippi</h1>
                    <p className={styles.heroSubtext}>
                        The fastest way to clear tree branches, brush, storm debris, and landscaping waste — we deliver a roll-off dumpster, you fill it, we haul it away
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        <BookingButton label="Book Online" location="Yard Waste Hero" />
                        <TrackedPhoneLink location="Yard Waste Hero" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">What Yard Waste We Accept</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-2xl)', fontSize: '1.125rem' }}>
                        Our roll-off dumpsters accept all natural vegetation and yard debris.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                        {[
                            { icon: '🌿', label: 'Tree branches & limbs' },
                            { icon: '🌱', label: 'Grass clippings' },
                            { icon: '🍂', label: 'Leaves & mulch' },
                            { icon: '🌳', label: 'Brush & shrubs' },
                            { icon: '⛈️', label: 'Storm debris' },
                            { icon: '🌾', label: 'Hedge trimmings' },
                            { icon: '🌲', label: 'Tree stumps (small)' },
                            { icon: '🏡', label: 'Landscaping material' },
                        ].map((item) => (
                            <div key={item.label} style={{ background: 'var(--color-gray-50)', borderRadius: 'var(--radius-lg)', padding: '1.25rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                                <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-gray-700)' }}>{item.label}</p>
                            </div>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', color: 'var(--color-gray-500)', fontSize: '0.9rem' }}>
                        <strong>Note:</strong> We do not accept concrete, dirt, or soil in our dumpsters — only natural vegetation and yard waste.
                    </p>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Which Size for Yard Waste?</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                        Yard waste is bulky but light — a 10-yard handles most yard cleanups, while storm damage may call for a 15 or 20.
                    </p>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard size="10" capacity="4 Pickup Truck Loads" weight="1 Ton Included" pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }} idealFor={['Small Yard Cleanup', 'Hedge Trimming', 'Leaf Removal', 'Light Brush']} />
                        <DumpsterSizeCard size="15" capacity="6 Pickup Truck Loads" weight="2 Tons Included" pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }} idealFor={['Storm Cleanup', 'Tree Trimming', 'Landscaping Projects', 'Seasonal Cleanup']} popular />
                        <DumpsterSizeCard size="20" capacity="8 Pickup Truck Loads" weight="3 Tons Included" pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }} idealFor={['Major Storm Damage', 'Land Clearing', 'Large Properties', 'Multiple Trees']} />
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Storm Cleanup Made Easy</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                Central Mississippi sees its share of storms — high winds, ice storms, and heavy rain that bring down limbs and trees across your yard. When cleanup day arrives, a roll-off dumpster is the fastest solution.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                We offer same-day delivery so you can start clearing right away. Load it at your pace, and we'll pick it up when you're done.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                <Link href="/blog/storm-cleanup-dumpster-rental-jackson-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
                                    → See our Storm Cleanup Dumpster Rental Guide
                                </Link>
                            </p>
                        </div>
                        <div>
                            <h2>Spring Cleaning & Seasonal Yard Work</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                Spring and fall are the busiest seasons for yard debris across the Jackson area. Whether you're doing a full spring cleanup or clearing out overgrown sections of your property, a dumpster makes the job dramatically faster.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                Instead of making 10 trips to the curb or loading a trailer over and over, fill the dumpster at your own pace and call us when you're done.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                <Link href="/blog/yard-waste-removal-dumpster-rental-jackson-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
                                    → Yard Waste Removal Guide for Jackson, MS
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Clear Your Yard?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book a yard waste dumpster online or call us — same-day delivery available across Central MS
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Yard Waste CTA" />
                        <TrackedPhoneLink location="Yard Waste CTA" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
