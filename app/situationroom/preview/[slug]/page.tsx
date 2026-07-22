import { notFound } from 'next/navigation';
import { sql } from '@vercel/postgres';
import postStyles from '../../../blog/blog-post.module.css';
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

                    <img
                        src="/images/og-image.jpg"
                        alt={article.title}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '12px',
                            marginBottom: '2rem',
                        }}
                    />

                    <div
                        className={postStyles.content}
                        dangerouslySetInnerHTML={{ __html: article.content_html }}
                    />

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
