import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Roofing Dumpster Rental Jackson MS | Same-Day Roll Off | Mid South',
    description:
        'Getting a new roof in Jackson, MS? Rent a roll off dumpster for roofing debris — shingles, decking, felt & more. Same-day delivery, flat-rate pricing from $399. Locally owned. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Roofing Dumpster Rental in Jackson, MS: What You Need to Know',
        'Getting a new roof in Jackson, MS? Learn how to rent the right roll off dumpster for roofing debris, what sizes you need, and how to save money on shingle disposal in Central Mississippi.',
        '2026-03-21',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Roofing Dumpster Rental Jackson MS', url: 'https://midsouthdumpsterms.com/blog/roofing-dumpster-rental-jackson-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container container-narrow">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Roofing</span>
                        <h1>Roofing Dumpster Rental in Jackson, MS: What You Need to Know</h1>
                        <p className={styles.meta}>Published March 21, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Whether you&apos;re having your roof replaced or doing the tear-off yourself, you&apos;re going to need somewhere to put the debris. Old shingles, roofing felt, plywood decking, and gutters add up fast. A roll off dumpster rental in Jackson, MS is the fastest, most affordable way to handle roofing debris — and Mid South Dumpster Rentals delivers same-day throughout Jackson and all of Central Mississippi.
                        </p>

                        <h2>Do I Need a Dumpster for a Roofing Job?</h2>
                        <p>
                            If your roofing contractor isn&apos;t hauling away the debris themselves, yes — you need a plan for disposal. Most roofers either include a dumpster in their quote or expect you to rent one separately. Here&apos;s why a roll off dumpster is the best option:
                        </p>
                        <ul>
                            <li><strong>It&apos;s cheaper than hauling.</strong> Multiple dump runs in a pickup truck cost more in time and landfill fees than renting a dumpster.</li>
                            <li><strong>Roofers can load directly.</strong> Position the dumpster close to the house and shingles slide right off the roof into the container.</li>
                            <li><strong>Keeps your lawn clean.</strong> No piles of debris sitting on your grass or driveway for days.</li>
                            <li><strong>One call for pickup.</strong> When the job&apos;s done, we come get it. No second trips to the landfill.</li>
                        </ul>

                        <h2>What Size Dumpster Do You Need for a Roof in Jackson, MS?</h2>
                        <p>
                            Shingles are one of the heaviest roofing materials — a square (100 sq ft) of 3-tab asphalt shingles weighs about 230–350 lbs. That adds up quickly. Here&apos;s how to pick the right size:
                        </p>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Roof Size / Situation</th>
                                    <th>Recommended Size</th>
                                    <th>Starting Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Small home, up to 1,500 sq ft (single shingle layer)</td>
                                    <td>15 Yard (2 tons included)</td>
                                    <td>$399</td>
                                </tr>
                                <tr>
                                    <td>Average home, 1,500–2,500 sq ft or double-layer shingles</td>
                                    <td>20 Yard (3 tons included)</td>
                                    <td>$449</td>
                                </tr>
                                <tr>
                                    <td>Large home or mixed roofing + decking replacement</td>
                                    <td>20 Yard (call to discuss)</td>
                                    <td>$449+</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            <strong>Pro tip:</strong> If your home has two or more layers of shingles (common in older Jackson-area homes), go with the 20-yard. Double-layered roofs generate nearly twice the debris weight. Call us at <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> if you&apos;re unsure — we&apos;ll help you size it right.
                        </p>

                        <h2>What Roofing Debris Goes in the Dumpster?</h2>
                        <p>Our roll off dumpsters accept all standard roofing materials:</p>
                        <ul>
                            <li>Asphalt shingles (3-tab and architectural)</li>
                            <li>Wood shake and cedar shingles</li>
                            <li>Roofing felt and underlayment</li>
                            <li>Plywood decking and OSB sheathing</li>
                            <li>Metal flashing and drip edge</li>
                            <li>Gutters and downspouts</li>
                            <li>Fascia and soffit boards</li>
                            <li>Ridge cap and hip shingles</li>
                        </ul>
                        <p>
                            <strong>Cannot accept:</strong> Asbestos-containing shingles (found in some Jackson homes built before 1980). If your home is pre-1980, have the shingles tested before disposal. We&apos;re happy to advise — just call us first.
                        </p>

                        <h2>How to Get the Most Out of Your Roofing Dumpster</h2>
                        <ul>
                            <li><strong>Place it close to the roofline.</strong> The closer the dumpster is to where shingles are coming off, the faster and cheaper the cleanup.</li>
                            <li><strong>Load shingles first.</strong> Heavy materials on the bottom keeps the center of gravity low and prevents tipping.</li>
                            <li><strong>Don&apos;t mix in wet materials.</strong> Wet debris adds significant weight. Keep roofing debris separate from other job site waste.</li>
                            <li><strong>Watch the weight.</strong> Shingles are deceptively heavy. A 15-yard container can hit its weight limit before it looks even half full with shingles. When in doubt, go 20-yard.</li>
                            <li><strong>Book for 3–7 days.</strong> Most residential roof replacements in Jackson take 1–3 days. A 3 or 7-day rental gives your crew flexibility without the pressure.</li>
                        </ul>

                        <h2>Same-Day Roofing Dumpster Delivery in Jackson, MS</h2>
                        <p>
                            We know roofing crews don&apos;t always give you weeks of notice. That&apos;s why we offer same-day roll off dumpster delivery throughout Jackson and Central Mississippi — call before noon and we can typically have a container at your home or job site the same day.
                        </p>
                        <p>
                            We serve Jackson and all surrounding areas including Brandon, Madison, Ridgeland, Clinton, Flowood, Pearl, Byram, Richland, Terry, Florence, Gluckstadt, and Flora. If your address is in the metro area, we can get there.
                        </p>

                        <h2>Roofing Dumpster Rental Pricing in Jackson, MS</h2>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Container</th>
                                    <th>1 Day</th>
                                    <th>3 Day</th>
                                    <th>7 Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>15 Yard (2 tons included)</td>
                                    <td>$399</td>
                                    <td>$429</td>
                                    <td>$449</td>
                                </tr>
                                <tr>
                                    <td>20 Yard (3 tons included)</td>
                                    <td>$449</td>
                                    <td>$479</td>
                                    <td>$499</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>All prices are flat-rate and include delivery, pickup, and disposal — no hidden fuel surcharges or environmental fees. Extended rentals are $50/day after your initial period.</p>

                        <p>
                            Looking for more guidance? Check out our <Link href="/blog/roofing-contractor-dumpster-rental-jackson-ms">guide for roofing contractors</Link> or our <Link href="/blog/how-to-choose-dumpster-size">dumpster size guide</Link>.
                        </p>

                        <div className={styles.cta}>
                            <h3>Ready to Order Your Roofing Dumpster?</h3>
                            <p>Book online or call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> — same-day delivery available throughout Jackson, MS and Central Mississippi.</p>
                            <button type="button" className="btn btn-primary survcart-embed-presenter">Book Now</button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
