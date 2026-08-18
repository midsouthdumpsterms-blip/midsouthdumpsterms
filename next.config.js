/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com'], // For Google Business Profile images
        formats: ['image/webp', 'image/avif'], // Prioritize modern formats
        deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Responsive breakpoints
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Icon sizes
        minimumCacheTTL: 60, // Cache images for 60 seconds
    },

    // Performance optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production', // Remove console.logs in production
    },

    // Enable SWC minification for faster builds and smaller bundles
    swcMinify: true,

    // Optimize production builds
    productionBrowserSourceMaps: false, // Disable source maps in production for smaller bundles

    // Experimental features for better performance
    experimental: {
        optimizePackageImports: ['@vercel/analytics'], // Tree-shake specific packages
    },

    // 301 Redirects - consolidate thin/duplicate pages and capture orphaned traffic
    async redirects() {
        // Cities that have both a /service-areas/<city> page and legacy orphan pages
        const orphanCities = [
            'jackson', 'brandon', 'byram', 'clinton', 'florence', 'flowood',
            'madison', 'pearl', 'richland', 'ridgeland', 'terry', 'canton',
            'flora', 'gluckstadt',
        ]

        return [
            {
                source: '/booking',
                destination: '/book-online',
                permanent: true, // 301 redirect - passes SEO authority to book-online page
            },
            // The old quote tool was retired; send that traffic to the live booking flow
            {
                source: '/get-a-quote',
                destination: '/book-online',
                permanent: true,
            },
            // Consolidate duplicate city blog posts into their service-area page equivalents
            ...[
                'brandon', 'byram', 'canton', 'clinton', 'flora', 'florence',
                'flowood', 'jackson', 'madison', 'richland', 'ridgeland', 'terry',
            ].map((city) => ({
                source: `/blog/dumpster-rental-${city}-ms`,
                destination: `/service-areas/${city}`,
                permanent: true,
            })),
            // Consolidate the near-duplicate "waste disposal <city>" doorway pages.
            // Their content was folded into the matching service-area page.
            ...orphanCities.map((city) => ({
                source: `/waste-disposal-${city}-ms`,
                destination: `/service-areas/${city}`,
                permanent: true,
            })),
            // Same for "debris removal <city>" - the topic now lives on one real
            // service page plus a section on each service-area page.
            ...orphanCities.map((city) => ({
                source: `/debris-removal-${city}-ms`,
                destination: `/services/debris-removal`,
                permanent: true,
            })),
        ]
    },

    // Security headers applied to every route
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    // Prevent your site from being embedded in iframes (clickjacking)
                    { key: 'X-Frame-Options', value: 'DENY' },
                    // Prevent MIME type sniffing attacks
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    // Control how much referrer info is sent to external sites
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    // Disable unnecessary browser features
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
                    // Content Security Policy — restricts where scripts/styles/images can load from
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            // GA, GTM, SurvCart, Google Ads, and inline scripts
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://embed.survcart.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://va.vercel-scripts.com https://cdn.jsdelivr.net",
                            // Inline styles needed for Next.js, Google Fonts, SurvCart
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://embed.survcart.com",
                            "font-src 'self' https://fonts.gstatic.com",
                            // Images from self, data URIs, blobs, and any HTTPS source (for gallery/blog images)
                            "img-src 'self' data: blob: https:",
                            // GA telemetry, Google Ads telemetry + self API calls
                            "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://ad.doubleclick.net https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com",
                            // Survcart booking iframe (book-online page) and the
                            // Google Maps embed on /contact - the map was silently
                            // blocked by CSP until google.com was allowed here.
                            "frame-src https://embed.survcart.com https://www.google.com https://maps.google.com",
                            // Revenue dashboard uses srcDoc iframe — needs 'self' frame-src
                            "frame-ancestors 'none'",
                        ].join('; '),
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig

