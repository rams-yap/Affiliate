import Link from "next/link";
import { Metadata } from "next";
import { Flame, Sparkles, HeartHandshake, ArrowRight, Award, Beaker } from "lucide-react";
import { SageBadge } from "@/components/site/SageBadge";

export const metadata: Metadata = {
  title: "How We Test & About Us : Pantry & Pan",
  description:
    "Discover Pantry & Pan's rigorous non-toxic testing protocol, chemical-free cookware standards, and commitment to aesthetic kitchen essentials.",
  openGraph: {
    title: "How We Test & About Us : Pantry & Pan",
    description:
      "Discover Pantry & Pan's rigorous non-toxic testing protocol, chemical-free cookware standards, and commitment to aesthetic kitchen essentials.",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mb-16 rounded-3xl border border-hairline bg-surface p-8 sm:p-14 soft-shadow">
        <div className="w-full lg:max-w-[calc(100%-300px)]">
          <SageBadge variant="default">Our Vetting Philosophy</SageBadge>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Clean Cookware & Aesthetic Living Without Chemical Compromise.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-xl">
            Pantry & Pan was founded to eliminate the guesswork from stocking a non-toxic, beautiful kitchen. We independently research, test, and vet cookware, bakeware, and pantry storage for chemical purity, real-world longevity, and timeless visual design.
          </p>
        </div>
      </section>

      {/* 4-Pillar Testing Protocol */}
      <section className="mb-16">
        <div className="mb-10 w-full lg:max-w-[calc(100%-300px)]">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Independent Methodology
          </span>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-4xl">
            Our 4-Pillar Non-Toxic Testing Protocol
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Every skillet, jar, and ceramic dish must pass all four criteria before receiving the Pantry & Pan approval badge.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Pillar 1 */}
          <div className="rounded-3xl border border-hairline bg-surface p-8 soft-shadow">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage/15 text-sage">
                <Beaker className="h-6 w-6" />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sage">Pillar 01</span>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Chemical & Heavy Metal Purity
                </h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We verify manufacturer safety test reports for zero PFAS, PFOA, PTFE, GenX, lead, and cadmium. We reject any product that relies on fluorinated non-stick chemicals or unverified glazes.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-3xl border border-hairline bg-surface p-8 soft-shadow">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-terracotta/15 text-terracotta">
                <Flame className="h-6 w-6" />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-terracotta">Pillar 02</span>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  High-Heat Thermal Performance
                </h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Cookware must maintain heat distribution without hot spots, warping, or off-gassing under high searing temperatures (500°F+). We evaluate heat retention for pan searing and baking crust formation.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-3xl border border-hairline bg-surface p-8 soft-shadow">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber/15 text-amber">
                <Award className="h-6 w-6" />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber">Pillar 03</span>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Heirloom Durability & Care
                </h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We prioritize materials that outlast disposables: hot-forged carbon steel that seasons with age, thick borosilicate glass, and solid wood components that withstand daily washing and kitchen use.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="rounded-3xl border border-hairline bg-surface p-8 soft-shadow">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage/15 text-sage">
                <Sparkles className="h-6 w-6" />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sage">Pillar 04</span>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Aesthetic Integration
                </h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A non-toxic kitchen should be a joy to look at. We evaluate ergonomic hand-feel, tactile weight, and neutral organic color palettes (warm oat cream, terracotta, slate) that look striking on open shelving.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Independence & Disclosure Commitment */}
      <section className="mb-16 rounded-3xl border border-hairline bg-surface-tint p-8 sm:p-12">
        <div className="w-full lg:max-w-[calc(100%-300px)]">
          <div className="flex items-center gap-3 text-terracotta">
            <HeartHandshake className="h-6 w-6" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Editorial Integrity</span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-semibold text-foreground sm:text-4xl">
            100% Unbiased & Transparent Curation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Pantry & Pan earns affiliate commissions when you purchase through our links. However, brands cannot pay for placement, higher rankings, or favorable reviews in our guides. If a product fails our lab safety or durability criteria, it will never be featured.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/affiliate-disclosure"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-terracotta-foreground transition-opacity hover:opacity-90"
            >
              Read Full Affiliate Disclosure <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Submit a Product for Vetting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
