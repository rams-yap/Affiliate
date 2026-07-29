import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { SageBadge } from "@/components/site/SageBadge";

export const metadata: Metadata = {
  title: "Privacy Policy : Pantry & Pan",
  description: "Learn how Pantry & Pan collects, uses, and protects user data and privacy across our website.",
  alternates: {
    canonical: "https://pantryandpan.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy : Pantry & Pan",
    description: "Learn how Pantry & Pan collects, uses, and protects user data and privacy across our website.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
        <Link href="/" className="hover:text-terracotta">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
        <span className="text-foreground">Privacy Policy</span>
      </nav>

      <article className="rounded-3xl border border-hairline bg-surface p-8 sm:p-14 soft-shadow">
        <div className="w-full">
          <SageBadge variant="default">Legal & Compliance</SageBadge>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Last updated: July 2026
          </p>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-foreground">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Overview</h2>
              <p className="text-muted-foreground">
                At Pantry & Pan ("we," "our," or "us"), protecting the privacy of our visitors is paramount. This Privacy Policy outlines the types of information we collect, how it is used, and the choices you have regarding your personal data when browsing Pantry & Pan.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-3">
                We collect information to provide better editorial recommendations and improve website performance:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Voluntary Information:</strong> Name, email address, and form submissions when you subscribe to our newsletter or submit a contact message.</li>
                <li><strong className="text-foreground">Automated Usage Data:</strong> Non-personally identifiable information such as browser type, device details, pages viewed, and referral URLs via privacy-focused web analytics.</li>
                <li><strong className="text-foreground">Cookies & Affiliate Tracking:</strong> Small data files placed on your device by our website or affiliate partners (such as Amazon) to record qualifying referral clicks.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. How We Use Your Data</h2>
              <p className="text-muted-foreground">
                We use collected information solely to operate our website, send requested newsletter updates, analyze traffic trends, and ensure affiliate commissions are properly attributed when you click out to partner retail sites. We never sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Third-Party Links & Affiliate Partners</h2>
              <p className="text-muted-foreground">
                Pantry & Pan contains links to third-party merchant sites (including Amazon.com). If you click an outbound product link, you will be directed to that merchant's site, which maintains its own independent privacy practices. We encourage you to review their terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions or privacy concerns regarding this policy, please reach out via our{" "}
                <Link href="/contact" className="text-terracotta underline font-semibold">
                  Contact Page
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
