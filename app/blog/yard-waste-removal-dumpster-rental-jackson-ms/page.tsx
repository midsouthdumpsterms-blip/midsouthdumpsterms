import { Metadata } from 'next'
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/blog/yard-waste-removal-dumpster-rental-jackson-ms' },
    title: 'Yard Waste Removal Dumpsters Jackson MS',
    description:
        'Brush, limbs, sod and landscaping debris in Jackson MS. What a yard-waste load weighs and which container size handles it.',
    openGraph: {
        title: 'Yard Waste Removal & Dumpster Rental Jackson MS',
        description: 'Roll-off dumpsters for yard waste, brush piles, tree debris, and landscaping projects across Central Mississippi. Same-day delivery available.',
        url: 'https://midsouthdumpsterms.com/blog/yard-waste-removal-dumpster-rental-jackson-ms',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

const faqs = [
    {
        question: 'Can I put yard waste in a roll-off dumpster?',
        answer: 'Yes. Mid South Dumpster Rentals accepts yard waste including tree limbs, branches, brush, leaves, grass clippings, shrubs, soil, sod, mulch, and landscaping debris. We cannot accept stumps over 12 inches in diameter or large boulders.',
    },
    {
        question: 'What size dumpster do I need for yard waste?',
        answer: 'For typical yard cleanups and brush removal, a 10-yard dumpster is usually sufficient. For larger projects like tree removal, full-yard overhauls, or clearing overgrown lots, a 15-yard is the better choice. Call 601-316-7891 and describe your project — we will help you pick the right size.',
    },
    {
        question: 'Is a dumpster cheaper than hiring a yard waste removal service?',
        answer: 'In most cases, yes. A 10-yard dumpster from Mid South starts at $349 and holds about 4 pickup truck loads — far more than you could haul yourself in a day. Junk removal services typically charge $300–$600 for a similar volume and you have to work on their timeline, not yours.',
    },
    {
        question: 'Can I mix yard waste with other debris?',
        answer: 'Yes. You can mix yard waste with household junk, furniture, construction debris, and other accepted materials in the same dumpster. There is no requirement to separate yard waste from other items.',
    },
    {
        question: 'How long can I keep the dumpster for a yard project?',
        answer: 'We offer 1-day, 3-day, and 7-day rental periods. Most yard cleanup projects finish within 1–3 days. If you need more time, we offer extensions at $50/day. See our full guide on rental periods.',
    },
]

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Yard Waste Removal & Dumpster Rental Jackson MS | Brush, Limbs, Debris',
        'Need yard waste removal in Jackson, MS? Mid South Dumpster Rentals offers affordable roll-off dumpsters for brush, tree limbs, landscaping debris, and large yard cleanups.',
        '2026-03-28',
        'https://midsouthdumpsterms.com/images/og-image.jpg',
        '2026-03-28'
    )
    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Yard Waste Removal Dumpster Rental Jackson MS', url: 'https://midsouthdumpsterms.com/blog/yard-waste-removal-dumpster-rental-jackson-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container container-narrow">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Yard & Landscaping</span>
                        <h1>Yard Waste Removal in Jackson, MS — When Your Cleanup Is Too Big for the Curb</h1>
                        <p className={styles.meta}>Published March 28, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            If you&apos;ve ever tried to pile tree limbs, brush, and landscaping debris at the curb and hoped the city would pick it up &ldquo;eventually,&rdquo; you know the frustration. Jackson&apos;s bulk pickup schedule is inconsistent at best, and large yard cleanups can leave you with piles sitting for weeks. A roll-off dumpster from Mid South Dumpster Rentals solves the problem in one shot — load it up, call us, and it&apos;s gone.
                        </p>

                        <h2>When You Need More Than a Trash Bag and a Pickup Truck</h2>
                        <p>
                            Small yard maintenance — mowing, edging, bagging leaves — is routine. But certain projects produce far more debris than your weekly trash service or personal vehicle can handle:
                        </p>
                        <ul>
                            <li><strong>Tree removal or heavy pruning</strong> — a single mature oak in Jackson can produce a full pickup truck load of limbs from just a trimming</li>
                            <li><strong>Storm aftermath</strong> — Mississippi storms leave behind downed limbs, scattered branches, and fallen trees that need fast removal</li>
                            <li><strong>Full yard overhauls</strong> — ripping out old landscaping, removing dead shrubs, clearing overgrown beds, replacing sod</li>
                            <li><strong>Lot clearing</strong> — preparing vacant or overgrown lots for construction, sale, or maintenance compliance</li>
                            <li><strong>Fence line clearing</strong> — removing vines, brush, and debris that have accumulated along property lines over years</li>
                            <li><strong>Seasonal deep cleaning</strong> — the annual spring or fall cleanup that goes beyond normal maintenance</li>
                        </ul>
                        <p>
                            For any of these, a dumpster is the most efficient solution. You work at your own pace, load everything in one container, and we haul it away when you&apos;re done.
                        </p>

                        <h2>What Yard Waste Can Go in a Dumpster?</h2>
                        <p>Mid South accepts a wide range of yard and landscaping materials:</p>
                        <ul>
                            <li>Tree limbs, branches, and brush</li>
                            <li>Leaves, grass clippings, and pine straw</li>
                            <li>Shrubs, hedges, and small bushes (root balls included)</li>
                            <li>Sod, soil, and dirt (note: soil is heavy — factor this into your weight allowance)</li>
                            <li>Mulch, bark, and wood chips</li>
                            <li>Old fencing — wood, vinyl, and chain-link</li>
                            <li>Landscape timbers, pavers, and edging</li>
                            <li>Dead plants, flowers, and garden debris</li>
                        </ul>
                        <p>
                            <strong>Important weight note:</strong> Soil, sod, and dirt are significantly heavier than wood debris. A 10-yard container packed with soil can hit the 1-ton weight limit quickly. If your project involves a lot of earth-moving, call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> first so we can recommend the right size and set weight expectations.
                        </p>

                        <h2>Which Dumpster Size for Yard Waste?</h2>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Recommended Size</th>
                                    <th>Price From</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Seasonal cleanup, brush pile, trimming debris</td>
                                    <td><Link href="/sizes/10-yard-dumpster-rental">10 Yard</Link></td>
                                    <td>$349</td>
                                </tr>
                                <tr>
                                    <td>Tree removal, full-yard overhaul, storm debris</td>
                                    <td><Link href="/sizes/15-yard-dumpster-rental">15 Yard</Link></td>
                                    <td>$399</td>
                                </tr>
                                <tr>
                                    <td>Lot clearing, major landscaping demo, multiple trees</td>
                                    <td><Link href="/sizes/20-yard-dumpster-rental">20 Yard</Link></td>
                                    <td>$449</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>Dumpster vs. Jackson Bulk Pickup: Which Is Better?</h2>
                        <p>
                            Jackson, MS offers periodic bulk/brush pickup through the city, but there are significant limitations:
                        </p>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Factor</th>
                                    <th>City Bulk Pickup</th>
                                    <th>Mid South Dumpster</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Timing</td>
                                    <td>You wait for their schedule (days to weeks)</td>
                                    <td>Same-day delivery, pickup when you&apos;re ready</td>
                                </tr>
                                <tr>
                                    <td>Volume limits</td>
                                    <td>Limited pile size, must be at curb</td>
                                    <td>10, 15, or 20 cubic yards — your choice</td>
                                </tr>
                                <tr>
                                    <td>What&apos;s accepted</td>
                                    <td>Brush and limbs only (typically)</td>
                                    <td>Yard waste, furniture, junk, construction debris — all in one</td>
                                </tr>
                                <tr>
                                    <td>Convenience</td>
                                    <td>Must cut and stack at curb per guidelines</td>
                                    <td>Walk-in door, load at your pace from anywhere on your property</td>
                                </tr>
                                <tr>
                                    <td>Reliability</td>
                                    <td>Pickup date often delayed or missed</td>
                                    <td>We show up when we say we will</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            For a small pile of limbs, the city service might work. For anything substantial — especially if you want it gone this week, not next month — a dumpster is the clear winner.
                        </p>

                        <h2>Tips for Loading Yard Waste Efficiently</h2>
                        <ul>
                            <li><strong>Break down large limbs.</strong> Cut branches to 4–6 foot lengths so they lay flat and don&apos;t create air gaps in the container.</li>
                            <li><strong>Load heavy items first.</strong> Put soil, sod, and root balls on the bottom. Stack lighter brush and leaves on top.</li>
                            <li><strong>Use the walk-in door.</strong> Our roll-off dumpsters have a rear door that swings open — use it to wheel in wheelbarrow loads instead of lifting everything over the side.</li>
                            <li><strong>Don&apos;t pile above the fill line.</strong> All debris must stay below the top edge of the container for safe hauling. Flatten out brush piles as you go.</li>
                            <li><strong>Watch your weight.</strong> Wood and brush are light. Dirt, rocks, and wet materials are heavy. If you&apos;re mixing both, leave room in your weight allowance.</li>
                        </ul>

                        <h2>Service Areas for Yard Waste Dumpster Delivery</h2>
                        <p>We deliver yard waste dumpsters across the full Central Mississippi metro:</p>
                        <ul>
                            <li><strong>Hinds County:</strong> <Link href="/service-areas/jackson">Jackson</Link>, <Link href="/service-areas/clinton">Clinton</Link>, <Link href="/service-areas/byram">Byram</Link>, <Link href="/service-areas/terry">Terry</Link></li>
                            <li><strong>Rankin County:</strong> <Link href="/service-areas/brandon">Brandon</Link>, <Link href="/service-areas/pearl">Pearl</Link>, <Link href="/service-areas/flowood">Flowood</Link>, <Link href="/service-areas/florence">Florence</Link>, <Link href="/service-areas/richland">Richland</Link></li>
                            <li><strong>Madison County:</strong> <Link href="/service-areas/madison">Madison</Link>, <Link href="/service-areas/ridgeland">Ridgeland</Link>, <Link href="/service-areas/canton">Canton</Link>, <Link href="/service-areas/flora">Flora</Link>, <Link href="/service-areas/gluckstadt">Gluckstadt</Link></li>
                        </ul>

                        <h2>Frequently Asked Questions</h2>
                        <div>
                            {faqs.map((faq, i) => (
                                <div key={i} style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{faq.question}</h3>
                                    <p>{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.cta}>
                            <h3>Ready to Clear Your Yard?</h3>
                            <p>Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> or book online — same-day delivery available 7 days a week.</p>
                            <button type="button" className="btn btn-primary survcart-embed-presenter">Book Now</button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
