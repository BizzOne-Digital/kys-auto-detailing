import Image from "next/image";
import { Container } from "./Container";
import { Reveal } from "@/components/motion/Reveal";

/** Dark cinematic hero used by inner pages. Holds the page's single <h1>. */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image: { src: string; alt: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-36 sm:pb-24 sm:pt-44">
      <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="-z-20 object-cover object-center opacity-45" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      <div aria-hidden className="bg-grid mask-radial absolute inset-0 -z-10 opacity-60" />
      <div aria-hidden className="absolute -left-40 top-20 -z-10 size-[28rem] rounded-full bg-brand/15 blur-[120px]" />
      <Container>
        <Reveal className="max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-brand">
            <span aria-hidden className="h-px w-10 bg-brand" />
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-bold uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl">{title}</h1>
          {description && <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>}
          {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </Reveal>
      </Container>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
    </section>
  );
}
