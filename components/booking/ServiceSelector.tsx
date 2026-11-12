"use client";

import { Check } from "lucide-react";
import { services, type ServiceId } from "@/lib/data/services";
import { cn, formatPrice } from "@/lib/utils";

/** Radio-card group for choosing a package. Native radios keep it keyboard accessible. */
export function ServiceSelector({
  value,
  onChange,
  error,
}: {
  value: ServiceId | "";
  onChange: (v: ServiceId) => void;
  error?: string;
}) {
  return (
    <div>
      <div role="radiogroup" aria-label="Select service" aria-describedby={error ? "service-error" : undefined} className="grid gap-4 md:grid-cols-3">
        {services.map((s) => {
          const selected = value === s.id;
          return (
            <label
              key={s.id}
              className={cn(
                "relative flex cursor-pointer flex-col rounded-2xl border-2 bg-white p-5 transition has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand/30",
                selected ? "border-brand shadow-glow" : "border-slate-200 hover:border-brand/50",
              )}
            >
              <input
                type="radio"
                name="service"
                value={s.id}
                checked={selected}
                onChange={() => onChange(s.id)}
                className="sr-only"
              />
              {s.badge && (
                <span className="absolute -top-3 left-5 rounded-full bg-navy-950 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-brand">
                  {s.badge}
                </span>
              )}
              <span className="flex items-start justify-between gap-3">
                <span className="font-display text-xl font-bold text-navy-950">{s.name}</span>
                <span
                  aria-hidden
                  className={cn(
                    "inline-flex size-6 shrink-0 items-center justify-center rounded-full border-2 transition",
                    selected ? "border-brand bg-brand text-navy-950" : "border-slate-300",
                  )}
                >
                  {selected && <Check className="size-3.5" strokeWidth={3} />}
                </span>
              </span>
              <span className="mt-1 text-sm text-muted">{s.features.length} services included</span>
              <span className="mt-4 font-display text-2xl font-bold text-navy-900">
                from {formatPrice(s.prices[0].price)}
              </span>
            </label>
          );
        })}
      </div>
      {error && (
        <p id="service-error" role="alert" className="mt-2 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
