import { PRODUCTS, GUIDES, isGuidePublished } from "./catalog";

export type SearchResult =
  | { kind: "product"; id: string; title: string; sub: string }
  | { kind: "guide"; slug: string; title: string; sub: string };

interface SearchIndexItem {
  kind: "product" | "guide";
  idOrSlug: string;
  title: string;
  sub: string;
  searchTokens: string;
}

/**
 * Automatically builds an in-memory lightweight search index from catalog.
 * No heavy paragraphs, descriptions, specs tables, or FAQs are included.
 */
function buildSearchIndex(): SearchIndexItem[] {
  const index: SearchIndexItem[] = [];

  for (const p of PRODUCTS) {
    index.push({
      kind: "product",
      idOrSlug: p.id,
      title: p.title,
      sub: p.category,
      searchTokens: `${p.title} ${p.category} ${p.badge}`.toLowerCase(),
    });
  }

  for (const g of GUIDES) {
    if (!isGuidePublished(g.publishDate)) continue;
    index.push({
      kind: "guide",
      idOrSlug: g.slug,
      title: g.title,
      sub: g.category,
      searchTokens: `${g.title} ${g.category} ${g.excerpt}`.toLowerCase(),
    });
  }

  return index;
}

let cachedIndex: SearchIndexItem[] | null = null;

function getIndex(): SearchIndexItem[] {
  if (!cachedIndex) {
    cachedIndex = buildSearchIndex();
  }
  return cachedIndex;
}

/**
 * Searches the lightweight search index.
 */
export function searchAll(q: string): SearchResult[] {
  const query = q.trim().toLowerCase();
  if (!query) return [];

  const index = getIndex();
  const results: SearchResult[] = [];

  for (const item of index) {
    if (item.searchTokens.includes(query)) {
      if (item.kind === "product") {
        results.push({
          kind: "product",
          id: item.idOrSlug,
          title: item.title,
          sub: item.sub,
        });
      } else {
        results.push({
          kind: "guide",
          slug: item.idOrSlug,
          title: item.title,
          sub: item.sub,
        });
      }
    }
  }

  return results.slice(0, 12);
}
