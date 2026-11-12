import { Check, Minus } from "lucide-react";
import { comparisonRows, services } from "@/lib/data/services";
import { cn, formatPrice } from "@/lib/utils";

function Mark({ included, label }: { included: boolean; label: string }) {
  return included ? (
    <span className="inline-flex size-7 items-center justify-center rounded-full bg-brand text-navy-950 shadow-[0_0_14px_-2px_rgb(0_217_245/0.8)]">
      <Check aria-hidden className="size-4" strokeWidth={3} />
      <span className="sr-only">{label}: included</span>
    </span>
  ) : (
    <span className="inline-flex size-7 items-center justify-center rounded-full bg-white/5 text-slate-500">
      <Minus aria-hidden className="size-4" />
      <span className="sr-only">{label}: not included</span>
    </span>
  );
}

/** Package comparison. A short-label table that stays readable down to 320px. */
export function ServiceComparison() {
  return (
    <div className="overflow-hidden rounded-3xl border border-brand/25 bg-navy-950 shadow-glow">
      <table className="w-full table-fixed border-collapse text-left text-white">
        <caption className="sr-only">Comparison of what each detailing package includes</caption>
        <colgroup>
          <col className="w-[40%] sm:w-[46%]" />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr className="border-b border-white/10">
            <th scope="col" className="p-3 text-xs font-semibold uppercase tracking-widest text-slate-400 sm:p-6">
              Service
            </th>
            {services.map((s) => (
              <th
                key={s.id}
                scope="col"
                className={cn("p-2 text-center align-bottom sm:p-6", s.highlighted && "bg-brand/10")}
              >
                {s.highlighted && (
                  <span className="mb-2 hidden rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-navy-950 sm:inline-block">
                    Best
                  </span>
                )}
                <span className="block font-display text-base font-bold leading-tight sm:text-2xl">
                  {s.name.split(" ")[0]}
                </span>
                <span className="mt-1 block text-[11px] text-slate-400 sm:text-sm">from {formatPrice(s.prices[0].price)}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.key} className="border-b border-white/5 last:border-0 even:bg-white/[0.02]">
              <th scope="row" className="p-3 text-sm font-medium text-slate-200 sm:p-6 sm:text-base">
                {row.label}
              </th>
              {services.map((s) => (
                <td key={s.id} className={cn("p-2 text-center sm:p-5", s.highlighted && "bg-brand/10")}>
                  <Mark included={s.featureKeys.includes(row.key)} label={`${s.name}, ${row.label}`} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
