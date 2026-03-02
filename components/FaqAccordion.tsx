'use client'

import { useState } from 'react'
import styles from '@/app/faq/faq.module.css'

interface FAQ {
    question: string
    answer: string
}

export default function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className={styles.faqList}>
            {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                    <button
                        className={styles.question}
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={openIndex === index}
                    >
                        <span>{faq.question}</span>
                        <span className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}>
                            +
                        </span>
                    </button>
                    {openIndex === index && (
                        <div
                            className={styles.answer}
                            dangerouslySetInnerHTML={{
                                __html: faq.answer
                                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                    .replace(/•/g, '•')
                                    .replace(/\n/g, '<br />')
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    )
}
