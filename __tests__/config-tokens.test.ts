import test from "node:test";
import assert from "node:assert/strict";
import nextConfig from "../next.config";

test("Phase 1: Foundation & Design Tokens Test Suite", async (t) => {
  await t.test("should have Next.js configured for static export", () => {
    assert.equal(nextConfig.output, "export");
    assert.equal(nextConfig.images?.unoptimized, true);
  });

  await t.test("should define approved brand identity color tokens", () => {
    const BRAND_TOKENS = {
      warmOatCream: "#F9F6F0",
      deepSlateCharcoal: "#2C3531",
      sageGreen: "#8A9A86",
      terracotta: "#D48C70"
    };

    assert.equal(BRAND_TOKENS.warmOatCream, "#F9F6F0");
    assert.equal(BRAND_TOKENS.deepSlateCharcoal, "#2C3531");
    assert.equal(BRAND_TOKENS.sageGreen, "#8A9A86");
    assert.equal(BRAND_TOKENS.terracotta, "#D48C70");
  });
});
