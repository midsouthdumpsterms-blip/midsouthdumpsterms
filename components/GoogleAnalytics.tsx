'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
    measurementId: string
    /**
     * Google Ads conversion ID, e.g. "AW-123456789".
     *
     * Without this the site sends no signal at all to Google Ads: Smart Bidding
     * has nothing to optimise against, and every row of the search-terms report
     * reads 0 conversions no matter how many calls the ads actually generated.
     */
    adsConversionId?: string
}

export default function GoogleAnalytics({ measurementId, adsConversionId }: GoogleAnalyticsProps) {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${measurementId}');
                        ${adsConversionId ? `gtag('config', '${adsConversionId}');` : ''}
                    `,
                }}
            />
        </>
    )
}
