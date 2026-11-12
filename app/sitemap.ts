import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/data/contact";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/offers", "/contact", "/booking"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
