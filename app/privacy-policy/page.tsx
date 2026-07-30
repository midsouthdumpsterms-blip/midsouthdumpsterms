import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/privacy-policy' },
    title: 'Privacy Policy',
    description: 'Privacy Policy for Mid South Dumpster Rentals, LLC. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
    const lastUpdated = 'April 4, 2026'

    return (
        <div style={{ background: 'white', minHeight: '80vh' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))', padding: '3rem 1rem', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>Privacy Policy</h1>
                    <p style={{ opacity: 0.85, margin: 0 }}>Last updated: {lastUpdated}</p>
                </div>
            </div>

            <div className="container" style={{ maxWidth: '800px', padding: '3rem 1.5rem' }}>
                <div style={{ lineHeight: 1.8, color: 'var(--color-gray-700)' }}>

                    <p>Mid South Dumpster Rentals, LLC ("we," "us," or "our") operates the website <strong>midsouthdumpsterms.com</strong> and provides dumpster rental services in Central Mississippi. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website or services.</p>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>1. Information We Collect</h2>
                    <p>We collect information you voluntarily provide to us, including:</p>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        <li><strong>Contact information:</strong> Name, phone number, and email address when you request a quote, book a service, or contact us.</li>
                        <li><strong>Project information:</strong> Project type, location, and timeline when you use our quote tool.</li>
                        <li><strong>Usage data:</strong> Standard web analytics including pages visited, time spent, and referring URLs (collected via analytics tools).</li>
                    </ul>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        <li>Provide you with a personalized dumpster rental quote</li>
                        <li>Contact you about your service inquiry or booking</li>
                        <li>Send you a one-time SMS quote when you request one through our quote tool</li>
                        <li>Respond to your questions and customer service requests</li>
                        <li>Improve our website and services</li>
                        <li>Comply with legal obligations</li>
                    </ul>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>3. SMS / Text Message Communications</h2>
                    <p>While our automated quote tool is undergoing a scheduled upgrade, we provide personalized quotes primarily via phone. By calling us at 601-316-7891 or optionally providing your number in a contact request, you consent to receive communications regarding your quote. Message and data rates may apply.</p>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        <li><strong>To opt out:</strong> Reply <strong>STOP</strong> to any text message you receive from us.</li>
                        <li><strong>For help:</strong> Reply <strong>HELP</strong> or call us at 601-316-7891.</li>
                        <li>We will not send recurring marketing text messages without your explicit consent.</li>
                        <li>We do not sell or share your phone number with third parties for marketing purposes.</li>
                    </ul>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>4. Information Sharing and Disclosure</h2>
                    <p>We do <strong>not</strong> sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:</p>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        <li><strong>Service providers:</strong> We use trusted third-party services (such as Twilio for SMS delivery and Resend for email) to operate our website and deliver communications. These providers are contractually prohibited from using your information for any other purpose.</li>
                        <li><strong>Legal requirements:</strong> We may disclose information if required by law or to protect the rights and safety of our business or customers.</li>
                    </ul>

                    {/* ServiceCore Platform Disclosure */}
                    <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '12px', padding: '1.25rem 1.5rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                        <div style={{ fontWeight: 700, color: '#0369a1', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>📄 Third-Party Booking Platform</div>
                        <p style={{ margin: '0 0 0.5rem' }}>When you book a dumpster rental through our online booking system, your information is processed by <strong>ServiceCore</strong>, our field service management and payment platform. ServiceCore maintains its own privacy practices governing data collected through their platform.</p>
                        <Link
                            href="/docs/servicecore-privacy-notice.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}
                        >
                            📥 View ServiceCore Privacy Notice (PDF)
                        </Link>
                    </div>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>5. Data Retention</h2>
                    <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, provide our services, and comply with legal obligations. Quote inquiry data is retained for up to 12 months.</p>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>6. Cookies and Analytics</h2>
                    <p>Our website may use cookies and similar tracking technologies to analyze traffic and improve user experience. You can control cookie settings through your browser. We use Google Analytics or similar tools to understand how visitors use our site — this data is aggregated and does not personally identify you.</p>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>7. Data Security</h2>
                    <p>We implement reasonable technical and administrative security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure.</p>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>8. Children&apos;s Privacy</h2>
                    <p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.</p>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>9. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        <li>Request access to the personal information we hold about you</li>
                        <li>Request correction or deletion of your personal information</li>
                        <li>Opt out of SMS communications at any time by replying STOP</li>
                    </ul>
                    <p>To exercise any of these rights, contact us at the information below.</p>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>10. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised &quot;Last updated&quot; date. Continued use of our website after changes constitutes acceptance of the updated policy.</p>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>11. Contact Us</h2>
                    <p>If you have questions about this Privacy Policy or how we handle your information, please contact us:</p>
                    <div style={{ background: 'var(--color-gray-50)', borderRadius: '10px', padding: '1.25rem 1.5rem', marginTop: '0.75rem' }}>
                        <p style={{ margin: '0 0 0.25rem' }}><strong>Mid South Dumpster Rentals, LLC</strong></p>
                        <p style={{ margin: '0 0 0.25rem' }}>3080 B John R Lynch St, Jackson, MS 39209</p>
                        <p style={{ margin: '0 0 0.25rem' }}>Phone: <a href="tel:6013167891" style={{ color: 'var(--color-primary)' }}>601-316-7891</a></p>
                        <p style={{ margin: 0 }}>Website: <a href="https://midsouthdumpsterms.com" style={{ color: 'var(--color-primary)' }}>midsouthdumpsterms.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
