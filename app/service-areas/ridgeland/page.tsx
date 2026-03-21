import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, injectSchema } from '@/lib/schema'
import DumpsterSizeCard from '@/components/DumpsterSizeCard'
import BookingButton from '@/components/BookingButton'
import styles from '../city.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Roll Off Dumpster Rental Ridgeland MS | Madison County | Mid South',
    description:
        'Roll off dumpster rental in Ridgeland, MS and Madison County. 10, 15 & 20-yard dumpsters with same-day delivery to Highland Colony, Bridgewater & more. Flat-rate pricing, no hidden fees. Call 601-316-7891.',
    openGraph: {
        title: 'Roll Off Dumpster Rental Ridgeland MS | Madison County',
        description: 'Local roll off dumpster rental serving Ridgeland & all of Madison County. Same-day delivery, flat-rate pricing starting at $349.',
        url: 'https://midsouthdumpsterms.com/service-areas/ridgeland',
    },
}

const faqs = [
    {
        question: 'Do I need an HOA permit to rent a dumpster in Ridgeland, MS?',
        answer: 'HOA neighborhoods like Bridgewater might require approval for visible exterior dumpsters. For street placement on public roads, contact the City of Ridgeland Public Works department. Placement on your own private driveway typically requires no permit.',
    },
    {
        question: 'How much does roll off dumpster rental cost in Ridgeland, MS?',
        answer: 'Our flat-rate pricing for Ridgeland includes delivery, pickup, and disposal with no hidden fees. A 10-yard roll off dumpster starts at $349, a 15-yard at $399, and a 20-yard at $449. Extended rentals are available at $50/day.',
    },
    {
        question: 'What is prohibited from a Ridgeland dumpster rental?',
        answer: 'Hazardous materials, wet paint, tires, batteries, and appliances containing Freon are strictly prohibited for environmental safety. Standard household junk, lumber, roofing shingles, and yard debris are all accepted.',
    },
    {
        question: 'Do you serve all of Madison County, MS?',
        answer: 'Yes! We serve all cities and communities throughout Madison County including Ridgeland, Madison, Canton, Gluckstadt, Flora, and Pocahontas. Same-day roll off dumpster delivery is available throughout Madison County when you call before noon.',
    },
    {
        question: 'How quickly can you deliver a dumpster to Ridgeland?',
        answer: 'We offer same-day roll off dumpster delivery in Ridgeland, MS, 7 days a week. Call us before noon at 601-316-7891 and we can typically have a dumpster at your location the same day.',
    },
]

