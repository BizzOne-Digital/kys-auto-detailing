import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Reveal } from "@/components/motion/Reveal";
import { VideoCard } from "./VideoCard";
import { detailVideos } from "@/lib/data/videos";

/** Real finished-result detailing videos. Swipeable row on mobile, grid on desktop. */
export function TransformationSection() {
  return (
    <section aria-labelledby="difference-title" className="relative overflow-hidden bg-surface py-24 sm:py-28">
      <div aria-hidden className="bg-grid-light absolute inset-0 opacity-70" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Real Results"
            title={<span id="difference-title">See the Difference</span>}
            description="Real interior detailing work by KVS Auto Detailing. Tap any video to watch."
          />
        </Reveal>
      </Container>

      <Reveal delay={0.1} className="relative mt-14">
        <ul
          aria-label="Detailing videos"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] sm:px-6 lg:mx-auto lg:grid lg:max-w-5xl lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-8 lg:pb-0"
        >
          {detailVideos.map((video, i) => (
            <li key={video.src} className="w-[68vw] max-w-[280px] shrink-0 snap-center sm:w-[42vw] lg:w-auto lg:max-w-none">
              <VideoCard video={video} index={i} />
            </li>
          ))}
        </ul>
        <p className="mt-3 text-center text-sm text-muted lg:hidden">Swipe to see more</p>
      </Reveal>

      <Container className="relative mt-12 text-center">
        <PrimaryButton href="/booking" arrow>
          Get Results Like These
        </PrimaryButton>
      </Container>
    </section>
  );
}
