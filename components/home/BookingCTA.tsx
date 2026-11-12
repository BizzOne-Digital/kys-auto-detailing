import Image from "next/image";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlowButton } from "@/components/ui/GlowButton";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Reveal } from "@/components/motion/Reveal";
import { contact } from "@/lib/data/contact";
import { images } from "@/lib/data/images";

export function BookingCTA({
  title = "Ready to Give Your Vehicle the Care It Deserves?",
  description = "Choose your detailing package and request your appointment today.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-navy-950 py-28 sm:py-36">
      <Image src={images.moodyCar.src} alt="" aria-hidden fill sizes="100vw" className="-z-20 object-cover object-center opacity-60" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950 via-navy-950/60 to-navy-950" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgb(0_217_245/0.18),transparent_65%)]" />
      <div aria-hidden className="bg-grid mask-radial absolute inset-0 -z-10 opacity-40" />
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand">Book Today</p>
          <h2 id="cta-title" className="mt-5 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">{description}</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <GlowButton />
            <PrimaryButton
              href={contact.phoneHref}
              variant="secondary"
              icon={<Phone aria-hidden className="size-5" />}
            >
              Call {contact.phone}
            </PrimaryButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
