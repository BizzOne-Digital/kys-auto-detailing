import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact KVS Auto Detailing. Call 408-797-4569, email us, or send a request to get your vehicle looking its best.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact KVS"
        title="Let's Get Your Vehicle Looking Its Best"
        description="Questions about a package or ready to schedule? Call, email, or send us a request below."
        image={images.bmw}
      />
      <section aria-label="Contact details and form" className="carbon relative overflow-hidden bg-navy-950 pb-24">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-14">
          <Reveal direction="left" className="lg:pt-2">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white">Reach Us Directly</h2>
            <p className="mt-2 mb-6 text-slate-400">The fastest way to reach us is by phone.</p>
            <ContactInfo />
          </Reveal>
          <Reveal direction="right">
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
