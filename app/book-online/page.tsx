import type { Metadata } from 'next'
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
            {/* Invisible SEO anchor — gives Google an H1 without adding visual clutter */}
            <h1 className={styles.seoTitle}>Book a Dumpster Rental Online in Jackson, MS</h1>

            {/* Booking section — Survcart popup trigger */}
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
