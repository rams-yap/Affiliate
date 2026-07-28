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

  const schemas: Array<Record<string, unknown>> = [articleSchema, breadcrumbSchema];
  if (faqSchema) schemas.push(faqSchema);

  return (
    <>
      <JsonLd data={schemas} />
      <GuideArticleClient guide={g} />
    </>
  );
}
