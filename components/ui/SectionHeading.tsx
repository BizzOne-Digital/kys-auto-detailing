import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
};

/** Eyebrow label + heading + optional description, on light or dark sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  as: Tag = "h2",
  className,
}: Props) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p
        className={cn(
          "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em]",
          align === "center" && "justify-center",
          dark ? "text-brand" : "text-navy-700",
        )}
      >
        <span aria-hidden className={cn("h-px w-8", dark ? "bg-brand/60" : "bg-brand")} />
        {eyebrow}
        {align === "center" && <span aria-hidden className={cn("h-px w-8", dark ? "bg-brand/60" : "bg-brand")} />}
      </p>
      <Tag
        className={cn(
          "mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl",
          dark ? "text-white" : "text-navy-950",
        )}
      >
        {title}
      </Tag>
      <span
        aria-hidden
        className={cn(
          "mt-5 block h-[3px] w-20 rounded-full bg-gradient-to-r from-brand to-aqua/0",
          align === "center" && "mx-auto",
        )}
      />
      {description && (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", dark ? "text-slate-300" : "text-muted")}>
          {description}
        </p>
      )}
    </div>
  );
}
