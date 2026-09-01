import { Article, GUIDES, getPublishedGuides, isGuidePublished } from "./catalog";

export interface WPPostACF {
  hero_image?: string;
  author_name?: string;
  author_initials?: string;
  author_role?: string;
  read_minutes?: number;
  related_product_ids?: string;
  sections?: Array<{
    id: string;
    title: string;
    paragraphs: string;
    product_id?: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  seo_title?: string;
  seo_description?: string;
}

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  date_gmt: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  acf?: WPPostACF;
}

const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://pap.ramsyap.com/wp-json/wp/v2";

/**
 * Helper to execute fetch with 3x exponential backoff retry.
 */
async function fetchWithRetry(url: string, retries = 3, delay = 500): Promise<Response> {
  try {
    // Force Node environment to accept cPanel SSL intermediate certificates during build
    if (typeof process !== "undefined" && process.env) {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    return res;
  } catch (err) {
    if (retries <= 1) throw err;
    await new Promise((resolve) => setTimeout(resolve, delay));
    return fetchWithRetry(url, retries - 1, delay * 2);
  }
}

function decodeHTMLEntities(str: string): string {
  if (!str) return "";
  return str
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "-");
}

/**
 * Transforms a Headless WP REST API Post into internal Article type.
 */
function transformWPPostToArticle(post: WPPost): Article {
  const acf = post.acf || {};
  const localGuide = GUIDES.find((g) => g.slug === post.slug);
  
  // Format publishDate cleanly from WP post.date (YYYY-MM-DD...) without timezone shifting
  let formattedDate = "";
  if (post.date) {
    const rawDateStr = post.date.split("T")[0]; // "2026-08-04"
    const [year, month, day] = rawDateStr.split("-").map(Number);
    if (year && month && day) {
      const dummyDate = new Date(year, month - 1, day);
      formattedDate = dummyDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }
  }
  if (!formattedDate) {
    formattedDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  const relatedProducts = typeof acf.related_product_ids === "string" && acf.related_product_ids.trim()
    ? acf.related_product_ids.split(",").map((s) => s.trim()).filter(Boolean)
    : (localGuide?.relatedProductIds || []);

  let sections = (acf.sections || []).map((sec) => ({
    id: sec.id,
    title: sec.title,
    paragraphs: typeof sec.paragraphs === "string" 
      ? sec.paragraphs.split("\n\n").map((p) => p.trim()).filter(Boolean)
      : [],
    ...(sec.product_id ? { productId: sec.product_id } : {}),
  }));

  if (sections.length === 0 && localGuide?.sections) {
    sections = localGuide.sections;
  }

  let faqs = (acf.faqs || []).map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  if (faqs.length === 0 && localGuide?.faqs) {
    faqs = localGuide.faqs;
  }

  // Ensure title is clean without duplicate ': Pantry & Pan' suffix and decode HTML entities
  const rawTitle = post.title?.rendered || localGuide?.title || "Untitled Guide";
  const cleanTitle = decodeHTMLEntities(rawTitle.replace(/\s*:\s*Pantry\s*&\s*Pan$/i, "").trim());
  const cleanExcerpt = decodeHTMLEntities(acf.seo_description || post.excerpt?.rendered?.replace(/<[^>]+>/g, "").trim() || localGuide?.excerpt || "");

  return {
    slug: post.slug,
    category: localGuide?.category || "Guides",
    categoryKey: localGuide?.categoryKey,
    title: cleanTitle,
    excerpt: cleanExcerpt,
    heroImage: acf.hero_image || localGuide?.heroImage || "/assets/about_hero_tabletop.jpg",
    authorName: acf.author_name || localGuide?.authorName || "Sarah Jenkins",
    authorInitials: acf.author_initials || localGuide?.authorInitials || "SJ",
    authorRole: acf.author_role || localGuide?.authorRole || "Founder, Pantry & Pan",
    readMinutes: Number(acf.read_minutes) || localGuide?.readMinutes || 5,
    publishDate: formattedDate,
    rawDate: post.date,
    sections,
    relatedProductIds: relatedProducts,
    ...(faqs.length > 0 ? { faqs } : {}),
  };
}

/**
 * Fetches all published articles from WordPress REST API, merging with local catalog for complete preview.
 */
export async function getWPGuides(): Promise<Article[]> {
  try {
    const res = await fetchWithRetry(`${WP_API_URL}/posts?per_page=100&_embed`);
    const posts: WPPost[] = await res.json();
    
    // Map WP posts
    const wpArticles = Array.isArray(posts) ? posts.map(transformWPPostToArticle) : [];
    
    // Sort function using exact ISO date strings or Date parsing
    const sortByDateDesc = (a: Article, b: Article) => {
      const timeA = (a.rawDate ? new Date(a.rawDate).getTime() : 0) || (new Date(a.publishDate.replace(/^Updated\s+/i, "")).getTime() || 0);
      const timeB = (b.rawDate ? new Date(b.rawDate).getTime() : 0) || (new Date(b.publishDate.replace(/^Updated\s+/i, "")).getTime() || 0);
      return timeB - timeA;
    };

    // In local dev mode (npm run dev), merge WP posts with local catalog.ts so all prepared guides can be previewed locally
    if (process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_DRAFTS === "true") {
      const wpSlugs = new Set(wpArticles.map((a) => a.slug));
      const localGuidesNotInWP = GUIDES.filter((g) => !wpSlugs.has(g.slug));
      const devCombined = [...wpArticles, ...localGuidesNotInWP];
      devCombined.sort(sortByDateDesc);
      return devCombined;
    }

    // In production (Cloudflare Pages), trust WordPress posts first.
    // If WP API is offline/empty, fall back to local catalog.
    if (wpArticles.length > 0) {
      const prodArticles = [...wpArticles];
      prodArticles.sort(sortByDateDesc);
      return prodArticles;
    }

    return getPublishedGuides();
  } catch (error) {
    console.warn("[Headless WP] Fetch failed or offline. Falling back to local lib/catalog.ts", error);
    return getPublishedGuides();
  }
}

/**
 * Fetches a single published article by slug from WordPress REST API, falling back to local catalog.
 */
export async function getWPGuideBySlug(slug: string): Promise<Article | undefined> {
  try {
    const res = await fetchWithRetry(`${WP_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`);
    const posts: WPPost[] = await res.json();
    if (Array.isArray(posts) && posts.length > 0) {
      const article = transformWPPostToArticle(posts[0]);
      return article;
    }
  } catch (error) {
    console.warn(`[Headless WP] Fetch failed for slug ${slug}. Falling back to local catalog.`, error);
  }
  
  // Fail-safe: Always check local catalog so no article page ever 404s during build network hiccups
  return GUIDES.find((g) => g.slug === slug);
}