export default function RidgelandPage() {
    const serviceSchema = generateServiceSchema(
        'Dumpster Rental',
        'Professional roll-off dumpster rentals in Ridgeland, MS. Available in 10, 15, and 20-yard sizes for residential, commercial, and construction projects.',
        'Ridgeland',
        undefined,
        ['39157']
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Service Areas', url: 'https://midsouthdumpsterms.com/service-areas' },
        { name: 'Ridgeland', url: 'https://midsouthdumpsterms.com/service-areas/ridgeland' },
    ])
    const faqSchema = generateFAQSchema(faqs)

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Roll Off Dumpster Rental in Ridgeland, MS</h1>
                    <p className={styles.heroSubtext}>
                        Local roll off dumpster rental serving Ridgeland and all of Madison County — same-day delivery, flat-rate pricing, no hidden fees
                    </p>
                    <div className={styles.heroButtons}>
                        <BookingButton label="Book Ridgeland Dumpster" location="Ridgeland Service Area Hero" />
                        <TrackedPhoneLink location="Ridgeland Service Area CTA" className="btn btn-outline btn-lg">
                            Call 601-316-7891
                        </TrackedPhoneLink>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="text-center">Dumpster Sizes Available in Ridgeland</h2>
                    <div className={styles.sizesGrid}>
                        <DumpsterSizeCard size="10" capacity="4 Pickup Truck Loads" weight="1 Ton Included" pricing={{ '1 Day': '$349', '3 Day': '$379', '7 Day': '$399' }} idealFor={['Small Cleanouts', 'Garage Cleanup', 'Minor Renovations', 'Yard Debris']} />
                        <DumpsterSizeCard size="15" capacity="6 Pickup Truck Loads" weight="2 Tons Included" pricing={{ '1 Day': '$399', '3 Day': '$429', '7 Day': '$449' }} idealFor={['Home Renovations', 'Roofing Projects', 'Estate Cleanouts', 'Medium Construction']} popular />
                        <DumpsterSizeCard size="20" capacity="8 Pickup Truck Loads" weight="3 Tons Included" pricing={{ '1 Day': '$449', '3 Day': '$479', '7 Day': '$499' }} idealFor={['Large Renovations', 'New Construction', 'Major Demolition', 'Commercial Projects']} />
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Why Choose Mid South for Ridgeland Dumpster Rental?</h2>
                            <p>We're a locally owned, Central Mississippi company — not a national broker. When you call us, you talk directly to the owner. Our roll off dumpsters are delivered by our own trucks and drivers, ensuring reliability and accountability that national chains can't match.</p>
                            <ul className={styles.benefitsList}>
                                <li>✓ Same-day roll off dumpster delivery available</li>
                                <li>✓ Serving Ridgeland and all of Madison County</li>
                                <li>✓ Flat-rate pricing — delivery, pickup & disposal included</li>
                                <li>✓ 10, 15, and 20-yard dumpsters in stock</li>
                                <li>✓ Residential, commercial & construction service</li>
                                <li>✓ Open 7 days a week, 7AM – 7PM</li>
                                <li>✓ 5-star rated on Google</li>
                                <li>✓ Licensed & insured</li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/gallery/20-yard-dumpster-rental-ridgeland-project.jpg"
                                alt="A 20-yard roll off dumpster delivered to a Ridgeland MS construction project"
                                width={600}
                                height={400}
                                className={styles.contentImage}
                            />
                            <h2>Perfect For Any Ridgeland Project</h2>
                            <p>Whether you're renovating a home along Highland Colony Parkway, <Link href="/blog/estate-cleanout-dumpster-rental-central-ms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>clearing out an estate</Link>, or running a roofing job off the Old Canton Road corridor near I-55, we have the right roll off dumpster for your project.</p>
                            <p><strong>Common uses in Ridgeland, MS:</strong></p>
                            <ul className={styles.projectsList}>
                                <li>Home renovations and remodeling</li>
                                <li>Roofing tear-offs and replacements</li>
                                <li>Construction and demolition debris</li>
                                <li>Estate and foreclosure cleanouts</li>
                                <li>Yard waste and storm cleanup</li>
                                <li>Commercial contractor projects</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <h2>Roll Off Dumpster Rental Serving All of Madison County, MS</h2>
                    <p>
                        Ridgeland is our home base for Madison County operations. We provide fast roll off dumpster rental service to every corner of Madison County — from the I-55 corridor in Ridgeland to the neighborhoods of Madison, Canton, Gluckstadt, and Flora. No matter where your project is, we deliver on time.
                    </p>
                    <h2>Neighborhoods We Serve in Ridgeland</h2>
                    <p>
                        We proudly deliver roll off dumpsters to every neighborhood in Ridgeland, MS. Whether you're in <strong>Bridgewater</strong>, <strong>Lake Harbor</strong>, <strong>Old Town Ridgeland</strong>, <strong>The Township at Colony Park</strong>, <strong>Dinsmor</strong>, <strong>Reunion</strong>, or anywhere along <strong>Old Canton Road</strong> or <strong>Highland Colony Parkway</strong>, we'll get your dumpster there fast.
                    </p>
                    <p>
                        From residential cleanouts to large commercial construction on the Ridgeland Parkway corridors, Mid South Dumpster Rentals is Madison County's trusted local roll off dumpster provider.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Ridgeland is part of <Link href="/service-areas/madison-county" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Madison County</Link> — view all Madison County cities we serve.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection} style={{ padding: 'var(--spacing-3xl) 0', backgroundColor: 'var(--color-gray-50)' }}>
                <div className="container container-narrow">
                    <h2 className="text-center">Ridgeland Dumpster Rental FAQs</h2>
                    <div className={styles.faqList}>
                        {faqs.map((faq, index) => (
                            <div key={index} className={styles.faqItem} style={{ marginBottom: 'var(--spacing-xl)' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Ready to Rent a Dumpster in Ridgeland?</h2>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
                        Book online now or call 601-316-7891 for same-day service
                    </p>
                    <BookingButton label="Book Now" location="Ridgeland Service Area CTA" />
                </div>
            </section>
        </>
    )
}
