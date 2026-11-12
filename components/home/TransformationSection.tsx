import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { images } from "@/lib/data/images";

export function TransformationSection() {
  return (
    <section aria-labelledby="difference-title" className="relative overflow-hidden bg-surface py-24 sm:py-28">
      <div aria-hidden className="bg-grid-light absolute inset-0 opacity-70" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="The Transformation"
            title={<span id="difference-title">See the Difference</span>}
            description="Drag the slider to compare a dull, neglected finish with a freshly detailed one."
          />
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-14 max-w-5xl">
          <BeforeAfterSlider src={images.garageNight.src} alt={images.garageNight.alt} />
          <p className="mt-4 text-center text-sm text-muted">Illustrative comparison. Results vary by vehicle condition.</p>
        </Reveal>
      </Container>
    </section>
  );
}
