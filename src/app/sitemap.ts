import type { MetadataRoute } from "next";

const baseUrl = "https://lankaroute.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: baseUrl, changeFrequency: "weekly", priority: 1 }];
}
