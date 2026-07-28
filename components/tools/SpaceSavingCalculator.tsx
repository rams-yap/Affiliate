"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Maximize2, Layers, ShieldCheck, Box } from "lucide-react";
import { SageBadge } from "@/components/site/SageBadge";
import { AmazonButton } from "@/components/site/AmazonButton";

interface PresetConfig {
  label: string;
  pieces: number;
  sub: string;
  shelvesFreed: string;
  drawerFit: string;
}

const PRESETS: Record<string, PresetConfig> = {
  starter: {
    label: "Apartment & Starter Set",
    pieces: 5,
    sub: "4 - 6 pieces for small kitchens & RVs",
    shelvesFreed: "Frees up 1 full cabinet shelf",
    drawerFit: "Fits inside a 5.5-inch shallow drawer",
  },
  family: {
    label: "Daily Family Kitchen",
    pieces: 11,
    sub: "8 - 12 pieces for family meals",
    shelvesFreed: "Frees up 2 full cabinet shelves for appliances",
    drawerFit: "Fits inside a single 7.8-inch deep drawer",
  },
  chef: {
    label: "Holiday Host & Chef Set",
    pieces: 16,
    sub: "14 - 16 pieces for big gatherings",
    shelvesFreed: "Frees up 3 full cabinet shelves",
    drawerFit: "Fits inside a single 9.6-inch deep drawer",
  },
};

export function SpaceSavingCalculator() {
  const [selectedPreset, setSelectedPreset] = useState<string>("family");
  const preset = PRESETS[selectedPreset];
  const pieceCount = preset.pieces;

  // Stack height in inches
  const stackHeightInches = (4 + pieceCount * 0.35).toFixed(1);

  return (
    <div className="my-10 overflow-hidden rounded-3xl border border-hairline bg-surface p-6 sm:p-8 soft-shadow">
      {/* Header */}
      <div className="border-b border-hairline pb-4">
        <SageBadge variant="default">Interactive Suggestions</SageBadge>
        <h3 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
          Reclaim Your Kitchen Cabinet Space
        </h3>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          Select your kitchen setup to see how much cabinet space you reclaim by switching from fixed handles to stackable cookware.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        {/* Preset Kitchen Radio Selectors */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-terracotta">
            1. Select Your Kitchen Setup
          </label>
          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {Object.keys(PRESETS).map((key) => {
              const item = PRESETS[key];
              const isChecked = selectedPreset === key;
              return (
                <label
                  key={key}
                  onClick={() => setSelectedPreset(key)}
                  className="flex cursor-pointer items-center gap-2.5 py-1 text-left transition-opacity hover:opacity-80"
                >
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-terracotta">
                    {isChecked && <div className="h-2 w-2 rounded-full bg-terracotta" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground sm:text-sm">{item.label}</span>
                    <span className="block text-xs text-muted-foreground">{item.sub}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Relatability Stat Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-hairline bg-secondary/50 p-5 soft-shadow">
            <span className="text-xs font-semibold text-muted-foreground">Space Reclaimed</span>
            <p className="mt-1 font-display text-3xl font-bold text-emerald-600">70% Saved</p>
            <p className="mt-1 text-xs text-foreground font-medium">{preset.shelvesFreed}</p>
          </div>

          <div className="rounded-2xl border border-hairline bg-secondary/50 p-5 soft-shadow">
            <span className="text-xs font-semibold text-muted-foreground">Compact Stack Height</span>
            <p className="mt-1 font-display text-3xl font-bold text-foreground">{stackHeightInches} inches</p>
            <p className="mt-1 text-xs text-foreground font-medium">{preset.drawerFit}</p>
          </div>

          <div className="rounded-2xl border border-hairline bg-secondary/50 p-5 soft-shadow">
            <span className="text-xs font-semibold text-muted-foreground">Daily Peace of Mind</span>
            <p className="mt-1 font-display text-3xl font-bold text-terracotta">Zero Tangles</p>
            <p className="mt-1 text-xs text-foreground font-medium">No more lid avalanches when opening doors</p>
          </div>
        </div>
      </div>

      {/* Suggested Product Match Card (Native Site Product Card Design) */}
      <div className="mt-8 border-t border-hairline pt-6">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-hairline bg-surface soft-shadow sm:grid-cols-[220px_minmax(0,1fr)]">
          <Link
            href="/product/carote-11pc"
            className="block aspect-square w-full overflow-hidden bg-secondary sm:aspect-auto sm:h-full"
          >
            <img
              src="/assets/carote_stackable_set.jpg"
              alt="CAROTE 11-Piece Stackable Cookware Set with Removable Handles"
              className="h-full w-full object-cover"
            />
          </Link>

          <div className="flex flex-col gap-3 p-6">
            <SageBadge>Detachable Click-Off Handles · Nesting Granite Ceramic</SageBadge>

            <Link
              href="/product/carote-11pc"
              className="font-display text-lg font-semibold leading-snug text-foreground hover:underline decoration-terracotta/40 underline-offset-4 sm:text-xl"
            >
              CAROTE 11-Piece Stackable Cookware Set with Removable Handles
            </Link>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Eliminate rigid long handle clutter. The dual-lock click-off handle allows pots and pans to nest flat inside one another, saving up to 70% of cabinet storage space while transitioning directly from stovetop to oven.
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <AmazonButton href="https://www.amazon.com/s?k=CAROTE+11-Piece+Stackable+Cookware+Set+with+Removable+Handles&tag=pantryandpan-20" label="Check Price on Amazon" />
              <Link
                href="/product/carote-11pc"
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
            How we calculate cabinet volume savings for stackable cookware
          </summary>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs text-muted-foreground border-collapse">
              <thead>
                <tr className="border-b border-hairline text-foreground font-semibold">
                  <th className="py-2 pr-4">Kitchen Setup</th>
                  <th className="py-2 px-4">Traditional Handle Volume</th>
                  <th className="py-2 px-4">Stackable Nested Volume</th>
                  <th className="py-2 px-4">Cabinet Space Saved</th>
                  <th className="py-2 pl-4">Drawer Storage Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Apartment & Starter (5-Piece)</td>
                  <td className="py-2 px-4">28 Liters (1,708 cu in)</td>
                  <td className="py-2 px-4">8.5 Liters (518 cu in)</td>
                  <td className="py-2 px-4 font-bold text-emerald-600">70% Space Saved</td>
                  <td className="py-2 pl-4">Fits 5.5-inch shallow drawer</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Daily Family Kitchen (11-Piece)</td>
                  <td className="py-2 px-4">61.6 Liters (3,757 cu in)</td>
                  <td className="py-2 px-4">18.7 Liters (1,140 cu in)</td>
                  <td className="py-2 px-4 font-bold text-emerald-600">70% Space Saved</td>
                  <td className="py-2 pl-4">Fits 7.8-inch deep drawer</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Holiday Host & Chef (16-Piece)</td>
                  <td className="py-2 px-4">89.6 Liters (5,465 cu in)</td>
                  <td className="py-2 px-4">27.2 Liters (1,659 cu in)</td>
                  <td className="py-2 px-4 font-bold text-emerald-600">70% Space Saved</td>
                  <td className="py-2 pl-4">Fits 9.6-inch deep drawer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </div>
  );
}
