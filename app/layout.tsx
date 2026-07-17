import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Affiliate Hub - Curated Home & Kitchen Gadgets",
  description: "Find the best high-quality kitchen gadgets, modern organization tools, and cooking accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout-wrapper">
          <header className="header">
            <div className="header-container">
              <Link href="/" className="logo-link">
                <span className="logo-dot"></span>
                AffiliateHub
              </Link>
              <nav className="nav-menu">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/privacy" className="nav-link">Privacy</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
              </nav>
            </div>
          </header>

          <main className="main-content">
            {children}
          </main>

          <footer className="footer">
            <div className="footer-container">
              <nav className="footer-nav">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/privacy" className="nav-link">Privacy Policy</Link>
                <Link href="/contact" className="nav-link">Contact Us</Link>
              </nav>
              <p className="footer-text">
                &copy; {new Date().getFullYear()} AffiliateHub. All rights reserved.
              </p>
              <p className="footer-disclosure">
                As an Amazon Associate I earn from qualifying purchases.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
