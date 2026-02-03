import { Metadata } from 'next'
import { generateServiceSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import styles from './services.module.css'

export const metadata: Metadata = {
    title: 'Dumpster Rental Services | 10, 15, 20 Yard Dumpsters',
    description:
        'Comprehensive dumpster rental services in Central Mississippi. 10-yard, 15-yard, and 20-yard roll-off dumpsters for residential, commercial, and construction projects.',
    openGraph: {
        title: 'Dumpster Rental Services | Mid South Dumpster Rentals',
        description: 'Affordable dumpster rentals for all project sizes.',
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
            { price: '349', description: '10 Yard Dumpster - 1 Day Rental' },
            { price: '399', description: '15 Yard Dumpster - 1 Day Rental' },
            { price: '449', description: '20 Yard Dumpster - 1 Day Rental' },
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
                        <a
                            href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-lg"
                        >
                            Book Online
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
