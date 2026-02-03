// Schema Markup Utilities for SEO

export interface LocalBusinessSchema {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    url: string;
    telephone: string;
    email?: string;
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
        '@type': 'LocalBusiness',
        name: 'Mid South Dumpster Rentals, LLC',
        description: 'Affordable dumpster rentals in Central Mississippi. 10, 15, 20-yard roll-off dumpsters with same-day delivery available.',
        url: 'https://midsouthdumpsterms.com',
        telephone: '+16013167891',
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
            { '@type': 'City', name: 'Jackson, MS' },
            { '@type': 'City', name: 'Brandon, MS' },
            { '@type': 'City', name: 'Clinton, MS' },
            { '@type': 'City', name: 'Flowood, MS' },
            { '@type': 'City', name: 'Pearl, MS' },
            { '@type': 'City', name: 'Ridgeland, MS' },
            { '@type': 'City', name: 'Madison, MS' },
            { '@type': 'City', name: 'Flora, MS' },
            { '@type': 'City', name: 'Canton, MS' },
            { '@type': 'City', name: 'Terry, MS' },
            { '@type': 'City', name: 'Byram, MS' },
            { '@type': 'City', name: 'Gluckstadt, MS' },
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
    areaServed: string;
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
    offers?: { price: string; description: string }[]
): ServiceSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType,
        provider: {
            '@type': 'LocalBusiness',
            name: 'Mid South Dumpster Rentals, LLC',
        },
        areaServed: city || 'Central Mississippi',
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
}

export function generateArticleSchema(
    headline: string,
    description: string,
    datePublished: string,
    dateModified?: string
): ArticleSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline,
        description,
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
