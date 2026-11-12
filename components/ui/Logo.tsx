import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import logo from "@/public/logo-kvs.png";

/**
 * Brand logo (public/logo-kvs.png, a trimmed copy of the client's logo.png) with the
 * "Auto Detailing" wordmark beside it. Used in the header, mobile menu and footer.
 */
export function Logo({
  className,
  compact = false,
  priority = false,
}: {
  className?: string;
  /** Slightly smaller version for the scrolled header. */
  compact?: boolean;
  /** Set on the header logo only, since it is above the fold. */
  priority?: boolean;
}) {
  return (
    <Link href="/" aria-label="KVS Auto Detailing home" className={cn("group inline-flex items-center gap-3", className)}>
      <Image
        src={logo}
        alt=""
        priority={priority}
        sizes="(min-width: 640px) 112px, 90px"
        className={cn(
          "h-14 w-auto drop-shadow-[0_0_12px_rgb(0_217_245/0.35)] transition-all duration-300 group-hover:scale-[1.04] sm:h-[70px]",
          compact && "sm:h-14",
        )}
      />
      <span aria-hidden className="h-9 w-px bg-white/25" />
      <span className="font-display text-[15px] font-bold italic uppercase leading-[0.95] tracking-wide text-white sm:text-lg">
        Auto
        <br />
        <span className="text-ice">Detailing</span>
      </span>
    </Link>
  );
}
