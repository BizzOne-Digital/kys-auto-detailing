import Image from "next/image";
import { Car, Layers, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/lib/data/images";

const stats = [
  { label: "Professional Care", Icon: ShieldCheck },
  { label: "Multiple Detailing Packages", Icon: Layers },
  { label: "Cars, SUVs & Trucks", Icon: Car },
];

export function AboutPreview() {
  return (
    <section aria-labelledby="about-title" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left" className="relative">
          <div aria-hidden className="absolute -left-4 -top-4 h-2/3 w-2/3 rounded-3xl border-2 border-brand/40" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={images.handWash.src}
              alt={images.handWash.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          </div>
          <div className="glass-dark absolute -bottom-6 right-4 max-w-[15rem] rounded-2xl border border-brand/30 p-5 text-white shadow-glow sm:right-8">
            <p className="font-display text-xl font-bold leading-tight">Hands-on care, every appointment.</p>
          </div>
        </Reveal>

        <Reveal direction="right">
          <SectionHeading
            align="left"
            eyebrow="About KVS"
            title={<span id="about-title">Experience You Can See in Every Detail</span>}
          />
          <p className="mt-6 text-lg leading-relaxed text-muted">
            At KVS Auto Detailing, we focus on professional workmanship, attention to detail, and customer
            satisfaction. Every vehicle receives careful treatment with the goal of delivering a cleaner, fresher, and
            better-looking result.
          </p>
          <ul className="mt-9 grid gap-4 sm:grid-cols-3">
            {stats.map(({ label, Icon }) => (
              <li key={label} className="rounded-2xl border border-navy-700/10 bg-surface p-5 transition hover:border-brand/50 hover:shadow-glow">
                <IconBadge size="sm">
                  <Icon />
                </IconBadge>
                <p className="mt-4 font-display text-lg font-bold leading-tight text-navy-900">{label}</p>
              </li>
            ))}
          </ul>
          <PrimaryButton href="/about" variant="outline-dark" arrow className="mt-9">
            Learn More About Us
          </PrimaryButton>
        </Reveal>
      </Container>
    </section>
  );
}
