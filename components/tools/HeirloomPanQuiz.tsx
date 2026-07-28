"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SageBadge } from "@/components/site/SageBadge";
import { AmazonButton } from "@/components/site/AmazonButton";

interface PanMatch {
  id: string;
  title: string;
  image: string;
  badge: string;
  priceRange: string;
  amazonUrl: string;
  description: string;
}

const PAN_MATCHES: Record<string, PanMatch> = {
  "carbon-steel": {
    id: "de-buyer-carbon-steel-pan",
    title: "De Buyer Mineral B Carbon Steel Frying Pan",
    image: "/assets/de_buyer_pan.jpg",
    badge: "French Carbon Steel · Agile & Lightweight",
    priceRange: "$79 - $99",
    amazonUrl: "https://www.amazon.com/dp/B00462QP0W?tag=pantryandpan-20",
    description:
      "Ideal for quick agile meals, stir-fry tossing, and daily eggs. At just 3.2 lbs, carbon steel heats up rapidly and builds a natural non-toxic oil seasoning patina over time.",
  },
  "cast-iron": {
    id: "lodge-cast-iron-skillet",
    title: "Lodge 10.25 Inch Pre-Seasoned Cast Iron Skillet",
    image: "/assets/lodge_skillet.jpg",
    badge: "American Made Cast Iron · Maximum Searing",
    priceRange: "$19 - $29",
    amazonUrl: "https://www.amazon.com/dp/B00006JSUA?tag=pantryandpan-20",
    description:
      "Ideal for heavy high-heat searing, steaks, and deep browning. Pre-seasoned with 100% natural vegetable oil, providing massive thermal density that lasts a lifetime.",
  },
  enameled: {
    id: "lodge-dutch-oven",
    title: "Lodge 6-Quart Enameled Cast Iron Dutch Oven",
    image: "/assets/lodge_dutch_oven.jpg",
    badge: "Vitreous Enamel · Zero Seasoning Required",
    priceRange: "$69 - $89",
    amazonUrl: "https://www.amazon.com/dp/B000N48206?tag=pantryandpan-20",
    description:
      "Ideal for slow-simmered stews, soups, and acidic tomato sauces. Features a smooth glass enamel glaze that requires zero oil seasoning and washes clean with dish soap.",
  },
};

