import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ScrollToTop } from "@/components/site/ScrollToTop";

import { JsonLd } from "@/components/seo/JsonLd";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pantryandpan.com"),
  title: "The Healthy & Happy Kitchen : Non-Toxic Cookware, Curated",
  description:
    "A warm editorial hub for non-toxic, PFAS-free cookware. Curated carbon steel, ceramic, and clay essentials with honest, health-focused guides.",
  alternates: {
    canonical: "https://pantryandpan.com",
  },
  openGraph: {
    title: "The Healthy & Happy Kitchen : Non-Toxic Cookware, Curated",
    description: "Curated non-toxic cookware, PFAS-free ceramic sets, carbon steel woks, and aesthetic pantry organization guides.",
    url: "https://pantryandpan.com",
    siteName: "Pantry & Pan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pantry & Pan — Safe Cookware & Aesthetic Kitchen Essentials",
    description: "Curated non-toxic, PFAS-free cookware and aesthetic pantry organization guides.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const globalSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://pantryandpan.com/#organization",
    name: "Pantry & Pan",
    url: "https://pantryandpan.com",
    logo: "https://pantryandpan.com/pantry_and_pan_logo.jpg",
    description: "Safe Cookware & Aesthetic Kitchen Essentials. Non-toxic, PFAS-free cookware and pantry organization guides.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://pantryandpan.com/#website",
    name: "Pantry & Pan",
    url: "https://pantryandpan.com",
    publisher: {
      "@id": "https://pantryandpan.com/#organization",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakartaSans.variable}`}>
      <head>
        <JsonLd data={globalSchema} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-terracotta/20 selection:text-terracotta">
        <ScrollToTop />
        <SiteHeader />
        <main className="min-h-[calc(100vh-200px)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
