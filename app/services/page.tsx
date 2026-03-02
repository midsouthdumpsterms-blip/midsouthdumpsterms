import { Metadata } from 'next'
import BookingButton from '@/components/BookingButton'
import { generateServiceSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import styles from './services.module.css'

export const metadata: Metadata = {
    title: { absolute: 'Dumpster Rental Prices Jackson MS | $349–$499 | Mid South' },
    description:
        '10-yard from $349 · 15-yard from $399 · 20-yard from $449. Same-day delivery available. No hidden fees. Serving Jackson, Brandon, Madison & Central MS. Call 601-316-7891.',
    openGraph: {
        title: 'Dumpster Rental Prices Jackson MS | Mid South Dumpster Rentals',
        description: '10, 15 & 20-yard roll-off dumpsters from $349. Same-day delivery. No hidden fees.',
        url: 'https://midsouthdumpsterms.com/services',
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }}
            />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Our Dumpster Rental Services</h1>
                    <p className={styles.heroSubtext}>
                        Professional roll-off dumpster rentals for residential, commercial, and construction projects
                    </p>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Available Dumpster Sizes</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                        Choose the perfect size for your project
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
                            <p className={styles.note}>These items cannot be placed in dumpsters</p>
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
                        <a href="tel:6013167891" className="btn btn-primary btn-lg">
                            Call Now
                        </a>
                        <BookingButton label="Book Now" location="Services Page CTA" />
                    </div>
                </div>
            </section>
        </>
    )
}
