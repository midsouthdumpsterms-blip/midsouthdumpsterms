import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'

export const metadata: Metadata = {
    title: 'Estate Cleanout Dumpster Rental in Central Mississippi | Mid South',
    description:
        'Handling an estate cleanout in Jackson, Brandon, or Central MS? Mid South Dumpster Rentals makes the process easier with flexible roll-off dumpster rentals. Locally owned, fast delivery. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Estate Cleanout Dumpster Rental in Central Mississippi',
        'Handling an estate cleanout in Jackson, Brandon, or Central MS? Mid South Dumpster Rentals makes the process easier with flexible roll-off dumpster rentals.',
        '2026-02-10',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Estate Cleanout Dumpster Rental', url: 'https://midsouthdumpsterms.com/blog/estate-cleanout-dumpster-rental-central-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container container-narrow">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Cleanouts</span>
                        <h1>Estate Cleanout Dumpster Rental in Central Mississippi</h1>
                        <p className={styles.meta}>Published February 10, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Clearing out a loved one&apos;s home is one of the most emotionally and physically demanding tasks a family can face. Whether you&apos;re managing an estate in Jackson, Brandon, Madison, or anywhere across Central Mississippi, Mid South Dumpster Rentals is here to make the cleanup side of things as simple as possible — so you can focus on what matters.
                        </p>

                        <h2>What Is an Estate Cleanout?</h2>
                        <p>
                            An estate cleanout typically involves clearing out the entire contents of a home after the passing of a loved one, or in preparation for selling or transferring a property. Unlike a regular cleanout, estate cleanouts often involve years' worth of accumulated belongings — furniture, clothing, household goods, garage contents, and more. They can take days and generate far more debris than most people expect. If you're a landlord, check out our guide to <Link href="/blog/rental-property-cleanout-dumpster-rental-ms">rental property cleanouts</Link>.
                        </p>

                        <h2>Why a Dumpster Makes Estate Cleanouts Easier</h2>
                        <p>
                            When you&apos;re going room by room through decades of belongings, having a large roll-off dumpster on-site changes everything. Instead of loading a truck, driving to the dump, unloading, and driving back — over and over — you simply walk items out the door and drop them in. One container. One pickup call when you&apos;re done.
                        </p>
                        <ul>
                            <li>Keeps the process moving — no dump runs interrupting your work</li>
                            <li>Saves money vs multiple trips to the landfill or hiring a junk removal crew</li>
                            <li>Perfect for families working over several days or a weekend</li>
                            <li>Large enough to handle furniture, mattresses, boxes, and mixed household items</li>
                        </ul>

                        <h2>What Size Dumpster for an Estate Cleanout?</h2>
                        <p>This depends on the size of the home and how full it is:</p>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Home / Situation</th>
                                    <th>Recommended Size</th>
                                    <th>Price Starting At</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Small home or partial cleanout (1–2 rooms)</td>
                                    <td>10 Yard</td>
                                    <td>$349</td>
                                </tr>
                                <tr>
                                    <td>Average 3-bedroom home</td>
                                    <td>15 Yard</td>
                                    <td>$399</td>
                                </tr>
                                <tr>
                                    <td>Large home, full house, or heavy contents</td>
                                    <td>20 Yard</td>
                                    <td>$449</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Not sure? We recommend going one size up if you&apos;re unsure — it&apos;s always better to have extra room than to call for a second container mid-cleanout. Call us at <a href="tel:6013167891">601-316-7891</a> and we&apos;ll help you size it based on your situation.
                        </p>

                        <h2>What You Can Put in the Dumpster</h2>
                        <p>For estate cleanouts, you can typically load:</p>
                        <ul>
                            <li>Furniture — sofas, beds, chairs, tables, dressers</li>
                            <li>Mattresses and box springs</li>
                            <li>Clothing, linens, and household goods</li>
                            <li>Kitchenware and appliances (stoves, washers, dryers — but NOT refrigerators)</li>
                            <li>Boxes, books, and miscellaneous items</li>
                            <li>Carpet and rugs</li>
                            <li>Yard and garage contents</li>
                        </ul>
                        <p>
                            <strong>Items to set aside:</strong> Refrigerators, freezers, HVAC units, electronics/TVs, chemicals, paints, and medications need to be disposed of separately and cannot go in the dumpster.
                        </p>

                        <h2>Tips for a Smoother Estate Cleanout</h2>
                        <ul>
                            <li><strong>Sort before you load.</strong> Do a quick pass first — set aside anything that might be donated, sold, or kept by family before loading the dumpster.</li>
                            <li><strong>Work room by room.</strong> It&apos;s easier to track progress and ensure nothing is missed.</li>
                            <li><strong>Rent for enough time.</strong> Estate cleanouts usually take longer than expected. A 7-day rental gives you flexibility without pressure.</li>
                            <li><strong>Check for documents.</strong> Go through drawers and boxes before tossing — important papers and financial documents are easy to accidentally discard.</li>
                            <li><strong>Call local nonprofits first.</strong> Organizations like Habitat for Humanity ReStore, local churches, and thrift stores may pick up usable furniture and appliances for free.</li>
                        </ul>

                        <h2>Serving Families Across Rankin, Hinds, and Madison Counties</h2>
                        <p>
                            We serve families throughout Central Mississippi — including Jackson, Brandon, Madison, Ridgeland, Clinton, Flowood, Pearl, Byram, Richland, Gluckstadt, Flora, Florence, Canton, and Terry. We&apos;re locally owned and operated, which means we understand this community and we&apos;re available 7 days a week to help you get the job done.
                        </p>

                        <div className={styles.cta}>
                            <h3>Ready to Get Started?</h3>
                            <p>Book your estate cleanout dumpster online or call us at <a href="tel:6013167891">601-316-7891</a>. We&apos;re available 7AM–7PM, seven days a week.</p>
                            <a
                                href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Book Estate Cleanout Dumpster
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
