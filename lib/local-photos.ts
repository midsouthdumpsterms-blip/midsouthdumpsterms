import fs from 'fs';
import path from 'path';

/**
 * Returns a list of all local photo URLs in the public/images/gallery folder.
 */
export function getLocalPhotoPool(): string[] {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery');
    
    // Check if directory exists
    if (!fs.existsSync(galleryDir)) {
        return [];
    }
    
    const files = fs.readdirSync(galleryDir);
    
    return files
      .filter(file => {
        const lower = file.toLowerCase();
        return lower.endsWith('.jpg') || lower.endsWith('.png') || lower.endsWith('.jpeg');
      })
      .map(file => `/images/gallery/${file}`);
  } catch (err) {
    console.error('[Gallery] Failed to read local photo pool:', err);
    return [];
  }
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
