'use client'

import { useEffect, useRef } from 'react'

export default function BookingIframe() {
    const iframeRef = useRef<HTMLIFrameElement>(null)

    useEffect(() => {
        // Scroll to top on load so iframe is first thing user sees
        window.scrollTo({ top: 0, behavior: 'instant' })

        // Listen for SurvCart postMessage resize events
        const handleMessage = (event: MessageEvent) => {
            if (!iframeRef.current) return
            try {
                if (
                    event.origin.includes('survcart.com') &&
                    event.data &&
                    typeof event.data === 'object'
                ) {
                    const { height } = event.data
                    if (height && typeof height === 'number' && height > 400) {
                        iframeRef.current.style.height = `${height + 60}px`
                    }
                }
            } catch {
                // ignore malformed messages
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
            style={{
                border: 'none',
                display: 'block',
                width: '100%',
                /* Tall enough to show all 5 checkout steps without internal scroll */
                height: '1200px',
                minHeight: '100vh',
            }}
            title="Book a Dumpster Rental Online – Mid South Dumpster Rentals"
            loading="eager"
            allowFullScreen
            scrolling="no"
        />
    )
}
