'use client'

import React, { useState, useEffect } from 'react'

interface Post {
    id: number;
    title: string;
    slug: string;
    status: string;
    created_at: string;
}

export default function BlogContent({ pin }: { pin: string }) {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('/api/admin/get-posts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ pin })
                })
                const data = await res.json()
                if (data.success) {
                    setPosts(data.posts)
                }
            } catch (err) {
                console.error('Failed to load posts', err)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [pin])

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

    return (
        <div style={{
            fontFamily: 'Inter, system-ui, sans-serif',
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
                                                <div style={{ fontWeight: '700', fontSize: '15px', color: 'white' }}>{post.title}</div>
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
                                                        href={`/situationroom/preview/${post.slug}`} 
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
