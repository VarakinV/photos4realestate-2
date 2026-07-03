---
name: photos-4-real-estate-seo
description: SEO and AI search optimization for Photos 4 Real Estate website
---

# photos-4-real-estate-seo

# SKILL: SEO & AI Search Optimization
# Project: photos4realestate.ca
# Stack: Next.js 16+ (App Router), Vercel, Neon PostgreSQL DB
# Last updated: 2026-04

---

## 0. PRIME DIRECTIVE

Every time you create or modify a page, component, or route, you MUST verify compliance with ALL rules in this file before considering the task done. SEO is not optional and not an afterthought. Treat every missing meta tag, broken redirect, or absent schema block as a bug.

---

## 1. ROUTING & URL CONVENTIONS

### Rules
- Use App Router exclusively (`app/` directory). Never mix with Pages Router.
- URLs must be lowercase, hyphenated, and human-readable.
- No trailing slashes. Configure in `next.config.js`: `trailingSlash: false`.
- Never change an existing URL without adding a 301 redirect.
- All redirects go in `next.config.js` under the `redirects()` function. Never use client-side redirects for SEO-critical pages.

### URL Structure
```
/                                   → Homepage
/services/                          → Services index
/services/real-estate-photography-in-calgary/
/services/rms-measurements-and-floor-plans-in-calgary/
/services/real-estate-videos-in-calgary/
/services/real-estate-aerial-drone-photography-in-calgary/
/services/iguide-virtual-tours-in-calgary/
/services/virtual-staging/
/services/twilight-photography-for-real-estate-in-calgary/
/service-areas/                         → Locations index
/service-areas/airdrie/
/service-areas/okotoks/
/service-areas/cochrane/
/service-areas/chestermere/
/service-areas/high-river/
/service-areas/springbank/
/service-areas/bearspaw/
/service-areas/rocky-view-county/
/portfolio/                         → Portfolio index
/portfolio/[slug]/                  → Individual portfolio item
/blog/                              → Blog index
/blog/[slug]/                       → Individual post
/contact-us/                        → Contact form
/book-online/                       → Redirects to https://app.photos4realestate.ca/book/cmfwsiyl30000jo04z3lcndl3

```

---

## 2. METADATA — REQUIRED ON EVERY PAGE

Use the App Router `generateMetadata()` function. Never use raw `<head>` tags for SEO metadata.

### Title template (root layout)
title: {
  template: '%s | Photos 4 Real Estate',
  default: 'Real Estate Photography Calgary | Photos 4 Real Estate',
}

### Homepage description (canonical)
'Professional real estate photography, videography, drone, 3D virtual tours & 
RMS floor plans in Calgary, AB. Next-day delivery. Book online today.'

### metadataBase
Always set metadataBase in root layout:
metadataBase: new URL('https://photos4realestate.ca')
This makes all relative URLs in metadata (og:image, canonical) resolve correctly.

### Title Formula
```
{Primary Keyword} | Photos 4 Real Estate {Location}
```
Examples:
- `Real Estate Photography Calgary | Photos 4 Real Estate`
- `3D Virtual Tours Airdrie | Photos 4 Real Estate`
- `RMS Measurements & Floor Plans Calgary | Photos 4 Real Estate`

### Rules
- Title: 50–60 characters. Must contain primary keyword and location where applicable.
- Meta description: 140–160 characters. Must include a benefit and a soft CTA (e.g. "Book online today.").
- Every page must have a UNIQUE title and meta description. No duplicates, ever.
- Always set `alternates.canonical` to the absolute URL of the page.
- Always include Open Graph and Twitter card tags.

### Metadata Template (App Router)
```tsx
// app/services/real-estate-photography-in-calgary/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Photography Calgary | Photos 4 Real Estate',
  description: 'Professional real estate photography in Calgary and surrounding areas. Fast turnaround, MLS-ready images. Book online today.',
  alternates: {
    canonical: 'https://photos4realestate.ca/services/real-estate-photography-in-calgary/',
  },
  openGraph: {
    title: 'Real Estate Photography Calgary | Photos4RealEstate',
    description: 'Professional real estate photography in Calgary and surrounding areas. Fast turnaround, MLS-ready images. Book online today.',
    url: 'https://photos4realestate.ca/services/real-estate-photography-in-calgary/',
    siteName: 'Photos 4 Real Estate',
    images: [
      {
        url: 'https://photos4realestate.ca/og/real-estate-photography.jpg',
        width: 1200,
        height: 630,
        alt: 'Real Estate Photography Calgary – Photos 4 Real Estate',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Photography Calgary | Photos 4 Real Estate',
    description: 'Professional real estate photography in Calgary and surrounding areas.',
    images: ['https://photos4realestate.ca/og/real-estate-photography.jpg'],
  },
}
```

