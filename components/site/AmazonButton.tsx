import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  className?: string;
  label?: string;
};

export function AmazonButton({ href, className, label = "Check Price on Amazon" }: Props) {
  const formattedHref = href;

  return (
    <a
      href={formattedHref}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-terracotta-foreground shadow-sm transition-all duration-300 hover:bg-terracotta/90 hover:shadow-md",
        className,
      )}
    >
      <span>{label}</span>
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
