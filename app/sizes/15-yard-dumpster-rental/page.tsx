import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/sizes/15-yard-dumpster-rental' },
    title: '15 Yard Dumpster Rental Jackson MS',
    description:
        '15 yard dumpster rental in Jackson MS from $399. 14ft x 7.5ft x 4ft container holds 6 pickup truck loads. Our most popular size for home renovations, roofing & estate cleanouts. Same-day delivery. Call 601-316-7891.',
    openGraph: {
        title: '15 Yard Dumpster Rental Jackson MS',
        description: '15 yard roll-off dumpster in Central MS from $399 — our most popular size. Same-day delivery, flat-rate pricing.',
        url: 'https://midsouthdumpsterms.com/sizes/15-yard-dumpster-rental',
    },
}

export default function FifteenYardDumpsterPage() {
    const serviceSchema = generateServiceSchema(
        '15 Yard Dumpster Rental',
        '15 yard roll-off dumpster rental in Central Mississippi. 14ft x 7.5ft x 4ft container, holds 6 pickup truck loads. Starting at $399 with same-day delivery. Our most popular size.',
        'Central Mississippi',
        [
            { price: '399', description: '15 Yard Dumpster - 1 Day Rental (Includes 2 tons)' },
            { price: '429', description: '15 Yard Dumpster - 3 Day Rental (Includes 2 tons)' },
            { price: '449', description: '15 Yard Dumpster - 7 Day Rental (Includes 2 tons)' },
        ]
    )
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Dumpster Sizes', url: 'https://midsouthdumpsterms.com/sizes' },
        { name: '15 Yard Dumpster Rental', url: 'https://midsouthdumpsterms.com/sizes/15-yard-dumpster-rental' },
    ])
    const faqSchema = generateFAQSchema([
        { question: 'How much does a 15 yard dumpster rental cost in Jackson, MS?', answer: 'A 15 yard dumpster rental from Mid South starts at $399 for 1 day, $429 for 3 days, and $449 for 7 days. All prices include delivery, pickup, and up to 2 tons of disposal.' },
        { question: 'What are the dimensions of the 15 yard dumpster?', answer: 'Our 15 yard dumpster is 14 feet long, 7.5 feet wide, and 4 feet high. The lower 4-foot wall height makes it easy to toss debris over the side without lifting items as high.' },
        { question: 'How many pickup truck loads fit in a 15 yard dumpster?', answer: 'A 15 yard dumpster holds approximately 6 standard pickup truck loads of debris.' },
        { question: 'Is a 15 yard dumpster good for roofing?', answer: 'Yes — a 15 yard dumpster is the most popular size for roofing projects in Central Mississippi. It handles a standard residential roof tear-off comfortably, including shingles, underlayment, and flashing.' },
        { question: 'Why is the 15 yard your most popular size?', answer: 'The 15 yard hits the sweet spot for most residential and contractor projects. It\'s large enough for most home renovations, roofing, and estate cleanouts, while still fitting comfortably in a standard driveway. The 2-ton weight allowance also covers most debris types without overage fees.' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            {/* Hero */}
            <section style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', color: 'white', padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }}>
                        <div>
                            <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', borderRadius: '999px', padding: '0.3rem 1rem', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '0.5px' }}>⭐ MOST POPULAR SIZE</div>
                            <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>15 Yard Dumpster Rental in Central Mississippi</h1>
                            <p style={{ fontSize: '1.2rem', opacity: 0.92, marginBottom: '2rem' }}>
                                Our most popular roll-off — the go-to size for roofing, home renovations, and estate cleanouts. Same-day delivery from <strong>$399 flat</strong>.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <BookingButton label="Book 15 Yard Dumpster" location="15 Yard Hero" />
                                <TrackedPhoneLink location="15 Yard Hero" className="btn btn-outline-white btn-lg">Call 601-316-7891</TrackedPhoneLink>
                            </div>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', minWidth: '200px', textAlign: 'center', flexShrink: 0 }}>
                            <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }}>15</div>
                            <div style={{ fontSize: '1rem', opacity: 0.9 }}>Cubic Yards</div>
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.3)', marginTop: '1rem', paddingTop: '1rem', fontSize: '2rem', fontWeight: 800 }}>$399</div>
                            <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Starting price</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specs */}
            <section style={{ padding: 'var(--spacing-2xl) 0', background: 'var(--color-gray-50)' }}>
                <div className="container">
                    <h2 className="text-center">15 Yard Dumpster Specifications</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.25rem', marginTop: '2rem', maxWidth: '900px', margin: '2rem auto 0' }}>
                        {[
                            { icon: '📏', label: 'Length', value: '14 feet' },
                            { icon: '↔️', label: 'Width', value: '7.5 feet' },
                            { icon: '↕️', label: 'Height', value: '4 feet' },
                            { icon: '🚛', label: 'Capacity', value: '15 cu. yards' },
                            { icon: '⚖️', label: 'Weight Limit', value: '2 tons (4,000 lbs)' },
                            { icon: '🛻', label: 'Truck Loads', value: '~6 pickups' },
                            { icon: '🗑️', label: 'Trash Bags', value: '~80–100 bags' },
                        ].map((spec) => (
                            <div key={spec.label} style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '1.25rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                                <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>{spec.icon}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{spec.label}</div>
                                <div style={{ fontWeight: 700, color: 'var(--color-gray-800)', marginTop: '0.25rem' }}>{spec.value}</div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '2.5rem', background: 'white', borderRadius: 'var(--radius-xl)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)', maxWidth: '600px', margin: '2.5rem auto 0' }}>
                        <p style={{ textAlign: 'center', fontSize: '0.95rem', color: 'var(--color-gray-600)', marginBottom: '0.75rem' }}>
                            💡 <strong>Pro tip:</strong> The 15 yard has a <strong>lower 4-foot wall height</strong> vs. the 20 yard — making it easier to toss debris over the side without heavy lifting.
                        </p>
                    </div>

                    {/* Size comparison bars */}
                    <div style={{ marginTop: '2rem', background: 'white', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: 'var(--shadow-sm)', maxWidth: '600px', margin: '2rem auto 0' }}>
                        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--color-gray-600)' }}>Size Comparison</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {[
                                { label: '10 Yard', width: '40%', color: 'var(--color-gray-300)', active: false },
                                { label: '15 Yard (You are here)', width: '60%', color: 'var(--color-primary)', active: true },
                                { label: '20 Yard', width: '85%', color: 'var(--color-gray-300)', active: false },
                            ].map((bar) => (
                                <div key={bar.label}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.85rem', fontWeight: bar.active ? 700 : 400, color: bar.active ? 'var(--color-primary)' : 'var(--color-gray-600)' }}>
                                        <span>{bar.label}</span>
                                    </div>
                                    <div style={{ background: 'var(--color-gray-100)', borderRadius: '4px', height: '28px', overflow: 'hidden' }}>
                                        <div style={{ width: bar.width, height: '100%', background: bar.color, borderRadius: '4px' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-gray-400)', marginTop: '1rem' }}>
                            <Link href="/sizes" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Compare all sizes →</Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h2 className="text-center">15 Yard Dumpster Pricing</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>Flat-rate pricing — delivery, pickup, and up to 2 tons of disposal included</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '700px', margin: '0 auto' }}>
                        {[
                            { duration: '1 Day', price: '$399', note: 'Quick weekend jobs' },
                            { duration: '3 Days', price: '$429', note: 'Most popular rental period', popular: true },
                            { duration: '7 Days', price: '$449', note: 'Larger or ongoing projects' },
                        ].map((tier) => (
                            <div key={tier.duration} style={{ background: tier.popular ? 'var(--color-primary)' : 'var(--color-gray-50)', borderRadius: 'var(--radius-xl)', padding: '1.75rem', textAlign: 'center', color: tier.popular ? 'white' : 'inherit', position: 'relative' }}>
                                {tier.popular && <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-secondary)', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '2px 12px', borderRadius: '999px' }}>MOST POPULAR</div>}
                                <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', opacity: tier.popular ? 0.9 : 0.7 }}>{tier.duration}</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1 }}>{tier.price}</div>
                                <div style={{ fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.75 }}>{tier.note}</div>
                            </div>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--color-gray-500)' }}>
                        Overage rate: $75/ton over the 2-ton limit. Extensions available at $30/day.
                    </p>
                </div>
            </section>

            {/* What fits */}
            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why the 15 Yard Is Our Most Popular Size</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                The 15 yard hits the sweet spot between capacity and cost. It&apos;s big enough to handle a full roofing tear-off or multi-room renovation — but still fits easily in a standard residential driveway and costs only $50 more than the 10 yard.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>The 2-ton weight limit covers most debris types without triggering overage fees — making it the lowest-risk choice if you&apos;re not sure how heavy your load will be.</p>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2, marginTop: '1rem' }}>
                                <li>🛻 About <strong>6 standard pickup truck loads</strong></li>
                                <li>🗑️ Roughly <strong>80–100 standard trash bags</strong></li>
                                <li>🏠 Contents of a <strong>2-car garage cleanout</strong></li>
                                <li>🏚️ Full <strong>roofing tear-off</strong> on most homes</li>
                                <li>🔨 A complete <strong>kitchen or multi-room remodel</strong></li>
                            </ul>
                        </div>
                        <div>
                            <h2>Best Projects for a 15 Yard</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
                                {[
                                    '🏠 Roofing tear-offs', '🔨 Kitchen remodel', '🏚️ Estate cleanout', '🏘️ Rental cleanout',
                                    '🪵 Multi-room demo', '🛠️ Contractor jobs', '🌿 Storm cleanup', '🏗️ Mid-size construction',
                                ].map((item) => (
                                    <div key={item} style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '0.6rem 0.75rem', fontSize: '0.9rem', boxShadow: 'var(--shadow-sm)' }}>{item}</div>
                                ))}
                            </div>
                            <div style={{ marginTop: '1.5rem', background: 'rgba(var(--color-primary-rgb), 0.06)', borderLeft: '4px solid var(--color-primary)', padding: '1rem 1.25rem', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-gray-700)' }}>
                                    <strong>Heavier project?</strong> If you&apos;re doing a full home gut or major construction, the <Link href="/sizes/20-yard-dumpster-rental" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>20 yard</Link> gives you 50% more volume and a higher weight limit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accepted */}
            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>✅ Accepted in the 15 Yard</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2 }}>
                                <li>✓ Roofing shingles and underlayment</li>
                                <li>✓ Drywall, lumber, and framing</li>
                                <li>✓ Flooring, carpet, and tile</li>
                                <li>✓ Household furniture and appliances</li>
                                <li>✓ Yard waste and tree trimmings</li>
                                <li>✓ Windows, doors, and trim</li>
                                <li>✓ General renovation and construction debris</li>
                            </ul>
                        </div>
                        <div>
                            <h2>🚫 Not Accepted</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2, color: 'var(--color-gray-600)' }}>
                                <li>✗ Concrete, brick, or block</li>
                                <li>✗ Dirt, soil, or gravel</li>
                                <li>✗ Hazardous materials or chemicals</li>
                                <li>✗ Paint, oils, or solvents</li>
                                <li>✗ Tires or batteries</li>
                                <li>✗ Refrigerators or HVAC units (Freon)</li>
                                <li>✗ Medical or biological waste</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivery prep */}
            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h2 className="text-center">Preparing for Your 15 Yard Delivery</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
                        {[
                            { icon: '📐', title: 'Space Needed', desc: 'The container is 14ft long. Allow 60+ feet of clearance for our truck to back in safely.' },
                            { icon: '🌳', title: 'Overhead Clearance', desc: 'At least 23 feet of overhead clearance needed. Check for trees, power lines, and garage doors.' },
                            { icon: '🚗', title: 'Clear the Area', desc: 'Remove vehicles, trailers, and equipment from the drop zone before delivery.' },
                            { icon: '🛡️', title: 'Driveway Protection', desc: 'We use boards to protect your driveway during placement and pickup — no damage to your surface.' },
                        ].map((item) => (
                            <div key={item.title} style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                                <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container" style={{ maxWidth: '720px' }}>
                    <h2 className="text-center">15 Yard Dumpster FAQs</h2>
                    <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { q: 'Is a 15 yard dumpster big enough for a roofing project?', a: 'Yes — a 15 yard is the most common size for residential roofing in Central MS. It handles a standard single-story shingle tear-off with room to spare. For multi-story or large roofs, consider a 20 yard.' },
                            { q: 'Can I put heavy materials in a 15 yard?', a: 'Yes, up to 2 tons (4,000 lbs). Keep in mind that heavy materials like roofing shingles or lumber are denser than they look — don\'t overfill visually without thinking about weight. Overages are billed at $75/ton.' },
                            { q: 'Does a 15 yard fit in a standard driveway?', a: 'Yes. At 14ft long x 7.5ft wide, it fits in most residential driveways. Having 60+ feet of clear driveway length makes delivery easiest.' },
                            { q: 'How is a 15 yard different from a 10 yard?', a: 'The 15 yard is 14ft long (vs. 10ft), holds 6 truck loads instead of 4, has a 2-ton limit vs. 1-ton, and costs only $50 more starting. For most projects, the 15 yard is the better value.' },
                            { q: 'Can I get same-day delivery of a 15 yard?', a: 'Yes — call 601-316-7891 before noon and we can typically deliver the same day throughout Central Mississippi.' },
                        ].map((item) => (
                            <div key={item.q} style={{ background: 'var(--color-gray-50)', borderRadius: 'var(--radius-lg)', padding: '1.25rem 1.5rem' }}>
                                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--color-gray-800)' }}>{item.q}</h3>
                                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', margin: 0 }}>{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other sizes */}
            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h2 className="text-center">Compare Other Dumpster Sizes</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
                        <Link href="/sizes/10-yard-dumpster-rental" style={{ textDecoration: 'none' }}>
                            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '1.75rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)' }}>10</div>
                                <div style={{ color: 'var(--color-gray-500)', fontSize: '0.85rem' }}>Cubic Yards</div>
                                <div style={{ fontWeight: 700, marginTop: '0.5rem' }}>From $349</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', marginTop: '0.25rem' }}>10ft × 7.5ft × 5ft</div>
                                <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-primary)' }}>Small projects →</div>
                            </div>
                        </Link>
                        <Link href="/sizes/20-yard-dumpster-rental" style={{ textDecoration: 'none' }}>
                            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '1.75rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)' }}>20</div>
                                <div style={{ color: 'var(--color-gray-500)', fontSize: '0.85rem' }}>Cubic Yards</div>
                                <div style={{ fontWeight: 700, marginTop: '0.5rem' }}>From $449</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', marginTop: '0.25rem' }}>14ft × 7.5ft × 6.5ft</div>
                                <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-primary)' }}>Large projects →</div>
                            </div>
                        </Link>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                        <Link href="/sizes" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>← View full size guide & comparison</Link>
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-2xl) 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Ready to Book Your 15 Yard Dumpster?</h2>
                    <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: 'var(--spacing-xl)' }}>Our most popular size — same-day delivery available, call before noon or book online</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book 15 Yard Dumpster" location="15 Yard CTA" />
                        <TrackedPhoneLink location="15 Yard CTA" className="btn btn-outline-white btn-lg">Call 601-316-7891</TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
