// Schema Markup Utilities for SEO

export interface LocalBusinessSchema {
    '@context': string;
    '@type': string | string[];
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
    aggregateRating?: {
        '@type': string;
        ratingValue: string;
        reviewCount: string;
        bestRating: string;
        worstRating: string;
    };
    hasOfferCatalog?: object;
    review?: object[];
}

export function generateLocalBusinessSchema(): LocalBusinessSchema {
    return {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
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
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '23',
            bestRating: '5',
            worstRating: '1',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
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
                    seller: { '@type': 'LocalBusiness', name: 'Mid South Dumpster Rentals, LLC' },
                },
                {
                    '@type': 'Offer',
                    name: '10-Yard Dumpster — 3-Day Rental',
                    description: '10-yard roll-off dumpster, 3-day rental. Includes 1 ton (2,000 lbs). Price is $379 for 3 days. Overage: $55/ton (prorated).',
                    price: '379',
                    priceCurrency: 'USD',
                    priceSpecification: { '@type': 'UnitPriceSpecification', price: '379', priceCurrency: 'USD', unitText: '3-day rental' },
                    eligibleRegion: { '@type': 'State', name: 'Mississippi' },
                    seller: { '@type': 'LocalBusiness', name: 'Mid South Dumpster Rentals, LLC' },
                },
                {
                    '@type': 'Offer',
                    name: '10-Yard Dumpster — 7-Day Rental',
                    description: '10-yard roll-off dumpster, 7-day rental. Includes 1 ton (2,000 lbs). Price is $399 for 7 days. Overage: $55/ton (prorated). Extended rental: $50/day after 7 days.',
                    price: '399',
                    priceCurrency: 'USD',
                    priceSpecification: { '@type': 'UnitPriceSpecification', price: '399', priceCurrency: 'USD', unitText: '7-day rental' },
                    eligibleRegion: { '@type': 'State', name: 'Mississippi' },
                    seller: { '@type': 'LocalBusiness', name: 'Mid South Dumpster Rentals, LLC' },
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
                    seller: { '@type': 'LocalBusiness', name: 'Mid South Dumpster Rentals, LLC' },
                },
                {
                    '@type': 'Offer',
                    name: '15-Yard Dumpster — 3-Day Rental',
                    description: '15-yard roll-off dumpster, 3-day rental. Includes 2 tons (4,000 lbs). Price is $429 for 3 days. Overage: $55/ton (prorated).',
                    price: '429',
                    priceCurrency: 'USD',
                    priceSpecification: { '@type': 'UnitPriceSpecification', price: '429', priceCurrency: 'USD', unitText: '3-day rental' },
                    eligibleRegion: { '@type': 'State', name: 'Mississippi' },
                    seller: { '@type': 'LocalBusiness', name: 'Mid South Dumpster Rentals, LLC' },
                },
                {
                    '@type': 'Offer',
                    name: '15-Yard Dumpster — 7-Day Rental',
                    description: '15-yard roll-off dumpster, 7-day rental. Includes 2 tons (4,000 lbs). Price is $449 for 7 days. Extended rental: $50/day after 7 days.',
                    price: '449',
                    priceCurrency: 'USD',
                    priceSpecification: { '@type': 'UnitPriceSpecification', price: '449', priceCurrency: 'USD', unitText: '7-day rental' },
                    eligibleRegion: { '@type': 'State', name: 'Mississippi' },
                    seller: { '@type': 'LocalBusiness', name: 'Mid South Dumpster Rentals, LLC' },
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
                    seller: { '@type': 'LocalBusiness', name: 'Mid South Dumpster Rentals, LLC' },
                },
                {
                    '@type': 'Offer',
                    name: '20-Yard Dumpster — 3-Day Rental',
                    description: '20-yard roll-off dumpster, 3-day rental. Price is $479 for 3 days. Includes 3 tons (6,000 lbs). Hard weight cap — no overage allowed.',
                    price: '479',
                    priceCurrency: 'USD',
                    priceSpecification: { '@type': 'UnitPriceSpecification', price: '479', priceCurrency: 'USD', unitText: '3-day rental' },
                    eligibleRegion: { '@type': 'State', name: 'Mississippi' },
                    seller: { '@type': 'LocalBusiness', name: 'Mid South Dumpster Rentals, LLC' },
                },
                {
                    '@type': 'Offer',
                    name: '20-Yard Dumpster — 7-Day Rental',
                    description: '20-yard roll-off dumpster, 7-day rental. Price is $499 for 7 days. Includes 3 tons (6,000 lbs). Hard weight cap at 6,000 lbs — no overage allowed. Extended rental: $50/day after 7 days.',
                    price: '499',
                    priceCurrency: 'USD',
                    priceSpecification: { '@type': 'UnitPriceSpecification', price: '499', priceCurrency: 'USD', unitText: '7-day rental' },
                    eligibleRegion: { '@type': 'State', name: 'Mississippi' },
                    seller: { '@type': 'LocalBusiness', name: 'Mid South Dumpster Rentals, LLC' },
                },
            ],
        },
        review: [
            {
                '@type': 'Review',
                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                author: { '@type': 'Person', name: 'Jackson MS Customer' },
                reviewBody: 'Mid South Dumpster Rentals delivered the same day I called. Price was exactly what they quoted — no surprise fees. Will definitely use them again for my next project.',
            },
            {
                '@type': 'Review',
                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                author: { '@type': 'Person', name: 'Brandon MS Contractor' },
                reviewBody: 'Best dumpster rental service in Central Mississippi. They showed up on time, picked up on time, and the flat-rate pricing made budgeting easy for my construction project.',
            },
        ],
    };
}

export interface ServiceSchema {
    '@context': string;
    '@type': string;
    serviceType: string;
    provider: {
        '@type': string;
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
    author: {
        '@type': string;
        name: string;
    };
    publisher: {
        '@type': string;
        name: string;
    };
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
        author: {
            '@type': 'Organization',
            name: 'Mid South Dumpster Rentals, LLC',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Mid South Dumpster Rentals, LLC',
        },
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

// Helper to inject schema into page
export function injectSchema(schema: object): string {
    return JSON.stringify(schema);
}
