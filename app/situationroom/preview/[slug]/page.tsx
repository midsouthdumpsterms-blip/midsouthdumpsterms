import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { sql } from '@vercel/postgres';
import postStyles from '../../../blog/blog-post.module.css';
import { getLocalPhotoPool, pickRandomPhotos } from '@/lib/local-photos';
import ApproveButton from './ApproveButton';

export const dynamic = 'force-dynamic';

export default async function PreviewArticlePage({
    params,
}: {
    params: { slug: string }
}) {
    // Fetch the draft from the database
    const { rows } = await sql`
        SELECT * FROM blog_posts 
        WHERE slug = ${params.slug}
    `;

    if (rows.length === 0) {
        notFound();
    }

    const article = rows[0];

    const publishDate = new Date(article.published_at || new Date()).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <div>
            {article.status === 'DRAFT' && <ApproveButton slug={article.slug} />}
            
            <article className={postStyles.article} style={{ marginTop: article.status === 'DRAFT' ? 0 : 'auto' }}>
                <div className="container" style={{ maxWidth: '860px' }}>

                    <header className={postStyles.header}>
                        <span className={postStyles.category}>Tips &amp; Guides</span>
                        <h1>{article.title}</h1>
                        <p className={postStyles.meta}>
                            Preview Date: {publishDate} &middot; Mid South Dumpster Rentals
                        </p>
                    </header>

                    {article.image_url && (
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', marginBottom: '2rem' }}>
                        <Image
                            src={article.image_url.startsWith('http') ? article.image_url : `${article.image_url}`}
                            alt={article.title}
                            fill
                            style={{ objectFit: 'cover', borderRadius: '12px' }}
                            unoptimized={article.image_url.startsWith('http')}
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
                        {pickRandomPhotos(getLocalPhotoPool(), 4).map((photoUrl, idx) => (
                            <div key={idx} style={{ position: 'relative', width: '100%', aspectRatio: '1/1' }}>
                                <Image
                                    src={photoUrl}
                                    alt="Mid South Dumpster Rentals recent project"
                                    fill
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
        </div>
    );
}
