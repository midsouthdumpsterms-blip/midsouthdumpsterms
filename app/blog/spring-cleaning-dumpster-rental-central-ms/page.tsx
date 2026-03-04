import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'

export const metadata: Metadata = {
    title: 'Spring Cleaning Dumpster Rental in Central Mississippi | Mid South',
    description:
        'Spring cleaning in Jackson, Brandon, or Central MS? Rent a roll-off dumpster and get it all done in one weekend. Same-day delivery available. Call Mid South Dumpster Rentals at 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Spring Cleaning Dumpster Rental in Central Mississippi',
        'Spring cleaning in Jackson, Brandon, or Central MS? Rent a roll-off dumpster and get it all done in one weekend. Same-day delivery available.',
        '2026-03-03',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Spring Cleaning Dumpster Rental', url: 'https://midsouthdumpsterms.com/blog/spring-cleaning-dumpster-rental-central-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container container-narrow">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Seasonal</span>
                        <h1>Spring Cleaning Dumpster Rental in Central Mississippi</h1>
                        <p className={styles.meta}>Published March 3, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Spring is the best time to tackle those big cleanout projects you&apos;ve been putting off — and in Central Mississippi, March through May brings the perfect weather to get outside and get it done. Whether you&apos;re clearing out the garage, hauling off old furniture, or cleaning up the yard after winter, a roll-off dumpster on your driveway makes the whole process faster and easier.
                        </p>

                        <h2>Why Spring Is the Best Time to Rent a Dumpster</h2>
                        <p>
                            Mississippi summers arrive fast and stay hot. If you&apos;re planning a cleanout, renovation, or major declutter, March–May is your window. The temps are comfortable, the days are longer, and you can actually enjoy getting the work done. Waiting until summer means working in 95-degree heat — if you get to it at all.
                        </p>
                        <p>Spring is also the season when people tend to finally pull the trigger on projects they&apos;ve been delaying:</p>
                        <ul>
                            <li>Clearing out a garage or storage shed that&apos;s been packed for years</li>
                            <li>Hauling off old yard equipment, furniture, and accumulated junk</li>
                            <li>Cleaning up after winter storms and yard debris buildup</li>
                            <li>Starting a home renovation or kitchen/bathroom update</li>
                            <li>Landscaping projects — removing old mulch, overgrown shrubs, and dead limbs</li>
                        </ul>

                        <h2>What Size Dumpster for Spring Cleaning?</h2>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Project</th>
                                    <th>Recommended Size</th>
                                    <th>Starting Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>One room cleanout or small declutter</td>
                                    <td>10 Yard</td>
                                    <td>$349</td>
                                </tr>
                                <tr>
                                    <td>Garage or multiple rooms</td>
                                    <td>15 Yard</td>
                                    <td>$399</td>
                                </tr>
                                <tr>
                                    <td>Whole house purge or major renovation</td>
                                    <td>20 Yard</td>
                                    <td>$449</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>The Spring Cleaning Dumpster Strategy That Actually Works</h2>
                        <p>Most people make spring cleaning harder than it needs to be. Here&apos;s how to knock it out efficiently with a dumpster:</p>
                        <ol>
                            <li><strong>Book the dumpster first.</strong> Having the container on your driveway creates accountability. When the dumpster is sitting there, you&apos;re motivated to fill it.</li>
                            <li><strong>Set aside one full weekend.</strong> Most spring cleaning projects that have been delayed can be finished in a focused 2-day sprint with a dumpster on-site.</li>
                            <li><strong>Do a quick sort before you start.</strong> Walk through each space and put sticky notes on things — keep, donate, or toss. This takes 20 minutes and saves hours of second-guessing while you&apos;re loading.</li>
                            <li><strong>Go room by room.</strong> Don&apos;t bounce around. Finish one space completely before moving to the next.</li>
                            <li><strong>Don&apos;t overthink it.</strong> If you haven&apos;t touched it in two years and it has no sentimental value, it goes in the dumpster.</li>
                        </ol>

                        <h2>What to Toss This Spring</h2>
                        <p>Here&apos;s a quick list of common spring cleaning items that are perfectly fine for a dumpster rental:</p>
                        <ul>
                            <li>Old furniture, mattresses, and box springs</li>
                            <li>Clothes, shoes, and household textiles</li>
                            <li>Broken yard equipment and tools</li>
                            <li>Carpet remnants, old flooring, and tile</li>
                            <li>Kitchen appliances (not refrigerators)</li>
                            <li>Toys, sporting goods, and hobby equipment</li>
                            <li>Yard debris — branches, leaves, mulch, sod</li>
                            <li>Moving boxes and packing materials</li>
                        </ul>

                        <h2>Serving All of Central Mississippi This Spring</h2>
                        <p>
                            We deliver to Jackson, Brandon, Madison, Ridgeland, Clinton, Flowood, Pearl, Byram, Richland, Gluckstadt, Flora, Florence, Canton, Terry, and surrounding communities. Book now — spring is our busiest season and same-day availability fills up fast.
                        </p>

                        <div className={styles.cta}>
                            <h3>Book Your Spring Cleaning Dumpster Today</h3>
                            <p>Same-day and next-day delivery available. Call <a href="tel:6013167891">601-316-7891</a> or book online now.</p>
                            <a
                                href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Book Spring Cleaning Dumpster
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
