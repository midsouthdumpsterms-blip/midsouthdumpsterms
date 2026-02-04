'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import styles from './contact.module.css'

export default function Contact() {
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
            const response = await fetch('https://formspree.io/f/midsouthdumpsterms@gmail.com', {
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
        <>
            <section className={styles.heroSection}>
                <div className="container">
                    <h1>Contact Us</h1>
                    <p className={styles.heroSubtext}>
                        Get in touch with Mid South Dumpster Rentals
                    </p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2>Send Us a Message</h2>
                            <p>Have questions about our dumpster rental services? Fill out the form and we'll get back to you promptly.</p>

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
                        </div>

                        <div>
                            <h2>Contact Information</h2>
                            <div className={styles.contactInfo}>
                                <div className={styles.contactItem}>
                                    <h3>📞 Phone</h3>
                                    <p><a href="tel:6013167891">601-316-7891</a></p>
                                    <p className={styles.subtext}>Click to call</p>
                                </div>

                                <div className={styles.contactItem}>
                                    <h3>🕐 Hours</h3>
                                    <p>7:00 AM - 7:00 PM</p>
                                    <p className={styles.subtext}>7 Days a Week</p>
                                </div>

                                <div className={styles.contactItem}>
                                    <h3>📍 Address</h3>
                                    <p>3080 B John R Lynch St<br />Jackson, MS 39209</p>
                                    <a
                                        href="https://www.google.com/maps?q=3080+B+John+R+Lynch+St,+Jackson,+MS+39209"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.mapLink}
                                    >
                                        Get Directions →
                                    </a>
                                </div>

                                <div className={styles.contactItem}>
                                    <h3>🌐 Service Area</h3>
                                    <p>Central Mississippi</p>
                                    <a href="/service-areas" className={styles.mapLink}>
                                        View All Cities →
                                    </a>
                                </div>
                            </div>

                            <div className={styles.quickBook}>
                                <h3>Ready to Book?</h3>
                                <p>Skip the form and book your dumpster online now!</p>
                                <a
                                    href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                    style={{ width: '100%' }}
                                >
                                    Book Online Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
