import Link from "next/link";
import { CATEGORIES } from "@/lib/catalog";

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "How We Test", href: "/about" },
  { label: "Newsletter", href: "/contact" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
];

export function SiteFooter() {
  return (
    <footer className="mt-10 bg-surface-tint">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-display text-xl font-semibold text-foreground">Pantry & Pan</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Curated Living
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A warm editorial hub for non-toxic cookware and heirloom-quality kitchen gear.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {CATEGORIES.filter((c) => c.key !== "all-essentials").map((c) => (
                <li key={c.key}>
                  <Link
                    href={`/category/${c.slug}`}
                    className="text-sm text-muted-foreground hover:text-terracotta"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              {COMPANY.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-terracotta"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5">
              {LEGAL.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-terracotta"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-white/60 p-6 text-sm leading-relaxed text-muted-foreground backdrop-blur-md">
          <p>
            <span className="font-semibold text-foreground">Amazon Affiliate Disclosure:</span>{" "}
            Pantry & Pan is a participant in the Amazon Services LLC Associates Program, an
            affiliate advertising program designed to provide a means for sites to earn advertising
            fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from
            qualifying purchases. Product prices and availability are accurate as of the date/time
            indicated and are subject to change.
          </p>
        </div>

        <p className="mt-6 flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Pantry & Pan · Curated Living. All rights reserved.
          </span>
          <span>Made for people who cook whole food at home.</span>
        </p>
      </div>
    </footer>
  );
}
