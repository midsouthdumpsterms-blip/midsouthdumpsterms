// Schema Markup Utilities for SEO

/**
 * Stable identifier for the business entity.
 *
 * The LocalBusiness node is emitted on every page. Without an @id, Google sees
 * 78 unlinked business nodes instead of one entity referenced 78 times, and
 * other nodes (Service.provider, Offer.seller) cannot point at it.
 */
export const BUSINESS_ID = 'https://midsouthdumpsterms.com/#business'

export interface LocalBusinessSchema {
    '@context': string;
    '@type': string | string[];
    '@id': string;
    name: string;
    description: string;
    slogan?: string;
    url: string;
    telephone: string;
    email?: string;
    image?: string;
    logo?: string;
    foundingDate?: string;
    knowsAbout?: string[];
    sameAs?: string[];
    address: {
        '@type': string;
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    geo?: {
        '@type': string;
        latitude: number;
        longitude: number;
    };
    openingHoursSpecification: {
        '@type': string;
        dayOfWeek: string[];
        opens: string;
        closes: string;
    }[];
    priceRange?: string;
    areaServed?: string[] | object[];
}

export function generateLocalBusinessSchema(): LocalBusinessSchema {
    return {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
        '@id': BUSINESS_ID,
        name: 'Mid South Dumpster Rentals, LLC',
        description: 'Locally-owned dumpster rental company serving Central Mississippi. Offering 10, 15, and 20-yard roll-off dumpsters with same-day delivery available 7 days a week. Flat-rate pricing starting at $349 with no hidden fees.',
        slogan: 'Same-Day Dumpster Delivery, 7 Days a Week',
        url: 'https://midsouthdumpsterms.com',
        telephone: '+16013167891',
        image: 'https://midsouthdumpsterms.com/images/dumpster-trailer-grey.jpg',
        logo: 'https://midsouthdumpsterms.com/icon.png',
        foundingDate: '2025',
        knowsAbout: [
            'roll-off dumpster rental',
            'residential dumpster rental',
            'construction waste removal',
            'estate cleanout',
            'roofing debris disposal',
            'home renovation waste disposal',
            'Central Mississippi waste management',
            'Jackson MS dumpster rental',
        ],
        sameAs: [
            'https://www.yelp.com/biz/mid-south-dumpster-rentals-jackson-2',
            'https://www.facebook.com/61578838911863/',
            'https://share.google/Q9EyySSu62sbhZt6L',
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: '3080 B John R Lynch St',
            addressLocality: 'Jackson',
            addressRegion: 'MS',
            postalCode: '39209',
            addressCountry: 'US',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 32.2988,
            longitude: -90.1848,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '07:00',
                closes: '19:00',
            },
        ],
        priceRange: '$$',
        areaServed: [
            { '@type': 'City', name: 'Jackson', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
            { '@type': 'City', name: 'Brandon', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
            { '@type': 'City', name: 'Clinton', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
            { '@type': 'City', name: 'Flowood', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
            { '@type': 'City', name: 'Pearl', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
            { '@type': 'City', name: 'Ridgeland', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
            { '@type': 'City', name: 'Madison', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
            { '@type': 'City', name: 'Flora', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
            { '@type': 'City', name: 'Canton', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
            { '@type': 'City', name: 'Terry', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
            { '@type': 'City', name: 'Byram', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
            { '@type': 'City', name: 'Gluckstadt', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
            { '@type': 'City', name: 'Florence', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
            { '@type': 'City', name: 'Richland', containedInPlace: { '@type': 'State', name: 'Mississippi' } },
        ],
    };
}

/**
 * The full rental price list.
 *
 * This used to be inlined into the LocalBusiness node, which meant all nine
 * Offer objects shipped in the HTML of all 78 pages -- including the privacy
 * policy. Emit it only where pricing is the subject of the page.
 */
export function generateOfferCatalogSchema(): object {
    return {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        '@id': 'https://midsouthdumpsterms.com/#pricing',
        provider: { '@id': BUSINESS_ID },
        name: 'Roll-Off Dumpster Rentals — All Sizes & Rental Periods',
        itemListElement: [
            // ── 10-YARD: all durations ──
            {
                '@type': 'Offer',
                name: '10-Yard Dumpster — 1-Day Rental',
                description: '10-yard roll-off dumpster, 1-day rental. Includes 1 ton (2,000 lbs). Ideal for small cleanouts, garage cleanup, minor renovations, and yard debris. Overage: $55/ton (prorated).',
                price: '349',
                priceCurrency: 'USD',
                priceSpecification: { '@type': 'UnitPriceSpecification', price: '349', priceCurrency: 'USD', unitText: '1-day rental' },
                eligibleRegion: { '@type': 'State', name: 'Mississippi' },
                seller: { '@id': BUSINESS_ID },
            },
            {
                '@type': 'Offer',
                name: '10-Yard Dumpster — 3-Day Rental',
                description: '10-yard roll-off dumpster, 3-day rental. Includes 1 ton (2,000 lbs). Price is $379 for 3 days. Overage: $55/ton (prorated).',
                price: '379',
                priceCurrency: 'USD',
                priceSpecification: { '@type': 'UnitPriceSpecification', price: '379', priceCurrency: 'USD', unitText: '3-day rental' },
                eligibleRegion: { '@type': 'State', name: 'Mississippi' },
                seller: { '@id': BUSINESS_ID },
            },
            {
                '@type': 'Offer',
                name: '10-Yard Dumpster — 7-Day Rental',
                description: '10-yard roll-off dumpster, 7-day rental. Includes 1 ton (2,000 lbs). Price is $399 for 7 days. Overage: $55/ton (prorated). Extended rental: $50/day after 7 days.',
                price: '399',
                priceCurrency: 'USD',
                priceSpecification: { '@type': 'UnitPriceSpecification', price: '399', priceCurrency: 'USD', unitText: '7-day rental' },
                eligibleRegion: { '@type': 'State', name: 'Mississippi' },
                seller: { '@id': BUSINESS_ID },
            },
            // ── 15-YARD: all durations ──
            {
                '@type': 'Offer',
                name: '15-Yard Dumpster — 1-Day Rental',
                description: '15-yard roll-off dumpster (most popular size), 1-day rental. Includes 2 tons (4,000 lbs). Ideal for home renovations, roofing, estate cleanouts, and medium construction. Overage: $55/ton (prorated).',
                price: '399',
                priceCurrency: 'USD',
                priceSpecification: { '@type': 'UnitPriceSpecification', price: '399', priceCurrency: 'USD', unitText: '1-day rental' },
                eligibleRegion: { '@type': 'State', name: 'Mississippi' },
                seller: { '@id': BUSINESS_ID },
            },
            {
                '@type': 'Offer',
                name: '15-Yard Dumpster — 3-Day Rental',
                description: '15-yard roll-off dumpster, 3-day rental. Includes 2 tons (4,000 lbs). Price is $429 for 3 days. Overage: $55/ton (prorated).',
                price: '429',
                priceCurrency: 'USD',
                priceSpecification: { '@type': 'UnitPriceSpecification', price: '429', priceCurrency: 'USD', unitText: '3-day rental' },
                eligibleRegion: { '@type': 'State', name: 'Mississippi' },
                seller: { '@id': BUSINESS_ID },
            },
            {
                '@type': 'Offer',
                name: '15-Yard Dumpster — 7-Day Rental',
                description: '15-yard roll-off dumpster, 7-day rental. Includes 2 tons (4,000 lbs). Price is $449 for 7 days. Extended rental: $50/day after 7 days.',
                price: '449',
                priceCurrency: 'USD',
                priceSpecification: { '@type': 'UnitPriceSpecification', price: '449', priceCurrency: 'USD', unitText: '7-day rental' },
                eligibleRegion: { '@type': 'State', name: 'Mississippi' },
                seller: { '@id': BUSINESS_ID },
            },
            // ── 20-YARD: all durations ──
            {
                '@type': 'Offer',
                name: '20-Yard Dumpster — 1-Day Rental',
                description: '20-yard roll-off dumpster, 1-day rental. Includes 3 tons (6,000 lbs). Hard weight cap at 6,000 lbs — no overage allowed. Ideal for large renovations, new construction, major demolition, and commercial projects.',
                price: '449',
                priceCurrency: 'USD',
                priceSpecification: { '@type': 'UnitPriceSpecification', price: '449', priceCurrency: 'USD', unitText: '1-day rental' },
                eligibleRegion: { '@type': 'State', name: 'Mississippi' },
                seller: { '@id': BUSINESS_ID },
            },
            {
                '@type': 'Offer',
                name: '20-Yard Dumpster — 3-Day Rental',
                description: '20-yard roll-off dumpster, 3-day rental. Price is $479 for 3 days. Includes 3 tons (6,000 lbs). Hard weight cap — no overage allowed.',
                price: '479',
                priceCurrency: 'USD',
                priceSpecification: { '@type': 'UnitPriceSpecification', price: '479', priceCurrency: 'USD', unitText: '3-day rental' },
                eligibleRegion: { '@type': 'State', name: 'Mississippi' },
                seller: { '@id': BUSINESS_ID },
            },
            {
                '@type': 'Offer',
                name: '20-Yard Dumpster — 7-Day Rental',
                description: '20-yard roll-off dumpster, 7-day rental. Price is $499 for 7 days. Includes 3 tons (6,000 lbs). Hard weight cap at 6,000 lbs — no overage allowed. Extended rental: $50/day after 7 days.',
                price: '499',
                priceCurrency: 'USD',
                priceSpecification: { '@type': 'UnitPriceSpecification', price: '499', priceCurrency: 'USD', unitText: '7-day rental' },
                eligibleRegion: { '@type': 'State', name: 'Mississippi' },
                seller: { '@id': BUSINESS_ID },
            },
        ],
    }
}

export interface ServiceSchema {
    '@context': string;
    '@type': string;
    serviceType: string;
    provider: {
        '@type': string;
        '@id': string;
        name: string;
    };
    areaServed: string | object[];
    description: string;
    offers?: {
        '@type': string;
        price: string;
        priceCurrency: string;
        description: string;
    }[];
}

export function generateServiceSchema(
    serviceType: string,
    description: string,
    city?: string,
    offers?: { price: string; description: string }[],
    zipCodes?: string[]
): ServiceSchema {
    let areaServed: string | object[];

    if (zipCodes && zipCodes.length > 0) {
        // Create detailed areaServed with city and zip codes
        areaServed = [
            {
                '@type': 'City',
                name: city || 'Central Mississippi',
                containedInPlace: {
                    '@type': 'State',
                    name: 'Mississippi'
                }
            },
            ...zipCodes.map(zip => ({
                '@type': 'PostalCode',
                postalCode: zip
            }))
        ];
    } else {
        // Fallback to simple string
        areaServed = city || 'Central Mississippi';
    }

    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType,
        provider: {
            '@type': 'LocalBusiness',
            '@id': BUSINESS_ID,
            name: 'Mid South Dumpster Rentals, LLC',
        },
        areaServed,
        description,
        offers: offers?.map((offer) => ({
            '@type': 'Offer',
            price: offer.price,
            priceCurrency: 'USD',
            description: offer.description,
        })),
    };
}

export interface FAQSchema {
    '@context': string;
    '@type': string;
    mainEntity: {
        '@type': string;
        name: string;
        acceptedAnswer: {
            '@type': string;
            text: string;
        };
    }[];
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]): FAQSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export interface ArticleSchema {
    '@context': string;
    '@type': string;
    headline: string;
    description: string;
    author: object;
    publisher: object;
    datePublished: string;
    dateModified?: string;
    image?: string;
}

export function generateArticleSchema(
    headline: string,
    description: string,
    datePublished: string,
    image?: string,
    dateModified?: string
): ArticleSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline,
        description,
        image: image || 'https://midsouthdumpsterms.com/opengraph-image.jpg',
        // A named human author is a stronger authorship signal than the company
        // name for a local service blog, and Andrew is already the face of the
        // About page.
        author: {
            '@type': 'Person',
            name: 'Andrew Tyre',
            jobTitle: 'Founder',
            url: 'https://midsouthdumpsterms.com/about',
            worksFor: { '@id': BUSINESS_ID },
        },
        publisher: { '@id': BUSINESS_ID },
        datePublished,
        dateModified: dateModified || datePublished,
    };
}

export interface BreadcrumbSchema {
    '@context': string;
    '@type': string;
    itemListElement: {
        '@type': string;
        position: number;
        name: string;
        item: string;
    }[];
}

export function generateBreadcrumbSchema(
    breadcrumbs: { name: string; url: string }[]
): BreadcrumbSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
        })),
    };
}

export interface WebSiteSchema {
    '@context': string;
    '@type': string;
    name: string;
    alternateName?: string[];
    url: string;
}

export function generateWebSiteSchema(): WebSiteSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Mid South Dumpster Rentals',
        alternateName: ['Mid South Dumpster Rentals, LLC', 'Mid South', 'Mid South Dumpster'],
        url: 'https://midsouthdumpsterms.com/',
    };
}

// City-level geo schema for local blog posts
export function generateCityGeoSchema(
    cityName: string,
    latitude: number,
    longitude: number,
    zipCodes: string[]
): object {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Mid South Dumpster Rentals, LLC',
        url: 'https://midsouthdumpsterms.com',
        telephone: '+16013167891',
        image: 'https://midsouthdumpsterms.com/icon.png',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jackson',
            addressRegion: 'MS',
            postalCode: '39209',
            addressCountry: 'US',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude,
            longitude,
        },
        areaServed: [
            {
                '@type': 'City',
                name: cityName,
                containedInPlace: { '@type': 'State', name: 'Mississippi' },
            },
            ...zipCodes.map((zip) => ({
                '@type': 'PostalCode',
                postalCode: zip,
            })),
        ],
    };
}

// Helper to inject schema into page
export function injectSchema(schema: object): string {
    return JSON.stringify(schema);
}
