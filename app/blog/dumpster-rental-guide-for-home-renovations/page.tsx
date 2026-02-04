import { Metadata } from 'next'
import Link from 'next/link'
import styles from '../blog-post.module.css'

export const metadata: Metadata = {
    title: 'Dumpster Rental Guide for Home Renovations | Mid South Dumpster Rentals',
    description: 'Planning a home renovation? Learn how to choose the right dumpster size, where to place it, and how to save money on waste disposal.',
    openGraph: {
        title: 'Dumpster Rental Guide for Home Renovations | Mid South',
        description: 'Essential guide for homeowners renting a dumpster for renovation projects.',
        type: 'article',
    },
}

export default function HomeRenovationDumpsterGuide() {
    return (
        <article className={styles.article}>
            <div className="container">
                <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>
                <header className={styles.header}>
                    <h1>Dumpster Rental Guide for Home Renovations</h1>
                    <p className={styles.date}>Published on January 28, 2026</p>
                </header>

                <div className={styles.content}>
                    <p>
                        Renovating your home is exciting, but it creates a massive amount of debris. From old cabinets and ripped-up flooring to drywall and tile,
                        waste builds up fast. Renting a roll-off dumpster is the most efficient way to keep your job site clean and safe.
                    </p>

                    <h2>Step 1: Estimating Your Debris</h2>
                    <p>
                        The most common mistake homeowners make is underestimating how much trash they will have. Here is a quick rule of thumb:
                    </p>
                    <ul>
                        <li><strong>Bathroom Remodel:</strong> Usually fits in a <strong>10-Yard Dumpster</strong>.</li>
                        <li><strong>Kitchen Remodel:</strong> Often requires a <strong>15-Yard or 20-Yard Dumpster</strong> depending on the size of the kitchen.</li>
                        <li><strong>Whole Home Cleanout/Flooring:</strong> Go with a <strong>20-Yard Dumpster</strong> to be safe.</li>
                    </ul>

                    <h2>Step 2: Preparing the Drop-Off Spot</h2>
                    <p>
                        Before we deliver your dumpster, clear a space in your driveway. A dumpster takes up about as much space as a minivan.
                    </p>
                    <ul>
                        <li>Move vehicles out of the way.</li>
                        <li>Ensure there are no low-hanging power lines or tree branches.</li>
                        <li>If you are worried about your driveway, laying down plywood can protect the asphalt or concrete.</li>
                    </ul>

                    <h2>Step 3: Loading Like a Pro</h2>
                    <p>
                        To get the most out of your rental, load efficiently:
                    </p>
                    <ol>
                        <li><strong>Flat items first:</strong> Lay flat items like plywood, doors, and cabinet panels at the bottom.</li>
                        <li><strong>Fill the gaps:</strong> Break down boxes and fill empty spaces with smaller debris.</li>
                        <li><strong>Don't overfill:</strong> Ensure debris does not go above the top rim of the dumpster. We must tarp the load for transport, and an overflowing dumpster cannot be picked up safely.</li>
                    </ol>

                    <h2>Step 4: Scheduling Your Pickup</h2>
                    <p>
                        Renovations can face delays. If you need the dumpster longer than your 7-day rental period, just give us a call!
                        We offer flexible extensions. When you are done, call or text us, and we will haul it away.
                    </p>

                    <div className={styles.cta}>
                        <h3>Start Your Renovation Right</h3>
                        <p>Don't let the mess slow you down. Book your dumpster today.</p>
                        <a href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF" className="btn btn-secondary">Get a Quote</a>
                    </div>
                </div>
            </div>
        </article>
    )
}
