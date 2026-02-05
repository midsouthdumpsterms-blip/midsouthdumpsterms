import type { Metadata } from 'next'
import './globals.css'
import { generateLocalBusinessSchema, injectSchema } from '@/lib/schema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCallBar from '@/components/MobileCallBar'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
    metadataBase: new URL('https://midsouthdumpsterms.com'),
    title: {
        default: 'Dumpster Rentals Jackson MS | Affordable Roll-Off Dumpsters | Mid South',
        template: '%s | Mid South Dumpster Rentals',
    },
    description:
        'Affordable dumpster rentals in Jackson, MS. 10, 15, 20-yard roll-off dumpsters. Same-day delivery available. Serving Central Mississippi. Book online or call 601-316-7891.',
    keywords: [
        'dumpster rental jackson ms',
        'roll off dumpster jackson',
        'dumpster rental mississippi',
        'construction dumpster jackson',
        'residential dumpster rental',
        'cheap dumpster rental jackson',
        'dumpster rental central ms',
        '10 yard dumpster',
        '15 yard dumpster',
        '20 yard dumpster',
    ],
    authors: [{ name: 'Mid South Dumpster Rentals, LLC' }],
    creator: 'Mid South Dumpster Rentals, LLC',
    publisher: 'Mid South Dumpster Rentals, LLC',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://midsouthdumpsterms.com',
        siteName: 'Mid South Dumpster Rentals',
        title: 'Mid South Dumpster Rentals | Jackson, MS',
        description:
            'Affordable roll-off dumpster rentals in Central Mississippi. 10, 15, 20-yard dumpsters available. Same-day delivery. Book online or call 601-316-7891.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mid South Dumpster Rentals | Jackson, MS',
        description: 'Affordable dumpster rentals in Central Mississippi. Same-day delivery available.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const localBusinessSchema = generateLocalBusinessSchema()

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: injectSchema(localBusinessSchema) }}
                />
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
                <MobileCallBar />
                <Analytics />
            </body>
        </html>
    )
}
