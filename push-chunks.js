const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'public/images/gallery');
const files = fs.readdirSync(galleryDir).map(f => path.join('public/images/gallery', f));

// Get only untracked/unstaged images
const status = execSync('git status --porcelain').toString();
const untrackedFiles = files.filter(f => status.includes(path.basename(f)));

console.log(`Found ${untrackedFiles.length} files to push one-by-one.`);

for (let i = 0; i < untrackedFiles.length; i++) {
    const file = untrackedFiles[i];
    console.log(`Pushing file ${i + 1} of ${untrackedFiles.length}: ${file}...`);
    
    execSync(`git add "${file}"`);
    execSync(`git commit -m "chore: add gallery image ${path.basename(file)}"`);
    
    let pushed = false;
    let attempts = 0;
    while (!pushed && attempts < 10) {
        try {
            execSync(`git push origin main`);
            pushed = true;
        } catch (e) {
            attempts++;
            console.log(`Failed to push, retrying... (${attempts})`);
        }
    }
    if (!pushed) {
        console.error("FATAL: Could not push file after 10 attempts.");
        process.exit(1);
    }
}
console.log("All files pushed successfully!");
