# Performance notes

Last verified against the production build on 2026-08-17.

> An earlier version of this file described optimizations that were never
> actually in the code — `preconnect` to Google Fonts, `optimizeCss`, and
> `fetchPriority="high"` on an LCP image. Those claims are removed below. What
> follows is what the build actually does.

## What is in place

**Fonts are self-hosted.** `app/layout.tsx` uses `next/font` (Inter) with
`display: 'swap'`. Nothing is fetched from `fonts.googleapis.com` at runtime,
so the old preconnect advice is moot — there is no third-party font origin
left to connect to.

**Images go through `next/image`.** AVIF and WebP are enabled in
`next.config.js`, with `deviceSizes` and `imageSizes` tuned to the layout.
Every image in the app is a `next/image` render; the last raw `<img>` (the
founder photo on `/about`) was converted on 2026-08-17.

**Build output is minified and source-map free.** `swcMinify` is on,
`productionBrowserSourceMaps` is off, and `removeConsole` strips logging in
production.

**Everything but two routes is statically prerendered.** Only `/blog`
(ISR, 10-minute revalidate) and `/_not-found` are server-rendered. The other
76 routes are static HTML.

**Shared JS is ~87 KB.** First-load JS lands between 87 KB and 105 KB per page.

## Known costs, not yet addressed

**Five blog images are 0.9–1.1 MB PNGs.**

```
1,097 KB  public/images/blog/spring-cleaning-10-yard.png
1,002 KB  public/images/blog/construction-site-dumpster.png
  936 KB  public/images/blog/what-can-i-put-in-dumpster.jpg
  931 KB  public/images/blog/driveway-protection-plywood.png
  859 KB  public/images/blog/neatly-packed-dumpster.png
```

PNG is the wrong container for photographs. `next/image` re-encodes these to
WebP/AVIF before they reach a browser, so the *delivered* bytes are fine — the
cost is build time, cache storage and repo size. Re-exporting them as quality-80
WebP would take each one under about 120 KB. This needs an image tool
(`sharp`, `squoosh`, or any editor); it cannot be done from the app code.

**`public/images/og-image.jpg` is 640×640 and 522 KB.** Open Graph cards want
1200×630. Square art gets cropped into the small preview treatment by Facebook,
X, LinkedIn and iMessage instead of rendering as a large link card. Every page
now points at this one path (see `lib/seo.ts`), so replacing that single file
upgrades every share on the site at once. The brand artwork on file,
`public/images/brand-card-square.png`, is also square — it needs re-laying-out
to 1.91:1, not just resizing, or the phone number and URL get cropped off.

**`public/images/hero-bg.jpg` is 711 KB at 1024×1024.** Same story: it is
served through `next/image`, so this is a source-asset concern rather than a
delivery one.

## Measuring

Run PageSpeed Insights against the deployed URL, **on mobile** — 87% of paid
clicks (752 of 864) come from phones, so the mobile score is the one that
matters commercially. Do not trust local `next dev` numbers; dev builds are not
minified, and this machine cannot reach Google Fonts through its TLS proxy.
