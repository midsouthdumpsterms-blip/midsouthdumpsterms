import type { Metadata } from 'next'
import Script from 'next/script'
import styles from './page.module.css'

export const metadata: Metadata = {
    title: 'Book Online | Dumpster Rental Jackson MS | Mid South Dumpster Rentals',
    description:
        'Book your dumpster rental online in 60 seconds. 10, 15 & 20-yard dumpsters from $349 with same-day delivery across Central MS. No hidden fees. Flat-rate pricing.',
    alternates: {
        canonical: 'https://midsouthdumpsterms.com/book-online',
    },
    openGraph: {
        title: 'Book a Dumpster Online | Mid South Dumpster Rentals',
        description:
            'Reserve your roll-off dumpster in under a minute. Flat-rate pricing includes delivery, pickup & dump fees. Same-day delivery available in Central MS.',
        url: 'https://midsouthdumpsterms.com/book-online',
    },
}

export default function BookOnlinePage() {
    return (
        <>
            {/* SurvCart CSS + script (enables modal triggers elsewhere on the site) */}
            {/* eslint-disable-next-line @next/next/no-css-tags */}
            <link rel="stylesheet" href="https://embed.survcart.com/embed.css" />
            <Script id="survcart-config" strategy="beforeInteractive">
                {`
                var survcartConfig = {
                  "id": "3u8ibIDlEWCk4uhSC1iS",
                  "companyId": "irGaFVL6CggDRSyqIHNa",
                  "staged": false,
                  "embedName": "Embed Configuration 1",
                  "selectors": [
                    {
                      "tokens": ["Book Now", "Book Now!", "BOOK NOW"],
                      "id": "B77cgcBIlxlcSRgehUvF",
                      "configId": "5O3wdzzOPnQx1KZlsXjD",
                      "workflowId": "Oi3qEUY3kbLvysbCyTUA",
                      "ga4_tags": [],
                      "classes": "survcart-embed-presenter",
                      "default": true
                    }
                  ]
                };
                `}
            </Script>
            <Script src="https://embed.survcart.com/embed.js" strategy="afterInteractive" />

            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.heroBadge}>⚡ Same-Day Delivery Available</span>
                        <h1 className={styles.heroTitle}>Book Your Dumpster Online</h1>
                        <p className={styles.heroSubtitle}>
                            Reserve your roll-off dumpster in under 60 seconds.{' '}
                            <strong>Flat-rate pricing</strong> — delivery, pickup &amp; dump fees included. No surprises.
                        </p>
                        <div className={styles.heroBenefits}>
                            <span className={styles.benefit}>✅ 10, 15 &amp; 20-Yard Sizes</span>
                            <span className={styles.benefit}>✅ Serving Central MS</span>
                            <span className={styles.benefit}>✅ No Hidden Fees</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Embedded Booking Widget */}
            <section className={styles.bookingSection}>
                <div className="container">
                    <div className={styles.bookingWrapper}>
                        <div className={styles.bookingCard}>
                            <div className={styles.bookingHeader}>
                                <h2 className={styles.bookingTitle}>Select Your Size &amp; Date</h2>
                                <p className={styles.bookingSubtitle}>
                                    Choose your dumpster size, rental duration, and delivery date below.
                                </p>
                            </div>
                            <div className={styles.iframeContainer}>
                                <iframe
                                    src="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                                    width="100%"
                                    height="750"
                                    style={{ border: 'none', display: 'block' }}
                                    title="Book a Dumpster Rental Online – Mid South Dumpster Rentals"
                                    loading="lazy"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trouble Booking CTA */}
            <section className={styles.phoneSection}>
                <div className="container">
                    <div className={styles.phoneCta}>
                        <div className={styles.phoneIcon}>📞</div>
                        <div className={styles.phoneText}>
                            <h3>Prefer to book over the phone?</h3>
                            <p>
                                No worries — just give us a call and we&apos;ll get you scheduled in minutes.
                            </p>
                        </div>
                        <a href="tel:6013167891" className="btn btn-primary btn-lg" id="book-page-call-btn">
                            Call (601) 316-7891
                        </a>
                    </div>
                </div>
            </section>

            {/* What to Expect Cards */}
            <section className={styles.infoSection}>
                <div className="container">
                    <h2 className={styles.infoTitle}>What to Expect</h2>
                    <div className={`grid grid-3 ${styles.infoGrid}`}>
                        <div className="card">
                            <div className={styles.infoIcon}>🗓️</div>
                            <h3 className={styles.infoCardTitle}>Pick Your Date</h3>
                            <p className={styles.infoCardText}>
                                Select your preferred delivery date. Same-day delivery is available most days when ordered before noon.
                            </p>
                        </div>
                        <div className="card">
                            <div className={styles.infoIcon}>🚛</div>
                            <h3 className={styles.infoCardTitle}>We Deliver &amp; Pick Up</h3>
                            <p className={styles.infoCardText}>
                                We&apos;ll drop off the dumpster at your location and pick it up when you&apos;re done. All included in your flat rate.
                            </p>
                        </div>
                        <div className="card">
                            <div className={styles.infoIcon}>💳</div>
                            <h3 className={styles.infoCardTitle}>Secure Online Payment</h3>
                            <p className={styles.infoCardText}>
                                Pay securely online using any major credit or debit card. Your flat rate includes everything — no surprise fees.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
