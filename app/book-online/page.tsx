import type { Metadata } from 'next'
import Script from 'next/script'
import BookingIframe from './BookingIframe'
import styles from './page.module.css'

export const metadata: Metadata = {
    title: 'Book Online | Dumpster Rental Jackson MS | Mid South Dumpster Rentals',
    description:
        'Book your roll-off dumpster rental online in 60 seconds. 10, 15 & 20-yard dumpsters from $349. Same-day delivery across Central MS. Flat-rate — no hidden fees.',
    alternates: { canonical: 'https://midsouthdumpsterms.com/book-online' },
    openGraph: {
        title: 'Book a Dumpster Online | Mid South Dumpster Rentals',
        description: 'Reserve your roll-off dumpster in under a minute. Flat-rate pricing. Same-day delivery available in Central MS.',
        url: 'https://midsouthdumpsterms.com/book-online',
    },
}

export default function BookOnlinePage() {
    return (
        <>
            {/* SurvCart assets */}
            {/* eslint-disable-next-line @next/next/no-css-tags */}
            <link rel="stylesheet" href="https://embed.survcart.com/embed.css" />
            <Script id="survcart-config" strategy="beforeInteractive">
                {`var survcartConfig={"id":"3u8ibIDlEWCk4uhSC1iS","companyId":"irGaFVL6CggDRSyqIHNa","staged":false,"embedName":"Embed Configuration 1","selectors":[{"tokens":["Book Now","Book Now!","BOOK NOW"],"id":"B77cgcBIlxlcSRgehUvF","configId":"5O3wdzzOPnQx1KZlsXjD","workflowId":"Oi3qEUY3kbLvysbCyTUA","ga4_tags":[],"classes":"survcart-embed-presenter","default":true}]};`}
            </Script>
            <Script src="https://embed.survcart.com/embed.js" strategy="afterInteractive" />

            {/* Invisible SEO anchor — gives Google an H1 without adding visual clutter */}
            <h1 className={styles.seoTitle}>Book a Dumpster Rental Online in Jackson, MS</h1>

            {/* Full-screen booking embed */}
            <section className={styles.bookingSection} id="booking-form">
                <BookingIframe />
            </section>

            {/* Phone fallback — minimal, below the fold */}
            <div className={styles.phoneFallback}>
                <span>Having trouble booking?</span>
                <a href="tel:6013167891" id="book-page-call-btn">Call (601) 316-7891</a>
            </div>
        </>
    )
}
