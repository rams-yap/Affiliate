"use client";

import Link from "next/link";
import { Search, X, BookOpen, Package } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { searchAll } from "@/lib/catalog";

type Props = {
  open: boolean;
  onClose: () => void;
  initialQuery?: string;
};

export function SearchOverlay({ open, onClose, initialQuery = "" }: Props) {
  const [q, setQ] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQ(initialQuery);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open, initialQuery]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => searchAll(q), [q]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-foreground/40 p-4 pt-16 backdrop-blur-sm sm:pt-24"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl overflow-hidden rounded-3xl bg-surface soft-shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-hairline px-5 py-4">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search non-toxic essentials & guides"
            className="flex-1 bg-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-foreground hover:bg-muted"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2 sm:p-3">
          {q.trim() === "" ? (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">
              Try “carbon steel”, “ceramic”, or “PFAS”.
            </p>
          ) : results.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">
              No matches for “{q}”. Try a broader term.
            </p>
          ) : (
            <ul className="flex flex-col gap-1">
              {results.map((r) =>
                r.kind === "product" ? (
                  <li key={`p-${r.id}`}>
                    <Link
                      href={`/product/${r.id}`}
                      onClick={onClose}
                      className="flex items-center gap-3 rounded-2xl px-3 py-3 hover:bg-secondary"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-terracotta/10 text-terracotta">
                        <Package className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-foreground">
                          {r.title}
                        </span>
                        <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                          Product · {r.sub}
                        </span>
                      </span>
                    </Link>
                  </li>
                ) : (
                  <li key={`g-${r.slug}`}>
                    <Link
                      href={`/guides/${r.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-3 rounded-2xl px-3 py-3 hover:bg-secondary"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-sage/10 text-sage">
                        <BookOpen className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-foreground">
                          {r.title}
                        </span>
                        <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                          Guide · {r.sub}
                        </span>
                      </span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
