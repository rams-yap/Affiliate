# 14-Day High-Velocity Content Production Plan (Soro SEO Strategy)

This directive standardizes the active **14-day continuous daily content sprint (Aug 2, 2026 – Aug 15, 2026)** and post-sprint 2x/week maintenance schedule for **Pantry & Pan** (`pantryandpan.com`). It bridges the **Soro SEO 3-phase framework** (low-competition transactional intent, rapid mobile pacing, E-E-A-T information gain, AEO schema) with Pantry & Pan's existing Next.js App Router codebase and editorial brand directives.

---

## 1. Objectives & Key Results (OKRs)

- **Continuous 14-Day Velocity**: Publish **14 continuous daily articles** starting today (August 2, 2026).
- **Post-Sprint Maintenance Cadence**: From August 16 onward, maintain a 2x/week publishing cadence (Tuesdays & Thursdays).
- **Topical Expansion**: Expand 3 primary hubs (*Non-Toxic Ceramic & Clay*, *Space-Saving & Detachable*, *Pantry & Aesthetic Storage*) with tight child (spoke) comparisons and alternatives.
- **Compliance & Technical Integrity**: 100% adherence to:
  - **Zero Em Dashes Directive** ([`directives/brand_identity.md`](file:///d:/_Career/Workflow/Affiliate/directives/brand_identity.md))
  - **Server Page + Client Split Metadata & Canonical Rules** ([`directives/seo_audit_sop.md`](file:///d:/_Career/Workflow/Affiliate/directives/seo_audit_sop.md))
  - **Soro SEO Strategy SOP** ([`directives/soro_seo_sop.md`](file:///d:/_Career/Workflow/Affiliate/directives/soro_seo_sop.md))

---

## 2. Active 14-Day Continuous Daily Schedule (Aug 2 – Aug 15, 2026)

*Pre-Sprint Baseline Article: `greenpan-valencia-vs-caraway` (Published July 31, 2026 during audit phase)*

| Day | Date | Target Article (Slug) | Article Title & Search Intent | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Day 1** | **Aug 2 (Today)** | `best-caraway-pan-alternatives-under-100` | **5 Best Caraway Pan Alternatives Under $100** *(Buyer Transition)* | ✅ Published |
| **Day 2** | Aug 3 | `is-hexclad-worth-it-non-toxic-audit` | **Is HexClad Worth It? A Non-Toxic Ceramic & Hybrid Audit** *(Product Audit)* | 📅 Scheduled |
| **Day 3** | Aug 4 | `made-in-ceramic-vs-caraway` | **Made In Ceramic vs Caraway: Real Thermal Test** *(Transactional Versus)* | 📅 Scheduled |
| **Day 4** | Aug 5 | `greenpan-valencia-vs-carote-ceramic` | **GreenPan Valencia Pro vs CAROTE Ceramic Showdown** *(Transactional Versus)* | 📅 Scheduled |
| **Day 5** | Aug 6 | **Sprint 1 Review & Hub Sync** | Internal Linking Audit for Non-Toxic Ceramic Hub | 📅 Scheduled |
| **Day 6** | Aug 7 | `carote-vs-tefal-ingenio-detachable` | **CAROTE vs Tefal Ingenio: Best Removable Handle Set** *(Transactional Versus)* | 📅 Scheduled |
| **Day 7** | Aug 8 | `is-carote-stackable-cookware-safe` | **Is CAROTE Stackable Cookware Safe? Safety Audit** *(Safety Audit)* | 📅 Scheduled |
| **Day 8** | Aug 9 | `best-space-saving-cookware-for-rvs-small-kitchens` | **Best Space-Saving Cookware for RVs & Small Kitchens** *(Segment Intent)* | 📅 Scheduled |
| **Day 9** | Aug 10 | `sensarte-granite-vs-carote-ceramic` | **Sensarte Granite vs CAROTE Ceramic Showdown** *(Transactional Versus)* | 📅 Scheduled |
| **Day 10** | Aug 11 | **Sprint 2 Review & Hub Sync** | Internal Linking Audit for Space-Saving Cookware Hub | 📅 Scheduled |
| **Day 11** | Aug 12 | `borosilicate-glass-vs-silicone-storage-containers` | **Borosilicate Glass vs Platinum Silicone Storage** *(Material Audit)* | 📅 Scheduled |
| **Day 12** | Aug 13 | `joyjolt-joyful-glass-containers-review` | **JoyJolt JoyFul Glass Storage Review** *(Product Audit)* | 📅 Scheduled |
| **Day 13** | Aug 14 | `best-airtight-rice-dispensers-pantry-storage` | **Best Airtight Rice Dispensers for Aesthetic Pantry** *(Problem-Solving)* | 📅 Scheduled |
| **Day 14** | Aug 15 | **Sprint 3 Review & Full Sitemap Sync** | Final Build Check, Canonical Audit & Indexing Push | 📅 Scheduled |

---

## 3. Post 14-Day Schedule (2x / Week Drip Phase)

Starting **August 16, 2026**, publishing switches to a 2x/week maintenance cadence:
- **Publishing Days**: **Tuesdays & Thursdays**
- **Focus**: Secondary long-tail queries, problem-solving care guides (*e.g., How to Restain Carbon Steel, Best PFAS-Free Dutch Ovens Under $150*), and seasonal kitchenware updates.

---

## 4. Standardized 5-Step Article Publishing Lifecycle

Every article in this sprint follows this exact 5-step lifecycle:

```
1. Keyword & Intent Validation ➔ 2. Soro Content Drafting ➔ 3. Schema & Metadata Payload ➔ 4. Next.js Catalog Integration ➔ 5. Build Verification & Deploy
```

1. **Keyword & Intent Validation**: Verify low-competition, high-intent transactional search query (`[A] vs [B]`, `[Product A] Alternatives`, `Is [Product A] Worth It?`).
2. **Soro Content Drafting**:
   - **Hook**: First 2 sentences state the verdict or comparative claim.
   - **Pacing**: Short 1-3 sentence paragraphs for mobile scannability.
   - **Early CTA**: Verdict block in top 20% of article.
   - **E-E-A-T Information Gain**: Specific setup steps, thermal behavior, coating wear, and a mandatory *"Who Is This NOT For?"* section.
   - **Sanitization**: Zero em dashes, zero forbidden AI words (*pivotal*, *testament*, *delve*, *moreover*, *in conclusion*).
3. **Schema & Technical Metadata**:
   - Title Tag (50-60 chars, no em dashes).
   - Meta Description (120-160 chars).
   - Product + FAQPage JSON-LD schema.
4. **Next.js Catalog Integration**: Add entry to `GUIDES` array in [`lib/catalog.ts`](file:///d:/_Career/Workflow/Affiliate/lib/catalog.ts).
5. **Build Verification & Deploy**: Run `npm run build`, check canonicals, commit and push to Cloudflare Pages.
