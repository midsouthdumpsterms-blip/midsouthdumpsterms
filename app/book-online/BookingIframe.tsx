'use client'

export default function BookingIframe() {
    return (
        <div style={{ width: '100%', background: 'white' }}>
            <iframe
                src="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                style={{
                    border: 'none',
                    display: 'block',
                    width: '100%',
                    height: '1800px',
                } as React.CSSProperties}
                title="Book a Dumpster Rental Online – Mid South Dumpster Rentals"
                loading="eager"
                allowFullScreen
                scrolling="no"
            />
        </div>
    )
}
