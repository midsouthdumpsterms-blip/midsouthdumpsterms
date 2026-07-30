import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import styles from '../services.module.css'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/services/storm-cleanup-dumpster-rental' },
    title: 'Storm Cleanup Dumpster Rental Jackson MS | Emergency Debris Removal | Mid South',
    description:
        'Storm cleanup dumpster rental in Jackson MS. Emergency roll-off containers for hurricane, tornado, hail & wind damage debris removal. Same-day delivery available 7 days a week. Call 601-316-7891.',
    openGraph: {
        title: 'Storm Cleanup Dumpster Rental Jackson MS | Mid South',
        description: 'Emergency dumpster rental for storm damage cleanup in Central MS. Same-day delivery for hurricane, tornado, and severe weather debris.',
        url: 'https://midsouthdumpsterms.com/services/storm-cleanup-dumpster-rental',
    },
}

export default function StormCleanupDumpsterRentalPage() {
    const serviceSchema = generateServiceSchema(
        'Storm Cleanup Dumpster Rental',
        'Emergency roll-off dumpster rental for storm cleanup in Central Mississippi. Handles debris from hurricanes, tornadoes, severe thunderstorms, hail damage, and flooding. Same-day delivery available 7 days a week.',
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
        { name: 'Storm Cleanup Dumpster Rental', url: 'https://midsouthdumpsterms.com/services/storm-cleanup-dumpster-rental' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: 'How fast can you deliver a dumpster after a storm?',
            answer: 'Same-day delivery is available when you call before noon, 7 days a week. After major storms, demand spikes quickly — we recommend calling as soon as you can assess your damage to secure a container. Call 601-316-7891.',
        },
        {
            question: 'What storm debris can I put in the dumpster?',
            answer: 'You can dispose of tree branches, limbs, leaves, roofing shingles, siding, fencing, damaged furniture, wet carpet and drywall, broken glass, and general storm debris. We do not accept standing water, hazardous materials, chemical containers, or propane tanks.',
        },
        {
            question: 'What size dumpster do I need for storm cleanup?',
            answer: 'For yard debris and minor damage, the 10-yard handles fallen branches and small debris. For moderate damage including roofing and fencing, the 15-yard is most popular. For major storm damage with large trees, structural debris, and full property cleanup, the 20-yard is recommended.',
        },
        {
            question: 'Do you work with insurance companies on storm cleanup?',
            answer: 'We provide detailed invoices that include delivery date, pickup date, dumpster size, and total cost — exactly what insurance adjusters need for your claim. We recommend saving your invoice and photos of the debris for your insurance file.',
        },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Storm Cleanup Dumpster Rental in Central Mississippi</h1>
                    <p className={styles.heroSubtext}>
                        Emergency roll-off containers for hurricane, tornado, and severe weather debris — same-day delivery when you need it most
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        <BookingButton label="Book Storm Dumpster" location="Storm Hero" />
                        <TrackedPhoneLink location="Storm Hero" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Storm Damage We Help Clean Up</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-2xl)', fontSize: '1.125rem' }}>
                        Central Mississippi sees its share of severe weather. When a storm hits, we deliver fast so you can start recovery immediately.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                        {[
                            { icon: '🌪️', title: 'Tornado Damage', desc: 'Structural debris, roofing, siding, fencing, and tree damage from tornado impact. We can typically deliver within hours of roads clearing.' },
                            { icon: '🌀', title: 'Hurricane Debris', desc: 'Large-scale debris from hurricane wind and rain damage — roofing, fallen trees, water-damaged materials, and property cleanup.' },
                            { icon: '⛈️', title: 'Severe Thunderstorms', desc: 'Fallen limbs, damaged fencing, blown shingles, and yard debris from strong thunderstorms and straight-line winds.' },
                            { icon: '🧊', title: 'Hail Damage Cleanup', desc: 'Damaged roofing, siding, gutters, and outdoor equipment from hail events. Coordinates well with roofing contractor schedules.' },
                            { icon: '🌊', title: 'Flood Debris Removal', desc: 'Water-damaged drywall, carpet, flooring, furniture, and personal belongings that need to be removed quickly to prevent mold.' },
                            { icon: '🌲', title: 'Fallen Trees & Limbs', desc: 'Once trees are cut and sectioned by tree service crews, our dumpsters haul away branches, limbs, and wood debris efficiently.' },
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
                    <h2 className="text-center">Available Dumpster Sizes for Storm Cleanup</h2>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard size="10" capacity="4 Pickup Truck Loads" weight="1 Ton Included" pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }} idealFor={['Yard Debris', 'Minor Storm Damage', 'Fallen Limbs', 'Small Property Cleanup']} />
                        <DumpsterSizeCard size="15" capacity="6 Pickup Truck Loads" weight="2 Tons Included" pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }} idealFor={['Roofing + Yard Debris', 'Moderate Storm Damage', 'Fence Replacement', 'Siding Removal']} popular />
                        <DumpsterSizeCard size="20" capacity="8 Pickup Truck Loads" weight="3 Tons Included" pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }} idealFor={['Major Storm Damage', 'Full Property Cleanup', 'Large Tree Debris', 'Structural Debris']} />
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>What Storm Debris We Accept</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                                <li>✓ Tree branches, limbs, and cut wood</li>
                                <li>✓ Roofing shingles and underlayment</li>
                                <li>✓ Damaged siding and gutters</li>
                                <li>✓ Fencing and fence posts</li>
                                <li>✓ Water-damaged drywall and insulation</li>
                                <li>✓ Wet carpet and flooring</li>
                                <li>✓ Damaged furniture and household items</li>
                                <li>✓ General storm debris and yard waste</li>
                            </ul>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-500)', marginTop: '1rem' }}>
                                <strong>Note:</strong> We do not accept standing water, hazardous materials, chemical containers, propane tanks, or asbestos. For appliances with refrigerant, call us to discuss options.
                            </p>
                        </div>
                        <div>
                            <h2>Storm Cleanup Tips</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                <strong>1. Document everything first.</strong> Before you start cleanup, take photos and videos of all damage for your insurance claim. This is critical for reimbursement.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                <strong>2. Call early for delivery.</strong> After major storms, dumpster demand spikes. Calling early — even the morning after — helps secure same-day delivery before availability runs out.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                <strong>3. Save your receipt.</strong> We provide detailed invoices that include everything insurance adjusters need — delivery date, size, duration, and total cost.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                Read our full <Link href="/blog/storm-cleanup-dumpster-rental-jackson-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>storm cleanup dumpster rental guide</Link> for more detailed advice.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container container-narrow">
                    <h2 className="text-center">Storm Cleanup Dumpster FAQ</h2>
                    <div style={{ marginTop: 'var(--spacing-xl)' }}>
                        {[
                            { q: 'How fast can you deliver a dumpster after a storm?', a: 'Same-day delivery when you call before noon. After major storms, we recommend calling as early as possible to secure availability.' },
                            { q: 'What storm debris can I put in the dumpster?', a: 'Tree branches, roofing shingles, siding, fencing, water-damaged materials, wet carpet, broken glass, and general storm debris. No hazardous materials or standing water.' },
                            { q: 'Do you work with insurance companies?', a: 'We provide detailed invoices with all information adjusters need. Save your invoice and document the debris with photos.' },
                            { q: 'What if I need multiple dumpsters?', a: 'We can deliver multiple containers for large storm cleanup projects. Call us at 601-316-7891 to discuss your specific situation.' },
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
                    <h2>Need a Storm Cleanup Dumpster Now?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Same-day emergency delivery available — call now or book online. We&apos;re here when you need us most.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Storm CTA" />
                        <TrackedPhoneLink location="Storm CTA" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
