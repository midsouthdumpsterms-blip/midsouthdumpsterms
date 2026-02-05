import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'FAQ - Dumpster Rental Questions | Mid South Dumpster Rentals',
    description: 'Common questions about dumpster rental in Jackson, MS. Pricing, weight limits, what you can throw away, rental periods, and more.',
}

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
