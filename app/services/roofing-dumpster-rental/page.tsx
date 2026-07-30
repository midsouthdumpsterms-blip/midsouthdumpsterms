import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import styles from '../services.module.css'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/services/roofing-dumpster-rental' },
    title: 'Roofing Dumpster Rental Jackson MS | Shingle Disposal | Mid South',
    description:
        'Roofing dumpster rental in Jackson MS. Roll-off containers for shingle tear-offs, re-roofs & roofing debris disposal. Same-day delivery. Flat-rate pricing from $349. Call 601-316-7891.',
    openGraph: {
        title: 'Roofing Dumpster Rental Jackson MS | Mid South',
        description: 'Roll-off dumpsters for roofing projects in Central MS. Shingle tear-offs, re-roofs, and roofing debris. Same-day delivery.',
        url: 'https://midsouthdumpsterms.com/services/roofing-dumpster-rental',
    },
}

export default function RoofingDumpsterRentalPage() {
    const serviceSchema = generateServiceSchema(
        'Roofing Dumpster Rental',
        'Roll-off dumpster rental for roofing projects in Central Mississippi. Ideal for shingle tear-offs, re-roofs, flat roof replacement, and roofing debris disposal. Same-day delivery available.',
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
        { name: 'Roofing Dumpster Rental', url: 'https://midsouthdumpsterms.com/services/roofing-dumpster-rental' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: 'What size dumpster do I need for a roofing job?',
            answer: 'For a standard residential roof tear-off (up to 2,000 sq ft), the 15-yard dumpster is the most popular choice — it holds about 6 pickup truck loads and includes 2 tons. For larger homes or commercial roofs, the 20-yard handles more volume. Our 10-yard works for small repairs or flat roofing patches.',
        },
        {
            question: 'Can I put roofing shingles in a regular dumpster?',
            answer: 'Yes! Asphalt shingles, underlayment, flashing, roofing nails, tar paper, and wood decking are all accepted in our roll-off dumpsters. We do not accept roofing materials containing asbestos — if your roof was built before 1980, we recommend having it tested first.',
        },
        {
            question: 'How quickly can you deliver a roofing dumpster?',
            answer: 'Same-day delivery is available 7 days a week when you call before noon. Many roofing contractors call the morning of the job, and we have the container on-site before the crew starts the tear-off.',
        },
        {
            question: 'How much does a roofing dumpster cost in Jackson MS?',
            answer: 'Our flat-rate pricing starts at $349 for a 10-yard (1-day). The 15-yard (most popular for roofing) starts at $399, and the 20-yard starts at $449. Prices include delivery, pickup, and disposal. Overage is $55/ton for 10 and 15-yard containers.',
        },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roofing Dumpster Rental in Central Mississippi</h1>
                    <p className={styles.heroSubtext}>
                        Roll-off containers for shingle tear-offs, re-roofs, and roofing debris — delivered to your job site same-day, flat-rate pricing
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        <BookingButton label="Book Roofing Dumpster" location="Roofing Hero" />
                        <TrackedPhoneLink location="Roofing Hero" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Roofing Projects We Handle</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-2xl)', fontSize: '1.125rem' }}>
                        Whether you&apos;re a roofing contractor running 3 jobs a week or a homeowner handling a single tear-off, we have the right container for you.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                        {[
                            { icon: '🏠', title: 'Residential Tear-Offs', desc: 'Complete shingle removal and re-roof projects. Our 15-yard handles most residential roofing tear-offs with room to spare.' },
                            { icon: '🏢', title: 'Commercial Roofing', desc: 'Flat roof replacements, TPO/EPDM removal, and commercial roofing projects that generate high-volume debris.' },
                            { icon: '⛈️', title: 'Storm Damage Repairs', desc: 'After hail or wind damage, we deliver fast so your roofing crew can start repairs immediately. Same-day available.' },
                            { icon: '🔧', title: 'Partial Repairs', desc: 'Smaller patching jobs, valley repairs, and flashing replacement that don\'t need a full-size container — our 10-yard is perfect.' },
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
                    <h2 className="text-center">Available Dumpster Sizes for Roofing</h2>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard size="10" capacity="4 Pickup Truck Loads" weight="1 Ton Included" pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }} idealFor={['Partial Roof Repairs', 'Small Patching Jobs', 'Flat Roof Sections', 'Flashing Replacement']} />
                        <DumpsterSizeCard size="15" capacity="6 Pickup Truck Loads" weight="2 Tons Included" pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }} idealFor={['Full Shingle Tear-Off', 'Standard Re-Roof', 'Most Residential Jobs', 'Storm Damage Repairs']} popular />
                        <DumpsterSizeCard size="20" capacity="8 Pickup Truck Loads" weight="3 Tons Included" pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }} idealFor={['Large Homes (2,500+ sqft)', 'Multi-Layer Tear-Off', 'Commercial Roofing', 'Tile & Slate Removal']} />
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>What Roofing Debris We Accept</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                                <li>✓ Asphalt shingles (3-tab and architectural)</li>
                                <li>✓ Underlayment and felt paper</li>
                                <li>✓ Flashing and drip edge</li>
                                <li>✓ Roofing nails and fasteners</li>
                                <li>✓ Wood decking and plywood</li>
                                <li>✓ Ridge caps and vents</li>
                                <li>✓ Gutters and downspouts</li>
                                <li>✓ TPO, EPDM, and modified bitumen</li>
                            </ul>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-500)', marginTop: '1rem' }}>
                                <strong>Note:</strong> Roofing shingles are heavy — a standard 20-square tear-off weighs 4,000–6,000 lbs. Choose your dumpster size carefully to stay within weight limits. We do not accept asbestos-containing materials.
                            </p>
                        </div>
                        <div>
                            <h2>Built for Roofing Crews</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                Roofers need dumpsters delivered before the crew arrives and picked up as soon as the job is done. We offer same-day delivery across Jackson, Brandon, Madison, Clinton, and all of Central MS.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                We work with roofing contractors daily and understand the urgency of roofing projects — especially after storm damage. Our 1-day rental rate is designed for quick tear-off-and-replace jobs.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                Read our detailed <Link href="/blog/roofing-dumpster-rental-jackson-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>roofing dumpster rental guide</Link> and our <Link href="/blog/roofing-contractor-dumpster-rental-jackson-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>guide for roofing contractors</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container container-narrow">
                    <h2 className="text-center">Roofing Dumpster Rental FAQ</h2>
                    <div style={{ marginTop: 'var(--spacing-xl)' }}>
                        {[
                            { q: 'What size dumpster do I need for a roofing job?', a: 'For a standard residential tear-off (up to 2,000 sq ft), the 15-yard is most popular. For larger homes or multi-layer tear-offs, go with the 20-yard.' },
                            { q: 'Can I put roofing shingles in a regular dumpster?', a: 'Yes! Asphalt shingles, underlayment, flashing, nails, tar paper, and wood decking are all accepted. We do not accept asbestos-containing materials.' },
                            { q: 'How quickly can you deliver a roofing dumpster?', a: 'Same-day delivery is available 7 days a week when you call before noon.' },
                            { q: 'How heavy is roofing debris?', a: 'Roofing shingles are deceptively heavy. A standard 20-square residential tear-off generates 4,000–6,000 lbs of debris. Our 15-yard includes 2 tons and the 20-yard includes 3 tons.' },
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
                    <h2>Ready to Order a Roofing Dumpster?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Same-day delivery available — call now or book online to get your container on-site before the crew arrives
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Roofing CTA" />
                        <TrackedPhoneLink location="Roofing CTA" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
