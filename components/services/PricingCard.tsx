import Image from "next/image";
import { Car, Check, Truck } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import type { Service } from "@/lib/data/services";
import { cn, formatPrice } from "@/lib/utils";

/** Full package detail block on the Services page. Alternates image side on desktop. */
export function PricingCard({ service, reverse = false }: { service: Service; reverse?: boolean }) {
  const featured = service.highlighted;
  return (
    <article
      id={service.id}
      aria-labelledby={`${service.id}-title`}
      className={cn(
        "relative scroll-mt-28 overflow-hidden rounded-3xl border shadow-card",
        featured ? "border-brand bg-navy-950 text-white shadow-glow" : "border-navy-700/10 bg-white",
      )}
    >
      <div className={cn("grid lg:grid-cols-2", reverse && "lg:[&>*:first-child]:order-2")}>
        <div className="group relative min-h-64 overflow-hidden sm:min-h-80">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
          {service.badge && (
            <span className="absolute left-5 top-5 rounded-full bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-navy-950 shadow-glow">
              {service.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col p-7 sm:p-10">
          <p className={cn("text-xs font-semibold uppercase tracking-[0.3em]", featured ? "text-brand" : "text-navy-700")}>
            {service.tagline}
          </p>
          <h2 id={`${service.id}-title`} className="mt-2 text-4xl font-bold">
            {service.name}
          </h2>
          <p className={cn("mt-3 leading-relaxed", featured ? "text-slate-300" : "text-muted")}>{service.description}</p>

          <dl className="mt-7 grid grid-cols-2 gap-3">
            {service.prices.map((p) => {
              const Icon = p.vehicleKey === "small" ? Car : Truck;
              return (
                <div
                  key={p.vehicle}
                  className={cn(
                    "rounded-2xl border p-4",
                    featured ? "border-brand/30 bg-white/5" : "border-navy-700/10 bg-surface",
                  )}
                >
                  <dt className={cn("flex items-center gap-2 text-sm font-medium", featured ? "text-slate-300" : "text-muted")}>
                    <Icon aria-hidden className="size-5 text-brand" strokeWidth={1.75} />
                    {p.vehicle}
                  </dt>
                  <dd className="mt-1 font-display text-4xl font-bold">{formatPrice(p.price)}</dd>
                </div>
              );
            })}
          </dl>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.2em]">Includes</h3>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <Check aria-hidden className="size-3.5" strokeWidth={3} />
                </span>
                <span className={featured ? "text-slate-200" : "text-navy-900"}>{f}</span>
              </li>
            ))}
          </ul>

          <PrimaryButton
            href={`/booking?service=${service.id}`}
            variant={featured ? "primary" : "outline-dark"}
            arrow
            className="mt-9 self-start"
          >
            {service.bookCta}
          </PrimaryButton>
        </div>
      </div>
    </article>
  );
}
