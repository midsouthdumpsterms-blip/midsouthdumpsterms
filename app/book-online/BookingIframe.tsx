'use client'

import { useEffect, useRef } from 'react'

export default function BookingIframe() {
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const setHeight = () => {
            const headerEl = document.querySelector('header')
            const headerHeight = headerEl ? headerEl.offsetHeight : 70
            const available = window.innerHeight - headerHeight
            if (wrapperRef.current) {
                wrapperRef.current.style.height = `${available}px`
            }
        }

        setHeight()
        window.addEventListener('resize', setHeight)
        return () => window.removeEventListener('resize', setHeight)
    }, [])

    return (
        // Wrapper is the scroll container — iOS scrolls this smoothly with momentum
        <div
            ref={wrapperRef}
            style={{
                width: '100%',
                overflowY: 'scroll',
                // iOS momentum/smooth scrolling
                WebkitOverflowScrolling: 'touch' as never,
                // Prevent scroll from bleeding out to the parent page
                overscrollBehavior: 'contain',
                background: 'white',
            }}
        >
            {/* Iframe is taller than the wrapper — wrapper handles the scroll */}
            <iframe
                src="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                style={{
                    border: 'none',
                    display: 'block',
                    width: '100%',
                    // Tall enough for all 5 checkout steps without internal iframe scroll
                    height: '1400px',
                    scrolling: 'no',
                } as React.CSSProperties}
                title="Book a Dumpster Rental Online – Mid South Dumpster Rentals"
                loading="eager"
                allowFullScreen
                scrolling="no"
            />
        </div>
    )
}
