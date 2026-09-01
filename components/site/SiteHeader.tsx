"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Search, ShieldCheck, Sun, X, BookOpen, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CATEGORIES } from "@/lib/catalog";
import { useDarkMode } from "@/hooks/use-dark-mode";

const SearchOverlay = dynamic(
  () => import("./SearchOverlay").then((mod) => mod.SearchOverlay),
  { ssr: false }
);

export function SiteHeader() {
  const pathname = usePathname();
  const { dark, toggle } = useDarkMode();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState("");

  const openSearch = (q = "") => {
    setInitialQuery(q);
    setSearchOpen(true);
  };

  const isCategoryActive = pathname.startsWith("/category/");
  const isGuidesActive = pathname.startsWith("/guides");
  const isAboutActive = pathname === "/about";
  const isHowWeTestActive = pathname === "/how-we-test";

  return (
    <>
      <div className="bg-sage text-sage-foreground">
        <div className="mx-auto flex max-w-[1400px] items-center justify-center gap-2 px-4 py-2.5 text-center text-sm font-medium">
          <ShieldCheck className="h-4 w-4" />
          <span>100% Chemical-Free, PFAS-Free & Heirloom Quality Kitchen Gear.</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-hairline bg-background/80 backdrop-blur-md">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/assets/logo.png"
              alt="Pantry & Pan logo"
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
            />
            <span className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Pantry & Pan
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-terracotta sm:inline">
              Curated Living
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const q = new FormData(e.currentTarget).get("q") as string;
                openSearch(q ?? "");
              }}
              className="relative hidden md:block"
            >
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                name="q"
                type="search"
                onFocus={() => openSearch("")}
                placeholder="Search non-toxic essentials"
                className="w-72 rounded-full border border-hairline bg-surface py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
              />
            </form>
            <button
              type="button"
              onClick={() => openSearch("")}
              aria-label="Search"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-hairline bg-surface text-foreground transition-colors hover:bg-muted md:hidden"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-hairline bg-surface text-foreground transition-colors hover:bg-muted"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile navigation menu"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-hairline bg-surface text-foreground md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Primary Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden border-t border-hairline md:block">
          <div className="flex justify-center px-4 py-2.5 sm:px-6 lg:px-8">
            <ul className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-sm font-semibold">
              <li>
                <Link
                  href="/"
                  className={`rounded-xl px-3.5 py-2 transition-all duration-200 ${
                    pathname === "/"
                      ? "bg-terracotta text-terracotta-foreground shadow-xs"
                      : "text-foreground hover:bg-surface-tint hover:text-terracotta"
                  }`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className={`rounded-xl px-3.5 py-2 transition-all duration-200 ${
                    isAboutActive
                      ? "bg-terracotta text-terracotta-foreground shadow-xs"
                      : "text-foreground hover:bg-surface-tint hover:text-terracotta"
                  }`}
                >
                  Our Story
                </Link>
              </li>

              {/* Shop Categories Hover Dropdown */}
              <li className="group relative">
                <button
                  type="button"
                  className={`flex items-center gap-1 rounded-xl px-3.5 py-2 transition-all duration-200 focus:outline-none ${
                    isCategoryActive
                      ? "bg-terracotta text-terracotta-foreground shadow-xs"
                      : "text-foreground hover:bg-surface-tint hover:text-terracotta"
                  }`}
                >
                  <span>Shop Categories</span>
                  <span className="text-xs transition-transform group-hover:rotate-180">▾</span>
                </button>

                {/* Dropdown Menu Panel */}
                <div className="absolute left-0 top-full z-50 hidden pt-1 group-hover:block">
                  <div className="w-64 rounded-2xl border border-hairline bg-background p-2 soft-shadow">
                    <ul className="flex flex-col gap-0.5">
                      {CATEGORIES.map((c) => {
                        const isSubActive = pathname === `/category/${c.slug}`;
                        return (
                          <li key={c.key}>
                            <Link
                              href={`/category/${c.slug}`}
                              className={`block rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-colors ${
                                isSubActive
                                  ? "bg-surface-tint text-terracotta font-bold"
                                  : "text-muted-foreground hover:bg-surface-tint hover:text-foreground"
                              }`}
                            >
                              {c.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/guides"
                  className={`rounded-xl px-3.5 py-2 transition-all duration-200 ${
                    isGuidesActive
                      ? "bg-terracotta text-terracotta-foreground shadow-xs"
                      : "text-foreground hover:bg-surface-tint hover:text-terracotta"
                  }`}
                >
                  Guides
                </Link>
              </li>

              <li>
                <Link
                  href="/how-we-test"
                  className={`rounded-xl px-3.5 py-2 transition-all duration-200 ${
                    isHowWeTestActive
                      ? "bg-terracotta text-terracotta-foreground shadow-xs"
                      : "text-foreground hover:bg-surface-tint hover:text-terracotta"
                  }`}
                >
                  How We Test
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Scoped Navigation */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="right" className="flex h-full w-full max-w-sm flex-col border-l-0 bg-background p-0">
          {/* Fixed Top Header (Logo + Title + Search) */}
          <div className="shrink-0 border-b border-hairline bg-background p-5 space-y-4">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2.5 text-left font-display text-xl">
                <img src="/assets/logo.png" alt="Pantry & Pan logo" className="h-7 w-7 object-contain" />
                Pantry & Pan
              </SheetTitle>
            </SheetHeader>

            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openSearch("");
              }}
              className="flex w-full items-center gap-3 rounded-full border border-hairline bg-surface px-4 py-2.5 text-left text-sm text-muted-foreground shadow-xs hover:border-terracotta"
            >
              <Search className="h-4 w-4" />
              Search essentials & guides
            </button>
          </div>

          {/* Scrollable Navigation Body */}
          <nav aria-label="Mobile Navigation" className="flex-1 overflow-y-auto p-5 space-y-6">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-terracotta">
                Story & Brand
              </p>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                      isAboutActive
                        ? "bg-terracotta text-terracotta-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span>Our Story</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                      isGuidesActive
                        ? "bg-terracotta text-terracotta-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span>Guides</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-we-test"
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                      isHowWeTestActive
                        ? "bg-terracotta text-terracotta-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span>How We Test</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-terracotta">
                Categories
              </p>
              <ul className="flex flex-col gap-1">
                {CATEGORIES.map((c) => (
                  <li key={c.key}>
                    <Link
                      href={`/category/${c.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-2xl px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">
                  Featured Guides
                </p>
                <Link
                  href="/guides"
                  onClick={() => setMobileOpen(false)}
                  className="text-xs font-semibold text-muted-foreground hover:text-terracotta inline-flex items-center gap-1"
                >
                  View All <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/guides/non-toxic-kitchen-blueprint"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-start gap-3 rounded-2xl px-4 py-2.5 hover:bg-secondary transition-colors"
                  >
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sage/10 text-sage">
                      <BookOpen className="h-3.5 w-3.5" />
                    </span>
                    <span className="line-clamp-2 text-xs font-semibold leading-snug text-foreground">
                      The Non-Toxic Kitchen Blueprint
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides/ceramic-granite-stone-cookware-explained"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-start gap-3 rounded-2xl px-4 py-2.5 hover:bg-secondary transition-colors"
                  >
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sage/10 text-sage">
                      <BookOpen className="h-3.5 w-3.5" />
                    </span>
                    <span className="line-clamp-2 text-xs font-semibold leading-snug text-foreground">
                      Ceramic vs. Granite vs. Stone Cookware
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides/cast-iron-vs-carbon-steel-vs-enameled"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-start gap-3 rounded-2xl px-4 py-2.5 hover:bg-secondary transition-colors"
                  >
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sage/10 text-sage">
                      <BookOpen className="h-3.5 w-3.5" />
                    </span>
                    <span className="line-clamp-2 text-xs font-semibold leading-snug text-foreground">
                      Cast Iron vs. Carbon Steel vs. Enameled
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Fixed Bottom Controls (Join Newsletter + Close) */}
          <div className="shrink-0 border-t border-hairline bg-background p-5 space-y-2.5">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-4 py-3 text-sm font-semibold text-terracotta-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> Join Newsletter
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              <X className="h-4 w-4" /> Close Menu
            </button>
          </div>
        </SheetContent>
      </Sheet>

      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        initialQuery={initialQuery}
      />
    </>
  );
}
