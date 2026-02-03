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
    return (
        <div className={`${styles.card} ${popular ? styles.popular : ''}`}>
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

            <a
                href="https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: 'var(--spacing-lg)' }}
            >
                Book {size} Yard Dumpster
            </a>
        </div>
    )
}
