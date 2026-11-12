"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { FormField, Honeypot, fieldProps } from "@/components/ui/FormField";
import { buttonClasses } from "@/components/ui/PrimaryButton";
import { contactServiceOptions, validateContact, type FieldErrors } from "@/lib/validation";
import { contact } from "@/lib/data/contact";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const found = validateContact(data);
    setErrors(found);
    if (Object.keys(found).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (json.errors) setErrors(json.errors);
        throw new Error();
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-card">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-brand/15 text-brand">
          <CheckCircle2 aria-hidden className="size-9" />
        </span>
        <h2 className="mt-5 text-3xl font-bold">Request Sent</h2>
        <p className="mt-3 max-w-md text-muted">
          Thank you for reaching out. KVS Auto Detailing will get back to you as soon as possible.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className={buttonClasses("outline-dark", "mt-8")}>
          Send Another Request
        </button>
      </div>
    );
  }

  const busy = status === "loading";
  return (
    <form noValidate onSubmit={onSubmit} className="relative rounded-3xl bg-white p-6 shadow-card sm:p-10" aria-labelledby="contact-form-title">
      <h2 id="contact-form-title" className="text-3xl font-bold">
        Send Us a Request
      </h2>
      <p className="mt-2 text-muted">Fill in the details below and we will get back to you.</p>
      <Honeypot />

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <FormField id="name" label="Full Name" required error={errors.name} className="sm:col-span-2">
          <input {...fieldProps("name", errors.name)} type="text" autoComplete="name" disabled={busy} />
        </FormField>
        <FormField id="phone" label="Phone Number" required error={errors.phone}>
          <input {...fieldProps("phone", errors.phone)} type="tel" autoComplete="tel" inputMode="tel" disabled={busy} />
        </FormField>
        <FormField id="email" label="Email Address" required error={errors.email}>
          <input {...fieldProps("email", errors.email)} type="email" autoComplete="email" disabled={busy} />
        </FormField>
        <FormField id="vehicle" label="Vehicle Type" required error={errors.vehicle}>
          <input {...fieldProps("vehicle", errors.vehicle)} type="text" placeholder="e.g. Sedan, SUV, Pickup" disabled={busy} />
        </FormField>
        <FormField id="service" label="Service Interested In" required error={errors.service}>
          <select {...fieldProps("service", errors.service)} defaultValue="" disabled={busy}>
            <option value="" disabled>
              Select a service
            </option>
            {contactServiceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </FormField>
        <FormField id="date" label="Preferred Date" optional error={errors.date} className="sm:col-span-2">
          <input {...fieldProps("date", errors.date)} type="date" disabled={busy} />
        </FormField>
        <FormField id="message" label="Message" optional error={errors.message} className="sm:col-span-2">
          <textarea {...fieldProps("message", errors.message)} rows={5} placeholder="Tell us about your vehicle and what you need." disabled={busy} />
        </FormField>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0" />
          Something went wrong sending your request. Please try again, or call us at {contact.phone}.
        </p>
      )}

      <button type="submit" disabled={busy} className={buttonClasses("primary", "mt-8 w-full disabled:cursor-wait disabled:opacity-80 sm:w-auto")}>
        {busy ? <Loader2 aria-hidden className="size-5 animate-spin" /> : <Send aria-hidden className="size-5" />}
        {busy ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}
