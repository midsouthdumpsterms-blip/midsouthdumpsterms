const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'public/images/gallery/Mid South Gallery');
const destDir = path.join(__dirname, 'public/images/gallery');

const files = fs.readdirSync(srcDir);
for (const file of files) {
    const srcPath = path.join(srcDir, file);
    if (file.includes('(1).') || file.toLowerCase().endsWith('.mov') || file.toLowerCase().endsWith('.heic')) {
        fs.unlinkSync(srcPath);
    } else {
        const destPath = path.join(destDir, file);
        fs.renameSync(srcPath, destPath);
    }
}
fs.rmdirSync(srcDir);
console.log("Cleanup complete!");
