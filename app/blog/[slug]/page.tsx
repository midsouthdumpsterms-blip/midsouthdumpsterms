import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { sql } from '@vercel/postgres'
import postStyles from '../blog-post.module.css'
import { getLocalPhotoPool, pickRandomPhotos } from '@/lib/local-photos'
import { generateArticleSchema, generateBreadcrumbSchema, injectSchema } from '@/lib/schema'
import { SITE_URL, OG_IMAGE, ogBase, twitterBase, fitTitle, fitDescription } from '@/lib/seo'
import retiredPosts from '@/lib/retired-posts.json'

export const revalidate = 3600 // Check for new db posts every hour

// Allow slugs not known at build time (new DB articles)
export const dynamicParams = true

/**
 * Slugs that now 301 elsewhere (see next.config.js). They stay PUBLISHED in
 * Postgres so nothing is destroyed, but they must not be pre-rendered, listed
 * or put in the sitemap -- otherwise we keep advertising URLs that redirect.
 */
const RETIRED = new Set(retiredPosts.map((p) => p.from))

export async function generateStaticParams() {
    try {
        const { rows } = await sql`SELECT slug FROM blog_posts WHERE status = 'PUBLISHED'`
        return rows.filter((r) => !RETIRED.has(r.slug)).map((r) => ({ slug: r.slug }))
    } catch (err) {
        return []
    }
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Promise<Metadata> {
    try {
        const { rows } = await sql`
            SELECT title, excerpt FROM blog_posts
            WHERE slug = ${params.slug} AND status = 'PUBLISHED'
        `
        const article = rows[0]
        if (!article) return {}

        // Database titles arrive at 66-99 characters and excerpts at 235-347.
        // Both blow past Google's display limits, so they are fitted here
        // rather than by hand -- the next generated post inherits the fix.
        const title = fitTitle(article.title)
        const description = fitDescription(article.excerpt)
        const path = `/blog/${params.slug}`

        return {
            title,
            description,
            alternates: { canonical: `${SITE_URL}${path}` },
            openGraph: ogBase({ title, description, path }),
            twitter: twitterBase({ title, description }),
        }
    } catch (err) {
        return {}
    }
}

export default async function DbArticlePage({
    params,
}: {
    params: { slug: string }
}) {
    if (RETIRED.has(params.slug)) notFound()

    let rows: any[] = []
    try {
        const result = await sql`
            SELECT * FROM blog_posts
            WHERE slug = ${params.slug} AND status = 'PUBLISHED'
        `
        rows = result.rows
    } catch (err) {
        console.error('Failed to fetch DB article', err)
    }

    if (rows.length === 0) notFound()
    const article = rows[0]

    const publishedISO = new Date(article.published_at).toISOString()
    const publishDate = new Date(article.published_at).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

    // These were the only pages on the site carrying neither Article nor
    // BreadcrumbList schema. Generating both here means every future post
    // published through /situationroom inherits them automatically.
    const articleSchema = generateArticleSchema(
        fitTitle(article.title, 110),
        fitDescription(article.excerpt, 300),
        publishedISO,
        article.image_url || OG_IMAGE.url
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Blog', url: `${SITE_URL}/blog` },
        { name: fitTitle(article.title, 70), url: `${SITE_URL}/blog/${params.slug}` },
    ])

    return (
        <article className={postStyles.article}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            <div className="container" style={{ maxWidth: '860px' }}>

                <Link href="/blog" className={postStyles.backLink}>
                    &larr; Back to All Articles
                </Link>

                <header className={postStyles.header}>
                    <span className={postStyles.category}>Tips &amp; Guides</span>
                    <h1>{article.title}</h1>
                    <p className={postStyles.meta}>
                        Published {publishDate} &middot; Mid South Dumpster Rentals
                    </p>
                </header>

                {article.image_url && (
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', marginBottom: '2rem' }}>
                        <Image
                            src={article.image_url}
                            alt={article.title}
                            fill
                            sizes="(max-width: 860px) 100vw, 860px"
                            style={{ objectFit: 'cover', borderRadius: '12px' }}
                        />
                    </div>
                )}

                <div
                    className={postStyles.content}
                    dangerouslySetInnerHTML={{ __html: article.content_html }}
                />

                {/*
                    Contextual links out to the money pages. Generated posts had
                    exactly one inbound link each and sent none back, so they
                    contributed nothing to the internal link graph.
                */}
                <aside className={postStyles.related}>
                    <h3>Planning your rental</h3>
                    <ul>
                        <li>
                            Not sure what you need? Compare{' '}
                            <Link href="/sizes">10, 15 and 20-yard roll-off dumpster sizes and prices</Link>.
                        </li>
                        <li>
                            Working in the capital? See{' '}
                            <Link href="/service-areas/jackson">dumpster rental in Jackson, MS</Link>{' '}
                            for delivery areas and permit rules.
                        </li>
                        <li>
                            On a deadline? We deliver{' '}
                            <Link href="/services/same-day-dumpster-rental">same-day roll-off dumpsters across Central Mississippi</Link>.
                        </li>
                        <li>
                            Check{' '}
                            <Link href="/blog/what-can-i-put-in-a-dumpster">what you can and cannot put in a dumpster</Link>{' '}
                            before you start loading.
                        </li>
                    </ul>
                </aside>

                <div className={postStyles.gallerySection}>
                    <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Recent Projects &amp; Our Fleet</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        {pickRandomPhotos(getLocalPhotoPool(), 4).map((photoUrl, idx) => (
                            <div key={idx} style={{ position: 'relative', width: '100%', aspectRatio: '1/1' }}>
                                <Image
                                    src={photoUrl}
                                    alt="Mid South Dumpster Rentals recent project"
                                    fill
                                    sizes="(max-width: 600px) 50vw, 200px"
                                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={postStyles.cta}>
                    <h3>Ready to Rent a Dumpster in Central Mississippi?</h3>
                    <p>
                        Same-day and next-day delivery across Jackson, Brandon, Clinton,
                        Ridgeland, Madison, and surrounding areas. No hidden fees.
                    </p>
                    <a href="tel:6013167891" className="btn btn-secondary">
                        Call 601-316-7891
                    </a>
                </div>

            </div>
        </article>
    )
}
