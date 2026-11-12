import { contact, siteUrl } from "@/lib/data/contact";
import { services } from "@/lib/data/services";

/**
 * AutoWash (a schema.org AutomotiveBusiness) with known facts only.
 * No address, hours, coordinates or ratings: the client has not provided them.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    name: contact.businessName,
    description: contact.description,
    url: siteUrl,
    telephone: "+1-408-797-4569",
    email: contact.email,
    ...(contact.facebookUrl ? { sameAs: [contact.facebookUrl] } : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto Detailing Packages",
      itemListElement: services.flatMap((s) =>
        s.prices.map((p) => ({
          "@type": "Offer",
          name: `${s.name} - ${p.vehicle}`,
          price: p.price,
          priceCurrency: "USD",
          itemOffered: { "@type": "Service", name: s.name, description: s.description },
        })),
      ),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
