import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServicePreview } from "@/components/home/ServicePreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AboutPreview } from "@/components/home/AboutPreview";
import { TransformationSection } from "@/components/home/TransformationSection";
import { SpecialOffer } from "@/components/home/SpecialOffer";
import { BookingCTA } from "@/components/home/BookingCTA";

export const metadata: Metadata = {
  title: { absolute: "KVS Auto Detailing | Car Detailing in San Jose, CA" },
  description:
    "Professional vehicle cleaning and auto detailing in San Jose, California and the surrounding areas. Choose from basic cleaning, mini detailing, and full detailing packages.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicePreview />
      <WhyChooseUs />
      <AboutPreview />
      <TransformationSection />
      <SpecialOffer />
      <BookingCTA />
    </>
  );
}
