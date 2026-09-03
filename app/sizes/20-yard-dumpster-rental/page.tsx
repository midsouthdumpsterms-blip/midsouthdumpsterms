import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateOfferCatalogSchema, generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/sizes/20-yard-dumpster-rental' },
    title: '20 Yard Dumpster Rental Jackson MS | $449',
    description:
        '20-yard dumpster rental in Jackson MS from $449. Holds about 8 pickup loads, 3 tons included. Built for roof tear-offs and whole-home cleanouts.',
    openGraph: {
        title: '20 Yard Dumpster Rental Jackson MS',
        description: '20 yard roll-off dumpster in Central MS from $449. Our largest size for major projects. Same-day delivery, flat-rate pricing.',
        url: 'https://midsouthdumpsterms.com/sizes/20-yard-dumpster-rental',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

export default function TwentyYardDumpsterPage() {
    const serviceSchema = generateServiceSchema(
        '20 Yard Dumpster Rental',
        '20 yard roll-off dumpster rental in Central Mississippi. 14ft x 7.5ft x 6.5ft container, holds 8 pickup truck loads. Starting at $449 with same-day delivery. Our largest available size.',
        'Central Mississippi',
        [
            { price: '449', description: '20 Yard Dumpster - 1 Day Rental (Includes 3 tons)' },
            { price: '479', description: '20 Yard Dumpster - 3 Day Rental (Includes 3 tons)' },
            { price: '499', description: '20 Yard Dumpster - 7 Day Rental (Includes 3 tons)' },
        ]
    )
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Dumpster Sizes', url: 'https://midsouthdumpsterms.com/sizes' },
        { name: '20 Yard Dumpster Rental', url: 'https://midsouthdumpsterms.com/sizes/20-yard-dumpster-rental' },
    ])
    const faqs = [
        { question: 'How much does a 20 yard dumpster rental cost in Jackson, MS?', answer: 'A 20 yard dumpster rental from Mid South starts at $449 for 1 day, $479 for 3 days, and $499 for 7 days. All prices include delivery, pickup, and up to 3 tons of disposal.' },
        { question: 'What are the dimensions of the 20 yard dumpster?', answer: 'Our 20 yard dumpster is 14 feet long, 7.5 feet wide, and 6.5 feet high. The taller 6.5-foot walls provide maximum volume for large debris loads.' },
        { question: 'How many pickup truck loads fit in a 20 yard dumpster?', answer: 'A 20 yard dumpster holds approximately 8 standard pickup truck loads of debris.' },
        { question: 'What is a 20 yard dumpster used for?', answer: 'A 20 yard dumpster is best for large projects: whole-home cleanouts, major renovations, new construction, large roofing projects, commercial projects, and multi-room demolition jobs.' },
        { question: 'What is the weight limit on a 20 yard dumpster?', answer: 'Our 20 yard dumpster includes 3 tons (6,000 lbs) of disposal. Overage is billed at $75/ton. This is our highest weight allowance and covers most heavy project debris without overages.' },
        {
            question: 'Is a 20 yard dumpster the right choice for a full home renovation?',
            answer: 'Yes — for multi-room or whole-home renovations, the 20 yard is the right call. The 3-ton weight limit handles heavy renovation debris without overage fees, and the volume covers most projects without needing a second haul.',
        },
        {
            question: 'Does a 20 yard dumpster fit in a standard driveway?',
            answer: 'Yes. At 14ft long x 7.5ft wide, it fits in most driveways. The taller walls (6.5ft) mean we need good overhead clearance — let us know about any low-hanging trees or lines.',
        },
        {
            question: 'How is the 20 yard different from the 15 yard?',
            answer: 'The 20 yard has the same footprint as the 15 yard (14ft x 7.5ft) but is 2.5 feet taller, giving you 33% more volume. It also includes a 3-ton weight limit vs. 2 tons, making it better suited for heavier debris.',
        },
        {
            question: 'What\'s the weight limit on the 20 yard?',
            answer: 'Our 20 yard includes 3 tons (6,000 lbs). Overage is $75/ton. This is our highest included weight allowance and covers most heavy residential and commercial debris without surprises.',
        },
        {
            question: 'Can I get same-day delivery on a 20 yard?',
            answer: 'Yes — call 601-316-7891 before noon and we can typically deliver the same day across Central Mississippi, subject to availability.',
        },
    ]
    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(generateOfferCatalogSchema()) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            {/* Hero */}
            <section style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', color: 'white', padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }}>
                        <div>
                            <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', borderRadius: '999px', padding: '0.3rem 1rem', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '0.5px' }}>🏗️ LARGEST SIZE AVAILABLE</div>
                            <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>20 Yard Dumpster Rental in Central Mississippi</h1>
                            <p style={{ fontSize: '1.2rem', opacity: 0.92, marginBottom: '2rem' }}>
                                Our biggest roll-off — built for major renovations, whole-home cleanouts, and commercial projects. Same-day delivery from <strong>$449 flat</strong>.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <BookingButton label="Book 20 Yard Dumpster" location="20 Yard Hero" />
                                <TrackedPhoneLink location="20 Yard Hero" className="btn btn-outline-white btn-lg">Call 601-316-7891</TrackedPhoneLink>
                            </div>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', minWidth: '200px', textAlign: 'center', flexShrink: 0 }}>
                            <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }}>20</div>
                            <div style={{ fontSize: '1rem', opacity: 0.9 }}>Cubic Yards</div>
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.3)', marginTop: '1rem', paddingTop: '1rem', fontSize: '2rem', fontWeight: 800 }}>$449</div>
                            <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Starting price</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specs */}
            <section style={{ padding: 'var(--spacing-2xl) 0', background: 'var(--color-gray-50)' }}>
                <div className="container">
                    <h2 className="text-center">20 Yard Dumpster Specifications</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.25rem', marginTop: '2rem', maxWidth: '900px', margin: '2rem auto 0' }}>
                        {[
                            { icon: '📏', label: 'Length', value: '14 feet' },
                            { icon: '↔️', label: 'Width', value: '7.5 feet' },
                            { icon: '↕️', label: 'Height', value: '6.5 feet' },
                            { icon: '🚛', label: 'Capacity', value: '20 cu. yards' },
                            { icon: '⚖️', label: 'Weight Limit', value: '3 tons (6,000 lbs)' },
                            { icon: '🛻', label: 'Truck Loads', value: '~8 pickups' },
                            { icon: '🗑️', label: 'Trash Bags', value: '~110–130 bags' },
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
                            💡 <strong>Note:</strong> The 20 yard has a taller <strong>6.5-foot wall height</strong>. This gives maximum volume, but means you&apos;ll be lifting debris higher. Keep that in mind for heavy or bulky material.
                        </p>
                    </div>

                    <div style={{ marginTop: '2rem', background: 'white', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: 'var(--shadow-sm)', maxWidth: '600px', margin: '2rem auto 0' }}>
                        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--color-gray-600)' }}>Size Comparison</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {[
                                { label: '10 Yard', width: '40%', color: 'var(--color-gray-300)', active: false },
                                { label: '15 Yard', width: '60%', color: 'var(--color-gray-300)', active: false },
                                { label: '20 Yard (You are here)', width: '85%', color: 'var(--color-primary)', active: true },
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
                    <h2 className="text-center">20 Yard Dumpster Pricing</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>Flat-rate pricing — delivery, pickup, and up to 3 tons of disposal included</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '700px', margin: '0 auto' }}>
                        {[
                            { duration: '1 Day', price: '$449', note: 'Fast turnaround projects' },
                            { duration: '3 Days', price: '$479', note: 'Most popular for large jobs', popular: true },
                            { duration: '7 Days', price: '$499', note: 'Extended renovation projects' },
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
                        Overage rate: $75/ton over the 3-ton limit. Extensions available at $30/day.
                    </p>
                </div>
            </section>

            {/* What fits */}
            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>What Fits in a 20 Yard Dumpster?</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                The 20 yard is our largest roll-off and handles the biggest residential and commercial jobs with room to spare. If you&apos;re not sure whether a 15 or 20 yard is right for you, consider the 20 — you&apos;re only paying $50 more and you won&apos;t be stuck with an overflowing container.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2, marginTop: '1rem' }}>
                                <li>🛻 About <strong>8 standard pickup truck loads</strong></li>
                                <li>🗑️ Roughly <strong>110–130 standard trash bags</strong></li>
                                <li>🏠 A <strong>full whole-home cleanout</strong> with furniture</li>
                                <li>🏗️ A <strong>major multi-room renovation</strong></li>
                                <li>🏢 A <strong>large commercial project</strong> or build-out</li>
                                <li>🌳 <strong>Significant storm cleanup</strong> or land clearing</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Best Projects for a 20 Yard</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
                                {[
                                    '🏠 Whole-home cleanout', '🔨 Major renovation', '🏗️ New construction', '🏢 Commercial projects',
                                    '🌳 Storm damage cleanup', '🏚️ Full gut renovation', '📦 Large estate cleanout', '🛠️ Multi-week contractor',
                                ].map((item) => (
                                    <div key={item} style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '0.6rem 0.75rem', fontSize: '0.9rem', boxShadow: 'var(--shadow-sm)' }}>{item}</div>
                                ))}
                            </div>
                            <div style={{ marginTop: '1.5rem', background: 'rgba(var(--color-primary-rgb), 0.06)', borderLeft: '4px solid var(--color-primary)', padding: '1rem 1.25rem', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-gray-700)' }}>
                                    <strong>Not sure if you need a 20?</strong> If your project involves clearing multiple rooms, or if you have a mix of heavy and bulky material, the 20 yard is the safe bet. The 3-ton included weight limit means fewer overage surprises.
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
                            <h2>✅ Accepted in the 20 Yard</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2 }}>
                                <li>✓ Roofing shingles, underlayment, flashing</li>
                                <li>✓ Drywall, lumber, framing, and trim</li>
                                <li>✓ Flooring, carpet, tile, and subfloor</li>
                                <li>✓ Furniture, appliances, and household items</li>
                                <li>✓ Yard waste and storm debris</li>
                                <li>✓ Insulation and building wrap</li>
                                <li>✓ Windows, doors, cabinets, and fixtures</li>
                                <li>✓ General construction and renovation debris</li>
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
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-gray-500)' }}>
                                Don&apos;t see your material listed? Call us at 601-316-7891 and we&apos;ll confirm if it&apos;s accepted.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivery */}
            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h2 className="text-center">Preparing for Your 20 Yard Delivery</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
                        {[
                            { icon: '📐', title: 'Space Needed', desc: 'The container is 14ft long. Allow 60+ feet of total driveway clearance for our truck to back in safely.' },
                            { icon: '🌳', title: 'Overhead Clearance', desc: 'At 6.5ft tall, the 20 yard requires careful overhead clearance — at least 23 feet from the ground. Watch for low branches and power lines.' },
                            { icon: '🚗', title: 'Clear the Area', desc: 'Remove all vehicles, trailers, and equipment from the drop zone before delivery time.' },
                            { icon: '🛡️', title: 'Driveway Protection', desc: 'We use boards and proper placement techniques to protect your driveway. The 20 yard is heavier when full — we take extra care.' },
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
                        <Link href="/sizes/15-yard-dumpster-rental" style={{ textDecoration: 'none' }}>
                            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '1.75rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)' }}>15</div>
                                <div style={{ color: 'var(--color-gray-500)', fontSize: '0.85rem' }}>Cubic Yards</div>
                                <div style={{ fontWeight: 700, marginTop: '0.5rem' }}>From $399</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', marginTop: '0.25rem' }}>14ft × 7.5ft × 4ft</div>
                                <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-primary)' }}>Most popular →</div>
                            </div>
                        </Link>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                        <Link href="/sizes" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>← View full size guide & comparison</Link>
                    </p>
                </div>
            </section>

            <FaqSection faqs={faqs} title="20 Yard Dumpster FAQ" background />

            {/* CTA */}
            <section style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-2xl) 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Ready to Book Your 20 Yard Dumpster?</h2>
                    <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: 'var(--spacing-xl)' }}>Our largest size — same-day delivery available, call before noon or book online</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book 20 Yard Dumpster" location="20 Yard CTA" />
                        <TrackedPhoneLink location="20 Yard CTA" className="btn btn-outline-white btn-lg">Call 601-316-7891</TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
