import type { Metadata } from "next";
import Link from "next/link";
import { Outfit } from "next/font/google";
import "./globals.css";
import { CATEGORIES } from "@/lib/categories";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "The Healthy & Happy Kitchen — Non-Toxic Cookware, Curated",
  description: "Curated non-toxic cookware and heirloom-quality kitchen gear.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <div className="layout-wrapper">
          <header className="header">
            <div className="header-container">
              <Link href="/" className="logo-link">
                <span className="logo-dot"></span>
                <span>Pantry &amp; Pan <small className="text-muted" style={{ fontWeight: 400, fontSize: "0.85rem" }}>// Curated Living</small></span>
              </Link>
              <nav className="nav-menu">
                <Link href="/" className="nav-link">All Essentials</Link>
                {CATEGORIES.map((cat) => (
                  <Link key={cat.id} href={`/category/${cat.slug}`} className="nav-link">
                    {cat.title}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="main-content">{children}</main>

          <footer className="footer">
            <div className="footer-container">
              <div style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>Pantry &amp; Pan</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  A warm editorial hub for non-toxic cookware and heirloom-quality kitchen gear.
                </p>
              </div>

              <div className="footer-nav" style={{ justifyContent: "flex-start", gap: "3rem" }}>
                <div>
                  <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Explore</h4>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {CATEGORIES.map((cat) => (
                      <li key={cat.id}>
                        <Link href={`/category/${cat.slug}`} className="nav-link">{cat.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Company</h4>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <li><Link href="/privacy" className="nav-link">About Us</Link></li>
                    <li><Link href="/contact" className="nav-link">Contact</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Legal</h4>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <li><Link href="/privacy" className="nav-link">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>

              <p className="footer-disclosure">
                Amazon Affiliate Disclosure: Pantry &amp; Pan is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases. Product prices and availability are accurate as of the date/time indicated and are subject to change.
              </p>
              <p className="footer-text">
                &copy; {new Date().getFullYear()} Pantry &amp; Pan · Curated Living. All rights reserved. Made for people who cook whole food at home.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
