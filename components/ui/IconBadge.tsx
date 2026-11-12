import { cn } from "@/lib/utils";

/** Rounded icon tile with a cyan edge, used across feature lists. */
export function IconBadge({
  children,
  tone = "dark",
  size = "md",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center rounded-2xl border",
        size === "sm" && "size-10 [&_svg]:size-5",
        size === "md" && "size-12 [&_svg]:size-6",
        size === "lg" && "size-14 [&_svg]:size-7",
        tone === "dark"
          ? "border-brand/40 bg-gradient-to-br from-navy-700 to-navy-950 text-brand shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_24px_-6px_rgb(0_217_245/0.5)]"
          : "border-brand/30 bg-ice/60 text-navy-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
