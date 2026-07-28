export const HERO_IMAGE = "/assets/hero-kitchen.jpg";

export type CategoryKey =
  | "all-essentials"
  | "ceramic-clay"
  | "carbon-steel-woks"
  | "space-saving-detachable"
  | "aesthetic-storage"
  | "multifunctional-gadgets";

export const CATEGORIES: { key: CategoryKey; label: string; slug: string }[] = [
  { key: "all-essentials", label: "All Essentials", slug: "all-essentials" },
  { key: "ceramic-clay", label: "Non-Toxic Ceramic & Clay", slug: "ceramic-clay" },
  { key: "carbon-steel-woks", label: "Heirloom Iron & Carbon Steel", slug: "carbon-steel-woks" },
  { key: "space-saving-detachable", label: "Space-Saving & Detachable", slug: "space-saving-detachable" },
  { key: "aesthetic-storage", label: "Pantry & Aesthetic Storage", slug: "aesthetic-storage" },
  { key: "multifunctional-gadgets", label: "Multi-Functional Gadgets", slug: "multifunctional-gadgets" },
];

export type Product = {
  id: string;
  image: string;
  category: string;
  categoryKey: CategoryKey;
  title: string;
  badge: string;
  rating: number;
  reviewsCount: string;
  priceRange: string;
  asin: string;
  amazonUrl: string;
  specs: string[];
  featuredInSlug: string;
  featuredInTitle: string;
  description: string;
  materials: { label: string; detail: string }[];
  pros: string[];
  cons: string[];
  specsTable: { label: string; value: string }[];
};

