import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import BookingButton from '@/components/BookingButton'
import styles from '../blog-post.module.css'

export const metadata: Metadata = {
    title: 'Spring Cleaning Checklist for Central MS Homeowners | Mid South Dumpster',
    description: 'Get your home ready for spring with our comprehensive cleaning checklist for Jackson, Madison, and Brandon homeowners. Plus, find out how renting a dumpster makes cleanouts a breeze.',
    openGraph: {
        title: 'Spring Cleaning Checklist for Central MS Homeowners',
        description: 'Get your Central Mississippi home ready for the season with our ultimate spring cleaning checklist.',
        type: 'article',
    },
}

export default function SpringCleaningChecklist() {
    const articleSchema = generateArticleSchema(
        'Spring Cleaning Checklist for Central MS Homeowners',
        'Get your home ready for spring with our comprehensive cleaning checklist for Jackson, Madison, and Brandon homeowners. Plus, find out how renting a dumpster makes cleanouts a breeze.',
        '2026-03-17',
        '/images/gallery/clean-dumpster-delivery-flowood-blue.jpg'
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'Blog', url: 'https://midsouthdumpsterms.com/blog' },
        { name: 'Spring Cleaning Checklist', url: 'https://midsouthdumpsterms.com/blog/spring-cleaning-checklist-central-ms' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <article className={styles.article}>
                <div className="container">
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

                    <header className={styles.header}>
                        <h1>The Ultimate Spring Cleaning Checklist for Central MS Homeowners</h1>
                        <p className={styles.date}>Published on March 17, 2026</p>
                    </header>

                    {/* TL;DR Summary Box for AI and quick readers */}
                    <div className={styles.tldrBox}>
                        <h3>Key Takeaways (TL;DR)</h3>
                        <ul>
                            <li><strong>Start Early:</strong> Mississippi heat and humidity ramp up quickly in April. Tackle your deep cleaning in March while the weather is pleasant.</li>
                            <li><strong>Work Top to Bottom:</strong> Always clean from the ceiling down to the floors so you don't push dust onto clean surfaces.</li>
                            <li><strong>Declutter First:</strong> A true deep clean is impossible if your home is full of clutter. Purge unused items before scrubbing.</li>
                            <li><strong>Rent a Dumpster:</strong> If you are cleaning out the garage, attic, or completing yard work, a <Link href="/services">10-yard or 15-yard dumpster</Link> will save you endless trips to the landfill.</li>
                        </ul>
                    </div>

                    <img
                        src="/images/gallery/clean-dumpster-delivery-flowood-blue.jpg"
                        alt="Clean blue roll-off dumpster delivered to a driveway in Central MS for spring cleaning"
                        className={styles.heroImage}
                    />

                    <div className={styles.content}>
                        <p>
                            When the dogwoods and azaleas start blooming around Jackson, you know it's time to shake off the winter chill. However, along with the beauty of spring in Mississippi comes a sudden burst of pollen and, inevitably, the heat.
                        </p>
                        <p>
                            That makes March the absolute perfect time to throw open your windows, deep clean your house, and <Link href="/blog/garage-cleanout-dumpster-rental-central-ms">declutter the garage</Link> before the summer swelter arrives. Use our comprehensive room-by-room Spring Cleaning Checklist to get your Central MS home sparkling clean.
                        </p>

                        <h2>The Essential Homeowner's Spring Prep Checklist</h2>

                        <h3>1. The "Big Purge" (Decluttering)</h3>
                        <p>
                            Before you ever pick up a sponge, you must ruthlessly declutter. Go room by room and sort your belongings into three piles: Keep, Donate, and Toss.
                        </p>
                        <ul>
                            <li><strong>Closets:</strong> Bag up any heavy winter clothes you didn't wear this year. </li>
                            <li><strong>Garage & Attic:</strong> This is usually where the bulk of the "Toss" pile originates. Broken furniture, <Link href="/blog/how-to-dispose-appliances-mattresses-jackson-ms">old appliances</Link>, and boxes of junk that haven't been opened since you moved in. </li>
                        </ul>
                        <p>
                            <em>Pro Tip:</em> If you discover you have more junk than will fit in your weekly curbside bin, skip the multiple trips to the dump and rent a <Link href="/blog/10-yard-dumpster-rental-jackson-ms">10-yard roll-off dumpster</Link> for the weekend.
                        </p>

                        <h3>2. Windows & Baseboards</h3>
                        <p>
                            With so much pollen blowing through Madison and Rankin counties, your windows take a beating.
                        </p>
                        <ul>
                            <li>Remove window screens and scrub them with warm soapy water.</li>
                            <li>Use a streak-free glass cleaner on the inside and outside of all windows.</li>
                            <li>Take a damp rag to all the baseboards, crown molding, and door frames in the house. You'd be amazed how much dust settles on these edges.</li>
                        </ul>

                        <h3>3. Kitchen Deep Clean</h3>
                        <p>
                            The kitchen requires the most elbow grease.
                        </p>
                        <ul>
                            <li><strong>Appliances:</strong> Pull the refrigerator away from the wall and vacuum the coils. Clean your oven (use the self-cleaning cycle if equipped).</li>
                            <li><strong>Cabinets:</strong> Empty every cabinet, wipe down the shelves, and throw away expired pantry items. Wipe the exterior cabinet faces with wood cleaner or degreaser.</li>
                        </ul>

                        <h3>4. Bedrooms & Bathrooms</h3>
                        <ul>
                            <li><strong>Mattresses:</strong> Strip the bed, vacuum the mattress, and rotate it. (If it's time for a new one, <Link href="/blog/how-to-dispose-appliances-mattresses-jackson-ms">read our guide on disposing of the old one</Link>).</li>
                            <li><strong>Bathrooms:</strong> Deep clean the grout in your shower. Wash or replace plastic shower curtains. Discard expired cosmetics and old medicine safely.</li>
                        </ul>

                        <h2>Why You Need a Dumpster for Spring Cleaning</h2>
                        <p>
                            Most homeowners dramatically underestimate how much junk a true deep spring cleaning will produce. You may find old moldy yard debris, broken lawn equipment, ruined furniture hidden in the attic, or stacks of rotting lumber behind the shed.
                        </p>
                        <p>
                            Instead of bagging everything up and leaving it on the curb for weeks at a time (hoping the city will take it), a simple weekend dumpster rental makes the job easy. You toss everything into the bin as you work, and when the weekend is over, we haul it all away.
                        </p>

                        <div className={styles.cta}>
                            <h3>Get Ready for Spring!</h3>
                            <p>Mid South Dumpster Rentals is locally owned and serves Jackson, Ridgeland, Brandon, and all of Central Mississippi. Let's make your spring cleanout a breeze.</p>
                            <BookingButton label="Rent a Dumpster Today" location="Blog Spring Cleaning CTA" />
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
