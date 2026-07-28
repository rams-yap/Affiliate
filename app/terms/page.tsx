import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { SageBadge } from "@/components/site/SageBadge";

export const metadata: Metadata = {
  title: "Terms of Service : Pantry & Pan",
  description: "Terms of Service and conditions governing the use of Pantry & Pan's website and editorial content.",
  openGraph: {
    title: "Terms of Service : Pantry & Pan",
    description: "Terms of Service and conditions governing the use of Pantry & Pan's website and editorial content.",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
        <Link href="/" className="hover:text-terracotta">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
        <span className="text-foreground">Terms of Service</span>
      </nav>

      <article className="rounded-3xl border border-hairline bg-surface p-8 sm:p-14 soft-shadow">
        <div className="w-full lg:max-w-[calc(100%-300px)]">
          <SageBadge variant="default">Legal & Compliance</SageBadge>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Last updated: July 2026
          </p>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-foreground">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Pantry & Pan (the "Site"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of the Site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Editorial & Educational Disclaimer</h2>
              <p className="text-muted-foreground">
                The content published on Pantry & Pan (including cookware reviews, testing guides, non-toxic material comparisons, and recipes) is for informational and educational purposes only. While we perform independent testing, users should consult manufacturer care manuals for specific cookware maintenance instructions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Intellectual Property Rights</h2>
              <p className="text-muted-foreground">
                All original written content, photography, graphics, and logo assets on Pantry & Pan are the property of Pantry & Pan. Unapproved reproduction or scraping of our testing guides without written attribution is prohibited.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Pantry & Pan makes no representations or warranties regarding third-party merchant products linked on the Site. Prices, availability, and merchant return policies are governed entirely by the selling retailers.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms of Service are governed by and construed in accordance with applicable laws without regard to conflict of law principles.
              </p>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
