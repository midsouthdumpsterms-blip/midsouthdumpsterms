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
        'raymond',
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

    // Service sub-pages
    const serviceSubPages = [
        'residential-dumpster-rental',
        'commercial-dumpster-rental',
        'construction-dumpster-rental',
        'roll-off-dumpster-rental',
        'yard-waste-dumpster-rental',
        'same-day-dumpster-rental',
    ].map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.85,
    }))

    // Orphan pages — debris removal and waste disposal per city
    const orphanCities = [
        'jackson', 'brandon', 'byram', 'clinton', 'florence',
        'flowood', 'madison', 'pearl', 'richland', 'ridgeland',
        'terry', 'canton', 'flora', 'gluckstadt',
    ]

    const debrisRemovalUrls = orphanCities.map((city) => ({
        url: `${baseUrl}/debris-removal-${city}-ms`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }))

    const wasteDisposalUrls = orphanCities.map((city) => ({
        url: `${baseUrl}/waste-disposal-${city}-ms`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }))

    // Dumpster size pages
    const sizePages = [
        '',
        '10-yard-dumpster-rental',
        '15-yard-dumpster-rental',
        '20-yard-dumpster-rental',
    ].map((slug) => ({
        url: slug ? `${baseUrl}/sizes/${slug}` : `${baseUrl}/sizes`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.88,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/book-online`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        ...serviceSubPages,
        ...sizePages,
        {
            url: `${baseUrl}/service-areas`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        ...serviceAreaUrls,
        ...countyHubUrls,
        ...debrisRemovalUrls,
        ...wasteDisposalUrls,
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/community`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.65,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms-and-conditions`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.75,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.65,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        ...[
            'dumpster-rental-clinton-ms',
            'dumpster-rental-ridgeland-ms',
            'dumpster-rental-flowood-ms',
            'dumpster-rental-byram-ms',
            'dumpster-rental-terry-ms',
            'dumpster-rental-canton-ms',
            'dumpster-rental-flora-ms',
            'dumpster-rental-florence-ms',
            'dumpster-rental-richland-ms',
            'what-can-i-put-in-a-dumpster',
            'dumpster-rental-guide-for-home-renovations',
            'dumpster-rental-prices-jackson-ms',
            'how-to-choose-dumpster-size',
            'home-renovation-dumpster-guide-central-ms',
            'best-dumpster-rental-central-ms',
            'same-day-dumpster-rental-jackson-ms',
            'roofing-dumpster-rental-jackson-ms',
            'estate-cleanout-dumpster-rental-jackson-ms',
            'estate-cleanout-dumpster-rental-central-ms',
            'roofing-contractor-dumpster-rental-jackson-ms',
            'dumpster-rental-near-me-jackson-ms',
            'dumpster-rental-brandon-ms',
            'dumpster-rental-madison-ms',
            '20-yard-dumpster-rental-jackson-ms',
            'spring-cleaning-dumpster-rental-central-ms',
            'do-i-need-a-permit-dumpster-jackson-ms',
            'dumpster-rental-vs-junk-removal-jackson-ms',
            'dumpster-rental-jackson-ms',
            'dumpster-rental-vs-bagster-jackson-ms',
            'garage-cleanout-dumpster-rental-central-ms',
            'how-long-can-you-keep-a-rental-dumpster',
            'how-to-dispose-appliances-mattresses-jackson-ms',
            'rental-property-cleanout-dumpster-rental-ms',
            'spring-cleaning-checklist-central-ms',
            'storm-cleanup-dumpster-rental-jackson-ms',
            'contractor-dumpster-rental-jackson-ms',
            'foreclosure-cleanout-dumpster-rental-ms',
            'yard-waste-removal-dumpster-rental-jackson-ms',
        ].map((slug) => ({
            url: `${baseUrl}/blog/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.75,
        }))
    ]
}
