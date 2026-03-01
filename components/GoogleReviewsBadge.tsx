'use client'

import { useState, useEffect } from 'react'
import styles from './GoogleReviewsBadge.module.css'

const reviews = [
    {
        name: 'Victor Griffin',
        text: 'Called at 8AM, they were at our location by 9:30AM same day. Straight forward pricing — world class A1+ service!',
    },
    {
        name: 'Sonja McLaurin',
        text: "Can't express how helpful and kind Andrew has been. Very efficient and easy transaction. Will definitely call again!",
    },
    {
        name: 'Jarrad White',
        text: 'Excellent service from start to finish. Delivered on time, picked up as scheduled, fair pricing with no surprises.',
    },
    {
        name: 'Israel Oliva',
        text: 'Very affordable and great customer service. Mr. Tyre was more than helpful. Will use again!',
    },
    {
        name: 'Trey Porter',
        text: 'Great company! Quick responses and they will work hard to get you what you need as quickly as possible.',
    },
    {
        name: 'Dianne E. Nelson',
        text: 'Mid-South Dumpsters delivers and picks up on time at a competitive price. Great for real estate clients!',
    },
    {
        name: 'Ashtyn Bryant',
        text: 'Highly recommend! Andrew was very professional and on-time. Delivery and pick up was smooth. Communication was 10/10.',
    },
]

export default function GoogleReviewsBadge() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false)
            setTimeout(() => {
                setCurrentIndex(prev => (prev + 1) % reviews.length)
                setVisible(true)
            }, 400)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const review = reviews[currentIndex]

    return (
        <a
            href="https://share.google/yPU3TXEeM4Q1A0GYo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.badge}
            title="See our Google Reviews"
        >
            {/* Google Wordmark */}
            <div className={styles.header}>
                <div className={styles.googleWordmark}>
                    <span style={{ color: '#4285F4' }}>G</span>
                    <span style={{ color: '#EA4335' }}>o</span>
                    <span style={{ color: '#FBBC05' }}>o</span>
                    <span style={{ color: '#4285F4' }}>g</span>
                    <span style={{ color: '#34A853' }}>l</span>
                    <span style={{ color: '#EA4335' }}>e</span>
                </div>
                <div className={styles.ratingBlock}>
                    <span className={styles.score}>5.0</span>
                    <span className={styles.stars}>★★★★★</span>
                    <span className={styles.reviewCount}>12 reviews</span>
                </div>
            </div>

            {/* Rotating Review */}
            <div className={`${styles.reviewBody} ${visible ? styles.show : styles.hide}`}>
                <p className={styles.reviewText}>&ldquo;{review.text}&rdquo;</p>
                <p className={styles.reviewerName}>— {review.name}</p>
            </div>

            {/* Dot Indicators */}
            <div className={styles.dots}>
                {reviews.map((_, i) => (
                    <span
                        key={i}
                        className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ''}`}
                    />
                ))}
            </div>
        </a>
    )
}
