import type { Metadata, Viewport } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { StructuredData } from "@/components/layout/StructuredData";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { siteUrl } from "@/lib/data/contact";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KVS Auto Detailing | Professional Car Detailing",
    template: "%s | KVS Auto Detailing",
  },
  description:
    "Professional vehicle cleaning and auto detailing services from KVS Auto Detailing. Choose from basic cleaning, mini detailing, and full detailing packages.",
  applicationName: "KVS Auto Detailing",
  openGraph: {
    type: "website",
    siteName: "KVS Auto Detailing",
    title: "KVS Auto Detailing | Professional Car Detailing",
    description:
      "Professional vehicle cleaning and auto detailing services. Basic cleaning, mini detailing, and full detailing packages.",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#031923",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-950"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <MobileCTA />
        </MotionProvider>
        <StructuredData />
      </body>
    </html>
  );
}
