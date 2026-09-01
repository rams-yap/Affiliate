import Link from "next/link";
import { Metadata } from "next";
import { Flame, Sparkles, HeartHandshake, ArrowRight, Award, Beaker, ShieldAlert } from "lucide-react";
import { SageBadge } from "@/components/site/SageBadge";

export const metadata: Metadata = {
  title: "Our Story & Non-Toxic Methodology : Pantry & Pan",
  description:
    "Meet Mina Kim, Maya Chen, Dr. Elena Vance, and Kristy Weber. Discover how Pantry & Pan bridges culinary heritage, materials science, and non-toxic kitchen living.",
  alternates: {
    canonical: "https://pantryandpan.com/about",
  },
  openGraph: {
    title: "Our Story & Non-Toxic Methodology : Pantry & Pan",
    description:
      "Meet Mina Kim, Maya Chen, Dr. Elena Vance, and Kristy Weber. Discover how Pantry & Pan bridges culinary heritage, materials science, and non-toxic kitchen living.",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Section */}
      <section className="rounded-3xl border border-hairline bg-surface p-8 sm:p-12 lg:p-14 soft-shadow">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <SageBadge variant="default">Our Curation Philosophy</SageBadge>
            <h1 className="font-display font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.15]">
              Beautiful Meals Start With Safe Ingredients. Your Cookware Should Be No Different.
            </h1>
            <p className="font-sans text-base leading-relaxed text-muted-foreground sm:text-xl">
              We created Pantry & Pan to take the chemical guesswork out of your everyday cooking. We independently research, test, and vet cookware, bakeware, and pantry essentials for strict chemical purity, real-world longevity, and timeless aesthetic design. Our mission is to help you build a safe, welcoming kitchen where your family can thrive.
            </p>
          </div>

          {/* Right Image / Aesthetic Kitchenware Tabletop Hero Card */}
          <div className="lg:col-span-5 h-full">
            <div className="relative h-full overflow-hidden rounded-2xl border border-hairline bg-surface-tint p-2.5 soft-shadow flex flex-col">
              <div className="relative aspect-[16/10] lg:aspect-[4/5] w-full flex-1 overflow-hidden rounded-xl bg-muted">
                <img
                  src="/assets/about_hero_tabletop.jpg"
                  alt="Aesthetic home kitchen table set with non-toxic ceramic Dutch oven and carbon steel cookware"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-terracotta-light">The Kitchen Table</p>
                  <p className="text-xs font-medium text-white/90">Curated non-toxic cookware, tested for everyday home living.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Co-Founders Story Section */}
      <section className="rounded-3xl border border-hairline bg-surface p-8 sm:p-12 soft-shadow">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Our Origin Story
          </span>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-4xl">
            Where Culinary Wisdom Meets Non-Toxic Science
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our story began when three professional women bonded over a shared realization. We each grew up watching our mothers cook with deep love and care, learning traditional cookware habits that had been passed down for generations. However, as we researched the modern kitchen industry, we discovered a heartbreaking truth. Those old non-stick pans and inherited ceramic glazes were secretly leaching forever chemicals into the very meals meant to nourish our families.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Determined to find a better way, we combined our distinct backgrounds: Korean mindful aesthetic curation, Chinese culinary heritage and wok care, and rigorous European materials science. Together, we founded Pantry & Pan to bring scientific, non-toxic clarity to warm and beautiful home kitchens.
          </p>
        </div>

        {/* 3 Female Co-Founders Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 pt-6 border-t border-hairline">
          {/* Mina Kim */}
          <div className="flex flex-col rounded-2xl border border-hairline bg-background p-6 space-y-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
              <img
                src="/assets/mina_kim_front_1785512206331.jpg"
                alt="Mina Kim portrait"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-terracotta">Co-Founder & Pantry Curation Lead</span>
              <h3 className="font-display text-xl font-semibold text-foreground">Mina Kim</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Inspired by Korean well-being principles, Mina focuses on practical kitchen organization, space-saving storage, and everyday usability. She vets organizers, glass containers, and daily cookware essentials to share honest picks and tips for keeping a clutter-free, non-toxic pantry.
              </p>
            </div>
          </div>

          {/* Maya Chen */}
          <div className="flex flex-col rounded-2xl border border-hairline bg-background p-6 space-y-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
              <img
                src="/assets/maya_chen_front_v2.jpg"
                alt="Maya Chen portrait"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber">Co-Founder & Culinary Lead</span>
              <h3 className="font-display text-xl font-semibold text-foreground">Maya Chen</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Growing up in a busy family kitchen, Maya learned culinary care directly from her mother. She brings deep hands-on experience to how different pans handle heat, knowing which materials scorch delicate foods, how to prevent sticking without chemical sprays, and how to season heirloom iron and carbon steel.
              </p>
            </div>
          </div>

          {/* Dr. Elena Vance */}
          <div className="flex flex-col rounded-2xl border border-hairline bg-background p-6 space-y-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
              <img
                src="/assets/elena_vance_front_1785511912703.jpg"
                alt="Dr. Elena Vance portrait"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sage">Co-Founder & Materials Science Lead</span>
              <h3 className="font-display text-xl font-semibold text-foreground">Dr. Elena Vance</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                As a European materials science specialist focusing on strict EU REACH standards, Dr. Vance oversees our material verification criteria. She scrutinizes third-party laboratory safety reports, validates zero-PFAS ceramic coatings, and checks heavy metal disclosures to help ensure your kitchen stays clean.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Persona (Kristy) */}
        <div className="mt-10 rounded-2xl border border-hairline bg-surface-tint p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-terracotta bg-muted">
              <img
                src="/assets/kristy_weber_front_1785512170423.jpg"
                alt="Kristy Weber editorial lead portrait"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-terracotta">Editorial Lead & Community Voice</span>
              <h3 className="font-display text-2xl font-semibold text-foreground">Kristy Weber</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Kristy thrives in the heart of our test kitchen environment. As our Editorial Lead and Community Voice, she connects directly with home cooks, translating complex safety specs and curation insights into warm, practical buying guides and weekly newsletters. She loves taking the confusion out of non-toxic living so families can shop with complete confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chemical Blacklist & Safety Guarantee */}
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
