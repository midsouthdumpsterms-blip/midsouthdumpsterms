import type { Metadata, Viewport } from 'next'
import './globals.css'
import { generateLocalBusinessSchema, injectSchema } from '@/lib/schema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCallBar from '@/components/MobileCallBar'
import GoogleReviewsBadge from '@/components/GoogleReviewsBadge'
import ChatBot from '@/components/ChatBot'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
    metadataBase: new URL('https://midsouthdumpsterms.com'),
    title: {
        default: 'Dumpster Rental Jackson MS | From $349 | Same-Day Delivery',
        template: '%s | Mid South Dumpster Rentals',
    },
    description:
        "Jackson's local dumpster rental company. 10, 15 & 20-yard roll-offs from $349. Same-day delivery available 7 days a week. Serving Central MS. Call 601-316-7891.",
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
    other: {
        'facebook-domain-verification': 'krqcyhyicxca0nny9scqllvqt3tr8n',
    },
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
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
                {/* Resource Hints for Performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: injectSchema(localBusinessSchema) }}
                />
            </head>
            <body>
                {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
                    <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
                )}
                <Header />
                <main>{children}</main>
                <Footer />
                <MobileCallBar />
                <GoogleReviewsBadge />
                <ChatBot />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
