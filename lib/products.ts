export interface Product {
  id: string;
  title: string;
  categorySlug: string;
  categoryName: string;
  priceRange: string;
  rating: number;
  reviewCount: number;
  asin: string;
  highlights: string[];
  featuredGuideTitle: string;
  featuredGuideSlug: string;
  pros: string[];
  cons: string[];
}

export const DEFAULT_AFFILIATE_TAG = "pantryandpan-20";

export function generateAmazonAffiliateUrl(asin: string, tag: string = DEFAULT_AFFILIATE_TAG): string {
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "GreenPan Valencia Pro 11-Piece Hard Anodized Healthy Ceramic Nonstick Cookware Set",
    categorySlug: "ceramic-clay",
    categoryName: "Non-Toxic Ceramic & Clay",
    priceRange: "$349 - $399",
    rating: 4.6,
    reviewCount: 4280,
    asin: "B07G4MTK3W",
    highlights: ["Diamond-reinforced ceramic coating", "Magneto induction base tech"],
    featuredGuideTitle: "The Non-Toxic Kitchen Blueprint",
    featuredGuideSlug: "non-toxic-kitchen-blueprint",
    pros: ["Zero PFAS, PFOA, lead, or cadmium", "Oven safe up to 600°F (lids up to 425°F)"],
    cons: ["Hand washing recommended to preserve peak nonstick release", "Higher initial investment for complete set"],
  },
  {
    id: "2",
    title: "Caraway Non-Toxic Ceramic Frying Pan (10.5\")",
    categorySlug: "ceramic-clay",
    categoryName: "Non-Toxic Ceramic & Clay",
    priceRange: "$95 - $105",
    rating: 4.7,
    reviewCount: 8920,
    asin: "B08688463L",
    highlights: ["Eco-friendly nonstick interior", "Includes modular pan rack"],
    featuredGuideTitle: "Clean Morning Rituals Guide",
    featuredGuideSlug: "clean-morning-rituals",
    pros: ["Sleek modern pastel aesthetic", "PTFE & PFOA free ceramic glaze"],
    cons: ["Requires low-to-medium heat cooking"],
  },
  {
    id: "3",
    title: "Lodge 6-Quart Enameled Cast Iron Dutch Oven",
    categorySlug: "carbon-steel-woks",
    categoryName: "Heirloom Iron & Carbon Steel",
    priceRange: "$69 - $89",
    rating: 4.8,
    reviewCount: 31400,
    asin: "B000N501BK",
    highlights: ["Smooth porcelain enamel finish", "Unmatched heat retention & distribution"],
    featuredGuideTitle: "The Non-Toxic Kitchen Blueprint",
    featuredGuideSlug: "non-toxic-kitchen-blueprint",
    pros: ["Lifetime heirloom durability", "Oven safe up to 500°F"],
    cons: ["Heavyweight cast iron construction"],
  },
  {
    id: "4",
    title: "Yosukata 14\" Pre-Seasoned Carbon Steel Wok",
    categorySlug: "carbon-steel-woks",
    categoryName: "Heirloom Iron & Carbon Steel",
    priceRange: "$59 - $79",
    rating: 4.6,
    reviewCount: 5120,
    asin: "B084DQYNNM",
    highlights: ["Natural patina non-stick", "High-heat stir fry searing"],
    featuredGuideTitle: "Wok Cooking Toxin-Free",
    featuredGuideSlug: "wok-cooking-toxin-free",
    pros: ["Seasons naturally over time", "Flat bottom fits induction & gas"],
    cons: ["Requires initial oil seasoning care"],
  },
  {
    id: "5",
    title: "CAROTE 11-Piece Stackable Cookware Set with Removable Handles",
    categorySlug: "space-saving-detachable",
    categoryName: "Space-Saving & Detachable",
    priceRange: "$79 - $99",
    rating: 4.7,
    reviewCount: 14200,
    asin: "B09Z2FBLKC",
    highlights: ["Oven to table to fridge", "Compact cabinet nesting"],
    featuredGuideTitle: "Modular Cooking: Space-Saving Guide",
    featuredGuideSlug: "space-saving-cookware-guide",
    pros: ["Saves 70% cabinet storage space", "Detachable handle fits all pots"],
    cons: ["Handles must be removed before high oven heat"],
  },
  {
    id: "6",
    title: "5L Glass Rice Dispenser with Bamboo Stand & Stainless Steel Valve",
    categorySlug: "aesthetic-storage",
    categoryName: "Pantry & Aesthetic Storage",
    priceRange: "$49 - $65",
    rating: 4.5,
    reviewCount: 1850,
    asin: "B09H2S8W4Q",
    highlights: ["Air-tight moisture seal", "Manual valve release & glass cup"],
    featuredGuideTitle: "Aesthetic Pantry Organization Guide",
    featuredGuideSlug: "aesthetic-pantry-organization-guide",
    pros: ["Zero plastic contact with food", "Borosilicate heat-resistant glass"],
    cons: ["Countertop footprint required"],
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === "all-essentials") return PRODUCTS;
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function generateProductStaticParams(): { id: string }[] {
  return PRODUCTS.map((p) => ({ id: p.id }));
}
