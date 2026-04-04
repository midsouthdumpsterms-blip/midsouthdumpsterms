'use client'

import { useState } from 'react'
import Link from 'next/link'

const BOOKING_URL = 'https://midsouthdumpsterms.surcart.com'

type ProjectType = {
    id: string
    emoji: string
    label: string
    desc: string
    recommendedSize: '10' | '15' | '20'
    reason: string
}

const PROJECT_TYPES: ProjectType[] = [
    { id: 'roofing', emoji: '🏠', label: 'Roofing', desc: 'Tear-off, replacement, shingles', recommendedSize: '15', reason: 'Roofing shingles are heavy and bulky. Our 15-yard is the most popular choice for full roof tear-offs.' },
    { id: 'renovation', emoji: '🔨', label: 'Home Renovation', desc: 'Kitchen, bath, flooring, remodel', recommendedSize: '15', reason: 'Renovation debris adds up fast. The 15-yard handles demo waste from 1–2 rooms comfortably.' },
    { id: 'cleanout-small', emoji: '📦', label: 'Garage / Room Cleanout', desc: 'Garage, shed, single room', recommendedSize: '10', reason: 'Perfect for a garage or single-room cleanout. The 10-yard handles 4 pickup truck loads.' },
    { id: 'cleanout-large', emoji: '🏡', label: 'Full Property / Estate Cleanout', desc: 'Whole home, estate, rental property', recommendedSize: '20', reason: 'Whole-home and estate cleanouts need maximum capacity. The 20-yard handles 8 truck loads.' },
    { id: 'construction', emoji: '🏗️', label: 'New Construction', desc: 'New build, commercial, large demo', recommendedSize: '20', reason: 'New construction generates continuous debris. The 20-yard is the industry standard for job sites.' },
    { id: 'yard', emoji: '🌿', label: 'Yard / Storm Cleanup', desc: 'Brush, limbs, landscaping waste', recommendedSize: '10', reason: 'Yard waste and storm debris is light and bulky. A 10-yard handles most typical yard jobs perfectly.' },
    { id: 'major-reno', emoji: '🏚️', label: 'Major Renovation / Demo', desc: 'Gut job, full demo, addition', recommendedSize: '20', reason: 'Major gut jobs and additions produce the most debris. Go big with the 20-yard to avoid overflow.' },
    { id: 'other', emoji: '📋', label: 'Other / Not Sure', desc: "I'll describe my project", recommendedSize: '15', reason: 'When in doubt, the 15-yard is our most versatile size — it handles the widest variety of projects.' },
]

const SERVICE_CITIES = [
    'Jackson', 'Brandon', 'Madison', 'Clinton', 'Pearl', 'Ridgeland',
    'Flowood', 'Byram', 'Richland', 'Florence', 'Canton', 'Terry',
    'Raymond', 'Flora', 'Gluckstadt', 'Other / Rural Area',
]

const TIMELINE_OPTIONS = [
    { id: 'today', label: '🚀 Today', sub: 'Same-day delivery' },
    { id: 'tomorrow', label: '📅 Tomorrow', sub: 'Next-day delivery' },
    { id: 'this-week', label: '🗓️ This Week', sub: 'Within 7 days' },
    { id: 'planning', label: '🔮 Just Planning', sub: 'No rush yet' },
]

const SIZE_PRICING: Record<'10' | '15' | '20', { oneDay: string; threeDay: string; sevenDay: string; dims: string; capacity: string }> = {
    '10': { oneDay: '$349', threeDay: '$379', sevenDay: '$399', dims: '10ft × 7.5ft × 5ft', capacity: '4 pickup truck loads' },
    '15': { oneDay: '$399', threeDay: '$429', sevenDay: '$449', dims: '14ft × 7.5ft × 4ft', capacity: '6 pickup truck loads' },
    '20': { oneDay: '$449', threeDay: '$479', sevenDay: '$499', dims: '14ft × 7.5ft × 6.5ft', capacity: '8 pickup truck loads' },
}

