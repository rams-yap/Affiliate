# Pantry & Pan — Web Application

Official web application repository for **Pantry & Pan** ([pantryandpan.com](https://pantryandpan.com)) — A warm, non-toxic cookware and aesthetic kitchen organization editorial hub.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 16.2.4 (App Router, Static Export `output: "export"`)
- **UI & React**: React 19.2.4, Radix UI Sheet, Lucide React
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss";` + inline theme tokens)
- **Typography**: `Fraunces` (Headings) + `Plus Jakarta Sans` (Body) via `next/font/google`
- **Hosting & Infrastructure**: Cloudflare Pages (`pantryandpan.com`)
- **Serverless API**: Native Cloudflare Pages Functions (`/functions/api/`)
- **Email Infrastructure**: Resend API + Cloudflare Free Email Routing
- **Testing**: Vitest (`npm run test`)

---

## 📚 Documentation Directives

- 🎨 [Brand Identity & Tokens](file:///d:/_Career/Workflow/Affiliate/directives/brand_identity.md)
- 🌐 [Domain, Email & Infrastructure SOP](file:///d:/_Career/Workflow/Affiliate/directives/domain_email_sop.md)

---

## 💻 Local Development & Execution

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Run test suite
npm run test

# Run production build (outputs to out/)
npm run build
```

