import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { contact } from "@/lib/data/contact";

/** Sticky bottom call/book bar on mobile. The footer has matching bottom padding so nothing is hidden. */
export function MobileCTA() {
  return (
    <div className="glass-dark fixed inset-x-0 bottom-0 z-40 border-t border-brand/20 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={contact.phoneHref}
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 text-[15px] font-semibold text-white active:bg-white/10"
        >
          <Phone aria-hidden className="size-5 text-brand" />
          Call Now
        </a>
        <Link
          href="/booking"
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand text-[15px] font-bold text-navy-950 shadow-glow active:bg-aqua"
        >
          <CalendarCheck aria-hidden className="size-5" />
          Book Now
        </Link>
      </div>
    </div>
  );
}
