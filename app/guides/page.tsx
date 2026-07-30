import { Metadata } from "next";
import { GuidesIndexClient } from "@/components/site/GuidesIndexClient";

export const metadata: Metadata = {
  title: "Editorial Guides & Non-Toxic Resources : Pantry & Pan",
  description:
    "Independent material research, non-toxic cookware audits, thermal performance tests, and aesthetic pantry organization tutorials.",
  alternates: {
    canonical: "https://pantryandpan.com/guides",
  },
  openGraph: {
    title: "Editorial Guides & Non-Toxic Resources : Pantry & Pan",
    description:
      "Independent material research, non-toxic cookware audits, thermal performance tests, and aesthetic pantry organization tutorials.",
    url: "https://pantryandpan.com/guides",
  },
};

export default function GuidesIndexPage() {
  return <GuidesIndexClient />;
}
