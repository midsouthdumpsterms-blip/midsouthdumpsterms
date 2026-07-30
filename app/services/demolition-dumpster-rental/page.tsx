import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import styles from '../services.module.css'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/services/demolition-dumpster-rental' },
    title: 'Demolition Dumpster Rental Jackson MS | Tear-Down & Demo Debris',
    description:
        'Demolition dumpster rental in Jackson MS and Central Mississippi. Roll-off containers for interior demo, tear-downs, gut jobs & renovation debris. Same-day delivery from $349. Call 601-316-7891.',
    openGraph: {
        title: 'Demolition Dumpster Rental Jackson MS',
        description: 'Roll-off dumpsters for demolition and tear-down projects in Central MS. Interior demo, gut jobs, structural tear-downs. Same-day delivery.',
        url: 'https://midsouthdumpsterms.com/services/demolition-dumpster-rental',
    },
}

export default function DemolitionDumpsterRentalPage() {
    const serviceSchema = generateServiceSchema(
        'Demolition Dumpster Rental',
        'Roll-off dumpster rental for demolition projects in Central Mississippi. Handles interior demo, structural tear-downs, gut jobs, and renovation debris removal.',
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
        { name: 'Demolition Dumpster Rental', url: 'https://midsouthdumpsterms.com/services/demolition-dumpster-rental' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: 'What size dumpster do I need for a demolition project?',
            answer: 'For small demo jobs like a single bathroom gut, a 10-yard dumpster works well. For kitchen or multi-room demos, the 15-yard is our most popular choice. For full structural tear-downs, whole-house guts, or commercial demolition, the 20-yard handles the volume best.',
        },
        {
            question: 'What demolition debris can I put in the dumpster?',
            answer: 'You can dispose of drywall, lumber, framing, flooring, tile, carpet, insulation, windows, doors, trim, cabinetry, PVC pipe, and general demolition debris. We do not accept concrete, brick, cinderblock, dirt, hazardous materials, or asbestos.',
        },
        {
            question: 'Can I get a demolition dumpster delivered the same day?',
            answer: 'Yes! Same-day delivery is available 7 days a week when you call before noon. Call us at 601-316-7891 or book online to reserve your demo dumpster for delivery today.',
        },
        {
            question: 'How much does a demolition dumpster rental cost in Jackson MS?',
            answer: 'Our flat-rate pricing starts at $349 for a 10-yard dumpster (1-day rental). The 15-yard starts at $399, and the 20-yard starts at $449. All prices include delivery, pickup, and disposal with no hidden fees.',
        },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Demolition Dumpster Rental in Central Mississippi</h1>
                    <p className={styles.heroSubtext}>
                        Roll-off containers for interior demo, tear-downs, and gut jobs — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        <BookingButton label="Book Demo Dumpster" location="Demolition Hero" />
                        <TrackedPhoneLink location="Demolition Hero" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Demolition Projects We Handle</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-2xl)', fontSize: '1.125rem' }}>
                        From single-room gut jobs to full structural tear-downs, our dumpsters keep your demo site clean and your project moving.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                        {[
                            { icon: '🔨', title: 'Interior Demolition', desc: 'Drywall, framing, flooring, cabinets, and fixtures from interior gut-outs and remodels.' },
                            { icon: '🏚️', title: 'Structural Tear-Downs', desc: 'Walls, ceilings, partition removal, and non-load-bearing structural demolition debris.' },
                            { icon: '🛁', title: 'Bathroom & Kitchen Guts', desc: 'Tile, vanities, countertops, drywall, and plumbing fixtures from full room tear-outs.' },
                            { icon: '🏗️', title: 'Commercial Demo', desc: 'Office build-out removals, retail space tear-downs, and commercial renovation debris.' },
                            { icon: '🪵', title: 'Deck & Shed Demolition', desc: 'Wood decking, fence panels, old sheds, playsets, and outdoor structure tear-downs.' },
                            { icon: '🪟', title: 'Window & Door Replacements', desc: 'Old windows, frames, trim, siding, and materials from replacement projects.' },
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
                    <h2 className="text-center">Available Dumpster Sizes for Demolition</h2>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard size="10" capacity="4 Pickup Truck Loads" weight="1 Ton Included" pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }} idealFor={['Bathroom Demo', 'Single-Room Gut', 'Small Tear-Out', 'Light Demolition']} />
                        <DumpsterSizeCard size="15" capacity="6 Pickup Truck Loads" weight="2 Tons Included" pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }} idealFor={['Kitchen Demo', 'Multi-Room Guts', 'Deck Tear-Down', 'Medium Demolition']} popular />
                        <DumpsterSizeCard size="20" capacity="8 Pickup Truck Loads" weight="3 Tons Included" pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }} idealFor={['Full House Gut', 'Structural Demo', 'Commercial Tear-Down', 'Large Demolition']} />
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>What Demolition Debris We Accept</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                                <li>✓ Drywall, plaster, and lath</li>
                                <li>✓ Lumber, framing, and studs</li>
                                <li>✓ Tile, flooring, and carpet</li>
                                <li>✓ Cabinetry, vanities, and countertops</li>
                                <li>✓ Windows, doors, and trim</li>
                                <li>✓ Insulation materials</li>
                                <li>✓ PVC pipe and electrical conduit</li>
                                <li>✓ Wood decking and fence panels</li>
                            </ul>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-500)', marginTop: '1rem' }}>
                                <strong>Note:</strong> We do not accept concrete, brick, cinderblock, dirt, hazardous materials, or asbestos.
                            </p>
                        </div>
                        <div>
                            <h2>Why Contractors Choose Mid South for Demo</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                Demolition moves fast — your dumpster should too. We offer same-day delivery across the Jackson metro so you never wait on a container to start swinging a sledgehammer.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                Our flat-rate pricing means no surprise overages at the end of your demo project. Price includes delivery, pickup, and disposal — no hidden fees, ever.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                Read our full guide on <Link href="/blog/deck-shed-demolition-dumpster-rental-jackson-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>deck and shed demolition dumpster rental</Link> and our <Link href="/blog/contractor-dumpster-rental-jackson-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>contractor dumpster rental guide</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container container-narrow">
                    <h2 className="text-center">Demolition Dumpster Rental FAQ</h2>
                    <div style={{ marginTop: 'var(--spacing-xl)' }}>
                        {[
                            { q: 'What size dumpster do I need for a demolition project?', a: 'For small demo jobs like a single bathroom gut, a 10-yard dumpster works well. For kitchen or multi-room demos, the 15-yard is our most popular choice. For full structural tear-downs, whole-house guts, or commercial demolition, the 20-yard handles the volume best.' },
                            { q: 'What demolition debris can I put in the dumpster?', a: 'You can dispose of drywall, lumber, framing, flooring, tile, carpet, insulation, windows, doors, trim, cabinetry, PVC pipe, and general demolition debris. We do not accept concrete, brick, cinderblock, dirt, hazardous materials, or asbestos.' },
                            { q: 'Can I get a demolition dumpster delivered the same day?', a: 'Yes! Same-day delivery is available 7 days a week when you call before noon. Call us at 601-316-7891 or book online.' },
                            { q: 'How much does a demolition dumpster rental cost in Jackson MS?', a: 'Flat-rate pricing starts at $349 for a 10-yard (1-day). 15-yard from $399, 20-yard from $449. All prices include delivery, pickup, and disposal.' },
                        ].map((faq) => (
                            <div key={faq.q} style={{ borderBottom: '1px solid var(--color-gray-200)', padding: 'var(--spacing-lg) 0' }}>
                                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{faq.q}</h3>
                                <p style={{ color: 'var(--color-gray-600)', margin: 0 }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Order a Demolition Dumpster?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Same-day delivery available — call now or book online to lock in your delivery slot
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Demolition CTA" />
                        <TrackedPhoneLink location="Demolition CTA" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
