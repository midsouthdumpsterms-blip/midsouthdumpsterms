import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateBreadcrumbSchema, injectSchema } from '@/lib/schema'

export const metadata: Metadata = {
    title: 'Dumpster Sizes & Pricing | 10, 15 & 20 Yard | Mid South Dumpster Rentals',
    description:
        'Compare 10, 15, and 20-yard dumpster sizes in Central Mississippi. See exact dimensions, weight limits, pricing, and which size is right for your project. Same-day delivery available. Call 601-316-7891.',
    openGraph: {
        title: 'Dumpster Sizes & Pricing | Mid South Dumpster Rentals',
        description: 'Compare 10, 15, and 20-yard roll-off dumpster sizes — dimensions, pricing, capacity, and which is right for your project.',
        url: 'https://midsouthdumpsterms.com/sizes',
    },
}

export default function SizesPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Dumpster Sizes', url: 'https://midsouthdumpsterms.com/sizes' },
    ])

    const sizes = [
        {
            yards: '10',
            slug: '10-yard-dumpster-rental',
            price: '$349',
            length: '10 ft',
            width: '7.5 ft',
            height: '5 ft',
            weight: '1 ton (2,000 lbs)',
            truckLoads: '~4 pickup loads',
            bags: '~55–70 bags',
            badge: null,
            tagline: 'Great for small cleanouts and minor renovations',
            bestFor: ['Garage cleanouts', 'Bathroom remodels', 'Yard debris', 'Small estate cleanouts', 'Minor renovations', 'Tenant turnovers'],
        },
        {
            yards: '15',
            slug: '15-yard-dumpster-rental',
            price: '$399',
            length: '14 ft',
            width: '7.5 ft',
            height: '4 ft',
            weight: '2 tons (4,000 lbs)',
            truckLoads: '~6 pickup loads',
            bags: '~80–100 bags',
            badge: '⭐ Most Popular',
            tagline: 'Our go-to size for roofing, renovations & estate cleanouts',
            bestFor: ['Roofing tear-offs', 'Kitchen remodels', 'Estate cleanouts', 'Rental property cleanouts', 'Construction debris', 'Multi-room demo'],
        },
        {
            yards: '20',
            slug: '20-yard-dumpster-rental',
            price: '$449',
            length: '14 ft',
            width: '7.5 ft',
            height: '6.5 ft',
            weight: '3 tons (6,000 lbs)',
            truckLoads: '~8 pickup loads',
            bags: '~110–130 bags',
            badge: '🏗️ Largest Size',
            tagline: 'Maximum capacity for major renovations and commercial work',
            bestFor: ['Whole-home cleanouts', 'Major renovations', 'New construction', 'Commercial projects', 'Large storm cleanup', 'Full gut jobs'],
        },
    ]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>Dumpster Sizes & Pricing</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.92, maxWidth: '640px', margin: '0 auto 2rem' }}>
                        We offer 10, 15, and 20-yard roll-off dumpsters across Central Mississippi — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Online" location="Sizes Hub Hero" />
                        <TrackedPhoneLink location="Sizes Hub Hero" className="btn btn-outline btn-lg">Call 601-316-7891</TrackedPhoneLink>
                    </div>
                </div>
            </section>

            {/* Size comparison cards */}
            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {sizes.map((size) => (
                            <div key={size.yards} style={{ background: 'white', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', overflow: 'hidden', border: size.yards === '15' ? '3px solid var(--color-primary)' : '1px solid var(--color-gray-100)', position: 'relative' }}>
                                {size.badge && (
                                    <div style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'center', padding: '0.5rem', fontSize: '0.85rem', fontWeight: 700 }}>
                                        {size.badge}
                                    </div>
                                )}
                                <div style={{ padding: '1.75rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                        <div>
                                            <div style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1, color: 'var(--color-primary)' }}>{size.yards}</div>
                                            <div style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem' }}>Cubic Yards</div>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-gray-900)' }}>{size.price}</div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>starting price</div>
                                        </div>
                                    </div>
                                    <p style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>{size.tagline}</p>

                                    {/* Spec grid */}
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.25rem' }}>
                                        {[
                                            { label: 'Length', val: size.length },
                                            { label: 'Width', val: size.width },
                                            { label: 'Height', val: size.height },
                                            { label: 'Weight Limit', val: size.weight },
                                            { label: 'Capacity', val: size.truckLoads },
                                            { label: 'Trash Bags', val: size.bags },
                                        ].map((spec) => (
                                            <div key={spec.label} style={{ background: 'var(--color-gray-50)', borderRadius: 'var(--radius-sm)', padding: '0.5rem 0.75rem' }}>
                                                <div style={{ fontSize: '0.7rem', color: 'var(--color-gray-400)', textTransform: 'uppercase', letterSpacing: '0.3px' }}>{spec.label}</div>
                                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>{spec.val}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Best for */}
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-gray-400)', marginBottom: '0.5rem' }}>Best for</div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                            {size.bestFor.map((item) => (
                                                <span key={item} style={{ background: 'var(--color-gray-100)', borderRadius: '999px', padding: '0.2rem 0.7rem', fontSize: '0.8rem', color: 'var(--color-gray-700)' }}>{item}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link href={`/sizes/${size.slug}`} style={{ display: 'block', textAlign: 'center', background: size.yards === '15' ? 'var(--color-primary)' : 'transparent', color: size.yards === '15' ? 'white' : 'var(--color-primary)', border: `2px solid var(--color-primary)`, borderRadius: 'var(--radius-md)', padding: '0.75rem', fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}>
                                        View {size.yards} Yard Details →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick size picker */}
            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="text-center">Which Size Do I Need?</h2>
                    <p className="text-center" style={{ marginBottom: '2rem', color: 'var(--color-gray-600)' }}>Answer these quick questions to find your size</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { project: 'Garage or attic cleanout', rec: '10 Yard', slug: '10-yard-dumpster-rental', reason: 'Light materials, single space' },
                            { project: 'Bathroom or bedroom remodel', rec: '10–15 Yard', slug: '15-yard-dumpster-rental', reason: 'Depends on debris volume' },
                            { project: 'Roofing tear-off (single story)', rec: '15 Yard', slug: '15-yard-dumpster-rental', reason: 'Standard residential roof' },
                            { project: 'Kitchen remodel or multi-room renovation', rec: '15 Yard', slug: '15-yard-dumpster-rental', reason: 'Most popular for this use' },
                            { project: 'Estate or whole-home cleanout', rec: '20 Yard', slug: '20-yard-dumpster-rental', reason: 'Large volume & weight' },
                            { project: 'New construction or major demo', rec: '20 Yard', slug: '20-yard-dumpster-rental', reason: 'Maximum capacity needed' },
                            { project: 'Yard waste / storm cleanup', rec: '10–15 Yard', slug: '15-yard-dumpster-rental', reason: 'Light but bulky material' },
                        ].map((item) => (
                            <div key={item.project} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', alignItems: 'center', gap: '1rem', background: 'white', borderRadius: 'var(--radius-lg)', padding: '1rem 1.25rem', boxShadow: 'var(--shadow-sm)' }}>
                                <div>
                                    <div style={{ fontWeight: 600 }}>{item.project}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>{item.reason}</div>
                                </div>
                                <div style={{ fontWeight: 700, color: 'var(--color-primary)', whiteSpace: 'nowrap' }}>{item.rec}</div>
                                <Link href={`/sizes/${item.slug}`} style={{ fontSize: '0.85rem', color: 'var(--color-primary)', textDecoration: 'underline', whiteSpace: 'nowrap' }}>Details →</Link>
                            </div>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--color-gray-600)' }}>
                        Still not sure? Call <strong>601-316-7891</strong> — we&apos;ll size your project in under 2 minutes.
                    </p>
                </div>
            </section>

            {/* Pricing table */}
            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h2 className="text-center">Full Pricing Comparison</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)', color: 'var(--color-gray-600)' }}>All prices include delivery, pickup, and disposal — no surprise fees</p>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', maxWidth: '700px', margin: '0 auto' }}>
                            <thead>
                                <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                                    <th style={{ padding: '0.9rem 1.25rem', textAlign: 'left' }}>Size</th>
                                    <th style={{ padding: '0.9rem 1.25rem', textAlign: 'center' }}>1 Day</th>
                                    <th style={{ padding: '0.9rem 1.25rem', textAlign: 'center' }}>3 Days</th>
                                    <th style={{ padding: '0.9rem 1.25rem', textAlign: 'center' }}>7 Days</th>
                                    <th style={{ padding: '0.9rem 1.25rem', textAlign: 'center' }}>Incl. Weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { size: '10 Yard', d1: '$349', d3: '$379', d7: '$399', wt: '1 ton' },
                                    { size: '15 Yard ⭐', d1: '$399', d3: '$429', d7: '$449', wt: '2 tons', pop: true },
                                    { size: '20 Yard', d1: '$449', d3: '$479', d7: '$499', wt: '3 tons' },
                                ].map((row) => (
                                    <tr key={row.size} style={{ background: row.pop ? 'rgba(var(--color-primary-rgb), 0.05)' : 'white', borderBottom: '1px solid var(--color-gray-100)' }}>
                                        <td style={{ padding: '0.9rem 1.25rem', fontWeight: row.pop ? 700 : 400, color: row.pop ? 'var(--color-primary)' : 'inherit' }}>{row.size}</td>
                                        <td style={{ padding: '0.9rem 1.25rem', textAlign: 'center' }}>{row.d1}</td>
                                        <td style={{ padding: '0.9rem 1.25rem', textAlign: 'center' }}>{row.d3}</td>
                                        <td style={{ padding: '0.9rem 1.25rem', textAlign: 'center' }}>{row.d7}</td>
                                        <td style={{ padding: '0.9rem 1.25rem', textAlign: 'center' }}>{row.wt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-gray-400)' }}>
                        Overage weight rate: $75/ton · Extensions: $30/day
                    </p>
                </div>
            </section>

            <section style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-2xl) 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Ready to Book?</h2>
                    <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: 'var(--spacing-xl)' }}>Same-day delivery available — book online or call 601-316-7891</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Online" location="Sizes Hub CTA" />
                        <TrackedPhoneLink location="Sizes Hub CTA" className="btn btn-outline btn-lg">Call 601-316-7891</TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
