import { BadgeCheck, Clock, Droplets, Smile } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const features = [
  {
    title: "Professional Results",
    text: "Careful detailing with attention to the areas that make the biggest difference.",
    Icon: BadgeCheck,
  },
  { title: "Reliable Service", text: "Appointments handled professionally and efficiently.", Icon: Clock },
  { title: "Quality Products", text: "Proper cleaning and detailing products for vehicle surfaces.", Icon: Droplets },
  {
    title: "Customer Satisfaction",
    text: "Our goal is for every customer to be happy with the finished result.",
    Icon: Smile,
  },
];

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="carbon relative isolate overflow-hidden bg-navy-950 py-24 sm:py-28">
      <div aria-hidden className="bg-grid mask-radial absolute inset-0 -z-10 opacity-70" />
      <div aria-hidden className="absolute left-1/2 top-0 -z-10 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
      <Container>
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Why KVS"
            title={<span id="why-title">Professional Care for Every Vehicle</span>}
          />
        </Reveal>
        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, text, Icon }, i) => (
            <StaggerItem key={title}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-navy-800/80 to-navy-950 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/50 hover:shadow-glow">
                <span aria-hidden className="absolute right-6 top-5 font-display text-5xl font-bold text-white/5 transition-colors group-hover:text-brand/15">
                  0{i + 1}
                </span>
                <IconBadge size="lg">
                  <Icon />
                </IconBadge>
                <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{text}</p>
                <span aria-hidden className="absolute inset-x-7 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
