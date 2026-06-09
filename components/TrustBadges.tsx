import styles from './TrustBadges.module.css'

export default function TrustBadges() {
    return (
        <section className={styles.trustBadges}>
            <div className="container">
                <div className={styles.badgesGrid}>
                    <a
                        href="https://www.bbb.org/us/ms/jackson/profile/dumpster-rentals/mid-south-dumpster-rentals-llc-0523-235907877/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.badge} ${styles.bbbBadge}`}
                        style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                        aria-label="View Mid South Dumpster Rentals BBB Accredited Business Profile"
                    >
                        <div className={styles.bbbLogoContainer}>
                            <div className={styles.bbbFlame}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 80" fill="white" width="36" height="48">
                                    <path d="M30 0 C20 15 10 20 14 38 C16 46 22 50 22 50 C20 42 24 36 28 30 C28 40 32 44 30 54 C34 48 38 42 36 30 C40 36 42 44 40 54 C44 46 46 38 42 24 C46 30 48 36 46 42 C50 30 46 18 30 0Z" />
                                    <rect x="18" y="58" width="24" height="6" rx="2" />
                                    <rect x="10" y="66" width="40" height="6" rx="2" />
                                </svg>
                            </div>
                            <div className={styles.bbbTextBlock}>
                                <span className={styles.bbbLetters}>BBB</span>
                                <span className={styles.bbbReg}>®</span>
                                <span className={styles.bbbAccredited}>ACCREDITED<br />BUSINESS</span>
                            </div>
                        </div>
                        <p>Proud member of the Better Business Bureau — held to the highest standards of trust &amp; integrity.</p>
                        <span className={styles.bbbProfileLink}>See BBB Profile →</span>
                    </a>

                    <div className={styles.badge}>
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                <path d="M9 12l2 2 4-4"></path>
                            </svg>
                        </div>
                        <h3>Licensed & Insured</h3>
                        <p>Fully licensed and insured for your protection</p>
                    </div>

                    <div className={styles.badge}>
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <h3>Same-Day Delivery</h3>
                        <p>Available 7 days a week when you call before noon</p>
                    </div>

                    <div className={styles.badge}>
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                        </div>
                        <h3>Transparent Pricing</h3>
                        <p>No hidden fees - price includes delivery, pickup & disposal</p>
                    </div>

                    <div className={styles.badge}>
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                        </div>
                        <h3>Online Booking</h3>
                        <p>Book 24/7 online or call 601-316-7891</p>
                    </div>

                    <div className={styles.badge}>
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <h3>Local Family-Owned</h3>
                        <p>Serving Central Mississippi since day one</p>
                    </div>

                    <div className={styles.badge}>
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                        </div>
                        <h3>Professional Service</h3>
                        <p>Courteous, reliable service you can count on</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
