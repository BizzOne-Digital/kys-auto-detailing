"use client";

import Link from "next/link";
import { useState } from "react";
import { AlertCircle, CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";
import { ServiceSelector } from "./ServiceSelector";
import { VehicleSelector } from "./VehicleSelector";
import { BookingSummary, type SummaryData } from "./BookingSummary";
import { FormField, Honeypot, fieldProps } from "@/components/ui/FormField";
import { buttonClasses } from "@/components/ui/PrimaryButton";
import { validateBooking, type FieldErrors } from "@/lib/validation";
import { contact } from "@/lib/data/contact";
import type { ServiceId } from "@/lib/data/services";

const timeSlots = ["Morning (8am - 12pm)", "Afternoon (12pm - 4pm)", "Evening (4pm - 7pm)", "Flexible"];

type Status = "idle" | "loading" | "success" | "error";

const empty: SummaryData & { notes: string } = {
  service: "",
  vehicle: "",
  date: "",
  time: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="relative border-l-2 border-brand/25 pb-10 pl-8 last:pb-0 sm:pl-10">
      <span
        aria-hidden
        className="absolute -left-[17px] top-0 inline-flex size-8 items-center justify-center rounded-full border-2 border-brand bg-navy-950 font-display text-sm font-bold text-brand"
      >
        {n}
      </span>
      <legend className="mb-5 font-display text-2xl font-bold text-navy-950">
        <span className="sr-only">Step {n}: </span>
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

export function BookingForm({ initialService }: { initialService: ServiceId | "" }) {
  const [data, setData] = useState({ ...empty, service: initialService });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = <K extends keyof typeof data>(key: K, value: (typeof data)[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors(({ [key]: _removed, ...rest }) => rest);
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("company") as HTMLInputElement | null)?.value ?? "";
    const found = validateBooking(data);
    setErrors(found);
    if (Object.keys(found).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, company: honeypot }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (json.errors) setErrors(json.errors);
        throw new Error();
      }
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl bg-white p-8 text-center shadow-card sm:p-12">
        <span className="inline-flex size-20 items-center justify-center rounded-full bg-brand/15 text-brand shadow-glow">
          <CheckCircle2 aria-hidden className="size-11" />
        </span>
        <h2 className="mt-6 text-3xl font-bold sm:text-4xl">Request Received</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Your appointment request has been received. KVS Auto Detailing will contact you to confirm availability.
        </p>
        <p className="mt-3 text-sm text-muted">
          Need it sooner? Call{" "}
          <a href={contact.phoneHref} className="font-semibold text-navy-700 underline underline-offset-4">
            {contact.phone}
          </a>
          .
        </p>
        <Link href="/" className={buttonClasses("outline-dark", "mt-8")}>
          Back to Home
        </Link>
      </div>
    );
  }

  const busy = status === "loading";
  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] xl:gap-14">
      <div className="relative rounded-3xl bg-white p-5 pl-7 shadow-card ring-1 ring-navy-700/5 sm:p-10 sm:pl-12">
        <Honeypot />
        <Step n={1} title="Select Service">
          <ServiceSelector value={data.service} onChange={(v) => set("service", v)} error={errors.service} />
        </Step>

        <Step n={2} title="Vehicle Type">
          <VehicleSelector value={data.vehicle} onChange={(v) => set("vehicle", v)} error={errors.vehicle} />
        </Step>

        <Step n={3} title="Customer Information">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField id="name" label="Full Name" required error={errors.name} className="sm:col-span-2">
              <input {...fieldProps("name", errors.name)} type="text" autoComplete="name" value={data.name} onChange={(e) => set("name", e.target.value)} disabled={busy} />
            </FormField>
            <FormField id="phone" label="Phone" required error={errors.phone}>
              <input {...fieldProps("phone", errors.phone)} type="tel" inputMode="tel" autoComplete="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} disabled={busy} />
            </FormField>
            <FormField id="email" label="Email" required error={errors.email}>
              <input {...fieldProps("email", errors.email)} type="email" autoComplete="email" value={data.email} onChange={(e) => set("email", e.target.value)} disabled={busy} />
            </FormField>
          </div>
        </Step>

        <Step n={4} title="Preferred Appointment">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField id="date" label="Preferred Date" required error={errors.date}>
              <input {...fieldProps("date", errors.date)} type="date" value={data.date} onChange={(e) => set("date", e.target.value)} disabled={busy} />
            </FormField>
            <FormField id="time" label="Preferred Time" required error={errors.time}>
              <select {...fieldProps("time", errors.time)} value={data.time} onChange={(e) => set("time", e.target.value)} disabled={busy}>
                <option value="" disabled>
                  Select a time
                </option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </FormField>
          </div>
        </Step>

        <Step n={5} title="Additional Notes">
          <FormField id="notes" label="Notes" optional error={errors.notes}>
            <textarea
              {...fieldProps("notes", errors.notes)}
              rows={4}
              placeholder="Anything we should know? Stains, pet hair, special requests..."
              value={data.notes}
              onChange={(e) => set("notes", e.target.value)}
              disabled={busy}
            />
          </FormField>
        </Step>
      </div>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <BookingSummary data={data} />
        {status === "error" && (
          <p role="alert" className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0" />
            We could not send your request. Please try again or call {contact.phone}.
          </p>
        )}
        {Object.keys(errors).length > 0 && status !== "error" && (
          <p role="alert" className="mt-4 text-sm font-medium text-red-600">
            Please complete the highlighted fields.
          </p>
        )}
        <button type="submit" disabled={busy} className={buttonClasses("primary", "mt-5 w-full disabled:cursor-wait disabled:opacity-80")}>
          {busy ? <Loader2 aria-hidden className="size-5 animate-spin" /> : <CalendarCheck aria-hidden className="size-5" />}
          {busy ? "Sending Request..." : "Request Appointment"}
        </button>
      </div>
    </form>
  );
}
