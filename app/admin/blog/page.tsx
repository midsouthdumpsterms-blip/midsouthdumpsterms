'use client'

import React, { useState, useEffect } from 'react'

interface Post {
    id: number;
    title: string;
    slug: string;
    status: string;
    created_at: string;
}

export default function AdminBlogPage() {
    const [pin, setPin] = useState('')
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

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
                setPosts(data.posts)
            } else {
                setError('Invalid PIN. Please try again.')
            }
        } catch (err) {
            setError('Connection error')
        } finally {
            setLoading(false)
        }
    }

    const deletePost = async (id: number) => {
        if (!confirm('Are you sure you want to permanently delete this post?')) return;
        
        try {
            const res = await fetch('/api/admin/delete-post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, pin })
            })
            if (res.ok) {
                setPosts(prev => prev.filter(p => p.id !== id))
            }
        } catch (err) {
            console.error('Delete failed')
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
                    <h1 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>Admin Login</h1>
                    <p style={{ color: '#888', marginBottom: '32px', fontSize: '14px' }}>Please enter your PIN to access the Blog Manager.</p>
                    
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
                        style={{
                            width: '100%',
                            padding: '16px',
                            backgroundColor: '#E34F26',
                            color: 'white',
                            border: 'none',
                            borderRadius: '12px',
                            fontWeight: '800',
                            fontSize: '16px',
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                        }}
                    >
                        Access Blog Manager
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#0a0a0a',
            color: 'white',
            fontFamily: 'Inter, system-ui, sans-serif',
            padding: '40px 20px'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <div>
                        <h1 style={{ fontSize: '32px', fontWeight: '900', margin: 0, color: '#E34F26' }}>
                            Blog Manager
                        </h1>
                        <p style={{ color: '#888', marginTop: '4px' }}>Manage AI-generated blog posts for Mid South Dumpster Rentals</p>
                    </div>
                    <button onClick={() => window.location.reload()} style={{ padding: '8px 16px', border: '1px solid #333', background: 'transparent', color: '#888', borderRadius: '8px', cursor: 'pointer' }}>Refresh</button>
                </header>

                <div style={{ 
                    backgroundColor: '#1a1a1a', 
                    borderRadius: '24px', 
                    border: '1px solid #333',
                    overflow: 'hidden'
                }}>
                    
                    {loading ? (
                        <div style={{ padding: '40px', textAlign: 'center', color: '#888' }}>Loading posts...</div>
                    ) : posts.length === 0 ? (
                        <div style={{ padding: '40px', textAlign: 'center', color: '#888' }}>No blog posts found.</div>
                    ) : (
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid #333', background: '#222' }}>
                                        <th style={thStyle}>Date Generated</th>
                                        <th style={thStyle}>Title</th>
                                        <th style={thStyle}>Status</th>
                                        <th style={thStyle}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map((post) => (
                                        <tr key={post.id} style={{ borderBottom: '1px solid #222', transition: 'background 0.2s' }}>
                                            <td style={tdStyle}>
                                                <span style={{ fontSize: '14px', color: '#888' }}>
                                                    {new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </span>
                                            </td>
                                            <td style={tdStyle}>
                                                <div style={{ fontWeight: '700', fontSize: '15px' }}>{post.title}</div>
                                                <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>/{post.slug}</div>
                                            </td>
                                            <td style={tdStyle}>
                                                <span style={{
                                                    display: 'inline-block',
                                                    padding: '4px 10px',
                                                    borderRadius: '99px',
                                                    fontSize: '11px',
                                                    fontWeight: '800',
                                                    backgroundColor: post.status === 'PUBLISHED' ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255, 165, 0, 0.1)',
                                                    color: post.status === 'PUBLISHED' ? '#00ff88' : '#ffa500',
                                                    border: `1px solid ${post.status === 'PUBLISHED' ? '#00ff88' : '#ffa500'}44`,
                                                    letterSpacing: '0.5px'
                                                }}>
                                                    {post.status}
                                                </span>
                                            </td>
                                            <td style={tdStyle}>
                                                <div style={{ display: 'flex', gap: '10px' }}>
                                                    <a 
                                                        href={`/admin/preview/${post.slug}`} 
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        style={{ 
                                                            padding: '6px 12px', 
                                                            background: '#333', 
                                                            color: 'white', 
                                                            textDecoration: 'none',
                                                            borderRadius: '6px',
                                                            fontSize: '13px',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        Preview
                                                    </a>
                                                    <button 
                                                        onClick={() => deletePost(post.id)}
                                                        style={{ 
                                                            padding: '6px 12px', 
                                                            background: 'rgba(255, 77, 77, 0.1)', 
                                                            color: '#ff4d4d', 
                                                            border: '1px solid rgba(255, 77, 77, 0.3)',
                                                            borderRadius: '6px',
                                                            fontSize: '13px',
                                                            fontWeight: '600',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
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
