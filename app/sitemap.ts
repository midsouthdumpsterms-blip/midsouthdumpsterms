import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://midsouthdumpsterms.com'

    const serviceAreas = [
        'jackson',
        'brandon',
        'clinton',
        'flowood',
        'pearl',
        'ridgeland',
        'madison',
        'flora',
        'canton',
        'terry',
        'byram',
        'gluckstadt',
        'florence',
        'richland',
    ]

    const countyHubs = [
        'hinds-county',
        'madison-county',
        'rankin-county',
    ]

    const serviceAreaUrls = serviceAreas.map((city) => ({
        url: `${baseUrl}/service-areas/${city}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const countyHubUrls = countyHubs.map((county) => ({
        url: `${baseUrl}/service-areas/${county}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.85,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/service-areas`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        ...serviceAreaUrls,
        ...countyHubUrls,
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/what-can-i-put-in-a-dumpster`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/dumpster-rental-guide-for-home-renovations`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/dumpster-rental-prices-jackson-ms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/how-to-choose-dumpster-size`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/home-renovation-dumpster-guide-central-ms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/best-dumpster-rental-central-ms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/same-day-dumpster-rental-jackson-ms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/roofing-dumpster-rental-jackson-ms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/estate-cleanout-dumpster-rental-jackson-ms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/estate-cleanout-dumpster-rental-central-ms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/roofing-contractor-dumpster-rental-jackson-ms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/dumpster-rental-near-me-jackson-ms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/dumpster-rental-brandon-ms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/dumpster-rental-madison-ms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/20-yard-dumpster-rental-jackson-ms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/spring-cleaning-dumpster-rental-central-ms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/blog/do-i-need-a-permit-dumpster-jackson-ms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/dumpster-rental-vs-junk-removal-jackson-ms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ]
}
