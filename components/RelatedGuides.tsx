import Link from 'next/link'
import relatedLinks from '@/lib/related-links.json'
import styles from './RelatedGuides.module.css'

type Entry = { href: string; label: string; note: string }

/**
 * Editorial links from a blog post out to the pages that should be ranking.
 *
 * The internal link graph was binary before this: 60 URLs linked from the
 * header or footer of every page, everything else on one to four links, and
 * no middle. Navigation links carry very little weight precisely because they
 * are everywhere -- a contextual link inside an article, with descriptive
 * anchor text, is what tells Google a page matters.
 *
 * Targets are chosen per post in lib/related-links.json, weighted toward the
 * money pages that had the fewest editorial sources. Anchor text describes the
 * destination rather than saying "click here", because the anchor text is the
 * signal.
 */
export default function RelatedGuides({ slug }: { slug: string }) {
    const entries = (relatedLinks as Record<string, Entry[]>)[slug]
    if (!entries || entries.length === 0) return null

    return (
        <aside className={styles.wrap}>
            <h3 className={styles.heading}>Related</h3>
            <ul className={styles.list}>
                {entries.map((e) => (
                    <li key={e.href}>
                        <Link href={e.href}>{e.label}</Link> &mdash; {e.note}
                    </li>
                ))}
            </ul>
        </aside>
    )
}
