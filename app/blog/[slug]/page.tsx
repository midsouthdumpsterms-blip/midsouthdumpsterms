import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getSoroArticles, getSoroArticleContent } from '@/lib/soro'
import postStyles from '../blog-post.module.css'
import photoOverrides from '../../../soro-photo-overrides.json'

// Recheck for new Soro content every 4 hours
export const revalidate = 14400

// Allow slugs not known at build time (new Soro articles)
export const dynamicParams = true

export async function generateStaticParams() {
    const articles = await getSoroArticles()
    return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Promise<Metadata> {
    const articles = await getSoroArticles()
    const article = articles.find(a => a.slug === params.slug)
    if (!article) return {}

    return {
        title: `${article.title} | Mid South Dumpster Rentals`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            url: `https://midsouthdumpsterms.com/blog/${params.slug}`,
        },
    }
}

export default async function SoroArticlePage({
    params,
}: {
    params: { slug: string }
}) {
    // Only handle slugs that are Soro articles
    const articles = await getSoroArticles()
    const article = articles.find(a => a.slug === params.slug)
    if (!article) notFound()

    const content = await getSoroArticleContent(article.id)
    if (!content) notFound()

    // Look up custom photo — falls back gracefully to no image
    const overrides = photoOverrides as Record<string, string>
    const customPhoto = overrides[params.slug] || null

    const publishDate = new Date(article.isoDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

    return (
        <article className={postStyles.article}>
            <div className="container" style={{ maxWidth: '860px' }}>

                <Link href="/blog" className={postStyles.backLink}>
                    ← Back to All Articles
                </Link>

                <header className={postStyles.header}>
                    <span className={postStyles.category}>Tips &amp; Guides</span>
                    <h1>{article.title}</h1>
                    <p className={postStyles.meta}>
                        Published {publishDate} &middot; Mid South Dumpster Rentals
                    </p>
                </header>

                {/* Your real photo — shown when an override is set for this article */}
                {customPhoto && (
                    <img
                        src={customPhoto}
                        alt={article.title}
                        style={{
                            width: '100%',
                            maxHeight: '480px',
                            objectFit: 'cover',
                            borderRadius: '12px',
                            marginBottom: '2rem',
                        }}
                    />
                )}

                {/* Article content from Soro */}
                <div
                    className={postStyles.content}
                    dangerouslySetInnerHTML={{ __html: content }}
                />

                {/* CTA at bottom of every Soro article */}
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
