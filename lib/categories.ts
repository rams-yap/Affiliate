export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "1",
    slug: "ceramic-clay",
    title: "Non-Toxic Ceramic & Clay",
    description: "PFAS-free ceramic coated cookware and natural clay pieces for non-toxic cooking.",
    icon: "🍳",
  },
  {
    id: "2",
    slug: "carbon-steel-woks",
    title: "Heirloom Iron & Carbon Steel",
    description: "Hand-forged carbon steel and enameled cast iron built to last for generations.",
    icon: "🔥",
  },
  {
    id: "3",
    slug: "space-saving-detachable",
    title: "Space-Saving & Detachable",
    description: "Modular cookware sets with removable handles designed for compact storage.",
    icon: "📦",
  },
  {
    id: "4",
    slug: "aesthetic-storage",
    title: "Pantry & Aesthetic Storage",
    description: "Glass, bamboo, and stoneware containers to ditch plastic food contact.",
    icon: "🌾",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
