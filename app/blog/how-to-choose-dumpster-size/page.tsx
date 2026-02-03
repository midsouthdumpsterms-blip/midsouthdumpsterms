import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'

export const metadata: Metadata = {
    title: 'How to Choose the Right Dumpster Size for Your Project',
    description:
        'Comprehensive guide to selecting the perfect dumpster size for your home renovation, construction, or cleanout project. Learn about 10, 15, and 20-yard dumpster options.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'How to Choose the Right Dumpster Size for Your Project',
        'Comprehensive guide to selecting the perfect dumpster size for your project.',
        '2024-01-15'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'How to Choose the Right Dumpster Size', url: 'https://midsouthdumpsterms.com/blog/how-to-choose-dumpster-size' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container container-narrow">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Guides</span>
                        <h1>How to Choose the Right Dumpster Size for Your Project</h1>
                        <p className={styles.meta}>Published January 15, 2024</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Choosing the right dumpster size can save you time and money. Too small and you'll need multiple trips; too large and you're wasting money. Here's how to pick the perfect size for your project.
                        </p>

                        <h2>Understanding Dumpster Sizes</h2>
                        <p>
                            Dumpster sizes are measured in cubic yards. At Mid South Dumpster Rentals, we offer three standard sizes:
                        </p>

                        <h3>10-Yard Dumpsters</h3>
                        <p>
                            Our 10-yard dumpsters hold about <strong>4 pickup truck loads</strong> of debris and include a 1-ton weight allowance.
                        </p>
                        <p><strong>Perfect for:</strong></p>
                        <ul>
                            <li>Small bathroom or kitchen renovations</li>
                            <li>Garage cleanouts</li>
                            <li>Minor landscaping projects</li>
                            <li>Deck removal (small)</li>
                            <li>Carpet removal from a few rooms</li>
                        </ul>

                        <h3>15-Yard Dumpsters (Most Popular!)</h3>
                        <p>
                            Our 15-yard dumpsters hold about <strong>6 pickup truck loads</strong> with a 2-ton weight allowance. This is our most popular size!
                        </p>
                        <p><strong>Perfect for:</strong></p>
                        <ul>
                            <li>Medium home renovations</li>
                            <li>Roofing projects (1,500-2,000 sq ft)</li>
                            <li>Large estate cleanouts</li>
                            <li>Deck removal (medium-large)</li>
                            <li>Flooring removal from entire home</li>
                        </ul>

                        <h3>20-Yard Dumpsters</h3>
                        <p>
                            Our 20-yard dumpsters hold about <strong>8 pickup truck loads</strong> with a 3-ton weight allowance.
                        </p>
                        <p><strong>Perfect for:</strong></p>
                        <ul>
                            <li>Large renovation projects</li>
                            <li>New construction</li>
                            <li>Major demolition work</li>
                            <li>Commercial cleanouts</li>
                            <li>Complete home cleanouts</li>
                        </ul>

                        <h2>Quick Project-to-Size Guide</h2>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Recommended Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bathroom Remodel</td>
                                    <td>10 Yard</td>
                                </tr>
                                <tr>
                                    <td>Kitchen Remodel</td>
                                    <td>15 Yard</td>
                                </tr>
                                <tr>
                                    <td>Roofing Project</td>
                                    <td>15 or 20 Yard</td>
                                </tr>
                                <tr>
                                    <td>Whole House Cleanout</td>
                                    <td>20 Yard</td>
                                </tr>
                                <tr>
                                    <td>Garage Cleanout</td>
                                    <td>10 Yard</td>
                                </tr>
                                <tr>
                                    <td>New Construction</td>
                                    <td>20 Yard</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>Still Not Sure?</h2>
                        <p>
                            If you're uncertain about which size to choose, we're here to help! Call us at <a href="tel:6013167891">601-316-7891</a> and describe your project. We'll recommend the perfect dumpster size based on our years of experience.
                        </p>

                        <div className={styles.cta}>
                            <h3>Ready to Book?</h3>
                            <p>Choose your dumpster size and book online today!</p>
                            <a
                                href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Book Dumpster Rental
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
