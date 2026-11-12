"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Car, ClipboardList, Info, User } from "lucide-react";
import { getPrice, getService, vehicleOptions, type ServiceId, type VehicleKey } from "@/lib/data/services";
import { formatPrice } from "@/lib/utils";

export type SummaryData = {
  service: ServiceId | "";
  vehicle: VehicleKey | "";
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
};

function formatDate(value: string) {
  if (!value) return "";
  const d = new Date(`${value}T12:00:00`);
  return Number.isNaN(d.getTime())
    ? value
    : d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex gap-3 border-b border-white/10 py-4 last:border-0">
      <span aria-hidden className="mt-0.5 text-brand [&_svg]:size-5">
        {icon}
      </span>
      <div className="min-w-0">
        <dt className="text-xs font-semibold uppercase tracking-widest text-slate-400">{label}</dt>
        <dd className="mt-1 break-words text-white">{value || <span className="text-slate-500">Not selected</span>}</dd>
      </div>
    </div>
  );
}

export function BookingSummary({ data }: { data: SummaryData }) {
  const service = getService(data.service);
  const vehicle = vehicleOptions.find((v) => v.key === data.vehicle);
  const price = getPrice(data.service, data.vehicle);
  const ready = Boolean(service && vehicle);

  return (
    <aside aria-label="Appointment summary" className="carbon overflow-hidden rounded-3xl border border-brand/30 bg-navy-950 p-6 shadow-glow sm:p-8">
      <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white">Appointment Summary</h2>
      <dl className="mt-4">
        <Row icon={<ClipboardList />} label="Selected Service" value={service?.name} />
        <Row icon={<Car />} label="Vehicle Type" value={vehicle?.label} />
        <Row
          icon={<CalendarDays />}
          label="Preferred Date"
          value={data.date ? `${formatDate(data.date)}${data.time ? ` · ${data.time}` : ""}` : ""}
        />
        <Row
          icon={<User />}
          label="Contact Information"
          value={
            data.name || data.phone || data.email ? (
              <>
                {data.name && <span className="block">{data.name}</span>}
                {data.phone && <span className="block text-sm text-slate-300">{data.phone}</span>}
                {data.email && <span className="block text-sm text-slate-300">{data.email}</span>}
              </>
            ) : (
              ""
            )
          }
        />
      </dl>

      <div className="mt-4 rounded-2xl border border-brand/30 bg-brand/10 p-5" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand">Estimated Price</p>
        <AnimatePresence mode="wait">
          <motion.p
            key={`${data.service}-${data.vehicle}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-1 font-display text-4xl font-bold text-white"
          >
            {!ready ? "--" : price !== null ? formatPrice(price) : <span className="text-2xl">Contact for confirmation</span>}
          </motion.p>
        </AnimatePresence>
        {ready && price === null && (
          <p className="mt-2 text-sm text-slate-300">
            A listed price is not available for this vehicle and package combination. We will confirm pricing with you.
          </p>
        )}
      </div>

      <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-slate-400">
        <Info aria-hidden className="mt-0.5 size-4 shrink-0" />
        This is an appointment request. KVS Auto Detailing will contact you to confirm availability. First-time customers
        receive 10% off.
      </p>
    </aside>
  );
}