export function HeirloomPanQuiz() {
  const [cookingStyle, setCookingStyle] = useState<"searing" | "agile" | "simmering">("searing");
  const [weightPreference, setWeightPreference] = useState<"light" | "heavy">("light");
  const [maintenanceStyle, setMaintenanceStyle] = useState<"seasoning" | "glaze">("seasoning");

  // Determine match logic
  let resultKey = "cast-iron";

  if (cookingStyle === "simmering" || maintenanceStyle === "glaze") {
    resultKey = "enameled";
  } else if (cookingStyle === "agile" || weightPreference === "light") {
    resultKey = "carbon-steel";
  } else {
    resultKey = "cast-iron";
  }

  const match = PAN_MATCHES[resultKey];

  return (
    <div className="my-10 overflow-hidden rounded-3xl border border-hairline bg-surface p-6 sm:p-8 soft-shadow">
      {/* Header */}
      <div className="border-b border-hairline pb-4">
        <SageBadge variant="default">Interactive Suggestions</SageBadge>
        <h3 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
          Heirloom Pan Selector & Cooking Match
        </h3>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          Select your cooking habits, weight preference, and care style to find your ideal heirloom pan.
        </p>
      </div>

      {/* Radio Question Form */}
      <div className="mt-6 space-y-6">
        {/* Q1: Cooking Style */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-terracotta">
            1. What do you cook most often?
          </label>
          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {[
              { id: "searing", label: "High-Heat Searing", sub: "Steaks, burgers, deep browning" },
              { id: "agile", label: "Quick Agile Meals", sub: "Eggs, fish, stir-fry tossing" },
              { id: "simmering", label: "Slow Simmering", sub: "Acidic tomato sauces, stews" },
            ].map((opt) => {
              const isChecked = cookingStyle === opt.id;
              return (
                <label
                  key={opt.id}
                  onClick={() => setCookingStyle(opt.id as any)}
                  className="flex cursor-pointer items-center gap-2.5 py-1 text-left transition-opacity hover:opacity-80"
                >
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-terracotta">
                    {isChecked && <div className="h-2 w-2 rounded-full bg-terracotta" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground sm:text-sm">{opt.label}</span>
                    <span className="block text-xs text-muted-foreground">{opt.sub}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Q2: Weight Preference */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-terracotta">
            2. Cookware Weight Handling
          </label>
          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {[
              { id: "light", label: "Lightweight & Agile (~3.2 lbs)", sub: "Easy one-handed wrist motion" },
              { id: "heavy", label: "Heavy Thermal Mass (5.5 lbs+)", sub: "Maximum heat retention" },
            ].map((opt) => {
              const isChecked = weightPreference === opt.id;
              return (
                <label
                  key={opt.id}
                  onClick={() => setWeightPreference(opt.id as any)}
                  className="flex cursor-pointer items-center gap-2.5 py-1 text-left transition-opacity hover:opacity-80"
                >
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-terracotta">
                    {isChecked && <div className="h-2 w-2 rounded-full bg-terracotta" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground sm:text-sm">{opt.label}</span>
                    <span className="block text-xs text-muted-foreground">{opt.sub}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Q3: Care Style */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-terracotta">
            3. Care & Maintenance Preference
          </label>
          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {[
              { id: "seasoning", label: "Natural Oil Seasoning", sub: "Build a natural non-stick patina" },
              { id: "glaze", label: "Zero-Seasoning Enamel Glaze", sub: "Soap safe, zero oil maintenance" },
            ].map((opt) => {
              const isChecked = maintenanceStyle === opt.id;
              return (
                <label
                  key={opt.id}
                  onClick={() => setMaintenanceStyle(opt.id as any)}
                  className="flex cursor-pointer items-center gap-2.5 py-1 text-left transition-opacity hover:opacity-80"
                >
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-terracotta">
                    {isChecked && <div className="h-2 w-2 rounded-full bg-terracotta" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground sm:text-sm">{opt.label}</span>
                    <span className="block text-xs text-muted-foreground">{opt.sub}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* Suggested Product Match Card */}
      <div className="mt-8 border-t border-hairline pt-6">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-hairline bg-surface soft-shadow sm:grid-cols-[220px_minmax(0,1fr)]">
          <Link
            href={`/product/${match.id}`}
            className="block aspect-square w-full overflow-hidden bg-secondary sm:aspect-auto sm:h-full"
          >
            <img
              src={match.image}
              alt={match.title}
              className="h-full w-full object-cover"
            />
          </Link>

          <div className="flex flex-col gap-3 p-6">
            <SageBadge>{match.badge}</SageBadge>

            <Link
              href={`/product/${match.id}`}
              className="font-display text-lg font-semibold leading-snug text-foreground hover:underline decoration-terracotta/40 underline-offset-4 sm:text-xl"
            >
              {match.title}
            </Link>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {match.description}
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <AmazonButton href={match.amazonUrl} label="Check Price on Amazon" />
              <Link
                href={`/product/${match.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-background px-4 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                Full review <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Semantic GEO Decision Matrix */}
      <div className="mt-8 border-t border-hairline pt-6">
        <details className="group">
          <summary className="cursor-pointer text-xs font-bold tracking-wide text-muted-foreground hover:text-terracotta transition-colors">
            How we match the right heirloom pan to your cooking style
          </summary>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs text-muted-foreground border-collapse">
              <thead>
                <tr className="border-b border-hairline text-foreground font-semibold">
                  <th className="py-2 pr-4">Material</th>
                  <th className="py-2 px-4">Pan Weight</th>
                  <th className="py-2 px-4">Best For</th>
                  <th className="py-2 px-4">Maintenance</th>
                  <th className="py-2 pl-4">Recommended Product</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Carbon Steel</td>
                  <td className="py-2 px-4">3.2 lbs (Light)</td>
                  <td className="py-2 px-4">Eggs, fish, stir-fry tossing</td>
                  <td className="py-2 px-4">Natural oil seasoning</td>
                  <td className="py-2 pl-4">De Buyer Mineral B Frying Pan</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Raw Cast Iron</td>
                  <td className="py-2 px-4">5.4 lbs (Heavy)</td>
                  <td className="py-2 px-4">High-heat steak searing, baking</td>
                  <td className="py-2 px-4">Natural oil seasoning</td>
                  <td className="py-2 pl-4">Lodge 10.25" Pre-Seasoned Skillet</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Enameled Cast Iron</td>
                  <td className="py-2 px-4">13.5 lbs (Heavy Dutch Oven)</td>
                  <td className="py-2 px-4">Slow stews, acidic tomato sauce</td>
                  <td className="py-2 px-4">Dish soap safe, zero oil care</td>
                  <td className="py-2 pl-4">Lodge 6-Quart Enameled Dutch Oven</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </div>
  );
}
