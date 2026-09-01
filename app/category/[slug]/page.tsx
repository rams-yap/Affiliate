import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ChevronRight, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, BookOpen, Clock } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProductCard } from "@/components/site/ProductCard";
import { SageBadge } from "@/components/site/SageBadge";
import { CATEGORIES, PRODUCTS, type CategoryKey } from "@/lib/catalog";
import { getWPGuides } from "@/lib/wordpress";

const CATEGORY_DETAILS: Record<
  CategoryKey,
  {
    title: string;
    tagline: string;
    description: string;
    vettingPoints: string[];
    faq: { question: string; answer: string }[];
  }
> = {
  "all-essentials": {
    title: "All Non-Toxic & Aesthetic Essentials",
    tagline: "Our Master Collection of Vetted Kitchenware",
    description:
      "Explore every piece in our independent catalog: from hand-forged carbon steel woks to mineral ceramic pans and stackable space-saving sets. Every item is verified 100% free from PFAS, lead, and toxic synthetic sealants.",
    vettingPoints: [
      "Zero synthetic PFAS, PFOA, or PTFE non-stick coatings",
      "Lab-tested heavy metal safety (lead & cadmium free)",
      "Built from renewable or recyclable materials (glass, bamboo, steel, clay)",
    ],
    faq: [
      {
        question: "How are products selected for the All Essentials catalog?",
        answer:
          "We rigorously test cookware and storage pieces for chemical purity, durability under daily high-heat cooking, and aesthetic appeal in open kitchen shelving.",
      },
      {
        question: "Are these items dishwasher safe?",
        answer:
          "Cast iron, carbon steel, and natural wood require hand-washing, while our glass jars and stainless components are dishwasher-safe.",
      },
    ],
  },
  "ceramic-clay": {
    title: "Non-Toxic Ceramic & Clay",
    tagline: "Mineral Coating Safety & Chemical-Free Searing",
    description:
      "Curated non-toxic ceramic skillets and mineral-glazed pots designed for clean heat distribution without chemical off-gassing at high temperatures.",
    vettingPoints: [
      "Thermolon and mineral ceramic technology free of Teflon or GenX",
      "Oven-safe durability up to 550°F+",
      "Ergonomic stay-cool handles and heavy-gauge construction",
    ],
    faq: [
      {
        question: "Why avoid traditional non-stick cookware?",
        answer:
          "Traditional PTFE coatings can degrade at high temperatures (over 500°F), releasing toxic fumes linked to health risks. Non-toxic ceramic coatings offer safe alternative cooking surfaces.",
      },
    ],
  },
  "carbon-steel-woks": {
    title: "Heirloom Iron & Carbon Steel",
    tagline: "High-Heat Stir Fry & Lifetime Searing",
    description:
      "Hand-treated carbon steel woks and enameled cast iron Dutch ovens that develop a natural non-stick patina, lasting generations without chemical coatings.",
    vettingPoints: [
      "Pure carbon steel & porcelain enamel with zero synthetic sealants",
      "Superior heat response and high-heat searing capability",
      "Induction, gas, and open-fire compatible",
    ],
    faq: [
      {
        question: "How do I care for carbon steel woks and skillets?",
        answer:
          "Wash with hot water and a soft brush, dry immediately over medium heat on your stovetop, and apply a drop of high-smoke-point oil after every use.",
      },
    ],
  },
  "space-saving-detachable": {
    title: "Space-Saving & Detachable",
    tagline: "Modular Stackable Sets for Modern Kitchens",
    description:
      "Innovative cookware sets featuring removable click-handles that save up to 70% cabinet storage space while transitioning seamlessly from stovetop to oven to fridge.",
    vettingPoints: [
      "Click-off safety handles tested for heavy load capacity",
      "Tightly nesting pan profiles eliminate cabinet clutter",
      "Non-toxic granite ceramic nonstick interiors",
    ],
    faq: [
      {
        question: "Are removable handles oven-safe?",
        answer:
          "Always detach the removable handle before placing your cookware inside a high-temperature oven. The pan body itself is oven-safe up to 480°F+.",
      },
    ],
  },
  "aesthetic-storage": {
    title: "Pantry & Aesthetic Storage",
    tagline: "Sustainable Organization for Open Pantry Shelving",
    description:
      "Borosilicate glass dispensers, bamboo-lidded jars, and stainless containers engineered to keep dry ingredients fresh while elevating kitchen visual design.",
    vettingPoints: [
      "High-clarity borosilicate glass with silicone moisture-lock gaskets",
      "Sustainably harvested bamboo and food-safe wood covers",
      "Zero plastic leaching for long-term dry ingredient storage",
    ],
    faq: [
      {
        question: "Are glass rice dispensers safe for heavy grains?",
        answer:
          "Yes, our recommended dispensers feature ultra-thick borosilicate glass and reinforced bamboo wooden stands designed for 5kg-10kg capacities.",
      },
    ],
  },
  "multifunctional-gadgets": {
    title: "Multi-Functional Cooking Gadgets",
    tagline: "Time-Saving & Health-Conscious Kitchen Innovations",
    description:
      "Versatile, high-efficiency appliances and prep tools engineered to cut meal prep time, eliminate chemical aerosol cans, and customize healthy foods effortlessly.",
    vettingPoints: [
      "BPA-free & food-grade materials on all food-contact surfaces",
      "Multi-purpose design reducing single-use kitchen clutter",
      "Heavy-duty stainless steel blades and high-efficiency motors",
    ],
    faq: [
      {
        question: "Why switch to a 2-in-1 glass oil mister?",
        answer:
          "Commercial cooking spray cans contain synthetic propellants and chemical anti-foaming agents. Refillable glass mister bottles use pure avocado or olive oil with zero additives.",
      },
    ],
  },
};

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({
    slug: c.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categoryKey = slug as CategoryKey;
  const categoryInfo = CATEGORY_DETAILS[categoryKey];
  if (!categoryInfo) {
    return { title: "Category Not Found · Pantry & Pan" };
  }
  return {
    title: `${categoryInfo.title} : Pantry & Pan`,
    description: categoryInfo.description,
    alternates: {
      canonical: `https://pantryandpan.com/category/${slug}`,
    },
    openGraph: {
      title: categoryInfo.title,
      description: categoryInfo.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryKey = slug as CategoryKey;
  const categoryInfo = CATEGORY_DETAILS[categoryKey];
  const categoryObj = CATEGORIES.find((c) => c.key === categoryKey || c.slug === categoryKey);

  if (!categoryInfo || !categoryObj) {
    notFound();
  }

  const products =
    categoryKey === "all-essentials"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.categoryKey === categoryKey);

  const allPublishedGuides = await getWPGuides();
  const categoryGuides = allPublishedGuides.filter(
    (g) => g.categoryKey === categoryKey || (categoryKey === "all-essentials" ? true : false)
  );
  const relatedGuides = categoryGuides.length > 0 ? categoryGuides : allPublishedGuides.slice(0, 2);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: categoryInfo.title,
    description: categoryInfo.description,
    url: `https://pantryandpan.com/category/${categoryObj.slug}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://pantryandpan.com/product/${item.id}`,
        name: item.title,
        image: `https://pantryandpan.com${item.image}`,
      })),
    },
  };

  const faqSchema =
    categoryInfo.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: categoryInfo.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pantryandpan.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryObj.label,
        item: `https://pantryandpan.com/category/${categoryObj.slug}`,
      },
    ],
  };

  const schemaList: Record<string, unknown>[] = [collectionSchema, breadcrumbSchema];
  if (faqSchema) schemaList.push(faqSchema);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
      <JsonLd data={schemaList} />
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
        <Link href="/" className="hover:text-terracotta">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
        <span className="text-foreground">{categoryObj.label}</span>
      </nav>

      {/* Header Hero Banner */}
      <header className="mb-12 rounded-3xl border border-hairline bg-surface p-8 sm:p-12 soft-shadow">
        <div className="w-full lg:max-w-[calc(100%-300px)]">
          <SageBadge variant="default">Pantry & Pan Curation</SageBadge>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {categoryInfo.title}
          </h1>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
            {categoryInfo.tagline}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {categoryInfo.description}
          </p>
        </div>
      </header>

      {/* Category Tabs Bar */}
      <div className="mb-10 flex items-center justify-between gap-4 border-b border-hairline pb-4 overflow-x-auto">
        <div className="flex items-center gap-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.key}
              href={`/category/${c.slug}`}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                c.key === categoryKey
                  ? "bg-terracotta text-terracotta-foreground shadow-sm"
                  : "bg-surface border border-hairline text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {c.label}
            </Link>
          ))}
        </div>
        <span className="hidden text-xs font-semibold text-muted-foreground md:inline">
          {products.length} {products.length === 1 ? "Product" : "Products"} Vetted
        </span>
      </div>

      {/* Product Grid */}
      <section className="mb-16">
        <h2 className="mb-6 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Vetted {categoryObj.label} Selection
        </h2>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} p={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-hairline bg-surface p-10 text-center">
            <p className="text-base text-muted-foreground">
              We are currently lab-testing new products for this category. Check back soon for updated recommendations!
            </p>
          </div>
        )}
      </section>

      {/* Vetting Criteria Card */}
      <section className="mb-16 grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl border border-hairline bg-surface p-8 soft-shadow lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-sage/15 text-sage">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Our {categoryObj.label} Vetting Standard
              </h3>
              <p className="text-xs font-medium text-muted-foreground">Zero Compromise Chemical Safety</p>
            </div>
          </div>

          <ul className="mt-6 space-y-4">
            {categoryInfo.vettingPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between rounded-3xl border border-hairline bg-surface-tint p-8">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/15 px-3 py-1 text-xs font-bold text-amber">
              <Sparkles className="h-3.5 w-3.5" /> Editorial Buyers Note
            </span>
            <h4 className="mt-4 font-display text-lg font-semibold text-foreground">
              Looking for detailed test results?
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Read our in-depth lab testing methodologies and long-term patina wear guides written by home chefs.
            </p>
          </div>

          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:underline"
          >
            How We Test Non-Toxic Gear <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      {categoryInfo.faq.length > 0 && (
        <section className="mb-16 rounded-3xl border border-hairline bg-surface p-8 sm:p-10">
          <h3 className="font-display text-2xl font-semibold text-foreground">
            Frequently Asked Questions: {categoryObj.label}
          </h3>
          <div className="mt-6 space-y-6">
            {categoryInfo.faq.map((item, idx) => (
              <div key={idx} className="border-b border-hairline pb-6 last:border-0 last:pb-0">
                <h4 className="font-semibold text-foreground text-base">{item.question}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* From The Guides Section (Placed After FAQ) */}
      <section className="mb-16">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              From the Guides
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Related Reading & Editorial Blueprints for {categoryObj.label}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {relatedGuides.map((guide) => (
            <article
              key={guide.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-hairline bg-surface p-6 soft-shadow transition-all duration-300 hover:-translate-y-1 hover:soft-shadow-md"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-terracotta mb-3">
                <BookOpen className="h-4 w-4" />
                <span>{guide.category}</span>
                <span>·</span>
                <Clock className="h-3.5 w-3.5" />
                <span>{guide.readMinutes} min read</span>
              </div>

              <Link
                href={`/guides/${guide.slug}`}
                className="font-display text-xl font-semibold leading-snug text-foreground group-hover:underline decoration-terracotta/40 underline-offset-4"
              >
                {guide.title}
              </Link>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {guide.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4 text-xs">
                <span className="font-semibold text-foreground">By {guide.authorName}</span>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-terracotta hover:underline"
                >
                  Read Guide <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
