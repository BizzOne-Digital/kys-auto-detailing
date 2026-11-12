import type { Metadata } from "next";
import { Info, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { GlowButton } from "@/components/ui/GlowButton";
import { GiftTagIcon } from "@/components/ui/Icons";
import { BookingCTA } from "@/components/home/BookingCTA";
import { Reveal } from "@/components/motion/Reveal";
import { offers } from "@/lib/data/offers";
import { images } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Special Offers",
  description:
    "Save 10% on your first appointment with KVS Auto Detailing, and earn additional savings when you refer someone you know.",
  alternates: { canonical: "/offers" },
};

export default function OffersPage() {
  const { firstVisit, referral, terms } = offers;
  return (
    <>
      <PageHero eyebrow="Special Offers" title="Premium Car Care With More Value" image={images.coupe} />

      <section aria-label="Current offers" className="relative overflow-hidden bg-surface py-20 sm:py-24">
        <div aria-hidden className="bg-grid-light mask-fade-b absolute inset-0" />
        <Container className="relative grid gap-8 lg:grid-cols-2">
          <Reveal direction="left">
            <article
              aria-labelledby="first-offer-title"
              className="carbon relative h-full overflow-hidden rounded-3xl border border-brand bg-navy-950 p-8 text-white shadow-glow sm:p-12"
            >
              <div aria-hidden className="absolute -right-20 -top-20 size-72 rounded-full bg-brand/20 blur-[90px]" />
              <GiftTagIcon className="relative size-20" />
              <p className="relative mt-8 font-display text-7xl font-bold leading-none text-brand sm:text-8xl">
                {firstVisit.label}
              </p>
              <h2 id="first-offer-title" className="relative mt-3 text-3xl font-bold uppercase tracking-wide sm:text-4xl">
                {firstVisit.title}
              </h2>
              <p className="relative mt-4 max-w-md text-lg leading-relaxed text-slate-300">{firstVisit.longDescription}</p>
              <GlowButton className="relative mt-10">{firstVisit.cta}</GlowButton>
            </article>
          </Reveal>

          <Reveal direction="right">
            <article
              aria-labelledby="referral-title"
              className="relative h-full overflow-hidden rounded-3xl border border-navy-700/10 bg-white p-8 shadow-card sm:p-12"
            >
              <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-aqua to-transparent" />
              <span className="inline-flex size-20 items-center justify-center rounded-3xl bg-gradient-to-br from-navy-700 to-navy-950 text-brand shadow-glow">
                <Users aria-hidden className="size-10" />
              </span>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-navy-700">{referral.label}</p>
              <h2 id="referral-title" className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                {referral.heading}
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">{referral.description}</p>
              <PrimaryButton href="/contact" variant="outline-dark" arrow className="mt-10">
                Ask About Referral Savings
              </PrimaryButton>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <p className="flex items-start gap-3 rounded-2xl border border-navy-700/10 bg-white p-5 text-sm text-muted">
              <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-navy-700" />
              {terms}
            </p>
          </Reveal>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
