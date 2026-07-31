# Soro SEO & AEO Strategy Directive (SOP)

This Standard Operating Procedure (SOP) details the active **Soro SEO & AEO (Answer Engine Optimization)** workflow for research, structuring, writing, and technical deployment of high-converting transactional affiliate content for **Pantry & Pan** (`pantryandpan.com`).

> [!NOTE]
> This directive replaces [`directives/seo_audit_sop.md`](file:///d:/_Career/Workflow/Affiliate/directives/seo_audit_sop.md) for content strategy, keyword discovery, copy guidelines, and writing workflows. The technical Next.js canonical metadata rules from `seo_audit_sop.md` remain enforced for code implementation.

---

## Brand & Compliance Rules (Mandatory)

1. **NO EM DASHES**: Per [`brand_identity.md`](file:///d:/_Career/Workflow/Affiliate/directives/brand_identity.md), do NOT use em dashes (`—`) anywhere in headings, body copy, metadata, or schema. Use colons (`:`), commas (`,`), or periods (`.`) instead.
2. **Amazon Affiliate Disclosure**: Every article page must contain the mandatory footer disclosure: *"As an Amazon Associate I earn from qualifying purchases."*
3. **Next.js Technical Architecture**: Never place `"use client"` directly in `app/[route]/page.tsx`. Keep `page.tsx` as a React Server Component (RSC) exporting static `Metadata` with explicit canonicals and JSON-LD schema.

---

## Phase 1: Topical Mapping & Keyword Discovery

When targeting a product category, cookware line, or kitchen organizational niche, do NOT target broad, high-volume head terms. Focus on long-tail, low-competition keywords with high transactional and problem-solving intent:

1. **Buyer & Problem-Solving Intent Modifiers**:
   - `[Product A] vs [Product B]` (High transactional comparative intent)
   - `[Product A] Alternatives` / `Best [Product A] Alternative` (Buyer transition intent)
   - `How to fix [specific error/pain point] using [Product A]` (Problem-solving intent)
   - `Is [Product A] worth it for [specific user class - e.g. small kitchens, induction stoves, meal preppers]?`
2. **Authority Filter**: Skip keywords dominated by legacy massive media sites (Forbes, Wirecutter, Spruce Eats) unless targeting a precise long-tail angle or specific pain point variation they missed.
3. **Topical Hub & Spoke Clustering**: Group keywords into tight clusters:
   - **Hub (Pillar)**: Category guide (e.g. *Non-Toxic Ceramic Cookware Guide*)
   - **Spoke (Child)**: Comparative / transactional posts (e.g. *GreenPan vs Caraway*, *Caraway Alternatives for Induction*)

---

## Phase 2: High-Velocity Content & Writing Strategy

1. **Hook & Mobile Pacing**:
   - Start immediately with the core problem or comparative verdict.
   - Eliminate generic intros like "In today's fast-paced world...".
   - Keep paragraphs to 1-3 sentences for rapid mobile scanning.
2. **Information Gain & E-E-A-T**:
   - Write from the perspective of an active kitchen tester who has tested the products in a real home kitchen.
   - Include specific setup steps, thermal performance notes, coating wear patterns, or minor friction points.
   - Include pricing and spec comparison tables.
   - Include a dedicated **"Who Is This NOT For?"** section (honest negatives build trust and boost conversion rates).
3. **Call-to-Action (CTA) Placement**:
   - Place a clear "Quick Verdict" CTA box within the first 20% of the article.
   - Place secondary CTA links/buttons at the conclusion of key comparative H2 sections.
4. **AI-ism Sanitization**:
   - Strict ban on corporate jargon and AI filler words: *pivotal*, *testament*, *delve*, *moreover*, *in conclusion*, *game-changer*, *nestled*, *tapestry*.
   - Keep language direct, concise, and pragmatic.

---

## Phase 3: Technical SEO, AEO & Schema Output

Every article must include a complete technical metadata & schema payload ready for Next.js App Router integration:

1. **Title Tag**: Long-tail optimized, 50-60 characters, no em dashes.
2. **Meta Description**: Action-oriented, 120-160 characters.
3. **Structured Data (JSON-LD)**:
   - **Product Schema**: With offer, aggregate rating placeholders, and pros/cons markup.
   - **FAQPage Schema**: Direct Question-and-Answer pairs targeted at search engines and AI answer engines (ChatGPT, Perplexity, Claude, Google AI Overviews).
4. **Clean Markdown Structure**: H2 and H3 hierarchy, structured comparison tables, bullet lists, and semantic HTML structure.
