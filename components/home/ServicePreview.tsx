import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { services } from "@/lib/data/services";

export function ServicePreview() {
  return (
    <section aria-labelledby="packages-title" className="relative overflow-hidden bg-surface py-24 sm:py-28">
      <div aria-hidden className="bg-grid-light mask-fade-b absolute inset-0" />
      <div aria-hidden className="absolute -left-20 top-0 h-40 w-[45%] -skew-x-[30deg] bg-gradient-to-r from-brand/25 to-transparent" />
      <div aria-hidden className="absolute -right-20 top-0 h-40 w-[35%] -skew-x-[30deg] bg-gradient-to-l from-navy-700/10 to-transparent" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title={<span id="packages-title">Auto Detailing Packages</span>}
            description="Choose the level of care your vehicle needs."
          />
        </Reveal>
        <Stagger className="mt-16 grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-8">
          {services.map((service) => (
            <StaggerItem key={service.id} className={service.highlighted ? "h-full md:col-span-2 lg:col-span-1" : "h-full"}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
