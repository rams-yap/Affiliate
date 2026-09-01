import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { SageBadge } from "./SageBadge";
import { AmazonButton } from "./AmazonButton";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-surface soft-shadow transition-all duration-500 hover:-translate-y-1 hover:soft-shadow-md">
      <Link
        href={`/product/${p.id}`}
        className="relative block aspect-[4/3] overflow-hidden rounded-t-3xl bg-secondary"
      >
        <img
          src={p.image}
          alt={p.title}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface/90 dark:bg-surface/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-foreground shadow-sm backdrop-blur-md">
          {p.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <SageBadge>{p.badge}</SageBadge>
        </div>

        <Link
          href={`/product/${p.id}`}
          className="line-clamp-2 font-display text-xl font-semibold leading-snug text-foreground hover:underline decoration-terracotta/40 underline-offset-4"
        >
          {p.title}
        </Link>

        {/* Price Tag above Rating */}
        <div className="space-y-1">
          {p.priceRange && (
            <p className="text-base font-bold text-foreground">
              {p.priceRange}
            </p>
          )}

          {/* Rating and Review Count */}
          {p.rating && (
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-0.5 text-amber">
                <Star className="h-3.5 w-3.5 fill-amber text-amber" />
                <span className="font-bold text-foreground">{p.rating}</span>
              </div>
              <span>·</span>
              <span>({p.reviewsCount})</span>
            </div>
          )}
        </div>

        <ul className="space-y-1.5 text-base text-muted-foreground">
          {p.specs.map((s) => (
            <li key={s} className="flex items-start gap-2">
              <Sparkles className="mt-1 h-4 w-4 shrink-0 text-terracotta" />
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 pt-2">
          <AmazonButton href={p.amazonUrl} />
          <Link
            href={`/guides/${p.featuredInSlug}`}
            className="group/link inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="truncate">
              Featured in:{" "}
              <span className="font-medium underline decoration-terracotta/40 underline-offset-4">
                {p.featuredInTitle}
              </span>
            </span>
            <ArrowRight className="h-3 w-3 shrink-0 transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
