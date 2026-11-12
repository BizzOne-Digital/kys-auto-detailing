import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { IconBadge } from "@/components/ui/IconBadge";
import { FacebookIcon } from "@/components/ui/Icons";
import { contact, facebookHref } from "@/lib/data/contact";

const cards = [
  { title: "Call Us", value: contact.phone, href: contact.phoneHref, icon: <Phone />, external: false },
  { title: "Email Us", value: contact.email, href: contact.emailHref, icon: <Mail />, external: false },
  { title: "Facebook", value: "Follow KVS Auto Detailing", href: facebookHref, icon: <FacebookIcon />, external: true },
];

export function ContactInfo() {
  return (
    <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
      {cards.map((c) => (
        <li key={c.title}>
          <a
            href={c.href}
            {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-brand/60 hover:shadow-glow"
          >
            <IconBadge>{c.icon}</IconBadge>
            <span className="min-w-0 flex-1">
              <span className="block font-display text-xl font-bold">{c.title}</span>
              <span className="block break-words text-sm text-slate-300">{c.value}</span>
            </span>
            <ArrowUpRight aria-hidden className="size-5 shrink-0 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
