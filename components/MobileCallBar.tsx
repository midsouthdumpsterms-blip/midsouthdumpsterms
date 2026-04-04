'use client'

import { usePathname } from 'next/navigation'
import { trackPhoneClick, trackBookingClick } from '@/lib/analytics'
import styles from './MobileCallBar.module.css'

export default function MobileCallBar() {
    const pathname = usePathname()
    if (pathname === '/book-online') return null

    return (
        <div className={styles.container}>
            <a 
                href="tel:6013167891" 
                className={styles.callButton}
                onClick={() => trackPhoneClick('Mobile Call Bar')}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={styles.icon}
                >
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.49-5.15-3.8-6.62-6.62l1.97-1.57c.23-.23.31-.56.25-.87-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                Call Now
            </a>
            <a
                href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookButton}
                onClick={() => trackBookingClick('Book Online', 'Mobile Call Bar')}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={styles.icon}
                >
                   <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z" />
                </svg>
                Book Online
            </a>
        </div>
    )
}
