import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import styles from '../services.module.css'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/services/roll-off-dumpster-rental' },
    title: 'Roll-Off Dumpster Rental Jackson MS',
    description:
        'Roll-off dumpster rental in Jackson MS and Central Mississippi. 10, 15 & 20-yard roll-off containers for residential, commercial & construction projects. Same-day delivery, flat-rate pricing. Call 601-316-7891.',
    openGraph: {
        title: 'Roll-Off Dumpster Rental Jackson MS',
        description: '10, 15 & 20-yard roll-off dumpsters in Central Mississippi. Residential, commercial & construction use. Same-day delivery from $349.',
        url: 'https://midsouthdumpsterms.com/services/roll-off-dumpster-rental',
    },
}

export default function RollOffDumpsterRentalPage() {
    const serviceSchema = generateServiceSchema(
        'Roll-Off Dumpster Rental',
        'Roll-off dumpster rental in Central Mississippi. 10, 15, and 20-yard containers for any project — residential cleanouts, commercial projects, and construction sites.',
        'Central Mississippi',
        [
            { price: '349', description: '10 Yard Roll-Off - 1 Day Rental (Includes 1 ton)' },
            { price: '399', description: '15 Yard Roll-Off - 1 Day Rental (Includes 2 tons)' },
            { price: '449', description: '20 Yard Roll-Off - 1 Day Rental (Includes 3 tons)' },
        ]
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Services', url: 'https://midsouthdumpsterms.com/services' },
        { name: 'Roll-Off Dumpster Rental', url: 'https://midsouthdumpsterms.com/services/roll-off-dumpster-rental' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll-Off Dumpster Rental in Central Mississippi</h1>
                    <p className={styles.heroSubtext}>
                        10, 15 &amp; 20-yard roll-off containers delivered to your driveway or job site — same day available, flat-rate pricing, no hidden fees
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        <BookingButton label="Book Your Roll-Off" location="Roll-Off Hero" />
                        <TrackedPhoneLink location="Roll-Off Hero" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>What Is a Roll-Off Dumpster?</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                A roll-off dumpster is an open-top rectangular container that is delivered to your location on a specialized truck. The container rolls off the back of the truck directly onto your driveway, job site, or designated area. When you're finished loading, we roll it back on and haul your debris away.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                Unlike traditional trash pickup, roll-off containers handle large volumes of debris in a single load — making them the most cost-effective choice for any project that generates significant waste.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                Mid South Dumpster Rentals delivers 10, 15, and 20-yard roll-off dumpsters throughout the Jackson, Mississippi metro area and surrounding Central MS communities.
                            </p>
                        </div>
                        <div>
                            <h2>How Roll-Off Rental Works</h2>
                            <ol style={{ paddingLeft: '1.5rem', lineHeight: 2.2, color: 'var(--color-gray-700)' }}>
                                <li><strong>Book online or call</strong> — we confirm your delivery window</li>
                                <li><strong>We deliver</strong> — same-day or next-day to your location</li>
                                <li><strong>You load</strong> — take your time within your rental period</li>
                                <li><strong>We pick up</strong> — on your schedule when you're done</li>
                                <li><strong>We dispose</strong> — responsible, permitted, proper disposal</li>
                            </ol>
                            <p style={{ marginTop: '1rem', color: 'var(--color-gray-600)', fontSize: '0.95rem' }}>
                                Rental periods of 1, 3, or 7 days available. Extensions offered at a daily rate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Roll-Off Container Sizes</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                        Not sure which size? Our <Link href="/blog/how-to-choose-dumpster-size" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>size guide</Link> helps you pick the right container for your load.
                    </p>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard size="10" capacity="4 Pickup Truck Loads" weight="1 Ton Included" pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }} idealFor={['Small Cleanouts', 'Garage Cleanouts', 'Minor Renovations', 'Yard Debris']} />
                        <DumpsterSizeCard size="15" capacity="6 Pickup Truck Loads" weight="2 Tons Included" pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }} idealFor={['Home Renovations', 'Roofing Projects', 'Estate Cleanouts', 'Medium Construction']} popular />
                        <DumpsterSizeCard size="20" capacity="8 Pickup Truck Loads" weight="3 Tons Included" pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }} idealFor={['Large Renovations', 'New Construction', 'Major Demolition', 'Commercial Projects']} />
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h2 className="text-center">Roll-Off Dumpsters vs. Other Options</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>Why a roll-off is the smarter choice for most projects</p>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                            <thead>
                                <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Option</th>
                                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Cost</th>
                                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Capacity</th>
                                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Convenience</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ background: 'white' }}>
                                    <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--color-primary)' }}>Roll-Off Dumpster (Mid South)</td>
                                    <td style={{ padding: '0.75rem 1rem' }}>From $349 flat</td>
                                    <td style={{ padding: '0.75rem 1rem' }}>4–8 truck loads</td>
                                    <td style={{ padding: '0.75rem 1rem' }}>Delivered & picked up</td>
                                </tr>
                                <tr style={{ background: 'var(--color-gray-50)' }}>
                                    <td style={{ padding: '0.75rem 1rem' }}>Bagster Bag</td>
                                    <td style={{ padding: '0.75rem 1rem' }}>~$30 bag + ~$200 pickup</td>
                                    <td style={{ padding: '0.75rem 1rem' }}>~0.75 truck loads</td>
                                    <td style={{ padding: '0.75rem 1rem' }}>You store, they schedule</td>
                                </tr>
                                <tr style={{ background: 'white' }}>
                                    <td style={{ padding: '0.75rem 1rem' }}>Renting a Truck + Dumps</td>
                                    <td style={{ padding: '0.75rem 1rem' }}>$100–$200 per trip</td>
                                    <td style={{ padding: '0.75rem 1rem' }}>1 truck load</td>
                                    <td style={{ padding: '0.75rem 1rem' }}>You drive, load, dump</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-gray-500)' }}>
                        Read the full comparison: <Link href="/blog/dumpster-rental-vs-bagster-jackson-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Dumpster Rental vs. Bagster in Jackson, MS</Link>
                    </p>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Book Your Roll-Off Today</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Same-day delivery available across Central Mississippi — book online or call now
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Roll-Off CTA" />
                        <TrackedPhoneLink location="Roll-Off CTA" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
