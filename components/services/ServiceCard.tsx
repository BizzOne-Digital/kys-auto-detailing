import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Car, Check, Truck } from "lucide-react";
import type { Service } from "@/lib/data/services";
import { cn, formatPrice } from "@/lib/utils";

/** Compact package card used on the home page preview. */
export function ServiceCard({ service }: { service: Service }) {
  const featured = service.highlighted;
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-navy-900 text-white shadow-card transition-all duration-500 hover:-translate-y-1.5",
        featured ? "border-brand/70 shadow-glow" :"border-brand/20 hover:border-brand/50",
      )}
    >
      {service.badge && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-navy-950 shadow-glow">
          Recommended
        </span>
      )}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
        <p className="absolute bottom-4 left-6 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
          {service.tagline}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6 pt-3 sm:p-7 sm:pt-3">
        <h3 className="text-[1.75rem] font-bold leading-tight">{service.name}</h3>
        <p className="mt-2 leading-relaxed text-slate-300">{service.description}</p>

        <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-2 text-sm text-slate-200 sm:grid-cols-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand" />
              {f}
            </li>
          ))}
        </ul>

        <div aria-hidden className="min-h-6 flex-1" />
        <dl className="grid grid-cols-2 divide-x divide-white/10 border-y border-white/10 py-5">
          {service.prices.map((p) => {
            const Icon = p.vehicleKey === "small" ? Car : Truck;
            return (
              <div key={p.vehicle} className="flex items-center gap-3 px-2 first:pl-0 last:pl-4">
                <Icon aria-hidden className="size-7 shrink-0 text-brand" strokeWidth={1.5} />
                <div>
                  <dt className="text-xs font-medium text-slate-400">{p.vehicle}</dt>
                  <dd className="font-display text-3xl font-bold leading-none">{formatPrice(p.price)}</dd>
                </div>
              </div>
            );
          })}
        </dl>

        <Link
          href={featured ? `/booking?service=${service.id}` : `/services#${service.id}`}
          className={cn(
            "mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300",
            featured
              ? "bg-brand text-navy-950 hover:bg-aqua hover:shadow-glow"
              : "border border-white/20 text-white hover:border-brand hover:text-brand",
          )}
        >
          {service.previewCta}
          <span className="sr-only"> for {service.name}</span>
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
