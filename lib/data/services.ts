import { images } from "./images";

export type VehicleKey = "small" | "suv" | "large";
export type ServiceId = "basic" | "mini" | "full";
export type ServicePrice = { vehicle: string; vehicleKey: VehicleKey; price: number };
export type FeatureKey = "wash" | "vacuum" | "treatment" | "tire" | "carpet" | "seat" | "window";

export type Service = {
  id: ServiceId;
  name: string;
  tagline: string;
  description: string;
  image: { src: string; alt: string };
  prices: ServicePrice[];
  features: string[];
  featureKeys: FeatureKey[];
  previewCta: string;
  bookCta: string;
  badge?: string;
  highlighted?: boolean;
};

export const services: Service[] = [
  {
    id: "basic",
    name: "Basic Cleaning",
    tagline: "Quick refresh",
    description: "A quick exterior and interior refresh including wash and vacuum.",
    image: images.handWash,
    prices: [
      { vehicle: "Small Cars", vehicleKey: "small", price: 60 },
      { vehicle: "SUVs / Trucks", vehicleKey: "suv", price: 80 },
    ],
    features: ["Exterior wash", "Interior vacuum"],
    featureKeys: ["wash", "vacuum"],
    previewCta: "View Details",
    bookCta: "Book Basic Cleaning",
  },
  {
    id: "mini",
    name: "Mini Detailing",
    tagline: "Deeper clean",
    description: "A deeper clean including wash, vacuum, leather or plastic treatment, and tire shine.",
    image: images.interior,
    prices: [
      { vehicle: "Small Cars", vehicleKey: "small", price: 130 },
      { vehicle: "Large Cars", vehicleKey: "large", price: 150 },
    ],
    features: ["Exterior wash", "Interior vacuum", "Leather treatment or plastic treatment", "Tire shine"],
    featureKeys: ["wash", "vacuum", "treatment", "tire"],
    previewCta: "View Details",
    bookCta: "Book Mini Detailing",
  },
  {
    id: "full",
    name: "Full Detailing",
    tagline: "Complete care",
    description:
      "Complete interior and exterior care for customers who want their vehicle looking its absolute best.",
    image: images.mustang,
    prices: [
      { vehicle: "Small Cars", vehicleKey: "small", price: 200 },
      { vehicle: "Large Cars", vehicleKey: "large", price: 250 },
    ],
    features: [
      "Exterior wash",
      "Interior vacuum",
      "Leather treatment",
      "Plastic treatment",
      "Carpet stain removal",
      "Seat polishing / cleaning",
      "Window cleaning",
      "Tire shine",
    ],
    featureKeys: ["wash", "vacuum", "treatment", "tire", "carpet", "seat", "window"],
    previewCta: "Book Full Detail",
    bookCta: "Book Full Detailing",
    badge: "Most Complete",
    highlighted: true,
  },
];

export const comparisonRows: { key: FeatureKey; label: string }[] = [
  { key: "wash", label: "Wash" },
  { key: "vacuum", label: "Vacuum" },
  { key: "treatment", label: "Leather / Plastic Treatment" },
  { key: "tire", label: "Tire Shine" },
  { key: "carpet", label: "Carpet Stain Treatment" },
  { key: "seat", label: "Seat Treatment" },
  { key: "window", label: "Window Cleaning" },
];

export const vehicleOptions: { key: VehicleKey; label: string; hint: string }[] = [
  { key: "small", label: "Small Car", hint: "Sedans, coupes, compacts" },
  { key: "suv", label: "SUV / Truck", hint: "SUVs, pickups, crossovers" },
  { key: "large", label: "Large Vehicle", hint: "Larger cars and full-size vehicles" },
];

/** Returns a price only when the client has provided one for this exact combination. */
export function getPrice(serviceId: ServiceId | "", vehicle: VehicleKey | ""): number | null {
  const service = services.find((s) => s.id === serviceId);
  if (!service || !vehicle) return null;
  return service.prices.find((p) => p.vehicleKey === vehicle)?.price ?? null;
}

export function getService(id: string) {
  return services.find((s) => s.id === id);
}
