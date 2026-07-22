// ─────────────────────────────────────────────────────────────────────────────
// lib/soro.ts
// Fetches and parses Soro blog articles server-side.
// Articles are cached for 4 hours (revalidate: 14400).
// ─────────────────────────────────────────────────────────────────────────────

const SORO_EMBED_URL =
  'https://app.trysoro.com/api/embed/78ae197c-d165-4ca9-91ac-1f2fb9558d79'
const SORO_API_BASE = 'https://app.trysoro.com'
const SORO_TOKEN = '78ae197c-d165-4ca9-91ac-1f2fb9558d79'

export interface SoroArticle {
  id: string
  title: string
  slug: string
  excerpt: string
  /** Human-readable date string e.g. "July 22, 2026" */
  date: string
  /** ISO 8601 date string */
  isoDate: string
  /** AI-generated image URL from Soro (we replace this with real photos) */
  image: string | null
}

/**
 * Fetches the list of published Soro articles by parsing the embed script.
 * Cached for 4 hours via Next.js fetch cache.
 */
export async function getSoroArticles(): Promise<SoroArticle[]> {
  try {
    const res = await fetch(SORO_EMBED_URL, {
      next: { revalidate: 14400 }, // 4 hours — Soro publishes once daily
    })
    if (!res.ok) return []

    const js = await res.text()

    // The embed script contains: var SORO_ARTICLES = [{...}];
    const match = js.match(/var SORO_ARTICLES = (\[[\s\S]*?\]);/)
    if (!match) return []

    return JSON.parse(match[1]) as SoroArticle[]
  } catch (err) {
    console.error('[Soro] Failed to fetch articles:', err)
    return []
  }
}

/**
 * Fetches the full HTML content of a single Soro article.
 * Cached for 4 hours via Next.js fetch cache.
 */
export async function getSoroArticleContent(articleId: string): Promise<string | null> {
  try {
    const url = `${SORO_API_BASE}/api/embed/${SORO_TOKEN}/article/${articleId}`
    const res = await fetch(url, { next: { revalidate: 14400 } })
    if (!res.ok) return null
    const data = await res.json()
    return (data.content as string) ?? null
  } catch (err) {
    console.error('[Soro] Failed to fetch article content:', err)
    return null
  }
}
