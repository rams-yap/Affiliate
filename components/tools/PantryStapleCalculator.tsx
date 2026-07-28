"use client";

import { useState } from "react";
import { Scale, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { SageBadge } from "@/components/site/SageBadge";
import { AmazonButton } from "@/components/site/AmazonButton";

type StapleKey = "rice" | "flour" | "sugar" | "oats" | "coffee";

interface StapleConfig {
  name: string;
  densityKgPerL: number; // kg per liter
  defaultWeightLbs: number;
  yieldInfo: (weightLbs: number) => string;
  recommendedProduct: {
    id: string;
    title: string;
    image: string;
    badge: string;
    priceRange: string;
    amazonUrl: string;
    why: string;
  };
}

const STAPLES: Record<StapleKey, StapleConfig> = {
  rice: {
    name: "Dry Rice",
    densityKgPerL: 0.9,
    defaultWeightLbs: 10,
    yieldInfo: (lbs) => `${Math.round(lbs * 2.45 * 3)} cooked 1-cup portions (${Math.round((lbs * 2.45 * 3) / 2)} days for 2 people)`,
    recommendedProduct: {
      id: "glass-rice-dispenser",
      title: "5L Glass Rice Dispenser with Bamboo Stand",
      image: "/assets/glass_rice_dispenser.jpg",
      badge: "Borosilicate Glass · Food-Grade Silicone Seal",
      priceRange: "$49 - $65",
      amazonUrl: "https://www.amazon.com/s?k=5L+Glass+Rice+Dispenser+with+Bamboo+Stand&tag=pantryandpan-20",
      why: "Airtight silicone seal blocks ambient moisture and starves grain weevils.",
    },
  },
  flour: {
    name: "All-Purpose Flour",
    densityKgPerL: 0.53,
    defaultWeightLbs: 5,
    yieldInfo: (lbs) => `Holds full ${lbs} lb store bag without leftover open packages`,
    recommendedProduct: {
      id: "vtopmart-bulk-containers",
      title: "Vtopmart 5.2L Airtight Bulk Canisters",
      image: "/assets/vtopmart_bulk_canisters.jpg",
      badge: "5.2L Extra Large Capacity · 4-Side Locking Lids",
      priceRange: "$32 - $42",
      amazonUrl: "https://www.amazon.com/dp/B07PF8NV7N?tag=pantryandpan-20",
      why: "Designed specifically to fit full 5 lb commercial bags of flour with zero spillover.",
    },
  },
  sugar: {
    name: "Granulated Sugar",
    densityKgPerL: 0.85,
    defaultWeightLbs: 5,
    yieldInfo: (lbs) => `Fits neatly into 3L or 5.2L airtight canisters with moisture locks`,
    recommendedProduct: {
      id: "vtopmart-bulk-containers",
      title: "Vtopmart 5.2L Airtight Bulk Canisters",
      image: "/assets/vtopmart_bulk_canisters.jpg",
      badge: "Airtight Gasket · Includes Labels & Scoops",
      priceRange: "$32 - $42",
      amazonUrl: "https://www.amazon.com/dp/B07PF8NV7N?tag=pantryandpan-20",
      why: "Prevents clumping and protects sugar from humidity in humid kitchens.",
    },
  },
  oats: {
    name: "Rolled Oats",
    densityKgPerL: 0.38,
    defaultWeightLbs: 5,
    yieldInfo: (lbs) => `Yields ~${Math.round(lbs * 5)} standard oatmeal breakfast bowls`,
    recommendedProduct: {
      id: "vtopmart-bulk-containers",
      title: "Vtopmart 5.2L Airtight Bulk Canisters",
      image: "/assets/vtopmart_bulk_canisters.jpg",
      badge: "Wide-Mouth Opening · Easy Scooping",
      priceRange: "$32 - $42",
      amazonUrl: "https://www.amazon.com/dp/B07PF8NV7N?tag=pantryandpan-20",
      why: "Wide mouth accommodates large 1-cup measuring scoops easily.",
    },
  },
  coffee: {
    name: "Whole Coffee Beans",
    densityKgPerL: 0.4,
    defaultWeightLbs: 2,
    yieldInfo: (lbs) => `Preserves roaster freshness for ~${Math.round(lbs * 32)} espresso shots`,
    recommendedProduct: {
      id: "joyjolt-glass-containers",
      title: "JoyJolt JoyFul Borosilicate Glass Storage Set",
      image: "/assets/joyjolt_glass_containers.jpg",
      badge: "100% Non-Porous Glass · Leakproof Seal",
      priceRange: "$49 - $69",
      amazonUrl: "https://www.amazon.com/dp/B09N4ZKCH6?tag=pantryandpan-20",
      why: "Inert glass doesn't absorb bean oils or lingering roast aromas.",
    },
  },
};

interface PantryStapleCalculatorProps {
  defaultStaple?: StapleKey;
  initialWeight?: number;
}

export function PantryStapleCalculator({
  defaultStaple = "rice",
  initialWeight,
}: PantryStapleCalculatorProps = {}) {
  const [selectedStaple, setSelectedStaple] = useState<StapleKey>(defaultStaple);
  const [weightLbs, setWeightLbs] = useState<number>(
    initialWeight ?? STAPLES[defaultStaple].defaultWeightLbs
  );
  const [unit, setUnit] = useState<"lbs" | "kg">("lbs");

  const staple = STAPLES[selectedStaple];

  // Convert weight to kg for calculations
  const weightKg = unit === "lbs" ? weightLbs * 0.453592 : weightLbs;
  const displayLbs = unit === "lbs" ? weightLbs : Math.round(weightLbs * 2.20462);

  // Volume in Liters = weight (kg) / density (kg/L)
  const volumeLiters = weightKg / staple.densityKgPerL;
  const volumeQuarts = volumeLiters * 1.05669;

  const rec = staple.recommendedProduct;

  return (
    <div className="my-10 overflow-hidden rounded-3xl border border-hairline bg-surface p-6 sm:p-8 soft-shadow">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline pb-4">
        <div>
          <SageBadge variant="default">Interactive Pantry Matcher</SageBadge>
          <h3 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
            Pantry Storage & Container Capacity Matcher
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Select dry staple and weight to calculate exact volume required and get non-toxic container recommendations.
          </p>
        </div>
      </div>

      {/* Staple Tabs */}
      <div className="mt-6">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          1. Select Dry Staple
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {(Object.keys(STAPLES) as StapleKey[]).map((key) => {
            const isSelected = selectedStaple === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setSelectedStaple(key);
                  setWeightLbs(STAPLES[key].defaultWeightLbs);
                }}
                className={
                  "rounded-2xl px-4 py-2.5 text-xs font-semibold transition-all " +
                  (isSelected
                    ? "bg-terracotta text-white shadow-sm"
                    : "bg-secondary text-foreground hover:bg-hairline")
                }
              >
                {STAPLES[key].name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Controls */}
        <div className="space-y-5">
          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-foreground">2. Enter Staple Weight</label>
              <div className="flex items-center gap-1 rounded-full bg-secondary p-1 text-[11px] font-semibold">
                <button
                  type="button"
                  onClick={() => setUnit("lbs")}
                  className={
                    "rounded-full px-2.5 py-0.5 transition-all " +
                    (unit === "lbs" ? "bg-surface text-foreground shadow-xs" : "text-muted-foreground")
                  }
                >
                  lbs
                </button>
                <button
                  type="button"
                  onClick={() => setUnit("kg")}
                  className={
                    "rounded-full px-2.5 py-0.5 transition-all " +
                    (unit === "kg" ? "bg-surface text-foreground shadow-xs" : "text-muted-foreground")
                  }
                >
                  kg
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <input
                type="range"
                min="1"
                max="25"
                step="1"
                value={weightLbs}
                onChange={(e) => setWeightLbs(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-secondary accent-terracotta"
              />
              <span className="shrink-0 font-display text-base font-bold text-terracotta">
                {weightLbs} {unit}
              </span>
            </div>
            <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
              <span>1 {unit}</span>
              <span>10 {unit}</span>
              <span>25 {unit}</span>
            </div>
          </div>

          {/* Volume Calculations Result Box */}
          <div className="rounded-2xl border border-hairline bg-secondary/60 p-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Required Container Volume</span>
              <Scale className="h-3.5 w-3.5 text-terracotta" />
            </div>
            <div className="mt-2 flex items-baseline gap-3">
              <p className="font-display text-3xl font-bold text-foreground">
                {volumeLiters.toFixed(1)} <span className="text-sm font-normal text-muted-foreground">Liters</span>
              </p>
              <span className="text-xs text-muted-foreground">({volumeQuarts.toFixed(1)} quarts)</span>
            </div>
            <p className="mt-2 text-xs font-medium text-foreground">
              {staple.yieldInfo(displayLbs)}
            </p>
          </div>
        </div>

        {/* Recommended Container Match Card */}
        <div className="flex flex-col justify-between rounded-2xl border border-hairline bg-surface p-5 soft-shadow">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-terracotta">
              <Check className="h-3.5 w-3.5" /> Ideal Non-Toxic Container Match
            </div>
            <div className="mt-3 flex items-start gap-4">
              <img
                src={rec.image}
                alt={rec.title}
                className="h-20 w-20 shrink-0 rounded-2xl object-cover border border-hairline"
              />
              <div>
                <h4 className="font-display text-sm font-semibold text-foreground leading-snug">
                  {rec.title}
                </h4>
                <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">{rec.why}</p>
                <div className="mt-2 flex items-center justify-between text-xs font-semibold text-foreground">
                  <span>{rec.priceRange}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-hairline pt-3">
            <AmazonButton href={rec.amazonUrl} label="View Matching Container on Amazon" />
          </div>
        </div>
      </div>

      {/* Semantic GEO Reference Matrix */}
      <div className="mt-8 border-t border-hairline pt-6">
        <details className="group">
          <summary className="cursor-pointer text-xs font-bold tracking-wide text-muted-foreground hover:text-terracotta transition-colors">
            How we calculate container volumes and dry staple densities
          </summary>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs text-muted-foreground border-collapse">
              <thead>
                <tr className="border-b border-hairline text-foreground font-semibold">
                  <th className="py-2 pr-4">Dry Staple</th>
                  <th className="py-2 px-4">Density</th>
                  <th className="py-2 px-4">5 lb Volume</th>
                  <th className="py-2 px-4">10 lb Volume</th>
                  <th className="py-2 pl-4">Recommended Container</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Dry Rice</td>
                  <td className="py-2 px-4">0.90 kg/L</td>
                  <td className="py-2 px-4">2.5 Liters (2.7 qts)</td>
                  <td className="py-2 px-4">5.0 Liters (5.3 qts)</td>
                  <td className="py-2 pl-4">5L Glass Rice Dispenser</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">All-Purpose Flour</td>
                  <td className="py-2 px-4">0.53 kg/L</td>
                  <td className="py-2 px-4">4.3 Liters (4.5 qts)</td>
                  <td className="py-2 px-4">8.6 Liters (9.1 qts)</td>
                  <td className="py-2 pl-4">Vtopmart 5.2L Bulk Canister</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Granulated Sugar</td>
                  <td className="py-2 px-4">0.85 kg/L</td>
                  <td className="py-2 px-4">2.7 Liters (2.8 qts)</td>
                  <td className="py-2 px-4">5.3 Liters (5.6 qts)</td>
                  <td className="py-2 pl-4">Vtopmart 5.2L Bulk Canister</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Rolled Oats</td>
                  <td className="py-2 px-4">0.38 kg/L</td>
                  <td className="py-2 px-4">6.0 Liters (6.3 qts)</td>
                  <td className="py-2 px-4">11.9 Liters (12.6 qts)</td>
                  <td className="py-2 pl-4">Vtopmart 5.2L Bulk Canister</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Whole Coffee Beans</td>
                  <td className="py-2 px-4">0.40 kg/L</td>
                  <td className="py-2 px-4">5.7 Liters (6.0 qts)</td>
                  <td className="py-2 px-4">11.3 Liters (12.0 qts)</td>
                  <td className="py-2 pl-4">JoyJolt Borosilicate Glass Set</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </div>
  );
}
