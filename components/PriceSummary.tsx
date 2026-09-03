import Link from 'next/link'
import styles from './PriceSummary.module.css'

/**
 * Compact price summary for service-area pages.
 *
 * The full three-card price grid was rendered in its entirety on all 17 city
 * pages, the 3 county hubs, /sizes and /services -- 22 near-identical blocks.
 * Measured on the live HTML with navigation stripped, it was the single
 * largest contributor to the 27% median overlap between city pages and the
 * 51-57% overlap between the county hubs.
 *
 * /sizes is the page that should own pricing depth. This gives the visitor
 * the number they came for and sends the detail question there.
 */
export default function PriceSummary({ place }: { place: string }) {
    return (
        <div className={styles.wrap}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Size</th>
                        <th>Weight included</th>
                        <th>From</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10 yard</td>
                        <td>1 ton</td>
                        <td>$349</td>
                    </tr>
                    <tr>
                        <td>15 yard</td>
                        <td>2 tons</td>
                        <td>$399</td>
                    </tr>
                    <tr>
                        <td>20 yard</td>
                        <td>3 tons</td>
                        <td>$449</td>
                    </tr>
                </tbody>
            </table>
            <p className={styles.note}>
                Flat rate to {place} &mdash; delivery, pickup and disposal included, with no fuel
                surcharge or weekend rate.{' '}
                <Link href="/sizes">Compare all three sizes, dimensions and 3 or 7-day pricing</Link>.
            </p>
        </div>
    )
}