export const PRODUCTS: Product[] = [
  {
    id: "caraway-12pc",
    image: "/assets/caraway_12pc_set.jpg",
    category: "Non-Toxic Ceramic & Clay",
    categoryKey: "ceramic-clay",
    title: "Caraway 12-Piece Non-Toxic Ceramic Cookware Set with Magnetic Storage",
    badge: "Mineral Ceramic · Zero PFAS/PTFE/PFOA",
    rating: 4.8,
    reviewsCount: "6,600+ reviews",
    priceRange: "$395 - $495",
    asin: "B08XLT1YD8",
    amazonUrl: "https://www.amazon.com/s?k=Caraway+12-Piece+Non-Stick+Ceramic+Cookware+Set&tag=pantryandpan-20",
    specs: ["Includes 4 magnetic pan organizers", "Canvas lid holder included"],
    featuredInSlug: "non-toxic-kitchen-blueprint",
    featuredInTitle: "The Non-Toxic Kitchen Blueprint",
    description:
      "The gold standard for modern aesthetic non-toxic cooking. Caraway's 12-piece ceramic cookware set is engineered with an eco-friendly mineral coating completely free of PFAS, PTFE, PFOA, lead, and heavy metals.",
    materials: [
      { label: "Core", detail: "Heavy-gauge aluminum core with stainless steel induction base" },
      { label: "Surface", detail: "Naturally slick mineral-based ceramic nonstick coating" },
      { label: "Handles", detail: "Brushed stainless steel stay-cool handles" },
    ],
    pros: [
      "100% non-toxic release with zero chemical fumes at high heat",
      "Comes with magnetic pan organizers and a canvas lid rack",
      "Oven safe up to 550°F on gas, electric, and induction tops",
      "Stunning modern matte finish designed for open shelving",
    ],
    cons: [
      "Hand wash recommended to preserve peak mineral ceramic slickness",
      "Avoid high heat cooking oil sprays with propellant",
    ],
    specsTable: [
      { label: "Material", value: "Aluminum Core & Ceramic Surface" },
      { label: "Set Pieces", value: "12 Pieces (Pots, Pans & Organizers)" },
      { label: "Oven Safe", value: "Up to 550°F" },
      { label: "Induction Safe", value: "Yes" },
      { label: "ASIN", value: "B08XLT1YD8" },
    ],
  },
  {
    id: "greenpan-valencia",
    image: "/assets/greenpan_valencia_set.jpg",
    category: "Non-Toxic Ceramic & Clay",
    categoryKey: "ceramic-clay",
    title: "GreenPan Valencia Pro 11-Piece Hard Anodized Healthy Ceramic Cookware Set",
    badge: "Thermolon Mineral Ceramic · Diamond Infused",
    rating: 4.6,
    reviewsCount: "4,850+ reviews",
    priceRange: "$349 - $399",
    asin: "B07G4MTK3W",
    amazonUrl: "https://www.amazon.com/s?k=GreenPan+Valencia+Pro+11-Piece+Healthy+Ceramic+Cookware+Set&tag=pantryandpan-20",
    specs: ["Diamond-reinforced ceramic coating", "Magneto induction base tech"],
    featuredInSlug: "non-toxic-kitchen-blueprint",
    featuredInTitle: "The Non-Toxic Kitchen Blueprint",
    description:
      "GreenPan's flagship Valencia Pro set features Thermolon minerals derived from sand. Free from PFAS, PFOA, lead, and cadmium, it will never release toxic fumes, even if accidentally overheated up to 600°F.",
    materials: [
      { label: "Body", detail: "Duoforced hard-anodized aluminum for maximum scratch resistance" },
      { label: "Coating", detail: "Thermolon mineral ceramic nonstick infused with diamonds" },
      { label: "Handles", detail: "Ergonomic stainless steel, riveted for security" },
    ],
    pros: [
      "Zero PFAS, PFOA, lead, or cadmium",
      "Oven safe up to 600°F (lids up to 425°F)",
      "Compatible with all stovetops including induction",
      "Metal utensil safe ceramic surface",
    ],
    cons: [
      "Hand washing recommended to preserve peak nonstick release",
      "Higher initial investment for complete set",
    ],
    specsTable: [
      { label: "Material", value: "Hard-Anodized Ceramic" },
      { label: "Pieces Included", value: "11-Piece Set" },
      { label: "Oven Safe", value: "Up to 600°F" },
      { label: "Induction Safe", value: "Yes (Magneto Tech)" },
      { label: "ASIN", value: "B07G4MTK3W" },
    ],
  },
  {
    id: "carote-11pc",
    image: "/assets/carote_stackable_set.jpg",
    category: "Space-Saving & Detachable",
    categoryKey: "space-saving-detachable",
    title: "CAROTE 11-Piece Stackable Cookware Set with Removable Click Handles",
    badge: "Detachable Click-Handle · 70% Space Saving",
    rating: 4.6,
    reviewsCount: "14,200+ reviews",
    priceRange: "$69 - $89",
    asin: "B09Z2FBLKC",
    amazonUrl: "https://www.amazon.com/s?k=CAROTE+11-Piece+Stackable+Cookware+Set+with+Removable+Handles&tag=pantryandpan-20",
    specs: ["Oven to table to fridge transition", "Silicone fridge lids included"],
    featuredInSlug: "space-saving-cookware-guide",
    featuredInTitle: "Modular Cooking: Space-Saving Guide",
    description:
      "Engineered for modern small-space kitchens. The secure click-off handle transforms pans into baking dishes, serving platters, or fridge storage containers in seconds while saving up to 70% cabinet space.",
    materials: [
      { label: "Body", detail: "Die-cast aluminum with stainless steel induction disc" },
      { label: "Coating", detail: "Granite ceramic non-stick free of PFOA, lead, and cadmium" },
      { label: "Handle", detail: "Dual-action safety lock removable handle" },
    ],
    pros: [
      "Saves up to 70% cabinet storage space through tight nesting",
      "Pans transition seamlessly from stovetop to oven to dining table",
      "Non-toxic granite ceramic coating",
      "Includes silicone storage lids for fridge meal storage",
    ],
    cons: ["Remove handle before placing pans in high-heat oven"],
    specsTable: [
      { label: "Material", value: "Granite Ceramic & Aluminum" },
      { label: "Pieces", value: "11-Piece Modular Set" },
      { label: "Oven Safe", value: "Up to 480°F (without handle)" },
      { label: "Induction Safe", value: "Yes" },
      { label: "ASIN", value: "B09Z2FBLKC" },
    ],
  },
  {
    id: "sensarte-granite",
    image: "/assets/sensarte_frying_pan.jpg",
    category: "Non-Toxic Ceramic & Clay",
    categoryKey: "ceramic-clay",
    title: "Sensarte Nonstick Frying Pan Set with Swiss Granite Ceramic Coating",
    badge: "Swiss Granite Coating · Stay-Cool Wood Grain Handle",
    rating: 4.7,
    reviewsCount: "32,100+ reviews",
    priceRange: "$39 - $59",
    asin: "B08CH2D6T4",
    amazonUrl: "https://www.amazon.com/s?k=Sensarte+Nonstick+Frying+Pan+Set+Swiss+Granite&tag=pantryandpan-20",
    specs: ["Dual pour spouts for mess-free draining", "Cast aluminum heat core"],
    featuredInSlug: "clean-morning-rituals",
    featuredInTitle: "Clean Morning Rituals Guide",
    description:
      "Sensarte's top-rated skillet set features an imported Swiss mineral granite coating. 100% PFOA and PFAS-free, it delivers effortless non-stick release for morning eggs and searing meats without heavy oils.",
    materials: [
      { label: "Core", detail: "Heavy duty die-cast aluminum core" },
      { label: "Coating", detail: "Swiss imported non-stick granite ceramic coating" },
      { label: "Handle", detail: "Wood-grain Bakelite handle with heat-isolation grip" },
    ],
    pros: [
      "Ultra-affordable entry point for non-toxic skillet cooking",
      "Dual pour spouts prevent drips when pouring sauces or fat",
      "Compatible with all stoves including induction",
      "Lightweight and easy to handle",
    ],
    cons: ["Bakelite handle is not safe in ovens over 302°F"],
    specsTable: [
      { label: "Material", value: "Granite Ceramic & Aluminum" },
      { label: "Handle Type", value: "Wood-grain Bakelite" },
      { label: "Induction Compatible", value: "Yes" },
      { label: "ASIN", value: "B08CH2D6T4" },
    ],
  },
  {
    id: "lodge-dutch-oven",
    image: "/assets/lodge_dutch_oven.jpg",
    category: "Heirloom Iron & Carbon Steel",
    categoryKey: "carbon-steel-woks",
    title: "Lodge 6-Quart Enameled Cast Iron Dutch Oven",
    badge: "Vitreous Enamel · Heirloom Classic",
    rating: 4.8,
    reviewsCount: "38,400+ reviews",
    priceRange: "$69 - $89",
    asin: "B000N48206",
    amazonUrl: "https://www.amazon.com/dp/B000N48206?tag=pantryandpan-20",
    specs: ["Smooth porcelain enamel finish", "Unmatched heat retention & distribution"],
    featuredInSlug: "non-toxic-kitchen-blueprint",
    featuredInTitle: "The Non-Toxic Kitchen Blueprint",
    description:
      "An American kitchen staple. Heavy cast iron coated in smooth porcelain enamel eliminates the need for chemical non-stick while offering superior heat distribution for slow-simmered stews, roasts, and sourdough bread.",
    materials: [
      { label: "Body", detail: "Cast iron core for massive thermal mass" },
      { label: "Finish", detail: "Dual-layer chip-resistant porcelain enamel" },
      { label: "Knob", detail: "Stainless steel oven-safe lid knob" },
    ],
    pros: [
      "Incredible heat retention for slow cooking and braising",
      "Non-reactive porcelain coating accepts acidic ingredients",
      "Oven safe up to 500°F",
      "Fraction of the price of European enamels",
    ],
    cons: ["Heavy weight (13.7 lbs)", "Requires careful handling to prevent chipping"],
    specsTable: [
      { label: "Material", value: "Enameled Cast Iron" },
      { label: "Capacity", value: "6 Quarts" },
      { label: "Weight", value: "13.7 lbs" },
      { label: "Oven Safe", value: "Up to 500°F" },
      { label: "ASIN", value: "B000N48206" },
    ],
  },
  {
    id: "yosukata-wok",
    image: "/assets/yosukata_wok.jpg",
    category: "Heirloom Iron & Carbon Steel",
    categoryKey: "carbon-steel-woks",
    title: 'Yosukata 14" Pre-Seasoned Carbon Steel Wok',
    badge: "Black Carbon Steel · Hand-Treated",
    rating: 4.7,
    reviewsCount: "6,150+ reviews",
    priceRange: "$59 - $79",
    asin: "B0836Z4ZBW",
    amazonUrl: "https://www.amazon.com/dp/B0836Z4ZBW?tag=pantryandpan-20",
    specs: ["Natural patina non-stick", "High-heat stir fry searing"],
    featuredInSlug: "wok-cooking-toxin-free",
    featuredInTitle: "Wok Cooking Toxin-Free",
    description:
      "Crafted from high-grade black carbon steel and pre-seasoned at 1000°F, this traditional flat-bottom wok delivers high-heat wok hei flavor without a drop of chemical non-stick coating.",
    materials: [
      { label: "Body", detail: "Heavy-duty 1.5mm carbon steel" },
      { label: "Handle", detail: "Ergonomic natural beechwood main handle + helper loop" },
      { label: "Coating", detail: "100% natural oil heat pre-seasoning" },
    ],
    pros: [
      "Pre-seasoned and ready for immediate high-heat stir frying",
      "Zero chemical synthetic non-stick sealants",
      "Lightweight compared to cast iron for easy wok tossing",
      "Flat bottom stays stable on gas, electric, and induction tops",
    ],
    cons: ["Requires hand washing and oiling after each use", "Not dishwasher safe"],
    specsTable: [
      { label: "Material", value: "Heavy Carbon Steel" },
      { label: "Diameter", value: '14" Flat-Bottom' },
      { label: "Weight", value: "3.8 lbs" },
      { label: "ASIN", value: "B0836Z4ZBW" },
    ],
  },
  {
    id: "joyjolt-glass-containers",
    image: "/assets/joyjolt_glass_containers.jpg",
    category: "Pantry & Aesthetic Storage",
    categoryKey: "aesthetic-storage",
    title: "JoyJolt JoyFul 24-Piece Borosilicate Glass Food Storage Container Set",
    badge: "Borosilicate Glass · 100% Airtight & Leakproof",
    rating: 4.8,
    reviewsCount: "11,500+ reviews",
    priceRange: "$49 - $69",
    asin: "B07Z8G51Y6",
    amazonUrl: "https://www.amazon.com/dp/B07Z8G51Y6?tag=pantryandpan-20",
    specs: ["Oven, microwave, and freezer safe", "BPA-free snap locking lids"],
    featuredInSlug: "aesthetic-pantry-organization-guide",
    featuredInTitle: "Aesthetic Pantry Organization Guide",
    description:
      "Replace plastic Tupperware with ultra-durable borosilicate glass. JoyJolt JoyFul containers withstand extreme temperatures from oven to freezer without leaching microplastics or chemicals into meal prep.",
    materials: [
      { label: "Body", detail: "High-thermal borosilicate glass" },
      { label: "Lids", detail: "BPA-free polypropylene with silicone airtight gasket" },
    ],
    pros: [
      "Oven safe up to 1040°F (glass body)",
      "Zero plastic chemical leaching into food",
      "Airtight silicone seal prevents fridge spills",
      "Stackable for neat fridge organization",
    ],
    cons: ["Lids should be hand washed or placed on top rack of dishwasher"],
    specsTable: [
      { label: "Material", value: "Borosilicate Glass" },
      { label: "Set Count", value: "24 Pieces (12 Containers + 12 Lids)" },
      { label: "Oven Safe", value: "Up to 1040°F" },
      { label: "ASIN", value: "B07Z8G51Y6" },
    ],
  },
  {
    id: "glass-rice-dispenser",
    image: "/assets/glass_rice_dispenser.jpg",
    category: "Pantry & Aesthetic Storage",
    categoryKey: "aesthetic-storage",
    title: "5L Glass Rice Dispenser with Bamboo Stand & Stainless Steel Valve",
    badge: "Borosilicate Glass · Food-Grade Silicone Seal",
    rating: 4.7,
    reviewsCount: "2,350+ reviews",
    priceRange: "$49 - $65",
    asin: "B09H2S8W4Q",
    amazonUrl: "https://www.amazon.com/s?k=5L+Glass+Rice+Dispenser+with+Bamboo+Stand&tag=pantryandpan-20",
    specs: ["Air-tight moisture seal", "Manual valve release & glass cup"],
    featuredInSlug: "aesthetic-pantry-organization-guide",
    featuredInTitle: "Aesthetic Pantry Organization Guide",
    description:
      "Elevate your open pantry with a heavy-duty borosilicate glass grain dispenser. Features an airtight bamboo lid, solid wooden stand, and bottom stainless steel release valve for easy dispensing of rice, oats, or beans.",
    materials: [
      { label: "Canister", detail: "High borosilicate heat-resistant glass" },
      { label: "Stand & Lid", detail: "Sustainably harvested natural bamboo with silicone ring" },
      { label: "Valve", detail: "304 food-grade stainless steel lever" },
    ],
    pros: [
      "Zero plastic contact for long-term grain & rice storage",
      "Manual stainless valve dispenses exact portions into glass measuring cup",
      "Airtight silicone seal keeps moisture and pests away",
      "Elevates kitchen counter aesthetics",
    ],
    cons: ["Requires 15 inches of vertical counter height"],
    specsTable: [
      { label: "Material", value: "Borosilicate Glass & Bamboo" },
      { label: "Capacity", value: "5 Liters (approx. 10 lbs rice)" },
      { label: "ASIN", value: "B09H2S8W4Q" },
    ],
  },
  {
    id: "vtopmart-bulk-containers",
    image: "/assets/vtopmart_bulk_canisters.jpg",
    category: "Pantry & Aesthetic Storage",
    categoryKey: "aesthetic-storage",
    title: "Vtopmart 4-Piece Large 5.2L Airtight Bulk Storage Containers for Flour & Sugar",
    badge: "5.2L Extra Large Capacity · Chalkboard Labels Included",
    rating: 4.8,
    reviewsCount: "28,900+ reviews",
    priceRange: "$32 - $42",
    asin: "B089456R7V",
    amazonUrl: "https://www.amazon.com/dp/B089456R7V?tag=pantryandpan-20",
    specs: ["Holds 5lb bags of flour or sugar", "Side-locking airtight lids"],
    featuredInSlug: "aesthetic-pantry-organization-guide",
    featuredInTitle: "Aesthetic Pantry Organization Guide",
    description:
      "The ultimate bulk pantry canister set. Each 5.2L canister holds an entire 5 lb bag of flour or sugar, featuring 4-side locking lids and silicone seals to preserve freshness and prevent pest entry.",
    materials: [
      { label: "Canister", detail: "BPA-free shatterproof food-grade plastic" },
      { label: "Seal", detail: "Airtight silicone gasket" },
    ],
    pros: [
      "Holds full 5 lb bags without leaving leftover open packages",
      "Comes with 24 reusable chalkboard labels and measuring scoops",
      "Stackable uniform dimensions optimize pantry shelf space",
    ],
    cons: ["Hand wash lids to prolong silicone ring elasticity"],
    specsTable: [
      { label: "Capacity", value: "5.2 Liters (175.8 oz) per canister" },
      { label: "Count", value: "4 Canisters + Labels + Scoops" },
      { label: "ASIN", value: "B089456R7V" },
    ],
  },
  {
    id: "ninja-creami",
    image: "/assets/ninja_creami.jpg",
    category: "Multi-Functional Gadgets",
    categoryKey: "multifunctional-gadgets",
    title: "Ninja CREAMi NC301 Ice Cream & Frozen Treat Maker",
    badge: "7-in-1 Creamify Tech · Protein & Healthy Desserts",
    rating: 4.7,
    reviewsCount: "19,800+ reviews",
    priceRange: "$199 - $229",
    asin: "B09B59M2N1",
    amazonUrl: "https://www.amazon.com/dp/B09B59M2N1?tag=pantryandpan-20",
    specs: ["7 one-touch programs", "Includes 2 pint containers"],
    featuredInSlug: "multifunctional-kitchen-gadgets-guide",
    featuredInTitle: "Multi-Functional Kitchen Gadgets Guide",
    description:
      "Turn wholesome ingredients, protein shakes, and fresh fruits into smooth gelato, sorbet, and frozen treats in minutes. Ninja's Creamify technology shaves solid frozen blocks into ultra-creamy textures.",
    materials: [
      { label: "Body", detail: "Stainless steel accent with heavy-duty motor base" },
      { label: "Blade", detail: "Dual-drive stainless steel Creamerizer paddle" },
    ],
    pros: [
      "Total ingredient control (dairy-free, low sugar, protein ice cream)",
      "7 pre-set speeds for sorbet, gelato, milkshake, and smoothie bowls",
      "Pints, lids, and paddle are top-rack dishwasher safe",
    ],
    cons: ["Requires freezing base pint containers for 24 hours beforehand"],
    specsTable: [
      { label: "Programs", value: "7 One-Touch Functions" },
      { label: "Power", value: "800 Watts" },
      { label: "ASIN", value: "B09B59M2N1" },
    ],
  },
  {
    id: "glass-oil-sprayer",
    image: "/assets/glass_oil_sprayer.jpg",
    category: "Multi-Functional Gadgets",
    categoryKey: "multifunctional-gadgets",
    title: "2-in-1 Glass Oil Sprayer & Dispenser Bottle (Mist & Pour)",
    badge: "Dual Mist & Pour Nozzle · 100% Lead-Free Glass",
    rating: 4.6,
    reviewsCount: "8,400+ reviews",
    priceRange: "$24 - $34",
    asin: "B0C1N7G51S",
    amazonUrl: "https://www.amazon.com/s?k=2-in-1+Glass+Oil+Sprayer+and+Dispenser+Bottle&tag=pantryandpan-20",
    specs: ["Press for fan mist or tilt to pour", "Clog-free brass nozzle"],
    featuredInSlug: "multifunctional-kitchen-gadgets-guide",
    featuredInTitle: "Multi-Functional Kitchen Gadgets Guide",
    description:
      "Eliminate chemical aerosol cooking spray cans. This 2-in-1 glass bottle lets you switch between a fine fan mist for air fryers and salad pans, or a steady pour for skillet cooking.",
    materials: [
      { label: "Bottle", detail: "Thick food-grade borosilicate glass" },
      { label: "Mechanism", detail: "Stainless steel and brass clog-free nozzle" },
    ],
    pros: [
      "Eliminates propellants found in commercial aerosol cooking sprays",
      "Reduces oil consumption by up to 50% with fine mist control",
      "Easy wide-mouth filling without funnel",
    ],
    cons: ["Hand wash nozzle assembly with warm water"],
    specsTable: [
      { label: "Capacity", value: "470 ml / 16 oz" },
      { label: "Material", value: "Borosilicate Glass & Stainless Steel" },
      { label: "ASIN", value: "B0C1N7G51S" },
    ],
  },
  {
    id: "fullstar-veggie-chopper",
    image: "/assets/fullstar_veggie_chopper.jpg",
    category: "Multi-Functional Gadgets",
    categoryKey: "multifunctional-gadgets",
    title: "Fullstar 4-in-1 Heavy Duty Vegetable Chopper & Spiralizer",
    badge: "4 German 420 Stainless Blades · 1.2L Catch Tray",
    rating: 4.6,
    reviewsCount: "105,000+ reviews",
    priceRange: "$29 - $39",
    asin: "B07WBXRBMN",
    amazonUrl: "https://www.amazon.com/dp/B07WBXRBMN?tag=pantryandpan-20",
    specs: ["Small/large dice blades", "Spiralizer and ribbon blades"],
    featuredInSlug: "multifunctional-kitchen-gadgets-guide",
    featuredInTitle: "Multi-Functional Kitchen Gadgets Guide",
    description:
      "The viral kitchen time-saver. Dice onions, peppers, and veggies in 3 seconds flat while keeping prep clean inside a 1.2L catch tray. Includes 4 interchangeable razor-sharp German stainless steel blades.",
    materials: [
      { label: "Blades", detail: "Heavy-duty 420 grade stainless steel" },
      { label: "Body", detail: "BPA-free food-grade ABS plastic" },
    ],
    pros: [
      "Cuts dinner prep time in half with uniform dicing",
      "Eliminates onion-tear fumes",
      "Includes cleaning scraper tool and finger guard",
    ],
    cons: ["Hand wash blades to preserve razor sharpness"],
    specsTable: [
      { label: "Blades", value: "4 Interchangeable Stainless Steel" },
      { label: "Capacity", value: "1.2 Liter Catch Tray" },
      { label: "ASIN", value: "B07WBXRBMN" },
    ],
  },
  {
    id: "lodge-cast-iron-skillet",
    image: "/assets/lodge_skillet.jpg",
    category: "Heirloom Iron & Carbon Steel",
    categoryKey: "carbon-steel-woks",
    title: "Lodge 10.25 Inch Pre-Seasoned Cast Iron Skillet",
    badge: "American Made Cast Iron",
    rating: 4.8,
    reviewsCount: "135,000+ reviews",
    priceRange: "$19 - $29",
    asin: "B00006JSUA",
    amazonUrl: "https://www.amazon.com/dp/B00006JSUA?tag=pantryandpan-20",
    specs: ["Pre-seasoned with 100% natural vegetable oil", "Unparalleled heat retention"],
    featuredInSlug: "non-toxic-kitchen-blueprint",
    featuredInTitle: "The Non-Toxic Kitchen Blueprint",
    description: "A timeless classic that belongs in every kitchen. The Lodge cast iron skillet is pre-seasoned and ready to use, providing excellent heat distribution for searing, baking, and frying without toxic coatings.",
    materials: [{ label: "Material", detail: "Cast Iron" }],
    pros: ["Naturally non-stick when seasoned", "Virtually indestructible"],
    cons: ["Heavy weight", "Requires special cleaning care"],
    specsTable: [{ label: "Size", value: "10.25 Inch" }, { label: "Oven Safe", value: "Yes" }, { label: "ASIN", value: "B00006JSUA" }]
  },
  {
    id: "de-buyer-carbon-steel-pan",
    image: "/assets/de_buyer_pan.jpg",
    category: "Heirloom Iron & Carbon Steel",
    categoryKey: "carbon-steel-woks",
    title: "De Buyer Mineral B Carbon Steel Frying Pan",
    badge: "French Carbon Steel",
    rating: 4.7,
    reviewsCount: "8,500+ reviews",
    priceRange: "$79 - $99",
    asin: "B00462QP0W",
    amazonUrl: "https://www.amazon.com/dp/B00462QP0W?tag=pantryandpan-20",
    specs: ["Beeswax finish against oxidation", "Signature French handle"],
    featuredInSlug: "wok-cooking-toxin-free",
    featuredInTitle: "Wok Cooking Toxin-Free",
    description: "Professional grade carbon steel that becomes naturally non-stick over time. It heats up quickly and can handle extreme temperatures for the perfect sear.",
    materials: [{ label: "Material", detail: "Carbon Steel" }],
    pros: ["Heats rapidly", "Becomes better with use"],
    cons: ["Needs seasoning", "Not dishwasher safe"],
    specsTable: [{ label: "Material", value: "Carbon Steel" }, { label: "Coating", value: "Beeswax" }, { label: "ASIN", value: "B00462QP0W" }]
  },
  {
    id: "stasher-silicone-bags",
    image: "/assets/stasher_bags.jpg",
    category: "Pantry & Aesthetic Storage",
    categoryKey: "aesthetic-storage",
    title: "Stasher Platinum Reusable Silicone Storage Bags",
    badge: "Platinum Food-Grade Silicone",
    rating: 4.8,
    reviewsCount: "35,000+ reviews",
    priceRange: "$45 - $65",
    asin: "B01DZQT9CU",
    amazonUrl: "https://www.amazon.com/dp/B01DZQT9CU?tag=pantryandpan-20",
    specs: ["Pinch-Loc seal", "Dishwasher and microwave safe"],
    featuredInSlug: "aesthetic-pantry-organization-guide",
    featuredInTitle: "Aesthetic Pantry Organization Guide",
    description: "The endlessly reusable alternative to single-use plastic bags. Made from pure platinum silicone, these are safe for the freezer, microwave, and dishwasher.",
    materials: [{ label: "Material", detail: "Platinum Silicone" }],
    pros: ["Durable and reusable", "Completely plastic-free"],
    cons: ["Can be difficult to dry completely"],
    specsTable: [{ label: "Material", value: "Platinum Silicone" }, { label: "ASIN", value: "B01DZQT9CU" }]
  },
  {
    id: "pyrex-glass-measuring-cups",
    image: "/assets/pyrex_measuring_cups.jpg",
    category: "Pantry & Aesthetic Storage",
    categoryKey: "aesthetic-storage",
    title: "Pyrex 3-Piece Glass Measuring Cup Set",
    badge: "Tempered Glass",
    rating: 4.9,
    reviewsCount: "60,000+ reviews",
    priceRange: "$20 - $25",
    asin: "B00M2J7PCI",
    amazonUrl: "https://www.amazon.com/dp/B00M2J7PCI?tag=pantryandpan-20",
    specs: ["Easy-to-read measurements", "Non-porous glass"],
    featuredInSlug: "aesthetic-pantry-organization-guide",
    featuredInTitle: "Aesthetic Pantry Organization Guide",
    description: "A baking essential. These tempered glass measuring cups will not absorb food odors, flavors, or stains, and the easy-read markers make precision baking simple.",
    materials: [{ label: "Material", detail: "Tempered Glass" }],
    pros: ["Microwave and dishwasher safe", "Extremely durable"],
    cons: ["Glass can chip if dropped"],
    specsTable: [{ label: "Pieces", value: "3" }, { label: "ASIN", value: "B00M2J7PCI" }]
  },
  {
    id: "all-clad-d3-skillet",
    image: "/assets/all_clad_skillet.jpg",
    category: "All Essentials",
    categoryKey: "all-essentials",
    title: "All-Clad D3 3-Ply Stainless Steel Frying Pan",
    badge: "American Made 3-Ply",
    rating: 4.8,
    reviewsCount: "9,000+ reviews",
    priceRange: "$120 - $150",
    asin: "B00FUF5K8W",
    amazonUrl: "https://www.amazon.com/dp/B00FUF5K8W?tag=pantryandpan-20",
    specs: ["Tri-ply construction", "Flared edges for pouring"],
    featuredInSlug: "non-toxic-kitchen-blueprint",
    featuredInTitle: "The Non-Toxic Kitchen Blueprint",
    description: "Premium stainless steel cookware that delivers even heat distribution. Its classic tri-ply construction is built to last a lifetime and handle any recipe.",
    materials: [{ label: "Construction", detail: "Aluminum core with stainless steel exterior" }],
    pros: ["Exceptional heat distribution", "Oven and broiler safe"],
    cons: ["Higher price point", "Requires technique to prevent sticking"],
    specsTable: [{ label: "Material", value: "Stainless Steel" }, { label: "ASIN", value: "B00FUF5K8W" }]
  },
  {
    id: "totally-bamboo-utensils",
    image: "/assets/totally_bamboo_utensils.jpg",
    category: "All Essentials",
    categoryKey: "all-essentials",
    title: "Totally Bamboo 6-Piece Organic Wooden Cooking Utensil Set",
    badge: "Organic Bamboo",
    rating: 4.7,
    reviewsCount: "12,000+ reviews",
    priceRange: "$15 - $25",
    asin: "B07P7JQQMV",
    amazonUrl: "https://www.amazon.com/dp/B07P7JQQMV?tag=pantryandpan-20",
    specs: ["Safe for non-stick", "Sustainably sourced"],
    featuredInSlug: "non-toxic-kitchen-blueprint",
    featuredInTitle: "The Non-Toxic Kitchen Blueprint",
    description: "A beautiful and sustainable set of cooking utensils. Bamboo is harder than most woods, meaning these tools will last longer while keeping your cookware scratch-free.",
    materials: [{ label: "Material", detail: "100% Organic Bamboo" }],
    pros: ["Will not scratch cookware", "Eco-friendly material"],
    cons: ["Hand wash only"],
    specsTable: [{ label: "Pieces", value: "6 Utensils" }, { label: "ASIN", value: "B07P7JQQMV" }]
  },
  {
    id: "caraway-bakeware-set",
    image: "/assets/caraway_bakeware_set.jpg",
    category: "Non-Toxic Ceramic & Clay",
    categoryKey: "ceramic-clay",
    title: "Caraway Non-Toxic Ceramic Bakeware 11-Piece Set",
    badge: "Non-Toxic Ceramic",
    rating: 4.8,
    reviewsCount: "4,500+ reviews",
    priceRange: "$395 - $445",
    asin: "B0B1G82L3J",
    amazonUrl: "https://www.amazon.com/dp/B0B1G82L3J?tag=pantryandpan-20",
    specs: ["Free of PFAS and PTFE", "Includes magnetic organizers"],
    featuredInSlug: "space-saving-cookware-guide",
    featuredInTitle: "Modular Cooking: Space-Saving Guide",
    description: "Bake without the worry of toxic chemicals. This 11-piece set features a naturally slick ceramic coating that makes cleanup a breeze and looks stunning in any kitchen.",
    materials: [{ label: "Coating", detail: "Mineral-based ceramic" }],
    pros: ["Incredible non-stick performance", "Beautiful aesthetic colors"],
    cons: ["Can stain over time if not cleaned properly"],
    specsTable: [{ label: "Oven Safe", value: "Up to 550°F" }, { label: "ASIN", value: "B0B1G82L3J" }]
  },
  {
    id: "silpat-baking-mat",
    image: "/assets/silpat_baking_mat.jpg",
    category: "All Essentials",
    categoryKey: "all-essentials",
    title: "Silpat Premium Non-Stick Silicone Baking Mat",
    badge: "French Fiberglass Silicone",
    rating: 4.9,
    reviewsCount: "25,000+ reviews",
    priceRange: "$25 - $35",
    asin: "B00008T960",
    amazonUrl: "https://www.amazon.com/dp/B00008T960?tag=pantryandpan-20",
    specs: ["Woven fiberglass core", "Even heat transfer"],
    featuredInSlug: "aesthetic-pantry-organization-guide",
    featuredInTitle: "Aesthetic Pantry Organization Guide",
    description: "Turn any baking sheet into a non-stick surface. Used by professionals worldwide, this mat ensures perfect cookies every time and reduces the need for parchment paper.",
    materials: [{ label: "Material", detail: "Silicone and Fiberglass" }],
    pros: ["Reusable thousands of times", "Consistent baking results"],
    cons: ["Retains greasy feel if not washed with strong soap"],
    specsTable: [{ label: "Oven Safe", value: "Up to 480°F" }, { label: "ASIN", value: "B00008T960" }]
  }
];

