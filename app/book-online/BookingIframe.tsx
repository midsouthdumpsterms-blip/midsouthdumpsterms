'use client'

import { useEffect, useRef } from 'react'
import styles from './page.module.css'

export default function BookingIframe() {
    const iframeRef = useRef<HTMLIFrameElement>(null)

    useEffect(() => {
        // Auto-scroll to iframe on mobile so form is immediately visible
        const isMobile = window.innerWidth < 768
        if (isMobile && iframeRef.current) {
            setTimeout(() => {
                iframeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 400)
        }

        // Listen for SurvCart postMessage resize events to auto-resize iframe
        const handleMessage = (event: MessageEvent) => {
            if (!iframeRef.current) return
            if (
                event.origin.includes('survcart.com') &&
                event.data &&
                typeof event.data === 'object'
            ) {
                const { height } = event.data
                if (height && typeof height === 'number' && height > 400) {
                    iframeRef.current.style.height = `${height + 40}px`
                }
            }
        }

        window.addEventListener('message', handleMessage)
        return () => window.removeEventListener('message', handleMessage)
    }, [])

    return (
        <iframe
            ref={iframeRef}
            src="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
            width="100%"
            className={styles.bookingIframe}
            style={{ border: 'none', display: 'block' }}
            title="Book a Dumpster Rental Online – Mid South Dumpster Rentals"
            loading="eager"
            allowFullScreen
            scrolling="no"
        />
    )
}
