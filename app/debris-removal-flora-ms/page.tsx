import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'

export const metadata: Metadata = {
    title: 'Debris Removal Flora MS | Roll-Off Dumpster Service | Mid South',
    description: 'Debris removal in Flora, MS — rent a roll-off dumpster and we haul away your construction debris, renovation waste, storm damage, and yard debris. Same-day delivery. Call 601-316-7891.',
    openGraph: {
        title: 'Debris Removal Flora MS | Mid South Dumpster Rentals',
        description: 'Fast debris removal in Flora, MS. Roll-off dumpsters for construction debris, storm cleanup, renovation waste and yard debris. Same-day delivery.',
        url: 'https://midsouthdumpsterms.com/debris-removal-flora-ms',
    },
}

export default function DebrisRemovalFloraPage() {
    const serviceSchema = generateServiceSchema('Debris Removal', 'Debris removal service in Flora, MS via roll-off dumpster rental. We deliver a container, you fill it, we haul it away.', 'Flora, MS')
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Debris Removal Flora MS', url: 'https://midsouthdumpsterms.com/debris-removal-flora-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ color: 'white', fontSize: '2.25rem', marginBottom: '1rem' }}>Debris Removal in Flora, MS</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.92, maxWidth: '640px', margin: '0 auto 2rem' }}>
                        The easiest way to remove debris in Flora — we deliver a roll-off dumpster, you fill it, we haul it all away
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Online" location="Debris Removal Flora Hero" />
                        <TrackedPhoneLink location="Debris Removal Flora Hero" className="btn btn-outline-white btn-lg">Call 601-316-7891</TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Debris Removal in Flora, Mississippi</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                Mid South Dumpster Rentals provides debris removal throughout Flora, MS using roll-off dumpster containers. We serve all of Flora including Flora, Benton Road, and Highway 22. We drop off the dumpster, you load it on your schedule, and we pick it up and dispose of everything responsibly.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                We handle all types of debris removal in Flora — construction and demolition debris, storm damage, renovation waste, yard debris, and household cleanout material. Same-day delivery is often available.
                            </p>
                        </div>
                        <div>
                            <h2>Types of Debris We Remove</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2 }}>
                                <li>✓ Construction and demolition debris</li>
                                <li>✓ Roofing shingles and tear-off materials</li>
                                <li>✓ Renovation debris (drywall, lumber, tile, flooring)</li>
                                <li>✓ Storm damage debris</li>
                                <li>✓ Yard waste and landscaping debris</li>
                                <li>✓ Household junk and cleanout debris</li>
                                <li>✓ Furniture and appliances (not refrigerators)</li>
                                <li>✓ Carpet, insulation, and building materials</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h2 className="text-center">Debris Removal Pricing in Flora, MS</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '700px', margin: '2rem auto 0' }}>
                        {[{ size: '10-Yard', price: 'From $349', desc: 'Small cleanouts and light debris' }, { size: '15-Yard', price: 'From $399', desc: 'Most popular debris removal size' }, { size: '20-Yard', price: 'From $449', desc: 'Large projects and major debris' }].map((item) => (
                            <div key={item.size} style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '1.5rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                                <h3 style={{ marginBottom: '0.25rem' }}>{item.size}</h3>
                                <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', margin: '0.25rem 0' }}>{item.price}</p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--color-gray-500)' }}>
                        See full pricing on our <Link href="/services" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>services page</Link>
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <p style={{ color: 'var(--color-gray-600)' }}>
                        Flora is located in <Link href="/service-areas/madison-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}></Link>. Also see our <Link href="/service-areas/flora" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}> dumpster rental page</Link> and <Link href="/waste-disposal-flora-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>waste disposal in Flora</Link>.
                    </p>
                    <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <Link href="/debris-removal-canton-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Debris Removal Canton, MS</Link>
                        <Link href="/debris-removal-madison-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Debris Removal Madison, MS</Link>
                        <Link href="/debris-removal-ridgeland-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Debris Removal Ridgeland, MS</Link>
                        <Link href="/debris-removal-jackson-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Debris Removal Jackson, MS</Link>
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-2xl) 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Ready for Debris Removal in Flora?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)', opacity: 0.9 }}>Book online or call 601-316-7891 — same-day delivery available</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Debris Flora CTA" />
                        <TrackedPhoneLink location="Debris Flora CTA" className="btn btn-outline-white btn-lg">Call 601-316-7891</TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
