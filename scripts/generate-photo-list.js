const fs = require('fs');
const path = require('path');

function generatePhotoList() {
    const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery');
    
    if (!fs.existsSync(galleryDir)) {
        console.warn('[Gallery Setup] public/images/gallery does not exist. Generating empty list.');
        fs.writeFileSync(path.join(process.cwd(), 'lib', 'photo-list.json'), JSON.stringify([]));
        return;
    }

    const files = fs.readdirSync(galleryDir);
    const validPhotos = files
        .filter(file => {
            const lower = file.toLowerCase();
            return lower.endsWith('.jpg') || lower.endsWith('.png') || lower.endsWith('.jpeg');
        })
        .map(file => `/images/gallery/${file}`);

    fs.writeFileSync(path.join(process.cwd(), 'lib', 'photo-list.json'), JSON.stringify(validPhotos, null, 2));
    console.log(`[Gallery Setup] Generated photo-list.json with ${validPhotos.length} photos.`);
}

generatePhotoList();
