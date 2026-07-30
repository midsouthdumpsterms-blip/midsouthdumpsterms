import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/debris-removal-jackson-ms' },
    title: 'Debris Removal Jackson MS | Roll-Off Dumpster Service',
    description:
        'Debris removal in Jackson, MS — rent a roll-off dumpster and we haul away your construction debris, renovation waste, storm damage, and yard debris. Same-day delivery. Call 601-316-7891.',
    openGraph: {
        title: 'Debris Removal Jackson MS',
        description: 'Fast debris removal in Jackson, MS. Roll-off dumpsters for construction debris, storm cleanup, renovation waste & yard debris. Same-day delivery.',
        url: 'https://midsouthdumpsterms.com/debris-removal-jackson-ms',
    },
}

export default function DebrisRemovalJacksonPage() {
    const serviceSchema = generateServiceSchema(
        'Debris Removal',
        'Debris removal service in Jackson, MS via roll-off dumpster rental. We deliver a container, you fill it, we haul it away. Handles construction debris, storm damage, renovation waste, and yard debris.',
        'Jackson, MS'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Debris Removal Jackson MS', url: 'https://midsouthdumpsterms.com/debris-removal-jackson-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ color: 'white', fontSize: '2.25rem', marginBottom: '1rem' }}>Debris Removal in Jackson, MS</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.92, maxWidth: '640px', margin: '0 auto 2rem' }}>
                        The easiest way to remove debris in Jackson — we deliver a roll-off dumpster, you fill it, we haul it all away
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Online" location="Debris Removal Jackson Hero" />
                        <TrackedPhoneLink location="Debris Removal Jackson Hero" className="btn btn-outline-white btn-lg" style={{ color: 'white', borderColor: 'white' }}>
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Debris Removal Made Simple in Jackson</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                Mid South Dumpster Rentals provides debris removal throughout Jackson, Mississippi using roll-off dumpster containers. Rather than hiring a crew to manually carry debris, our system puts you in control: we drop off the dumpster, you load it on your schedule, and we pick it up and dispose of everything properly.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                We handle all types of debris removal in Jackson — from construction and demolition debris to storm damage, renovation waste, yard debris, and household cleanout material.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                Our roll-off containers are available in 10, 15, and 20-yard sizes, and we offer same-day delivery across Jackson and surrounding areas including Fondren, Belhaven, Northeast Jackson, West Jackson, and South Jackson.
                            </p>
                        </div>
                        <div>
                            <h2>Types of Debris We Remove</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2 }}>
                                <li>✓ Construction &amp; demolition debris</li>
                                <li>✓ Roofing shingles &amp; tear-off materials</li>
                                <li>✓ Renovation debris (drywall, lumber, tile, flooring)</li>
                                <li>✓ Storm damage debris (limbs, branches, damaged materials)</li>
                                <li>✓ Yard waste &amp; landscaping debris</li>
                                <li>✓ Household junk &amp; cleanout debris</li>
                                <li>✓ Furniture &amp; appliances (not refrigerators)</li>
                                <li>✓ Carpet, insulation, &amp; materials</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h2 className="text-center">Debris Removal Pricing in Jackson, MS</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        Flat-rate pricing — delivery, pickup, and debris disposal all included
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '700px', margin: '0 auto' }}>
                        {[
                            { size: '10-Yard', price: 'From $349', desc: 'Best for small cleanouts & light debris' },
                            { size: '15-Yard', price: 'From $399', desc: 'Most popular — handles most debris removal jobs' },
                            { size: '20-Yard', price: 'From $449', desc: 'Large projects, major debris removal needs' },
                        ].map((item) => (
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
                    <h2>Jackson-Area Debris Removal — Neighborhoods We Serve</h2>
                    <p style={{ color: 'var(--color-gray-600)' }}>
                        We provide debris removal throughout all of Jackson, MS including Fondren, Belhaven, Northeast Jackson, South Jackson, West Jackson, Tougaloo, Forest Hill, Alta Woods, Presidential Hills, and surrounding neighborhoods.
                    </p>
                    <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                        Jackson is in <Link href="/service-areas/hinds-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Hinds County</Link>. Also see our <Link href="/service-areas/jackson" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Jackson dumpster rental page</Link> and <Link href="/waste-disposal-jackson-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>waste disposal in Jackson</Link>.
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                        <h3>Other Cities Near Jackson</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.75rem' }}>
                            {[
                                { city: 'Brandon', slug: 'brandon' }, { city: 'Clinton', slug: 'clinton' },
                                { city: 'Byram', slug: 'byram' }, { city: 'Flowood', slug: 'flowood' },
                                { city: 'Richland', slug: 'richland' }, { city: 'Pearl', slug: 'pearl' },
                            ].map((item) => (
                                <Link key={item.slug} href={`/debris-removal-${item.slug}-ms`}
                                    style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>
                                    Debris Removal {item.city}, MS
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-2xl) 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Ready for Debris Removal in Jackson?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)', opacity: 0.9 }}>
                        Book online or call 601-316-7891 — same-day delivery available
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Debris Jackson CTA" />
                        <TrackedPhoneLink location="Debris Jackson CTA" className="btn btn-outline-white btn-lg" style={{ color: 'white', borderColor: 'white' }}>
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
