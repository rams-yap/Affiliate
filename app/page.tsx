import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { PRODUCTS, generateAmazonAffiliateUrl } from "@/lib/products";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>The Healthy &amp; Happy Kitchen — Non-Toxic Cookware, Curated</h1>
        <p>
          A curated shift away from synthetic non-stick coatings — into carbon steel, ceramic, and clay that get better with every meal.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1.5rem" }}>
          <a href="#catalog" className="btn btn-primary">
            Explore the Essentials
          </a>
          <Link href="/guides/non-toxic-kitchen-blueprint" className="btn btn-secondary">
            Read the Guide
          </Link>
        </div>
      </section>

      {/* Catalog & Category Switcher */}
      <section id="catalog" style={{ marginBottom: "4rem" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>The Curation · All Essentials</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Every piece is chosen for material honesty — the kind of gear you pass down, not throw out.
          </p>
        </div>

        {/* Filter Switcher Pills */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          <span className="card-tag" style={{ backgroundColor: "var(--primary)", color: "#fff", cursor: "pointer" }}>
            All Essentials
          </span>
          {CATEGORIES.map((cat) => (
            <span
              key={cat.id}
              className="card-tag"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-color)", color: "var(--text-main)", cursor: "pointer" }}
            >
              {cat.title}
            </span>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid">
          {PRODUCTS.map((product) => {
            const affiliateUrl = generateAmazonAffiliateUrl(product.asin);
            return (
              <div key={product.id} className="card">
                <div className="card-content">
                  <span className="card-tag">{product.categoryName}</span>
                  <h3 className="card-title" style={{ fontSize: "1.1rem" }}>{product.title}</h3>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary)", marginTop: "0.25rem" }}>
                    {product.priceRange}
                  </div>
                  <ul style={{ paddingLeft: "1.2rem", fontSize: "0.88rem", color: "var(--text-muted)", margin: "0.5rem 0 1rem 0" }}>
                    {product.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>

                  <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <a
                      href={affiliateUrl}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="btn btn-primary"
                      style={{ textDecoration: "none", textAlign: "center" }}
                    >
                      Check Price on Amazon ↗
                    </a>
                    <Link
                      href={`/guides/${product.featuredGuideSlug}`}
                      style={{ fontSize: "0.8rem", color: "var(--text-muted)", textDecoration: "none", textAlign: "center" }}
                    >
                      Featured in: {product.featuredGuideTitle}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Editorial Guide Content Section */}
      <section className="legal-container" style={{ maxWidth: "100%", padding: "2.5rem" }}>
        <span className="card-tag" style={{ marginBottom: "0.5rem" }}>From the Guides</span>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 800, margin: "0.5rem 0 1rem 0" }}>
          The Non-Toxic Kitchen Blueprint: How to Swap PTFE for Safe Materials
        </h2>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          For decades, PTFE and PFAS fluoropolymers provided convenient food release. But when heated past 500°F, synthetic coatings degrade and off-gas chemical compounds into your home environment.
          Ceramic pans like GreenPan Valencia Pro and Caraway offer effortless release for morning eggs without seasoning routines.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ padding: "1rem", backgroundColor: "var(--bg-base)", borderRadius: "var(--radius-sm)" }}>
            <h4 style={{ color: "#15803d", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>+ Pros</h4>
            <ul style={{ paddingLeft: "1rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
              <li>Zero PFAS, PFOA, lead, or cadmium</li>
              <li>Oven safe up to 600°F (lids up to 425°F)</li>
            </ul>
          </div>
          <div style={{ padding: "1rem", backgroundColor: "var(--bg-base)", borderRadius: "var(--radius-sm)" }}>
            <h4 style={{ color: "#b91c1c", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>– Considerations</h4>
            <ul style={{ paddingLeft: "1rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
              <li>Hand washing recommended to preserve peak release</li>
              <li>Higher initial investment for complete set</li>
            </ul>
          </div>
        </div>

        <Link href="/guides/non-toxic-kitchen-blueprint" className="btn btn-secondary">
          Read the full blueprint →
        </Link>
      </section>
    </div>
  );
}
