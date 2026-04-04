'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { trackPhoneClick } from '@/lib/analytics'
import styles from './Header.module.css'

const sizeLinks = [
    { href: '/sizes/10-yard-dumpster-rental', label: '10 Yard Dumpster' },
    { href: '/sizes/15-yard-dumpster-rental', label: '15 Yard Dumpster' },
    { href: '/sizes/20-yard-dumpster-rental', label: '20 Yard Dumpster' },
]

const serviceLinks = [
    { href: '/services/residential-dumpster-rental', label: 'Residential' },
    { href: '/services/commercial-dumpster-rental', label: 'Commercial' },
    { href: '/services/construction-dumpster-rental', label: 'Construction' },
    { href: '/services/roll-off-dumpster-rental', label: 'Roll-Off' },
    { href: '/services/yard-waste-dumpster-rental', label: 'Yard Waste' },
    { href: '/services/same-day-dumpster-rental', label: 'Same-Day' },
]

const serviceAreaLinks = [
    { href: '/service-areas/jackson', label: 'Jackson' },
    { href: '/service-areas/brandon', label: 'Brandon' },
    { href: '/service-areas/madison', label: 'Madison' },
    { href: '/service-areas/clinton', label: 'Clinton' },
    { href: '/service-areas/pearl', label: 'Pearl' },
    { href: '/service-areas/ridgeland', label: 'Ridgeland' },
    { href: '/service-areas/flowood', label: 'Flowood' },
    { href: '/service-areas/byram', label: 'Byram' },
    { href: '/service-areas/richland', label: 'Richland' },
    { href: '/service-areas/florence', label: 'Florence' },
    { href: '/service-areas/canton', label: 'Canton' },
    { href: '/service-areas/terry', label: 'Terry' },
    { href: '/service-areas/raymond', label: 'Raymond' },
    { href: '/service-areas/flora', label: 'Flora' },
    { href: '/service-areas/gluckstadt', label: 'Gluckstadt' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
    const [mobileAreasOpen, setMobileAreasOpen] = useState(false)

    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/images/logo.png"
                            alt="Mid South Dumpster Rentals - Same Day Service"
                            width={52}
                            height={52}
                            className={styles.logoImage}
                            priority
                        />
                        <div className={styles.logoTextContainer}>
                            <span className={styles.logoText}>Mid South Dumpster Rentals, LLC</span>
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

                        {/* Sizes dropdown */}
                        <li className={styles.dropdown}>
                            <Link href="/sizes" className={styles.dropdownTrigger} onClick={() => setMobileMenuOpen(false)}>
                                Sizes <span className={styles.chevron}>▾</span>
                            </Link>
                            <button
                                className={styles.mobileDropdownToggle}
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                aria-label="Toggle sizes menu"
                            >
                                <span className={`${styles.chevron} ${mobileServicesOpen ? styles.chevronOpen : ''}`}>▾</span>
                            </button>
                            <ul className={`${styles.dropdownMenu} ${mobileServicesOpen ? styles.dropdownMenuOpen : ''}`}>
                                <li><Link href="/sizes" onClick={() => setMobileMenuOpen(false)}>All Sizes</Link></li>
                                {sizeLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Services dropdown */}
                        <li className={styles.dropdown}>
                            <Link href="/services" className={styles.dropdownTrigger} onClick={() => setMobileMenuOpen(false)}>
                                Services <span className={styles.chevron}>▾</span>
                            </Link>
                            <button
                                className={styles.mobileDropdownToggle}
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                aria-label="Toggle services menu"
                            >
                                <span className={`${styles.chevron} ${mobileServicesOpen ? styles.chevronOpen : ''}`}>▾</span>
                            </button>
                            <ul className={`${styles.dropdownMenu} ${mobileServicesOpen ? styles.dropdownMenuOpen : ''}`}>
                                <li>
                                    <Link href="/services" onClick={() => setMobileMenuOpen(false)}>All Services</Link>
                                </li>
                                {serviceLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Service Areas dropdown */}
                        <li className={styles.dropdown}>
                            <Link href="/service-areas" className={styles.dropdownTrigger} onClick={() => setMobileMenuOpen(false)}>
                                Service Areas <span className={styles.chevron}>▾</span>
                            </Link>
                            <button
                                className={styles.mobileDropdownToggle}
                                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                                aria-label="Toggle service areas menu"
                            >
                                <span className={`${styles.chevron} ${mobileAreasOpen ? styles.chevronOpen : ''}`}>▾</span>
                            </button>
                            <ul className={`${styles.dropdownMenu} ${mobileAreasOpen ? styles.dropdownMenuOpen : ''}`}>
                                <li>
                                    <Link href="/service-areas" onClick={() => setMobileMenuOpen(false)}>All Areas</Link>
                                </li>
                                {serviceAreaLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
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
                            <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/book-online" onClick={() => setMobileMenuOpen(false)}>
                                Book Now
                            </Link>
                        </li>
                        <li>
                            <Link href="/get-a-quote" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-secondary)', fontWeight: 700 }}>
                                Get a Quote
                            </Link>
                        </li>
                        <div className={styles.ctaWrapper}>
                            <a
                                href="tel:6013167891"
                                className="btn btn-primary"
                                onClick={() => trackPhoneClick('Desktop Header')}
                            >
                                Call Now
                            </a>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
