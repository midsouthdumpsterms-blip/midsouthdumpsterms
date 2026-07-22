import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { sql } from '@vercel/postgres'
import postStyles from '../blog-post.module.css'
import { getLocalPhotoPool, pickRandomPhotos } from '@/lib/local-photos'

export const revalidate = 3600 // Check for new db posts every hour

// Allow slugs not known at build time (new DB articles)
export const dynamicParams = true

export async function generateStaticParams() {
    try {
        const { rows } = await sql`SELECT slug FROM blog_posts WHERE status = 'PUBLISHED'`;
        return rows.map(r => ({ slug: r.slug }))
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
        `;
        const article = rows[0];
        if (!article) return {}

        return {
            title: `${article.title} | Mid South Dumpster Rentals`,
            description: article.excerpt,
            openGraph: {
                title: article.title,
                description: article.excerpt,
                url: `https://midsouthdumpsterms.com/blog/${params.slug}`,
                images: [
                    {
                        url: '/images/og-image.jpg',
                        width: 1200,
                        height: 630,
                        alt: 'Mid South Dumpster Rentals',
                    }
                ],
            },
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
    let rows: any[] = [];
    try {
        const result = await sql`
            SELECT * FROM blog_posts 
            WHERE slug = ${params.slug} AND status = 'PUBLISHED'
        `;
        rows = result.rows;
    } catch (err) {
        console.error('Failed to fetch DB article', err);
    }

    if (rows.length === 0) notFound()
    const article = rows[0];

    const publishDate = new Date(article.published_at).toLocaleDateString('en-US', {
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

                    {article.image_url && (
                        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', marginBottom: '2rem' }}>
                            <Image
                                src={article.image_url}
                                alt={article.title}
                                fill
                                style={{ objectFit: 'cover', borderRadius: '12px' }}
                                unoptimized={true}
                            />
                        </div>
                    )}

                <div
                    className={postStyles.content}
                    dangerouslySetInnerHTML={{ __html: article.content_html }}
                />

                <div className={postStyles.gallerySection} style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Recent Projects & Our Fleet</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        {pickRandomPhotos(getLocalPhotoPool(), 6).map((photoUrl, idx) => (
                            <div key={idx} style={{ position: 'relative', width: '100%', aspectRatio: '1/1' }}>
                                <Image
                                    src={photoUrl}
                                    alt="Mid South Dumpster Rentals recent project"
                                    fill
                                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                                    unoptimized={true}
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
