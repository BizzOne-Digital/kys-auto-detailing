import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { PricingCard } from "@/components/services/PricingCard";
import { ServiceComparison } from "@/components/services/ServiceComparison";
import { BookingCTA } from "@/components/home/BookingCTA";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/lib/data/services";
import { images } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Auto Detailing Services & Prices",
  description:
    "Compare KVS Auto Detailing packages: Basic Cleaning from $60, Mini Detailing from $130, and Full Detailing from $200 for cars, SUVs, and trucks.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Auto Detailing Services"
        title="Choose the Right Level of Care for Your Vehicle"
        description="Three clear packages with transparent pricing. From a quick refresh to complete interior and exterior detailing."
        image={images.camaro}
      >
        <GlowButton />
        <PrimaryButton href="#compare" variant="secondary" arrow>
          Compare Packages
        </PrimaryButton>
      </PageHero>

      <section aria-label="Detailing packages" className="overflow-hidden bg-surface py-20 sm:py-24">
        <Container className="space-y-10">
          {services.map((service, i) => (
            <Reveal key={service.id} direction={i % 2 ? "right" : "left"}>
              <PricingCard service={service} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </Container>
      </section>

      <section id="compare" aria-labelledby="compare-title" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <Container className="max-w-5xl">
          <Reveal>
            <SectionHeading
              eyebrow="Compare"
              title={<span id="compare-title">Package Comparison</span>}
              description="See exactly what each package includes at a glance."
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <ServiceComparison />
          </Reveal>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
