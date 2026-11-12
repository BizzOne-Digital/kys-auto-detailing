import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export default function NotFound() {
  return (
    <section className="carbon relative isolate flex min-h-[80vh] items-center bg-navy-950 pt-28">
      <div aria-hidden className="bg-grid mask-radial absolute inset-0 -z-10 opacity-60" />
      <Container className="text-center">
        <p className="font-display text-8xl font-bold text-brand">404</p>
        <h1 className="mt-4 text-4xl font-bold text-white">Page Not Found</h1>
        <p className="mt-4 text-slate-300">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <PrimaryButton href="/" arrow>
            Back to Home
          </PrimaryButton>
          <PrimaryButton href="/services" variant="secondary">
            View Services
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
