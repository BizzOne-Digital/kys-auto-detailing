import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { GlowButton } from "@/components/ui/GlowButton";
import { FacebookIcon } from "@/components/ui/Icons";
import { footerNav } from "@/lib/data/navigation";
import { services } from "@/lib/data/services";
import { contact, facebookHref } from "@/lib/data/contact";

const linkCls = "text-slate-300 transition-colors hover:text-brand";

export function Footer() {
  return (
    <footer className="carbon relative overflow-hidden bg-navy-950 pb-24 text-slate-300 md:pb-0">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent" />
      <div aria-hidden className="absolute -right-32 -top-32 size-96 rounded-full bg-brand/10 blur-[120px]" />
      <Container className="relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm leading-relaxed text-slate-400">
            Professional cleaning and detailing services focused on quality workmanship, attention to detail, and
            customer satisfaction.
          </p>
          <GlowButton className="mt-8" />
        </div>

        <nav aria-label="Quick links" className="lg:col-span-2">
          <h2 className="font-display text-lg font-bold uppercase tracking-wider text-white">Quick Links</h2>
          <ul className="mt-5 space-y-3">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkCls}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-display text-lg font-bold uppercase tracking-wider text-white">Services</h2>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={`/services#${s.id}`} className={linkCls}>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-display text-lg font-bold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a href={contact.phoneHref} className={`${linkCls} inline-flex items-center gap-3`}>
                <Phone aria-hidden className="size-4 text-brand" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={contact.emailHref} className={`${linkCls} inline-flex items-center gap-3 break-all`}>
                <Mail aria-hidden className="size-4 shrink-0 text-brand" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkCls} inline-flex items-center gap-3`}
              >
                <FacebookIcon className="size-4 text-brand" />
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} KVS Auto Detailing. All Rights Reserved.</p>
          <p className="text-slate-500">Professional Car Care</p>
        </Container>
      </div>
    </footer>
  );
}
