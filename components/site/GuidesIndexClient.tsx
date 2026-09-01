"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronRight, Clock, Flame, Sparkles } from "lucide-react";
import { SageBadge } from "@/components/site/SageBadge";
import { CATEGORIES, type CategoryKey, type Article } from "@/lib/catalog";

type Props = {
  initialGuides?: Article[];
};

export function GuidesIndexClient({ initialGuides }: Props) {
  const [activeFilter, setActiveFilter] = useState<CategoryKey>("all-essentials");

  const publishedGuides = initialGuides || [];

  const filteredGuides =
    activeFilter === "all-essentials"
      ? publishedGuides
      : publishedGuides.filter((g) => g.categoryKey === activeFilter);

  const featuredGuide = publishedGuides[0];

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
        <Link href="/" className="hover:text-terracotta">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
        <span className="text-foreground">Guides</span>
      </nav>

      {/* Hero Header */}
      <header className="mb-12 rounded-3xl border border-hairline bg-surface p-8 sm:p-12 soft-shadow">
        <div className="w-full lg:max-w-[calc(100%-300px)]">
          <SageBadge variant="default">Pantry & Pan Editorial</SageBadge>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Editorial Guides & Non-Toxic Resources.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Independent material research, non-toxic cookware audits, thermal performance tests, and aesthetic pantry organization tutorials written by home chefs and materials researchers.
          </p>
        </div>
      </header>

      {/* Featured Guide Banner */}
      {featuredGuide && (
        <section className="mb-14 overflow-hidden rounded-3xl border border-hairline bg-surface soft-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="aspect-[16/9] w-full overflow-hidden bg-secondary lg:col-span-6 lg:aspect-auto">
              <img
                src={featuredGuide.heroImage}
                alt={featuredGuide.title}
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracotta">
                  <Flame className="h-3.5 w-3.5" /> Featured Master Guide
                </div>
                <Link
                  href={`/guides/${featuredGuide.slug}`}
                  className="mt-4 block font-display text-2xl font-semibold leading-snug text-foreground hover:underline decoration-terracotta/40 underline-offset-4 sm:text-3xl"
                >
                  {featuredGuide.title}
                </Link>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {featuredGuide.excerpt}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-terracotta/15 font-display text-sm font-semibold text-terracotta">
                    {featuredGuide.authorInitials}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{featuredGuide.authorName}</p>
                    <p className="text-xs text-muted-foreground">{featuredGuide.readMinutes} min read</p>
                  </div>
                </div>

                <Link
                  href={`/guides/${featuredGuide.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-xs font-semibold text-terracotta-foreground transition-opacity hover:opacity-90 shadow-sm"
                >
                  Read Guide <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Bar */}
      <div className="mb-10 flex items-center justify-between gap-4 border-b border-hairline pb-4 overflow-x-auto">
        <div className="flex items-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveFilter(c.key)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                activeFilter === c.key
                  ? "bg-terracotta text-terracotta-foreground shadow-sm"
                  : "bg-surface border border-hairline text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <span className="hidden text-xs font-semibold text-muted-foreground md:inline">
          {filteredGuides.length} {filteredGuides.length === 1 ? "Guide" : "Guides"} Available
        </span>
      </div>

      {/* All Guides Grid */}
      <section className="mb-16">
        <h2 className="mb-6 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          {activeFilter === "all-essentials"
            ? "All Editorial Guides"
            : `${CATEGORIES.find((c) => c.key === activeFilter)?.label} Guides`}
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredGuides.map((guide) => (
            <article
              key={guide.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-hairline bg-surface soft-shadow transition-all duration-300 hover:-translate-y-1 hover:soft-shadow-md"
            >
              <Link
                href={`/guides/${guide.slug}`}
                className="relative aspect-[16/10] overflow-hidden bg-secondary"
              >
                <img
                  src={guide.heroImage}
                  alt={guide.title}
                  width={600}
                  height={375}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface/90 dark:bg-surface/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground shadow-sm backdrop-blur-md">
                  {guide.category}
                </span>
              </Link>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-3">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{guide.readMinutes} min read</span>
                    <span>·</span>
                    <span>{guide.publishDate}</span>
                  </div>

                  <Link
                    href={`/guides/${guide.slug}`}
                    className="font-display text-xl font-semibold leading-snug text-foreground group-hover:underline decoration-terracotta/40 underline-offset-4"
                  >
                    {guide.title}
                  </Link>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {guide.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4 text-xs">
                  <span className="font-semibold text-foreground">By {guide.authorName}</span>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-terracotta hover:underline"
                  >
                    Read Guide <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mb-16 rounded-3xl border border-hairline bg-surface-tint p-8 sm:p-12 text-center">
        <div className="mx-auto max-w-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/15 px-3.5 py-1 text-xs font-bold text-amber mb-4">
            <Sparkles className="h-3.5 w-3.5" /> Non-Toxic Digest
          </span>
          <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Get New Chemical Safety Guides In Your Inbox
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We publish bi-weekly deep dives on cookware materials, non-toxic pan care, and aesthetic pantry organization.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-terracotta-foreground transition-opacity hover:opacity-90 shadow-sm"
          >
            Subscribe to Guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
