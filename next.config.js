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
}

module.exports = nextConfig
