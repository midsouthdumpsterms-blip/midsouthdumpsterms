'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/images/logo.png"
                            alt="Mid South Dumpster Rentals - Same Day Service"
                            width={80}
                            height={80}
                            className={styles.logoImage}
                            priority
                        />
                        <div className={styles.logoTextContainer}>
                            <span className={styles.logoText}>Mid South</span>
                            <span className={styles.logoSubtext}>Dumpster Rentals</span>
                        </div>
                    </Link>

                    <button
                        className={styles.mobileMenuButton}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={styles.hamburger}></span>
                        <span className={styles.hamburger}></span>
                        <span className={styles.hamburger}></span>
                    </button>

                    <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ''}`}>
                        <li>
                            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-areas" onClick={() => setMobileMenuOpen(false)}>
                                Service Areas
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/gallery" onClick={() => setMobileMenuOpen(false)}>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link href="/reviews" onClick={() => setMobileMenuOpen(false)}>
                                Reviews
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>
                        <li className={styles.ctaItem}>
                            <a href="tel:6013167891" className="btn btn-primary">
                                Call Now
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
