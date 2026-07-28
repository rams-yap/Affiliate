"use client";

import { useState, type FormEvent } from "react";
import { Mail, MessageSquare, Send, CheckCircle2, Sparkles, ShieldCheck, Loader2, AlertCircle } from "lucide-react";
import { SageBadge } from "@/components/site/SageBadge";

export default function ContactPage() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isContactLoading, setIsContactLoading] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);

  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);
  const [newsletterError, setNewsletterError] = useState<string | null>(null);

  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    "Non-Toxic Cookware Alerts",
    "Aesthetic Pantry Organization",
  ]);

  const [autoSubscribe, setAutoSubscribe] = useState(true);

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsContactLoading(true);
    setContactError(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const topic = formData.get("topic") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, message, autoSubscribe }),
      });

      const text = await res.text();
      let data: { error?: string; success?: boolean; message?: string } = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        // Fallback for non-JSON response
      }

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setContactSubmitted(true);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Something went wrong.";
      setContactError(errorMsg);
    } finally {
      setIsContactLoading(false);
    }
  };

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsNewsletterLoading(true);
    setNewsletterError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, topics: selectedTopics }),
      });

      const text = await res.text();
      let data: { error?: string; success?: boolean; message?: string } = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        // Fallback for non-JSON response
      }

      if (!res.ok) {
        throw new Error(data.error || "Subscription failed.");
      }

      setNewsletterSubmitted(true);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Something went wrong.";
      setNewsletterError(errorMsg);
    } finally {
      setIsNewsletterLoading(false);
    }
  };

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Hero */}
      <section className="mb-12 rounded-3xl border border-hairline bg-surface p-8 sm:p-12 soft-shadow">
        <div className="w-full lg:max-w-[calc(100%-300px)]">
          <SageBadge variant="default">Community & Editorial Contact</SageBadge>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Get in Touch or Join Our Non-Toxic Kitchen Digest.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Have a question about a cookware material, want to suggest a brand for lab testing, or wish to receive weekly curated kitchen guides? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Contact Form Card */}
        <div className="rounded-3xl border border-hairline bg-surface p-8 soft-shadow sm:p-10">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-terracotta/15 text-terracotta">
              <MessageSquare className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">Send Us a Message</h2>
              <p className="text-xs font-medium text-muted-foreground">Product inquiries & editorial feedback</p>
            </div>
          </div>

          {contactError && (
            <div className="mt-6 flex items-center gap-2 rounded-2xl bg-destructive/10 p-4 text-xs font-semibold text-destructive">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{contactError}</span>
            </div>
          )}

          {contactSubmitted ? (
            <div className="mt-8 rounded-2xl bg-sage/15 p-6 text-center text-foreground">
              <CheckCircle2 className="mx-auto h-10 w-10 text-sage" />
              <h3 className="mt-3 font-display text-lg font-semibold">Message Received!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you for reaching out. Our editorial team usually responds within 24-48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  className="mt-2 w-full rounded-2xl border border-hairline bg-background px-4 py-3 text-sm text-foreground focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="sarah@example.com"
                  className="mt-2 w-full rounded-2xl border border-hairline bg-background px-4 py-3 text-sm text-foreground focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                />
              </div>

              <div>
                <label htmlFor="topic" className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                  Subject / Topic
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="mt-2 w-full rounded-2xl border border-hairline bg-background px-4 py-3 text-sm text-foreground focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                >
                  <option>Product Recommendation Question</option>
                  <option>Brand Vetting Submission</option>
                  <option>Editorial Correction / Feedback</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  maxLength={1000}
                  placeholder="Tell us about the kitchen item or question..."
                  className="mt-2 w-full rounded-2xl border border-hairline bg-background px-4 py-3 text-sm text-foreground focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                ></textarea>
              </div>

              <label className="flex items-center gap-2.5 text-xs text-muted-foreground cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={autoSubscribe}
                  onChange={(e) => setAutoSubscribe(e.target.checked)}
                  className="h-4 w-4 rounded border-hairline text-terracotta focus:ring-terracotta/20 accent-terracotta"
                />
                <span>Also subscribe me to weekly non-toxic cookware alerts & kitchen guides</span>
              </label>

              <button
                type="submit"
                disabled={isContactLoading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta py-3.5 text-sm font-semibold text-terracotta-foreground transition-opacity hover:opacity-90 disabled:opacity-50 shadow-sm"
              >
                {isContactLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Newsletter Subscription Card */}
        <div className="flex flex-col justify-between rounded-3xl border border-hairline bg-surface-tint p-8 sm:p-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-amber/15 text-amber">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber">Weekly Digest</span>
                <h2 className="font-display text-xl font-semibold text-foreground">The Non-Toxic Kitchen Journal</h2>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Join over 15,000 home cooks receiving our bi-weekly reviews, non-toxic pan care tutorials, and aesthetic pantry restock guides.
            </p>

            {newsletterError && (
              <div className="mt-6 flex items-center gap-2 rounded-2xl bg-destructive/10 p-4 text-xs font-semibold text-destructive">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{newsletterError}</span>
              </div>
            )}

            {newsletterSubmitted ? (
              <div className="mt-8 rounded-2xl bg-sage/15 p-6 text-center text-foreground">
                <Sparkles className="mx-auto h-10 w-10 text-sage" />
                <h3 className="mt-3 font-display text-lg font-semibold">You're Subscribed!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Check your inbox for our latest Non-Toxic Kitchen Blueprint guide.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="mt-8 space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                    Customize Your Preferences:
                  </label>
                  <div className="space-y-2.5">
                    {[
                      "Non-Toxic Cookware Alerts",
                      "Aesthetic Pantry Organization",
                      "Clean Steamers & Asian Cookware",
                      "Natural Bakeware Releases",
                    ].map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => toggleTopic(topic)}
                        className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-xs font-semibold transition-all ${
                          selectedTopics.includes(topic)
                            ? "border-terracotta bg-terracotta/10 text-foreground"
                            : "border-hairline bg-surface text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        <span>{topic}</span>
                        {selectedTopics.includes(topic) && <CheckCircle2 className="h-4 w-4 text-terracotta" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-hairline bg-surface px-4 py-3 text-sm text-foreground focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isNewsletterLoading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 shadow-sm"
                >
                  {isNewsletterLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Subscribing...
                    </>
                  ) : (
                    "Subscribe to Journal"
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 border-t border-hairline pt-6 text-xs text-muted-foreground flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-sage" />
            <span>We respect your inbox privacy. Zero spam. Unsubscribe anytime.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
