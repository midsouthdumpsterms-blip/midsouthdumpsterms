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
