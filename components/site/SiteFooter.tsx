"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
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
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, topics: ["All Categories"] }),
      });

      const text = await res.text();
      let data: { error?: string; success?: boolean; message?: string } = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        // Non-JSON response on Cloudflare Pages static output
      }

      if (!res.ok && data.error) {
        throw new Error(data.error);
      }

      setIsSubscribed(true);
      setEmail("");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Error subscribing.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="mt-10 bg-surface-tint border-t border-hairline">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
        {/* Newsletter Signup Callout */}
        <div className="mb-12 rounded-3xl border border-hairline bg-surface p-8 sm:p-10 soft-shadow flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-amber font-semibold text-xs uppercase tracking-wider">
              <Mail className="h-4 w-4" /> Weekly Kitchen Journal
            </div>
            <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
              Get Non-Toxic Cookware & Pantry Guides.
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Join 15,000+ home cooks receiving our weekly non-toxic pan care tips and clean kitchen deals.
            </p>
          </div>

          <div className="w-full md:w-auto min-w-[320px]">
            {isSubscribed ? (
              <div className="flex items-center gap-2 rounded-2xl bg-sage/15 p-4 text-xs font-semibold text-foreground">
                <CheckCircle2 className="h-5 w-5 text-sage shrink-0" />
                <span>You're subscribed! Check your inbox for your first guide.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-full border border-hairline bg-background px-4 py-3 text-sm text-foreground focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="shrink-0 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-terracotta-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                  >
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Join Free"}
                  </button>
                </div>
                {errorMsg && <p className="text-xs text-destructive px-2">{errorMsg}</p>}
              </form>
            )}
          </div>
        </div>

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
