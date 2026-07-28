"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Flame,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { SageBadge } from "@/components/site/SageBadge";
import { ProductCard } from "@/components/site/ProductCard";
import { AmazonButton } from "@/components/site/AmazonButton";
import { CATEGORIES, GUIDES, PRODUCTS, HERO_IMAGE, type CategoryKey } from "@/lib/catalog";

export default function HomePage() {
  const [activeCat, setActiveCat] = useState<CategoryKey>("all-essentials");

  const visible =
    activeCat === "all-essentials"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.categoryKey === activeCat);

  const featuredGuide = GUIDES[0];
  const skillet = PRODUCTS[0];

  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
      {/* HERO */}
      <section className="relative mt-8 overflow-hidden rounded-3xl bg-background sm:mt-12 lg:rounded-[2rem]">
        <div className="relative aspect-[16/11] w-full sm:aspect-[16/9] lg:aspect-[16/8]">
          <img
            src={HERO_IMAGE}
            alt="Warm sunlit kitchen with natural cookware"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 hidden bg-gradient-to-tr from-foreground/60 via-foreground/20 to-transparent lg:block" />

          <div className="absolute right-6 top-6 hidden max-w-xs rounded-3xl bg-surface/95 dark:bg-surface/95 p-5 soft-shadow-md backdrop-blur-md lg:right-10 lg:top-10 lg:block fade-in-up border border-hairline">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracotta">
              <Flame className="h-3.5 w-3.5" /> Featured Guide
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground">
              {featuredGuide.title}
            </h3>
            <Link
              href={`/guides/${featuredGuide.slug}`}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-terracotta transition-all hover:gap-2"
            >
              Read the blueprint <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="relative sm:p-8 lg:absolute lg:inset-0 lg:flex lg:flex-col lg:justify-end lg:bg-transparent lg:p-10 xl:p-16">
          <div className="max-w-2xl rounded-3xl bg-background/85 dark:bg-background/80 lg:bg-white/30 dark:lg:bg-black/50 lg:backdrop-blur-md border border-white/20 dark:border-white/10 py-6 sm:p-8 fade-in-up soft-shadow-md">
            <SageBadge variant="high-contrast">Non-Toxic · PFAS-Free · Heirloom</SageBadge>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl lg:text-white">
              Cook Clean.
              <br />
              Live Whole.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-white/90">
              A curated shift away from synthetic non-stick coatings — into carbon steel,
              ceramic, and clay that get better with every meal.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-terracotta/90 shadow-sm"
              >
                Explore the Essentials
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href={`/guides/${featuredGuide.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-secondary/80 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-muted lg:border-white/20 lg:bg-white/40 dark:lg:bg-white/10 lg:text-foreground lg:backdrop-blur-md lg:hover:bg-white/50"
              >
                Read the Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="my-4 grid grid-cols-1 gap-4 sm:my-14 sm:grid-cols-4">
        {[
          { icon: ShieldCheck, label: "PFAS & PFOA Free" },
          { icon: Leaf, label: "Natural Materials" },
          { icon: Flame, label: "Heirloom Durability" },
          { icon: Sparkles, label: "Editor Tested" },
        ].map((t) => (
          <div
            key={t.label}
            className="flex items-center gap-3 rounded-2xl bg-surface p-4 soft-shadow"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-sage/10 text-sage">
              <t.icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-foreground">{t.label}</span>
          </div>
        ))}
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-8 sm:py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="min-w-0 w-full lg:max-w-[calc(100%-300px)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              The Curation · {CATEGORIES.find((c) => c.key === activeCat)?.label}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Individually vetted. Never a paid placement.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Every piece is chosen for material honesty — the kind of gear you pass down, not
              throw out.
            </p>
          </div>
        </div>

        <ul className="mb-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((c) => {
            const active = c.key === activeCat;
            return (
              <li key={c.key}>
                <button
                  onClick={() => setActiveCat(c.key)}
                  className={
                    "whitespace-nowrap cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 " +
                    (active
                      ? "bg-sage text-sage-foreground shadow-sm"
                      : "bg-surface text-muted-foreground hover:bg-secondary hover:text-foreground")
                  }
                >
                  {c.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* EDITORIAL / BRIDGE */}
      <section id="guide" className="py-12 sm:py-20">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            From the Guides
          </p>
          <Link
            href="/guides"
            className="text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            All guides →
          </Link>
        </div>

        <article className="grid grid-cols-1 overflow-hidden rounded-3xl bg-surface soft-shadow lg:grid-cols-12">
          <div className="col-span-1 p-6 sm:p-10 lg:col-span-8">
            <SageBadge>Guide · Non-Toxic Cookware</SageBadge>
            <Link
              href={`/guides/${featuredGuide.slug}`}
              className="mt-5 block font-display text-3xl font-semibold leading-[1.1] text-foreground hover:underline decoration-terracotta/40 underline-offset-4 sm:text-4xl"
            >
              {featuredGuide.title}
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-terracotta/15 font-display text-sm font-semibold text-terracotta">
                {featuredGuide.authorInitials}
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground">{featuredGuide.authorName}</span>
                <span className="text-xs">{featuredGuide.authorRole}</span>
              </div>
              <span className="mx-2 h-4 w-px bg-hairline" />
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {featuredGuide.readMinutes} min read
              </span>
              <span className="mx-2 h-4 w-px bg-hairline" />
              <span>{featuredGuide.publishDate}</span>
            </div>

            <aside className="mt-6 rounded-2xl bg-secondary p-5 text-xs leading-relaxed text-muted-foreground">
              <strong className="mr-1 font-semibold text-foreground">Disclosure:</strong>
              As an Amazon Associate, we earn from qualifying purchases. This doesn't cost you
              anything and keeps our reviews independent.
            </aside>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>{featuredGuide.sections[0].paragraphs[0]}</p>
              <p>{featuredGuide.sections[1].paragraphs[0]}</p>
            </div>

            <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-3xl bg-secondary sm:grid-cols-[220px_minmax(0,1fr)]">
              <Link
                href={`/product/${skillet.id}`}
                className="block aspect-square w-full overflow-hidden sm:aspect-auto sm:h-full"
              >
                <img
                  src={skillet.image}
                  alt={skillet.title}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="flex flex-col gap-4 p-6">
                <SageBadge variant="high-contrast">Editor's Pick · PFAS-Free</SageBadge>
                <Link
                  href={`/product/${skillet.id}`}
                  className="font-display text-xl font-semibold leading-snug text-foreground hover:underline decoration-terracotta/40 underline-offset-4"
                >
                  {skillet.title}
                </Link>
                <ul className="grid grid-cols-1 gap-2 text-xs text-muted-foreground sm:grid-cols-2">
                  {skillet.pros.slice(0, 2).map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="font-bold text-sage">+</span> {s}
                    </li>
                  ))}
                  {skillet.cons.slice(0, 2).map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="font-bold text-terracotta">–</span> {s}
                    </li>
                  ))}
                </ul>
                <AmazonButton href={skillet.amazonUrl} className="mt-2" />
              </div>
            </div>

            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>{featuredGuide.sections[2].paragraphs[0]}</p>
            </div>

            <Link
              href={`/guides/${featuredGuide.slug}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
            >
              Read the full blueprint <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <aside className="col-span-1 flex flex-col gap-8 bg-secondary/60 p-6 sm:p-10 lg:col-span-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                In this guide
              </p>
              <ol className="mt-4 space-y-3 text-sm">
                {featuredGuide.sections.map((s, i) => (
                  <li key={s.id}>
                    <Link
                      href={`/guides/${featuredGuide.slug}#${s.id}`}
                      className="group flex items-start gap-3 text-muted-foreground hover:text-foreground"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-xs font-semibold text-terracotta soft-shadow">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-hairline pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                Related picks
              </p>
              <ul className="mt-4 space-y-4">
                {[PRODUCTS[1], PRODUCTS[5]].filter(Boolean).map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/product/${p.id}`}
                      className="group flex gap-3"
                    >
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-white">
                        <img
                          src={p.image}
                          alt={p.title}
                          width={80}
                          height={80}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                          {p.category}
                        </p>
                        <p className="line-clamp-2 text-sm font-semibold leading-snug text-foreground group-hover:underline">
                          {p.title}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </article>
      </section>
    </div>
  );
}
