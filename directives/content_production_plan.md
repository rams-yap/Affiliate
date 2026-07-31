# 14-Day High-Velocity Content Production Plan (Soro SEO Strategy)

This directive standardizes the 14-day high-velocity content production strategy for **Pantry & Pan** (`pantryandpan.com`). It bridges the **Soro SEO 3-phase framework** (low-competition transactional intent, rapid mobile pacing, E-E-A-T information gain, AEO schema) with Pantry & Pan's existing Next.js App Router codebase and editorial brand directives.

---

## 1. Objectives & Key Results (OKRs)

- **Target Velocity**: Produce and publish **12 high-converting transactional articles** within 14 days.
- **Topical Expansion**: Expand 3 primary hubs (*Non-Toxic Ceramic & Clay*, *Space-Saving & Detachable*, *Pantry & Aesthetic Storage*) with tight child (spoke) comparisons and alternatives.
- **Compliance & Technical Integrity**: 100% adherence to:
  - **Zero Em Dashes Directive** ([`directives/brand_identity.md`](file:///d:/_Career/Workflow/Affiliate/directives/brand_identity.md))
  - **Server Page + Client Split Metadata & Canonical Rules** ([`directives/seo_audit_sop.md`](file:///d:/_Career/Workflow/Affiliate/directives/seo_audit_sop.md))
  - **Soro SEO Strategy SOP** ([`directives/soro_seo_sop.md`](file:///d:/_Career/Workflow/Affiliate/directives/soro_seo_sop.md))

---

## 2. Standardized Article Publishing Workflow

Every article in this 14-day sprint follows a standardized 5-step lifecycle:

```
1. Keyword & Intent Validation ➔ 2. Soro Content Drafting ➔ 3. Schema & Metadata Payload ➔ 4. Next.js Catalog Integration ➔ 5. Build Verification & Deploy
```

### Workflow Details:

1. **Keyword & Intent Validation**:
   - Verify low-competition, high-intent transactional search query (`[A] vs [B]`, `[Product A] Alternatives`, `Is [Product A] Worth It?`).
   - Identify existing parent hub in [`lib/catalog.ts`](file:///d:/_Career/Workflow/Affiliate/lib/catalog.ts) for internal linking.

2. **Soro Content Drafting**:
   - **Hook**: First 2 sentences state the verdict or comparative claim. No "In today's fast-paced world...".
   - **Pacing**: Short 1-3 sentence paragraphs for mobile scannability.
   - **Early CTA**: Verdict block in top 20% of article.
   - **E-E-A-T Information Gain**: Specific setup steps, thermal behavior, coating wear, and a mandatory *"Who Is This NOT For?"* section.
   - **Sanitization**: Zero em dashes, zero forbidden AI words (*pivotal*, *testament*, *delve*, *moreover*, *in conclusion*).

3. **Schema & Technical Metadata**:
   - Generate `Title Tag` (50-60 chars, no em dashes).
   - Generate `Meta Description` (120-160 chars).
   - Generate `Product` and `FAQPage` JSON-LD schema objects for Answer Engine Optimization (AEO).

4. **Next.js Catalog Integration**:
   - Add entry to `GUIDES` array in [`lib/catalog.ts`](file:///d:/_Career/Workflow/Affiliate/lib/catalog.ts) or create dedicated route under `app/guides/[slug]/page.tsx`.
   - Attach related `PRODUCTS` and `faqs`.

5. **Build Verification & Deploy**:
   - Run `npm run build` to verify RSC compilation, static head canonical output, and zero build errors.
   - Deploy to Cloudflare Pages.

---

## 3. 14-Day Production Roadmap & Sprint Schedule

### Sprint 1: Non-Toxic Ceramic & Clay Comparisons (Days 1 – 5)
*Target Parent Hub: `ceramic-granite-stone-cookware-explained`*

- [ ] **Day 1**: `greenpan-valencia-vs-caraway`
  - *Title*: GreenPan Valencia Pro vs Caraway Ceramic: Which Non-Toxic Pan Wins?
  - *Intent*: High Transactional Versus
- [ ] **Day 2**: `best-caraway-pan-alternatives-under-100`
  - *Title*: 5 Best Caraway Pan Alternatives Under $100 (PFAS-Free Tested)
  - *Intent*: Buyer Transition / Budget Alternatives
- [ ] **Day 3**: `is-hexclad-worth-it-non-toxic-audit`
  - *Title*: Is HexClad Worth It? A Non-Toxic Ceramic & Hybrid Audit
  - *Intent*: Product Audit / Verdict
- [ ] **Day 4**: `made-in-ceramic-vs-caraway`
  - *Title*: Made In Ceramic vs Caraway: Real Kitchen Thermal & Durability Test
  - *Intent*: High Transactional Versus
- [ ] **Day 5**: *Sprint 1 Batch Review & Catalog Integration*

---

### Sprint 2: Space-Saving & Modular Cookware (Days 6 – 10)
*Target Parent Hub: `space-saving-cookware-guide`*

- [ ] **Day 6**: `carote-vs-tefal-ingenio-detachable`
  - *Title*: CAROTE vs Tefal Ingenio: Best Removable Handle Cookware Set
  - *Intent*: High Transactional Versus
- [ ] **Day 7**: `is-carote-stackable-cookware-safe`
  - *Title*: Is CAROTE Stackable Cookware Safe? Handle Weight & Coating Review
  - *Intent*: Problem-Solving / Safety Audit
- [ ] **Day 8**: `best-space-saving-cookware-for-rvs-small-kitchens`
  - *Title*: Best Space-Saving Cookware for RVs and Small Kitchens (Tested)
  - *Intent*: User Class Segment Intent
- [ ] **Day 9**: `sensarte-granite-vs-carote-ceramic`
  - *Title*: Sensarte Granite vs CAROTE Ceramic: Budget Nonstick Showdown
  - *Intent*: Low-Cost Transactional Versus
- [ ] **Day 10**: *Sprint 2 Batch Review & Catalog Integration*

---

### Sprint 3: Pantry Storage & Aesthetic Organization (Days 11 – 14)
*Target Parent Hub: `non-toxic-kitchen-blueprint` / `space-saving-minimalist-baker`*

- [ ] **Day 11**: `borosilicate-glass-vs-silicone-storage-containers`
  - *Title*: Borosilicate Glass vs Platinum Silicone Storage Containers: Non-Toxic Meal Prep
  - *Intent*: Comparison / Material Audit
- [ ] **Day 12**: `joyjolt-joyful-glass-containers-review`
  - *Title*: JoyJolt JoyFul Glass Storage Review: Airtight Freezer to Oven Test
  - *Intent*: Single Product Deep Audit
- [ ] **Day 13**: `best-airtight-rice-dispensers-pantry-storage`
  - *Title*: Best Airtight Rice Dispensers for Aesthetic Pantry Storage
  - *Intent*: Problem-Solving / Category Curation
- [ ] **Day 14**: *Sprint 3 Final Integration, Sitemap Audit & Full Site Deployment*

---

## 4. Verification & QA Checklist

Before marking any article complete:

1. **Build Check**: `npm run build` succeeds without errors.
2. **Canonical & Metadata**: RSC `page.tsx` exports static `metadata` with explicit canonical URL.
3. **Brand Token Compliance**: **Zero em dashes (`—`)** anywhere in text or metadata.
4. **Affiliate Links**: Amazon tag `pantryandpan-20` on all product CTA buttons.
5. **Footer Disclosure**: Mandatory Amazon associate disclosure present.
