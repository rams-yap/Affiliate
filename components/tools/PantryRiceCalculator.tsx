"use client";

import { useState } from "react";
import { Utensils, Scale } from "lucide-react";
import { SageBadge } from "@/components/site/SageBadge";

export function PantryRiceCalculator() {
  const [capacityLiters, setCapacityLiters] = useState<number>(5);
  const [householdSize, setHouseholdSize] = useState<number>(2);
  const [riceType, setRiceType] = useState<"white" | "brown">("white");

  // 1 Liter of dry rice ≈ 0.9 kg (approx 2 lbs or ~4.9 cups)
  // 5L ≈ 4.5 kg / 10 lbs / ~24.5 cups dry rice
  const dryCups = Math.round(capacityLiters * 4.9);
  const dryWeightLbs = Math.round(capacityLiters * 2.0);
  
  // 1 cup dry white rice -> ~3 cups cooked rice (3 standard 1-cup portions)
  // 1 cup dry brown rice -> ~2.8 cups cooked rice
  const yieldMultiplier = riceType === "white" ? 3 : 2.8;
  const totalCookedServings = Math.round(dryCups * yieldMultiplier);

  const daysCovered = Math.round(totalCookedServings / householdSize);
  const weeksCovered = (daysCovered / 7).toFixed(1);

  return (
    <div className="my-10 overflow-hidden rounded-3xl border border-hairline bg-surface p-6 sm:p-8 soft-shadow">
      <div className="border-b border-hairline pb-4">
        <SageBadge variant="default">Interactive Calculator</SageBadge>
        <h3 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
          Rice Container & Portion Yield Calculator
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Select container volume and household size to calculate total cooked servings and supply duration.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Controls */}
        <div className="space-y-5">
          <div>
            <label className="flex items-center justify-between text-xs font-semibold text-foreground">
              <span>Container Volume Capacity</span>
              <span className="font-display text-sm font-bold text-terracotta">
                {capacityLiters} Liters (~{dryWeightLbs} lbs dry rice)
              </span>
            </label>
            <input
              type="range"
              min="2"
              max="15"
              step="1"
              value={capacityLiters}
              onChange={(e) => setCapacityLiters(Number(e.target.value))}
              className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-secondary accent-terracotta"
            />
            <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
              <span>2L Container</span>
              <span>5L Dispenser</span>
              <span>10L Bulk</span>
              <span>15L Heavy</span>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-foreground">Household Size</label>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {[1, 2, 4, 6].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setHouseholdSize(num)}
                  className={
                    "rounded-2xl py-2 text-xs font-semibold transition-all " +
                    (householdSize === num
                      ? "bg-terracotta text-white shadow-sm"
                      : "bg-secondary text-foreground hover:bg-hairline")
                  }
                >
                  {num} {num === 1 ? "Person" : "People"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-foreground">Rice Variety</label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRiceType("white")}
                className={
                  "rounded-2xl py-2 text-xs font-semibold transition-all " +
                  (riceType === "white"
                    ? "bg-terracotta text-white shadow-sm"
                    : "bg-secondary text-foreground hover:bg-hairline")
                }
              >
                White / Jasmine (1:3 Yield)
              </button>
              <button
                type="button"
                onClick={() => setRiceType("brown")}
                className={
                  "rounded-2xl py-2 text-xs font-semibold transition-all " +
                  (riceType === "brown"
                    ? "bg-terracotta text-white shadow-sm"
                    : "bg-secondary text-foreground hover:bg-hairline")
                }
              >
                Brown Rice (1:2.8 Yield)
              </button>
            </div>
          </div>
        </div>

        {/* Output Metrics */}
        <div className="flex flex-col justify-center rounded-2xl bg-secondary/60 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-surface p-5 soft-shadow">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Utensils className="h-3.5 w-3.5 text-terracotta" /> Cooked Portions
              </div>
              <p className="mt-2 font-display text-3xl font-bold text-foreground">
                {totalCookedServings}
              </p>
              <p className="text-[11px] text-muted-foreground">Standard 1-cup servings</p>
            </div>

            <div className="rounded-2xl bg-surface p-5 soft-shadow">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Scale className="h-3.5 w-3.5 text-terracotta" /> Supply Duration
              </div>
              <p className="mt-2 font-display text-3xl font-bold text-foreground">
                {daysCovered} <span className="text-sm font-normal text-muted-foreground">days</span>
              </p>
              <p className="text-[11px] text-muted-foreground">For {householdSize} {householdSize === 1 ? "person" : "people"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
