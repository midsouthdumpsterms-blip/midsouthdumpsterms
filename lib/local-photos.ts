import photoList from './photo-list.json';

/**
 * Returns a list of all local photo URLs in the public/images/gallery folder.
 * Uses a pre-generated JSON list to avoid Vercel bundling the entire folder into
 * serverless functions, which exceeds the 50MB limit.
 */
export function getLocalPhotoPool(): string[] {
  return photoList;
}

/**
 * Deterministically picks a single photo based on the slug.
 */
export function pickPhotoForSlug(photos: string[], slug: string): string | null {
  if (photos.length === 0) return null;

  // Simple hash: sum of (charCode × position) — spreads slugs evenly
  const hash = slug
    .split('')
    .reduce((acc, char, i) => acc + char.charCodeAt(0) * (i + 1), 0);

  return photos[hash % photos.length];
}

/**
 * Picks a random selection of photos for the gallery grid.
 */
export function pickRandomPhotos(photos: string[], count: number = 4): string[] {
  if (photos.length === 0) return [];
  const shuffled = [...photos].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
