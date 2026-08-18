# SEO overhaul — August 2026

Branch: `seo-overhaul-2026-08` (two commits, not yet pushed)

Baseline from the 2026-08-17 GSC coverage export and the GA4 / Google Ads
exports for Jan–Aug 2026.

---

## The diagnosis

**Indexing, not ranking, is the bottleneck.**

| Bucket | Pages |
|---|---|
| Indexed | 95 |
| Discovered – currently not indexed | 64 |
| Crawled – currently not indexed | 50 |
| Page with redirect | 26 |
| Not found (404) | 21 |
| Duplicate without user-selected canonical | 9 |

170 of 265 known URLs were not indexed. Of the 98 URLs in the sitemap, only 33
were indexed and 64 had never been crawled at all. "Discovered – not indexed"
at that scale is Google saying the pages are not worth its crawl budget — the
usual cause being a large block of near-identical templated pages with weak
internal linking.

106K impressions at average position 18.1 with 0.6% CTR is the downstream
symptom: page-two rankings and titles too long to read in the SERP.

**Google Ads has been running with no conversion signal.**

Every row of the search-terms export shows `0.00` conversions. There was no
Google Ads conversion tag (`AW-…`) anywhere in the codebase — only GA4. Smart
Bidding therefore had nothing to optimise against for the $977 spent in July.

GA4 corroborates it: Paid Search drove 871 users → 5 key events (0.57%), while
Cross-network drove 131 users → 102 key events (64%). A 64% key-event rate is
not real conversion behaviour; something low-intent is flagged as a key event
and PMax is absorbing the credit.

---

## What was changed in the code

### Crawl and index integrity
- **Sitemap is now generated from the filesystem** at build time
  (`scripts/generate-route-list.js` → `lib/route-list.json`). The old
  hand-maintained array had drifted: it listed `/waste-disposal-brandon-ms`,
  which never existed as a page (a 404 Google kept re-crawling, and which the
  footer linked from every page on the site), and it omitted seven live pages.
- `lastModified` now uses each file's real modification time instead of
  `new Date()` per request, which had been telling Google every URL changed on
  every crawl.
- Deleted 12 blog city pages that were already shadowed by 301 redirects and
  had been unreachable dead code.
- All 77 sitemap URLs verified returning 200.

### Duplicate / doorway content
- 27 near-identical `debris-removal-<city>` and `waste-disposal-<city>` pages
  were the bulk of the crawled/discovered-not-indexed URLs. They now 301 to
  their service-area page, or to one substantial `/services/debris-removal`
  page that covers the topic properly and links out to all 15 cities.
- `/services` previously linked to **none** of its 11 child service pages —
  they were reachable only from the header dropdown. It now has a full
  directory.
- `/get-a-quote` was a live, indexable page reading "Our Quote Tool is Getting
  an Upgrade". It now 301s to `/book-online`.

### Structured data policy risk
- Removed two **fabricated reviews** from the LocalBusiness schema
  ("Jackson MS Customer", "Brandon MS Contractor"). Inventing reviews violates
  Google's structured data policy and is a manual-action risk.
- Removed the self-serving `aggregateRating`. Google does not surface
  first-party ratings for LocalBusiness, and the count was already stale.

### Titles and descriptions
- The title template was `%s | Mid South Dumpster Rentals` — 27 characters
  appended to every page, pushing nearly all of them past Google's ~60
  character cutoff. Shortened to `%s | Mid South`.
- Rewrote titles and meta descriptions across all 77 pages.
  Average title is now 49 characters, average description 136. Nothing over
  the limit.

### Broken internal links (found by crawling the running site)
- `/services/10|15|20-yard-dumpster` were linked from four blog posts and have
  never existed. Repointed at the real `/sizes/` pages.
- `/blog/10-yard-...` and `/blog/15-yard-...` were linked from three posts;
  those articles were never written.
- `/blog/dumpster-rental-pearl-ms` was linked but never existed.
- 14 links pointed at URLs that redirect; they now link the destination.
- A full crawl now reports 88 pages and **zero** broken or redirecting links.

