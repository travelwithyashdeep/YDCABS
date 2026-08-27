import { NextResponse, NextRequest } from "next/server";
import { placeGroups } from "@/data/placesData";

const CITY_COORDS: Record<string, { lat: number; lon: number }> = {
  vadodara: { lat: 22.3072, lon: 73.1812 },
  ahmedabad: { lat: 23.0225, lon: 72.5714 },
  surat: { lat: 21.1702, lon: 72.8311 },
  rajkot: { lat: 22.3039, lon: 70.8022 },
  anand: { lat: 22.5645, lon: 72.9289 },
  nadiad: { lat: 22.6916, lon: 72.8634 },
  "statue of unity": { lat: 21.8380, lon: 73.7191 },
  udaipur: { lat: 24.5854, lon: 73.7125 },
  "mount abu": { lat: 24.5925, lon: 72.7156 },
  mumbai: { lat: 19.0760, lon: 72.8777 },
  nashik: { lat: 19.9975, lon: 73.7898 },
  shirdi: { lat: 19.7662, lon: 74.4762 },
  indore: { lat: 22.7196, lon: 75.8577 },
  ujjain: { lat: 23.1760, lon: 75.7885 },
  somnath: { lat: 20.8880, lon: 70.4012 },
  dwarka: { lat: 22.2442, lon: 68.9685 },
  diu: { lat: 20.7144, lon: 70.9822 },
  sasan: { lat: 21.1610, lon: 70.5985 },
  gir: { lat: 21.1610, lon: 70.5985 },
  "gir national park": { lat: 21.1610, lon: 70.5985 },
  pavagadh: { lat: 22.4628, lon: 73.5242 },
  champaner: { lat: 22.4842, lon: 73.5350 },
  daman: { lat: 20.3974, lon: 72.8328 },
  saputara: { lat: 20.5794, lon: 73.7483 },
  pune: { lat: 18.5204, lon: 73.8567 },
  lonavala: { lat: 18.7557, lon: 73.4091 },
  mahabaleshwar: { lat: 17.9258, lon: 73.6560 },
  shrinathji: { lat: 24.9333, lon: 73.8167 },
  nathdwara: { lat: 24.9333, lon: 73.8167 },
  jaipur: { lat: 26.9124, lon: 75.7873 },
  jodhpur: { lat: 26.2389, lon: 73.0243 },
  jaisalmer: { lat: 26.9157, lon: 70.9083 },
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  if (!q || q.length < 2) {
    return NextResponse.json([]);
  }

  const token = process.env.LOCATIONIQ_API_KEY;

  if (token) {
    try {
      const url = `https://api.locationiq.com/v1/autocomplete?key=${token}&q=${encodeURIComponent(
        q
      )}&countrycodes=in&limit=7&format=json`;
      
      const response = await fetch(url, {
        next: { revalidate: 3600 }, // Cache predictions for 1hr
      });

      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
          const seen = new Set<string>();
          const formatted = data
            .map((item: any) => {
              const name = item.display_place || item.display_name?.split(",")[0] || "";
              const subtitle = item.display_name || "";
              return { 
                city: name, 
                subtitle,
                lat: item.lat ? parseFloat(item.lat) : undefined,
                lon: item.lon ? parseFloat(item.lon) : undefined
              };
            })
            .filter((item) => {
              if (!item.city || seen.has(item.city.toLowerCase())) return false;
              seen.add(item.city.toLowerCase());
              return true;
            });
          return NextResponse.json(formatted);
        }
      }
    } catch (err) {
      console.warn("LocationIQ Autocomplete Fetch Failed, using local search fallback.", err);
    }
  }

  // Fallback: Local search from placesData.ts
  const localList = placeGroups.flatMap((group) =>
    group.items.map((item) => {
      const cityKey = item.title.toLowerCase().trim();
      const coords = CITY_COORDS[cityKey] || {};
      return {
        city: item.title,
        subtitle: item.location || "Gujarat & Nearby",
        ...coords
      };
    })
  );

  const majorCities = [
    { city: "Vadodara", subtitle: "Gujarat, India" },
    { city: "Ahmedabad", subtitle: "Gujarat, India" },
    { city: "Surat", subtitle: "Gujarat, India" },
    { city: "Rajkot", subtitle: "Gujarat, India" },
    { city: "Anand", subtitle: "Gujarat, India" },
    { city: "Mumbai", subtitle: "Maharashtra, India" },
    { city: "Udaipur", subtitle: "Rajasthan, India" },
    { city: "Mount Abu", subtitle: "Rajasthan, India" },
    { city: "Shirdi", subtitle: "Maharashtra, India" },
    { city: "Ujjain", subtitle: "Madhya Pradesh, India" },
    { city: "Indore", subtitle: "Madhya Pradesh, India" },
  ].map((item) => {
    const cityKey = item.city.toLowerCase().trim();
    const coords = CITY_COORDS[cityKey] || {};
    return { ...item, ...coords };
  });

  const combined = [...localList, ...majorCities];
  const seen = new Set<string>();
  const filtered = combined
    .filter((item) => {
      const match =
        item.city.toLowerCase().includes(q.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(q.toLowerCase());
      if (!match) return false;
      if (seen.has(item.city.toLowerCase())) return false;
      seen.add(item.city.toLowerCase());
      return true;
    })
    .slice(0, 7);

  return NextResponse.json(filtered);
}
