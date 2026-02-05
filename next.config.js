/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com'], // For Google Business Profile images
        formats: ['image/webp'], // Prioritize WebP format
        deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Responsive breakpoints
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Icon sizes
        minimumCacheTTL: 60, // Cache images for 60 seconds
    },
}

module.exports = nextConfig