### Two silent production breakages in the CSP
- `va.vercel-scripts.com` was never allowed in `script-src`, so `<Analytics />`
  and `<SpeedInsights />` have been blocked in production the entire time and
  every `track()` call was discarded.
- `frame-src` only allowed `embed.survcart.com`, so the **Google Maps embed on
  /contact has never rendered**.

### Build robustness
- `new Resend(process.env.RESEND_API_KEY)` ran at module scope in three API
  routes. Its constructor throws when the key is missing, so an absent or
  rotated key failed the entire site build rather than just that route. Now
  constructed lazily.

### Content depth
- `/service-areas` rebuilt from a 93-word list of generic blurbs into a real
  hub: coverage explanation, flat-rate pricing, all 17 cities grouped by county
  with ZIP codes and genuine local detail, plus a delivery-day section.
- `/book-online` gained booking steps, a pricing explanation and six FAQs with
  FAQPage schema. Its hidden screen-reader-only H1 is now the visible heading.

---

## What only you can do

### 1. Google Ads conversion tracking — highest dollar value
The plumbing is in place and reads three environment variables. Nothing fires
until they are set.

1. Google Ads → **Goals → Conversions → New conversion action → Website**
2. Create two actions: **Phone Click** and **Booking Started**
3. Choose "Install the tag yourself" and copy the `send_to` value, which looks
   like `AW-123456789/AbC-D_efGh12345`
4. In Vercel → Settings → Environment Variables, set:

```
NEXT_PUBLIC_ADS_CONVERSION_ID=AW-123456789
NEXT_PUBLIC_ADS_LABEL_PHONE=<label after the slash for Phone Click>
NEXT_PUBLIC_ADS_LABEL_BOOKING=<label after the slash for Booking Started>
```

5. Redeploy, then use Google Tag Assistant to confirm the conversion fires on a
   phone-number click.

The conversion value is currently hardcoded at `$400` in `lib/analytics.ts`
(roughly your average ticket). Adjust it if your real average differs — Smart
Bidding uses it to bid toward revenue rather than raw click count.

### 2. Audit your GA4 key events
Cross-network showing a 64% key-event rate means something trivial is marked as
a key event. In GA4 → Admin → Events, check which events have "Mark as key
event" enabled. It should be only `phone_click`, `booking_click` and actual
form submissions — not scroll, engagement or page-view events.

### 3. Google Search Console, after deploying
- Sitemaps → resubmit `https://midsouthdumpsterms.com/sitemap.xml`
- Under **Page indexing**, hit **Validate Fix** on "Not found (404)" and
  "Page with redirect" — both were caused by the sitemap drift now fixed
- Use **URL Inspection → Request Indexing** on: `/`, `/services`,
  `/service-areas`, `/sizes`, `/services/debris-removal`, and
  `/service-areas/jackson`

Expect four to eight weeks before the indexed count moves meaningfully. The
consolidation will make the "not indexed" number *rise* briefly as the 27
redirected pages reclassify — that is the fix working, not a regression.

### 4. Demand you are not serving
These appeared in your paid search terms with real volume but no page and no
coverage:

| Search term | Impressions | Clicks | Cost |
|---|---|---|---|
| dumpster rental vicksburg ms | 36 | 9 | $23.12 |
| dumpster rental magee ms | 33 | 5 | $16.87 |
| dumpster rental brookhaven ms | 12 | 1 | $3.54 |
| dumpster rental yazoo city ms | 6 | 2 | $8.73 |
| dumpster rental mccomb ms | 6 | 1 | $4.11 |

You are paying for these clicks and landing them on pages that never mention
those towns. Either add service-area pages if you genuinely deliver there, or
add them as negative keywords. Right now it is the worst of both.

Also worth noting: competitor-brand searches (`delta waste`, `bearded bins`,
`junk pro`, `alpha dumpsters`, `ads dumpster`) drew 100+ impressions. A
comparison page would capture that intent organically.

### 5. Google Business Profile
Nothing in the codebase can fix the local pack. With 5.0 across 30 reviews you
are in good shape — keep the review flow running, and make sure the GBP
categories, service list and service area match the site exactly.

---

## Reverting

Everything is on `seo-overhaul-2026-08`. `git checkout main` restores the
previous state; individual changes can be reverted per commit.
