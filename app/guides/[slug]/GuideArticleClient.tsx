"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronRight, Clock, Quote } from "lucide-react";

import { SageBadge } from "@/components/site/SageBadge";
import { AmazonButton } from "@/components/site/AmazonButton";
import { PantryStapleCalculator } from "@/components/tools/PantryStapleCalculator";
import { HeirloomPanQuiz } from "@/components/tools/HeirloomPanQuiz";
import { NonToxicPanDecoder } from "@/components/tools/NonToxicPanDecoder";
import { OilSprayerCalculator } from "@/components/tools/OilSprayerCalculator";
import { SpaceSavingCalculator } from "@/components/tools/SpaceSavingCalculator";
import { getGuide, getProduct, GUIDES, type Article } from "@/lib/catalog";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

export function GuideArticleClient({ guide: g }: { guide: Article }) {
  const sectionIds = g.sections.map((s) => s.id);
  const active = useActiveSection(sectionIds);
  const relatedGuides = GUIDES.filter((o) => o.slug !== g.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-20 sm:px-6 lg:px-8">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 pt-6 text-xs font-semibold text-muted-foreground sm:pt-10"
      >
        <Link href="/" className="hover:text-terracotta">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
        <Link href="/guides" className="hover:text-terracotta">
          Guides
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
        <span className="truncate text-foreground font-semibold">{g.title}</span>
      </nav>

      {/* Header */}
      <header className="mt-6 w-full lg:max-w-[calc(100%-300px)]">
        <SageBadge>{g.category}</SageBadge>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl">
          {g.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{g.excerpt}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-terracotta/15 font-display text-sm font-semibold text-terracotta">
            {g.authorInitials}
          </span>
          <div className="flex flex-col">
            <span className="font-semibold text-foreground">{g.authorName}</span>
            <span className="text-xs">{g.authorRole}</span>
          </div>
          <span className="mx-2 h-4 w-px bg-hairline" />
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {g.readMinutes} min read
          </span>
          <span className="mx-2 h-4 w-px bg-hairline" />
          <span>{g.publishDate}</span>
        </div>
      </header>

      <div className="mt-8 overflow-hidden rounded-3xl bg-secondary soft-shadow">
        <img
          src={g.heroImage}
          alt={g.title}
          className="aspect-[16/9] w-full object-cover"
        />
      </div>

      {/* Article body + TOC */}
      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
        <article className="min-w-0">
          <aside className="rounded-2xl bg-secondary p-5 text-xs leading-relaxed text-muted-foreground">
            <strong className="mr-1 font-semibold text-foreground">Disclosure:</strong>
            As an Amazon Associate, Pantry & Pan earns from qualifying purchases. This doesn't
            cost you anything and keeps our reviews independent and un-sponsored.
          </aside>

          <div className="mt-10 flex flex-col gap-10">
            {g.sections.map((s) => {
              const product = s.productId ? getProduct(s.productId) : undefined;
              const blockquote = (s as unknown as { blockquote?: string }).blockquote;
              return (
                <section key={s.id} id={s.id} className="scroll-mt-48">
                  <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                    {s.title}
                  </h2>
                  <div className="mt-4 space-y-5 text-[16px] leading-[1.7] text-muted-foreground">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {blockquote && (
                    <blockquote className="mt-6 flex gap-4 rounded-3xl bg-sage/10 p-6 text-foreground">
                      <Quote className="h-6 w-6 shrink-0 text-sage" />
                      <p className="font-display text-lg italic leading-snug">
                        {blockquote}
                      </p>
                    </blockquote>
                  )}

                  {product && (
                    <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-3xl bg-surface soft-shadow sm:grid-cols-[220px_minmax(0,1fr)]">
                      <Link
                        href={`/product/${product.id}`}
                        className="block aspect-square w-full overflow-hidden bg-secondary sm:aspect-auto sm:h-full"
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-cover"
                        />
                      </Link>
                      <div className="flex flex-col gap-3 p-6">
                        <SageBadge>{product.badge}</SageBadge>
                        <Link
                          href={`/product/${product.id}`}
                          className="font-display text-lg font-semibold leading-snug text-foreground hover:underline decoration-terracotta/40 underline-offset-4"
                        >
                          {product.title}
                        </Link>
                        <p className="text-sm text-muted-foreground">{product.description}</p>
                        <div className="mt-2 flex flex-wrap gap-3">
                          <AmazonButton href={product.amazonUrl} />
                          <Link
                            href={`/product/${product.id}`}
                            className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-background px-4 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
                          >
                            Full review <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </section>
              );
            })}

            {/* Embedded Interactive Tools */}
            {g.slug === "aesthetic-pantry-organization-guide" && <PantryStapleCalculator />}
            {g.slug === "plastic-free-sunday-meal-prep-workflow" && <PantryStapleCalculator defaultStaple="rice" initialWeight={5} />}
            {g.slug === "cast-iron-vs-carbon-steel-vs-enameled" && <HeirloomPanQuiz />}
            {g.slug === "wok-cooking-toxin-free" && <HeirloomPanQuiz />}
            {g.slug === "ceramic-granite-stone-cookware-explained" && <NonToxicPanDecoder />}
            {g.slug === "non-toxic-kitchen-blueprint" && <NonToxicPanDecoder />}
            {g.slug === "clean-morning-rituals" && <NonToxicPanDecoder />}
            {g.slug === "multifunctional-kitchen-gadgets-guide" && <OilSprayerCalculator />}
            {g.slug === "space-saving-cookware-guide" && <SpaceSavingCalculator />}

            {/* AEO FAQ Section */}
            {g.faqs && g.faqs.length > 0 && (
              <section id="faq-section" className="mt-14 scroll-mt-48 rounded-3xl border border-hairline bg-surface p-8 soft-shadow">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracotta">
                  <Quote className="h-3.5 w-3.5" /> Frequently Asked Questions
                </div>
                <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  Expert Answers & Material Science Q&A
                </h2>
                <div className="mt-8 space-y-6">
                  {g.faqs.map((faq, idx) => (
                    <div key={idx} className="rounded-2xl bg-secondary/60 p-6">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {faq.question}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-44">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              In this guide
            </p>
            <ol className="mt-4 space-y-1">
              {g.sections.map((s, i) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={
                        "flex items-start gap-3 rounded-2xl px-3 py-2.5 text-sm transition-all " +
                        (isActive
                          ? "bg-sage/10 text-foreground"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground")
                      }
                    >
                      <span
                        className={
                          "grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-semibold soft-shadow " +
                          (isActive
                            ? "bg-sage text-sage-foreground"
                            : "bg-white text-terracotta")
                        }
                      >
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{s.title}</span>
                    </a>
                  </li>
                );
              })}
              {g.faqs && g.faqs.length > 0 && (
                <li>
                  <a
                    href="#faq-section"
                    className={
                      "flex items-start gap-3 rounded-2xl px-3 py-2.5 text-sm transition-all " +
                      (active === "faq-section"
                        ? "bg-sage/10 text-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground")
                    }
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-terracotta/15 text-xs font-semibold text-terracotta">
                      ?
                    </span>
                    <span className="pt-0.5 font-semibold">Frequently Asked Questions</span>
                  </a>
                </li>
              )}
            </ol>
          </div>
        </aside>
      </div>

      {/* Related articles */}
      <section className="mt-20 border-t border-hairline pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
          Keep reading
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          More non-toxic kitchen guides
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedGuides.map((r) => (
            <Link
              key={r.slug}
              href={`/guides/${r.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl bg-surface soft-shadow transition-all hover:-translate-y-1 hover:soft-shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={r.heroImage}
                  alt={r.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                  {r.category}
                </span>
                <h3 className="font-display text-lg font-semibold leading-snug text-foreground group-hover:underline decoration-terracotta/40 underline-offset-4">
                  {r.title}
                </h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">{r.excerpt}</p>
                <p className="mt-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" /> {r.readMinutes} min read
                  <ArrowUpRight className="ml-auto h-3.5 w-3.5" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
