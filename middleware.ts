import { NextRequest, NextResponse } from 'next/server'

// Known crawler/bot user-agent substrings
const BOT_PATTERNS = [
    'Googlebot',
    'bingbot',
    'Baiduspider',
    'YandexBot',
    'DuckDuckBot',
    'Slurp',          // Yahoo
    'facebookexternalhit',
    'Twitterbot',
    'LinkedInBot',
    'SemrushBot',
    'AhrefsBot',
    'MJ12bot',
    'DotBot',
    'rogerbot',
    'ia_archiver',    // Wayback Machine
    'CCBot',
    'anthropic-ai',
    'GPTBot',
    'ChatGPT-User',
    'PerplexityBot',
    'cohere-ai',
]

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Only apply to /situationroom routes
    if (!pathname.startsWith('/situationroom')) {
        return NextResponse.next()
    }

    const ua = request.headers.get('user-agent') ?? ''
    const isBot = BOT_PATTERNS.some((pattern) =>
        ua.toLowerCase().includes(pattern.toLowerCase())
    )

    if (isBot) {
        // Return a 403 with no body — bot sees nothing, no GA event fires
        return new NextResponse(null, { status: 403 })
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/situationroom', '/situationroom/:path*'],
}
