import { Metadata } from 'next'
import Link from 'next/link'
import { generateBreadcrumbSchema, injectSchema } from '@/lib/schema'

export const metadata: Metadata = {
    title: 'Community | Mid South Dumpster Rentals | Jackson, MS',
    description:
        'Mid South Dumpster Rentals is rooted in Jackson, MS. Our owner has lived in the greater Jackson area for years and believes in showing up for the community — not just doing business in it.',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://midsouthdumpsterms.com/community',
        siteName: 'Mid South Dumpster Rentals',
        title: 'Rooted in Jackson | Mid South Dumpster Rentals',
        description:
            'We live here, work here, and care about what happens here. When community cleanup efforts in the greater Jackson metro need support, we try to help where we can.',
        images: [
            {
                url: '/images/og-community.png',
                width: 1200,
                height: 630,
                alt: 'Mid South Dumpster Rentals — Rooted in the Jackson Community',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rooted in Jackson | Mid South Dumpster Rentals',
        description: 'We live here, work here, and care about what happens here.',
        images: ['/images/og-community.png'],
    },
}

export default function Community() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://midsouthdumpsterms.com' },
        { name: 'About', url: 'https://midsouthdumpsterms.com/about' },
        { name: 'Community', url: 'https://midsouthdumpsterms.com/community' },
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: injectSchema(breadcrumbSchema) }} />

            {/* Hero */}
            <section style={{
                background: 'linear-gradient(135deg, #0e7490 0%, #0369a1 100%)',
                color: 'white',
                padding: '5rem 1rem 4rem',
                textAlign: 'center',
            }}>
                <div className="container">
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏘️</div>
                    <h1 style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>
                        Rooted in Jackson
                    </h1>
                    <p style={{ fontSize: '1.15rem', maxWidth: '620px', margin: '0 auto', opacity: 0.9, lineHeight: 1.7 }}>
                        Mid South Dumpster Rentals isn&apos;t just based in Jackson — it&apos;s home.
                        We operate here, live here, and care about what happens here.
                    </p>
                </div>
            </section>

            {/* Main content */}
            <section style={{ padding: '4rem 1rem' }}>
                <div className="container" style={{ maxWidth: '760px' }}>

                    {/* Story block */}
                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-gray-900)', marginBottom: '1.25rem' }}>
                            A Local Business with Local Stakes
                        </h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)', marginBottom: '1rem' }}>
                            Mid South Dumpster Rentals is based in Jackson, MS — and our owner, Andrew Tyre, isn&apos;t
                            just a longtime resident. He&apos;s a born and bred Jackson native. His family&apos;s roots here
                            run deep — generations back, an ancestor served as the architect of the
                            original Mississippi State Capitol building — not the current one, but the one that came before it.
                            The Nelson name has been part of this city&apos;s story for a long time.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)', marginBottom: '1rem' }}>
                            Today, Andrew lives in the Fondren neighborhood. That&apos;s not a marketing line —
                            it&apos;s just where he&apos;s from, and where he stays.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)', marginBottom: '1rem' }}>
                            When you&apos;re invested in a place the way we are, you tend to think about it differently.
                            The condition of our neighborhoods, the people doing the hard work of keeping them clean,
                            and the organizations trying to make Jackson better — those things matter to us personally.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)' }}>
                            Community outreach and support — when we can provide it — is something we strive to do.
                            Not as a program, not as a promotion. Just as neighbors.
                        </p>
                    </div>

                    {/* Divider */}
                    <hr style={{ border: 'none', borderTop: '2px dashed var(--color-gray-200)', margin: '2.5rem 0' }} />

                    {/* Community cleanups block */}
                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-gray-900)', marginBottom: '1.25rem' }}>
                            Neighborhood Cleanups &amp; Community Projects
                        </h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)', marginBottom: '1rem' }}>
                            Jackson has no shortage of people quietly doing the work — neighborhood associations, volunteer
                            groups, community cleanup crews. If you&apos;re one of them and you ever find yourself needing debris
                            removal support anywhere in the greater Jackson metro, we&apos;re worth reaching out to.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-700)' }}>
                            We can&apos;t always make it work — availability and timing have to line up — but when they do,
                            we like to help. There&apos;s no formal process. Just reach out and tell us what you&apos;re doing.
                        </p>
                    </div>

                    {/* Quote / pull block */}
                    <div style={{
                        background: 'linear-gradient(135deg, #f0fdff, #e0f2fe)',
                        border: '1.5px solid #bae6fd',
                        borderLeft: '5px solid var(--color-primary)',
                        borderRadius: '12px',
                        padding: '2rem 2rem',
                        marginBottom: '3rem',
                    }}>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-800)', fontStyle: 'italic', margin: 0 }}>
                            &ldquo;If I have a container available on the day you need it, I&apos;ll help. Delivery, pickup,
                            disposal — all on us. All I need is a spot on the property to place it.
                            No strings attached. Just want to do our part.&rdquo;
                        </p>
                        <p style={{ marginTop: '1rem', fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.95rem', margin: '1rem 0 0' }}>
                            — Andrew Tyre, Owner · Mid South Dumpster Rentals
                        </p>
                    </div>

                    {/* CTA */}
                    <div style={{
                        background: 'white',
                        border: '1.5px solid var(--color-gray-200)',
                        borderRadius: '14px',
                        padding: '2rem',
                        textAlign: 'center',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-gray-900)', marginBottom: '0.75rem' }}>
                            Organizing Something in Jackson?
                        </h3>
                        <p style={{ color: 'var(--color-gray-600)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                            If you&apos;re putting together a neighborhood cleanup, community improvement project, or
                            something similar anywhere in the greater Jackson metro — reach out. We&apos;re easy to get ahold of and happy to talk.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/contact" className="btn btn-primary">
                                Get in Touch
                            </Link>
                            <a href="tel:6013167891" className="btn btn-outline">
                                📞 601-316-7891
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
