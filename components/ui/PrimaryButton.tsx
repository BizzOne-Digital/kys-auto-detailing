import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline-dark";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl px-6 py-3 text-[15px] font-bold tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-offset-4";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-navy-950 shadow-glow hover:bg-aqua hover:shadow-glow-lg",
  secondary:
    "border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-brand/70 hover:bg-white/10 hover:shadow-glow",
  "outline-dark":
    "border border-navy-700/25 bg-white text-navy-900 hover:border-brand hover:shadow-glow",
};

export function buttonClasses(variant: ButtonVariant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  arrow?: boolean;
  className?: string;
  ariaLabel?: string;
};

/** Link styled as a button. Use a real <button> for form actions. */
export function PrimaryButton({ href, children, variant = "primary", icon, arrow = false, className, ariaLabel }: Props) {
  const external = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} aria-label={ariaLabel} className={buttonClasses(variant, className)}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} aria-label={ariaLabel} className={buttonClasses(variant, className)}>
      {content}
    </Link>
  );
}
