import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import styles from '../services.module.css'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/services/debris-removal' },
    title: 'Debris Removal Jackson MS | Roll-Off',
    description:
        'Debris removal across Jackson and Central MS. We drop the container, you load it, we haul it off. Construction, storm and yard debris from $349.',
    openGraph: {
        title: 'Debris Removal in Jackson, MS & Central Mississippi',
        description:
            'Roll-off containers for construction, storm, renovation and yard debris across the Jackson metro. Same-day delivery, flat-rate pricing from $349.',
        url: 'https://midsouthdumpsterms.com/services/debris-removal',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

// Cities where we run debris removal, paired with the local detail that actually
// differs — what people here are usually clearing out.
const CITY_NOTES: { city: string; slug: string; note: string }[] = [
    { city: 'Jackson', slug: 'jackson', note: 'Renovation and estate debris in Belhaven, Fondren and Northeast Jackson; commercial tear-outs downtown.' },
    { city: 'Brandon', slug: 'brandon', note: 'New-construction offcuts and storm debris across the Reservoir and Crossgates neighborhoods.' },
    { city: 'Madison', slug: 'madison', note: 'Remodel debris and landscaping waste in established subdivisions off Highway 51 and Old Canton Road.' },
    { city: 'Clinton', slug: 'clinton', note: 'Roof tear-offs and garage cleanouts throughout Clinton and the Mississippi College area.' },
    { city: 'Pearl', slug: 'pearl', note: 'Contractor debris along the Highway 80 and Airport Road commercial corridors.' },
    { city: 'Ridgeland', slug: 'ridgeland', note: 'Retail and office build-out debris near County Line Road, plus residential remodels.' },
    { city: 'Flowood', slug: 'flowood', note: 'Medical-office and retail renovation debris around Lakeland Drive.' },
    { city: 'Byram', slug: 'byram', note: 'Yard debris, fencing and residential cleanout material south of Jackson.' },
    { city: 'Richland', slug: 'richland', note: 'Light industrial and residential debris along the Highway 49 corridor.' },
    { city: 'Florence', slug: 'florence', note: 'Land-clearing brush, barn tear-downs and rural property cleanups.' },
    { city: 'Canton', slug: 'canton', note: 'Historic-home renovation debris and municipal cleanup projects.' },
    { city: 'Terry', slug: 'terry', note: 'Rural property cleanouts, outbuilding demolition and storm debris.' },
    { city: 'Flora', slug: 'flora', note: 'Acreage cleanups, brush piles and shed removals.' },
    { city: 'Gluckstadt', slug: 'gluckstadt', note: 'New-build construction debris in one of the fastest-growing parts of Madison County.' },
    { city: 'Raymond', slug: 'raymond', note: 'Campus-area and rural residential debris in western Hinds County.' },
]

export default function DebrisRemovalPage() {
    const serviceSchema = generateServiceSchema(
        'Debris Removal',
        'Debris removal throughout Central Mississippi using roll-off dumpster containers. We deliver a 10, 15, or 20-yard container, you load it on your own schedule, and we haul the debris to a licensed disposal facility. Handles construction and demolition debris, storm damage, renovation waste, yard debris, and household cleanouts.',
        'Central Mississippi',
        [
            { price: '349', description: '10 Yard Container - 1 Day Rental (Includes 1 ton)' },
            { price: '399', description: '15 Yard Container - 1 Day Rental (Includes 2 tons)' },
            { price: '449', description: '20 Yard Container - 1 Day Rental (Includes 3 tons)' },
        ]
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Services', url: 'https://midsouthdumpsterms.com/services' },
        { name: 'Debris Removal', url: 'https://midsouthdumpsterms.com/services/debris-removal' },
    ])

    const faqs = [
        {
            question: 'Is debris removal the same as junk removal?',
            answer:
                'Not quite. A junk removal crew comes to your property and carries everything out for you, and you pay for their labor. With a roll-off container, we drop the container off, you load it whenever it suits you, and we haul it away — which usually costs substantially less for anything larger than a few pickup loads. If you only have a handful of items and no time to load, junk removal may be the better fit.',
        },
        {
            question: 'How much debris fits in each container?',
            answer:
                'A 10-yard container holds roughly four pickup truck loads and includes 1 ton of weight. A 15-yard holds about six pickup loads with 2 tons included. A 20-yard holds about eight pickup loads with 3 tons included. Most single-room renovations fit in a 10 or 15; whole-house cleanouts and roof tear-offs usually need a 20.',
        },
        {
            question: 'Can you take construction and demolition debris?',
            answer:
                'Yes. Lumber, drywall, roofing shingles, siding, flooring, carpet, tile, insulation, cabinetry and general C&D debris are all fine. Clean concrete, brick and dirt are heavy enough that they need a separate conversation — call us before loading them so we can quote it properly.',
        },
        {
            question: 'What debris will you not haul?',
            answer:
                'We cannot accept hazardous materials, paint, chemicals, motor oil, liquid waste, tires, batteries, asbestos, medical waste, or refrigerators and HVAC units that still contain refrigerant. If you are unsure about something, call 601-316-7891 before it goes in the container.',
        },
        {
            question: 'Do I need to be home for the container drop-off?',
            answer:
                'No. As long as we have clear instructions on where to place the container and the spot is accessible, you do not need to be there. We will text you when it is delivered.',
        },
        {
            question: 'How quickly can you get a container out for debris removal?',
            answer:
                'Same-day delivery is available seven days a week when you call before noon. After major storms, call as early as you can — container availability across the metro tightens quickly.',
        },
    ]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(generateFAQSchema(faqs)) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Debris Removal in Jackson, MS &amp; Central Mississippi</h1>
                    <p className={styles.heroSubtext}>
                        We drop the container, you load it on your own schedule, we haul it off. Flat-rate pricing from $349 with delivery, pickup and disposal included.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        <BookingButton label="Book a Container" location="Debris Removal Hero" />
                        <TrackedPhoneLink location="Debris Removal Hero" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container container-narrow">
                    <h2>How Debris Removal Works</h2>
                    <p style={{ color: 'var(--color-gray-600)' }}>
                        Most debris removal in Central Mississippi gets sold two ways: a crew that hauls it out by hand, or a
                        container you fill yourself. We do the second, because for anything bigger than a few truckloads it is
                        almost always the cheaper option — you are paying for disposal and transport, not for a crew standing
                        in your driveway.
                    </p>
                    <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                        You tell us where the container goes and roughly what is going in it. We deliver a 10, 15, or 20-yard
                        roll-off — usually same day if you call before noon. You load it over one, three, or seven days
                        depending on the rental period you pick. When you are done, we pick it up and take the debris to a
                        licensed disposal facility. One flat price covers delivery, the rental period, pickup, and disposal up
                        to the included weight allowance.
                    </p>
                    <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                        If you would rather compare the two approaches in detail, we wrote up the tradeoffs in{' '}
                        <Link href="/blog/dumpster-rental-vs-junk-removal-jackson-ms">dumpster rental vs. junk removal in Jackson</Link>.
                    </p>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h2 className="text-center">Types of Debris We Handle</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: 'var(--spacing-xl)' }}>
                        {[
                            {
                                title: 'Construction & Demolition',
                                desc: 'Lumber, drywall, siding, framing offcuts, cabinetry, tile and subfloor from remodels, additions and tear-downs.',
                                link: { href: '/services/construction-dumpster-rental', label: 'Construction dumpsters' },
                            },
                            {
                                title: 'Roofing Debris',
                                desc: 'Shingle tear-off, underlayment, decking and flashing. A typical 25-square tear-off fills a 20-yard container.',
                                link: { href: '/services/roofing-dumpster-rental', label: 'Roofing dumpsters' },
                            },
                            {
                                title: 'Storm & Wind Damage',
                                desc: 'Limbs, downed fencing, blown shingles, damaged siding and water-soaked materials after severe weather.',
                                link: { href: '/services/storm-cleanup-dumpster-rental', label: 'Storm cleanup' },
                            },
                            {
                                title: 'Yard & Landscaping Debris',
                                desc: 'Brush, limbs, hedge trimmings, sod, old fencing and landscape timbers from clearing work.',
                                link: { href: '/services/yard-waste-dumpster-rental', label: 'Yard waste dumpsters' },
                            },
                            {
                                title: 'Household & Estate Cleanouts',
                                desc: 'Furniture, mattresses, carpet, boxes and general household material from a full property clearing.',
                                link: { href: '/services/estate-cleanout-dumpster-rental', label: 'Estate cleanouts' },
                            },
                            {
                                title: 'Demolition Debris',
                                desc: 'Sheds, decks, carports, garages and interior demo. Heavier loads may need more than one container.',
                                link: { href: '/services/demolition-dumpster-rental', label: 'Demolition dumpsters' },
                            },
                        ].map((item) => (
                            <div key={item.title} style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem' }}>{item.desc}</p>
                                <Link href={item.link.href} style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                                    {item.link.label} →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Container Sizes for Debris Removal</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        Not sure which one? Call and describe the job — we size these every day and would rather get it right the first time than send a second truck.
                    </p>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard size="10" capacity="4 Pickup Truck Loads" weight="1 Ton Included" pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }} idealFor={['Single-room demo', 'Garage cleanout', 'Small yard debris', 'Bathroom remodel']} />
                        <DumpsterSizeCard size="15" capacity="6 Pickup Truck Loads" weight="2 Tons Included" pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }} idealFor={['Kitchen remodel', 'Deck tear-off', 'Multi-room cleanout', 'Fencing removal']} popular />
                        <DumpsterSizeCard size="20" capacity="8 Pickup Truck Loads" weight="3 Tons Included" pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }} idealFor={['Roof tear-off', 'Whole-home cleanout', 'Major demolition', 'Commercial projects']} />
                    </div>
                    <p className="text-center" style={{ marginTop: '1.5rem' }}>
                        <Link href="/sizes">Compare all three sizes side by side →</Link>
                    </p>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>What Goes In</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                                <li>✓ Lumber, framing and construction offcuts</li>
                                <li>✓ Drywall, insulation and plaster</li>
                                <li>✓ Roofing shingles and underlayment</li>
                                <li>✓ Carpet, tile, vinyl and hardwood flooring</li>
                                <li>✓ Siding, fencing and decking</li>
                                <li>✓ Furniture, mattresses and household junk</li>
                                <li>✓ Brush, limbs and yard debris</li>
                                <li>✓ Cabinetry, countertops and fixtures</li>
                            </ul>
                        </div>
                        <div>
                            <h2>What Stays Out</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                                <li>✗ Paint, solvents and household chemicals</li>
                                <li>✗ Motor oil, fuel and liquid waste</li>
                                <li>✗ Tires and vehicle batteries</li>
                                <li>✗ Asbestos and other hazardous material</li>
                                <li>✗ Medical waste</li>
                                <li>✗ Refrigerators and HVAC units with refrigerant</li>
                                <li>✗ Propane tanks and pressurized cylinders</li>
                            </ul>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-500)', marginTop: '1rem' }}>
                                Concrete, brick and dirt are accepted case by case — they hit the weight limit fast, so call
                                first. Full details are on our{' '}
                                <Link href="/blog/what-can-i-put-in-a-dumpster">what can go in a dumpster</Link> guide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2>Debris Removal By City</h2>
                    <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xl)' }}>
                        We run the Jackson metro and the surrounding tri-county area seven days a week. Each city page below
                        has local pricing, delivery notes and permit information.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                        {CITY_NOTES.map((item) => (
                            <div key={item.slug} style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: '1rem' }}>
                                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                                    <Link href={`/service-areas/${item.slug}`}>Debris Removal in {item.city}, MS</Link>
                                </h3>
                                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.92rem', margin: 0 }}>{item.note}</p>
                            </div>
                        ))}
                    </div>
                    <p style={{ marginTop: 'var(--spacing-xl)' }}>
                        Also serving <Link href="/service-areas/hinds-county">Hinds County</Link>,{' '}
                        <Link href="/service-areas/madison-county">Madison County</Link> and{' '}
                        <Link href="/service-areas/rankin-county">Rankin County</Link> —{' '}
                        <Link href="/service-areas">see every city we cover</Link>.
                    </p>
                </div>
            </section>

            <FaqSection faqs={faqs} title="Debris Removal FAQ" background />

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Clear the Debris?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online in about a minute, or call and we will size it with you over the phone.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Debris Removal CTA" />
                        <TrackedPhoneLink location="Debris Removal CTA" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
