'use client'

import React, { useState, useEffect } from 'react'

export default function RevenueContent({ pin }: { pin: string }) {
    const [html, setHtml] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchRevenue = async () => {
            try {
                const res = await fetch('/api/admin/revenue', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ pin })
                })
                const data = await res.json()
                if (data.success) {
                    setHtml(data.html)
                } else {
                    setError('Failed to load revenue dashboard.')
                }
            } catch (err) {
                console.error('Failed to load revenue', err)
                setError('Connection error')
            } finally {
                setLoading(false)
            }
        }
        fetchRevenue()
    }, [pin])

    if (loading) {
        return (
            <div style={{ padding: '60px', textAlign: 'center', color: '#888', fontFamily: 'Inter, system-ui, sans-serif' }}>
                Decrypting financial data...
            </div>
        )
    }

    if (error || !html) {
        return (
            <div style={{ padding: '60px', textAlign: 'center', color: '#ff4d4d', fontFamily: 'Inter, system-ui, sans-serif' }}>
                {error || 'Unable to load dashboard.'}
            </div>
        )
    }

    return (
        <div style={{ width: '100%', height: '100vh', background: '#0d1117' }}>
            <iframe 
                srcDoc={html} 
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Revenue Dashboard"
            />
        </div>
    )
}
