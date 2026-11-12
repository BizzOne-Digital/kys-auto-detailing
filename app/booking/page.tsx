import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BookingForm } from "@/components/booking/BookingForm";
import { contact } from "@/lib/data/contact";
import { serviceIds } from "@/lib/validation";
import type { ServiceId } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request your auto detailing appointment with KVS Auto Detailing. Choose a package, select your vehicle, and pick a preferred date and time.",
  alternates: { canonical: "/booking" },
};

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const initialService = serviceIds.includes(service as ServiceId) ? (service as ServiceId) : "";

  return (
    <>
      <section className="carbon relative isolate overflow-hidden bg-navy-950 pb-36 pt-36 sm:pt-44">
        <div aria-hidden className="bg-grid mask-radial absolute inset-0 -z-10 opacity-60" />
        <div aria-hidden className="absolute left-1/2 top-10 -z-10 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" />
        <Container className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand">Appointment Request</p>
          <h1 className="mt-5 text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Book Your Detailing Appointment
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
            Five quick steps. We will contact you to confirm your time.
          </p>
          <a href={contact.phoneHref} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ice hover:text-brand">
            <Phone aria-hidden className="size-4" />
            Prefer to call? {contact.phone}
          </a>
        </Container>
      </section>
      <section aria-label="Booking form" className="bg-surface pb-24">
        <Container className="-mt-24">
          <BookingForm key={initialService} initialService={initialService} />
        </Container>
      </section>
    </>
  );
}
