'use client'

import { useEffect, useRef } from 'react'

export default function BookingIframe() {
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Set iframe height to exactly fill the viewport minus the site header
        const setHeight = () => {
            const headerEl = document.querySelector('header')
            const headerHeight = headerEl ? headerEl.offsetHeight : 70
            const mobileBarHeight = window.innerWidth < 769 ? 0 : 0
            const available = window.innerHeight - headerHeight - mobileBarHeight
            if (wrapperRef.current) {
                wrapperRef.current.style.height = `${available}px`
            }
        }

        setHeight()
        window.addEventListener('resize', setHeight)

        // Listen for SurvCart postMessage resize — don't let it exceed viewport
        const handleMessage = (event: MessageEvent) => {
            // intentionally not resizing the wrapper — we want it fixed to viewport
        }
        window.addEventListener('message', handleMessage)

        return () => {
            window.removeEventListener('resize', setHeight)
            window.removeEventListener('message', handleMessage)
        }
    }, [])

    return (
        <div
            ref={wrapperRef}
            style={{ width: '100%', overflow: 'hidden', background: 'white' }}
        >
            <iframe
                ref={iframeRef}
                src="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                style={{
                    border: 'none',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                }}
                title="Book a Dumpster Rental Online – Mid South Dumpster Rentals"
                loading="eager"
                allowFullScreen
            />
        </div>
    )
}
