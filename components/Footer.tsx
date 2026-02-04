import Link from 'next/link'
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
                                <a href="tel:6013167891">601-316-7891</a>
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
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/service-areas">Service Areas</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Service Areas</h4>
                        <ul>
                            <li><Link href="/service-areas/jackson">Jackson</Link></li>
                            <li><Link href="/service-areas/brandon">Brandon</Link></li>
                            <li><Link href="/service-areas/clinton">Clinton</Link></li>
                            <li><Link href="/service-areas/flowood">Flowood</Link></li>
                            <li><Link href="/service-areas/pearl">Pearl</Link></li>
                            <li><Link href="/service-areas">View All Cities</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Book Now</h4>
                        <a
                            href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                            style={{ width: '100%', marginBottom: 'var(--spacing-md)' }}
                            aria-label="Book dumpster rental online"
                        >
                            Book Online
                        </a>{' '}
                        <a
                            href="tel:6013167891"
                            className="btn btn-outline"
                            style={{ width: '100%' }}
                            aria-label="Call Mid South Dumpster Rentals at 601-316-7891"
                        >
                            Call 601-316-7891
                        </a>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {currentYear} Mid South Dumpster Rentals, LLC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
