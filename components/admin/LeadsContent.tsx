'use client'

import React, { useState, useEffect } from 'react'
import { Lead } from '@/lib/db'

export default function LeadsContent({ pin }: { pin: string }) {
    const [leads, setLeads] = useState<Lead[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const res = await fetch('/api/admin/get-leads', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ pin })
                })
                const data = await res.json()
                if (data.success) {
                    setLeads(data.leads)
                }
            } catch (err) {
                console.error('Failed to load leads', err)
            } finally {
                setLoading(false)
            }
        }
        fetchLeads()
    }, [pin])

    const updateStatus = async (id: number, status: Lead['status']) => {
        try {
            const res = await fetch('/api/admin/update-status', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status, pin })
            })
            if (res.ok) {
                setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l))
            }
        } catch (err) {
            console.error('Update failed')
        }
    }

    const stats = {
        total: leads.length,
        potential: leads.reduce((acc, curr) => acc + (parseInt(curr.price.replace(/\D/g, '')) || 349), 0),
        new: leads.filter(l => l.status === 'new').length
    }

    return (
        <div style={{
            fontFamily: 'Inter, system-ui, sans-serif',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <div>
                        <h1 style={{ fontSize: '32px', fontWeight: '900', margin: 0, background: 'linear-gradient(to right, #0fbfdf, #0a92ad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Lead Command Center
                        </h1>
                        <p style={{ color: '#888', marginTop: '4px' }}>Real-time quote tracking for Mid South Dumpster Rentals</p>
                    </div>
                    <button onClick={() => window.location.reload()} style={{ padding: '8px 16px', border: '1px solid #333', background: 'transparent', color: '#888', borderRadius: '8px', cursor: 'pointer' }}>Refresh</button>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                    <StatCard label="Total Leads" value={stats.total} icon="📊" color="#0fbfdf" />
                    <StatCard label="Pending Review" value={stats.new} icon="🚨" color="#ff4d4d" />
                    <StatCard label="Est. Potential Revenue" value={`$${stats.potential.toLocaleString()}`} icon="💰" color="#00ff88" />
                </div>

                <div style={{ 
                    backgroundColor: '#1a1a1a', 
                    borderRadius: '24px', 
                    border: '1px solid #333',
                    overflow: 'hidden'
                }}>
                    <div style={{ padding: '24px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
                        <h2 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>Recent Activity</h2>
                    </div>
                    
                    {loading ? (
                        <div style={{ padding: '40px', textAlign: 'center', color: '#888' }}>Loading leads...</div>
                    ) : leads.length === 0 ? (
                        <div style={{ padding: '40px', textAlign: 'center', color: '#888' }}>No leads found yet. Time to market! 🚀</div>
                    ) : (
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid #333', background: '#222' }}>
                                        <th style={thStyle}>Date</th>
                                        <th style={thStyle}>Customer</th>
                                        <th style={thStyle}>Details</th>
                                        <th style={thStyle}>Location</th>
                                        <th style={thStyle}>Quote</th>
                                        <th style={thStyle}>Status</th>
                                        <th style={thStyle}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leads.map((lead) => (
                                        <tr key={lead.id} style={{ borderBottom: '1px solid #222', transition: 'background 0.2s' }}>
                                            <td style={tdStyle}>
                                                <span style={{ fontSize: '12px', color: '#888' }}>
                                                    {new Date(lead.created_at!).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            </td>
                                            <td style={tdStyle}>
                                                <div style={{ fontWeight: '700' }}>{lead.name}</div>
                                                <a href={`tel:${lead.phone}`} style={{ color: '#0fbfdf', textDecoration: 'none', fontSize: '13px' }}>{lead.phone}</a>
                                            </td>
                                            <td style={tdStyle}>
                                                <div style={{ fontSize: '13px' }}>{lead.size}-Yard</div>
                                                <div style={{ fontSize: '11px', color: '#888' }}>{lead.project}</div>
                                            </td>
                                            <td style={tdStyle}>{lead.city}</td>
                                            <td style={tdStyle}>
                                                <div style={{ fontWeight: '700', color: '#00ff88' }}>{lead.price}</div>
                                                <div style={{ fontSize: '11px', color: '#888' }}>{lead.timeline}</div>
                                            </td>
                                            <td style={tdStyle}>
                                                <StatusBadge status={lead.status} />
                                            </td>
                                            <td style={tdStyle}>
                                                <select 
                                                    value={lead.status} 
                                                    onChange={(e) => updateStatus(lead.id!, e.target.value as any)}
                                                    style={{ 
                                                        padding: '4px 8px', 
                                                        background: '#333', 
                                                        color: 'white', 
                                                        border: '1px solid #444',
                                                        borderRadius: '6px',
                                                        fontSize: '12px'
                                                    }}
                                                >
                                                    <option value="new">Mark New</option>
                                                    <option value="contacted">Contacted</option>
                                                    <option value="booked">Booked</option>
                                                    <option value="completed">Completed</option>
                                                    <option value="archived">Archive</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

function StatCard({ label, value, icon, color }: { label: string, value: string | number, icon: string, color: string }) {
    return (
        <div style={{ background: '#1a1a1a', padding: '24px', borderRadius: '20px', border: '1px solid #333' }}>
            <div style={{ fontSize: '24px', marginBottom: '12px' }}>{icon}</div>
            <div style={{ fontSize: '13px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{label}</div>
            <div style={{ fontSize: '28px', fontWeight: '900', color: color, marginTop: '4px' }}>{value}</div>
        </div>
    )
}

function StatusBadge({ status }: { status: Lead['status'] }) {
    const config = {
        new: { bg: 'rgba(255, 77, 77, 0.1)', color: '#ff4d4d', label: 'NEW' },
        contacted: { bg: 'rgba(255, 165, 0, 0.1)', color: '#ffa500', label: 'CONTACTED' },
        booked: { bg: 'rgba(0, 255, 136, 0.1)', color: '#00ff88', label: 'BOOKED' },
        completed: { bg: 'rgba(128, 128, 128, 0.1)', color: '#888', label: 'COMPLETED' },
        archived: { bg: 'rgba(50, 50, 50, 0.1)', color: '#444', label: 'ARCHIVED' },
    }
    const { bg, color, label } = config[status] || config.new
    return (
        <span style={{
            display: 'inline-block',
            padding: '4px 10px',
            borderRadius: '99px',
            fontSize: '10px',
            fontWeight: '800',
            backgroundColor: bg,
            color: color,
            border: `1px solid ${color}44`,
            letterSpacing: '0.5px'
        }}>
            {label}
        </span>
    )
}

const thStyle: React.CSSProperties = {
    padding: '16px 24px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '1px'
}

const tdStyle: React.CSSProperties = {
    padding: '16px 24px',
    verticalAlign: 'middle'
}
