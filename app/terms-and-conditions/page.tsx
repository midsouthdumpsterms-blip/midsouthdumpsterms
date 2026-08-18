import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/terms-and-conditions' },
    title: 'Terms and Conditions',
    description:
        'The terms governing use of the Mid South Dumpster Rentals website and the booking of roll-off dumpster rentals in Central Mississippi.',
    openGraph: {
        type: 'website',
        siteName: 'Mid South Dumpster Rentals',
        title: 'Terms and Conditions',
        description: 'The terms governing use of the Mid South Dumpster Rentals website and the booking of roll-off dumpster rentals in Central Mississippi.',
        url: 'https://midsouthdumpsterms.com/terms-and-conditions',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

export default function TermsPage() {
    const lastUpdated = 'April 4, 2026'

    return (
        <div style={{ background: 'white', minHeight: '80vh' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))', padding: '3rem 1rem', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>Terms and Conditions</h1>
                    <p style={{ opacity: 0.85, margin: 0 }}>Last updated: {lastUpdated}</p>
                </div>
            </div>

            <div className="container" style={{ maxWidth: '800px', padding: '3rem 1.5rem' }}>
                <div style={{ lineHeight: 1.8, color: 'var(--color-gray-700)' }}>

                    <p>These Terms and Conditions govern your use of the Mid South Dumpster Rentals, LLC website (<strong>midsouthdumpsterms.com</strong>) and our dumpster rental services. By using our website or services, you agree to these terms.</p>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>1. Services</h2>
                    <p>Mid South Dumpster Rentals, LLC provides roll-off dumpster rental services in Central Mississippi, including Hinds, Madison, and Rankin Counties. Available container sizes include 10, 15, and 20 cubic yards. Service availability is subject to geographic coverage and scheduling.</p>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>2. SMS Messaging Terms</h2>
                    <p><strong>Program name:</strong> Mid South Dumpster Rentals Quote Notifications</p>
                    <p><strong>Program description:</strong> When you submit your phone number through our quote request form, you will receive a one-time SMS message containing your personalized dumpster rental quote, recommended size, and pricing.</p>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        <li><strong>Message frequency:</strong> One message per quote request submission.</li>
                        <li><strong>Message &amp; data rates may apply</strong> depending on your mobile carrier plan.</li>
                        <li><strong>To opt out:</strong> Reply <strong>STOP</strong> to any message to stop receiving texts from us.</li>
                        <li><strong>For help:</strong> Reply <strong>HELP</strong> or contact us at 601-316-7891.</li>
                        <li>Supported carriers include but are not limited to: AT&amp;T, Verizon, T-Mobile, Mint Mobile, and most major US carriers.</li>
                        <li>We will not share your phone number with third parties for marketing purposes.</li>
                    </ul>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>3. Rental Pricing and Payment</h2>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        <li>Quoted prices include delivery, pickup, and standard weight allowances as listed at the time of booking.</li>
                        <li>Overage fees apply for weight exceeding the included allowance ($55/ton for 10 and 15-yard containers; hard limit 6,000 lbs for 20-yard).</li>
                        <li>Prices are subject to change without notice until a booking is confirmed.</li>
                        <li>Payment is due at time of booking or delivery as specified during checkout.</li>
                        <li>We accept major credit cards, debit cards, and other payment methods as listed on our booking page.</li>
                    </ul>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>4. Prohibited Materials</h2>
                    <p>The following items are <strong>not permitted</strong> in our dumpsters:</p>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        <li>Hazardous materials, chemicals, or chemical waste</li>
                        <li>Motor oil, automotive fluids, or liquid waste</li>
                        <li>Wet paint or stain</li>
                        <li>Medical or biohazardous waste</li>
                        <li>Asbestos-containing materials</li>
                        <li>Batteries (automotive or household)</li>
                        <li>Tires</li>
                        <li>Concrete, brick, or cinderblock</li>
                        <li>Pressurized containers</li>
                        <li>Refrigerators, HVAC units, or appliances containing Freon</li>
                        <li>Food waste or dirt/soil</li>
                    </ul>
                    <p>Inclusion of prohibited materials may result in additional fees and the customer assumes all liability for improperly disposed items.</p>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>5. Delivery and Placement</h2>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        <li>The customer is responsible for identifying a suitable, accessible placement location for the dumpster.</li>
                        <li>Mid South Dumpster Rentals uses protective measures (boards/mats) to minimize driveway damage but is not liable for incidental damage to driveways, landscaping, or property.</li>
                        <li>Permits are the responsibility of the customer if required by local ordinance for street placement.</li>
                        <li>Same-day delivery is subject to availability. Orders placed before noon are generally eligible for same-day service.</li>
                    </ul>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>6. Cancellations and Modifications</h2>
                    <p>Cancellation and modification policies are communicated at the time of booking. Contact us at 601-316-7891 as early as possible if you need to change or cancel your rental.</p>

                    {/* ServiceCore Platform Terms */}
                    <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
                        <div style={{ fontWeight: 700, color: '#0369a1', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>📄 Online Booking Platform — ServiceCore</div>
                        <p style={{ margin: '0 0 0.5rem' }}>Our online booking system is powered by <strong>ServiceCore</strong>. When scheduling a rental or making a payment through our booking portal, you are also subject to ServiceCore&apos;s Terms and Conditions, which govern their platform&apos;s use, data handling, and payment processing.</p>
                        <Link
                            href="/docs/servicecore-terms-and-conditions.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}
                        >
                            📥 View ServiceCore Terms &amp; Conditions (PDF)
                        </Link>
                    </div>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>7. Limitation of Liability</h2>
                    <p>Mid South Dumpster Rentals, LLC is not liable for indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific rental in question.</p>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>8. Governing Law</h2>
                    <p>These Terms and Conditions are governed by the laws of the State of Mississippi. Any disputes shall be resolved in the courts of Hinds County, Mississippi.</p>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>9. Changes to These Terms</h2>
                    <p>We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with a revised date. Continued use of our services after changes constitutes acceptance.</p>

                    <h2 style={{ color: 'var(--color-gray-900)', marginTop: '2rem' }}>10. Contact</h2>
                    <div style={{ background: 'var(--color-gray-50)', borderRadius: '10px', padding: '1.25rem 1.5rem', marginTop: '0.75rem' }}>
                        <p style={{ margin: '0 0 0.25rem' }}><strong>Mid South Dumpster Rentals, LLC</strong></p>
                        <p style={{ margin: '0 0 0.25rem' }}>3080 B John R Lynch St, Jackson, MS 39209</p>
                        <p style={{ margin: '0 0 0.25rem' }}>Phone / Text: <a href="tel:6013167891" style={{ color: 'var(--color-primary)' }}>601-316-7891</a></p>
                        <p style={{ margin: 0 }}>Website: <a href="https://midsouthdumpsterms.com" style={{ color: 'var(--color-primary)' }}>midsouthdumpsterms.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
