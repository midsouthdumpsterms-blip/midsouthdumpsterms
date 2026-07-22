'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ApproveButton({ slug }: { slug: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleApprove = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      });
      
      if (res.ok) {
        alert('Article Approved and Published Successfully!');
        router.push(`/blog/${slug}`); // redirect to the live blog page
      } else {
        alert('Failed to approve article');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', background: '#f8f9fa', borderBottom: '2px solid #e9ecef', textAlign: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
      <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>This is a DRAFT preview. It is not public yet.</p>
      <button 
        onClick={handleApprove} 
        disabled={loading}
        style={{ 
          background: '#E34F26', color: 'white', padding: '12px 24px', 
          border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold',
          cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1
        }}
      >
        {loading ? 'Publishing...' : 'Approve & Publish to Blog'}
      </button>
    </div>
  );
}
