import Link from "next/link";

interface GadgetProduct {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
}

const PRODUCTS: GadgetProduct[] = [
  {
    id: "rice-dispenser",
    title: "Glass Rice Dispenser",
    category: "Kitchen Storage",
    description: "Sleek, airtight glass container with a measuring cup. Perfect for modern pantry organization.",
    icon: "🌾"
  },
  {
    id: "dumpling-maker",
    title: "Automatic Dumpling Maker",
    category: "Cooking Gadgets",
    description: "Double head automatic press for making perfect dumplings effortlessly in seconds.",
    icon: "🥟"
  },
  {
    id: "hot-pot",
    title: "Bruno Multi Hot Pot",
    category: "Appliances",
    description: "Compact Japanese-style tabletop cooker with interchangeable plates for hot pot, grilling, and takoyaki.",
    icon: "🍲"
  }
];

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Curated Smart Home & Kitchen Gadgets</h1>
        <p>
          Discover premium, highly-rated organization tools and appliances designed to elevate your everyday cooking experience.
        </p>
      </section>

      <div className="grid">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="card">
            <div className="card-img-placeholder">
              {product.icon}
            </div>
            <div className="card-content">
              <span className="card-tag">{product.category}</span>
              <h2 className="card-title">{product.title}</h2>
              <p className="card-description">{product.description}</p>
              <Link href={`/kitchen/${product.id}`} className="btn btn-primary" style={{ marginTop: "1rem" }}>
                Read Review &amp; Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
