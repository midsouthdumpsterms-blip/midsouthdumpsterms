import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import Link from 'next/link'
import styles from '../blog-post.module.css'
import TrackedPhoneLink from '@/components/TrackedPhoneLink'

export const metadata: Metadata = {
    title: 'Storm Cleanup Dumpster Rental in Jackson MS | Same-Day Service',
    description:
        'Need a dumpster after a storm in Central Mississippi? Mid South Dumpster Rentals offers same-day storm debris removal in Jackson, Brandon, Ridgeland, Madison, and surrounding areas. Call 601-316-7891.',
}

export default function BlogPost() {
    const articleSchema = generateArticleSchema(
        'Storm Cleanup Dumpster Rental in Jackson MS | Same-Day Service',
        'Need a dumpster after a storm in Central Mississippi? Mid South Dumpster Rentals offers same-day storm debris removal across Jackson, Brandon, Ridgeland, Madison, and surrounding areas.',
        '2026-03-03',
        'https://midsouthdumpsterms.com/images/og-image.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Storm Cleanup Dumpster Rental in Jackson MS', url: 'https://midsouthdumpsterms.com/blog/storm-cleanup-dumpster-rental-jackson-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container container-narrow">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Storm & Disaster</span>
                        <h1>Storm Cleanup Dumpster Rental in Jackson, MS — Same-Day Service Available</h1>
                        <p className={styles.meta}>Published March 3, 2026</p>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            When a storm rolls through Central Mississippi and leaves behind downed trees, scattered debris, and damaged materials, the last thing you want is to wait days for a dumpster. Mid South Dumpster Rentals provides same-day and next-day storm cleanup dumpster rentals across Jackson, Brandon, Ridgeland, Madison, Clinton, and surrounding areas — so you can start cleaning up fast.
                        </p>

                        <h2>Why Storm Cleanup Is Different</h2>
                        <p>
                            Regular cleanout projects can usually wait a day or two while you make arrangements. Storm cleanup can't. Standing water, broken glass, splintered lumber, and storm debris are safety hazards, and many insurance claims require you to document and remove debris promptly. That's why we prioritize storm-related calls and work hard to get a dumpster to you the same day you call.
                        </p>

                        <h2>What Storm Debris Can Go in a Dumpster?</h2>
                        <p>After a storm in Mississippi, you're typically dealing with a mix of debris. Here's what we can take:</p>
                        <ul>
                            <li>Fallen tree limbs, branches, and wood debris</li>
                            <li>Damaged lumber, fencing, and decking</li>
                            <li>Roofing shingles and roofing materials</li>
                            <li>Drywall, insulation, and interior building materials</li>
                            <li>Furniture damaged by wind or water</li>
                            <li>Yard debris, sod, and vegetation</li>
                            <li>Broken glass, siding, and gutters</li>
                        </ul>
                        <p>
                            <strong>Important:</strong> We cannot accept hazardous materials such as asbestos, chemicals, oils, or fuel — even if storm-damaged. If you're unsure whether an item is safe to load, give us a call at <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> and we'll walk you through it.
                        </p>

                        <h2>What Size Dumpster Do You Need for Storm Cleanup?</h2>
                        <p>The right size depends on how much debris you're dealing with:</p>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Storm Damage Type</th>
                                    <th>Recommended Size</th>
                                    <th>Price Starting At</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Small yard debris, a few limbs</td>
                                    <td>10 Yard</td>
                                    <td>$349</td>
                                </tr>
                                <tr>
                                    <td>Large tree down, fence damage, roofing</td>
                                    <td>15 Yard</td>
                                    <td>$399</td>
                                </tr>
                                <tr>
                                    <td>Major structural damage, full cleanout</td>
                                    <td>20 Yard</td>
                                    <td>$449</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Not sure which size fits your situation? Call us — we'll ask a few quick questions and recommend the right container. We'd rather help you get it right the first time than have you pay for two loads.
                        </p>

                        <h2>We Serve All of Central Mississippi</h2>
                        <p>
                            Storm damage doesn't follow city lines, and neither do we. We provide storm cleanup dumpster rentals throughout Central Mississippi, including:
                        </p>
                        <ul>
                            <li>Jackson, MS</li>
                            <li>Brandon, MS</li>
                            <li>Ridgeland, MS</li>
                            <li>Madison, MS</li>
                            <li>Clinton, MS</li>
                            <li>Flowood, MS</li>
                            <li>Pearl, MS</li>
                            <li>Byram, MS</li>
                            <li>Richland, MS</li>
                            <li>Flora, Florence, Canton, Terry, and Gluckstadt</li>
                        </ul>

                        <h2>Tips for a Safer Storm Debris Cleanup</h2>
                        <ul>
                            <li><strong>Photograph everything first.</strong> Before moving debris, document it for your insurance claim.</li>
                            <li><strong>Watch for hidden hazards.</strong> Storm debris often hides nails, broken glass, and sharp metal. Wear gloves and heavy-duty boots.</li>
                            <li><strong>Don&apos;t overload the dumpster.</strong> All debris must stay below the fill line — overfilled containers cannot be safely hauled.</li>
                            <li><strong>Separate hazardous materials.</strong> Set aside anything that looks like chemicals, propane tanks, or equipment fluids — those need separate disposal.</li>
                            <li><strong>Call your insurance adjuster first.</strong> Many homeowner policies cover debris removal as part of an approved claim.</li>
                        </ul>

                        <h2>Same-Day Storm Dumpster Pickup — Call Now</h2>
                        <p>
                            We know storm cleanup is stressful. Our team is locally based in Jackson, which means we can move fast. Call <TrackedPhoneLink location="Page CTA">601-316-7891</TrackedPhoneLink> and let us know what you&apos;re dealing with — we&apos;ll get a dumpster to you as quickly as possible. We&apos;re available 7 days a week, 7AM–7PM.
                        </p>

                        <div className={styles.cta}>
                            <h3>Ready to Start Cleaning Up?</h3>
                            <p>Book a dumpster online or call us directly for same-day storm cleanup service.</p>
                            <a
                                href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Book Storm Cleanup Dumpster
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