---

## 3. SCHEMA MARKUP (JSON-LD) — REQUIRED BY PAGE TYPE

Inject schema via a `<JsonLd>` server component. Never use third-party schema plugins. Always place `<script type="application/ld+json">` in the page's server component, not in `_document` or layout unless it applies globally.

### 3.1 Global — LocalBusiness (inject in root `layout.tsx`)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://photos4realestate.ca/#business",
  "name": "Photos 4 Real Estate",
  "url": "https://photos4realestate.ca",
  "logo": "https://photos4realestate.ca/logo.png",
  "image": "https://photos4realestate.ca/og/homepage.jpg",
  "description": "Professional real estate photography, videography, 3D virtual tours, drone photography, RMS measurements, virtual staging, and twilight photography serving Calgary and surrounding areas.",
  "telephone": "+1-825-449-5001",
  "email": "info@photos4realestate.ca",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Calgary",
    "addressRegion": "AB",
    "addressCountry": "CA"
  },
  "areaServed": [
    "Calgary", "Okotoks", "Airdrie", "Cochrane", "Chestermere",
    "High River", "Springbank", "Bearspaw", "Rocky View County", "Banff"
  ],
  "priceRange": "$$",
  "openingHoursSpecification": [],
  "sameAs": [
    "https://www.instagram.com/photos4re/",
    "https://www.facebook.com/photos4re"
  ]
}
```

### 3.2 Service Pages — Add `Service` schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Real Estate Photography",
  "provider": { "@id": "https://photos4realestate.ca/#business" },
  "areaServed": ["Calgary", "Okotoks", "Airdrie"],
  "description": "Professional MLS-ready real estate photography for Calgary realtors and homeowners.",
  "url": "https://photos4realestate.ca/services/real-estate-photography-in-calgary/"
}
```
Repeat for every service page with the correct name, description, and URL.

### 3.3 Location Pages — Add `Service` schema scoped to location
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Real Estate Photography Okotoks",
  "provider": { "@id": "https://photos4realestate.ca/#business" },
  "areaServed": "Okotoks",
  "url": "https://photos4realestate.ca/service-areas/okotoks/"
}
```

### 3.4 Blog Pages — Add `Article` schema
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{Post Title}",
  "author": { "@id": "https://photos4realestate.ca/#business" },
  "publisher": { "@id": "https://photos4realestate.ca/#business" },
  "datePublished": "{ISO date}",
  "dateModified": "{ISO date}",
  "url": "https://photos4realestate.ca/blog/{slug}/",
  "image": "{featured image URL}"
}
```

### 3.5 FAQ Sections — Add `FAQPage` schema wherever FAQ blocks appear
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a real estate photo shoot take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical shoot takes 45–90 minutes depending on property size."
      }
    }
  ]
}
```

### 3.6 Portfolio Pages — Add `ImageObject` schema
```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "{image URL}",
  "description": "{alt text / caption}",
  "author": { "@id": "https://photos4realestate.ca/#business" }
}
```

### 3.7 Breadcrumbs — Required on all pages except Homepage
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://photos4realestate.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://photos4realestate.ca/services/" },
    { "@type": "ListItem", "position": 3, "name": "Real Estate Photography", "item": "https://photos4realestate.ca/services/real-estate-photography/" }
  ]
}
```

---

## 4. RENDERING STRATEGY

