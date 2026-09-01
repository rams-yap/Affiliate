import { Metadata } from "next";
import { getWPGuides } from "@/lib/wordpress";
import { HomePageClient } from "@/components/site/HomePageClient";

export const metadata: Metadata = {
  title: "The Healthy & Happy Kitchen : Non-Toxic Cookware, Curated",
  description:
    "A warm editorial hub for non-toxic, PFAS-free cookware. Curated carbon steel, ceramic, and clay essentials with honest, health-focused guides.",
  alternates: {
    canonical: "https://pantryandpan.com",
  },
  openGraph: {
    title: "The Healthy & Happy Kitchen : Non-Toxic Cookware, Curated",
    description:
      "Curated non-toxic cookware, PFAS-free ceramic sets, carbon steel woks, and aesthetic pantry organization guides.",
    url: "https://pantryandpan.com",
    siteName: "Pantry & Pan",
    type: "website",
    images: [
      {
        url: "https://pantryandpan.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pantry & Pan - Non-Toxic Cookware & Kitchen Essentials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pantry & Pan — Safe Cookware & Aesthetic Kitchen Essentials",
    description: "Curated non-toxic, PFAS-free cookware and aesthetic pantry organization guides.",
    images: ["https://pantryandpan.com/og-image.jpg"],
  },
};

export default async function HomePage() {
  const publishedGuides = await getWPGuides();
  return <HomePageClient initialGuides={publishedGuides} />;
}
