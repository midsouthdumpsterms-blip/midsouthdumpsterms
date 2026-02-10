import { Metadata } from 'next'
import Image from 'next/image'
import { generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from './page.module.css'

export const metadata: Metadata = {
    title: 'Dumpster Rentals Jackson MS | Affordable Roll-Off Dumpsters | Mid South',
    description:
        'Affordable dumpster rentals in Jackson, MS. 10, 15, 20-yard roll-off dumpsters. Same-day delivery available. Serving Central Mississippi. Book online or call 601-316-7891.',
    openGraph: {
        title: 'Mid South Dumpster Rentals | Jackson, MS',
        description: 'Affordable roll-off dumpster rentals in Central Mississippi.',
        url: 'https://midsouthdumpsterms.com',
    },
}

const faqData = [
    {
        question: 'What sizes of dumpsters do you offer?',
        answer:
            'We offer 10-yard, 15-yard, and 20-yard dumpsters to accommodate projects of all sizes, from small cleanouts to large construction jobs.',
    },
    {
        question: 'How much does dumpster rental cost?',
        answer:
            'We offer competitive pricing on 10-yard, 15-yard, and 20-yard dumpsters with flexible rental periods. Call us at 601-316-7891 or book online for an instant quote tailored to your project needs.',
    },
    {
        question: 'What areas do you serve?',
        answer:
            'We serve Jackson, Brandon, Clinton, Flowood, Pearl, Ridgeland, Madison, Flora, Canton, Terry, Byram, Gluckstadt, and surrounding Central Mississippi areas.',
    },
    {
        question: 'Can I get same-day delivery?',
        answer:
            'Yes! We offer same-day delivery when you book early. Call us at 601-316-7891 to check availability for same-day service.',
    },
    {
        question: 'What can I throw in the dumpster?',
        answer:
            'You can dispose of construction debris, furniture, household waste, yard waste, and more. Prohibited items include hazardous materials, liquids, tires, batteries, and refrigerators.',
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
                            Affordable Dumpster Rentals in Jackson, MS
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
