import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getGuide, GUIDES } from "@/lib/catalog";
import { JsonLd } from "@/components/seo/JsonLd";
import { GuideArticleClient } from "./GuideArticleClient";

export function generateStaticParams() {
  return GUIDES.map((g) => ({
    slug: g.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) {
    return { title: "Guide not found : Pantry & Pan" };
  }
  return {
    title: `${g.title} : Pantry & Pan`,
    description: g.excerpt,
    alternates: {
      canonical: `https://pantryandpan.com/guides/${g.slug}`,
    },
    openGraph: {
      title: g.title,
      description: g.excerpt,
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = getGuide(slug);

  if (!g) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.excerpt,
    image: `https://pantryandpan.com${g.heroImage}`,
    datePublished: "2026-07-27T00:00:00+00:00",
    dateModified: "2026-07-27T00:00:00+00:00",
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

  const toolSchema = g.slug === "aesthetic-pantry-organization-guide" ? {
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

  const panQuizSchema = (g.slug === "cast-iron-vs-carbon-steel-vs-enameled" || g.slug === "wok-cooking-toxin-free") ? {
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

  const decoderSchema = (g.slug === "ceramic-granite-stone-cookware-explained" || g.slug === "non-toxic-kitchen-blueprint" || g.slug === "clean-morning-rituals") ? {
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

  const oilSprayerSchema = g.slug === "multifunctional-kitchen-gadgets-guide" ? {
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

  const spaceSavingSchema = g.slug === "space-saving-cookware-guide" ? {
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
      <GuideArticleClient guide={g} />
    </>
  );
}
