# Generate all debris removal and waste disposal orphan pages for Mid South Dumpster Rentals
# Run from the midsouthdumpsterms directory

$basePath = "C:\Users\atyre\.gemini\antigravity\scratch\midsouthdumpsterms\app"

$cities = @(
    @{ name="Byram";      slug="byram";      county="Hinds County";    countySlug="hinds-county";    hoods="Byram, Siwell Road, and Highway 18";                   n1s="jackson";  n1c="Jackson";   n2s="clinton";  n2c="Clinton";   n3s="richland"; n3c="Richland" },
    @{ name="Clinton";    slug="clinton";    county="Hinds County";    countySlug="hinds-county";    hoods="downtown Clinton, Traceland, and Northside";           n1s="jackson";  n1c="Jackson";   n2s="byram";    n2c="Byram";     n3s="raymond";  n3c="Raymond" },
    @{ name="Florence";   slug="florence";   county="Rankin County";   countySlug="rankin-county";   hoods="Florence, Richland Road, and Highway 49";              n1s="richland"; n1c="Richland";  n2s="brandon";  n2c="Brandon";   n3s="pearl";    n3c="Pearl" },
    @{ name="Flowood";    slug="flowood";    county="Rankin County";   countySlug="rankin-county";   hoods="Flowood Heights, Liberty Park, and Crossing Blvd";     n1s="brandon";  n1c="Brandon";   n2s="pearl";    n2c="Pearl";     n3s="richland"; n3c="Richland" },
    @{ name="Madison";    slug="madison";    county="Madison County";  countySlug="madison-county";  hoods="Annandale, Reunion, Providence, and Colony Park";       n1s="ridgeland";n1c="Ridgeland"; n2s="gluckstadt";n2c="Gluckstadt";n3s="canton"; n3c="Canton" },
    @{ name="Pearl";      slug="pearl";      county="Rankin County";   countySlug="rankin-county";   hoods="Westside, Airport Road, and Highway 80";               n1s="flowood";  n1c="Flowood";   n2s="brandon";  n2c="Brandon";   n3s="richland"; n3c="Richland" },
    @{ name="Richland";   slug="richland";   county="Rankin County";   countySlug="rankin-county";   hoods="Richland, Highway 49, and Old Highway 49";             n1s="flowood";  n1c="Flowood";   n2s="pearl";    n2c="Pearl";     n3s="brandon";  n3c="Brandon" },
    @{ name="Ridgeland";  slug="ridgeland";  county="Madison County";  countySlug="madison-county";  hoods="Highland Colony, Dinsmor, and Old Trace Park";         n1s="madison";  n1c="Madison";   n2s="gluckstadt";n2c="Gluckstadt";n3s="jackson";  n3c="Jackson" },
    @{ name="Terry";      slug="terry";      county="Hinds County";    countySlug="hinds-county";    hoods="Terry, Highway 27, and Raymond Road";                  n1s="byram";    n1c="Byram";     n2s="clinton";  n2c="Clinton";   n3s="jackson";  n3c="Jackson" },
    @{ name="Canton";     slug="canton";     county="Madison County";  countySlug="madison-county";  hoods="downtown Canton, Peace Street, and the historic square";n1s="madison";  n1c="Madison";   n2s="flora";    n2c="Flora";     n3s="ridgeland";n3c="Ridgeland" },
    @{ name="Flora";      slug="flora";      county="Madison County";  countySlug="madison-county";  hoods="Flora, Benton Road, and Highway 22";                   n1s="canton";   n1c="Canton";    n2s="madison";  n2c="Madison";   n3s="ridgeland";n3c="Ridgeland" },
    @{ name="Gluckstadt"; slug="gluckstadt"; county="Madison County";  countySlug="madison-county";  hoods="Gluckstadt, Old Canton Road, and Highway 51";          n1s="madison";  n1c="Madison";   n2s="ridgeland";n2c="Ridgeland"; n3s="canton";   n3c="Canton" }
)

