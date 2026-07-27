import test from "node:test";
import assert from "node:assert/strict";
import { CATEGORIES, getCategoryBySlug } from "../lib/categories";
import { PRODUCTS, getProductsByCategory, generateAmazonAffiliateUrl, generateProductStaticParams } from "../lib/products";

test("Phase 2: Data Models & Categories TDD", async (t) => {
  await t.test("defines exactly the 4 approved pillar categories", () => {
    assert.equal(CATEGORIES.length, 4);
    const categorySlugs = CATEGORIES.map((c) => c.slug);
    assert.deepEqual(categorySlugs, [
      "ceramic-clay",
      "carbon-steel-woks",
      "space-saving-detachable",
      "aesthetic-storage",
    ]);
  });

  await t.test("retrieves category details by slug", () => {
    const cat = getCategoryBySlug("ceramic-clay");
    assert.ok(cat);
    assert.equal(cat?.title, "Non-Toxic Ceramic & Clay");
  });

  await t.test("generates valid Amazon affiliate links with required tag", () => {
    const url = generateAmazonAffiliateUrl("B07G4MTK3W");
    assert.ok(url.includes("amazon.com/dp/B07G4MTK3W"));
    assert.ok(url.includes("tag=pantryandpan-20"));
  });

  await t.test("filters products by category", () => {
    const ceramicProds = getProductsByCategory("ceramic-clay");
    assert.ok(ceramicProds.length > 0);
    ceramicProds.forEach((p) => {
      assert.equal(p.categorySlug, "ceramic-clay");
    });
  });

  await t.test("provides static params array for Next.js build-time generation", () => {
    const params = generateProductStaticParams();
    assert.equal(params.length, PRODUCTS.length);
    assert.ok(params[0].id);
  });
});
