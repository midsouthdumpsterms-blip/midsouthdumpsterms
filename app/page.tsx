import { Metadata } from 'next'
import Image from 'next/image'
import { generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import TrustBadges from '@/components/TrustBadges'
import styles from './page.module.css'

export const metadata: Metadata = {
    title: 'Dumpster Rentals Jackson MS | Same-Day Delivery',
    description:
        'Affordable 10, 15 & 20-yard dumpster rentals in Jackson, MS. Same-day delivery, transparent pricing, no hidden fees. Serving Central MS. Call 601-316-7891 or book online.',
    openGraph: {
        title: 'Mid South Dumpster Rentals | Jackson, MS',
        description: 'Affordable roll-off dumpster rentals in Central Mississippi with same-day delivery.',
        url: 'https://midsouthdumpsterms.com',
    },
}

const faqData = [
    {
        question: 'What sizes of dumpsters do you offer?',
        answer:
            'We offer 10-yard, 15-yard, and 20-yard roll-off dumpsters. The 10-yard holds about 4 pickup truck loads and is perfect for small cleanouts. The 15-yard (our most popular) holds 6 pickup truck loads and suits most home renovation projects. The 20-yard holds 8 pickup truck loads and handles large construction or demolition jobs.',
    },
    {
        question: 'How much does dumpster rental cost in Jackson, MS?',
        answer:
            'Our flat-rate prices include delivery, pickup, and disposal with no hidden fees. 10-yard dumpster: from $349 (1 day) to $399 (7 days), includes 1 ton. 15-yard dumpster: from $399 (1 day) to $449 (7 days), includes 2 tons. 20-yard dumpster: from $449 (1 day) to $499 (7 days), includes 3 tons. Overage is $55/ton for 10 and 15-yard containers.',
    },
    {
        question: 'What areas do you serve?',
        answer:
            'We serve the entire Central Mississippi tri-county area including Jackson, Brandon, Clinton, Flowood, Pearl, Ridgeland, Madison, Flora, Canton, Terry, Byram, Gluckstadt, Florence, and Richland — 7 days a week.',
    },
    {
        question: 'Can I get same-day delivery?',
        answer:
            'Yes! Same-day delivery is available 7 days a week when you call before noon. Call us at 601-316-7891 or book online to check same-day availability in your area.',
    },
    {
        question: 'What makes Mid South Dumpster Rentals different from other companies in Central MS?',
        answer:
            'Mid South Dumpster Rentals is locally owned and operated in Jackson, MS. We offer flat-rate pricing with no hidden fees, same-day delivery available 7 days a week, online booking 24/7, and we serve the entire tri-county area (Hinds, Madison, and Rankin counties). Our prices start at $349 and include delivery, pickup, and disposal.',
    },
    {
        question: 'What can I throw in the dumpster?',
        answer:
            'You can dispose of construction debris, furniture, household waste, yard waste, lumber, drywall, roofing shingles, carpet, and more. Prohibited items include hazardous materials, liquids, tires, batteries, refrigerators with refrigerant, electronics, and food waste.',
    },
]

export default function Home() {
    const faqSchema = generateFAQSchema(faqData)

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }}
            />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className="animate-fade-in">
                            Affordable Roll-Off Dumpster Rentals in Jackson, MS
                        </h1>
                        <p className={styles.heroSubtext}>
                            10, 15, & 20-yard roll-off dumpsters. Same-day delivery available. Serving Central Mississippi.
                        </p>
                        <div className={styles.heroButtons}>
                            <BookingButton label="Book Now Online" location="Homepage Hero" />
                            <a href="tel:6013167891" className="btn btn-outline btn-lg">
                                Call 601-316-7891
                            </a>
                        </div>
                        <div className={styles.heroFeatures}>
                            <div className={styles.feature}>
                                <span className={styles.checkmark}>✓</span>
                                <span>Same-Day Delivery</span>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.checkmark}>✓</span>
                                <span>7 Days a Week</span>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.checkmark}>✓</span>
                                <span>Transparent Pricing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dumpster Sizes Section */}
            <section className={styles.sizesSection}>
                <div className="container">
                    <h2 className="text-center">Choose Your Dumpster Size</h2>
                    <p className="text-center" style={{ fontSize: '1.125rem', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-md)' }}>
                        Perfect for residential, commercial, and construction projects
                    </p>

                    {/* Size Comparison Visual */}
                    <div className={styles.sizeComparison}>
                        <Image
                            src="/images/dumpster-size-comparison-clean.png"
                            alt="Visual comparison of 10 yard, 15 yard, and 20 yard dumpster sizes with person for scale"
                            width={1200}
                            height={400}
                            className={styles.comparisonImage}
                            priority
                            fetchPriority="high"
                        />
                        <p className={styles.comparisonDisclaimer}>
                            <em>* Visual size estimation for reference only. Actual dumpster dimensions may vary.</em>
                        </p>
                    </div>

                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard
                            size="10"
                            capacity="4 Pickup Truck Loads"
                            weight="1 Ton Included"
                            pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }}
                            idealFor={['Small Cleanouts', 'Garage Cleanup', 'Minor Renovations', 'Yard Debris']}
                        />
                        <DumpsterSizeCard
                            size="15"
                            capacity="6 Pickup Truck Loads"
                            weight="2 Tons Included"
                            pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }}
                            idealFor={['Home Renovations', 'Roofing Projects', 'Estate Cleanouts', 'Medium Construction']}
                            popular
                        />
                        <DumpsterSizeCard
                            size="20"
                            capacity="8 Pickup Truck Loads"
                            weight="3 Tons Included"
                            pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }}
                            idealFor={['Large Renovations', 'New Construction', 'Major Demolition', 'Commercial Projects']}
                        />
                    </div>
                </div>
            </section>

            {/* Trust Badges Section */}
            <TrustBadges />

            {/* Service Areas Section */}
            <section className={styles.serviceAreasSection}>
                <div className="container">
                    <h2 className="text-center">Serving Central Mississippi</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                        Reliable dumpster rental service across these communities and surrounding areas
                    </p>
                    <div className={styles.citiesGrid}>
                        {['Jackson', 'Brandon', 'Clinton', 'Flowood', 'Pearl', 'Ridgeland', 'Madison', 'Flora', 'Canton', 'Terry', 'Byram', 'Gluckstadt'].map(
                            (city) => (
                                <a
                                    key={city}
                                    href={`/service-areas/${city.toLowerCase()}`}
                                    className={styles.cityCard}
                                >
                                    <span className={styles.cityName}>{city}</span>
                                    <span className={styles.cityArrow}>→</span>
                                </a>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className="container container-narrow">
                    <h2 className="text-center">Frequently Asked Questions</h2>
                    <div className={styles.faqList}>
                        {faqData.map((faq, index) => (
                            <div key={index} className={styles.faqItem}>
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Get Started?</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book your dumpster rental online in minutes or call us at 601-316-7891
                    </p>
                    <div className={styles.ctaButtons}>
                        <BookingButton label="Book Online Now" location="Homepage CTA" />
                        <a href="/contact" className="btn btn-outline btn-lg">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
