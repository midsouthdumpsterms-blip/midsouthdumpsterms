import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/situationroom', '/situationroom/'],
        },
        sitemap: 'https://midsouthdumpsterms.com/sitemap.xml',
    }
}
