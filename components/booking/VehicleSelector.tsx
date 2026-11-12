"use client";

import { Car, CarFront, Truck } from "lucide-react";
import { vehicleOptions, type VehicleKey } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const icons: Record<VehicleKey, typeof Car> = { small: Car, suv: Truck, large: CarFront };

export function VehicleSelector({
  value,
  onChange,
  error,
}: {
  value: VehicleKey | "";
  onChange: (v: VehicleKey) => void;
  error?: string;
}) {
  return (
    <div>
      <div role="radiogroup" aria-label="Vehicle type" aria-describedby={error ? "vehicle-error" : undefined} className="grid gap-3 sm:grid-cols-3">
        {vehicleOptions.map((v) => {
          const Icon = icons[v.key];
          const selected = value === v.key;
          return (
            <label
              key={v.key}
              className={cn(
                "flex cursor-pointer items-center gap-4 rounded-2xl border-2 bg-white p-4 transition has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand/30 sm:flex-col sm:items-start",
                selected ? "border-brand shadow-glow" : "border-slate-200 hover:border-brand/50",
              )}
            >
              <input type="radio" name="vehicle" value={v.key} checked={selected} onChange={() => onChange(v.key)} className="sr-only" />
              <span
                aria-hidden
                className={cn(
                  "inline-flex size-12 shrink-0 items-center justify-center rounded-xl transition",
                  selected ? "bg-navy-950 text-brand" : "bg-surface text-navy-700",
                )}
              >
                <Icon className="size-6" />
              </span>
              <span>
                <span className="block font-display text-lg font-bold text-navy-950">{v.label}</span>
                <span className="block text-sm text-muted">{v.hint}</span>
              </span>
            </label>
          );
        })}
      </div>
      {error && (
        <p id="vehicle-error" role="alert" className="mt-2 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
