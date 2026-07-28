# Brand Identity & SOP: Pantry & Pan

## Overview
**Brand Name**: Pantry & Pan  
**Live Site**: [pantryandpan.com](https://pantryandpan.com)  
**Tagline**: Safe Cookware & Aesthetic Kitchen Essentials  
**Core Niche**: Non-toxic ceramic cookware (PFAS/PTFE-free, GreenPan, Caraway, Made In), aesthetic kitchen storage & organization (rice dispensers, bento prep), and multi-functional cooking gadgets.  
**Primary Traffic Drivers**: Pinterest & Organic Google Search  

> [!NOTE]
> For complete technical configuration on domain DNS, Cloudflare Pages edge functions, Resend API setup, and email routing, refer to the [Domain & Email SOP Workbook](file:///d:/_Career/Workflow/Affiliate/directives/domain_email_sop.md).

---

## Design System & Brand Tokens (Live Source)

### Color Palette (`app/globals.css`)
- `--background` (`--bg-primary`): `#F9F6F0` (Warm Oat Cream)
- `--foreground` (`--text-main`): `#2C3531` (Deep Slate Charcoal)
- `--surface-tint`: `#f2ece4` (Soft Oat Tint)
- `--sage`: `#8A9A86` (Non-Toxic Sage Green — Trust & Safety Accent)
- `--terracotta`: `#D48C70` (Ceramic Spice / Terracotta — Primary CTA & Highlights)
- `--amber`: `#C5A059` (Brushed Brass Gold)
- `--border` / `--hairline`: `#e6dfd5` (Subtle Warm Hairline)
- **Dark Mode**: Fully supported via `.dark` class (Background: `#1c211f`, Surface: `#252c29`)

### Typography
- **Headings & Logo (`--font-display`)**: `Fraunces` (Variable Serif with `opsz` axis, loaded via `next/font/google`).
- **Body Text (`--font-sans`)**: `Plus Jakarta Sans` (Weights `400` through `800`, loaded via `next/font/google`).

### UI & Styling System
- **Framework**: Tailwind CSS v4 (`@import "tailwindcss";` with `@theme inline`).
- **Border Radius**: Base `1rem` (`--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-2xl`).
- **Custom Utilities**: `soft-shadow`, `soft-shadow-md`, `fade-in-up`.

### Copywriting Rules
- **NO EM DASHES**: Do not use em dashes (`—`) anywhere in content, headings, metadata, or disclosures. Use colons (`:`), commas (`,`), or periods (`.`) instead.

---

## Brand Logo & Assets
- **Combination Mark**: Sleek ceramic pan icon with aesthetic pantry outline.
- **Logo Assets**: `public/assets/logo.png`, `public/pantry_and_pan_logo.jpg`, and `guidelines/pantry_and_pan_visuals/`.

---

## Email Subscription & Lead Magnet
- **Lead Magnet Guide**: *5-Min Non-Toxic Swap Guide* (`functions/api/Here-is-your-5-min-non-toxic-swap-guide.html`).
- **API Endpoint**: Native Cloudflare edge function `/api/newsletter` connected to Resend API.
- **Deduplication**: Automatic subscriber deduplication suppressing duplicate welcome emails.

---

## SEO & Content Directives
- **Primary Keywords**: `non toxic cookware`, `pfas free ceramic pans`, `aesthetic kitchen gadgets`, `modern pantry organization`, `space saving cookware`.
- **Target Comparisons**: Made In vs. Caraway, Carote vs. Our Place, HexClad vs. GreenPan.
- **Compliance Requirement**: Amazon Affiliate Disclosure on every page footer ("As an Amazon Associate I earn from qualifying purchases.").

