"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, AlertTriangle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SageBadge } from "@/components/site/SageBadge";
import { AmazonButton } from "@/components/site/AmazonButton";

type CoatingKey = "teflon" | "granite" | "diamond" | "hard-anodized" | "mineral-ceramic" | "heirloom-metal";

interface AuditResult {
  coatingName: string;
  safetyGrade: "A+" | "A" | "D+" | "D" | "F";
  gradeColor: string;
  offgasTemp: string;
  truthAnalysis: string;
  recommendedProduct: {
    id: string;
    title: string;
    image: string;
    badge: string;
    priceRange: string;
    amazonUrl: string;
    swapReason: string;
  };
}

const AUDIT_DATA: Record<CoatingKey, AuditResult> = {
  teflon: {
    coatingName: "Traditional Teflon / PTFE Nonstick",
    safetyGrade: "F",
    gradeColor: "bg-red-500 text-white",
    offgasTemp: "500°F (260°C)",
    truthAnalysis:
      "PTFE fluoropolymers degrade when heated past 500°F, off-gassing chemical fumes into indoor air and wearing off into food over time.",
    recommendedProduct: {
      id: "caraway-12pc",
      title: "Caraway 12-Piece Non-Toxic Ceramic Cookware Set",
      image: "/assets/caraway_12pc_set.jpg",
      badge: "100% Mineral Ceramic · Zero PFAS & PTFE",
      priceRange: "$395 - $445",
      amazonUrl: "https://www.amazon.com/s?k=Caraway+12-Piece+Non-Stick+Ceramic+Cookware+Set&tag=pantryandpan-20",
      swapReason:
        "Replaces PTFE completely with a natural silica mineral glaze that emits zero toxic fumes at high heat.",
    },
  },
  granite: {
    coatingName: "Speckled Granite / Stone Finish",
    safetyGrade: "D+",
    gradeColor: "bg-amber-600 text-white",
    offgasTemp: "500°F (260°C)",
    truthAnalysis:
      "Many stone-patterned pans use speckled cosmetic prints over standard PTFE nonstick coatings. Always verify explicit PTFE-free certifications.",
    recommendedProduct: {
      id: "sensarte-granite",
      title: "Sensarte Nonstick Frying Pan Set with Swiss Granite Ceramic",
      image: "/assets/sensarte_frying_pan.jpg",
      badge: "Swiss Granite Coating · PFOA Free",
      priceRange: "$39 - $49",
      amazonUrl: "https://www.amazon.com/s?k=Sensarte+Nonstick+Frying+Pan+Set+Swiss+Granite&tag=pantryandpan-20",
      swapReason:
        "Uses a genuine Swiss mineral ceramic matrix that provides slick release without synthetic fluoropolymer binders.",
    },
  },
  diamond: {
    coatingName: "Diamond or Titanium Reinforced Nonstick",
    safetyGrade: "D",
    gradeColor: "bg-amber-600 text-white",
    offgasTemp: "500°F (260°C)",
    truthAnalysis:
      "Diamond coating refers to microscopic synthetic particles mixed inside traditional fluoropolymer binders. The underlying coating can still off-gas at high heat.",
    recommendedProduct: {
      id: "all-clad-d3-skillet",
      title: "All-Clad D3 3-Ply Stainless Steel Frying Pan",
      image: "/assets/all_clad_skillet.jpg",
      badge: "American Made 3-Ply · 100% Uncoated Steel",
      priceRange: "$120 - $150",
      amazonUrl: "https://www.amazon.com/dp/B00005AL0S?tag=pantryandpan-20",
      swapReason:
        "Eliminates synthetic nonstick completely with an indestructible 3-ply stainless steel surface built for lifetime searing.",
    },
  },
  "hard-anodized": {
    coatingName: "Hard Anodized Ceramic (Sol-Gel)",
    safetyGrade: "A",
    gradeColor: "bg-emerald-600 text-white",
    offgasTemp: "600°F+ (Zero Fumes)",
    truthAnalysis:
      "Combines hard-anodized aluminum armor with a silica ceramic nonstick glaze. Durable, scratch resistant, and free of synthetic PFAS chemicals.",
    recommendedProduct: {
      id: "greenpan-valencia",
      title: "GreenPan Valencia Pro 11-Piece Hard Anodized Ceramic Set",
      image: "/assets/greenpan_valencia_set.jpg",
      badge: "Thermolon Mineral Ceramic · Magneto Induction Base",
      priceRange: "$299 - $349",
      amazonUrl: "https://www.amazon.com/s?k=GreenPan+Valencia+Pro+11-Piece+Healthy+Ceramic+Cookware+Set&tag=pantryandpan-20",
      swapReason:
        "Uses Thermolon mineral ceramic glaze that never off-gasses or blisters, even if accidentally overheated.",
    },
  },
  "mineral-ceramic": {
    coatingName: "Sol-Gel Mineral Ceramic (Sand Derived)",
    safetyGrade: "A+",
    gradeColor: "bg-emerald-600 text-white",
    offgasTemp: "550°F+ (100% Non-Toxic)",
    truthAnalysis:
      "The gold standard for clean nonstick cooking. Derived from natural sand, sol-gel ceramics require zero toxic chemical binders or synthetic fluoropolymers.",
    recommendedProduct: {
      id: "caraway-12pc",
      title: "Caraway 12-Piece Non-Toxic Ceramic Cookware Set",
      image: "/assets/caraway_12pc_set.jpg",
      badge: "Eco-Friendly Silica Glaze · Oven Safe to 550°F",
      priceRange: "$395 - $445",
      amazonUrl: "https://www.amazon.com/s?k=Caraway+12-Piece+Non-Stick+Ceramic+Cookware+Set&tag=pantryandpan-20",
      swapReason:
        "Top-rated mineral ceramic set providing effortless food release with zero chemical off-gassing.",
    },
  },
  "heirloom-metal": {
    coatingName: "Raw Carbon Steel or Cast Iron",
    safetyGrade: "A+",
    gradeColor: "bg-emerald-600 text-white",
    offgasTemp: "1000°F+ (Indestructible)",
    truthAnalysis:
      "Completely non-toxic heirloom metal seasoned with natural vegetable oil. Naturally non-stick, chemical-free, and gets better with every meal.",
    recommendedProduct: {
      id: "lodge-cast-iron-skillet",
      title: "Lodge 10.25 Inch Pre-Seasoned Cast Iron Skillet",
      image: "/assets/lodge_skillet.jpg",
      badge: "American Cast Iron · Natural Vegetable Oil Seasoning",
      priceRange: "$19 - $29",
      amazonUrl: "https://www.amazon.com/dp/B00006JSUA?tag=pantryandpan-20",
      swapReason:
        "Pre-seasoned raw cast iron that provides high-heat thermal mass without any synthetic glazes or coatings.",
    },
  },
};

