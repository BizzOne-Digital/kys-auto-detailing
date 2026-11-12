"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { MobileMenu } from "./MobileMenu";
import { mainNav } from "@/lib/data/navigation";
import { contact } from "@/lib/data/contact";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-dark border-b border-brand/15 py-2.5 shadow-[0_10px_40px_-20px_rgb(0_0_0/0.8)]"
          : "border-b border-transparent bg-transparent py-4 lg:py-6",
      )}
    >
      <Container className="flex items-center justify-between gap-6">
        <Logo compact={scrolled} priority />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-lg px-3 py-2 text-[15px] font-medium transition-colors",
                      active ? "text-brand" : "text-slate-200 hover:text-white",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand transition-transform duration-300",
                        active ? "scale-x-100 shadow-[0_0_10px_rgb(0_217_245)]" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contact.phoneHref}
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 text-sm font-semibold text-white transition-all hover:border-brand hover:text-brand"
          >
            <Phone aria-hidden className="size-4 transition-transform group-hover:-rotate-12" />
            {contact.phone}
          </a>
          <PrimaryButton href="/booking" className="min-h-11 px-5 text-sm">
            Book Appointment
          </PrimaryButton>
        </div>

        <MobileMenu pathname={pathname} />
      </Container>
    </header>
  );
}