| Page Type        | Strategy                            | Notes                                  |
| ---------------- | ----------------------------------- | -------------------------------------- |
| Homepage         | Static (default SSG)                | Fully cached, SEO landing page         |
| Service pages    | Static (default SSG)                | High SEO value, rarely changes         |
| Location pages   | Static (default SSG)                | Programmatic SEO pages                 |
| Blog index       | ISR (revalidate: 3600)              | Periodic updates                       |
| Blog post        | ISR (revalidate: 86400)             | Stable content with occasional updates |
| Portfolio index  | ISR (revalidate: 3600)              | Refresh new work periodically          |
| Portfolio item   | Static (SSG)                        | Generated at build or on publish       |
| Booking form     | Server Component + Client Component | UI static shell + interactive form     |
| Calculators      | Server Component + Client Component | Client-side interactivity required     |
| GoHighLevel data | Server Component / Route Handler    | Never expose API keys in client        |


### Rules
- Never use `'use client'` on a page that needs to be indexed. Move client logic to leaf components only.
- Always use `generateStaticParams()` for dynamic routes like `[slug]` that have known values.
- Set `export const dynamic = 'force-static'` on pages that should never be server-rendered at request time.

---

## 5. IMAGES

- Always use `next/image`. Never use raw `<img>` tags.
- Every image MUST have a descriptive `alt` attribute. Not "image1.jpg". Example: `alt="Real estate photography of kitchen at 123 Main St Calgary by Photos 4 Real Estate"`.
- Set `priority` prop on the hero/LCP image of every page.
- Use `sizes` prop to match actual rendered size and avoid oversized image downloads.
- Store portfolio images in a CDN-friendly path structure: `/portfolio/{service}/{slug}/`.
- Image formats: use WebP. Next.js handles this automatically via `next/image`.
- Never set fixed `width` and `height` that cause layout shift. Use `fill` with a positioned wrapper, or accurate dimensions.

```tsx
// Hero image — correct pattern
<Image
  src="/hero/calgary-real-estate-photography.webp"
  alt="Professional real estate photography in Calgary by Photos 4 Real Estate"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>
```

---

## 6. PERFORMANCE & CORE WEB VITALS

- Use `next/font` for all fonts. Never load fonts from Google Fonts via `<link>` in `<head>`.
- No layout shift (CLS = 0): always reserve space for images, embeds, and dynamic content before it loads.
- Lazy load all below-the-fold components using `dynamic(() => import(...), { ssr: false })` only when they are truly client-only (e.g. interactive map, booking widget).
- Minimize third-party scripts. Load Go High Level tracking scripts using `next/script` with `strategy="afterInteractive"` or `strategy="lazyOnload"`.
- Run Lighthouse on every new page before shipping. Target: LCP < 2.5s, CLS < 0.1, INP < 200ms.

```tsx
// Correct way to load GHL or any analytics script
import Script from 'next/script'

<Script
  src="https://your-ghl-script-url.js"
  strategy="afterInteractive"
/>
```

---

## 7. SITEMAP & ROBOTS.TXT

### Sitemap
Use `next-sitemap`. Config file: `next-sitemap.config.js` in project root.

```js
// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://photos4realestate.ca',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*', '/thank-you', '/404', '/500'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/admin/'] },
    ],
  },
}
```

Run `next-sitemap` as a postbuild script in `package.json`:
```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

### Priority by page type
| Page type       | Priority | Changefreq |
|-----------------|----------|------------|
| Homepage        | 1.0      | weekly     |
| Service pages   | 0.9      | monthly    |
| Location pages  | 0.9      | monthly    |
| Blog posts      | 0.7      | monthly    |
| Portfolio items | 0.7      | monthly     |
| Calculators     | 0.8      | monthly    |

---

## 8. INTERNAL LINKING

- Every page must link to at least 2–3 contextually relevant pages.
- Service pages must link to relevant location pages and vice versa.
- Blog posts must link to the most relevant service page.
- Homepage must link to all service pages and top location pages.
- Use descriptive anchor text — never "click here" or "read more".
  - ✅ `Calgary real estate photography services`
  - ❌ `click here`
- Add a `BreadcrumbNav` component to all inner pages that renders visible breadcrumbs AND outputs `BreadcrumbList` JSON-LD.

### 8.1 Visually hidden descriptive text (sr-only pattern)

Whenever a visible CTA label would otherwise be generic (e.g. "Book Now", "View Pricing", "Learn more", "Contact Us", "Read more", "See All", "Explore", "Privacy", "Terms"), append keyword-rich context inside a `<span className="sr-only">` so crawlers and screen readers receive descriptive anchor text without altering the visual design.

Apply this pattern EVERY time you add or modify a `<Link>`, `<a>`, or `<button>` that links to a distinct page, across ALL internal pages (homepage, service pages, location pages, blog posts, portfolio, free tools, contact, etc.). This is not optional.

The `.sr-only` utility already exists in `app/globals.css`:
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}
```

