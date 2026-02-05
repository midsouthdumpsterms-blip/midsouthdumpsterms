'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './faq.module.css'


const faqs = [
    {
        question: "How much does it cost to rent a dumpster?",
        answer: `Our pricing is simple and transparent:
        
• **10 Yard Dumpster**: Starting at $349 (includes 1 ton / 2,000 lbs)
• **15 Yard Dumpster**: Starting at $399 (includes 2 tons / 4,000 lbs)  
• **20 Yard Dumpster**: Starting at $449 (includes 3 tons / 6,000 lbs)

**Overage fees**: $55 per additional ton (prorated) for 10 and 15 yard containers. 20 yard containers cannot exceed 6,000 lbs total.

All prices include delivery, pickup, and disposal. No hidden fees.`
    },
    {
        question: "How long can I keep the dumpster?",
        answer: `The base rental period is **7 days**. Need more time? Extensions are available for **$50 per additional day**, subject to availability. Just give us a call before your pickup date to extend your rental.`
    },
    {
        question: "What can I throw in the dumpster?",
        answer: `**Permitted items include:**

• Household trash and furniture
• Lumber, drywall, PVC, roofing shingles
• Carpet, insulation, construction debris
• Porcelain, tile, drop ceilings
• Yard clippings and natural vegetation
• Plastics, paper, Styrofoam

**Heavy materials** (concrete, brick, stone, asphalt) are allowed **only** in 10-yard containers, up to ¼ full, and must be separated from other debris unless pre-approved.`
    },
    {
        question: "What is NOT allowed in the dumpster?",
        answer: `**Prohibited materials include:**

• Hazardous waste (paints, solvents, chemicals, oil, fuels, asbestos, batteries, pesticides)
• Appliances with refrigerant (fridges, freezers, HVAC units)
• Tires, electronics, TVs, computers
• Liquids of any kind
• Medical waste, fluorescent bulbs, railroad ties
• Food waste

Violating these rules may result in additional fees, fines, or cleanup charges passed to you.`
    },
    {
        question: "What are the weight limits?",
        answer: `**Maximum weight per container: 6,000 lbs (no exceptions)**

• **10 Yard**: Includes 1 ton (2,000 lbs). Overage: $55/ton
• **15 Yard**: Includes 2 tons (4,000 lbs). Overage: $55/ton  
• **20 Yard**: Includes 3 tons (6,000 lbs). **No overage allowed**

Containers are weighed at the disposal facility. Overweight charges will be invoiced to you. Heavy materials like concrete or brick may be refused unless pre-approved.`
    },
    {
        question: "Do I need a permit?",
        answer: `If you are placing the dumpster on **private property** (your driveway, yard, etc.), you typically do **not** need a permit.

If you need to place it on a **public street or right-of-way**, you are responsible for obtaining any required municipal permits and paying associated fees. Contact your local city office for permit requirements.`
    },
    {
        question: "Can I overfill the dumpster?",
        answer: `**No.** Debris must not exceed the rim of the container. The dumpster must be tarp-ready with end doors closed and secured for safe transport. Overfilled containers may be refused, and you may be charged a **$500 refusal fee** plus any additional handling costs.`
    },
    {
        question: "What if I need to cancel or get a refund?",
        answer: `**Refunds are only available if requested BEFORE delivery.** Once the dumpster is dropped off, no refunds will be issued.

If you paid by credit/debit card, refunds are processed minus a **$40 processing fee** to cover merchant charges. Refunds typically take 3-10 business days.

Cancellations within 24 hours of scheduled delivery may incur dispatch or scheduling fees.`
    },
    {
        question: "What happens if the dumpster is blocked on pickup day?",
        answer: `If our driver cannot access the dumpster on the scheduled pickup day due to blocked access (cars, gates, etc.), you will be charged a **$150 Missed Pickup Fee** plus additional rental day charges until we can retrieve it.

Please ensure clear access on your scheduled pickup date.`
    },
    {
        question: "Will the dumpster damage my driveway?",
        answer: `We take precautions to protect your property, including placing boards under the wheels when needed. However, **you are responsible for any damage to surfaces, lawns, utilities, or structures** unless caused by our negligence.

For the best protection, place the dumpster on a flat, stable surface like concrete or asphalt.`
    },
    {
        question: "Do you offer same-day delivery?",
        answer: `Yes! We often accommodate same-day delivery requests depending on availability and your location in the Jackson metro area. Call us at **(601) 316-7891** to check availability.`
    },
    {
        question: "What areas do you serve?",
        answer: `We serve Jackson, MS and surrounding areas including:

• Madison, Brandon, Pearl, Flowood
• Ridgeland, Clinton, Byram, Terry
• Canton, Gluckstadt, and more

Not sure if we serve your area? Give us a call at **(601) 316-7891**.`
    }
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    // Generate FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer.replace(/\*\*/g, '').replace(/•/g, '-')
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

            <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <button
                            className={styles.question}
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                        >
                            <span>{faq.question}</span>
                            <span className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}>
                                +
                            </span>
                        </button>
                        {openIndex === index && (
                            <div
                                className={styles.answer}
                                dangerouslySetInnerHTML={{
                                    __html: faq.answer
                                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                        .replace(/•/g, '•')
                                        .replace(/\n/g, '<br />')
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className={styles.cta}>
                <h2 className={styles.ctaTitle}>Ready to Book Your Dumpster?</h2>
                <p className={styles.ctaText}>
                    Same-day delivery available. Flat-rate pricing. No hidden fees.
                </p>
                <Link href="/#booking" className={styles.ctaButton}>
                    Book Now
                </Link>
            </div>
        </div>
    )
}
