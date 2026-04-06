'use client'

// Survcart is designed as a popup/modal system — their embed.js script
// (already loaded in page.tsx) will bind to any element with class
// "survcart-embed-presenter" and open the full booking flow as an overlay.
// This is far cleaner than forcing the iframe inline.

export default function BookingIframe() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '3rem 1.5rem 5rem',
            background: 'linear-gradient(160deg, #f0fdff 0%, #ffffff 60%)',
            textAlign: 'center',
        }}>
            <div style={{ display: 'inline-block', background: 'var(--color-primary)', color: 'white', borderRadius: '999px', padding: '0.35rem 1rem', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.05em' }}>
                FLAT-RATE · SAME-DAY AVAILABLE · NO HIDDEN FEES
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-gray-900)', marginBottom: '0.5rem' }}>
                Reserve Your Dumpster Online
            </h2>
            <p style={{ color: 'var(--color-gray-500)', marginBottom: '2rem', fontSize: '1rem', maxWidth: '440px' }}>
                Book in under 60 seconds. Delivery + pickup + disposal all included.
            </p>

            {/* Pricing cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', width: '100%', maxWidth: '520px', marginBottom: '2rem' }}>
                {[
                    { size: '10-Yard', trucks: '4 truck loads', from: '$349' },
                    { size: '15-Yard', trucks: '6 truck loads', from: '$399', popular: true },
                    { size: '20-Yard', trucks: '8 truck loads', from: '$449' },
                ].map((item) => (
                    <div key={item.size} style={{
                        background: item.popular ? 'var(--color-primary)' : 'white',
                        borderRadius: '14px',
                        padding: '1rem 0.75rem',
                        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
                        position: 'relative',
                    }}>
                        {item.popular && (
                            <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-secondary)', color: 'var(--color-gray-900)', borderRadius: '999px', padding: '0.15rem 0.6rem', fontSize: '0.65rem', fontWeight: 800, whiteSpace: 'nowrap' }}>
                                ⭐ MOST POPULAR
                            </div>
                        )}
                        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: item.popular ? 'white' : 'var(--color-gray-800)', marginBottom: '0.2rem' }}>
                            {item.size}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: item.popular ? 'rgba(255,255,255,0.8)' : 'var(--color-gray-400)', marginBottom: '0.5rem' }}>
                            {item.trucks}
                        </div>
                        <div style={{ fontSize: '1.3rem', fontWeight: 900, color: item.popular ? 'white' : 'var(--color-primary)' }}>
                            {item.from}
                        </div>
                        <div style={{ fontSize: '0.65rem', color: item.popular ? 'rgba(255,255,255,0.7)' : 'var(--color-gray-400)' }}>
                            starting
                        </div>
                    </div>
                ))}
            </div>

            {/* Survcart popup trigger — their embed.js binds to this class automatically */}
            <button
                className="survcart-embed-presenter"
                style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '420px',
                    padding: '1.2rem',
                    background: 'var(--color-secondary)',
                    color: 'var(--color-gray-900)',
                    border: 'none',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '1.15rem',
                    cursor: 'pointer',
                    marginBottom: '0.75rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                }}
            >
                📅 Book Now
            </button>

            <a
                href="tel:6013167891"
                style={{
                    display: 'inline-block',
                    padding: '0.45rem 1.1rem',
                    background: 'transparent',
                    color: 'var(--color-gray-400)',
                    border: '1px solid #d1d5db',
                    borderRadius: '999px',
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    textDecoration: 'none',
                    marginBottom: '1.5rem',
                    letterSpacing: '0.01em',
                }}
            >
                📞 Or call 601-316-7891
            </a>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', maxWidth: '420px' }}>
                {['✅ Delivery included', '✅ Pickup included', '✅ Same-day available', '✅ 7 days a week', '✅ No hidden fees'].map(t => (
                    <span key={t} style={{ background: '#f0fdff', color: 'var(--color-primary-dark)', border: '1px solid #bae6fd', borderRadius: '999px', padding: '0.3rem 0.75rem', fontSize: '0.78rem', fontWeight: 600 }}>
                        {t}
                    </span>
                ))}
            </div>
        </div>
    )
}