#### Usage pattern
```tsx
<Link href="/book-online" className="btn btn-primary">
  Book Now
  <span className="sr-only"> — Calgary real estate photography</span>
</Link>

<Link href="/prices/" className="btn btn-outline">
  View Pricing
  <span className="sr-only"> for Calgary real estate photography packages</span>
</Link>

<Link href="/services/virtual-staging/">
  Learn more<span className="sr-only"> about Virtual Staging in Calgary</span>
</Link>
```

#### Rules
- Keep the visible label short and human. Put the SEO-relevant keywords in `sr-only` text.
- Always include the primary keyword ("Calgary real estate photography") or the specific service/location name where relevant.
- Separator (em-dash, comma, or preposition) goes INSIDE the `sr-only` span, never visibly appended.
- Icon components (e.g. Lucide `ArrowRight`) stay outside the span and must already carry `aria-hidden="true"`.
- Card-style links that wrap a whole block (e.g. Industry cards) should instead use `aria-label={`${title} — ${description}`}` on the `<Link>` — a single accessible name is cleaner than multiple `sr-only` children.

#### When NOT to use it
- Anchor text that is already descriptive (e.g. "Real Estate Photography Calgary", "Airdrie", "Book your drone shoot"). Do not double up.
- Phone/email `tel:` and `mailto:` links — `aria-label` on the anchor is preferred.
- Social icon links — use `aria-label` on the anchor, not `sr-only` spans inside.

---

## 9. HEADING HIERARCHY

- Every page has exactly ONE `<h1>`. It must contain the primary keyword + location.
- `<h2>` for major sections. `<h3>` for subsections. Never skip levels.
- The `<h1>` must match the intent of the page's `<title>` tag but does not need to be identical.

### Examples
```
H1: Real Estate Photography in Calgary
  H2: What's Included in Every Shoot
    H3: Interior Photography
    H3: Exterior Photography
  H2: Pricing
  H2: Frequently Asked Questions
    H3: How long does a shoot take?
```

---

## 10. LOCATION PAGES — PATTERN

Each location page must be unique — not a duplicate with the city name swapped. Include:
- Unique intro paragraph mentioning the neighbourhood/city and its real estate context.
- List of services available in that location (link to each service page).
- A locally-relevant FAQ (e.g. "Do you travel to Okotoks?" → yes, no travel fee details).
- `Service` schema scoped to that location (see Section 3.3).
- Internal links to Calgary page and 2–3 nearby location pages.

Do NOT use the same body copy across location pages. Google will detect thin/duplicate content.

---

## 11. GO HIGH LEVEL (GHL) CRM INTEGRATION

### Rules
- All GHL API calls must go through Next.js API Routes (`app/api/`) or Server Actions. Never call GHL API from client-side code.
- Store GHL API key in `.env.local` as `GHL_API_KEY`. Never hardcode it. Never expose it in client bundles.
- GHL calendar embed or form embed: load via `next/script` with `strategy="lazyOnload"` to avoid blocking LCP.
- When GHL embeds are used, wrap them in a container with a fixed min-height to prevent CLS.



### Thank You / Confirmation pages
- Add `<meta name="robots" content="noindex, nofollow" />` to all `/thank-you`, `/booking-confirmed`, and form success pages.
- These must NOT appear in the sitemap.

---

## 12. AI SEARCH OPTIMIZATION (LLM / GENERATIVE SEARCH)

AI search engines (Google SGE, ChatGPT, Perplexity, etc.) pull answers from pages that are clear, structured, and directly answer questions. Apply these rules on all content pages:

### Content structure rules
- Open every service and location page with a 2–3 sentence direct answer to "What is [service] in [location]?". This is the paragraph most likely to be pulled into an AI answer.
- Use `<h2>` questions as section headers where natural (e.g. "What is included in a real estate photo shoot?").
- Write FAQ sections on every service and location page. Minimum 4 questions. Use `FAQPage` schema (Section 3.5).
- Avoid vague marketing language as the first paragraph. Lead with facts: what you do, where, and for whom.

