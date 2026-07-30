import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/get-a-quote' },
    title: 'Get an Instant Dumpster Quote',
    description:
        'Our automated quote tool is undergoing a scheduled upgrade. For an instant, personalized dumpster rental quote, please call us at 601-316-7891.',
}

export default function GetAQuotePage() {
    return (
        <div style={{ minHeight: '80vh', background: 'linear-gradient(160deg, #f0fdff 0%, #ffffff 60%)', padding: '6rem 1rem' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ display: 'inline-block', background: 'var(--color-primary)', color: 'white', borderRadius: '999px', padding: '0.35rem 1rem', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
                    TOOL TEMPORARILY OFFLINE
                </div>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-gray-900)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                    Our Quote Tool is Getting an Upgrade
                </h1>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                    Our automated quote tool is currently undergoing a scheduled upgrade to better serve you.
                </p>
                
                <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: '2.5rem', border: '1px solid var(--color-gray-100)' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-primary)' }}>
                        Need an Instant Quote?
                    </h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--color-gray-700)' }}>
                        Don&apos;t wait! Call us directly and we&apos;ll give you a flat-rate quote over the phone in less than 60 seconds.
                    </p>
                    <a 
                        href="tel:6013167891" 
                        style={{ 
                            display: 'block', 
                            background: 'var(--color-secondary)', 
                            color: 'var(--color-gray-900)', 
                            padding: '1.25rem', 
                            borderRadius: '12px', 
                            fontWeight: 800, 
                            fontSize: '1.5rem', 
                            textDecoration: 'none',
                            boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)',
                            marginBottom: '1rem'
                        }}
                    >
                        📞 Call 601-316-7891
                    </a>
                    <Link 
                        href="/" 
                        style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline', fontSize: '1rem' }}
                    >
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </div>
    )
}
