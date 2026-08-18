import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/sizes/10-yard-dumpster-rental' },
    title: '10 Yard Dumpster Rental Jackson MS | $349',
    description:
        '10-yard dumpster rental in Jackson MS from $349. Holds about 4 pickup loads, 1 ton included. Ideal for garage cleanouts and small renovations.',
    openGraph: {
        title: '10 Yard Dumpster Rental Jackson MS',
        description: '10 yard roll-off dumpster in Central MS from $349. Same-day delivery, flat-rate pricing, no hidden fees.',
        url: 'https://midsouthdumpsterms.com/sizes/10-yard-dumpster-rental',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

export default function TenYardDumpsterPage() {
    const serviceSchema = generateServiceSchema(
        '10 Yard Dumpster Rental',
        '10 yard roll-off dumpster rental in Central Mississippi. 10ft x 7.5ft x 5ft container, holds 4 pickup truck loads. Starting at $349 with same-day delivery.',
        'Central Mississippi',
        [
            { price: '349', description: '10 Yard Dumpster - 1 Day Rental (Includes 1 ton)' },
            { price: '379', description: '10 Yard Dumpster - 3 Day Rental (Includes 1 ton)' },
            { price: '399', description: '10 Yard Dumpster - 7 Day Rental (Includes 1 ton)' },
        ]
    )
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Dumpster Sizes', url: 'https://midsouthdumpsterms.com/sizes' },
        { name: '10 Yard Dumpster Rental', url: 'https://midsouthdumpsterms.com/sizes/10-yard-dumpster-rental' },
    ])
    const faqSchema = generateFAQSchema([
        { question: 'How much does a 10 yard dumpster rental cost in Jackson, MS?', answer: 'A 10 yard dumpster rental from Mid South starts at $349 for 1 day, $379 for 3 days, and $399 for 7 days. All prices include delivery, pickup, and up to 1 ton of disposal. No hidden fees.' },
        { question: 'What are the dimensions of the 10 yard dumpster?', answer: 'Our 10 yard dumpster is 10 feet long, 7.5 feet wide, and 5 feet high. It fits comfortably in most residential driveways.' },
        { question: 'How many pickup truck loads fit in a 10 yard dumpster?', answer: 'A 10 yard dumpster holds approximately 4 standard pickup truck loads of debris.' },
        { question: 'What is a 10 yard dumpster good for?', answer: 'A 10 yard dumpster is ideal for small garage cleanouts, bathroom remodels, minor roofing projects, yard debris removal, and estate cleanouts with light materials.' },
        { question: 'Will a 10 yard dumpster fit in my driveway?', answer: 'Yes — at 10 feet long and 7.5 feet wide, our 10 yard containers fit in most standard driveways. We recommend having about 60 feet of clear access for our truck to back in safely.' },
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
                            <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Mid South Dumpster Rentals</p>
                            <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>10 Yard Dumpster Rental in Central Mississippi</h1>
                            <p style={{ fontSize: '1.2rem', opacity: 0.92, marginBottom: '2rem' }}>
                                Our smallest roll-off — perfect for residential cleanouts, minor renovations, and yard debris. Same-day delivery from <strong>$349 flat</strong>.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <BookingButton label="Book 10 Yard Dumpster" location="10 Yard Hero" />
                                <TrackedPhoneLink location="10 Yard Hero" className="btn btn-outline-white btn-lg">Call 601-316-7891</TrackedPhoneLink>
                            </div>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', minWidth: '200px', textAlign: 'center', flexShrink: 0 }}>
                            <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }}>10</div>
                            <div style={{ fontSize: '1rem', opacity: 0.9 }}>Cubic Yards</div>
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.3)', marginTop: '1rem', paddingTop: '1rem', fontSize: '2rem', fontWeight: 800 }}>$349</div>
                            <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Starting price</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specs */}
            <section style={{ padding: 'var(--spacing-2xl) 0', background: 'var(--color-gray-50)' }}>
                <div className="container">
                    <h2 className="text-center">10 Yard Dumpster Specifications</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.25rem', marginTop: '2rem', maxWidth: '900px', margin: '2rem auto 0' }}>
                        {[
                            { icon: '📏', label: 'Length', value: '10 feet' },
                            { icon: '↔️', label: 'Width', value: '7.5 feet' },
                            { icon: '↕️', label: 'Height', value: '5 feet' },
                            { icon: '🚛', label: 'Capacity', value: '10 cu. yards' },
                            { icon: '⚖️', label: 'Weight Limit', value: '1 ton (2,000 lbs)' },
                            { icon: '🛻', label: 'Truck Loads', value: '~4 pickups' },
                            { icon: '🗑️', label: 'Trash Bags', value: '~55–70 bags' },
                        ].map((spec) => (
                            <div key={spec.label} style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '1.25rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                                <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>{spec.icon}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{spec.label}</div>
                                <div style={{ fontWeight: 700, color: 'var(--color-gray-800)', marginTop: '0.25rem' }}>{spec.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Visual size diagram */}
                    <div style={{ marginTop: '2.5rem', background: 'white', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: 'var(--shadow-sm)', maxWidth: '600px', margin: '2.5rem auto 0' }}>
                        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--color-gray-600)' }}>Size Comparison</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {[
                                { label: '10 Yard (You are here)', width: '40%', color: 'var(--color-primary)', active: true },
                                { label: '15 Yard', width: '60%', color: 'var(--color-gray-300)', active: false },
                                { label: '20 Yard', width: '85%', color: 'var(--color-gray-300)', active: false },
                            ].map((bar) => (
                                <div key={bar.label}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.85rem', fontWeight: bar.active ? 700 : 400, color: bar.active ? 'var(--color-primary)' : 'var(--color-gray-600)' }}>
                                        <span>{bar.label}</span>
                                    </div>
                                    <div style={{ background: 'var(--color-gray-100)', borderRadius: '4px', height: '28px', overflow: 'hidden' }}>
                                        <div style={{ width: bar.width, height: '100%', background: bar.color, borderRadius: '4px', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-gray-400)', marginTop: '1rem' }}>Not sure which size you need? <Link href="/sizes" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Compare all sizes →</Link></p>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h2 className="text-center">10 Yard Dumpster Pricing</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>Flat-rate pricing — delivery, pickup, and up to 1 ton of disposal included</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '700px', margin: '0 auto' }}>
                        {[
                            { duration: '1 Day', price: '$349', note: 'Quick jobs & weekends' },
                            { duration: '3 Days', price: '$379', note: 'Most popular for cleanouts', popular: true },
                            { duration: '7 Days', price: '$399', note: 'Extended projects' },
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
                        Overage rate: $75/ton over the 1-ton limit. Extensions available at $30/day.
                    </p>
                </div>
            </section>

            {/* What fits / Ideal for */}
            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>What Fits in a 10 Yard Dumpster?</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>The 10 yard is our most compact roll-off, but it holds more than you might think. To put it in perspective:</p>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2, marginTop: '1rem' }}>
                                <li>🛻 About <strong>4 standard pickup truck loads</strong></li>
                                <li>🗑️ Roughly <strong>55–70 standard trash bags</strong></li>
                                <li>🏠 Contents of a <strong>small 1-car garage</strong></li>
                                <li>🛁 A full <strong>bathroom remodel</strong> (tile, fixtures, drywall)</li>
                                <li>🌿 A <strong>full yard cleanup</strong> — branches, brush, clippings</li>
                                <li>🏚️ A <strong>small bedroom cleanout</strong> with furniture</li>
                            </ul>
                            <p style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', marginTop: '1rem' }}>
                                <strong>Note:</strong> The 10 yard has a 1-ton (2,000 lb) limit. Heavy materials like roofing shingles or dense debris may hit the weight limit before you fill the container visually.
                            </p>
                        </div>
                        <div>
                            <h2>Best Projects for a 10 Yard</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
                                {[
                                    '🏠 Garage cleanout', '🛁 Bathroom remodel', '🌿 Yard waste', '📦 Estate cleanout',
                                    '🔨 Small renovation', '🗂️ Attic cleanout', '🪴 Landscaping debris', '🏘️ Tenant turnover',
                                ].map((item) => (
                                    <div key={item} style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '0.6rem 0.75rem', fontSize: '0.9rem', boxShadow: 'var(--shadow-sm)' }}>{item}</div>
                                ))}
                            </div>
                            <div style={{ marginTop: '1.5rem', background: 'rgba(var(--color-primary-rgb), 0.06)', borderLeft: '4px solid var(--color-primary)', padding: '1rem 1.25rem', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-gray-700)' }}>
                                    <strong>Not sure if a 10 yard is enough?</strong> When in doubt, go one size up — a 15 yard is only $50 more and you avoid overfilling or needing a second haul.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's accepted */}
            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>✅ Accepted in the 10 Yard</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2 }}>
                                <li>✓ Household furniture and items</li>
                                <li>✓ Carpet, flooring, and drywall</li>
                                <li>✓ Lumber, trim, and wood</li>
                                <li>✓ Yard waste and tree trimmings</li>
                                <li>✓ Roofing shingles and underlayment</li>
                                <li>✓ Appliances — washers, dryers, stoves</li>
                                <li>✓ General renovation debris</li>
                            </ul>
                        </div>
                        <div>
                            <h2>🚫 Not Accepted</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2, color: 'var(--color-gray-600)' }}>
                                <li>✗ Concrete, brick, or block (weight limit)</li>
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
                    <h2 className="text-center">Preparing for Delivery</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>The 10 yard is our most driveway-friendly size — here&apos;s what to expect</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                        {[
                            { icon: '📐', title: 'Space Needed', desc: 'The container itself is 10ft long. Allow about 60 feet of clear driveway length for our truck to back in and drop off safely.' },
                            { icon: '🌳', title: 'Overhead Clearance', desc: 'We need at least 23 feet of overhead clearance — watch for tree branches, power lines, and garage door openings.' },
                            { icon: '🚗', title: 'Move Vehicles', desc: 'Clear the drop zone of vehicles, trailers, and equipment before delivery to avoid delays or rescheduling.' },
                            { icon: '🛡️', title: 'Driveway Protection', desc: 'We use boards and proper placement techniques to protect your driveway surface during delivery and pickup.' },
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
                    <h2 className="text-center">10 Yard Dumpster FAQs</h2>
                    <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { q: 'Will a 10 yard dumpster fit in my driveway?', a: 'Yes — at 10ft long x 7.5ft wide, it fits in most standard residential driveways with ease. This is our most driveway-friendly size.' },
                            { q: 'How heavy can my load be?', a: 'The limit is 1 ton (2,000 lbs). If you\'re loading heavy materials like shingles, keep that in mind — you can hit the weight limit before visually filling the container. Overages are $75/ton.' },
                            { q: 'Do I need to be home for delivery?', a: 'No — as long as your driveway is clear and you\'ve told us where to place it, we can drop off and pick up without you present.' },
                            { q: 'Can I get same-day delivery?', a: 'Yes. Call 601-316-7891 before noon and we can typically deliver the same day across Central Mississippi.' },
                            { q: 'What if I need more space than I thought?', a: 'Call us — if we haven\'t picked up yet, we can sometimes swap to a 15 or 20 yard instead. Or we can schedule a second haul.' },
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
                        <Link href="/sizes/15-yard-dumpster-rental" style={{ textDecoration: 'none' }}>
                            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '1.75rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)', transition: 'all 0.2s', border: '2px solid transparent' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)' }}>15</div>
                                <div style={{ color: 'var(--color-gray-500)', fontSize: '0.85rem' }}>Cubic Yards</div>
                                <div style={{ fontWeight: 700, marginTop: '0.5rem' }}>From $399</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', marginTop: '0.25rem' }}>14ft × 7.5ft × 4ft</div>
                                <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-primary)' }}>Medium projects →</div>
                            </div>
                        </Link>
                        <Link href="/sizes/20-yard-dumpster-rental" style={{ textDecoration: 'none' }}>
                            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '1.75rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)', transition: 'all 0.2s', border: '2px solid transparent' }}>
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
                    <h2 style={{ color: 'white' }}>Ready to Book Your 10 Yard Dumpster?</h2>
                    <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: 'var(--spacing-xl)' }}>Same-day delivery available — call before noon or book online now</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book 10 Yard Dumpster" location="10 Yard CTA" />
                        <TrackedPhoneLink location="10 Yard CTA" className="btn btn-outline-white btn-lg">Call 601-316-7891</TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