export default function QuoteTool() {
    const [step, setStep] = useState(1)
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedTimeline, setSelectedTimeline] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const totalSteps = 4
    const progress = (step / totalSteps) * 100

    const formatPhone = (val: string) => {
        const digits = val.replace(/\D/g, '').slice(0, 10)
        if (digits.length <= 3) return digits
        if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
    }

    const handleSubmit = async () => {
        if (!name.trim() || phone.replace(/\D/g, '').length < 10) return
        setSubmitting(true)
        try {
            await fetch('/api/submit-quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    phone,
                    project: selectedProject?.label,
                    city: selectedCity,
                    timeline: selectedTimeline,
                    recommendedSize: selectedProject?.recommendedSize,
                }),
            })
        } catch {
            // silently fail — still show result
        }
        setSubmitting(false)
        setSubmitted(true)
        setStep(4)
    }

    const pricing = selectedProject ? SIZE_PRICING[selectedProject.recommendedSize] : null

    return (
        <div style={{ minHeight: '80vh', background: 'linear-gradient(160deg, #f0fdff 0%, #ffffff 60%)', padding: '3rem 1rem 5rem' }}>
            <div style={{ maxWidth: '680px', margin: '0 auto' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <div style={{ display: 'inline-block', background: 'var(--color-primary)', color: 'white', borderRadius: '999px', padding: '0.35rem 1rem', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                        FREE · NO OBLIGATION · 60 SECONDS
                    </div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-gray-900)', marginBottom: '0.5rem' }}>
                        Get Your Instant Dumpster Quote
                    </h1>
                    <p style={{ color: 'var(--color-gray-500)', fontSize: '1rem' }}>
                        Tell us about your project — we&apos;ll find the right size and price in 60 seconds.
                    </p>
                </div>

                {/* Progress Bar */}
                {step < 4 && (
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--color-gray-500)', marginBottom: '0.5rem' }}>
                            <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Step {step} of {totalSteps}</span>
                            <span>{Math.round(progress)}% complete</span>
                        </div>
                        <div style={{ height: '6px', background: 'var(--color-gray-200)', borderRadius: '999px', overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))', borderRadius: '999px', transition: 'width 0.4s ease' }} />
                        </div>
                    </div>
                )}

                {/* STEP 1 — Project Type */}
                {step === 1 && (
                    <div>
                        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-gray-800)' }}>
                            What&apos;s your project?
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
                            {PROJECT_TYPES.map((pt) => (
                                <button
                                    key={pt.id}
                                    onClick={() => { setSelectedProject(pt); setStep(2) }}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '1rem',
                                        background: selectedProject?.id === pt.id ? 'var(--color-primary)' : 'white',
                                        color: selectedProject?.id === pt.id ? 'white' : 'var(--color-gray-800)',
                                        border: `2px solid ${selectedProject?.id === pt.id ? 'var(--color-primary)' : 'var(--color-gray-200)'}`,
                                        borderRadius: '12px', padding: '1rem 1.25rem',
                                        cursor: 'pointer', textAlign: 'left',
                                        transition: 'all 0.15s ease',
                                        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                                    }}
                                >
                                    <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{pt.emoji}</span>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{pt.label}</div>
                                        <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{pt.desc}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* STEP 2 — City + Timeline */}
                {step === 2 && (
                    <div>
                        <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            ← Back
                        </button>
                        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-gray-800)' }}>
                            Where and when?
                        </h2>
                        <p style={{ color: 'var(--color-gray-500)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                            Great choice — <strong>{selectedProject?.label}</strong> projects are our specialty.
                        </p>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ fontWeight: 700, marginBottom: '0.5rem', display: 'block', color: 'var(--color-gray-700)' }}>
                                📍 What city / area?
                            </label>
                            <select
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '10px', border: '2px solid var(--color-gray-200)', fontSize: '1rem', appearance: 'none', background: 'white', cursor: 'pointer' }}
                            >
                                <option value="">Select your city...</option>
                                {SERVICE_CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ fontWeight: 700, marginBottom: '0.75rem', display: 'block', color: 'var(--color-gray-700)' }}>
                                🗓️ When do you need the dumpster?
                            </label>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                {TIMELINE_OPTIONS.map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => setSelectedTimeline(t.id)}
                                        style={{
                                            padding: '0.875rem', borderRadius: '10px', cursor: 'pointer',
                                            border: `2px solid ${selectedTimeline === t.id ? 'var(--color-primary)' : 'var(--color-gray-200)'}`,
                                            background: selectedTimeline === t.id ? '#f0fdff' : 'white',
                                            transition: 'all 0.15s ease', textAlign: 'left',
                                        }}
                                    >
                                        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-gray-800)' }}>{t.label}</div>
                                        <div style={{ fontSize: '0.78rem', color: 'var(--color-gray-500)' }}>{t.sub}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => setStep(3)}
                            disabled={!selectedCity || !selectedTimeline}
                            style={{
                                width: '100%', padding: '1rem', borderRadius: '10px',
                                background: selectedCity && selectedTimeline ? 'var(--color-primary)' : 'var(--color-gray-200)',
                                color: selectedCity && selectedTimeline ? 'white' : 'var(--color-gray-400)',
                                border: 'none', fontWeight: 700, fontSize: '1.05rem', cursor: selectedCity && selectedTimeline ? 'pointer' : 'not-allowed',
                                transition: 'all 0.15s ease',
                            }}
                        >
                            Continue →
                        </button>
                    </div>
                )}

                {/* STEP 3 — Lead Capture */}
                {step === 3 && (
                    <div>
                        <button onClick={() => setStep(2)} style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            ← Back
                        </button>

                        {/* Teaser card */}
                        <div style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))', borderRadius: '14px', padding: '1.25rem 1.5rem', marginBottom: '1.75rem', color: 'white' }}>
                            <div style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.85, letterSpacing: '0.05em', marginBottom: '0.35rem' }}>YOUR RECOMMENDATION IS READY</div>
                            <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>
                                {selectedProject?.recommendedSize}-Yard Dumpster
                            </div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.9, marginTop: '0.25rem' }}>
                                Starting at {pricing?.oneDay} · {selectedCity}
                            </div>
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: '0.75rem', paddingTop: '0.75rem', fontSize: '0.82rem', opacity: 0.85 }}>
                                🔒 Enter your info below to unlock your full quote
                            </div>
                        </div>

                        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--color-gray-800)' }}>
                            Where should we send your quote?
                        </h2>
                        <p style={{ color: 'var(--color-gray-500)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                            We&apos;ll text your personalized quote so you have it handy.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                            <input
                                type="text"
                                placeholder="Your first name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{ padding: '0.875rem 1rem', borderRadius: '10px', border: '2px solid var(--color-gray-200)', fontSize: '1rem', outline: 'none' }}
                            />
                            <input
                                type="tel"
                                placeholder="Phone number (601) 000-0000"
                                value={phone}
                                onChange={(e) => setPhone(formatPhone(e.target.value))}
                                style={{ padding: '0.875rem 1rem', borderRadius: '10px', border: '2px solid var(--color-gray-200)', fontSize: '1rem', outline: 'none' }}
                            />
                        </div>

                        <p style={{ fontSize: '0.75rem', color: 'var(--color-gray-400)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                            By continuing, you agree to be contacted by Mid South Dumpster Rentals about your quote. We never spam.
                        </p>

                        <button
                            onClick={handleSubmit}
                            disabled={!name.trim() || phone.replace(/\D/g, '').length < 10 || submitting}
                            style={{
                                width: '100%', padding: '1.1rem', borderRadius: '10px',
                                background: name.trim() && phone.replace(/\D/g, '').length >= 10 ? 'var(--color-secondary)' : 'var(--color-gray-200)',
                                color: name.trim() && phone.replace(/\D/g, '').length >= 10 ? 'var(--color-gray-900)' : 'var(--color-gray-400)',
                                border: 'none', fontWeight: 800, fontSize: '1.1rem',
                                cursor: name.trim() && phone.replace(/\D/g, '').length >= 10 ? 'pointer' : 'not-allowed',
                                transition: 'all 0.15s ease',
                            }}
                        >
                            {submitting ? 'Sending...' : '🎯 Get My Instant Quote →'}
                        </button>
                    </div>
                )}

                {/* STEP 4 — Results */}
                {step === 4 && selectedProject && pricing && (
                    <div>
                        {/* Success banner */}
                        <div style={{ background: '#dcfce7', border: '2px solid #16a34a', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ fontSize: '1.4rem' }}>✅</span>
                            <div>
                                <div style={{ fontWeight: 700, color: '#15803d' }}>Quote sent to {phone}!</div>
                                <div style={{ fontSize: '0.85rem', color: '#166534' }}>Our team will follow up shortly — or book instantly below.</div>
                            </div>
                        </div>

                        {/* Recommendation card */}
                        <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.10)', overflow: 'hidden', marginBottom: '1.5rem' }}>
                            <div style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))', padding: '1.5rem', color: 'white' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.85, letterSpacing: '0.06em' }}>YOUR PERSONALIZED RECOMMENDATION</div>
                                <div style={{ fontSize: '2rem', fontWeight: 900, margin: '0.25rem 0' }}>
                                    {selectedProject.recommendedSize}-Yard Dumpster
                                </div>
                                <div style={{ opacity: 0.9, fontSize: '0.95rem' }}>{selectedProject.reason}</div>
                            </div>

                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
                                    {[['1 Day', pricing.oneDay], ['3 Days', pricing.threeDay], ['7 Days', pricing.sevenDay]].map(([label, price]) => (
                                        <div key={label} style={{ background: 'var(--color-gray-50)', borderRadius: '10px', padding: '0.875rem', textAlign: 'center' }}>
                                            <div style={{ fontSize: '0.78rem', color: 'var(--color-gray-500)', fontWeight: 600 }}>{label}</div>
                                            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary)' }}>{price}</div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {[
                                        `📐 ${pricing.dims}`,
                                        `🚛 ${pricing.capacity}`,
                                        '✅ Delivery + pickup included',
                                        '✅ No hidden fees',
                                        '✅ Same-day available',
                                    ].map((item) => (
                                        <span key={item} style={{ background: '#f0fdff', color: 'var(--color-primary-dark)', border: '1px solid #bae6fd', borderRadius: '999px', padding: '0.3rem 0.75rem', fontSize: '0.8rem', fontWeight: 600 }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={BOOKING_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'block', width: '100%', padding: '1.1rem', textAlign: 'center', background: 'var(--color-secondary)', color: 'var(--color-gray-900)', borderRadius: '10px', fontWeight: 800, fontSize: '1.1rem', textDecoration: 'none', marginBottom: '0.75rem', boxSizing: 'border-box' }}
                                >
                                    📅 Book Online Now
                                </a>
                                <a
                                    href="tel:6013167891"
                                    style={{ display: 'block', width: '100%', padding: '1rem', textAlign: 'center', background: 'transparent', color: 'var(--color-primary)', border: '2px solid var(--color-primary)', borderRadius: '10px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', boxSizing: 'border-box' }}
                                >
                                    📞 Call 601-316-7891
                                </a>
                            </div>
                        </div>

                        {/* Also consider */}
                        <div style={{ background: 'var(--color-gray-50)', borderRadius: '12px', padding: '1.25rem', marginBottom: '1.5rem' }}>
                            <div style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-gray-700)' }}>Compare all sizes:</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {(['10', '15', '20'] as const).map((s) => (
                                    <Link key={s} href={`/sizes/${s}-yard-dumpster-rental`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0.875rem', background: 'white', borderRadius: '8px', textDecoration: 'none', color: 'var(--color-gray-800)', border: s === selectedProject.recommendedSize ? '2px solid var(--color-primary)' : '1px solid var(--color-gray-200)', fontWeight: s === selectedProject.recommendedSize ? 700 : 400 }}>
                                        <span>{s}-Yard {s === selectedProject.recommendedSize ? '⭐ Recommended' : ''}</span>
                                        <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>From {SIZE_PRICING[s].oneDay}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-gray-400)' }}>
                            Prices include delivery, pickup, and disposal. Serving {selectedCity} and all of Central MS.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
