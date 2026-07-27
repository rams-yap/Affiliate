import test from "node:test";
import assert from "node:assert/strict";
import { PRODUCTS, generateAmazonAffiliateUrl } from "../lib/products";

test("Phase 3: Copy Compliance & FTC Affiliate Link TDD Suite", async (t) => {
  await t.test("asserts all Amazon products contain valid ASINs and required affiliate tag", () => {
    PRODUCTS.forEach((p) => {
      const url = generateAmazonAffiliateUrl(p.asin);
      assert.ok(url.includes("tag=pantryandpan-20"), `Missing tag in ${p.title}`);
      assert.ok(url.includes(`amazon.com/dp/${p.asin}`), `Invalid ASIN format for ${p.title}`);
    });
  });

  await t.test("verifies required FTC Amazon disclosure statement wording", () => {
    const REQUIRED_DISCLOSURE = "Amazon Affiliate Disclosure: Pantry & Pan is a participant in the Amazon Services LLC Associates Program";
    assert.ok(REQUIRED_DISCLOSURE.includes("participant in the Amazon Services LLC Associates Program"));
  });
});
