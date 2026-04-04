/**
 * Replaces ALL hardcoded <a href="https://embed.survcart.com/...">...</a> tags
 * across the entire Next.js app with <button> elements that trigger the Survcart popup.
 */
const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '../app');
const COMPONENTS_DIR = path.join(__dirname, '../components');

function getAllTsxFiles(dir) {
    const results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...getAllTsxFiles(full));
        } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
            results.push(full);
        }
    }
    return results;
}

// Matches <a ...href="https://embed.survcart.com..."...>...any text...</a>
// including multiline variants
const SURVCART_ANCHOR_REGEX = /<a\s[^>]*href=["']https:\/\/embed\.survcart\.com[^"']*["'][^>]*>[\s\S]*?<\/a>/g;

function replaceAnchorWithButton(content) {
    return content.replace(SURVCART_ANCHOR_REGEX, (match) => {
        // Extract className from the matched anchor
        const classMatch = match.match(/className=["']([^"']+)["']/);
        let className = classMatch ? classMatch[1] : 'btn btn-primary';
        
        // Clean up any existing survcart class duplication
        className = className.replace(/\s*survcart-embed-presenter/g, '').trim();
        
        return `<button type="button" className="${className} survcart-embed-presenter">Book Now</button>`;
    });
}

const files = [...getAllTsxFiles(APP_DIR), ...getAllTsxFiles(COMPONENTS_DIR)];
let changed = 0;

for (const file of files) {
    const original = fs.readFileSync(file, 'utf8');
    const updated = replaceAnchorWithButton(original);
    if (updated !== original) {
        fs.writeFileSync(file, updated, 'utf8');
        console.log(`✅ Fixed: ${path.relative(path.join(__dirname, '..'), file)}`);
        changed++;
    }
}

console.log(`\nDone. ${changed} files updated.`);
