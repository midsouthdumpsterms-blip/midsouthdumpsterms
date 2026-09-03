import styles from './FaqSection.module.css'

export type Faq = { question: string; answer: string }

/**
 * Renders a page's FAQs from the *same array* that feeds generateFAQSchema().
 *
 * Two bugs made this necessary, both found by auditing the rendered HTML
 * rather than the source:
 *
 * 1. Schema and visible content had drifted apart on 24 of the 44 pages
 *    carrying FAQPage markup. City pages declared five questions and showed
 *    three; the /sizes and several blog pages declared four or five and showed
 *    none at all. Google requires FAQ markup to reflect content the visitor
 *    can actually see -- the rich result gets dropped otherwise, and it is a
 *    structured-data manual action risk.
 *
 * 2. styles.faqSection, styles.faqGrid and styles.faqItem were referenced on
 *    all 17 city pages but never defined in city.module.css. React drops
 *    className={undefined} silently, so those sections shipped unstyled for
 *    months without anything looking obviously broken.
 *
 * Passing one array to both the schema and this component makes the first
 * class of bug impossible. Owning the CSS here makes the second impossible.
 */
export default function FaqSection({
    faqs,
    title,
    background,
    bare,
}: {
    faqs: Faq[]
    title: string
    /** Optional tinted background, for alternating page sections. */
    background?: boolean
    /** Render without the section/container wrapper, for use inside an article body. */
    bare?: boolean
}) {
    if (!faqs || faqs.length === 0) return null

    const body = (
        <>
            <h2 className={bare ? undefined : styles.heading}>{title}</h2>
            <div className={styles.grid}>
                {faqs.map((faq) => (
                    <div key={faq.question} className={styles.item}>
                        <h3 className={styles.question}>{faq.question}</h3>
                        <p className={styles.answer}>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </>
    )

    if (bare) {
        return <div className={styles.bare}>{body}</div>
    }

    return (
        <section className={background ? styles.sectionTinted : styles.section}>
            <div className="container container-narrow">{body}</div>
        </section>
    )
}
