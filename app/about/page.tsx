import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, ScanSearch, ShieldCheck, Smile } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { GlowButton } from "@/components/ui/GlowButton";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { images } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KVS Auto Detailing: professional workmanship, attention to detail, and a focus on customer satisfaction for every vehicle.",
  alternates: { canonical: "/about" },
};

const approach = [
  {
    title: "Care",
    text: "Every vehicle is treated with respect, using proper methods and products for each surface.",
    Icon: HeartHandshake,
  },
  {
    title: "Attention to Detail",
    text: "We focus on the areas that make the biggest visible difference, inside and out.",
    Icon: ScanSearch,
  },
  {
    title: "Customer Satisfaction",
    text: "The job is done when you are happy with the condition and appearance of your vehicle.",
    Icon: Smile,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About KVS Auto Detailing"
        title="Detailing Focused on Quality, Care & Customer Satisfaction"
        image={images.porsche}
      />

      <section aria-labelledby="story-title" className="overflow-hidden bg-white py-24 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <SectionHeading align="left" eyebrow="Our Story" title={<span id="story-title">Built on Quality Workmanship</span>} />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                KVS Auto Detailing was built around a simple idea: bring experience and quality workmanship to every
                vehicle, and make sure customers are happy with the work performed.
              </p>
              <p>
                Whether you need a quick wash and vacuum or a complete interior and exterior detail, each appointment
                gets the same careful, hands-on attention.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" className="relative">
            <div aria-hidden className="absolute -bottom-4 -right-4 h-2/3 w-2/3 rounded-3xl border-2 border-brand/40" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <Image src={images.handWash.src} alt={images.handWash.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="approach-title" className="carbon relative isolate overflow-hidden bg-navy-950 py-24 sm:py-28">
        <div aria-hidden className="bg-grid mask-radial absolute inset-0 -z-10 opacity-60" />
        <Container>
          <Reveal>
            <SectionHeading tone="dark" eyebrow="Our Approach" title={<span id="approach-title">How We Work</span>} />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {approach.map(({ title, text, Icon }) => (
              <StaggerItem key={title}>
                <article className="h-full rounded-3xl border border-white/10 bg-gradient-to-b from-navy-800/80 to-navy-950 p-8 transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-glow">
                  <IconBadge size="lg">
                    <Icon />
                  </IconBadge>
                  <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-400">{text}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section aria-labelledby="commitment-title" className="bg-surface py-24 sm:py-28">
        <Container>
          <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-brand/30 bg-white p-8 text-center shadow-card sm:p-14">
            <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent" />
            <IconBadge size="lg" className="mx-auto">
              <ShieldCheck />
            </IconBadge>
            <h2 id="commitment-title" className="mt-6 text-4xl font-bold sm:text-5xl">
              Our Commitment
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Every service is performed with one goal: leaving you happy with the condition and appearance of your
              vehicle. If something is not right, we want to hear about it.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <GlowButton>Book Your Detail</GlowButton>
              <PrimaryButton href="/services" variant="outline-dark" arrow>
                View Packages
              </PrimaryButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