export function getProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductById(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug || c.key === slug);
}

export type Article = {
  slug: string;
  category: string;
  categoryKey?: CategoryKey;
  title: string;
  excerpt: string;
  heroImage: string;
  authorName: string;
  authorInitials: string;
  authorRole: string;
  readMinutes: number;
  publishDate: string;
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    productId?: string;
  }[];
  relatedProductIds: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
};

export const GUIDES: Article[] = [
  {
    "slug": "multifunctional-kitchen-gadgets-guide",
    "category": "Multi-Functional Gadgets",
    "categoryKey": "multifunctional-gadgets",
    "title": "Essential Multi-Functional Kitchen Gadgets for Healthy, Space-Saving Prep",
    "excerpt": "Eliminate chemical aerosol cans, cut meal prep time in half, and customize non-toxic frozen treats with versatile modern kitchen tools.",
    "heroImage": "/assets/glass_oil_sprayer.jpg",
    "authorName": "Sarah Jenkins",
    "authorInitials": "SJ",
    "authorRole": "Founder, Pantry & Pan",
    "readMinutes": 6,
    "publishDate": "Updated July 27, 2026",
    "sections": [
      {
        "id": "why-multifunctional-gadgets",
        "title": "The Multi-Functional Kitchen Revolution",
        "paragraphs": [
          "Single-purpose plastic kitchen clutter is quickly being replaced by intelligent, multi-functional tools. Modern home cooks are seeking non-toxic, space-saving gadgets that accomplish multiple prep tasks without taking up valuable counter space.",
          "Investing in versatile tools crafted from food-grade glass, stainless steel, and BPA-free materials ensures clean food prep while dramatically cutting daily meal prep time."
        ]
      },
      {
        "id": "glass-oil-sprayer-vs-aerosol",
        "title": "Ditching Chemical Aerosol Spray Cans for Refillable Glass Misters",
        "paragraphs": [
          "Commercial cooking spray cans rely on chemical propellants like isobutane and propane, along with anti-foaming additives that leave a sticky residue on ceramic and nonstick cookware.",
          "Transitioning to a 2-in-1 glass oil sprayer and dispenser lets you use pure avocado or olive oil with zero chemical additives. The dual-function nozzle allows you to switch between a fine fan mist for air fryers and a steady pour for skillet searing, reducing oil usage by up to 50%."
        ],
        "productId": "glass-oil-sprayer"
      },
      {
        "id": "healthy-frozen-desserts-creami",
        "title": "Custom Healthy Frozen Desserts Without Preservatives",
        "paragraphs": [
          "Store-bought ice cream is often packed with artificial gums, emulsifiers, and excess refined sugar. Multi-functional appliances like the Ninja CREAMi allow you to transform protein shakes, almond milk, and fresh fruit into smooth gelato or sorbet in minutes.",
          "With total control over ingredients, you can craft dairy-free, keto, or high-protein frozen treats tailored to your family's dietary needs."
        ],
        "productId": "ninja-creami"
      },
      {
        "id": "fast-clean-meal-prep-chopper",
        "title": "Cutting Prep Time in Half Without Tear Fumes",
        "paragraphs": [
          "Dicing onions, peppers, and root vegetables is one of the most time-consuming parts of daily cooking. Heavy-duty 4-in-1 vegetable choppers equipped with razor-sharp German 420 stainless steel blades allow you to dice an entire onion in 3 seconds.",
          "The enclosed 1.2L catch tray keeps counter space clean while sealing in onion tear fumes, making healthy dinner prep effortless and mess-free."
        ],
        "productId": "fullstar-veggie-chopper"
      }
    ],
    "relatedProductIds": [
      "glass-oil-sprayer",
      "ninja-creami",
      "fullstar-veggie-chopper",
      "carote-11pc",
      "caraway-12pc"
    ],
    "faqs": [
      {
        "question": "Are glass oil misters better than commercial cooking sprays?",
        "answer": "Yes, refillable glass oil misters use pure avocado or olive oil with zero chemical propellants (such as butane or propane) or anti-foaming agents, preventing sticky residue build-up on nonstick cookware."
      },
      {
        "question": "Can you make dairy-free ice cream in the Ninja CREAMi?",
        "answer": "Yes, the Ninja CREAMi handles almond milk, oat milk, coconut cream, and protein shakes, shaving frozen blocks into smooth dairy-free gelato and sorbet in minutes."
      },
      {
        "question": "Is a vegetable chopper safe to clean in the dishwasher?",
        "answer": "While catch trays are usually top-rack dishwasher safe, hand washing the stainless steel blades preserves their razor sharpness and prevents edge corrosion."
      },
      {
        "question": "How much oil does a fan-mist oil sprayer save?",
        "answer": "Fan-mist oil misters distribute a thin, even layer of oil, reducing total oil consumption by up to 50% per dish compared to pouring directly from a bottle."
      }
    ]
  },
  {
    "slug": "non-toxic-kitchen-blueprint",
    "category": "Non-Toxic Ceramic & Clay",
    "categoryKey": "ceramic-clay",
    "title": "The Non-Toxic Kitchen Blueprint: How to Swap PTFE for Safe Materials",
    "excerpt": "A step-by-step audit of common kitchen chemical hazards, and the exact cookware materials that keep your food clean.",
    "heroImage": "/assets/hero-kitchen.jpg",
    "authorName": "Dr. Elena Vance",
    "authorInitials": "EV",
    "authorRole": "Materials Researcher & Home Chef",
    "readMinutes": 8,
    "publishDate": "Updated June 12, 2026",
    "sections": [
      {
        "id": "the-problem-with-ptfe",
        "title": "The problem with traditional nonstick",
        "paragraphs": [
          "For decades, PTFE and PFAS fluoropolymers provided convenient food release. But when heated past 500°F, synthetic coatings degrade and off-gas chemical compounds into your home environment.",
          "Swapping to mineral ceramic coatings like Caraway or GreenPan ensures zero synthetic fumes at high temperatures."
        ]
      },
      {
        "id": "ceramic-vs-carbon-steel",
        "title": "Ceramic vs. Carbon Steel: Which is right for you?",
        "paragraphs": [
          "Ceramic sets like the Caraway 12-Piece Ceramic Set and GreenPan Valencia Pro offer effortless release for morning eggs without seasoning routines.",
          "For high-heat searing and lifelong heirloom durability, heavy carbon steel and enameled cast iron like Lodge offer unmatched thermal mass."
        ],
        "productId": "caraway-12pc"
      },
      {
        "id": "ditching-plastic-storage",
        "title": "Ditching plastic in grain and food storage",
        "paragraphs": [
          "Microplastics leach fastest into foods when stored long-term in soft plastics. Transitioning to borosilicate glass dispensers and JoyJolt glass containers preserves ingredient freshness while elevating pantry aesthetics."
        ],
        "productId": "joyjolt-glass-containers"
      }
    ],
    "relatedProductIds": [
      "caraway-12pc",
      "greenpan-valencia",
      "sensarte-granite",
      "joyjolt-glass-containers",
      "ninja-creami"
    ],
    "faqs": [
      {
        "question": "At what temperature does traditional Teflon become unsafe?",
        "answer": "Traditional PTFE (Teflon) coatings begin to break down at temperatures above 500°F (260°C), releasing chemical fumes. Mineral ceramics remain stable up to 550°F or 600°F without degradation."
      },
      {
        "question": "What is the difference between ceramic and carbon steel cookware?",
        "answer": "Ceramic cookware features a slick silica glaze for low-maintenance egg and pancake frying. Carbon steel is an indestructible heirloom metal requiring natural oil seasoning for high-heat searing."
      },
      {
        "question": "Are glass food storage containers safer than plastic Tupperware?",
        "answer": "Yes, borosilicate glass containers do not leach microplastics or endocrine-disrupting chemicals like BPA and phthalates into hot food or acidic sauces."
      },
      {
        "question": "What utensils should be used on mineral ceramic pans?",
        "answer": "Always use wood, bamboo, or food-grade silicone utensils to protect delicate ceramic glazes from microscopic surface scratches."
      }
    ]
  },
  {
    "slug": "clean-morning-rituals",
    "category": "Non-Toxic Ceramic & Clay",
    "categoryKey": "ceramic-clay",
    "title": "Clean Morning Rituals: Plastic-Free Cooking & Healthy Treats",
    "excerpt": "How to eliminate synthetic non-stick fumes and microplastics from your breakfast routine.",
    "heroImage": "/assets/sensarte_frying_pan.jpg",
    "authorName": "Sarah Jenkins",
    "authorInitials": "SJ",
    "authorRole": "Founder, Pantry & Pan",
    "readMinutes": 5,
    "publishDate": "Updated May 28, 2026",
    "sections": [
      {
        "id": "microplastic-hazards",
        "title": "Morning Microplastic Hazards & Thermal Degradation",
        "paragraphs": [
          "The morning rush often leads to high-heat cooking on the stove. When traditional PTFE-coated pans are overheated past 500°F, they degrade rapidly, off-gassing chemical fluoropolymer fumes into your kitchen environment.",
          "Transitioning to clean morning rituals means eliminating legacy nonstick coatings and adopting cookware designed for stable thermal conductivity. This shift protects indoor air quality and ensures breakfast remains free from synthetic fluoropolymer compounds."
        ]
      },
      {
        "id": "non-toxic-egg-skillet",
        "title": "The Non-Toxic Egg Skillet Blueprint",
        "paragraphs": [
          "Achieving delicate, slide-out-of-the-pan morning eggs requires advanced material science, not harmful synthetic chemicals. Mineral ceramic and granite stone coatings provide a naturally slick surface completely free of PFAS, PFOA, and heavy metals.",
          "By utilizing a Swiss-engineered granite skillet or a high-quality ceramic pan, home chefs gain exceptional heat retention. This ensures even cooking for delicate proteins like eggs while keeping cookware non-toxic."
        ],
        "productId": "sensarte-granite"
      },
      {
        "id": "plastic-free-prep",
        "title": "Plastic-Free Prep & Whole Food Morning Treats",
        "paragraphs": [
          "A clean morning extends beyond the skillet. Storing overnight oats or prepped fruits in plastic containers exposes food to microplastics and chemical leaching over time. Upgrading to durable borosilicate glass containers locks in freshness without chemical transfer.",
          "Furthermore, creating your own frozen smoothie bowls with whole-food ingredients eliminates reliance on processed, plastic-packaged breakfast items. This approach maximizes nutrient density and supports a zero-waste morning workflow."
        ],
        "productId": "ninja-creami"
      },
      {
        "id": "temperature-and-oil-synergy",
        "title": "Temperature Control & Oil Mister Synergy",
        "paragraphs": [
          "The secret to longevity for clean cookware is precise temperature control paired with pure oil application. Commercial aerosol cooking sprays contain chemical propellants (butane and propane) and soy lecithin that bake onto ceramic surfaces, ruining nonstick release.",
          "Utilizing a refillable glass oil sprayer allows you to mist pure avocado or olive oil evenly across the pan. Paired with low to medium heat settings, this synergy preserves nonstick glaze integrity for years."
        ],
        "productId": "glass-oil-sprayer"
      }
    ],
    "relatedProductIds": [
      "sensarte-granite",
      "caraway-12pc",
      "ninja-creami",
      "joyjolt-glass-containers",
      "glass-oil-sprayer"
    ],
    "faqs": [
      {
        "question": "Why do morning eggs stick to traditional nonstick pans?",
        "answer": "Eggs stick when pans lose their slick surface due to worn synthetic coatings or high heat damage. Mineral ceramic skillets provide effortless release with minimal butter at low-to-medium heat."
      },
      {
        "question": "Is it safe to heat ceramic skillets on high heat?",
        "answer": "It is best to cook on low-to-medium heat with ceramic skillets. High heat is unnecessary because ceramic glazes conduct heat efficiently, and excess heat degrades nonstick longevity."
      },
      {
        "question": "How do you remove burnt food from a ceramic frying pan?",
        "answer": "Fill the pan with warm water and 2 tablespoons of baking soda, let it soak for 15 minutes, then gently wipe with a soft non-abrasive sponge."
      },
      {
        "question": "Can ceramic breakfast pans go in the dishwasher?",
        "answer": "Hand washing with warm soapy water is strongly recommended to preserve the natural mineral ceramic release coating for years."
      }
    ]
  },
  {
    "slug": "wok-cooking-toxin-free",
    "category": "Heirloom Iron & Carbon Steel",
    "categoryKey": "carbon-steel-woks",
    "title": "Wok Cooking, Toxin-Free: A Beginner's Blueprint",
    "excerpt": "Everything you need to know about seasoning, cooking, and caring for a traditional carbon steel wok.",
    "heroImage": "/assets/yosukata_wok.jpg",
    "authorName": "Maya Chen",
    "authorInitials": "MC",
    "authorRole": "Editor, Whole-Home Kitchens",
    "readMinutes": 6,
    "publishDate": "Updated May 3, 2026",
    "sections": [
      {
        "id": "wok-hei-physics-ptfe-dangers",
        "title": "The Wok Hei Physics & PTFE Dangers",
        "paragraphs": [
          "Achieving authentic wok hei, or breath of the wok, requires stove temperatures exceeding 500°F. At these extreme temperatures, traditional nonstick PTFE coatings degrade rapidly, off-gassing toxic fluoropolymer fumes into your kitchen environment.",
          "Carbon steel is the original non-toxic alternative. It withstands intense thermal shock and searing heat without peeling, providing that signature smoky wok flavor safely."
        ]
      },
      {
        "id": "carbon-steel-wok-selection",
        "title": "Carbon Steel Wok Selection & Heat Responsiveness",
        "paragraphs": [
          "Choosing the right wok depends on your cooktop type and cooking style. Round-bottom woks are traditional for gas flames, while flat-bottom woks provide essential contact area and stability for induction and glass stoves.",
          "Heavy-gauge carbon steel offers unmatched heat responsiveness, heating up and cooling down in seconds. Consider options like the Yosukata Carbon Steel Wok for authentic stir-fries or the De Buyer Mineral B Carbon Steel Frying Pan for versatile searing."
        ],
        "productId": "yosukata-wok"
      },
      {
        "id": "initial-seasoning-ritual-patina-science",
        "title": "The Initial Seasoning Ritual & Oil Patina Science",
        "paragraphs": [
          "Transforming raw carbon steel into a naturally slick nonstick surface requires an initial seasoning ritual. The first step, bluing the steel, alters its surface oxide layer to prevent rust.",
          "Next, applying microscopic layers of high-smoke-point oils like avocado or grapeseed oil under intense heat induces oil polymerization. This process bonds oil to the metal, creating a smooth, dark, non-toxic patina that improves with every meal."
        ],
        "productId": "de-buyer-carbon-steel-pan"
      },
      {
        "id": "cleaning-maintenance-re-seasoning",
        "title": "Cleaning, Maintenance, and Re-Seasoning Care",
        "paragraphs": [
          "Proper maintenance preserves your wok's natural nonstick patina for decades. Never use harsh dish soap or place carbon steel in a dishwasher. Instead, use a traditional bamboo brush and hot water to gently scrub away residue.",
          "After washing, immediately dry the wok on a warm burner to evaporate ambient moisture and prevent rust. Finish by rubbing a tiny drop of avocado oil over the interior surface before storage."
        ]
      }
    ],
    "relatedProductIds": [
      "yosukata-wok",
      "de-buyer-carbon-steel-pan",
      "lodge-cast-iron-skillet",
      "lodge-dutch-oven",
      "greenpan-valencia"
    ],
    "faqs": [
      {
        "question": "Why is carbon steel preferred over nonstick for wok cooking?",
        "answer": "Wok cooking requires extreme heat (over 500°F) for authentic 'wok hei' flavor. Synthetic nonstick coatings break down at these temperatures, whereas carbon steel thrives under high heat."
      },
      {
        "question": "Can you use a carbon steel wok on an induction cooktop?",
        "answer": "Yes, flat-bottom carbon steel woks are magnetic and work exceptionally well on induction, electric glass, and gas stoves."
      },
      {
        "question": "How do you clean a seasoned carbon steel wok after cooking?",
        "answer": "Rinse with hot water and a soft bamboo brush (avoid dish soap), dry thoroughly on a warm burner, and rub a tiny drop of high-smoke-point oil over the interior."
      },
      {
        "question": "What oils are best for seasoning a carbon steel wok?",
        "answer": "High-smoke-point neutral oils like grapeseed, avocado, or canola oil are ideal for building a durable black patina."
      }
    ]
  },
  {
    "slug": "space-saving-cookware-guide",
    "category": "Space-Saving & Detachable",
    "categoryKey": "space-saving-detachable",
    "title": "Modular Cooking: The Ultimate Space-Saving Cookware Guide",
    "excerpt": "How stackable cookware sets with click-off handles maximize cabinet organization in modern kitchens.",
    "heroImage": "/assets/carote_stackable_set.jpg",
    "authorName": "Sarah Jenkins",
    "authorInitials": "SJ",
    "authorRole": "Founder, Pantry & Pan",
    "readMinutes": 6,
    "publishDate": "Updated July 10, 2026",
    "sections": [
      {
        "id": "detachable-handles",
        "title": "Why detachable handles change small kitchen prep",
        "paragraphs": [
          "Eliminating long rigid handles allows pans like the CAROTE 11-Piece set to nest completely flat, saving up to 70% cabinet volume."
        ],
        "productId": "carote-11pc"
      }
    ],
    "relatedProductIds": [
      "carote-11pc",
      "caraway-12pc",
      "fullstar-veggie-chopper"
    ],
    "faqs": [
      {
        "question": "How do click-off removable handles stay secure during cooking?",
        "answer": "Removable handles use dual-action safety latches engineered to lock tightly around pan rims, supporting heavy loads up to 22 lbs without slipping."
      },
      {
        "question": "Can stackable cookware with detachable handles go into the oven?",
        "answer": "The cookware bodies are oven safe up to 480°F, but removable handles must be clicked off before placing pots or pans into the oven."
      },
      {
        "question": "How much cabinet storage space do detachable handle sets save?",
        "answer": "Nesting pots and pans flat without rigid long handles saves up to 70% of cabinet storage volume compared to traditional cookware sets."
      },
      {
        "question": "Are CAROTE detachable handle pans compatible with induction stoves?",
        "answer": "Yes, CAROTE stackable sets feature stainless steel induction bases compatible with gas, electric, ceramic, and induction cooktops."
      }
    ]
  },
  {
    "slug": "aesthetic-pantry-organization-guide",
    "category": "Pantry & Aesthetic Storage",
    "categoryKey": "aesthetic-storage",
    "title": "Aesthetic Pantry Blueprint: Glass & Bamboo Storage Solutions",
    "excerpt": "Transform open pantry shelving with borosilicate glass dispensers, silicone seals, and natural wood accents.",
    "heroImage": "/assets/glass_rice_dispenser.jpg",
    "authorName": "Dr. Elena Vance",
    "authorInitials": "EV",
    "authorRole": "Materials Researcher & Home Chef",
    "readMinutes": 8,
    "publishDate": "Updated July 28, 2026",
    "sections": [
      {
        "id": "glass-dispensers",
        "title": "Ditching Plastic Bags for Borosilicate Glass Storage",
        "paragraphs": [
          "Commercial dry rice, flour, and grain packages are typically sold in thin plastic or paper bags that absorb ambient humidity and leach microplastics into dry food over time.",
          "Transitioning to high-borosilicate glass dispensers and airtight canisters provides an inert, crystal-clear storage barrier that withstands thermal shock while keeping dry staples visible on open pantry shelving."
        ],
        "productId": "glass-rice-dispenser"
      },
      {
        "id": "weevil-defense",
        "title": "Rice Weevil & Pest Defense: Stopping Infestations Before They Start",
        "paragraphs": [
          "Grain weevils (Sitophilus oryzae) are a common headache in home pantries. Microscopic weevil eggs often exist inside commercial grain packaging and hatch when exposed to warmth, ambient oxygen, and humidity.",
          "Standard cardboard boxes and thin plastic bags offer zero protection. Storing dry rice in a heavy-duty borosilicate glass dispenser sealed with a food-grade silicone ring creates an airtight, moisture-free environment that starves pests and prevents dormant eggs from hatching."
        ],
        "productId": "vtopmart-bulk-containers"
      },
      {
        "id": "portion-yields",
        "title": "Standard Portion Metrics: How Many Meals Does a 5L Dispenser Yield?",
        "paragraphs": [
          "Understanding container volume simplifies bulk grocery shopping. A standard 5-Liter glass rice dispenser holds approximately 10 lbs (4.5 kg) of dry white or brown rice, which equals roughly 24.5 dry measuring cups.",
          "Since 1 cup of dry white rice triples into ~3 cups of cooked rice, a single filled 5L dispenser yields 73 to 75 standard 1-cup cooked meal portions. For a 2-person household eating rice daily, one full 5L dispenser provides over 5 weeks of meals."
        ],
        "productId": "joyjolt-glass-containers"
      }
    ],
    "relatedProductIds": [
      "glass-rice-dispenser",
      "joyjolt-glass-containers",
      "vtopmart-bulk-containers"
    ],
    "faqs": [
      {
        "question": "What is the difference between borosilicate glass and regular glass storage?",
        "answer": "Borosilicate glass contains boron trioxide, making it resistant to thermal shock so it can withstand rapid temperature shifts without cracking."
      },
      {
        "question": "How much dry rice fits in a 5-Liter glass dispenser?",
        "answer": "A 5-Liter glass grain dispenser holds approximately 10 lbs (4.5 kg) of dry white or brown rice, yielding 73 to 75 cooked portions."
      },
      {
        "question": "How does glass storage prevent grain weevils?",
        "answer": "Airtight borosilicate glass containers with food-grade silicone seals block ambient moisture and oxygen, preventing dormant grain weevil eggs from hatching."
      },
      {
        "question": "Are Vtopmart bulk canisters airtight enough to prevent pantry pests?",
        "answer": "Yes, Vtopmart canisters feature 4-side locking lids with thick silicone gaskets that block moisture and pantry moths."
      }
    ]
  },
  {
    "slug": "cast-iron-vs-carbon-steel-vs-enameled",
    "category": "Heirloom Iron & Carbon Steel",
    "categoryKey": "carbon-steel-woks",
    "title": "Cast Iron vs. Carbon Steel vs. Enameled: Which Heirloom Pan Is Best?",
    "excerpt": "A complete material science comparison of heat retention, seasoning care, and non-toxic searing performance across classic pan materials.",
    "heroImage": "/assets/lodge_skillet.jpg",
    "authorName": "Dr. Elena Vance",
    "authorInitials": "EV",
    "authorRole": "Materials Researcher & Home Chef",
    "readMinutes": 8,
    "publishDate": "Updated July 28, 2026",
    "sections": [
      {
        "id": "ditching-ptfe-for-heirloom-metals",
        "title": "Ditching PTFE for Lifelong Heirloom Metals",
        "paragraphs": [
          "Synthetic nonstick coatings have a short shelf life and carry risk of chemical off-gassing when overheated. In contrast, heirloom metals like raw cast iron, carbon steel, and enameled cast iron improve with age and provide lifetime non-toxic cooking.",
          "Choosing the right heirloom metal comes down to your cooking technique: raw cast iron excels at extreme heat retention, carbon steel delivers high-heat agility, and enameled cast iron provides acid-safe braising without any seasoning maintenance."
        ]
      },
      {
        "id": "raw-cast-iron-thermal-mass",
        "title": "Raw Cast Iron: Unmatched Thermal Mass & Searing Power",
        "paragraphs": [
          "Raw cast iron pans, such as the classic Lodge 10.25 Inch Skillet, possess immense thermal mass. Once heated, they hold their temperature remarkably well when cold steaks or vegetables enter the pan.",
          "Over time, cooking with natural fats creates a slick polymer patina that releases fried eggs effortlessly while completely avoiding PTFE and PFAS chemicals."
        ],
        "productId": "lodge-cast-iron-skillet"
      },
      {
        "id": "carbon-steel-lightweight-agility",
        "title": "Carbon Steel: Lightweight Agility for Stir-Frying & Eggs",
        "paragraphs": [
          "Carbon steel shares the natural seasoning chemistry of cast iron but contains less carbon, allowing it to be forged thinner and lighter. Pans like the De Buyer Mineral B carbon steel skillet heat up and cool down rapidly.",
          "This responsiveness makes carbon steel the ideal choice for high-heat wok toss cooking, French omelets, and quick searing where precise temperature control is required."
        ],
        "productId": "de-buyer-carbon-steel-pan"
      },
      {
        "id": "enameled-cast-iron-low-maintenance",
        "title": "Enameled Cast Iron: Non-Reactive Braising Without Seasoning",
        "paragraphs": [
          "For slow-simmered stews, tomato sauces, and acidic braises, vitreous enamel coatings offer the massive heat retention of cast iron without reacting to acidic ingredients.",
          "Dutch ovens like the Lodge 6-Quart Enameled Dutch Oven feature a non-porous glass glaze that requires zero seasoning and transitions seamlessly from stovetop to high-heat ovens."
        ],
        "productId": "lodge-dutch-oven"
      },
      {
        "id": "heirloom-cookware-verdict",
        "title": "The Heirloom Pan Verdict: Which Surface Belongs in Your Kitchen?",
        "paragraphs": [
          "If you want a budget-friendly indestructible pan for heavy searing, start with raw cast iron. If you prefer agile tossing and fast response, choose carbon steel like Yosukata or De Buyer. For soup and stew braises, enameled cast iron remains unbeatable."
        ],
        "productId": "yosukata-wok"
      }
    ],
    "relatedProductIds": [
      "lodge-cast-iron-skillet",
      "de-buyer-carbon-steel-pan",
      "lodge-dutch-oven",
      "yosukata-wok",
      "caraway-12pc"
    ],
    "faqs": [
      {
        "question": "Can you cook acidic foods like tomatoes in raw cast iron?",
        "answer": "Avoid cooking highly acidic dishes in raw cast iron for long periods, as acid breaks down the seasoning patina. Use enameled cast iron or stainless steel instead."
      },
      {
        "question": "How do you season a carbon steel pan for the first time?",
        "answer": "Wash off factory wax, dry thoroughly, apply a thin coat of high-smoke-point oil, and heat on the stovetop until the metal turns dark brown or blue-black."
      },
      {
        "question": "Is carbon steel lighter than cast iron?",
        "answer": "Yes, carbon steel is 40% to 50% lighter than traditional cast iron because carbon steel can be forged thinner while retaining strength."
      },
      {
        "question": "Can enameled cast iron go in the oven at high heat?",
        "answer": "High-quality enameled cast iron is oven safe up to 500°F (260°C). Check phenolic handle knobs, which should be upgraded to stainless steel for high heat."
      }
    ]
  },
  {
    "slug": "plastic-free-sunday-meal-prep-workflow",
    "category": "Pantry & Aesthetic Storage",
    "categoryKey": "aesthetic-storage",
    "title": "The Plastic-Free Sunday Meal Prep Workflow",
    "excerpt": "How to build a streamlined weekend batch cooking system using borosilicate glass, platinum silicone, and precision prep tools.",
    "heroImage": "/assets/joyjolt_glass_containers.jpg",
    "authorName": "Sarah Jenkins",
    "authorInitials": "SJ",
    "authorRole": "Founder, Pantry & Pan",
    "readMinutes": 7,
    "publishDate": "Updated July 28, 2026",
    "sections": [
      {
        "id": "microplastics-in-kitchen-prep",
        "title": "The Microplastics Hazard: Why Heating Food in Plastic Is Risky",
        "paragraphs": [
          "Reheating meals in soft plastic Tupperware accelerates chemical migration and microplastic shed directly into hot foods. Eliminating synthetic storage containers is one of the most effective non-toxic swaps a household can make.",
          "By organizing a dedicated Sunday meal prep workflow centered on high-durability glass, stainless steel, and food-grade silicone, you keep prep clean while saving hours during busy weeknights."
        ]
      },
      {
        "id": "rapid-prep-chopping-station",
        "title": "Station 1: Rapid Prep, Uniform Dicing, and Controlled Misting",
        "paragraphs": [
          "Vegetable prep is often the main bottleneck in meal prepping. Multi-blade tools like the Fullstar 4-in-1 Chopper dice onions, peppers, and zucchini in seconds into uniform pieces that cook evenly.",
          "Pairing your prep station with a refillable glass oil mister allows precise oil coating over sheet pans without relying on propellant-laden commercial cooking sprays."
        ],
        "productId": "fullstar-veggie-chopper"
      },
      {
        "id": "batch-cooking-and-portioning",
        "title": "Station 2: Non-Toxic Batch Cooking & Precision Portioning",
        "paragraphs": [
          "When mixing dressings, sauces, and grain bases, switch to tempered borosilicate glass measuring cups like Pyrex. They withstand boiling liquids without leaching chemicals or absorbing food odors.",
          "Distribute batch-cooked grains and roasted vegetables into equal portions while hot, ensuring rapid cooling and safe food storage."
        ],
        "productId": "pyrex-glass-measuring-cups"
      },
      {
        "id": "airtight-cold-storage-solutions",
        "title": "Station 3: Airtight Glass & Platinum Silicone Cold Storage",
        "paragraphs": [
          "Store cooked proteins and roasted vegetables in JoyJolt JoyFul borosilicate glass containers with leakproof silicone seals. Glass body containers transition directly from fridge to oven or microwave safely.",
          "For cut fruits, snacks, and liquid marinades, platinum silicone bags like Stasher offer an airtight, reusable plastic-baggie alternative that stands up to dishwasher washing."
        ],
        "productId": "joyjolt-glass-containers"
      }
    ],
    "relatedProductIds": [
      "joyjolt-glass-containers",
      "fullstar-veggie-chopper",
      "glass-oil-sprayer",
      "stasher-silicone-bags",
      "pyrex-glass-measuring-cups"
    ],
    "faqs": [
      {
        "question": "Is borosilicate glass safer for food prep than tempered glass?",
        "answer": "Borosilicate glass offers superior thermal shock resistance, allowing transitions from freezer to preheated 400°F oven without cracking."
      },
      {
        "question": "Are platinum silicone storage bags truly non-toxic?",
        "answer": "Yes, 100% platinum food-grade silicone contains zero BPA, BPS, phthalates, or microplastics and does not leach under microwave heating."
      },
      {
        "question": "How long does batch-cooked food stay fresh in glass containers?",
        "answer": "Meals stored in borosilicate glass containers with airtight silicone snap lids stay fresh for 4 to 5 days in the fridge or up to 3 months frozen."
      },
      {
        "question": "Can glass meal prep containers go in the freezer?",
        "answer": "Yes, borosilicate glass containers are freezer safe. Leave 0.5 inches of headspace for food expansion when freezing liquids."
      }
    ]
  },
  {
    "slug": "ceramic-granite-stone-cookware-explained",
    "category": "Non-Toxic Ceramic & Clay",
    "categoryKey": "ceramic-clay",
    "title": "Ceramic, Granite, and Stone Cookware Explained: A Non-Toxic Safety Audit",
    "excerpt": "Decoding marketing buzzwords, speckled coatings, and true sol-gel silica ceramic safety so you can audit your kitchen with confidence.",
    "heroImage": "/assets/caraway_12pc_set.jpg",
    "authorName": "Dr. Elena Vance",
    "authorInitials": "EV",
    "authorRole": "Materials Researcher & Home Chef",
    "readMinutes": 9,
    "publishDate": "Updated July 28, 2026",
    "sections": [
      {
        "id": "what-is-sol-gel-ceramic",
        "title": "What Is Sol-Gel Ceramic Cookware?",
        "paragraphs": [
          "True ceramic nonstick coatings are derived from natural sand and processed through a sol-gel solution into a glass-like silica surface. Unlike traditional nonstick, mineral ceramics require no PFAS, PTFE, PFOA, or toxic binders.",
          "When subjected to high cooking temperatures, mineral ceramic glazes emit zero chemical fumes, making them the safest nonstick option for everyday cooking."
        ]
      },
      {
        "id": "the-granite-and-stone-illusion",
        "title": "The Granite and Stone Marketing Illusion",
        "paragraphs": [
          "Many cookware brands use terms like 'granite' or 'stone' purely as aesthetic descriptors. In many cases, these pans are standard aluminum skillets finished with a decorative speckled pattern over traditional PTFE nonstick.",
          "To ensure your cookware is genuinely toxin-free, always look for explicit 'PTFE-Free' and 'PFAS-Free' certifications rather than relying on stone-themed product names."
        ],
        "productId": "sensarte-granite"
      },
      {
        "id": "uncoated-stainless-steel-alternative",
        "title": "Uncoated Stainless Steel: The Indestructible Alternative",
        "paragraphs": [
          "For home cooks seeking a pan that never wears out, 3-ply stainless steel like the All-Clad D3 Frying Pan provides a completely inert, non-reactive cooking surface.",
          "By preheating your stainless skillet properly, you can achieve natural food release for meats and vegetables without relying on synthetic or delicate surface glazes."
        ],
        "productId": "all-clad-d3-skillet"
      },
      {
        "id": "safe-utensils-for-delicate-coatings",
        "title": "Protecting Your Glaze: Organic Utensil Rules",
        "paragraphs": [
          "To preserve the nonstick slickness of ceramic glazes, avoid metal spatulas and harsh abrasives that can cause microscopic surface micro-scratches.",
          "Using organic bamboo utensils like the Totally Bamboo 6-Piece Set or food-grade silicone tools ensures smooth flipping while protecting pan longevity."
        ],
        "productId": "totally-bamboo-utensils"
      },
      {
        "id": "cookware-audit-checklist",
        "title": "The 4-Point Kitchen Cookware Audit Checklist",
        "paragraphs": [
          "Auditing your kitchen is straightforward: verify zero PTFE/PFAS certifications, check for chipped or flaking surfaces, switch to non-scratch utensils, and choose proven brands like Caraway or GreenPan Valencia Pro."
        ],
        "productId": "greenpan-valencia"
      }
    ],
    "relatedProductIds": [
      "caraway-12pc",
      "greenpan-valencia",
      "sensarte-granite",
      "all-clad-d3-skillet",
      "totally-bamboo-utensils"
    ],
    "faqs": [
      {
        "question": "Is granite cookware safe and non-toxic?",
        "answer": "Check certifications. Many pans labeled 'granite' are aluminum skillets with decorative speckled PTFE finishes. Look explicitly for PTFE-free and PFAS-free labels."
      },
      {
        "question": "What is sol-gel ceramic cookware made of?",
        "answer": "Sol-gel ceramic cookware is made from sand-derived silica transformed into a smooth glass-like mineral glaze through a liquid gel process."
      },
      {
        "question": "Do ceramic nonstick pans lose their slickness over time?",
        "answer": "Mineral ceramics maintain slickness when cooked on low-to-medium heat and hand washed with soft sponges. High heat accelerates wear."
      },
      {
        "question": "Why avoid aerosol cooking sprays on ceramic pans?",
        "answer": "Aerosol sprays contain chemical propellants that bake onto ceramic glazes, forming an invisible residue that destroys nonstick release."
      }
    ]
  },
  {
    "slug": "space-saving-minimalist-baker",
    "category": "Space-Saving & Detachable",
    "categoryKey": "space-saving-detachable",
    "title": "The Space-Saving Minimalist Baker: Non-Toxic Oven Essentials",
    "excerpt": "Streamline your baking setup with non-toxic ceramic sheets, reusable silicone baking mats, and compact nesting organizers.",
    "heroImage": "/assets/caraway_bakeware_set.jpg",
    "authorName": "Sarah Jenkins",
    "authorInitials": "SJ",
    "authorRole": "Founder, Pantry & Pan",
    "readMinutes": 7,
    "publishDate": "Updated July 28, 2026",
    "sections": [
      {
        "id": "the-problem-with-flaking-bakeware",
        "title": "The Problem with Traditional Flaking Bakeware",
        "paragraphs": [
          "Conventional baking sheets often feature cheap dark coatings that warp under high heat and flake synthetic particles into baked goods over time.",
          "Upgrading to non-toxic mineral ceramic baking sheets and platinum silicone mats ensures even heat distribution, easy cookie release, and zero chemical transfer."
        ]
      },
      {
        "id": "ceramic-bakeware-sets",
        "title": "Non-Toxic Ceramic Bakeware: Complete Oven Safety",
        "paragraphs": [
          "The Caraway 11-Piece Ceramic Bakeware Set features an eco-friendly mineral glaze completely free of PFAS, PTFE, and heavy metals. Its aluminized steel core prevents warping up to 550°F.",
          "Designed for minimalist kitchens, the set includes custom magnetic organizers that hold baking sheets and muffin pans upright inside standard lower cabinets."
        ],
        "productId": "caraway-bakeware-set"
      },
      {
        "id": "reusable-silicone-baking-mats",
        "title": "Ditching Parchment for Reusable Silicone Mats",
        "paragraphs": [
          "Eliminate single-use parchment paper rolls by pairing your cookie sheets with reusable Silpat silicone baking mats. Made from fiberglass mesh and food-grade silicone, they withstand temperatures up to 500°F.",
          "Silpat mats deliver effortless release for delicate pastries, roasted vegetables, and sticky sugar work without requiring added oil spray or butter."
        ],
        "productId": "silpat-baking-mat"
      },
      {
        "id": "frozen-dessert-alternative-prep",
        "title": "Minimalist Dessert Prep Without a Full Oven",
        "paragraphs": [
          "You do not always need a preheated oven to craft wholesome treats. High-efficiency appliances like the Ninja CREAMi let you turn frozen fruit and almond milk into silky sorbets and ice cream in minutes."
        ],
        "productId": "ninja-creami"
      }
    ],
    "relatedProductIds": [
      "caraway-bakeware-set",
      "silpat-baking-mat",
      "ninja-creami",
      "joyjolt-glass-containers"
    ],
    "faqs": [
      {
        "question": "Are traditional nonstick baking sheets safe at high heat?",
        "answer": "PTFE nonstick baking sheets degrade above 500°F. Mineral ceramic baking sheets and aluminized steel provide safe high-heat baking up to 550°F."
      },
      {
        "question": "What temperature are Silpat silicone baking mats rated for?",
        "answer": "Silpat premium silicone baking mats are rated from -40°F to 500°F (-40°C to 260°C), making them safe for freezer prep and oven baking."
      },
      {
        "question": "How do stackable bakeware sets save storage space?",
        "answer": "Modular ceramic bakeware sets include vertical magnetic storage racks that hold baking sheets upright inside cabinets, saving 60% shelf volume."
      },
      {
        "question": "Do silicone baking mats eliminate parchment paper?",
        "answer": "Yes, food-grade silicone mats provide a nonstick surface requiring no parchment paper, butter, or oil spray for cookie release."
      }
    ]
  }
];

export function getGuide(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}

export function getGuideBySlug(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}

export type SearchResult =
  | { kind: "product"; id: string; title: string; sub: string }
  | { kind: "guide"; slug: string; title: string; sub: string };

export function searchAll(q: string): SearchResult[] {
  const query = q.trim().toLowerCase();
  if (!query) return [];
  const results: SearchResult[] = [];
  for (const p of PRODUCTS) {
    if (
      p.title.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.badge.toLowerCase().includes(query)
    ) {
      results.push({
        kind: "product",
        id: p.id,
        title: p.title,
        sub: p.category,
      });
    }
  }
  for (const g of GUIDES) {
    if (
      g.title.toLowerCase().includes(query) ||
      g.excerpt.toLowerCase().includes(query) ||
      g.category.toLowerCase().includes(query)
    ) {
      results.push({
        kind: "guide",
        slug: g.slug,
        title: g.title,
        sub: g.category,
      });
    }
  }
  return results.slice(0, 12);
}
