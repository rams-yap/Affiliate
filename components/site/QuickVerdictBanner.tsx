"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { Product } from "@/lib/catalog";
import { AmazonButton } from "@/components/site/AmazonButton";

export function QuickVerdictBanner({
  product,
  paragraphs,
  scrollToId,
}: {
  product: Product;
  paragraphs?: string[];
  scrollToId?: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl bg-sage/10 soft-shadow mt-6">
      {/* Grid Layout: Desktop 2-column (Left Image+CTA, Right Text) | Mobile Responsive (Text top, Image+CTA bottom) */}
      <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center">
        {/* Mobile: Order 2 (Bottom) | Desktop: Order 1 (Left Column) */}
        <div className="relative flex flex-col items-center justify-center h-full">
          <div className="relative aspect-square h-full w-full overflow-hidden bg-secondary">
            <img
              src={product.image || "/assets/caraway_12pc_set.jpg"}
              alt={product.title}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/assets/caraway_12pc_set.jpg";
              }}
            />
          </div>
        </div>

        {/* Mobile: Order 1 (Top Text) | Desktop: Order 2 (Right Column) */}
        <div className="flex mt-6 mb-6 px-6 flex-col gap-4 text-[16px] leading-[1.7] text-muted-foreground lg:order-2">
          <div className="flex flex-col items-start justify-center">
            <span className="flex gap-1.5 rounded-full bg-terracotta/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-terracotta">
              <Sparkles className="inline-flex h-3.5 w-3.5" /> Editor's Top Recommendation
            </span>
          </div>
          {paragraphs && paragraphs.length > 0 ? (
            paragraphs.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>{product.description}</p>
          )}

          <div className="flex flex-wrap items-center justify-start gap-2 border-b border-hairline/60 pb-4">
            <div className="flex flex-col items-start gap-2">
              <AmazonButton href={product.amazonUrl} className="inline-flex text-center text-sm py-2.5 justify-start" />
            </div>
            <span className="inline-flex px-3 py-1 text-sm font-semibold text-foreground">
              {product.priceRange}
            </span>

            
          </div>
          
        </div>
      </div>
    </div>
  );
}

