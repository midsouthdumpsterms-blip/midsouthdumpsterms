import { Metadata } from 'next'
import Link from 'next/link'
import styles from '../blog-post.module.css'

export const metadata: Metadata = {
    title: 'What Can I Put in a Dumpster? | Mid South Dumpster Rentals',
    description: 'Confused about what you can and cannot throw in a roll-off dumpster? Check out our complete guide to permitted and prohibited items in Mississippi.',
    openGraph: {
        title: 'What Can I Put in a Dumpster? | Mid South Dumpster Rentals',
        description: 'Complete guide to what you can throw in a roll-off dumpster in Mississippi.',
        type: 'article',
    },
}

export default function WhatCanIPutInADumpster() {
    return (
        <article className={styles.article}>
            <div className="container">
                <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>
                <header className={styles.header}>
                    <h1>What Can I Put in a Dumpster? A Complete Guide</h1>
                    <p className={styles.date}>Published on February 3, 2026</p>
                </header>

                <img
                    src="/images/blog/what-can-i-put-in-dumpster.jpg"
                    alt="Dumpster filled with household debris"
                    className={styles.heroImage}
                />

                <div className={styles.content}>
                    <p>
                        Renting a dumpster allows you to get rid of a lot of waste at once, but it's not a free-for-all.
                        There are environmental regulations and safety rules that dictate what can and cannot go into a landfill.
                        Knowing these rules before you load your dumpster can save you from extra fees or having your load rejected.
                    </p>

                    <h2>✅ Accepted Items</h2>
                    <p>
                        For the most part, non-hazardous household and construction debris is perfectly fine. Here is a list of common items you CAN put in our dumpsters:
                    </p>

                    <ul>
                        <li><strong>Household Junk:</strong> Furniture (tables, chairs, sofas), clothing, toys, general trash.</li>
                        <li><strong>Construction Debris:</strong> Drywall, lumber, flooring, cabinetry, siding, windows.</li>
                        <li><strong>Roofing Materials:</strong> Shingles and underlayment (heavy loads may require a specific dumpster size).</li>
                        <li><strong>Yard Waste:</strong> Leaves, branches, sticks, and brush.</li>
                        <li><strong>Appliances:</strong> Washers, dryers, ovens (must be drained of hazardous fluids).</li>
                        <li><strong>Electronics:</strong> Most non-battery electronics like printers and computers (check local e-waste rules).</li>
                    </ul>

                    <h2>🚫 Prohibited Items</h2>
                    <p>
                        For safety and environmental reasons, the following items are STRICTLY PROHIBITED in our dumpsters.
                        If these are found, you may be charged a contamination fee.
                    </p>

                    <div className={styles.prohibitedSection}>
                        <h3>❌ Hazardous Materials</h3>
                        <p>Paint, oil, gasoline, propane tanks, asbestos, pesticides, and chemicals.</p>

                        <h3>❌ Batteries & Tires</h3>
                        <p>Car batteries, lithium-ion batteries, and vehicle tires are not allowed.</p>

                        <h3>❌ Biohazard/Medical Waste</h3>
                        <p>Needles, bandages, or any other medical waste.</p>

                        <h3>❌ Heavy Materials (Unless Specified)</h3>
                        <p>Concrete, dirt, and brick can make a dumpster too heavy to lift. Please call us if you are disposing of these items so we can recommend the right container.</p>
                    </div>

                    <h2>Common Questions</h2>

                    <h3>Can I put a mattress in the dumpster?</h3>
                    <p>Yes, mattresses are generally allowed, though some areas may charge a small extra fee per mattress due to disposal difficulty.</p>

                    <h3>Can I throw away old paint?</h3>
                    <p>Only if it is completely dried out. Wet paint is considered hazardous. You can dry it out by mixing it with kitty litter or sand.</p>

                    <div className={styles.cta}>
                        <h3>Ready to rent your dumpster?</h3>
                        <p>Now that you know what goes in, get your project started today!</p>
                        <a href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF" className="btn btn-secondary">Book a Dumpster Now</a>
                    </div>
                </div>
            </div>
        </article>
    )
}
