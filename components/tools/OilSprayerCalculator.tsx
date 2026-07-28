"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, DollarSign, Trash2, ShieldCheck, Flame } from "lucide-react";
import { SageBadge } from "@/components/site/SageBadge";
import { AmazonButton } from "@/components/site/AmazonButton";

export function OilSprayerCalculator() {
  const [mealsPerWeek, setMealsPerWeek] = useState<number>(7);
  const [canCost, setCanCost] = useState<number>(5);

  // Culinary Math:
  // 1 meal = 2 sprays (e.g. air fryer basket + food tops)
  const spraysPerYear = mealsPerWeek * 2 * 52;
  
  // 1 standard 5oz aerosol can holds ~150 sprays
  const cansPerYear = Math.ceil(spraysPerYear / 150);
  const annualAerosolSpend = cansPerYear * canCost;

  // A $12 bottle of bulk liquid avocado oil yields ~1,000 fine misters in a glass sprayer
  const annualBulkOilSpend = Math.round((spraysPerYear / 1000) * 12);
  const annualSavings = Math.max(0, annualAerosolSpend - annualBulkOilSpend);

  return (
    <div className="my-10 overflow-hidden rounded-3xl border border-hairline bg-surface p-6 sm:p-8 soft-shadow">
      {/* Header */}
      <div className="border-b border-hairline pb-4">
        <SageBadge variant="default">Interactive Suggestions</SageBadge>
        <h3 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
          Air Fryer Oil Spray vs. Chemical Aerosol Savings Calculator
        </h3>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          Select how often you cook to calculate annual money saved, aerosol cans eliminated, and pan-ruining propellants avoided.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Controls */}
        <div className="space-y-5">
          <div>
            <label className="flex items-center justify-between text-xs font-semibold text-foreground">
              <span>Meals Cooked With Oil Spray Per Week</span>
              <span className="font-display text-sm font-bold text-terracotta">
                {mealsPerWeek} {mealsPerWeek === 1 ? "meal" : "meals"} / week
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="21"
              step="1"
              value={mealsPerWeek}
              onChange={(e) => setMealsPerWeek(Number(e.target.value))}
              className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-secondary accent-terracotta"
            />
            <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
              <span>1 meal / wk (Light)</span>
              <span>7 meals / wk (Daily)</span>
              <span>21 meals / wk (3x / day)</span>
            </div>
          </div>

          <div>
            <label className="flex items-center justify-between text-xs font-semibold text-foreground">
              <span>Average Cost Per Aerosol Spray Can</span>
              <span className="font-display text-sm font-bold text-terracotta">
                ${canCost}.00 / can
              </span>
            </label>
            <input
              type="range"
              min="3"
              max="9"
              step="1"
              value={canCost}
              onChange={(e) => setCanCost(Number(e.target.value))}
              className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-secondary accent-terracotta"
            />
            <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
              <span>$3.00 (Store Brand)</span>
              <span>$5.00 (Standard)</span>
              <span>$9.00 (Organic Oil)</span>
            </div>
          </div>
        </div>

        {/* Output Metrics */}
        <div className="flex flex-col justify-center rounded-2xl bg-secondary/60 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-surface p-5 soft-shadow">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <DollarSign className="h-3.5 w-3.5 text-terracotta" /> Annual Savings
              </div>
              <p className="mt-2 font-display text-3xl font-bold text-foreground">
                ${annualSavings}
              </p>
              <p className="text-[11px] text-muted-foreground">Saved every year</p>
            </div>

            <div className="rounded-2xl bg-surface p-5 soft-shadow">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Trash2 className="h-3.5 w-3.5 text-terracotta" /> Cans Eliminated
              </div>
              <p className="mt-2 font-display text-3xl font-bold text-foreground">
                {cansPerYear}
              </p>
              <p className="text-[11px] text-muted-foreground">Zero-landfill aerosol cans</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chef's Advice Callout */}
      <div className="mt-6 rounded-2xl border border-sage/30 bg-sage/10 p-4 text-xs text-foreground">
        <div className="flex items-start gap-2.5">
          <ShieldCheck className="h-4 w-4 shrink-0 text-sage" />
          <div>
            <strong className="font-semibold text-foreground">Chef's Advice on Pan Longevity:</strong>
            <p className="mt-1 leading-relaxed text-muted-foreground">
              Commercial aerosol sprays contain soy lecithin and propellants (butane/propane) that bake onto air fryer baskets and ceramic cookware under heat, creating a sticky residue that destroys nonstick release over time. Switching to a glass mister filled with pure avocado oil (500°F smoke point) protects your cookware and keeps chemicals out of your food.
            </p>
          </div>
        </div>
      </div>

      {/* Suggested Product Match Card (Native Site Product Card Design) */}
      <div className="mt-6 border-t border-hairline pt-6">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-hairline bg-surface soft-shadow sm:grid-cols-[220px_minmax(0,1fr)]">
          <Link
            href="/product/glass-oil-sprayer"
            className="block aspect-square w-full overflow-hidden bg-secondary sm:aspect-auto sm:h-full"
          >
            <img
              src="/assets/glass_oil_sprayer.jpg"
              alt="2-in-1 Glass Oil Sprayer & Dispenser Bottle"
              className="h-full w-full object-cover"
            />
          </Link>

          <div className="flex flex-col gap-3 p-6">
            <SageBadge>Dual Mist & Pour Nozzle · 100% Lead-Free Glass</SageBadge>

            <Link
              href="/product/glass-oil-sprayer"
              className="font-display text-lg font-semibold leading-snug text-foreground hover:underline decoration-terracotta/40 underline-offset-4 sm:text-xl"
            >
              2-in-1 Glass Oil Sprayer & Dispenser Bottle
            </Link>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Eliminate chemical aerosol propellants like butane and propane completely. This refillable glass bottle lets you switch between a fine fan mist for air fryers and a steady pour for skillet searing using 100% pure avocado or olive oil.
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <AmazonButton href="https://www.amazon.com/s?k=2-in-1+Glass+Oil+Sprayer+and+Dispenser+Bottle&tag=pantryandpan-20" label="Check Price on Amazon" />
              <Link
                href="/product/glass-oil-sprayer"
                className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-background px-4 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                Full review <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Semantic GEO Reference Table */}
      <div className="mt-8 border-t border-hairline pt-6">
        <details className="group">
          <summary className="cursor-pointer text-xs font-bold tracking-wide text-muted-foreground hover:text-terracotta transition-colors">
            How we calculate aerosol spray savings and chemical reduction
          </summary>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs text-muted-foreground border-collapse">
              <thead>
                <tr className="border-b border-hairline text-foreground font-semibold">
                  <th className="py-2 pr-4">Weekly Cooking Frequency</th>
                  <th className="py-2 px-4">Annual Aerosol Spend</th>
                  <th className="py-2 px-4">Bulk Liquid Oil Spend</th>
                  <th className="py-2 px-4">Annual Savings</th>
                  <th className="py-2 pl-4">Aerosol Waste Eliminated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">3 Meals / Week (Light)</td>
                  <td className="py-2 px-4">$20.00 / year</td>
                  <td className="py-2 px-4">$4.00 / year</td>
                  <td className="py-2 px-4 font-bold text-emerald-600">$16.00 / year</td>
                  <td className="py-2 pl-4">4 Aerosol Cans</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">7 Meals / Week (Daily)</td>
                  <td className="py-2 px-4">$40.00 / year</td>
                  <td className="py-2 px-4">$9.00 / year</td>
                  <td className="py-2 px-4 font-bold text-emerald-600">$31.00 / year</td>
                  <td className="py-2 pl-4">8 Aerosol Cans</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">14 Meals / Week (Heavy)</td>
                  <td className="py-2 px-4">$90.00 / year</td>
                  <td className="py-2 px-4">$18.00 / year</td>
                  <td className="py-2 px-4 font-bold text-emerald-600">$72.00 / year</td>
                  <td className="py-2 pl-4">18 Aerosol Cans</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </div>
  );
}
