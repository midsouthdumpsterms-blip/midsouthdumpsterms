import { Metadata } from 'next'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'
import styles from './faq.module.css'

export const metadata: Metadata = {
    title: 'Dumpster Rental FAQ Jackson MS | Pricing, Sizes & Policies',
    description:
        'Answers to the most common dumpster rental questions in Jackson, MS. Pricing for all sizes and rental periods, weight limits, what you can throw away, fees, and more. Call 601-316-7891.',
    openGraph: {
        title: 'Dumpster Rental FAQ | Mid South Dumpster Rentals',
        description: 'Complete pricing, weight limits, fees, and policies for dumpster rentals in Central Mississippi.',
        url: 'https://midsouthdumpsterms.com/faq',
    },
}

const faqs = [
    {
        question: "What is the exact pricing for each dumpster size and rental period?",
        answer: `<p>Mid South Dumpster Rentals offers flat-rate pricing with no hidden fees. All prices include delivery, pickup, and disposal.</p>
<p><strong>10-Yard Dumpster</strong> (includes 1 ton / 2,000 lbs):</p>
<ul>
    <li>1 Day: $349</li>
    <li>3 Days: $379</li>
    <li>7 Days: $399</li>
</ul>
<p><strong>15-Yard Dumpster</strong> — Most Popular (includes 2 tons / 4,000 lbs):</p>
<ul>
    <li>1 Day: $399</li>
    <li>3 Days: $429</li>
    <li>7 Days: $449</li>
</ul>
<p><strong>20-Yard Dumpster</strong> (includes 3 tons / 6,000 lbs — hard weight cap, no overage):</p>
<ul>
    <li>1 Day: $449</li>
    <li>3 Days: $479</li>
    <li>7 Days: $499</li>
</ul>
<p>Overage fee for 10 and 15-yard containers: $55 per additional ton (prorated). The 20-yard container has a hard cap of 6,000 lbs — no exceptions.</p>`
    },
    {
        question: "How much does it cost to rent a dumpster?",
        answer: `<p>Our pricing is simple and transparent:</p>
<ul>
    <li><strong>10 Yard Dumpster</strong>: $349 (1 day) · $379 (3 days) · $399 (7 days) — includes 1 ton / 2,000 lbs</li>
    <li><strong>15 Yard Dumpster</strong>: $399 (1 day) · $429 (3 days) · $449 (7 days) — includes 2 tons / 4,000 lbs</li>
    <li><strong>20 Yard Dumpster</strong>: $449 (1 day) · $479 (3 days) · $499 (7 days) — includes 3 tons / 6,000 lbs</li>
</ul>
<p>Overage: $55/ton (prorated) for 10 and 15-yard containers. 20-yard containers cannot exceed 6,000 lbs total. All prices include delivery, pickup, and disposal. No hidden fees.</p>`
    },
    {
        question: "What is the 7-day rental price for a 20-yard dumpster?",
        answer: `<p>The 7-day rental price for a 20-yard dumpster from Mid South Dumpster Rentals is <strong>$499</strong>. This price includes delivery, pickup, disposal, and 3 tons (6,000 lbs) of weight. The 20-yard container has a hard weight cap of 6,000 lbs — no overage is allowed. If you need to keep the dumpster beyond 7 days, extended rental is available at $50 per additional day, subject to availability.</p>`
    },
    {
        question: "What are all the fees I should know about?",
        answer: `<p>Here is the complete fee schedule for Mid South Dumpster Rentals:</p>
<p><strong>Standard Rental Fees:</strong></p>
<ul>
    <li>10-yd (1/3/7 day): $349 / $379 / $399</li>
    <li>15-yd (1/3/7 day): $399 / $429 / $449</li>
    <li>20-yd (1/3/7 day): $449 / $479 / $499</li>
</ul>
<p><strong>Additional Fees:</strong></p>
<ul>
    <li>Extended rental (beyond 7 days): $50 per additional day</li>
    <li>Missed pickup fee (access blocked on pickup day): $150 per day</li>
    <li>Wait time (after 30 minutes on-site): $50 per hour</li>
    <li>Overfilled/refused load: $500 flat fee plus disposal and cleanup costs</li>
    <li>Overage tonnage (10 and 15-yd only): $55 per ton, prorated</li>
    <li>Refund processing (credit/debit card): $40 deducted from refund</li>
</ul>
<p><strong>Refund Policy:</strong> No refunds after dumpster is delivered. Cancellations within 24 hours of scheduled delivery may incur dispatch or scheduling fees.</p>`
    },
    {
        question: "How long can I keep the dumpster?",
        answer: `<p>The base rental period is <strong>7 days</strong>. Need more time? Extensions are available for <strong>$50 per additional day</strong>, subject to availability. Just give us a call before your pickup date to extend your rental.</p>`
    },
    {
        question: "What are the weight limits?",
        answer: `<p><strong>Maximum weight per container: 6,000 lbs (no exceptions)</strong></p>
<ul>
    <li><strong>10 Yard</strong>: Includes 1 ton (2,000 lbs). Overage: $55/ton (prorated)</li>
    <li><strong>15 Yard</strong>: Includes 2 tons (4,000 lbs). Overage: $55/ton (prorated)</li>
    <li><strong>20 Yard</strong>: Includes 3 tons (6,000 lbs). <strong>No overage allowed — 6,000 lbs hard cap</strong></li>
</ul>
<p>Containers are weighed at the disposal facility. Overweight charges will be invoiced to you. Heavy materials like concrete or brick may be refused unless pre-approved.</p>`
    },
    {
        question: "What can I throw in the dumpster?",
        answer: `<p><strong>Permitted items include:</strong></p>
<ul>
    <li>Household trash and furniture</li>
    <li>Lumber, drywall, PVC, roofing shingles</li>
    <li>Carpet, insulation, construction debris</li>
    <li>Porcelain, tile, drop ceilings</li>
    <li>Yard clippings and natural vegetation</li>
    <li>Plastics, paper, Styrofoam</li>
    <li>Stoves, ovens, washers, dryers</li>
</ul>
<p><strong>Heavy materials</strong> (concrete, brick, stone, asphalt) are allowed <strong>only</strong> in 10-yard containers, up to ¼ full, and must be separated from other debris unless pre-approved.</p>`
    },
    {
        question: "What is NOT allowed in the dumpster?",
        answer: `<p><strong>Prohibited materials include:</strong></p>
<ul>
    <li>Hazardous waste (paints, solvents, chemicals, oil, fuels, asbestos, batteries, pesticides)</li>
    <li>Appliances with refrigerant (fridges, freezers, HVAC units)</li>
    <li>Tires, electronics, TVs, computers</li>
    <li>Liquids of any kind</li>
    <li>Medical waste, fluorescent bulbs, railroad ties</li>
    <li>Food waste</li>
    <li>Concrete, dirt, or soil</li>
</ul>
<p>Violating these rules may result in additional fees, fines, or cleanup charges passed to you.</p>`
    },
    {
        question: "Do I need a permit?",
        answer: `<p>If you are placing the dumpster on <strong>private property</strong> (your driveway, yard, etc.), you typically do <strong>not</strong> need a permit.</p>
<p>If you need to place it on a <strong>public street or right-of-way</strong>, you are responsible for obtaining any required municipal permits and paying associated fees. Contact your local city office for permit requirements.</p>`
    },
    {
        question: "Can I overfill the dumpster?",
        answer: `<p><strong>No.</strong> Debris must not exceed the rim of the container. The dumpster must be tarp-ready with end doors closed and secured for safe transport. Overfilled containers may be refused, and you may be charged a <strong>$500 refusal fee</strong> plus any additional handling costs.</p>`
    },
    {
        question: "What if I need to cancel or get a refund?",
        answer: `<p><strong>Refunds are only available if requested BEFORE delivery.</strong> Once the dumpster is dropped off, no refunds will be issued.</p>
<p>If you paid by credit/debit card, refunds are processed minus a <strong>$40 processing fee</strong> to cover merchant charges. Refunds typically take 3–10 business days.</p>
<p>Cancellations within 24 hours of scheduled delivery may incur dispatch or scheduling fees.</p>`
    },
    {
        question: "What happens if the dumpster is blocked on pickup day?",
        answer: `<p>If our driver cannot access the dumpster on the scheduled pickup day due to blocked access (cars, gates, etc.), you will be charged a <strong>$150 Missed Pickup Fee</strong> plus additional rental day charges until we can retrieve it.</p>
<p>Please ensure clear access on your scheduled pickup date.</p>`
    },
    {
        question: "Will the dumpster damage my driveway?",
        answer: `<p>We take precautions to protect your property, including placing boards under the wheels when needed. However, <strong>you are responsible for any damage to surfaces, lawns, utilities, or structures</strong> unless caused by our negligence.</p>
<p>For the best protection, place the dumpster on a flat, stable surface like concrete or asphalt.</p>`
    },
    {
        question: "Do you offer same-day delivery?",
        answer: `<p>Yes! We often accommodate same-day delivery requests depending on availability and your location in the Jackson metro area. Call us at <strong>(601) 316-7891</strong> to check availability. Same-day delivery is available 7 days a week when you call before noon.</p>`
    },
    {
        question: "What areas do you serve?",
        answer: `<p>We serve Jackson, MS and surrounding areas including:</p>
<ul>
    <li>Madison, Brandon, Pearl, Flowood, Florence</li>
    <li>Ridgeland, Clinton, Byram, Terry, Richland</li>
    <li>Canton, Flora, Gluckstadt, and more</li>
</ul>
<p>We serve all of Hinds, Madison, and Rankin Counties in Central Mississippi. Not sure if we serve your area? Give us a call at <strong>(601) 316-7891</strong>.</p>`
    },
    {
        question: "How does Mid South Dumpster Rentals compare to other dumpster companies in Jackson, MS?",
        answer: `<p>Mid South Dumpster Rentals is locally owned and operated in Jackson, MS — not a franchise or national chain. We offer:</p>
<ul>
    <li><strong>Transparent flat-rate pricing</strong>: $349–$499 depending on size and duration — no hidden fees</li>
    <li><strong>Same-day delivery</strong> available 7 days a week</li>
    <li><strong>Online booking</strong> available 24/7</li>
    <li><strong>All-inclusive pricing</strong>: Every quote includes delivery, pickup, and disposal</li>
    <li><strong>No surprise fees</strong>: Weight overages are clearly disclosed upfront</li>
    <li><strong>7AM–7PM hours, 7 days a week</strong></li>
</ul>
<p>Our 10-yard dumpster starts at $349 (1 day) and our 20-yard dumpster is $499 for a full 7-day rental including 3 tons.</p>`
    },
]

export default function FAQPage() {
    // FAQ schema — server-rendered so it's visible to all AI and search crawlers
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer.replace(/<[^>]*>?/gm, '')
            }
        }))
    }

    return (
        <div className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className={styles.header}>
                <h1 className={styles.title}>Frequently Asked Questions</h1>
                <p className={styles.subtitle}>
                    Everything you need to know about renting a dumpster in Jackson, MS.
                    Still have questions? Call us at (601) 316-7891.
                </p>
            </div>

            <FaqAccordion faqs={faqs} />

            <div className={styles.cta}>
                <h2 className={styles.ctaTitle}>Ready to Book Your Dumpster?</h2>
                <p className={styles.ctaText}>
                    Same-day delivery available. Flat-rate pricing from $349. No hidden fees.
                </p>
                <Link href="/#booking" className={styles.ctaButton}>
                    Book Now
                </Link>
            </div>
        </div>
    )
}
