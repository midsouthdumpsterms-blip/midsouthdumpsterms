import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import styles from '../services.module.css'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/services/roofing-dumpster-rental' },
    title: 'Roofing Dumpster Rental Jackson MS',
    description:
        'Shingle tear-off dumpsters placed close to your drop zone in Jackson MS. A typical 25-square roof fits a 20-yard container. From $399.',
    openGraph: {
        title: 'Roofing Dumpster Rental Jackson MS',
        description: 'Roll-off dumpsters for roofing projects in Central MS. Shingle tear-offs, re-roofs, and roofing debris. Same-day delivery.',
        url: 'https://midsouthdumpsterms.com/services/roofing-dumpster-rental',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
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

    const faqs = [
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
        {
            question: 'How heavy is roofing debris?',
            answer: 'Roofing shingles are deceptively heavy. A standard 20-square residential tear-off generates 4,000–6,000 lbs of debris. Our 15-yard includes 2 tons and the 20-yard includes 3 tons.',
        },
    ]

    const faqSchema = generateFAQSchema(faqs)

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

            {/*
                Folded in from /blog/roofing-dumpster-rental-jackson-ms, which
                carried a byte-identical title to this page and was the better
                article of the two. Sizing by roof area and the loading advice
                were the parts this page did not have.
            */}
            <section>
                <div className="container container-narrow">
                    <h2>Sizing a Roofing Dumpster by Roof Area</h2>
                    <p>
                        Shingles are among the heaviest debris we haul. A single square &mdash; 100 square
                        feet of 3-tab asphalt &mdash; weighs roughly 230 to 350 lbs, so a 20-square tear-off
                        runs 4,000 to 6,000 lbs before you add decking or felt. A 15-yard container can
                        reach its weight limit before it looks half full. Size on weight, not volume.
                    </p>
                    <div style={{ overflowX: 'auto', margin: 'var(--spacing-lg) 0' }}>
                        <table className={styles.dataTable}>
                            <thead>
                                <tr>
                                    <th>Roof size or situation</th>
                                    <th>Recommended size</th>
                                    <th>From</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Up to 1,500 sq ft, single shingle layer</td>
                                    <td>15 yard (2 tons included)</td>
                                    <td>$399</td>
                                </tr>
                                <tr>
                                    <td>1,500&ndash;2,500 sq ft, or a double layer</td>
                                    <td>20 yard (3 tons included)</td>
                                    <td>$449</td>
                                </tr>
                                <tr>
                                    <td>Large home, or roofing plus decking replacement</td>
                                    <td>20 yard &mdash; call to discuss</td>
                                    <td>$449+</td>
                                </tr>
                                <tr>
                                    <td>Partial repair, flat-roof patch, flashing only</td>
                                    <td>10 yard (1 ton included)</td>
                                    <td>$349</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        Two or more layers of shingles is common in older Jackson neighborhoods &mdash;
                        Belhaven, Fondren and the pre-war housing stock in West Jackson especially. A
                        double layer generates close to twice the weight, so take the 20-yard. If you are
                        not sure what is up there, call{' '}
                        <TrackedPhoneLink location="Roofing Sizing Section">601-316-7891</TrackedPhoneLink>{' '}
                        and we will size it with you.
                    </p>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container container-narrow">
                    <h2>Getting the Most Out of a Roofing Dumpster</h2>
                    <ul style={{ lineHeight: 1.9 }}>
                        <li>
                            <strong>Place it close to the roofline.</strong> The shorter the throw, the
                            faster the tear-off. Tell us which elevation the crew is starting on and we
                            will spot the container there.
                        </li>
                        <li>
                            <strong>Load shingles first.</strong> Heavy material on the bottom keeps the
                            center of gravity low and the container stable while it is being loaded.
                        </li>
                        <li>
                            <strong>Keep wet debris out.</strong> Waterlogged material adds weight fast.
                            Separate roofing debris from anything that has been sitting in the rain.
                        </li>
                        <li>
                            <strong>Book three to seven days.</strong> Most residential re-roofs in the
                            Jackson metro run one to three days. The longer window costs $30 to $50 more
                            and takes the schedule pressure off your crew.
                        </li>
                        <li>
                            <strong>Test before you tear off a pre-1980 roof.</strong> Asbestos-containing
                            shingles turn up in older Jackson homes and we cannot accept them. Have them
                            tested first &mdash; call us and we will point you to a local lab.
                        </li>
                    </ul>
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
                                Working a job in the capital? See <Link href="/service-areas/jackson" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>dumpster delivery across Jackson</Link>, or read our <Link href="/blog/roofing-contractor-dumpster-rental-jackson-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>guide for roofing contractors</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <FaqSection faqs={faqs} title="Roofing Dumpster Rental FAQ" background />

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
