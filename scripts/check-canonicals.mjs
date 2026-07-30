import fs from 'node:fs'
import path from 'node:path'

// Guards against the bug fixed in July 2026: every page.tsx must declare its
// own alternates.canonical (or, for dynamic routes, set it inside
// generateMetadata). Without this, pages silently fall back to whatever
// canonical a parent layout defines, which can point every page at the
// homepage and tank indexing sitewide.

const APP_DIR = path.join(process.cwd(), 'app')

function walk(dir, files = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name)
        if (entry.isDirectory()) {
            if (entry.name === 'situationroom') continue // internal tool, blocked in robots.txt
            walk(full, files)
        } else if (entry.name === 'page.tsx') {
            files.push(full)
        }
    }
    return files
}

const missing = walk(APP_DIR).filter((file) => {
    const src = fs.readFileSync(file, 'utf8')
    return !src.includes('alternates:') && !src.includes('canonical')
})

if (missing.length > 0) {
    console.error('\nBuild blocked: the following pages have no alternates.canonical set:\n')
    for (const file of missing) console.error('  -', path.relative(process.cwd(), file))
    console.error('\nAdd `alternates: { canonical: \'https://midsouthdumpsterms.com/<path>\' }` to each page\'s metadata (or inside generateMetadata for dynamic routes) before deploying.\n')
    process.exit(1)
}

console.log(`Canonical check passed (${walk(APP_DIR).length} pages).`)
