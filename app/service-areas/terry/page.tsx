import { Metadata } from 'next'
import { generateServiceSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'

export const metadata: Metadata = {
    title: 'Dumpster Rentals Terry MS | Highway 27 Corridor',
    description:
        'Serving Terry & Highway 27 corridor with reliable dumpster rentals. 10-20 yard sizes for home projects & construction. Same-day delivery available.',
    openGraph: {
        title: 'Dumpster Rentals in Terry, MS | Mid South',
        description: 'Serving Terry & Highway 27 corridor with same-day dumpster delivery.',
        url: 'https://midsouthdumpsterms.com/service-areas/terry',
    },
}

export default function TerryPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Terry, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Terry',
        undefined,
        ['39170']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Terry', url: 'https://midsouthdumpsterms.com/service-areas/terry' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Dumpster Rentals in Terry, MS</h1>
                    <p className={styles.heroSubtext}>
                        Fast, affordable roll-off dumpster delivery throughout Terry and surrounding areas
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Terry Dumpster" location="Terry Service Area Hero" />
                        <a href="tel:6013167891" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Terry</h2>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard size="10" capacity="4 Pickup Truck Loads" weight="1 Ton Included" pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }} idealFor={['Small Cleanouts', 'Garage Cleanup', 'Minor Renovations', 'Yard Debris']} />
                        <DumpsterSizeCard size="15" capacity="6 Pickup Truck Loads" weight="2 Tons Included" pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }} idealFor={['Home Renovations', 'Roofing Projects', 'Estate Cleanouts', 'Medium Construction']} popular />
                        <DumpsterSizeCard size="20" capacity="8 Pickup Truck Loads" weight="3 Tons Included" pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }} idealFor={['Large Renovations', 'New Construction', 'Major Demolition', 'Commercial Projects']} />
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Choose Us in Terry?</h2>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day delivery available</li>
                                <li>✓ Serving Terry and Hinds County</li>
                                <li>✓ Transparent pricing with no hidden fees</li>
                                <li>✓ 10, 15, and 20-yard dumpsters</li>
                                <li>✓ Residential and commercial service</li>
                                <li>✓ 7 days a week, 7AM - 7PM</li>
                                <li>✓ Professional, courteous service</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Terry Projects</h2>
                            <p>Whether you're renovating a home, clearing out an estate, or managing a construction project in Terry or along Highway 27, we have the right dumpster size for your needs.</p>
                            <p><strong>Common uses in Terry:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Construction and demolition</li>
                                <li>Estate and foreclosure cleanouts</li>
                                <li>Roofing projects</li>
                                <li>Yard waste and landscaping</li>
                                <li>Commercial cleanouts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Neighborhoods We Serve in Terry</h2>
                    <p>
                        We proudly serve all neighborhoods throughout Terry, a charming town in Hinds County along the Highway 27 corridor. Whether you're in <strong>South Fork Estates</strong>, <strong>Cedarstone</strong>, <strong>Terry Park</strong>, <strong>Shadow Ridge</strong>, <strong>Indian Hills</strong>, <strong>Terry Place</strong>, or the <strong>George Road & Midway Road</strong> areas, we deliver fast, reliable dumpster rental service to your location.
                    </p>
                    <p>
                        Terry's mix of historic homes and newer subdivisions creates a unique community atmosphere. From rural properties with larger yards to established neighborhoods, we're here to support your renovation, construction, and cleanup projects with professional dumpster rental service.
                    </p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Terry?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Terry Service Area CTA" />
                </div>
            </section>
        </>
    )
}
