import { Metadata } from "next";
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
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
