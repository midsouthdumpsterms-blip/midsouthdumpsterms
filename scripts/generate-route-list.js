/**
 * Walks app/ and writes lib/route-list.json — every statically routable page,
 * with the file's last-modified date.
 *
 * The sitemap used to be a hand-maintained array, which silently drifted out of
 * sync with the filesystem: it listed /waste-disposal-brandon-ms (which never
 * existed, so Google logged a 404) and omitted seven pages that did exist.
 * Deriving it from disk makes that class of bug impossible.
 */
const fs = require('fs')
const path = require('path')

const APP_DIR = path.join(__dirname, '..', 'app')
const OUT = path.join(__dirname, '..', 'lib', 'route-list.json')

// Routes that exist but must never appear in the sitemap.
const EXCLUDE = [
    /^\/situationroom/, // internal dashboard, blocked in robots.txt
    /^\/api\//,
    /\[/, // dynamic segments — emitted separately from the DB/blog list
]

function walk(dir, out = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name)
        if (entry.isDirectory()) {
            walk(full, out)
        } else if (entry.name === 'page.tsx') {
            out.push(full)
        }
    }
    return out
}

const routes = walk(APP_DIR)
    .map((file) => {
        const rel = path
            .relative(APP_DIR, file)
            .split(path.sep)
            .join('/')
            .replace(/\/?page\.tsx$/, '')
        return {
            route: '/' + rel,
            lastModified: fs.statSync(file).mtime.toISOString(),
        }
    })
    .filter((r) => !EXCLUDE.some((re) => re.test(r.route)))
    .sort((a, b) => a.route.localeCompare(b.route))

fs.writeFileSync(OUT, JSON.stringify(routes, null, 2))
console.log(`Wrote ${routes.length} routes to lib/route-list.json`)
