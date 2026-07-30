import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { generateLocalBusinessSchema, injectSchema } from '@/lib/schema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCallBar from '@/components/MobileCallBar'
import GoogleReviewsBadge from '@/components/GoogleReviewsBadge'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import BehavioralTracker from '@/components/BehavioralTracker'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ 
    subsets: ['latin'],
    variable: '--font-primary',
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://midsouthdumpsterms.com'),
    alternates: {
        canonical: '/',
    },
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
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Mid South Dumpster Rentals — Jackson, MS',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mid South Dumpster Rentals | Jackson, MS',
        description: 'Affordable dumpster rentals in Central Mississippi. Same-day delivery available.',
        images: ['/images/og-image.jpg'],
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
        <html lang="en" className={inter.variable}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: injectSchema(localBusinessSchema) }}
                />
            </head>
            <body className={inter.variable}>
                {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
                    <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
                )}
                {/* SurvCart — loads globally so Book Now popup works on every page */}
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link rel="stylesheet" href="https://embed.survcart.com/embed.css" />
                <Script id="survcart-config" strategy="lazyOnload">
                    {`var survcartConfig={"id":"3u8ibIDlEWCk4uhSC1iS","companyId":"irGaFVL6CggDRSyqIHNa","staged":false,"embedName":"Embed Configuration 1","selectors":[{"tokens":["Book Now","Book Now!","BOOK NOW"],"id":"B77cgcBIlxlcSRgehUvF","configId":"5O3wdzzOPnQx1KZlsXjD","workflowId":"Oi3qEUY3kbLvysbCyTUA","ga4_tags":[],"classes":"survcart-embed-presenter","default":true}]};`}
                </Script>
                <Script src="https://embed.survcart.com/embed.js" strategy="lazyOnload" />
                <Header />
                <main>{children}</main>
                <Footer />
                <MobileCallBar />
                <GoogleReviewsBadge />
                <BehavioralTracker />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
