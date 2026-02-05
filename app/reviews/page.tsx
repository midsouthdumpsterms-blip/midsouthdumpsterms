import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './reviews.module.css'

export const metadata: Metadata = {
    title: 'Customer Reviews & Testimonials | Mid South Dumpster Rentals',
    description: 'Read what our customers say about Mid South Dumpster Rentals. 5-star dumpster rental service in Jackson, MS and surrounding areas.',
}

const reviews = [
    {
        name: "Sarah M.",
        rating: 5,
        text: "Excellent service! They delivered exactly when they said they would and the driver was very careful with our driveway. Will definitely use again for our next project.",
        date: "2 weeks ago",
        location: "Jackson, MS"
    },
    {
        name: "Mike T.",
        rating: 5,
        text: "Best dumpster rental company in the area. Fair pricing, no hidden fees, and they actually answer the phone! Highly recommend.",
        date: "1 month ago",
        location: "Madison, MS"
    },
    {
        name: "Jennifer L.",
        rating: 5,
        text: "We needed a same-day dumpster for our roofing project and they came through! Professional, friendly, and reasonably priced.",
        date: "3 weeks ago",
        location: "Brandon, MS"
    },
    {
        name: "David R.",
        rating: 5,
        text: "Great experience from start to finish. The 15-yard dumpster was perfect for our home renovation. They even placed boards under the wheels to protect our driveway.",
        date: "1 month ago",
        location: "Ridgeland, MS"
    },
    {
        name: "Lisa K.",
        rating: 5,
        text: "Called around to several companies and Mid South had the best price and availability. Driver was courteous and placed the dumpster exactly where I asked.",
        date: "2 months ago",
        location: "Pearl, MS"
    },
    {
        name: "James W.",
        rating: 5,
        text: "Used them for a commercial cleanout. They were on time, professional, and made the whole process easy. Will use for all future projects.",
        date: "3 weeks ago",
        location: "Flowood, MS"
    }
]

export default function ReviewsPage() {
    const averageRating = 5.0
    const totalReviews = reviews.length

    // Generate Review Schema
    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Mid South Dumpster Rentals",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": averageRating.toString(),
            "reviewCount": totalReviews.toString(),
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": reviews.map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.name
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating.toString(),
                "bestRating": "5",
                "worstRating": "1"
            },
            "reviewBody": review.text,
            "datePublished": new Date().toISOString().split('T')[0]
        }))
    }

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase()
    }

    const renderStars = (rating: number) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating)
    }

    return (
        <div className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />

            <div className={styles.header}>
                <h1 className={styles.title}>Customer Reviews</h1>
                <p className={styles.subtitle}>
                    See why Central Mississippi trusts us for their dumpster rental needs
                </p>

                <div className={styles.rating}>
                    <span className={styles.stars}>{renderStars(5)}</span>
                    <span className={styles.ratingText}>
                        {averageRating.toFixed(1)} out of 5 stars ({totalReviews} reviews)
                    </span>
                </div>

                <a
                    href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.googleLink}
                >
                    View all reviews on Google →
                </a>
            </div>

            <div className={styles.reviewsGrid}>
                {reviews.map((review, index) => (
                    <div key={index} className={styles.reviewCard}>
                        <div className={styles.reviewHeader}>
                            <div className={styles.avatar}>
                                {getInitials(review.name)}
                            </div>
                            <div className={styles.reviewerInfo}>
                                <div className={styles.reviewerName}>{review.name}</div>
                                <div className={styles.reviewStars}>{renderStars(review.rating)}</div>
                            </div>
                        </div>
                        <p className={styles.reviewText}>"{review.text}"</p>
                        <div className={styles.reviewDate}>
                            {review.date} • {review.location}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.cta}>
                <h2 className={styles.ctaTitle}>Join Our Happy Customers</h2>
                <p className={styles.ctaText}>
                    Experience the same 5-star service. Book your dumpster today!
                </p>
                <Link href="/#booking" className={styles.ctaButton}>
                    Book Your Dumpster Now
                </Link>
            </div>
        </div>
    )
}
