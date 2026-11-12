import Image from "next/image";
import { BadgePercent, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { GiftTagIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/motion/Reveal";
import { offers } from "@/lib/data/offers";
import { images } from "@/lib/data/images";

export function SpecialOffer() {
  return (
    <section aria-labelledby="offer-title" className="relative isolate overflow-hidden bg-navy-900 py-20 sm:py-24">
      <Image src={images.porsche.src} alt="" aria-hidden fill sizes="100vw" className="-z-20 object-cover opacity-25" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-700/80" />
      <div aria-hidden className="absolute -right-24 top-0 -z-10 h-full w-1/2 -skew-x-[24deg] border-l border-brand/30 bg-gradient-to-r from-brand/10 to-transparent" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-14">
          <Reveal direction="left" className="flex items-center gap-6">
            <GiftTagIcon className="size-20 shrink-0 drop-shadow-[0_0_20px_rgb(0_217_245/0.5)] sm:size-24" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">Special Offers</p>
              <h2 id="offer-title" className="mt-2 max-w-sm text-3xl font-bold leading-tight text-white sm:text-4xl">
                {offers.firstVisit.heading}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2 lg:border-l lg:border-white/10 lg:pl-14">
            <div className="rounded-2xl border border-brand/30 bg-white/5 p-5 backdrop-blur">
              <BadgePercent aria-hidden className="size-7 text-brand" />
              <p className="mt-3 font-display text-xl font-bold text-white">10% Off Your First Visit</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">{offers.firstVisit.description}</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <Users aria-hidden className="size-7 text-brand" />
              <p className="mt-3 font-display text-xl font-bold text-white">{offers.referral.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">{offers.referral.description}</p>
            </div>
            <PrimaryButton href="/offers" arrow className="w-full sm:col-span-2 sm:justify-self-start sm:w-auto">
              Claim Your Discount
            </PrimaryButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
