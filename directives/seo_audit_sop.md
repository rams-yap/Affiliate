# Next.js & Cloudflare SEO Audit Directive (SOP)

This Standard Operating Procedure (SOP) outlines the mandatory SEO checklist and architecture rules for all Next.js App Router pages hosted on Cloudflare Pages or similar static/CDN environments.

---

## 1. Why Canonicals Get Missed in Next.js (Root Cause Analysis)

In Next.js App Router (React Server Components), metadata **cannot be exported from files marked with `"use client"`**.

When a developer or AI builds an interactive page (like a filtering UI, contact form, or search page) directly inside `page.tsx`:
1. They add `"use client"` at the top of `page.tsx`.
2. Next.js silently disables static `export const metadata: Metadata` exports on client components without throwing a fatal build error.
3. As a result, the page inherits **only base layout defaults** and completely misses route-specific `<link rel="canonical">` and `<meta>` tags.

---

## 2. Mandatory Architectural Pattern for Interactive Pages

Whenever a page requires client-side hooks (`useState`, `useEffect`, `onSubmit` handlers):

**NEVER place `"use client"` inside `app/[route]/page.tsx`.**

### Standard Pattern (Server Page + Client Component Split):
1. **Server Page (`app/[route]/page.tsx`):**
   * Stays a pure React Server Component (RSC).
   * Exports static `metadata` or `generateMetadata()` containing explicit canonical links:
     ```typescript
     export const metadata: Metadata = {
       title: "Page Title : Pantry & Pan",
       description: "...",
       alternates: {
         canonical: "https://pantryandpan.com/[route]",
       },
     };
     ```
   * Imports and renders the Client Component shell.

2. **Client Component (`components/site/[Route]Client.tsx`):**
   * Placed under `components/site/`.
   * Marked with `"use client"`.
   * Houses all state, event handlers, and interactive JSX.

---

## 3. SEO Checklist Before Marking Any Task "Complete"

Before declaring an SEO task or new page complete, verify all 5 checklist items:

- [ ] **1. Explicit Canonical:** Does the route have an explicit `alternates: { canonical: "https://pantryandpan.com/..." }` declared in its `Metadata`?
- [ ] **2. No `"use client"` in `page.tsx`:** Is `page.tsx` kept as a Server Component to ensure metadata renders into static HTML `<head>`?
- [ ] **3. Absolute Domain Base:** Does `app/layout.tsx` maintain `metadataBase: new URL("https://pantryandpan.com")`?
- [ ] **4. Sitemap Sync:** Is the new route included in `app/sitemap.ts` (or `public/sitemap.xml`)?
- [ ] **5. Cloudflare `.pages.dev` Staging Protection:** Verify that Cloudflare default hostnames rely on explicit HTML canonicals so search crawlers resolve canonical domain authority exclusively to `pantryandpan.com`.

---

## 4. Platform Learning & Pitfalls Log

- **Cloudflare Pages `_redirects` Pitfall:** Static `_redirects` files on Cloudflare Pages do not support full-domain matching (e.g., `https://pantry-and-pan.pages.dev/*`). Using wildcard domain rules can trigger infinite loops or be ignored. **Solution:** Always rely on explicit HTML `<link rel="canonical">` headers in Next.js code for domain canonicalization.
