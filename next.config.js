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

    // 301 Redirects - capture orphaned traffic from old ad campaigns
    async redirects() {
        return [
            {
                source: '/booking',
                destination: '/book-online',
                permanent: true, // 301 redirect - passes SEO authority to book-online page
            },
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
                            // GA, GTM, SurvCart, and inline scripts (inline needed for Next.js hydration)
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://embed.survcart.com",
                            // Inline styles needed for Next.js, Google Fonts, SurvCart
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://embed.survcart.com",
                            "font-src 'self' https://fonts.gstatic.com",
                            // Images from self, data URIs, blobs, and any HTTPS source (for gallery/blog images)
                            "img-src 'self' data: blob: https:",
                            // GA telemetry + self API calls
                            "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
                            // Survcart booking iframe (book-online page)
                            "frame-src https://embed.survcart.com",
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

