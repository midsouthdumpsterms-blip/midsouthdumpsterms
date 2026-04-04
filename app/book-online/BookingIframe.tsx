'use client'

import { useEffect, useState } from 'react'

export default function BookingIframe() {
    const [height, setHeight] = useState(2200)

    useEffect(() => {
        // Mobile needs more height — Surcart steps stack taller on narrow screens
        // Also avoids iOS touch event snap-back by giving plenty of scroll room
        const update = () => setHeight(window.innerWidth < 768 ? 3400 : 2200)
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    return (
        // touch-action: pan-y tells iOS to let vertical swipe scroll the page
        <div style={{ width: '100%', background: 'white', touchAction: 'pan-y' }}>
            <iframe
                src="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                style={{
                    border: 'none',
                    display: 'block',
                    width: '100%',
                    height: `${height}px`,
                } as React.CSSProperties}
                title="Book a Dumpster Rental Online – Mid South Dumpster Rentals"
                loading="eager"
                allowFullScreen
            />
        </div>
    )
}
