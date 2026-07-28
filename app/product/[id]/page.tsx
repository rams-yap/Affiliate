import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock,
  Info,
  ShieldCheck,
  Sparkles,
  Star,
  TriangleAlert,
} from "lucide-react";

import { JsonLd } from "@/components/seo/JsonLd";
import { SageBadge } from "@/components/site/SageBadge";
import { AmazonButton } from "@/components/site/AmazonButton";
import { GUIDES, getProduct, PRODUCTS } from "@/lib/catalog";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    id: p.id,
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) {
    return { title: "Product not found : Pantry & Pan" };
  }
  return {
    title: `${p.title} : Pantry & Pan Review`,
    description: p.description,
    alternates: {
      canonical: `https://pantryandpan.com/product/${p.id}`,
    },
    openGraph: {
      title: `${p.title} : Pantry & Pan`,
      description: p.description,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) {
    notFound();
  }

  const relatedGuides = GUIDES.filter(
    (g) => g.slug === p.featuredInSlug || g.relatedProductIds.includes(p.id),
  );
  const relatedProducts = PRODUCTS.filter(
    (o) => o.id !== p.id && o.categoryKey === p.categoryKey,
  ).slice(0, 3);

  const reviewCountNum = parseInt(p.reviewsCount.replace(/[^0-9]/g, ""), 10) || 100;
  const prices = p.priceRange.match(/\d+/g) || ["50"];
  const lowPrice = prices[0] || "50";
  const highPrice = prices[1] || lowPrice;

  const brandName = p.title.startsWith("5L") || p.title.startsWith("2-in-1")
    ? "Pantry & Pan"
    : p.title.split(" ")[0];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.title,
    image: `https://pantryandpan.com${p.image}`,
    description: p.description,
    sku: p.asin,
    mpn: p.asin,
    brand: {
      "@type": "Brand",
      name: brandName,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: p.rating,
      reviewCount: reviewCountNum,
      bestRating: 5,
      worstRating: 1,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: parseFloat(lowPrice),
      highPrice: parseFloat(highPrice),
      offerCount: 2,
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: p.amazonUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pantryandpan.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: p.category,
        item: `https://pantryandpan.com/category/${p.categoryKey}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: p.title,
        item: `https://pantryandpan.com/product/${p.id}`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-32 sm:px-6 lg:px-8">
      <JsonLd data={[productSchema, breadcrumbSchema]} />
      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 pt-6 text-xs font-semibold text-muted-foreground sm:pt-10"
      >
        <Link href="/" className="hover:text-terracotta">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
        <Link
          href={`/category/${p.categoryKey}`}
          className="hover:text-terracotta"
        >
          {p.category}
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
        <span className="truncate text-foreground font-semibold">{p.title}</span>
      </nav>

      {/* Gallery + Summary */}
      <section className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-3xl bg-secondary soft-shadow">
            <img
              src={p.image}
              alt={p.title}
              className="aspect-square w-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-md">
              {p.category}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/10 px-3 py-1.5 text-xs font-semibold text-sage">
              <ShieldCheck className="h-3.5 w-3.5" /> {p.badge}
            </span>
            {p.specs.slice(0, 2).map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 rounded-full bg-terracotta/10 px-3 py-1.5 text-xs font-semibold text-terracotta"
              >
                <Sparkles className="h-3 w-3" /> {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <SageBadge>{p.badge}</SageBadge>
          <h1 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {p.title}
          </h1>

          {/* Render Rating, Reviews, and Price in UI */}
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
            <div className="flex items-center gap-1.5 text-amber">
              <Star className="h-4 w-4 fill-amber text-amber" />
              <span>{p.rating}</span>
              <span className="text-xs text-muted-foreground">({p.reviewsCount})</span>
            </div>
            <span className="text-muted-foreground/40">·</span>
            <div className="text-foreground">
              <span className="text-xs font-normal text-muted-foreground">Est. Price: </span>
              <span>{p.priceRange}</span>
            </div>
          </div>

          <p className="text-base leading-relaxed text-muted-foreground">{p.description}</p>

          <ul className="space-y-2 text-sm text-foreground">
            {p.specs.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                <span>{s}</span>
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-col gap-3">
            <AmazonButton href={p.amazonUrl} className="w-full sm:w-auto" />
            <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              As an Amazon Associate, Pantry & Pan earns from qualifying purchases. Prices and
              availability accurate at time of publication.
            </p>
          </div>
        </div>
      </section>

      {/* Material & Safety Breakdown */}
      <section className="mt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
          Material & Safety Breakdown
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          What actually touches your food
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          We test for heavy metals (lead, cadmium), verify absence of PTFE / PFOA / PFAS
          coatings, and evaluate long-term cookware longevity before recommending anything.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {p.materials.map((m) => (
            <div
              key={m.label}
              className="rounded-3xl bg-surface p-6 soft-shadow"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
                {m.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground">{m.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { label: "Heavy-metal tested", detail: "Verified lead & cadmium free" },
            { label: "Zero Teflon / PTFE", detail: "No synthetic non-stick coatings" },
            { label: "Built to last", detail: "Repairable, seasonable, heirloom-grade" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-start gap-3 rounded-2xl bg-sage/5 p-4"
            >
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sage text-sage-foreground">
                <Check className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-surface p-6 soft-shadow sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
            Why we love it
          </p>
          <ul className="mt-5 space-y-3">
            {p.pros.map((pro) => (
              <li key={pro} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sage/15 text-sage">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-surface p-6 soft-shadow sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Care requirements
          </p>
          <ul className="mt-5 space-y-3">
            {p.cons.map((con) => (
              <li key={con} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-terracotta/15 text-terracotta">
                  <TriangleAlert className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Specs Table */}
      <section className="mt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
          Technical Specifications
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          The details
        </h2>
        <div className="mt-6 overflow-hidden rounded-3xl bg-surface soft-shadow">
          <dl>
            {p.specsTable.map((row, i) => (
              <div
                key={row.label}
                className={
                  "grid grid-cols-[minmax(120px,180px)_minmax(0,1fr)] gap-4 px-6 py-4 sm:px-8 " +
                  (i !== p.specsTable.length - 1 ? "border-b border-hairline" : "")
                }
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {row.label}
                </dt>
                <dd className="text-sm font-medium text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Featured in these guides
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Read the full context
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl bg-surface soft-shadow transition-all hover:-translate-y-1 hover:soft-shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={g.heroImage}
                    alt={g.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                    {g.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold leading-snug text-foreground group-hover:underline decoration-terracotta/40 underline-offset-4">
                    {g.title}
                  </h3>
                  <p className="mt-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> {g.readMinutes} min read
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            More in {p.category}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {relatedProducts.map((r) => (
              <Link
                key={r.id}
                href={`/product/${r.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-surface soft-shadow hover:soft-shadow-md"
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="line-clamp-2 p-3 text-xs font-semibold text-foreground">
                  {r.title}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-hairline bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
          <div className="hidden h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-secondary sm:block">
            <img src={p.image} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="line-clamp-1 text-sm font-semibold text-foreground">{p.title}</p>
            <p className="hidden text-xs text-muted-foreground sm:block">
              FTC disclosure: affiliate link, we may earn a commission at no cost to you.
            </p>
          </div>
          <AmazonButton href={p.amazonUrl} className="shrink-0 text-xs sm:text-sm px-4 py-2.5 sm:px-5 sm:py-3" />
        </div>
      </div>
    </div>
  );
}
