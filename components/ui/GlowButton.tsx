import { CalendarCheck } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";
import { cn } from "@/lib/utils";

/** The main booking CTA: primary button with a soft animated glow halo. */
export function GlowButton({
  href = "/booking",
  children = "Book Appointment",
  className,
}: {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("relative inline-flex", className)}>
      <span aria-hidden className="absolute -inset-1 animate-glow-pulse rounded-2xl bg-brand/30 blur-lg" />
      <PrimaryButton
        href={href}
        icon={<CalendarCheck aria-hidden className="size-5" />}
        arrow
        className="relative w-full"
      >
        {children}
      </PrimaryButton>
    </span>
  );
}
