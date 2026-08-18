'use client'

import Link from 'next/link'
import { trackPhoneClick } from '@/lib/analytics'
import BookingButton from './BookingButton'
import PaymentMethods from './PaymentMethods'
import styles from './Footer.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    <div className={styles.footerCol}>
                        <h3>Mid South Dumpster Rentals</h3>
                        <p>Affordable dumpster rentals serving Central Mississippi since day one.</p>
                        <div className={styles.contactInfo}>
                            <p>
                                <strong>Phone:</strong>{' '}
                                <a 
                                    href="tel:6013167891"
                                    onClick={() => trackPhoneClick('Footer')}
                                >
                                    601-316-7891
                                </a>
                            </p>
                            <p>
                                <strong>Email:</strong>{' '}
                                <a href="mailto:atyre@midsouthdumpsterms.com">
                                    atyre@midsouthdumpsterms.com
                                </a>
                            </p>
                            <p>
                                <strong>Hours:</strong> 7AM - 7PM | 7 Days a Week
                            </p>
                            <p>
                                <strong>Address:</strong><br />
                                3080 B John R Lynch St<br />
                                Jackson, MS 39209
                            </p>
                        </div>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/services">All Services</Link></li>
                            <li><Link href="/services/residential-dumpster-rental">Residential</Link></li>
                            <li><Link href="/services/commercial-dumpster-rental">Commercial</Link></li>
                            <li><Link href="/services/construction-dumpster-rental">Construction</Link></li>
                            <li><Link href="/services/roll-off-dumpster-rental">Roll-Off</Link></li>
                            <li><Link href="/services/yard-waste-dumpster-rental">Yard Waste</Link></li>
                            <li><Link href="/services/same-day-dumpster-rental">Same-Day</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Service Areas</h4>
                        <ul>
                            <li><Link href="/service-areas/jackson">Jackson</Link></li>
                            <li><Link href="/service-areas/brandon">Brandon</Link></li>
                            <li><Link href="/service-areas/madison">Madison</Link></li>
                            <li><Link href="/service-areas/clinton">Clinton</Link></li>
                            <li><Link href="/service-areas/pearl">Pearl</Link></li>
                            <li><Link href="/service-areas/ridgeland">Ridgeland</Link></li>
                            <li><Link href="/service-areas/flowood">Flowood</Link></li>
                            <li><Link href="/service-areas/raymond">Raymond</Link></li>
                            <li><Link href="/service-areas/hinds-county">Hinds County</Link></li>
                            <li><Link href="/service-areas/madison-county">Madison County</Link></li>
                            <li><Link href="/service-areas/rankin-county">Rankin County</Link></li>
                            <li><Link href="/service-areas">View All Cities →</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Dumpster Sizes</h4>
                        <ul>
                            <li><Link href="/sizes/10-yard-dumpster-rental">10 Yard Dumpster</Link></li>
                            <li><Link href="/sizes/15-yard-dumpster-rental">15 Yard Dumpster</Link></li>
                            <li><Link href="/sizes/20-yard-dumpster-rental">20 Yard Dumpster</Link></li>
                            <li><Link href="/sizes">Compare All Sizes</Link></li>
                            <li><Link href="/services/debris-removal">Debris Removal</Link></li>
                            <li><Link href="/services/demolition-dumpster-rental">Demolition</Link></li>
                            <li><Link href="/services/roofing-dumpster-rental">Roofing</Link></li>
                            <li><Link href="/services/estate-cleanout-dumpster-rental">Estate Cleanout</Link></li>
                            <li><Link href="/services/storm-cleanup-dumpster-rental">Storm Cleanup</Link></li>
                        </ul>
                    </div>


                    <div className={styles.footerCol}>
                        <h4>Book Now</h4>
                        <BookingButton
                            label="Book Online"
                            location="Footer"
                            className="btn btn-secondary"
                            style={{ width: '100%', marginBottom: 'var(--spacing-md)' }}
                        />
                        <a
                            href="tel:6013167891"
                            className="btn btn-outline"
                            style={{ width: '100%' }}
                            aria-label="Call Mid South Dumpster Rentals at 601-316-7891"
                            onClick={() => trackPhoneClick('Footer CTA')}
                        >
                            Call 601-316-7891
                        </a>

                        <div style={{ marginTop: '2rem' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>Accepted Payments</h4>
                            <PaymentMethods />
                        </div>
                    </div>
                </div>

                <div className={styles.guidesStrip}>
                    <h4>Popular Guides</h4>
                    <ul>
                        {[
                            { href: '/blog/dumpster-rental-prices-jackson-ms', label: 'Dumpster Prices in Jackson' },
                            { href: '/blog/how-to-choose-dumpster-size', label: 'Choosing a Dumpster Size' },
                            { href: '/blog/dumpster-weight-limits-jackson-ms', label: 'Weight Limits & Overage Fees' },
                            { href: '/blog/what-can-i-put-in-a-dumpster', label: 'What Can Go In a Dumpster' },
                            { href: '/blog/do-i-need-a-permit-dumpster-jackson-ms', label: 'Do I Need a Permit?' },
                            { href: '/blog/how-long-can-you-keep-a-rental-dumpster', label: 'How Long Can I Keep It?' },
                            { href: '/blog/home-renovation-dumpster-guide-central-ms', label: 'Home Renovation Guide' },
                            { href: '/blog/bathroom-remodel-dumpster-rental-jackson-ms', label: 'Bathroom Remodel Guide' },
                            { href: '/blog/deck-shed-demolition-dumpster-rental-jackson-ms', label: 'Deck & Shed Demolition' },
                            { href: '/blog/spring-cleaning-checklist-central-ms', label: 'Spring Cleaning Checklist' },
                            { href: '/blog/dumpster-rental-vs-junk-removal-jackson-ms', label: 'Dumpster vs. Junk Removal' },
                            { href: '/gallery', label: 'Project Gallery' },
                        ].map((item) => (
                            <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className={styles.footerBottom}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginBottom: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                        <div className={styles.socialLinks} style={{ margin: 0 }}>
                            <a
                                href="https://www.facebook.com/profile.php?id=61578838911863"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit us on Facebook"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.yelp.com/biz/mid-south-dumpster-rentals-jackson-2"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Review us on Yelp"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.85-.09-.154-.12-.314-.365-2.447-3.827l-.633-1.032c-.244-.37-.199-.857.104-1.229.297-.362.732-.506 1.104-.368l1.112.409c3.681 1.352 3.967 1.471 4.161 1.588.309.185.475.446.478.702zm-6.944-12.086c-.045-.301.11-.611.373-.748.311-.162.685-.117.96.108 1.006.823 2.455 2.023 2.668 2.223.246.232.369.575.308.919-.053.302-.231.581-.5.769l-3.382 2.365c-.379.265-.9.185-1.173-.179-.267-.357-.206-.858.136-1.122l2.61-2.335zm-5.833-3.777c.314-.02.603.135.748.398.159.289.13.668-.074.938l-2.365 3.382c-.265.379-.786.458-1.149.179-.357-.267-.458-.768-.226-1.123l2.335-2.61c.201-.225.474-.353.731-.364zm-7.878 9.969c.312-.139.684-.081.96.145.275.227.379.602.267.936-.407 1.219-.917 2.76-1.032 3.08-.133.37-.423.602-.746.602-.36 0-.719-.27-.899-.676-.311-.703-.5-3.394-.5-4.05 0-.311.135-.611.373-.748.311-.162.685-.117.96.108l.617.603z" />
                                </svg>
                            </a>
                        </div>
                        {/* BBB Accredited Business Seal */}
                        <a
                            href="https://www.bbb.org/us/ms/jackson/profile/dumpster-rentals/mid-south-dumpster-rentals-llc-0523-235907877"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Mid South Dumpster Rentals BBB Accredited Business Profile"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '6px 14px',
                                background: '#007B84',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                border: '1px solid rgba(255,255,255,0.2)',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 54" fill="white" width="22" height="30">
                                <path d="M20 0 C13 10 6 14 9 26 C10 31 15 34 15 34 C13 28 16 24 19 20 C19 27 21 29 20 36 C23 32 25 28 24 20 C27 24 28 29 27 36 C29 31 31 26 28 16 C31 20 32 24 31 28 C34 20 31 12 20 0Z" />
                                <rect x="12" y="38" width="16" height="4" rx="1" />
                                <rect x="7" y="44" width="26" height="4" rx="1" />
                            </svg>
                            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                                <span style={{ fontSize: '1rem', fontWeight: 900, color: 'white', letterSpacing: '1px' }}>BBB</span>
                                <span style={{ fontSize: '0.5rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', letterSpacing: '1px', textTransform: 'uppercase', borderTop: '1px solid rgba(255,255,255,0.4)', paddingTop: '2px' }}>Accredited</span>
                            </div>
                        </a>
                    </div>
                    <p>&copy; {currentYear} Mid South Dumpster Rentals, LLC. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                        <Link href="/privacy-policy" style={{ color: 'var(--color-gray-400)', fontSize: '0.8rem', textDecoration: 'none' }}>Privacy Policy</Link>
                        <span style={{ color: 'var(--color-gray-600)' }}>·</span>
                        <Link href="/terms-and-conditions" style={{ color: 'var(--color-gray-400)', fontSize: '0.8rem', textDecoration: 'none' }}>Terms &amp; Conditions</Link>
                        <span style={{ color: 'var(--color-gray-600)' }}>·</span>
                        <Link href="/service-terms" style={{ color: 'var(--color-gray-400)', fontSize: '0.8rem', textDecoration: 'none' }}>Service Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