foreach ($c in $cities) {
    $debrisDir  = Join-Path $basePath "debris-removal-$($c.slug)-ms"
    $disposalDir = Join-Path $basePath "waste-disposal-$($c.slug)-ms"

    New-Item -ItemType Directory -Force -Path $debrisDir  | Out-Null
    New-Item -ItemType Directory -Force -Path $disposalDir | Out-Null

    # ── Debris Removal Page ────────────────────────────────────────────────
    $debrisContent = @"
import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'

export const metadata: Metadata = {
    title: 'Debris Removal $($c.name) MS | Roll-Off Dumpster Service | Mid South',
    description: 'Debris removal in $($c.name), MS — rent a roll-off dumpster and we haul away your construction debris, renovation waste, storm damage, and yard debris. Same-day delivery. Call 601-316-7891.',
    openGraph: {
        title: 'Debris Removal $($c.name) MS | Mid South Dumpster Rentals',
        description: 'Fast debris removal in $($c.name), MS. Roll-off dumpsters for construction debris, storm cleanup, renovation waste and yard debris. Same-day delivery.',
        url: 'https://midsouthdumpsterms.com/debris-removal-$($c.slug)-ms',
    },
}

export default function DebrisRemoval$($c.name -replace '[^a-zA-Z]','')Page() {
    const serviceSchema = generateServiceSchema('Debris Removal', 'Debris removal service in $($c.name), MS via roll-off dumpster rental. We deliver a container, you fill it, we haul it away.', '$($c.name), MS')
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Debris Removal $($c.name) MS', url: 'https://midsouthdumpsterms.com/debris-removal-$($c.slug)-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ color: 'white', fontSize: '2.25rem', marginBottom: '1rem' }}>Debris Removal in $($c.name), MS</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.92, maxWidth: '640px', margin: '0 auto 2rem' }}>
                        The easiest way to remove debris in $($c.name) — we deliver a roll-off dumpster, you fill it, we haul it all away
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Online" location="Debris Removal $($c.name) Hero" />
                        <TrackedPhoneLink location="Debris Removal $($c.name) Hero" className="btn btn-outline btn-lg">Call 601-316-7891</TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Debris Removal in $($c.name), Mississippi</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                Mid South Dumpster Rentals provides debris removal throughout $($c.name), MS using roll-off dumpster containers. We serve all of $($c.name) including $($c.hoods). We drop off the dumpster, you load it on your schedule, and we pick it up and dispose of everything responsibly.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                We handle all types of debris removal in $($c.name) — construction and demolition debris, storm damage, renovation waste, yard debris, and household cleanout material. Same-day delivery is often available.
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
                    <h2 className="text-center">Debris Removal Pricing in $($c.name), MS</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '700px', margin: '2rem auto 0' }}>
                        {[{ size: '10-Yard', price: 'From `$349', desc: 'Small cleanouts and light debris' }, { size: '15-Yard', price: 'From `$399', desc: 'Most popular debris removal size' }, { size: '20-Yard', price: 'From `$449', desc: 'Large projects and major debris' }].map((item) => (
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
                        $($c.name) is located in <Link href="/service-areas/$($c.countySlug)" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>${"$($c.county)"}</Link>. Also see our <Link href="/service-areas/$($c.slug)" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>${"$($c.name)"} dumpster rental page</Link> and <Link href="/waste-disposal-$($c.slug)-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>waste disposal in $($c.name)</Link>.
                    </p>
                    <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <Link href="/debris-removal-$($c.n1s)-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Debris Removal $($c.n1c), MS</Link>
                        <Link href="/debris-removal-$($c.n2s)-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Debris Removal $($c.n2c), MS</Link>
                        <Link href="/debris-removal-$($c.n3s)-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Debris Removal $($c.n3c), MS</Link>
                        <Link href="/debris-removal-jackson-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Debris Removal Jackson, MS</Link>
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-2xl) 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Ready for Debris Removal in $($c.name)?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)', opacity: 0.9 }}>Book online or call 601-316-7891 — same-day delivery available</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Debris $($c.name) CTA" />
                        <TrackedPhoneLink location="Debris $($c.name) CTA" className="btn btn-outline btn-lg">Call 601-316-7891</TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
"@

    # ── Waste Disposal Page ────────────────────────────────────────────────
    $disposalContent = @"
import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'

export const metadata: Metadata = {
    title: 'Waste Disposal $($c.name) MS | Roll-Off Dumpster Rental | Mid South',
    description: 'Waste disposal in $($c.name), MS made easy — rent a roll-off dumpster for convenient, affordable disposal of renovation waste, household junk, yard debris, and more. Same-day delivery. Call 601-316-7891.',
    openGraph: {
        title: 'Waste Disposal $($c.name) MS | Mid South Dumpster Rentals',
        description: 'Easy waste disposal in $($c.name), MS. Roll-off dumpster rental for renovation waste, household junk, and yard debris. Same-day delivery.',
        url: 'https://midsouthdumpsterms.com/waste-disposal-$($c.slug)-ms',
    },
}

export default function WasteDisposal$($c.name -replace '[^a-zA-Z]','')Page() {
    const serviceSchema = generateServiceSchema('Waste Disposal', 'Waste disposal service in $($c.name), MS via roll-off dumpster rental. We deliver, you load, we transport and dispose of your waste properly.', '$($c.name), MS')
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Waste Disposal $($c.name) MS', url: 'https://midsouthdumpsterms.com/waste-disposal-$($c.slug)-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <section style={{ background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ color: 'white', fontSize: '2.25rem', marginBottom: '1rem' }}>Waste Disposal in $($c.name), MS</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.92, maxWidth: '640px', margin: '0 auto 2rem' }}>
                        Convenient, affordable waste disposal for $($c.name) residents and businesses — we handle transportation and proper disposal so you don't have to
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Online" location="Waste Disposal $($c.name) Hero" />
                        <TrackedPhoneLink location="Waste Disposal $($c.name) Hero" className="btn btn-outline btn-lg">Call 601-316-7891</TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Waste Disposal Service in $($c.name), MS</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                Mid South Dumpster Rentals makes waste disposal in $($c.name), Mississippi simple and affordable. We serve $($c.hoods) and all surrounding areas. Our roll-off containers give you a convenient, centralized place to load all your waste — then we transport it to a licensed disposal facility.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                Whether you're a homeowner dealing with renovation waste, a contractor managing project disposal, or a property manager clearing out a rental — our roll-off dumpster service is the most cost-effective waste disposal solution in $($c.name).
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                We offer same-day delivery and transparent, flat-rate pricing that includes delivery, pickup, and disposal — no hidden fees.
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
                            { step: '1', title: 'Book Online or Call', desc: 'Tell us your location in $($c.name) and how much waste you have.' },
                            { step: '2', title: 'We Deliver the Dumpster', desc: 'Same-day or next-day delivery to your driveway or job site.' },
                            { step: '3', title: 'You Load at Your Pace', desc: '1, 3, or 7-day rental period — load on your schedule.' },
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
                        $($c.name) is located in <Link href="/service-areas/$($c.countySlug)" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>${"$($c.county)"}</Link>. Also see our <Link href="/service-areas/$($c.slug)" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>${"$($c.name)"} dumpster rental page</Link> and <Link href="/debris-removal-$($c.slug)-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>debris removal in $($c.name)</Link>.
                    </p>
                    <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <Link href="/waste-disposal-$($c.n1s)-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Waste Disposal $($c.n1c), MS</Link>
                        <Link href="/waste-disposal-$($c.n2s)-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Waste Disposal $($c.n2c), MS</Link>
                        <Link href="/waste-disposal-$($c.n3s)-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Waste Disposal $($c.n3c), MS</Link>
                        <Link href="/waste-disposal-jackson-ms" style={{ background: 'var(--color-gray-100)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-gray-700)' }}>Waste Disposal Jackson, MS</Link>
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-2xl) 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Need Waste Disposal in $($c.name)?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)', opacity: 0.9 }}>Book online or call 601-316-7891 — same-day delivery available</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Waste Disposal $($c.name) CTA" />
                        <TrackedPhoneLink location="Waste Disposal $($c.name) CTA" className="btn btn-outline btn-lg">Call 601-316-7891</TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
"@

    Set-Content -Path "$debrisDir\page.tsx"  -Value $debrisContent   -Encoding UTF8
    Set-Content -Path "$disposalDir\page.tsx" -Value $disposalContent -Encoding UTF8
    Write-Host "Created pages for: $($c.name)"
}

Write-Host "`nAll city pages generated successfully!"
