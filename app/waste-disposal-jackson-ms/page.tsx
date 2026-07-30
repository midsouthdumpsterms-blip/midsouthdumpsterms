import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/waste-disposal-jackson-ms' },
    title: 'Waste Disposal Jackson MS | Roll-Off Dumpster Rental',
    description:
        'Waste disposal in Jackson, MS made easy — rent a roll-off dumpster for convenient, affordable disposal of renovation waste, household junk, construction debris, and yard waste. Same-day delivery. Call 601-316-7891.',
    openGraph: {
        title: 'Waste Disposal Jackson MS',
        description: 'Easy waste disposal in Jackson, MS. Roll-off dumpster rental for renovation waste, household junk, and debris. Same-day delivery.',
        url: 'https://midsouthdumpsterms.com/waste-disposal-jackson-ms',
    },
}

export default function WasteDisposalJacksonPage() {
    const serviceSchema = generateServiceSchema(
        'Waste Disposal',
        'Waste disposal service in Jackson, MS via roll-off dumpster rental. We deliver, you load, we transport and dispose of your waste at a licensed facility.',
        'Jackson, MS'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Waste Disposal Jackson MS', url: 'https://midsouthdumpsterms.com/waste-disposal-jackson-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section style={{ background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ color: 'white', fontSize: '2.25rem', marginBottom: '1rem' }}>Waste Disposal in Jackson, MS</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.92, maxWidth: '640px', margin: '0 auto 2rem' }}>
                        Convenient, affordable waste disposal for Jackson residents and businesses — we handle transportation and proper disposal so you don&apos;t have to
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Online" location="Waste Disposal Jackson Hero" />
                        <TrackedPhoneLink location="Waste Disposal Jackson Hero" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Waste Disposal Service in Jackson, Mississippi</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                Mid South Dumpster Rentals makes waste disposal in Jackson, Mississippi simple and affordable. We serve all of Jackson — Fondren, Belhaven, Northeast Jackson, South Jackson, West Jackson, and everywhere in between. Our roll-off containers give you a convenient, centralized place to load all your waste — then we transport it to a licensed disposal facility.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                Whether you&apos;re a homeowner dealing with renovation waste, a contractor managing project disposal, or a property manager clearing out a rental — our roll-off dumpster service is the most cost-effective waste disposal solution in Jackson.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                We offer same-day delivery and transparent, flat-rate pricing that includes delivery, pickup, and disposal — no hidden fees, no surprises.
                            </p>
                        </div>
                        <div>
                            <h2>What Waste We Dispose Of</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2 }}>
                                <li>✓ Renovation and remodeling waste</li>
                                <li>✓ Construction and demolition waste</li>
                                <li>✓ Household items and furniture</li>
                                <li>✓ Yard waste and landscaping debris</li>
                                <li>✓ Roofing materials and shingles</li>
                                <li>✓ Flooring, carpet, and drywall</li>
                                <li>✓ Appliances (not refrigerators/HVAC)</li>
                                <li>✓ General cleanout and junk material</li>
                            </ul>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-500)', marginTop: '1rem' }}>
                                We do not accept: concrete, hazardous materials, chemicals, tires, liquid waste, or medical waste. See the <Link href="/services" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>full list on our services page</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h2 className="text-center">How Waste Disposal Works</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                        {[
                            { step: '1', title: 'Book Online or Call', desc: 'Tell us your Jackson location and how much waste you need disposed.' },
                            { step: '2', title: 'We Deliver the Dumpster', desc: 'Same-day or next-day delivery to your driveway or job site in Jackson.' },
                            { step: '3', title: 'You Load at Your Pace', desc: '1, 3, or 7-day rental period — load on your schedule.' },
                            { step: '4', title: 'We Pick Up and Dispose', desc: 'We haul your waste to a licensed disposal facility. Proper and responsible.' },
                        ].map((item) => (
                            <div key={item.step} style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '1.5rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontWeight: 700, fontSize: '1.1rem' }}>{item.step}</div>
                                <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-xl) 0' }}>
                <div className="container">
                    <h2>Waste Disposal Across Jackson Neighborhoods</h2>
                    <p style={{ color: 'var(--color-gray-600)' }}>
                        We provide waste disposal service throughout all of Jackson, Mississippi including Fondren, Belhaven, Northeast Jackson, West Jackson, South Jackson, Tougaloo, Forest Hill, Alta Woods, Presidential Hills, and all surrounding neighborhoods.
                    </p>
                    <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                        Jackson is in <Link href="/service-areas/hinds-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Hinds County</Link>. Also see our <Link href="/service-areas/jackson" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Jackson dumpster rental page</Link> and <Link href="/debris-removal-jackson-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>debris removal in Jackson</Link>.
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                        <h3>Waste Disposal in Nearby Cities</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.75rem' }}>
                            {[
                                { city: 'Brandon', slug: 'brandon' }, { city: 'Clinton', slug: 'clinton' },
                                { city: 'Byram', slug: 'byram' }, { city: 'Flowood', slug: 'flowood' },
                                { city: 'Pearl', slug: 'pearl' }, { city: 'Richland', slug: 'richland' },
                                { city: 'Madison', slug: 'madison' }, { city: 'Ridgeland', slug: 'ridgeland' },
                            ].map((item) => (
                                <Link key={item.slug} href={`/waste-disposal-${item.slug}-ms`}
                                    style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>
                                    {item.city}, MS
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-2xl) 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Need Waste Disposal in Jackson?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)', opacity: 0.9 }}>
                        Book online or call 601-316-7891 — same-day delivery available
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Waste Disposal Jackson CTA" />
                        <TrackedPhoneLink location="Waste Disposal Jackson CTA" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
