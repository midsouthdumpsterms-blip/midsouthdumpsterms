import { MetadataRoute } from 'next'
import { sql } from '@vercel/postgres'
import routeList from '@/lib/route-list.json'

const baseUrl = 'https://midsouthdumpsterms.com'

// Cache for an hour rather than rebuilding on every crawler hit.
export const revalidate = 3600

/**
 * Priority + change frequency by URL shape. Longest-matching prefix wins.
 * These are hints only — Google largely ignores them — but keeping them
 * consistent stops the sitemap from claiming a privacy policy is as important
 * as the booking page.
 */
const RULES: { match: RegExp; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { match: /^\/$/, priority: 1.0, changeFrequency: 'weekly' },
    { match: /^\/book-online$/, priority: 0.95, changeFrequency: 'monthly' },
    { match: /^\/sizes/, priority: 0.9, changeFrequency: 'monthly' },
    { match: /^\/services/, priority: 0.9, changeFrequency: 'monthly' },
    { match: /^\/service-areas\/(hinds|madison|rankin)-county$/, priority: 0.85, changeFrequency: 'monthly' },
    { match: /^\/service-areas/, priority: 0.8, changeFrequency: 'monthly' },
    { match: /^\/contact$/, priority: 0.8, changeFrequency: 'monthly' },
    { match: /^\/faq$/, priority: 0.75, changeFrequency: 'monthly' },
    { match: /^\/blog$/, priority: 0.7, changeFrequency: 'weekly' },
    { match: /^\/blog\//, priority: 0.7, changeFrequency: 'monthly' },
    { match: /^\/(about|community|gallery)$/, priority: 0.6, changeFrequency: 'monthly' },
    { match: /^\/(privacy-policy|terms-and-conditions|service-terms)$/, priority: 0.3, changeFrequency: 'yearly' },
]

function ruleFor(route: string) {
    return RULES.find((r) => r.match.test(route)) ?? { priority: 0.6, changeFrequency: 'monthly' as const }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Every statically routable page, generated from the filesystem at build time.
    const staticEntries: MetadataRoute.Sitemap = routeList.map((entry) => {
        const { priority, changeFrequency } = ruleFor(entry.route)
        return {
            url: entry.route === '/' ? baseUrl : `${baseUrl}${entry.route}`,
            lastModified: new Date(entry.lastModified),
            changeFrequency,
            priority,
        }
    })

    // Blog posts published through the admin dashboard live in Postgres, not on disk.
    const known = new Set(staticEntries.map((e) => e.url))
    let dbBlogUrls: MetadataRoute.Sitemap = []
    try {
        const { rows } = await sql`SELECT slug, published_at FROM blog_posts WHERE status = 'PUBLISHED'`
        dbBlogUrls = rows
            .map((post) => ({
                url: `${baseUrl}/blog/${post.slug}`,
                lastModified: new Date(post.published_at),
                changeFrequency: 'monthly' as const,
                priority: 0.7,
            }))
            .filter((entry) => !known.has(entry.url))
    } catch (err) {
        console.error('Failed to fetch DB posts for sitemap', err)
    }

    return [...staticEntries, ...dbBlogUrls]
}
