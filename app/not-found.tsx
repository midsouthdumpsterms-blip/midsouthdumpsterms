import Link from 'next/link'
import styles from './not-found.module.css'

export const metadata = {
    title: 'Page Not Found | Mid South Dumpster Rentals',
    description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Oops! Page Not Found</h2>
            <p className={styles.description}>
                We couldn't find the page you were looking for, but we <strong>can</strong> find you a dumpster! Let's get you back on track.
            </p>
            
            <div className={styles.buttonGroup}>
                <Link href="/" className="btn btn-outline">
                    Return to Homepage
                </Link>
                <button type="button" className="btn btn-secondary survcart-embed-presenter">
                    Book a Dumpster Now
                </button>
            </div>
        </div>
    )
}
