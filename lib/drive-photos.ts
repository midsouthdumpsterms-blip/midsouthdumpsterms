// ─────────────────────────────────────────────────────────────────────────────
// lib/drive-photos.ts
// Fetches the photo pool from Andrew's Google Drive folder.
// Photos are cached for 4 hours and assigned to Soro articles deterministically
// so each article always gets the same photo (no database/state needed).
// ─────────────────────────────────────────────────────────────────────────────

const DRIVE_FOLDER_ID = '1Qv-lH_BOWoI7l_j2wZ9GfwGWKBupeDNJ'

interface DriveFile {
  id: string
  name: string
}

/**
 * Fetches all image files from the Google Drive photo pool folder.
 * Requires GOOGLE_DRIVE_API_KEY in environment variables.
 * Returns an array of usable image URLs.
 */
export async function getDrivePhotoPool(): Promise<string[]> {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY
  if (!apiKey) {
    // Graceful no-op — site works fine without photos
    return []
  }

  try {
    // List all image files in the shared folder
    const url = new URL('https://www.googleapis.com/drive/v3/files')
    url.searchParams.set('q', `'${DRIVE_FOLDER_ID}' in parents and mimeType contains 'image/' and trashed = false`)
    url.searchParams.set('fields', 'files(id,name,thumbnailLink)')
    url.searchParams.set('pageSize', '500')
    url.searchParams.set('orderBy', 'name')
    url.searchParams.set('key', apiKey)

    const res = await fetch(url.toString(), {
      next: { revalidate: 14400 }, // refresh pool every 4 hours
    })

    if (!res.ok) {
      console.error('[Drive] API error:', res.status, await res.text())
      return []
    }

    const data = await res.json()
    const files: any[] = data.files || []

    // Build uncropped direct-access image URLs
    return files.map(
      f => (f.thumbnailLink ? f.thumbnailLink.replace('=s220', '=w860') : '')
    ).filter(url => url !== '')
  } catch (err) {
    console.error('[Drive] Failed to fetch photo pool:', err)
    return []
  }
}

/**
 * Picks a photo from the pool for a given article slug.
 * Uses a deterministic hash so the same article always gets the same photo,
 * and different articles spread across the pool without repeating.
 */
export function pickPhotoForSlug(photos: string[], slug: string): string | null {
  if (photos.length === 0) return null

  // Simple hash: sum of (charCode × position) — spreads slugs evenly
  const hash = slug
    .split('')
    .reduce((acc, char, i) => acc + char.charCodeAt(0) * (i + 1), 0)

  return photos[hash % photos.length]
}
