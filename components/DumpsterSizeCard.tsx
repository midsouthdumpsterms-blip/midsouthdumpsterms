'use client'

import { useRef } from 'react'
import { trackBookingClick, trackSizeCardHoverStart, trackSizeCardHoverEnd } from '@/lib/analytics'
import styles from './DumpsterSizeCard.module.css'

interface DumpsterSizeCardProps {
    size: string
    capacity: string
    weight: string
    pricing: { [key: string]: string }
    idealFor: string[]
    popular?: boolean
}

export default function DumpsterSizeCard({
    size,
    capacity,
    weight,
    pricing,
    idealFor,
    popular = false,
}: DumpsterSizeCardProps) {
    const hoverStartTime = useRef<number>(0)

    const handleBookingClick = () => {
        trackBookingClick(`Book ${size} Yard Dumpster`, 'Dumpster Size Card')
    }

    const handleMouseEnter = () => {
        hoverStartTime.current = trackSizeCardHoverStart(size)
    }

    const handleMouseLeave = () => {
        if (hoverStartTime.current > 0) {
            trackSizeCardHoverEnd(size, hoverStartTime.current)
            hoverStartTime.current = 0
        }
    }

    return (
        <div
            className={`${styles.card} ${popular ? styles.popular : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {popular && <div className={styles.badge}>Most Popular</div>}
            <div className={styles.header}>
                <h3>{size} Yard Dumpster</h3>
                <p className={styles.capacity}>{capacity}</p>
                <p className={styles.weight}>{weight}</p>
            </div>

            <div className={styles.pricing}>
                {Object.entries(pricing).map(([duration, price]) => (
                    <div key={duration} className={styles.priceRow}>
                        <span>{duration}</span>
                        <span className={styles.price}>{price}</span>
                    </div>
                ))}
            </div>

            <div className={styles.idealFor}>
                <h4>Ideal For:</h4>
                <ul>
                    {idealFor.map((item, index) => (
                        <li key={index}>
                            <span className={styles.checkIcon}>✓</span> {item}
                        </li>
                    ))}
                </ul>
            </div>

            <button
                type="button"
                className="btn btn-primary survcart-embed-presenter"
                style={{ width: '100%', marginTop: 'var(--spacing-lg)' }}
                onClick={handleBookingClick}
            >
                Book Now
            </button>
        </div>
    )
}

