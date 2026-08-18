import type { Metadata } from 'next'
import Link from 'next/link'
import BookingIframe from './BookingIframe'
import styles from './page.module.css'
import { generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'

export const metadata: Metadata = {
    title: 'Book a Dumpster Online | Jackson MS',
    description:
        'Reserve your roll-off dumpster online in about a minute. 10, 15 and 20-yard containers from $349, same-day delivery across Central Mississippi.',
    alternates: { canonical: 'https://midsouthdumpsterms.com/book-online' },
    openGraph: {
        title: 'Book a Dumpster Online',
        description: 'Reserve your roll-off dumpster in under a minute. Flat-rate pricing. Same-day delivery available in Central MS.',
        url: 'https://midsouthdumpsterms.com/book-online',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

const FAQS = [
    {
        question: 'How long does booking a dumpster online take?',
        answer:
            'About a minute. You pick a size and rental period, give us the delivery address and a contact number, and choose a delivery date. If anything about the placement needs discussing, we will call you before the truck rolls.',
    },
    {
        question: 'Can I still get same-day delivery if I book online?',
        answer:
            'Yes, as long as the booking comes in before noon. Same-day slots are limited and they fill up first thing after a storm, so if it is urgent it is worth calling 601-316-7891 alongside booking online.',
    },
    {
        question: 'What does the price include?',
        answer:
            'Delivery, the rental period you selected, pickup, and disposal up to the included weight allowance. There is no fuel surcharge and no environmental fee. The only charges that can be added afterwards are weight overage and extra rental days.',
    },
    {
        question: 'What if I picked the wrong size?',
        answer:
            'Call us before delivery and we will swap it at no charge. If you realise mid-project that you underestimated, we can bring a second container out, usually same or next day.',
    },
    {
        question: 'Where will the dumpster be placed?',
        answer:
            'Wherever you tell us, as long as the truck can reach it. A roll-off truck needs a long, straight run to set the container down and overhead clearance to raise the bed. Leave a note in the booking about gates, low branches, power lines or tight driveways and we will plan around them.',
    },
    {
        question: 'Do I need to be home for delivery or pickup?',
        answer:
            'No. As long as the placement spot is accessible and clear of vehicles, we will drop the container off without you there. The same goes for pickup.',
    },
]

export default function BookOnlinePage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Book Online', url: 'https://midsouthdumpsterms.com/book-online' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(generateFAQSchema(FAQS)) }} />

            {/* Booking section — Survcart popup trigger. Carries the page H1. */}
            <section className={styles.bookingSection} id="booking-form">
                <BookingIframe />
            </section>

            {/* Phone fallback — minimal, below the fold */}
            <div className={styles.phoneFallback}>
                <span>Having trouble booking?</span>
                <a href="tel:6013167891" id="book-page-call-btn">Call (601) 316-7891</a>
            </div>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container container-narrow">
                    <h2>How Online Booking Works</h2>
                    <p style={{ color: 'var(--color-gray-600)' }}>
                        Booking online reserves an actual container on an actual truck for your date — it is not a quote
                        request that someone calls you back about. Pick the size, pick how long you want it, tell us where
                        it goes, and you are done.
                    </p>
                    <ol style={{ color: 'var(--color-gray-600)', lineHeight: 2, marginTop: '1rem', paddingLeft: '1.25rem' }}>
                        <li><strong>Choose a size.</strong> 10-yard from $349, 15-yard from $399, 20-yard from $449. If you are unsure, our <Link href="/sizes">size comparison</Link> lays out dimensions and capacity side by side.</li>
                        <li><strong>Choose a rental period.</strong> One, three or seven days. Extra days are $50 each if you need longer.</li>
                        <li><strong>Give us the address.</strong> Anywhere in <Link href="/service-areas">our Central Mississippi service area</Link> — the same flat rate applies in every city we cover.</li>
                        <li><strong>Pick your delivery date.</strong> Book before noon and same-day is usually available.</li>
                    </ol>
                    <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                        You do not need to be home for delivery or pickup — just make sure the spot is clear of vehicles.
                    </p>
                </div>
            </section>

            <section style={{ background: 'var(--color-gray-50)', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container container-narrow">
                    <h2>What You Are Paying For</h2>
                    <p style={{ color: 'var(--color-gray-600)' }}>
                        One flat price covers delivery, the rental period, pickup, and disposal up to the weight allowance
                        included with your size — 1 ton on the 10-yard, 2 tons on the 15-yard, 3 tons on the 20-yard. Going
                        over runs $55 per ton on the 10 and 15-yard containers. The 20-yard has a hard 6,000 lb cap because
                        of road weight limits, so heavy material like tile, plaster or shingles needs planning; our{' '}
                        <Link href="/blog/dumpster-weight-limits-jackson-ms">weight limits guide</Link> explains how to
                        estimate a load before you book.
                    </p>
                    <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                        Certain materials cannot go in any container — paint, chemicals, tires, batteries, asbestos, and
                        appliances still holding refrigerant. The full list is on our{' '}
                        <Link href="/blog/what-can-i-put-in-a-dumpster">what can go in a dumpster</Link> page, and it is
                        worth a two-minute read before you start loading.
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container container-narrow">
                    <h2>Booking Questions</h2>
                    <div style={{ marginTop: 'var(--spacing-xl)' }}>
                        {FAQS.map((faq) => (
                            <div key={faq.question} style={{ borderBottom: '1px solid var(--color-gray-200)', padding: 'var(--spacing-lg) 0' }}>
                                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{faq.question}</h3>
                                <p style={{ color: 'var(--color-gray-600)', margin: 0 }}>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                    <p style={{ marginTop: 'var(--spacing-xl)', color: 'var(--color-gray-600)' }}>
                        Still have questions? Our <Link href="/faq">full FAQ</Link> covers pricing, permits and prohibited
                        items in more detail, or just <Link href="/contact">get in touch</Link>.
                    </p>
                </div>
            </section>
        </>
    )
}
