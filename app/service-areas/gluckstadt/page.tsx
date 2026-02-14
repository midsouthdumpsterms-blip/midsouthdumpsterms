import { Metadata } from 'next'
import { generateServiceSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'

export const metadata: Metadata = {
    title: 'Dumpster Rentals Gluckstadt MS | Fast-Growing Community',
    description:
        'Serving Mississippi\'s fastest-growing municipality with reliable dumpster rentals. 10-20 yard sizes for new construction & home projects. Same-day delivery.',
    openGraph: {
        title: 'Dumpster Rentals in Gluckstadt, MS | Mid South',
        description: 'Serving Gluckstadt\'s fast-growing community with same-day dumpster delivery.',
        url: 'https://midsouthdumpsterms.com/service-areas/gluckstadt',
    },
}

export default function GluckstadtPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Gluckstadt, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Gluckstadt',
        undefined,
        ['39110']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Gluckstadt', url: 'https://midsouthdumpsterms.com/service-areas/gluckstadt' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Dumpster Rentals in Gluckstadt, MS</h1>
                    <p className={styles.heroSubtext}>
                        Fast, affordable roll-off dumpster delivery throughout Gluckstadt and surrounding areas
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Gluckstadt Dumpster" location="Gluckstadt Service Area Hero" />
                        <a href="tel:6013167891" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Gluckstadt</h2>
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
                            <h2>Why Choose Us in Gluckstadt?</h2>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day delivery available</li>
                                <li>✓ Serving Gluckstadt and Madison County</li>
                                <li>✓ Transparent pricing with no hidden fees</li>
                                <li>✓ 10, 15, and 20-yard dumpsters</li>
                                <li>✓ Residential and commercial service</li>
                                <li>✓ 7 days a week, 7AM - 7PM</li>
                                <li>✓ Professional, courteous service</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perfect For Gluckstadt Projects</h2>
                            <p>Gluckstadt is one of Mississippi's newest and fastest-growing municipalities. Whether you're building a new home, renovating a property, or managing construction in this rapidly developing area near Madison, we have the right dumpster size for your needs.</p>
                            <p><strong>Common uses in Gluckstadt:</strong></p>
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
                    <h2>Serving Gluckstadt's Growing Community</h2>
                    <p>
                        We proudly serve Gluckstadt, Mississippi's fastest-growing municipality. As one of the newest cities in Madison County, Gluckstadt is experiencing rapid residential and commercial development, and we're here to support that growth with professional dumpster rental service.
                    </p>
                    <p>
                        Whether you're building a new home, developing a commercial property, or working on renovation projects in this dynamic community, Mid South Dumpster Rentals provides the reliable waste management solutions you need.
                    </p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Gluckstadt?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Gluckstadt Service Area CTA" />
                </div>
            </section>
        </>
    )
}