### Speakable schema — add to homepage and key service pages
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".speakable-intro", ".speakable-faq"]
  },
  "url": "https://photos4realestate.ca/services/real-estate-photography/"
}
```
Add `className="speakable-intro"` to the opening summary paragraph and `className="speakable-faq"` to FAQ sections.

### Entity clarity
- Mention "Photos 4 Real Estate" by name in body copy, not just in the logo. AI models build entity associations from text.
- On the homepage and About page, clearly state: who you are, what city you serve, what services you provide. In plain prose, not only in a services grid.
- Use consistent NAP (Name, Address, Phone) format site-wide. It must exactly match your Google Business Profile.

---

## 13. WHAT NEVER TO DO

| ❌ Never do this | ✅ Do this instead |
|---|---|
| Use `<img>` tags | Use `next/image` |
| Load fonts via `<link>` in head | Use `next/font` |
| Put API keys in client components | Use API Routes or Server Actions |
| Leave `noindex` on from development | Audit `robots.txt` and meta robots before every deploy |
| Duplicate location page content | Write unique copy per location |
| Use "click here" as anchor text | Use descriptive, keyword-rich anchor text |
| Render page content in `useEffect` | Use Server Components or SSG |
| Skip canonical tags | Always set `alternates.canonical` |
| Omit alt text on images | Every image needs a descriptive alt |
| Deploy without checking sitemap | Run `next-sitemap` on every production build |
| Use client-side redirects for SEO pages | Use `next.config.js` redirects (301) |
| Hardcode the GHL API key | Use `.env.local` and server-side only |
| Index /thank-you or /booking-confirmed | Add noindex meta + exclude from sitemap |
| Stack multiple H1 tags | One H1 per page, always |

---

## 14. PRE-DEPLOY CHECKLIST

Run through this before every production deployment:

- [ ] Every new/modified page has a unique `<title>` and `meta description`
- [ ] `alternates.canonical` is set correctly on every page
- [ ] All new images use `next/image` with descriptive `alt` text
- [ ] Hero/LCP image has `priority` prop
- [ ] Correct JSON-LD schema added for page type (see Section 3)
- [ ] `BreadcrumbList` schema present on all non-homepage pages
- [ ] No `noindex` left on pages that should be indexed
- [ ] `/thank-you` and form confirmation pages ARE noindexed
- [ ] `next-sitemap` has run and sitemap.xml is up to date
- [ ] New dynamic routes have `generateStaticParams()` implemented
- [ ] No GHL API keys in client-side code
- [ ] GHL scripts loaded with `next/script` and correct strategy
- [ ] New location pages have unique copy (not templated duplicates)
- [ ] New pages are internally linked from at least 2 existing pages
- [ ] Generic CTA/anchor labels ("Book Now", "View Pricing", "Learn more", "Contact Us", "Privacy", "Terms", etc.) carry `<span className="sr-only">` descriptive context (see Section 8.1)
- [ ] Lighthouse score on mobile: LCP < 2.5s, CLS < 0.1, INP < 200ms

---

## 15. SERVICE REFERENCE (for schema and metadata)

| Service | Slug | Schema `@type` |
|---|---|---|
| Real Estate Photography | `real-estate-photography` | Service |
| Real Estate Videography | `real-estate-videography` | Service |
| RMS Measurements & Floor Plans | `rms-measurements-floor-plans` | Service |
| 3D Virtual Tours (iGUIDE) | `3d-virtual-tours-iguide` | Service |
| Drone Photography & Videography | `drone-photography-videography` | Service |
| Virtual Staging | `virtual-staging` | Service |
| Twilight Photography | `twilight-photography` | Service |

## 16. LOCATION REFERENCE

Primary market: **Calgary, AB**

Surrounding areas served:
`Okotoks` · `Airdrie` · `Cochrane` · `Chestermere` · `High River` · `Springbank` · `Bearspaw` · `Rocky View County` · `Banff`

Always refer to the region as **"Calgary and surrounding areas"** in metadata and schema `areaServed`.

