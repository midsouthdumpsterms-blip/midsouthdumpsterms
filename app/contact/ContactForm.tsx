'use client'

import { useState } from 'react'
import styles from './contact.module.css'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })
    const [status, setStatus] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        try {
            const response = await fetch('https://formspree.io/f/xvzqewwa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', phone: '', message: '' })
            } else {
                setStatus('error')
                alert("There was a problem sending your message. Please try again or call us directly.")
            }
        } catch (error) {
            setStatus('error')
            alert("There was a problem sending your message. Please try again or call us directly.")
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Name *</label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="phone">Phone *</label>
                <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
                <p className={styles.successMessage}>Message sent! We'll be in touch soon.</p>
            )}
        </form>
    )
}
