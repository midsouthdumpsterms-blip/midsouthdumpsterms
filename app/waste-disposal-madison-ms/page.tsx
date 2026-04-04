import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'

export const metadata: Metadata = {
    title: 'Waste Disposal Madison MS | Roll-Off Dumpster Rental | Mid South',
    description: 'Waste disposal in Madison, MS made easy â€” rent a roll-off dumpster for convenient, affordable disposal of renovation waste, household junk, yard debris, and more. Same-day delivery. Call 601-316-7891.',
    openGraph: {
        title: 'Waste Disposal Madison MS | Mid South Dumpster Rentals',
        description: 'Easy waste disposal in Madison, MS. Roll-off dumpster rental for renovation waste, household junk, and yard debris. Same-day delivery.',
        url: 'https://midsouthdumpsterms.com/waste-disposal-madison-ms',
    },
}

export default function WasteDisposalMadisonPage() {
    const serviceSchema = generateServiceSchema('Waste Disposal', 'Waste disposal service in Madison, MS via roll-off dumpster rental. We deliver, you load, we transport and dispose of your waste properly.', 'Madison, MS')
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Waste Disposal Madison MS', url: 'https://midsouthdumpsterms.com/waste-disposal-madison-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section style={{ background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ color: 'white', fontSize: '2.25rem', marginBottom: '1rem' }}>Waste Disposal in Madison, MS</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.92, maxWidth: '640px', margin: '0 auto 2rem' }}>
                        Convenient, affordable waste disposal for Madison residents and businesses â€” we handle transportation and proper disposal so you don't have to
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Online" location="Waste Disposal Madison Hero" />
                        <TrackedPhoneLink location="Waste Disposal Madison Hero" className="btn btn-outline btn-lg">Call 601-316-7891</TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Waste Disposal Service in Madison, MS</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                Mid South Dumpster Rentals makes waste disposal in Madison, Mississippi simple and affordable. We serve Annandale, Reunion, Providence, and Colony Park and all surrounding areas. Our roll-off containers give you a convenient, centralized place to load all your waste â€” then we transport it to a licensed disposal facility.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                Whether you're a homeowner dealing with renovation waste, a contractor managing project disposal, or a property manager clearing out a rental â€” our roll-off dumpster service is the most cost-effective waste disposal solution in Madison.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                We offer same-day delivery and transparent, flat-rate pricing that includes delivery, pickup, and disposal â€” no hidden fees.
                            </p>
                        </div>
                        <div>
                            <h2>What Waste We Dispose Of</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2 }}>
                                <li>âœ“ Renovation and remodeling waste</li>
                                <li>âœ“ Construction and demolition waste</li>
                                <li>âœ“ Household items and furniture</li>
                                <li>âœ“ Yard waste and landscaping debris</li>
                                <li>âœ“ Roofing materials and shingles</li>
                                <li>âœ“ Flooring, carpet, and drywall</li>
                                <li>âœ“ Appliances (not refrigerators/HVAC)</li>
                                <li>âœ“ General cleanout and junk material</li>
                            </ul>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-500)', marginTop: '1rem' }}>
                                We do not accept: concrete, hazardous materials, chemicals, tires, or liquid waste.
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
                            { step: '1', title: 'Book Online or Call', desc: 'Tell us your location in Madison and how much waste you have.' },
                            { step: '2', title: 'We Deliver the Dumpster', desc: 'Same-day or next-day delivery to your driveway or job site.' },
                            { step: '3', title: 'You Load at Your Pace', desc: '1, 3, or 7-day rental period â€” load on your schedule.' },
                            { step: '4', title: 'We Pick Up and Dispose', desc: 'We haul your waste to a licensed disposal facility. Done.' },
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
                    <p style={{ color: 'var(--color-gray-600)' }}>
                        Madison is located in <Link href="/service-areas/madison-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}></Link>. Also see our <Link href="/service-areas/madison" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}> dumpster rental page</Link> and <Link href="/debris-removal-madison-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>debris removal in Madison</Link>.
                    </p>
                    <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <Link href="/waste-disposal-ridgeland-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Waste Disposal Ridgeland, MS</Link>
                        <Link href="/waste-disposal-gluckstadt-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Waste Disposal Gluckstadt, MS</Link>
                        <Link href="/waste-disposal-canton-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Waste Disposal Canton, MS</Link>
                        <Link href="/waste-disposal-jackson-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Waste Disposal Jackson, MS</Link>
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-2xl) 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Need Waste Disposal in Madison?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)', opacity: 0.9 }}>Book online or call 601-316-7891 â€” same-day delivery available</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Waste Disposal Madison CTA" />
                        <TrackedPhoneLink location="Waste Disposal Madison CTA" className="btn btn-outline btn-lg">Call 601-316-7891</TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
