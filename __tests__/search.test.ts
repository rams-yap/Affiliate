import { describe, it, expect } from "vitest";
import { searchAll } from "../lib/search";

describe("Lightweight Search Index & Query Suite", () => {
  it("returns search results matching product title or category", () => {
    const results = searchAll("ceramic");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => r.kind === "product" || r.kind === "guide")).toBe(true);
  });

  it("returns search results for specific product queries", () => {
    const results = searchAll("wok");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => r.kind === "product")).toBe(true);
  });

  it("returns search results for guide queries", () => {
    const results = searchAll("rice dispenser");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => r.kind === "guide")).toBe(true);
  });

  it("returns empty array for empty or whitespace query", () => {
    expect(searchAll("")).toEqual([]);
    expect(searchAll("   ")).toEqual([]);
  });

  it("limits maximum search results to 12 items", () => {
    const results = searchAll("a");
    expect(results.length).toBeLessThanOrEqual(12);
  });
});
