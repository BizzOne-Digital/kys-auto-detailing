"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { mainNav } from "@/lib/data/navigation";
import { contact } from "@/lib/data/contact";
import { cn } from "@/lib/utils";

export function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu after navigation (state adjustment during render, no effect needed).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a,button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex size-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white backdrop-blur transition hover:border-brand hover:text-brand"
      >
        <Menu aria-hidden className="size-6" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              aria-hidden
              className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="panel"
              ref={panelRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="carbon fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto border-l border-brand/20 bg-navy-950 px-6 pb-8 pt-5"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    toggleRef.current?.focus();
                  }}
                  aria-label="Close menu"
                  className="inline-flex size-12 items-center justify-center rounded-xl border border-white/20 text-white transition hover:border-brand hover:text-brand"
                >
                  <X aria-hidden className="size-6" />
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-10">
                <ul className="space-y-1">
                  {mainNav.map((item, i) => {
                    const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + i * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "flex items-center justify-between rounded-xl border px-4 py-4 font-display text-xl font-semibold transition",
                            active
                              ? "border-brand/40 bg-brand/10 text-brand"
                              : "border-transparent text-white hover:border-white/10 hover:bg-white/5",
                          )}
                        >
                          {item.label}
                          <ChevronRight aria-hidden className="size-5 opacity-60" />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-auto space-y-3 pt-10">
                <a
                  href={contact.phoneHref}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 font-semibold text-white transition hover:border-brand hover:text-brand"
                >
                  <Phone aria-hidden className="size-5" />
                  {contact.phone}
                </a>
                <PrimaryButton href="/booking" arrow className="w-full">
                  Book Appointment
                </PrimaryButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
