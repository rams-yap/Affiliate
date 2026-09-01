import type { MetadataRoute } from "next";
import { CATEGORIES, PRODUCTS } from "@/lib/catalog";
import { getWPGuides } from "@/lib/wordpress";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://pantryandpan.com";

  // Fixed baseline date for truly static pages
  const staticSiteDate = new Date("2026-08-01T00:00:00Z");

  const publishedGuides = await getWPGuides();

  // Helper to safely parse dates into valid Date objects
  const parseGuideDate = (rawDate?: string, publishDate?: string): Date => {
    if (rawDate) {
      // Append 'Z' if ISO string lacks timezone specifier
      const formattedIso = rawDate.endsWith("Z") || rawDate.includes("+") ? rawDate : `${rawDate}Z`;
      const d = new Date(formattedIso);
      if (!isNaN(d.getTime())) return d;
    }
    if (publishDate) {
      const parsed = new Date(publishDate.replace(/^Updated\s+/i, ""));
      if (!isNaN(parsed.getTime())) return parsed;
    }
    return staticSiteDate;
  };

  // 1. Static Core Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(), // Homepage updates daily as new articles feature
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: staticSiteDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticSiteDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // 2. Dynamic Category Pages (lastmod = newest article date in category)
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => {
    const categoryArticles = publishedGuides.filter(
      (g) => g.categoryKey === cat.key || g.category === cat.label
    );

    let latestCategoryDate = staticSiteDate;
    if (categoryArticles.length > 0) {
      const timestamps = categoryArticles
        .map((g) => parseGuideDate(g.rawDate, g.publishDate).getTime())
        .filter((ts) => !isNaN(ts));
      if (timestamps.length > 0) {
        latestCategoryDate = new Date(Math.max(...timestamps));
      }
    }

    return {
      url: `${baseUrl}/category/${cat.slug}`,
      lastModified: latestCategoryDate,
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  // 3. Articles / Guides (lastmod = exact WP post publish/modified timestamp)
  const guidePages: MetadataRoute.Sitemap = publishedGuides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: parseGuideDate(guide.rawDate, guide.publishDate),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 4. Product Pages
  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((prod) => ({
    url: `${baseUrl}/product/${prod.id}`,
    lastModified: staticSiteDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...guidePages, ...productPages];
}
