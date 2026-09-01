import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight, HeartHandshake } from "lucide-react";
import { SageBadge } from "@/components/site/SageBadge";

export const metadata: Metadata = {
  title: "Affiliate Disclosure : Pantry & Pan",
  description: "FTC-compliant affiliate partnership disclosure and editorial independence statement for Pantry & Pan.",
  alternates: {
    canonical: "https://pantryandpan.com/affiliate-disclosure",
  },
  openGraph: {
    title: "Affiliate Disclosure : Pantry & Pan",
    description: "FTC-compliant affiliate partnership disclosure and editorial independence statement for Pantry & Pan.",
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
        <Link href="/" className="hover:text-terracotta">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
        <span className="text-foreground">Affiliate Disclosure</span>
      </nav>

      <article className="rounded-3xl border border-hairline bg-surface p-8 sm:p-14 soft-shadow">
        <div className="w-full">
          <SageBadge variant="default">FTC Transparency Statement</SageBadge>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Affiliate Disclosure
          </h1>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Last updated: July 2026
          </p>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-foreground">
            <section className="rounded-2xl bg-surface-tint p-6 border border-hairline">
              <div className="flex items-center gap-3 text-terracotta font-semibold mb-2">
                <HeartHandshake className="h-5 w-5" />
                <span>Summary for Readers</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Pantry & Pan is reader-supported. When you purchase products through links on our site, we may earn an affiliate commission at no extra cost to you. This helps fund our independent lab testing, thermal analysis, and aesthetic pantry photography.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Amazon Associates Program</h2>
              <p className="text-muted-foreground">
                Pantry & Pan is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated sites. As an Amazon Associate, we earn from qualifying purchases.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Editorial Independence</h2>
              <p className="text-muted-foreground">
                Our recommendation system is strictly independent. We do not accept sponsored product placements or paid positive reviews. Products are selected, evaluated, and featured solely based on our non-toxic safety criteria (zero PFAS/PTFE, heavy-metal safety) and structural quality.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Price & Availability Disclaimer</h2>
              <p className="text-muted-foreground">
                Product prices and availability are accurate as of the date/time indicated on retail partner sites and are subject to change. Any price displayed on Amazon or another retail partner at the time of purchase will apply to the purchase of the product.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Questions or Concerns</h2>
              <p className="text-muted-foreground">
                If you have questions regarding our affiliate relationships or lab testing standards, please visit our{" "}
                <Link href="/about" className="text-terracotta underline font-semibold">
                  How We Test Page
                </Link>{" "}
                or contact us at disclosure@pantryandpan.com.
              </p>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
