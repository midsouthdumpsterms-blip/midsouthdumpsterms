'use client'

import { trackBookingClick } from '@/lib/analytics'

interface BookingButtonProps {
    label: string
    location: string
    className?: string
    style?: React.CSSProperties
}

/**
 * Tracked booking button that sends analytics events when clicked
 * This allows tracking clicks to the SurvCart booking page
 */
export default function BookingButton({ label, location, className = 'btn btn-secondary btn-lg', style }: BookingButtonProps) {
    const handleClick = () => {
        trackBookingClick(label, location)
    }

    return (
        <a
            href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            style={style}
            onClick={handleClick}
        >
            {label}
        </a>
    )
}
