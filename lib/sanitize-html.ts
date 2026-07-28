/**
 * Lightweight server-side HTML sanitizer for AI-generated blog content.
 *
 * Strips the primary XSS attack vectors from Claude-generated HTML before it
 * is stored in the database or rendered:
 *   - <script> blocks
 *   - <iframe>, <object>, <embed>, <form> tags
 *   - Inline event handlers (onclick, onerror, onload, etc.)
 *   - javascript: and data: URI schemes in href/src attributes
 *   - <link> and <meta> tags
 *   - HTML comments
 */
export function sanitizeHtml(html: string): string {
    if (!html) return ''

    let clean = html

    // 1. Strip <script> blocks and their content
    clean = clean.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')

    // 2. Strip dangerous block-level tags entirely (including content)
    clean = clean.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    clean = clean.replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    clean = clean.replace(/<embed\b[^>]*\/?>/gi, '')
    clean = clean.replace(/<form\b[^<]*(?:(?!<\/form>)<[^<]*)*<\/form>/gi, '')
    clean = clean.replace(/<link\b[^>]*\/?>/gi, '')
    clean = clean.replace(/<meta\b[^>]*\/?>/gi, '')
    clean = clean.replace(/<base\b[^>]*\/?>/gi, '')
    clean = clean.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')

    // 3. Strip inline event handlers (on*)
    clean = clean.replace(/\s+on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/gi, '')

    // 4. Strip javascript: and data: URI schemes from href and src
    clean = clean.replace(/\bhref\s*=\s*["']?\s*javascript:[^"'\s>]*/gi, 'href="#"')
    clean = clean.replace(/\bsrc\s*=\s*["']?\s*javascript:[^"'\s>]*/gi, 'src=""')
    clean = clean.replace(/\bhref\s*=\s*["']?\s*data:[^"'\s>]*/gi, 'href="#"')
    clean = clean.replace(/\bsrc\s*=\s*["']?\s*data:[^"'\s>]*/gi, 'src=""')

    // 5. Strip HTML comments
    clean = clean.replace(/<!--[\s\S]*?-->/g, '')

    return clean
}
