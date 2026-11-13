import Image from "next/image";
import { Gem, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlowButton } from "@/components/ui/GlowButton";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/lib/data/images";

const trust = [
  { label: "Quality Work", Icon: Sparkles },
  { label: "Reliable Service", Icon: ShieldCheck },
  { label: "Customer Satisfaction", Icon: Gem },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pb-20 pt-32 lg:pb-24 lg:pt-36">
      {/* Image sits right on desktop, full-bleed behind content on mobile */}
      <div className="absolute inset-0 -z-20 lg:left-[38%]">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover object-[60%_center]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-navy-950/40 mix-blend-overlay" />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/40 lg:bg-gradient-to-r lg:from-navy-950 lg:from-35% lg:via-navy-950/80 lg:via-50% lg:to-transparent" />
      <div aria-hidden className="bg-grid mask-radial absolute inset-0 -z-10 opacity-50" />
      <div aria-hidden className="absolute -left-24 top-1/4 -z-10 size-[30rem] animate-glow-pulse rounded-full bg-brand/15 blur-[130px]" />
      {/* Diagonal technical accents */}
      <div aria-hidden className="absolute -bottom-px left-0 -z-10 h-24 w-full bg-gradient-to-r from-brand/0 via-brand/10 to-brand/0 [clip-path:polygon(0_100%,100%_30%,100%_100%)]" />
      <div aria-hidden className="absolute bottom-10 right-0 -z-10 hidden h-px w-1/2 overflow-hidden bg-white/10 lg:block">
        <span className="block h-full w-1/3 animate-streak bg-gradient-to-r from-transparent via-brand to-transparent" />
      </div>

      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.45em] text-brand sm:text-sm">
              <span aria-hidden className="h-px w-10 bg-brand" />
              Professional Car Care · San Jose, CA
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 id="hero-title" className="mt-6 font-display font-bold italic uppercase leading-[0.88] tracking-tight">
              <span className="text-gradient block text-[5.5rem] sm:text-[7.5rem] lg:text-[9rem]">KVS</span>
              <span className="block text-[2.6rem] text-white sm:text-6xl lg:text-7xl">
                Auto <span className="text-brand">Detailing</span>
              </span>
            </h1>
            <span aria-hidden className="mt-5 block h-1 w-48 rounded-full bg-gradient-to-r from-brand via-aqua to-transparent shadow-[0_0_18px_rgb(0_217_245/0.7)]" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 font-display text-2xl font-semibold text-ice sm:text-3xl">
              Professional Detailing. Exceptional Results.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Premium cleaning and detailing services designed to restore your vehicle&apos;s appearance, protect its
              finish, and keep it looking its best.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <GlowButton />
            <PrimaryButton href="/services" variant="secondary" arrow>
              Explore Services
            </PrimaryButton>
          </Reveal>
          <Reveal delay={0.4}>
            <ul className="mt-12 grid grid-cols-3 gap-3 border-t border-white/10 pt-8 sm:max-w-lg">
              {trust.map(({ label, Icon }) => (
                <li key={label} className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-brand/50 bg-brand/10 text-brand shadow-[0_0_20px_-4px_rgb(0_217_245/0.6)]">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <span className="text-[13px] font-semibold leading-tight text-white sm:text-sm">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
