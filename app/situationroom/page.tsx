'use client'

import React, { useState } from 'react'
import LeadsContent from '@/components/admin/LeadsContent'
import BlogContent from '@/components/admin/BlogContent'
import RevenueContent from '@/components/admin/RevenueContent'

type Tab = 'leads' | 'blog' | 'revenue'

export default function SituationRoomPage() {
    const [pin, setPin] = useState('')
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [activeTab, setActiveTab] = useState<Tab>('leads')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    // We use get-posts as a lightweight way to verify the PIN
    const checkPin = async () => {
        setLoading(true)
        setError('')
        try {
            const res = await fetch('/api/admin/get-posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pin })
            })
            const data = await res.json()
            if (data.success) {
                setIsAuthorized(true)
            } else {
                setError('Invalid PIN. Access Denied.')
            }
        } catch (err) {
            setError('Connection error')
        } finally {
            setLoading(false)
        }
    }

    if (!isAuthorized) {
        return (
            <div style={{
                minHeight: '100vh',
                backgroundColor: '#0a0a0a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                fontFamily: 'Inter, system-ui, sans-serif',
                color: 'white'
            }}>
                <div style={{
                    backgroundColor: '#1a1a1a',
                    padding: '40px',
                    borderRadius: '24px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    width: '100%',
                    maxWidth: '400px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔐</div>
                    <h1 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>Command Center</h1>
                    <p style={{ color: '#888', marginBottom: '32px', fontSize: '14px' }}>Please enter your PIN to access the Situation Room.</p>
                    
                    <input 
                        type="password" 
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && checkPin()}
                        placeholder="Enter PIN"
                        style={{
                            width: '100%',
                            padding: '16px',
                            backgroundColor: '#000',
                            border: '1px solid #333',
                            borderRadius: '12px',
                            color: 'white',
                            fontSize: '24px',
                            textAlign: 'center',
                            letterSpacing: '8px',
                            outline: 'none',
                            marginBottom: '20px'
                        }}
                    />
                    
                    {error && <p style={{ color: '#ff4d4d', fontSize: '14px', marginBottom: '20px' }}>{error}</p>}
                    
                    <button 
                        onClick={checkPin}
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '16px',
                            backgroundColor: loading ? '#555' : '#0fbfdf',
                            color: 'white',
                            border: 'none',
                            borderRadius: '12px',
                            fontWeight: '800',
                            fontSize: '16px',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            transition: 'transform 0.2s',
                        }}
                    >
                        {loading ? 'Authenticating...' : 'Access Authorized Dashboard'}
                    </button>
                    <p style={{ color: '#444', marginTop: '24px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Restricted Access
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
            {/* Navigation Bar */}
            <nav style={{
                backgroundColor: '#111',
                borderBottom: '1px solid #333',
                padding: '0 20px',
                position: 'sticky',
                top: 0,
                zIndex: 100
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
                    <div style={{ 
                        color: 'white', 
                        fontWeight: '800', 
                        fontSize: '18px', 
                        marginRight: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <span style={{ fontSize: '24px' }}>🛡️</span> Situation Room
                    </div>
                    
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <TabButton 
                            active={activeTab === 'leads'} 
                            onClick={() => setActiveTab('leads')}
                            label="Leads Dashboard"
                            icon="📊"
                        />
                        <TabButton 
                            active={activeTab === 'blog'} 
                            onClick={() => setActiveTab('blog')}
                            label="Blog Manager"
                            icon="✍️"
                        />
                        <TabButton 
                            active={activeTab === 'revenue'} 
                            onClick={() => setActiveTab('revenue')}
                            label="Revenue Dashboard"
                            icon="💰"
                        />
                    </div>
                </div>
            </nav>

            {/* Tab Content Area */}
            <main style={{ minHeight: 'calc(100vh - 61px)' }}>
                {activeTab === 'leads' && <LeadsContent pin={pin} />}
                {activeTab === 'blog' && <BlogContent pin={pin} />}
                {activeTab === 'revenue' && <RevenueContent pin={pin} />}
            </main>
        </div>
    )
}

function TabButton({ active, onClick, label, icon }: { active: boolean, onClick: () => void, label: string, icon: string }) {
    return (
        <button 
            onClick={onClick}
            style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: active ? '#fff' : '#888',
                padding: '20px 16px',
                fontSize: '14px',
                fontWeight: active ? '700' : '500',
                cursor: 'pointer',
                borderBottom: `3px solid ${active ? '#0fbfdf' : 'transparent'}`,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s'
            }}
        >
            <span style={{ fontSize: '16px' }}>{icon}</span>
            {label}
        </button>
    )
}
