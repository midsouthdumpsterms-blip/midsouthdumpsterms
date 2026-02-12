import Link from 'next/link'
import BookingButton from './BookingButton'
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
                        >
                            Call 601-316-7891
                        </a>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.socialLinks}>
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
                    <p>&copy; {currentYear} Mid South Dumpster Rentals, LLC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
