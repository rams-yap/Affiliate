import { Metadata } from "next";
import ContactPageClient from "@/components/site/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us & Join the Digest : Pantry & Pan",
  description:
    "Get in touch with the Pantry & Pan editorial team or subscribe to our non-toxic kitchen digest.",
  alternates: {
    canonical: "https://pantryandpan.com/contact",
  },
  openGraph: {
    title: "Contact Us & Join the Digest : Pantry & Pan",
    description:
      "Get in touch with the Pantry & Pan editorial team or subscribe to our non-toxic kitchen digest.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
