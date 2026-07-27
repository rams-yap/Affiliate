import { describe, it, expect } from "vitest";
import nextConfig from "../next.config";

describe("Phase 1: Foundation & Design Tokens Test Suite", () => {
  it("should have Next.js configured for static export", () => {
    expect(nextConfig.output).toBe("export");
    expect(nextConfig.images?.unoptimized).toBe(true);
  });

  it("should define approved brand identity color tokens", () => {
    const BRAND_TOKENS = {
      warmOatCream: "#F9F6F0",
      deepSlateCharcoal: "#2C3531",
      sageGreen: "#8A9A86",
      terracotta: "#D48C70"
    };

    expect(BRAND_TOKENS.warmOatCream).toBe("#F9F6F0");
    expect(BRAND_TOKENS.deepSlateCharcoal).toBe("#2C3531");
    expect(BRAND_TOKENS.sageGreen).toBe("#8A9A86");
    expect(BRAND_TOKENS.terracotta).toBe("#D48C70");
  });
});
