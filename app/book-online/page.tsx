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
            {/* SurvCart CSS + script */}
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

            {/* Compact Hero Strip */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Book Your Dumpster Online</h1>
                        <p className={styles.heroSubtitle}>
                            From <strong>$349</strong> · Flat-rate · Same-day delivery available · Serving Central MS
                        </p>
                    </div>
                </div>
            </section>

            {/* Booking Embed — front and center */}
            <section className={styles.bookingSection}>
                <div className={styles.iframeContainer}>
                    <iframe
                        src="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                        width="100%"
                        height="850"
                        style={{ border: 'none', display: 'block' }}
                        title="Book a Dumpster Rental Online – Mid South Dumpster Rentals"
                        loading="eager"
                        allowFullScreen
                    />
                </div>
            </section>

            {/* Phone fallback */}
            <section className={styles.phoneSection}>
                <div className="container">
                    <div className={styles.phoneCta}>
                        <div className={styles.phoneIcon}>📞</div>
                        <div className={styles.phoneText}>
                            <h3>Prefer to book over the phone?</h3>
                            <p>Just give us a call and we&apos;ll get you scheduled in minutes.</p>
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
                                Same-day delivery available most days when ordered before noon.
                            </p>
                        </div>
                        <div className="card">
                            <div className={styles.infoIcon}>🚛</div>
                            <h3 className={styles.infoCardTitle}>We Deliver &amp; Pick Up</h3>
                            <p className={styles.infoCardText}>
                                Drop-off and pickup included in your flat rate. No extra charges.
                            </p>
                        </div>
                        <div className="card">
                            <div className={styles.infoIcon}>💳</div>
                            <h3 className={styles.infoCardTitle}>Secure Payment</h3>
                            <p className={styles.infoCardText}>
                                Pay securely online. All major cards accepted. No surprise fees.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