export function NonToxicPanDecoder() {
  const [selectedCoating, setSelectedCoating] = useState<CoatingKey>("teflon");
  const [maxTemp, setMaxTemp] = useState<"medium" | "high">("high");

  const audit = AUDIT_DATA[selectedCoating];
  const rec = audit.recommendedProduct;

  return (
    <div className="my-10 overflow-hidden rounded-3xl border border-hairline bg-surface p-6 sm:p-8 soft-shadow">
      {/* Header */}
      <div className="border-b border-hairline pb-4">
        <SageBadge variant="default">Interactive Suggestions</SageBadge>
        <h3 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
          "Is My Pan Safe?" Non-Toxic Marketing Decoder & Safety Audit
        </h3>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          Select your cookware coating label to decode marketing buzzwords, check off-gassing thresholds, and find a safe swap.
        </p>
      </div>

      {/* Radio Question Form */}
      <div className="mt-6 space-y-6">
        {/* Q1: Pan Coating Selection */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-terracotta">
            1. Select Your Current Cookware Coating Label
          </label>
          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { id: "teflon", label: "Traditional Teflon / PTFE", sub: "Classic black nonstick surface" },
              { id: "granite", label: "Speckled Granite / Stone", sub: "Textured stone pattern finish" },
              { id: "diamond", label: "Diamond / Titanium Nonstick", sub: "Hardened nonstick coating" },
              { id: "hard-anodized", label: "Hard Anodized Ceramic", sub: "Dark metal with ceramic glaze" },
              { id: "mineral-ceramic", label: "Sol-Gel Mineral Ceramic", sub: "Silica sand ceramic glaze" },
              { id: "heirloom-metal", label: "Carbon Steel or Cast Iron", sub: "Uncoated seasoned metal" },
            ].map((opt) => {
              const isChecked = selectedCoating === opt.id;
              return (
                <label
                  key={opt.id}
                  onClick={() => setSelectedCoating(opt.id as any)}
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

        {/* Q2: Max Temperature */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-terracotta">
            2. Typical Cooking Temperature Used
          </label>
          <div className="mt-3 flex flex-wrap gap-4">
            {[
              { id: "medium", label: "Low to Medium Heat (< 400°F)", sub: "Eggs, pancakes, gentle sauteing" },
              { id: "high", label: "High Heat & Oven Searing (> 450°F)", sub: "Steaks, roasting, stir-fry" },
            ].map((opt) => {
              const isChecked = maxTemp === opt.id;
              return (
                <label
                  key={opt.id}
                  onClick={() => setMaxTemp(opt.id as any)}
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

      {/* Safety Audit Result Header */}
      <div className="mt-8 rounded-2xl border border-hairline bg-secondary/50 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className={`flex h-10 w-10 items-center justify-center rounded-2xl font-display text-xl font-bold ${audit.gradeColor}`}>
              {audit.safetyGrade}
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Safety Audit Verdict
              </span>
              <h4 className="font-display text-base font-bold text-foreground sm:text-lg">
                {audit.coatingName}
              </h4>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-muted-foreground">Off-Gassing Threshold</span>
            <p className="font-display text-sm font-bold text-terracotta">{audit.offgasTemp}</p>
          </div>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-foreground sm:text-sm">
          <strong>Marketing Decoder:</strong> {audit.truthAnalysis}
        </p>
      </div>

      {/* Recommended Non-Toxic Swap Card (Native Site Product Card Design) */}
      <div className="mt-6 border-t border-hairline pt-6">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-hairline bg-surface soft-shadow sm:grid-cols-[220px_minmax(0,1fr)]">
          <Link
            href={`/product/${rec.id}`}
            className="block aspect-square w-full overflow-hidden bg-secondary sm:aspect-auto sm:h-full"
          >
            <img
              src={rec.image}
              alt={rec.title}
              className="h-full w-full object-cover"
            />
          </Link>

          <div className="flex flex-col gap-3 p-6">
            <SageBadge>{rec.badge}</SageBadge>

            <Link
              href={`/product/${rec.id}`}
              className="font-display text-lg font-semibold leading-snug text-foreground hover:underline decoration-terracotta/40 underline-offset-4 sm:text-xl"
            >
              {rec.title}
            </Link>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {rec.swapReason}
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <AmazonButton href={rec.amazonUrl} label="Check Price on Amazon" />
              <Link
                href={`/product/${rec.id}`}
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
            How we audit cookware coatings and safety thresholds
          </summary>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs text-muted-foreground border-collapse">
              <thead>
                <tr className="border-b border-hairline text-foreground font-semibold">
                  <th className="py-2 pr-4">Coating Type</th>
                  <th className="py-2 px-4">Safety Grade</th>
                  <th className="py-2 px-4">Off-Gas Threshold</th>
                  <th className="py-2 px-4">Chemical Composition</th>
                  <th className="py-2 pl-4">Recommended Non-Toxic Swap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Traditional Teflon / PTFE</td>
                  <td className="py-2 px-4 font-bold text-red-600">F</td>
                  <td className="py-2 px-4">500°F (260°C)</td>
                  <td className="py-2 px-4">Synthetic fluoropolymers</td>
                  <td className="py-2 pl-4">Caraway Ceramic Set</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Speckled Granite / Stone</td>
                  <td className="py-2 px-4 font-bold text-amber-600">D+</td>
                  <td className="py-2 px-4">500°F (260°C)</td>
                  <td className="py-2 px-4">PTFE base with stone print</td>
                  <td className="py-2 pl-4">Sensarte Swiss Granite Ceramic</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Diamond / Titanium Nonstick</td>
                  <td className="py-2 px-4 font-bold text-amber-600">D</td>
                  <td className="py-2 px-4">500°F (260°C)</td>
                  <td className="py-2 px-4">PTFE with diamond dust</td>
                  <td className="py-2 pl-4">All-Clad D3 Stainless Steel</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Hard Anodized Ceramic</td>
                  <td className="py-2 px-4 font-bold text-emerald-600">A</td>
                  <td className="py-2 px-4">600°F+ (Zero Fumes)</td>
                  <td className="py-2 px-4">Anodized aluminum + silica glaze</td>
                  <td className="py-2 pl-4">GreenPan Valencia Pro</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Sol-Gel Mineral Ceramic</td>
                  <td className="py-2 px-4 font-bold text-emerald-600">A+</td>
                  <td className="py-2 px-4">550°F+ (Zero Fumes)</td>
                  <td className="py-2 px-4">Sand-derived silica glaze</td>
                  <td className="py-2 pl-4">Caraway Ceramic Set</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-foreground">Raw Carbon Steel / Cast Iron</td>
                  <td className="py-2 px-4 font-bold text-emerald-600">A+</td>
                  <td className="py-2 px-4">1000°F+ (Indestructible)</td>
                  <td className="py-2 px-4">100% Seasoned Iron Metal</td>
                  <td className="py-2 pl-4">Lodge Cast Iron Skillet</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </div>
  );
}
