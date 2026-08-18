import { Metadata } from 'next'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import styles from '../services.module.css'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/services/estate-cleanout-dumpster-rental' },
    title: 'Estate Cleanout Dumpster Rental Jackson MS',
    description:
        'Roll-off dumpsters for estate sales, probate and foreclosure cleanouts in Central MS. Flexible rental periods so families are not rushed.',
    openGraph: {
        title: 'Estate Cleanout Dumpster Rental Jackson MS',
        description: 'Roll-off dumpsters for estate cleanouts, foreclosure cleanouts, and property turnovers in Central MS. Same-day delivery, flat-rate pricing.',
        url: 'https://midsouthdumpsterms.com/services/estate-cleanout-dumpster-rental',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

export default function EstateCleanoutDumpsterRentalPage() {
    const serviceSchema = generateServiceSchema(
        'Estate Cleanout Dumpster Rental',
        'Roll-off dumpster rental for estate cleanouts, foreclosure cleanouts, property turnovers, and hoarding situations in Central Mississippi. Same-day delivery available 7 days a week.',
        'Central Mississippi',
        [
            { price: '349', description: '10 Yard Dumpster - 1 Day Rental (Includes 1 ton)' },
            { price: '399', description: '15 Yard Dumpster - 1 Day Rental (Includes 2 tons)' },
            { price: '449', description: '20 Yard Dumpster - 1 Day Rental (Includes 3 tons)' },
        ]
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Services', url: 'https://midsouthdumpsterms.com/services' },
        { name: 'Estate Cleanout Dumpster Rental', url: 'https://midsouthdumpsterms.com/services/estate-cleanout-dumpster-rental' },
    ])

    const faqSchema = generateFAQSchema([
        {
            question: 'What size dumpster do I need for an estate cleanout?',
            answer: 'For most estate cleanouts, the 15-yard or 20-yard dumpster is ideal. A 15-yard holds about 6 pickup truck loads — enough for 2-3 rooms of furniture, boxes, and household items. If the home is fully furnished or has accumulated decades of belongings, the 20-yard gives you more room to work without worrying about overfilling.',
        },
        {
            question: 'How long can I keep the dumpster for an estate cleanout?',
            answer: 'We offer 1-day, 3-day, and 7-day rental periods. Most estate cleanouts take 3-7 days depending on the size of the home and the amount of belongings. If you need more time, extended rentals are available for $50/day after the initial rental period.',
        },
        {
            question: 'What can I put in the dumpster during an estate cleanout?',
            answer: 'You can dispose of furniture, mattresses, clothing, boxes, household items, appliances (stoves, washers, dryers), yard debris, flooring, and general clutter. We cannot accept hazardous materials, paint, chemicals, tires, batteries, or refrigerators with refrigerant.',
        },
        {
            question: 'Do you offer dumpsters for foreclosure cleanouts?',
            answer: 'Yes! We work with property managers, real estate agents, and banks regularly for foreclosure cleanouts and rental property turnovers. Same-day delivery is available, and our flat-rate pricing makes budgeting easy.',
        },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Estate Cleanout Dumpster Rental in Central Mississippi</h1>
                    <p className={styles.heroSubtext}>
                        Roll-off containers for estate cleanouts, property turnovers, and foreclosure cleanup — compassionate service, same-day delivery
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        <BookingButton label="Book Cleanout Dumpster" location="Estate Hero" />
                        <TrackedPhoneLink location="Estate Hero" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Cleanout Projects We Handle</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-2xl)', fontSize: '1.125rem' }}>
                        Clearing out a home is never easy. We make the logistics simple with fast delivery, flat pricing, and flexible rental periods.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                        {[
                            { icon: '🏠', title: 'Estate Cleanouts', desc: 'Clearing a loved one\'s home after a loss. We provide the container — you take the time you need with flexible 3 and 7-day rentals.' },
                            { icon: '🏚️', title: 'Foreclosure Cleanouts', desc: 'Banks, property managers, and agents trust us for fast turnaround on foreclosure property cleanup and debris removal.' },
                            { icon: '🔑', title: 'Rental Property Turnovers', desc: 'Between tenants? A dumpster makes quick work of leftover furniture, trash, carpet, and debris for your next showing.' },
                            { icon: '📦', title: 'Hoarding Situations', desc: 'We understand hoarding cleanup is sensitive. Our discreet delivery and flexible scheduling lets you work at your own pace.' },
                            { icon: '🏡', title: 'Downsizing Help', desc: 'Moving to a smaller home? A dumpster lets you sort, donate, and discard without making dozens of dump runs.' },
                            { icon: '🏢', title: 'Commercial Property Cleanouts', desc: 'Office cleanouts, warehouse clearing, and commercial property turnovers. We handle the debris so you can focus on the transition.' },
                        ].map((item) => (
                            <div key={item.title} style={{ background: 'var(--color-gray-50)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Available Dumpster Sizes for Cleanouts</h2>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard size="10" capacity="4 Pickup Truck Loads" weight="1 Ton Included" pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }} idealFor={['Single Room Cleanout', 'Garage Clearing', 'Small Apartments', 'Storage Unit Cleanout']} />
                        <DumpsterSizeCard size="15" capacity="6 Pickup Truck Loads" weight="2 Tons Included" pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }} idealFor={['Most Estate Cleanouts', '2-3 Bedroom Homes', 'Rental Turnovers', 'Medium Hoarding Jobs']} popular />
                        <DumpsterSizeCard size="20" capacity="8 Pickup Truck Loads" weight="3 Tons Included" pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }} idealFor={['Full House Cleanout', 'Large Estates', 'Severe Hoarding', 'Multiple Property Clearing']} />
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>What You Can Dispose Of</h2>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                                <li>✓ Furniture (couches, tables, chairs, beds)</li>
                                <li>✓ Mattresses and box springs</li>
                                <li>✓ Clothing, linens, and textiles</li>
                                <li>✓ Boxes, papers, and household clutter</li>
                                <li>✓ Appliances (stoves, washers, dryers)</li>
                                <li>✓ Carpet, flooring, and rugs</li>
                                <li>✓ Yard debris and outdoor items</li>
                                <li>✓ General household waste</li>
                            </ul>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-500)', marginTop: '1rem' }}>
                                <strong>Note:</strong> We do not accept hazardous materials, paint, chemicals, tires, batteries, refrigerators with refrigerant, or electronics. See our <Link href="/blog/what-can-i-put-in-a-dumpster" style={{ textDecoration: 'underline' }}>full guide</Link>.
                            </p>
                        </div>
                        <div>
                            <h2>Tips for a Smooth Cleanout</h2>
                            <p style={{ color: 'var(--color-gray-600)' }}>
                                <strong>1. Sort first, toss second.</strong> Walk through the home and separate items into keep, donate, and dispose piles before the dumpster arrives. This saves time and ensures nothing valuable ends up in the container.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                <strong>2. Start with the largest items.</strong> Load furniture and bulky items first, then fill gaps with smaller debris. This maximizes your dumpster space.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                <strong>3. Plan for 3-7 days.</strong> Most cleanouts take longer than expected. Our 7-day rental gives you room to work without rushing.
                            </p>
                            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                                Read our detailed guides: <Link href="/blog/estate-cleanout-dumpster-rental-jackson-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>estate cleanout guide</Link> · <Link href="/blog/foreclosure-cleanout-dumpster-rental-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>foreclosure cleanout guide</Link> · <Link href="/blog/rental-property-cleanout-dumpster-rental-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>rental property turnover guide</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container container-narrow">
                    <h2 className="text-center">Estate Cleanout Dumpster Rental FAQ</h2>
                    <div style={{ marginTop: 'var(--spacing-xl)' }}>
                        {[
                            { q: 'What size dumpster do I need for an estate cleanout?', a: 'For most homes, the 15-yard or 20-yard is ideal. A 15-yard holds about 6 pickup truck loads. The 20-yard gives extra room for large estates or homes with decades of accumulated belongings.' },
                            { q: 'How long can I keep the dumpster?', a: 'We offer 1-day, 3-day, and 7-day rentals. Extended rentals are available for $50/day. Most estate cleanouts take 3-7 days.' },
                            { q: 'Do you offer foreclosure cleanout dumpsters?', a: 'Yes! We work with property managers, agents, and banks regularly. Same-day delivery and flat-rate pricing make foreclosure cleanouts easy to budget.' },
                            { q: 'Can I put a mattress in the dumpster?', a: 'Yes — mattresses, box springs, furniture, and household items are all accepted.' },
                        ].map((faq) => (
                            <div key={faq.q} style={{ borderBottom: '1px solid var(--color-gray-200)', padding: 'var(--spacing-lg) 0' }}>
                                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{faq.q}</h3>
                                <p style={{ color: 'var(--color-gray-600)', margin: 0 }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Start Your Cleanout?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Same-day delivery available — call now or book online. We&apos;ll handle the container, you handle the memories.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <BookingButton label="Book Now Online" location="Estate CTA" />
                        <TrackedPhoneLink location="Estate CTA" className="btn btn-outline-white btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>
        </>
    )
}
