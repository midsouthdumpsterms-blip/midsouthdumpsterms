'use client'

import { useEffect, useState } from 'react'

const SURVCART_URL = 'https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF'

export default function BookingIframe() {
    const [isMobile, setIsMobile] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
        setMounted(true)
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Avoid flash on SSR
    if (!mounted) return <div style={{ minHeight: '60vh', background: 'white' }} />

    // Mobile: open Surcart directly — no iframe scrolling, full native experience
    if (isMobile) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '70vh',
                padding: '2rem 1.5rem',
                background: 'linear-gradient(160deg, #f0fdff 0%, #ffffff 60%)',
                textAlign: 'center',
            }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗑️</div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-gray-900)', marginBottom: '0.5rem' }}>
                    Ready to Book?
                </h2>
                <p style={{ color: 'var(--color-gray-500)', marginBottom: '0.75rem', fontSize: '1rem', maxWidth: '320px' }}>
                    Our booking system opens in a full mobile-optimized page — no scrolling hassle.
                </p>

                <div style={{ background: 'white', borderRadius: '14px', padding: '1rem 1.25rem', marginBottom: '1.75rem', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', width: '100%', maxWidth: '340px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-gray-600)', marginBottom: '0.4rem' }}>
                        <span>10-yard</span><span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>from $349</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-gray-600)', marginBottom: '0.4rem' }}>
                        <span>15-yard</span><span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>from $399</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-gray-600)' }}>
                        <span>20-yard</span><span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>from $449</span>
                    </div>
                    <div style={{ borderTop: '1px solid var(--color-gray-100)', marginTop: '0.75rem', paddingTop: '0.75rem', fontSize: '0.78rem', color: 'var(--color-gray-400)' }}>
                        ✅ Delivery + pickup included &nbsp;·&nbsp; ✅ No hidden fees
                    </div>
                </div>

                <a
                    href={SURVCART_URL}
                    style={{
                        display: 'block',
                        width: '100%',
                        maxWidth: '340px',
                        padding: '1.1rem',
                        background: 'var(--color-secondary)',
                        color: 'var(--color-gray-900)',
                        borderRadius: '12px',
                        fontWeight: 800,
                        fontSize: '1.1rem',
                        textDecoration: 'none',
                        marginBottom: '0.75rem',
                    }}
                >
                    📅 Book Online Now →
                </a>
                <a
                    href="tel:6013167891"
                    style={{
                        display: 'block',
                        width: '100%',
                        maxWidth: '340px',
                        padding: '1rem',
                        background: 'transparent',
                        color: 'var(--color-primary)',
                        border: '2px solid var(--color-primary)',
                        borderRadius: '12px',
                        fontWeight: 700,
                        fontSize: '1rem',
                        textDecoration: 'none',
                    }}
                >
                    📞 Call 601-316-7891
                </a>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-gray-400)', marginTop: '1rem' }}>
                    Same-day delivery available · 7 days a week
                </p>
            </div>
        )
    }

    // Desktop: full iframe embed
    return (
        <div style={{ width: '100%', background: 'white' }}>
            <iframe
                src={SURVCART_URL}
                style={{
                    border: 'none',
                    display: 'block',
                    width: '100%',
                    height: '2200px',
                } as React.CSSProperties}
                title="Book a Dumpster Rental Online – Mid South Dumpster Rentals"
                loading="eager"
                allowFullScreen
            />
        </div>
    )
}
