import { MetadataRoute } from "next";
import { placesData } from "@/data/placesData";
import { featuresData } from "@/data/featuresData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yashdeeptravels.com";

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/reviewus`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Places dynamic routes
  const placesRoutes = placesData.map((place) => ({
    url: `${baseUrl}/places/${place.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Features dynamic routes
  const featuresRoutes = featuresData.map((feat) => ({
    url: `${baseUrl}/features/${feat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...placesRoutes, ...featuresRoutes];
}
