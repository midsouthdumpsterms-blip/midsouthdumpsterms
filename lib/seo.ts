import type { Metadata } from 'next'

export const SITE_URL = 'https://midsouthdumpsterms.com'

/**
 * The Open Graph card used across the site.
 *
 * This has to be repeated on every page that declares its own `openGraph`
 * block. Next.js *replaces* the parent openGraph object rather than merging
 * it, so a page that sets `openGraph: { title, description, url }` silently
 * drops the inherited image — which is how 52 of 78 pages ended up shipping
 * with no og:image at all. Always spread `ogBase()` instead of hand-writing
 * the object.
 *
 * public/images/og-image.jpg MUST be 1200x630. That 1.91:1 ratio is what
 * Facebook, X, LinkedIn and iMessage render as a large link card; square art
 * gets cropped into the small thumbnail treatment instead. The current asset
 * is still 640x640 — replacing that one file upgrades every page at once.
 */
export const OG_IMAGE = {
    url: `${SITE_URL}/images/og-image.jpg`,
    width: 1200,
    height: 630,
    alt: 'Mid South Dumpster Rentals — roll-off dumpster rental in Jackson, MS',
} as const

type OgInput = {
    title: string
    description: string
    /** Path only, e.g. "/services/roofing-dumpster-rental". */
    path: string
}

/** Open Graph block with the shared image already attached. */
export function ogBase({ title, description, path }: OgInput): Metadata['openGraph'] {
    return {
        type: 'website',
        siteName: 'Mid South Dumpster Rentals',
        locale: 'en_US',
        title,
        description,
        url: `${SITE_URL}${path}`,
        images: [OG_IMAGE],
    }
}

/** Twitter card matching the Open Graph block. */
export function twitterBase({ title, description }: Omit<OgInput, 'path'>): Metadata['twitter'] {
    return {
        card: 'summary_large_image',
        title,
        description,
        images: [OG_IMAGE.url],
    }
}

/**
 * The suffix `metadata.title.template` appends to every page title
 * ("%s | Mid South"). Anything generated at runtime has to budget for it or
 * it gets cut off in the SERP.
 */
export const TITLE_SUFFIX = ' | Mid South'
export const TITLE_MAX = 60
export const DESCRIPTION_MAX = 158

/**
 * Trim to a word boundary without leaving a dangling comma or dash.
 *
 * Titles get no ellipsis — a truncated title should still read as a title.
 * Descriptions get one, because a sentence that stops mid-thought without any
 * mark looks like a bug rather than a summary.
 */
function trimToWord(text: string, max: number): string {
    const t = text.replace(/\s+/g, ' ').trim()
    if (t.length <= max) return t
    const cut = t.slice(0, max)
    const lastSpace = cut.lastIndexOf(' ')
    // Only honour the word boundary if it isn't throwing away most of the string.
    const body = lastSpace > max * 0.5 ? cut.slice(0, lastSpace) : cut
    return body.replace(/[\s,;:.–—-]+$/, '')
}

/**
 * Fit a title inside Google's ~60-character display limit *including* the
 * template suffix. Database-authored posts routinely arrive at 66–99
 * characters, which is what pushed all nine of them past the cutoff.
 */
export function fitTitle(title: string, max: number = TITLE_MAX): string {
    return trimToWord(title, Math.max(10, max - TITLE_SUFFIX.length))
}

/**
 * Fit a meta description to 158 characters, preferring to end on a complete
 * sentence when one lands in the last third of the budget.
 */
export function fitDescription(text: string, max: number = DESCRIPTION_MAX): string {
    const t = (text || '').replace(/\s+/g, ' ').trim()
    if (t.length <= max) return t
    const window = t.slice(0, max)
    const lastStop = Math.max(window.lastIndexOf('. '), window.lastIndexOf('! '), window.lastIndexOf('? '))
    if (lastStop > max * 0.6) return window.slice(0, lastStop + 1)
    return trimToWord(t, max - 1) + '…'
}
