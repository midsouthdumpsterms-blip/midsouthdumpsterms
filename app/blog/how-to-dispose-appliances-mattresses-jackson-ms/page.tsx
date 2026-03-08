import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import BookingButton from '@/components/BookingButton'
import styles from '../blog-post.module.css'

export const metadata: Metadata = {
    title: 'How to Dispose of Appliances & Mattresses in Jackson MS | Mid South',
    description: 'Looking to get rid of an old mattress or refrigerator in Jackson, MS? Learn the local rules, costs, and easiest ways to dispose of large, bulky items.',
    openGraph: {
        title: 'How to Dispose of Appliances & Mattresses in Jackson MS',
        description: 'Learn the local rules, costs, and easiest ways to dispose of large, bulky items like mattresses and appliances in Jackson, Mississippi.',
        type: 'article',
    },
}

export default function AppomatressDisposal() {
    const articleSchema = generateArticleSchema(
        'How to Dispose of Appliances & Mattresses in Jackson MS',
        'Looking to get rid of an old mattress or refrigerator in Jackson, MS? Learn the local rules, costs, and easiest ways to dispose of large, bulky items.',
        '2026-03-11',
        'https://midsouthdumpsterms.com/images/gallery/residential-dumpster-rental-brandon-driveway.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Appliance & Mattress Disposal in Jackson', url: 'https://midsouthdumpsterms.com/blog/how-to-dispose-appliances-mattresses-jackson-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

                    <header className={styles.header}>
                        <h1>How to Dispose of Appliances & Mattresses in Jackson MS</h1>
                        <p className={styles.date}>Published on March 11, 2026</p>
                    </header>

                    {/* TL;DR Summary Box for AI and quick readers */}
                    <div className={styles.tldrBox}>
                        <h3>Key Takeaways (TL;DR)</h3>
                        <ul>
                            <li><strong>Mattresses:</strong> Usually allowed in roll-off dumpsters but may incur special fees depending on the local landfill.</li>
                            <li><strong>Appliances:</strong> You can toss washers, dryers, and stoves in a dumpster safely.</li>
                            <li><strong>Refrigerators/AC Units:</strong> Must be completely drained of Freon/refrigerant before dumping. Hazardous waste drop-offs are often required for these.</li>
                            <li><strong>Alternative:</strong> The City of Jackson occasionally offers bulk pickup days, but a <Link href="/services">roll-off dumpster</Link> is best if doing a large cleanout.</li>
                        </ul>
                    </div>

                    <img
                        src="/images/gallery/residential-dumpster-rental-brandon-driveway.jpg"
                        alt="Residential roll-off dumpster rental on a driveway in Central MS"
                        className={styles.heroImage}
                    />

                    <div className={styles.content}>
                        <p>
                            Getting a new mattress or replacing a broken refrigerator is exciting, but then you are left with a persistent problem: <em>How do you get rid of the old one?</em>
                        </p>
                        <p>
                            Unlike normal household trash, you can't just drag a queen-sized mattress or a heavy stove to the curb on trash day in Jackson, MS, and expect the city to take it. Disposing of bulky items requires a bit of planning. Read on to learn the rules and the easiest ways to handle appliance and mattress disposal in Central Mississippi.
                        </p>

                        <h2>Disposing of Mattresses in Jackson</h2>
                        <p>
                            Mattresses are notoriously difficult for landfills to process. Their springs can jam expensive machinery, and they don't compress well, eating up valuable landfill space.
                        </p>
                        <p>
                            <strong>Can you put a mattress in a dumpster?</strong><br />
                            Yes! If you rent a dumpster from Mid South Dumpster Rentals, you are generally allowed to toss mattresses inside. However, because landfills charge us more to process them, there may be a small per-item surcharge for mattresses. If you only have one mattress, sometimes taking it directly to a local transfer station yourself is cheapest.
                        </p>
                        <p>
                            But if you are cleaning out an entire estate or a full house, tossing the mattresses into your <Link href="/blog/20-yard-dumpster-rental-jackson-ms">20-yard dumpster</Link> along with the rest of the junk is by far the most convenient option.
                        </p>

                        <h2>Disposing of General Household Appliances</h2>
                        <p>
                            For "dry" appliances like <strong>washers, dryers, ovens, stoves, and dishwashers</strong>, disposal is fairly straightforward. These machines are mostly made of metal and plastic and do not pose a severe environmental hazard.
                        </p>
                        <p>
                            <strong>Can you put them in a dumpster?</strong><br />
                            Absolutely. These are considered standard <Link href="/blog/what-can-i-put-in-a-dumpster">acceptable household/construction debris</Link>. Just walk them through the rear door of the dumpster and load them in safely.
                        </p>

                        <h2>Disposing of Refrigerators and AC Units (Freon)</h2>
                        <p>
                            Here is where things get tricky. Any appliance designed to cool—such as refrigerators, freezers, window AC units, and dehumidifiers—contains refrigerants (like Freon).
                        </p>
                        <p>
                            <strong>Environmental Regulations:</strong> It is illegal to dispose of active refrigerants in a standard landfill because they deplete the ozone layer.
                        </p>
                        <p>
                            <strong>Can you put a fridge in a dumpster?</strong><br />
                            <strong>No.</strong> We cannot accept refrigerators or HVAC units that still contain refrigerant. To legally dispose of these, you must hire a certified HVAC technician to drain the Freon and tag the appliance as safe. Once it is fully drained and tagged, it can be thrown away. Often, it is easier to take old refrigerators directly to a specialized recycling facility or participate in an appliance retailer's "haul-away" program when buying a new one.
                        </p>

                        <h2>When to Rent a Dumpster</h2>
                        <p>
                            If you only have a single mattress or one stove to get rid of, you might be better off calling a junk removal company for a single-item pickup or borrowing a truck to take it to the landfill yourself.
                        </p>
                        <p>
                            However, if you are doing a <Link href="/blog/garage-cleanout-dumpster-rental-central-ms">garage cleanout</Link>, moving, or remodeling a home, adding those bulky items into a roll-off dumpster is the most efficient choice.
                        </p>

                        <div className={styles.cta}>
                            <h3>Need a Dumpster for a Cleanout?</h3>
                            <p>Mid South Dumpster Rentals offers fast, affordable roll-off dumpsters in Jackson, Brandon, Madison, and beyond. We make bulky item disposal easy.</p>
                            <BookingButton label="Book a Dumpster Today" location="Blog Appliance Disposal CTA" />
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
