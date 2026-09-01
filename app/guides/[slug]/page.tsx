import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getWPGuideBySlug, getWPGuides } from "@/lib/wordpress";
import { JsonLd } from "@/components/seo/JsonLd";
import { GuideArticleClient } from "./GuideArticleClient";

export async function generateStaticParams() {
  const guides = await getWPGuides();
  return guides.map((g) => ({
    slug: g.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = await getWPGuideBySlug(slug);
  if (!g) {
    return { title: "Guide not found : Pantry & Pan" };
  }
  const cleanTitle = g.title.replace(/\s*:\s*Pantry\s*&\s*Pan$/i, "").trim();
  return {
    title: `${cleanTitle} : Pantry & Pan`,
    description: g.excerpt,
    alternates: {
      canonical: `https://pantryandpan.com/guides/${g.slug}`,
    },
    openGraph: {
      title: cleanTitle,
      description: g.excerpt,
      type: "article",
      images: [
        {
          url: `https://pantryandpan.com${g.heroImage}`,
          width: 1200,
          height: 630,
          alt: cleanTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description: g.excerpt,
      images: [`https://pantryandpan.com${g.heroImage}`],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = await getWPGuideBySlug(slug);

  if (!g) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.excerpt,
    image: `https://pantryandpan.com${g.heroImage}`,
    datePublished: new Date(g.publishDate.replace(/^Updated\s+/i, "")).toISOString(),
    dateModified: new Date(g.publishDate.replace(/^Updated\s+/i, "")).toISOString(),
    author: {
      "@type": "Person",
      name: g.authorName,
      jobTitle: g.authorRole,
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://pantryandpan.com/#organization",
      name: "Pantry & Pan",
      logo: {
        "@type": "ImageObject",
        url: "https://pantryandpan.com/pantry_and_pan_logo.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pantryandpan.com/guides/${g.slug}`,
    },
  };

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
        name: "Guides",
        item: "https://pantryandpan.com/guides",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: g.title,
        item: `https://pantryandpan.com/guides/${g.slug}`,
      },
    ],
  };

  const faqSchema = g.faqs && g.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: g.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  } : null;

  const PANTRY_TOOL_SLUGS = [
    "aesthetic-pantry-organization-guide",
    "best-airtight-rice-dispensers-pantry-storage",
    "plastic-free-sunday-meal-prep-workflow",
  ];

  const PAN_QUIZ_SLUGS = [
    "cast-iron-vs-carbon-steel-vs-enameled",
    "wok-cooking-toxin-free",
  ];

  const DECODER_SLUGS = [
    "ceramic-granite-stone-cookware-explained",
    "non-toxic-kitchen-blueprint",
    "clean-morning-rituals",
    "greenpan-valencia-vs-caraway",
    "best-caraway-pan-alternatives-under-100",
    "is-hexclad-worth-it-non-toxic-audit",
    "made-in-ceramic-vs-caraway",
    "greenpan-valencia-vs-carote-ceramic",
    "carote-vs-tefal-ingenio-detachable",
    "is-carote-stackable-cookware-safe",
    "sensarte-granite-vs-carote-ceramic",
  ];

  const SPACE_SAVING_SLUGS = [
    "space-saving-cookware-guide",
    "carote-vs-tefal-ingenio-detachable",
    "is-carote-stackable-cookware-safe",
    "best-space-saving-cookware-for-rvs-small-kitchens",
  ];

  const toolSchema = PANTRY_TOOL_SLUGS.includes(g.slug) ? {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pantry Storage & Container Capacity Matcher",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    description: "Calculates required container volume in liters and quarts for dry staples (rice, flour, sugar, oats, coffee) and recommends matching non-toxic storage containers.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  } : null;

  const panQuizSchema = PAN_QUIZ_SLUGS.includes(g.slug) ? {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Heirloom Pan Match & Weight Selector",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    description: "Interactive decision framework matching home chefs to carbon steel, raw cast iron, or enameled cast iron based on cooking habits, weight preference, and maintenance.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  } : null;

  const decoderSchema = DECODER_SLUGS.includes(g.slug) ? {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Is My Pan Safe? Non-Toxic Marketing Decoder & Safety Audit",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    description: "Interactive cookware coating audit tool that decodes nonstick marketing labels, calculates chemical off-gassing temperature thresholds, and provides non-toxic pan swaps.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  } : null;

  const OIL_SPRAYER_SLUGS = [
    "multifunctional-kitchen-gadgets-guide",
    "best-glass-oil-sprayer-misters-for-cooking",
  ];

  const oilSprayerSchema = OIL_SPRAYER_SLUGS.includes(g.slug) ? {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Air Fryer Oil Spray vs. Chemical Aerosol Savings Calculator",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    description: "Calculates annual money saved, aerosol cans eliminated, and chemical propellants avoided by switching from aerosol cans to a refillable glass oil mister.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  } : null;

  const spaceSavingSchema = SPACE_SAVING_SLUGS.includes(g.slug) ? {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Kitchen Cabinet Volume & Space Savings Calculator",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    description: "Calculates cabinet storage space saved and nested stack heights comparing traditional fixed-handle pans against stackable click-handle sets.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  } : null;

  const allGuides = await getWPGuides();
  const sameCategory = allGuides.filter(
    (o) => o.slug !== g.slug && o.categoryKey && g.categoryKey && o.categoryKey === g.categoryKey
  );
  const otherCategory = allGuides.filter(
    (o) => o.slug !== g.slug && (!g.categoryKey || o.categoryKey !== g.categoryKey)
  );
  const relatedGuides = [...sameCategory, ...otherCategory].slice(0, 3);

  const schemas: Array<Record<string, unknown>> = [articleSchema, breadcrumbSchema];
  if (faqSchema) schemas.push(faqSchema);
  if (toolSchema) schemas.push(toolSchema);
  if (panQuizSchema) schemas.push(panQuizSchema);
  if (decoderSchema) schemas.push(decoderSchema);
  if (oilSprayerSchema) schemas.push(oilSprayerSchema);
  if (spaceSavingSchema) schemas.push(spaceSavingSchema);

  return (
    <>
      <JsonLd data={schemas} />
      <GuideArticleClient guide={g} relatedGuides={relatedGuides} />
    </>
  );
}
