export const contact = {
  businessName: "KVS Auto Detailing",
  phone: "408-797-4569",
  phoneHref: "tel:+14087974569",
  email: "sebastianmirandapool@gmail.com",
  emailHref: "mailto:sebastianmirandapool@gmail.com",
  /**
   * Replace with the client's real Facebook page URL before launch.
   * While empty, Facebook links fall back to facebook.com and are left out of structured data.
   */
  facebookUrl: "",
  serviceArea: "San Jose, California and the surrounding areas",
  serviceAreaShort: "San Jose, CA",
  description:
    "Professional vehicle cleaning and auto detailing in San Jose, California and the surrounding areas. Basic cleaning, mini detailing, and full detailing packages for cars, SUVs, and trucks.",
} as const;

export const facebookHref = contact.facebookUrl || "https://www.facebook.com/";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
