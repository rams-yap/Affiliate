import Link from "next/link";
import { Metadata } from "next";
import { Beaker, ShieldAlert, Flame, Award, Sparkles, ArrowRight, Microscope } from "lucide-react";
import { SageBadge } from "@/components/site/SageBadge";

export const metadata: Metadata = {
  title: "How We Test : Non-Toxic Cookware & Kitchen Vetting Standards",
  description:
    "Discover Pantry & Pan's 4-Pillar Non-Toxic Testing Protocol led by Dr. Elena Vance. We independently test cookware, bakeware, and pantry storage for zero PFAS, PTFE, heavy metals, and heat durability.",
  alternates: {
    canonical: "https://pantryandpan.com/how-we-test",
  },
  openGraph: {
    title: "How We Test : Non-Toxic Cookware & Kitchen Vetting Standards",
    description:
      "Discover Pantry & Pan's 4-Pillar Non-Toxic Testing Protocol led by Dr. Elena Vance. We independently test cookware, bakeware, and pantry storage for zero PFAS, PTFE, heavy metals, and heat durability.",
  },
};

export default function HowWeTestPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Section */}
      <section className="rounded-3xl border border-hairline bg-surface p-8 sm:p-12 lg:p-14 soft-shadow">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <SageBadge variant="default">Independent Vetting Standards</SageBadge>
            <h1 className="font-display font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.15]">
              How We Test: Pure Materials, Zero Fumes, Built to Last.
            </h1>
            <p className="font-sans text-base leading-relaxed text-muted-foreground sm:text-xl">
              At Pantry & Pan, every cookware piece, storage container, and baking dish undergoes independent research and spec evaluation before receiving our non-toxic curation mark. We combine material science analysis, verified third-party lab safety reports, and hands-on user feedback.
            </p>
          </div>

          {/* Right Lead Scientist / Lab Preview */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface-tint p-6 soft-shadow space-y-4">
              <div className="flex items-center gap-4 border-b border-hairline pb-4">
                <img
                  src="/assets/elena_vance_front_1785511912703.jpg"
                  alt="Dr. Elena Vance"
                  className="h-16 w-16 rounded-full object-cover border-2 border-sage"
                />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Dr. Elena Vance</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-sage">Materials Science Lead</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                "We enforce strict EU REACH heavy metal compliance and verified third-party laboratory reports. If a coating releases fluorinated fumes or contains trace lead/cadmium glazes, it is banned from our site."
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-sage">
                <Microscope className="h-4 w-4" />
                <span>Verified Zero-PFAS Protocol</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Compromise Chemical Blacklist */}
      <section className="rounded-3xl border border-hairline bg-surface p-8 sm:p-12 soft-shadow">
        <div className="flex items-center gap-3 text-terracotta">
          <ShieldAlert className="h-6 w-6" />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Zero Compromise Blacklist</span>
        </div>
        <h2 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-4xl">
          What We Ban From Pantry & Pan
        </h2>
        <p className="mt-3 text-base text-muted-foreground max-w-2xl">
          Your family's health is our absolute priority. If a piece of cookware or a storage container relies on any of the following toxic additives, it is permanently banned from our recommendations. We simply do not compromise on safety.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { title: "PFAS / PFOA", desc: "Forever chemicals" },
            { title: "PTFE / Teflon", desc: "Synthetic polymers" },
            { title: "Lead & Cadmium", desc: "Toxic glaze heavy metals" },
            { title: "GenX Chemicals", desc: "Fluorinated replacements" },
            { title: "BPA & Phthalates", desc: "Plasticizers" },
            { title: "Chemical Aerosols", desc: "Propellant spray additives" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-hairline bg-background p-4 text-center">
              <p className="font-display text-sm font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Pillar Testing Protocol Grid */}
      <section>
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Independent Methodology
          </span>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-4xl">
            Our 4-Pillar Non-Toxic Testing Protocol
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Every skillet, storage container, and ceramic dish must pass all four of our strict criteria before earning our vetting badge.
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
              We meticulously verify safety test reports for zero PFAS, PFOA, PTFE, GenX, lead, and cadmium. We outright reject any product that relies on fluorinated non-stick coatings or unverified glaze chemistry.
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
              Cookware must maintain uniform heat distribution without hot spots, warping, or off-gassing under intense searing temperatures. We rigorously test heat retention for everyday tasks, from pan searing to sourdough baking.
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
              We prioritize exceptional materials that outlast disposable trends. We look for hot-forged carbon steel that seasons beautifully with age, thick borosilicate glass, and solid bamboo components built for daily, loving use.
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
              A non-toxic kitchen should be a visual joy. We evaluate ergonomic hand-feel, tactile weight, and neutral organic color palettes that look striking and peaceful on open shelving.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="rounded-3xl border border-hairline bg-surface-tint p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="max-w-xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-terracotta">Explore Our Tested Gear</span>
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Ready to Build Your Non-Toxic Kitchen?
          </h2>
          <p className="text-sm text-muted-foreground">
            Browse our independently vetted cookware, bakeware, and pantry storage recommendations.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0">
          <Link
            href="/guides/non-toxic-kitchen-blueprint"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-terracotta-foreground transition-opacity hover:opacity-90"
          >
            Read Kitchen Blueprint <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Meet Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
