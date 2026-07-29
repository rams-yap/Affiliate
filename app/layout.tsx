import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://pantryandpan.com/guides?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M86L4PZ6');`,
          }}
        />
        <JsonLd data={globalSchema} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-terracotta/20 selection:text-terracotta">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M86L4PZ6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ScrollToTop />
        <SiteHeader />
        <main className="min-h-[calc(100vh-200px)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
