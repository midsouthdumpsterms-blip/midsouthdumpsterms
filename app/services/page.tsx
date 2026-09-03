import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import BookingButton from '@/components/BookingButton'
import { generateOfferCatalogSchema, generateServiceSchema, injectSchema, generateBreadcrumbSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import styles from './services.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/services' },
    // This page is a directory of the eleven service pages, not the price list
    // -- /sizes is. The old title claimed "Prices", disagreed with its own H1,
    // and was the third page on the site chasing "dumpster rental Jackson MS".
    title: 'Dumpster Rental Services in Central MS',
    description:
        'Every dumpster service we run in Central Mississippi: roll-off, construction, residential, commercial, roofing, demolition, estate cleanout, storm cleanup and more.',
    openGraph: {
        title: 'Dumpster Rental Services in Central Mississippi',
        description: 'Roll-off, construction, residential, commercial, roofing and cleanout dumpster services across the Jackson metro.',
        url: 'https://midsouthdumpsterms.com/services',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

const acceptableItems = [
    'Construction and demolition debris (No brick or cinderblock)',
    'Natural vegetation and yard waste',
    'Furniture and household items',
    'General household waste',
    'Porcelain fixtures',
    'Roofing shingles',
    'Tile and flooring',
    'Lumber and drywall',
    'PVC and plastic materials',
    'Stoves and ovens',
    'Washers and dryers',
    'Carpet and insulation',
    'Paper and plastics',
]

const prohibitedItems = [
    'Batteries',
    'Medical waste',
    'Motor oil and automotive fluids',
    'Asbestos',
    'Liquid waste, paint, or stain',
    'Concrete',
    'Chemical waste',
    'Dirt and soil',
    'Tires',
    'Food waste',
    'Pressurized containers',
    'Refrigerators',
    'HVAC units',
]

export default function Services() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Services', url: 'https://midsouthdumpsterms.com/services' },
    ])

    const serviceSchema = generateServiceSchema(
        'Dumpster Rental Service',
        'Roll-off dumpster rentals for residential, commercial, and construction projects in Central Mississippi. Available in 10, 15, and 20-yard sizes.',
        'Central Mississippi',
        [
            { price: '349', description: '10 Yard Dumpster - 1 Day Rental (Includes 1 ton)' },
            { price: '379', description: '10 Yard Dumpster - 3 Day Rental (Includes 1 ton)' },
            { price: '399', description: '10 Yard Dumpster - 7 Day Rental (Includes 1 ton) - Overage $55/ton' },
            { price: '399', description: '15 Yard Dumpster - 1 Day Rental (Includes 2 tons)' },
            { price: '429', description: '15 Yard Dumpster - 3 Day Rental (Includes 2 tons)' },
            { price: '449', description: '15 Yard Dumpster - 7 Day Rental (Includes 2 tons) - Overage $55/ton' },
            { price: '449', description: '20 Yard Dumpster - 1 Day Rental (Includes 3 tons)' },
            { price: '479', description: '20 Yard Dumpster - 3 Day Rental (Includes 3 tons)' },
            { price: '499', description: '20 Yard Dumpster - 7 Day Rental (Includes 3 tons) - Hard limit 6,000 lbs' },
        ]
    )

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(generateOfferCatalogSchema()) }} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }}
            />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Dumpster Rental Services in Central Mississippi</h1>
                    <p className={styles.heroSubtext}>
                        Eleven services, one flat-rate price list. Residential, commercial and construction roll-offs from $349 &mdash; delivered across the Jackson metro, seven days a week.
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-xl) 0 0 0' }}>
                <div className="container">
                    <Image
                        src="/images/gallery/dumpster-on-construction-site-new-build-ms.jpg"
                        alt="Mid South Dumpster Rentals roll-off container on a new construction site in Central Mississippi"
                        width={1200}
                        height={500}
                        style={{ borderRadius: 'var(--radius-xl)', objectFit: 'cover', width: '100%', height: '400px', boxShadow: 'var(--shadow-md)' }}
                        priority
                    />
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Available Dumpster Sizes</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                        Choose the perfect size for your project. Read our <Link href="/blog/dumpster-rental-prices-jackson-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Jackson Dumpster Cost Guide</Link> for more details.
                    </p>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard
                            size="10"
                            capacity="4 Pickup Truck Loads"
                            weight="1 Ton Included"
                            pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }}
                            idealFor={['Small Cleanouts', 'Garage Cleanup', 'Minor Renovations', 'Yard Debris']}
                        />
                        <DumpsterSizeCard
                            size="15"
                            capacity="6 Pickup Truck Loads"
                            weight="2 Tons Included"
                            pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }}
                            idealFor={['Home Renovations', 'Roofing Projects', 'Estate Cleanouts', 'Medium Construction']}
                            popular
                        />
                        <DumpsterSizeCard
                            size="20"
                            capacity="8 Pickup Truck Loads"
                            weight="3 Tons Included"
                            pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }}
                            idealFor={['Large Renovations', 'New Construction', 'Major Demolition', 'Commercial Projects']}
                        />
                    </div>
                    <p className="text-center" style={{ marginTop: 'var(--spacing-xl)', fontSize: '1.125rem' }}>
                        Not sure which size to pick? Check out our <Link href="/blog/how-to-choose-dumpster-size" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Dumpster Sizing Guide</Link>.
                    </p>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h2 className="text-center">Dumpster Rental Services We Offer</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        Same containers, same flat-rate pricing — pick the page that matches your project for sizing advice and specifics.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
                        {[
                            { href: '/services/residential-dumpster-rental', name: 'Residential Dumpster Rental', desc: 'Driveway-friendly containers for homeowners tackling cleanouts and remodels.' },
                            { href: '/services/commercial-dumpster-rental', name: 'Commercial Dumpster Rental', desc: 'Retail, office and property-management waste with scheduled swap-outs.' },
                            { href: '/services/construction-dumpster-rental', name: 'Construction Dumpster Rental', desc: 'Job-site containers for framing, drywall and general C&D debris.' },
                            { href: '/services/demolition-dumpster-rental', name: 'Demolition Dumpster Rental', desc: 'Heavy loads from sheds, decks, garages and interior tear-outs.' },
                            { href: '/services/roofing-dumpster-rental', name: 'Roofing Dumpster Rental', desc: 'Shingle tear-off containers placed close to the drop zone.' },
                            { href: '/services/estate-cleanout-dumpster-rental', name: 'Estate Cleanout Dumpsters', desc: 'Whole-property clearing on a timeline that respects the family.' },
                            { href: '/services/roll-off-dumpster-rental', name: 'Roll-Off Dumpster Rental', desc: 'The core service — 10, 15 and 20-yard roll-offs across Central MS.' },
                            { href: '/services/debris-removal', name: 'Debris Removal', desc: 'Construction, storm, yard and household debris hauled to a licensed facility.' },
                            { href: '/services/yard-waste-dumpster-rental', name: 'Yard Waste Dumpster Rental', desc: 'Brush, limbs, sod and landscaping debris from clearing work.' },
                            { href: '/services/same-day-dumpster-rental', name: 'Same-Day Dumpster Rental', desc: 'Call before noon, seven days a week, and we deliver that day.' },
                            { href: '/services/storm-cleanup-dumpster-rental', name: 'Storm Cleanup Dumpster Rental', desc: 'Emergency containers after tornado, hurricane, hail and wind damage.' },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                style={{ display: 'block', background: 'white', borderRadius: 'var(--radius-lg)', padding: '1.4rem', boxShadow: 'var(--shadow-sm)', textDecoration: 'none', color: 'inherit' }}
                            >
                                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem', color: 'var(--color-primary)' }}>{item.name}</h3>
                                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.92rem', margin: 0 }}>{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
                        Need us in a specific town? <Link href="/service-areas">See all service areas across Hinds, Madison and Rankin counties</Link>.
                    </p>
                </div>
            </section>

            <section className={styles.tableSection}>
                <div className="container container-narrow">
                    <h2 className="text-center">Dumpster Rental Pricing Comparison</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)', fontSize: '1.125rem' }}>
                        Transparent, flat-rate pricing for the Jackson MS metro area. All prices include delivery, pickup, and disposal.
                    </p>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Dumpster Size</th>
                                <th>1-Day Rental</th>
                                <th>3-Day Rental</th>
                                <th>7-Day Rental</th>
                                <th>Weight Included</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>10-Yard</strong></td>
                                <td>$349</td>
                                <td>$379</td>
                                <td>$399</td>
                                <td>1 Ton (2,000 lbs)</td>
                            </tr>
                            <tr>
                                <td><strong>15-Yard</strong></td>
                                <td>$399</td>
                                <td>$429</td>
                                <td>$449</td>
                                <td>2 Tons (4,000 lbs)</td>
                            </tr>
                            <tr>
                                <td><strong>20-Yard</strong></td>
                                <td>$449</td>
                                <td>$479</td>
                                <td>$499</td>
                                <td>3 Tons (6,000 lbs)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={styles.itemsSection}>
                <div className="container">
                    <div className="grid grid-2">
                        <div className={styles.itemsCard}>
                            <h2>✓ Acceptable Items</h2>
                            <p className={styles.note}>Weight limit rules apply to all materials</p>
                            <ul className={styles.itemsList}>
                                {acceptableItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={`${styles.itemsCard} ${styles.prohibited}`}>
                            <h2>✗ Prohibited Items</h2>
                            <p className={styles.note}>These items cannot be placed in dumpsters. See our <Link href="/blog/what-can-i-put-in-a-dumpster" style={{ textDecoration: 'underline' }}>full guide on what goes in</Link>.</p>
                            <ul className={styles.itemsList}>
                                {prohibitedItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Questions About What Can Go In?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Call us at 601-316-7891 and we'll help you determine the right dumpster for your project
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--spacing-lg)', justifyContent: 'center' }}>
                        <TrackedPhoneLink location="Page CTA" className="btn btn-primary btn-lg">
                            Call Now
                        </TrackedPhoneLink>
                        <BookingButton label="Book Now" location="Services Page CTA" />
                    </div>
                </div>
            </section>
        </>
    )
}
