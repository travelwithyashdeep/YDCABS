import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecularButton from "@/components/SpecularButton";
import { placesData } from "@/data/placesData";
import {
  MapPin,
  Calendar,
  Clock,
  Check,
  Phone,
  MessageSquare,
  ChevronRight,
  ArrowLeft,
  ShieldCheck,
  UserCheck,
  BadgeHelp,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return placesData.map((place) => ({
    slug: place.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const place = placesData.find((p) => p.slug === slug);
  if (!place) {
    return {
      title: "Destination Not Found - Yashdeep Travels",
    };
  }

  return {
    title: `${place.title} Cab Package | Vadodara to ${place.title} Taxi`,
    description:
      place.description ||
      `Book a private car or cab to ${place.title} with Yashdeep Travels. Check Sedan, SUV, Innova fares, local spots, and travel highlights.`,
    alternates: {
      canonical: `/places/${slug}`,
    },
    openGraph: {
      title: `${place.title} Cab Package - Yashdeep Travels`,
      description: place.description,
      images: [
        {
          url: place.img,
          width: 800,
          height: 600,
          alt: place.title,
        },
      ],
    },
  };
}

export default async function PlacePage({ params }: PageProps) {
  const { slug } = await params;
  const place = placesData.find((p) => p.slug === slug);

  if (!place) {
    notFound();
  }

  // Get 3 alternate tours for the bottom recommendation widget
  const suggestedTours = placesData.filter((p) => p.slug !== slug).slice(0, 3);

  // Prepare custom prefilled WhatsApp message for quick booking
  const waMsg = `Hello Yashdeep Travels, I am planning a trip to *${place.title}* and would like to inquire about cab packages, vehicle availability, and estimated fare rates. Please share the details. Thank you.`;
  const waLink = `https://wa.me/919099042156?text=${encodeURIComponent(waMsg)}`;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAFAFA] py-8 px-4 md:px-8 text-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
            <Link
              href="/"
              className="hover:text-[#D51745] transition-colors duration-150"
            >
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-gray-400">Destinations</span>
            <ChevronRight size={12} />
            <span className="text-[#D51745] font-semibold">{place.title}</span>
          </div>

          {/* Hero Banner Section */}
          <div className="relative rounded-3xl overflow-hidden border border-gray-200/80 mb-12 h-64 md:h-[400px] shadow-sm">
            {/* Background image */}
            <div className="absolute inset-0 bg-gray-200">
              <Image
                src={place.img}
                alt={place.title}
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-90"
              />
            </div>

            {/* Dark gradient overlay to ensure white text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />

            {/* Banner details */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 flex flex-col items-start z-10">
              <span className="bg-[#D51745] text-[10px] md:text-xs uppercase font-bold tracking-wider text-neutral-50 px-3 py-1 rounded mb-4 shadow-sm">
                {place.tag || "Outstation Tour"}
              </span>
              <h1 className="text-3xl md:text-5xl font-black uppercase text-neutral-50 tracking-tight leading-tight drop-shadow-sm">
                {place.title}
              </h1>
              <p className="text-xs md:text-base text-neutral-100 mt-2 max-w-2xl font-medium drop-shadow-sm">
                {place.description}
              </p>

              {/* Stats overlay */}
              <div className="flex flex-wrap gap-4 mt-6 text-xs font-semibold text-neutral-50">
                <span className="flex items-center gap-1 bg-black/45 backdrop-blur-md px-2.5 py-1.5 rounded border border-white/10">
                  <MapPin size={12} className="text-[#D51745]" />
                  {place.location}
                </span>
                <span className="flex items-center gap-1 bg-black/45 backdrop-blur-md px-2.5 py-1.5 rounded border border-white/10">
                  <Calendar size={12} className="text-[#D51745]" />
                  {place.duration}
                </span>
                <span className="flex items-center gap-1 bg-black/45 backdrop-blur-md px-2.5 py-1.5 rounded border border-white/10">
                  <Clock size={12} className="text-[#D51745]" />
                  Distance: {place.distance}
                </span>
              </div>
            </div>
          </div>

          {/* Grid Layout: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column (8 cols): Tour Guide Info */}
            <div className="lg:col-span-8 space-y-8">
              {/* Introduction Quote */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 border-l-4 border-l-[#D51745] text-xs md:text-sm text-gray-700 leading-relaxed italic shadow-sm font-medium">
                "{place.introduction}"
              </div>

              {/* Detailed Description */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-black uppercase text-gray-950 tracking-tight border-b border-gray-200 pb-3">
                  About the Journey
                </h2>
                <p className="text-xs md:text-sm text-gray-650 leading-relaxed font-semibold">
                  {place.fullDescription}
                </p>
              </div>

              {/* Tour Highlights */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-black uppercase text-gray-950 tracking-tight border-b border-gray-200 pb-3">
                  Trip Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {place.highlights.map((high, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs md:text-sm text-gray-700 font-semibold"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#D51745]/15 flex items-center justify-center text-[#D51745] shrink-0 mt-0.5">
                        <Check size={12} />
                      </span>
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MUST-SEE Attractions */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-black uppercase text-gray-950 tracking-tight border-b border-gray-200 pb-3">
                  Key Attractions to Visit
                </h2>
                <div className="space-y-4">
                  {place.placesToVisit.map((spot, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs"
                    >
                      <span className="w-8 h-8 rounded-lg bg-[#D51745] flex items-center justify-center font-bold text-sm text-neutral-50 shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="font-extrabold text-sm md:text-base text-gray-900">
                          {spot.name}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed font-medium">
                          {spot.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fare Comparison Table */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-black uppercase text-gray-950 tracking-tight border-b border-gray-200 pb-3">
                  Estimated Fares
                </h2>
                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-xs">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-[10px] tracking-wider border-b border-gray-200">
                      <tr>
                        <th className="p-4">Car Type</th>
                        <th className="p-4">Seating Capacity</th>
                        <th className="p-4 text-right">Per-Km Fare</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-150">
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-bold text-gray-900">
                          Sedan (Dzire / Etios)
                        </td>
                        <td className="p-4 text-gray-500 font-semibold">
                          4 + 1 Passengers
                        </td>
                        <td className="p-4 text-right font-bold text-[#D51745] text-xs md:text-sm">
                          {place.vehicleFares.sedan || "₹11/km"}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-bold text-gray-900">
                          SUV (Ertiga / Triber)
                        </td>
                        <td className="p-4 text-gray-500 font-semibold">
                          6 + 1 Passengers
                        </td>
                        <td className="p-4 text-right font-bold text-[#D51745] text-xs md:text-sm">
                          {place.vehicleFares.suv || "₹14/km"}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-bold text-gray-900">
                          Premium SUV (Innova Crysta)
                        </td>
                        <td className="p-4 text-gray-500 font-semibold">
                          7 + 1 Passengers
                        </td>
                        <td className="p-4 text-right font-bold text-[#D51745] text-xs md:text-sm">
                          {place.vehicleFares.innova || "₹20/km"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-gray-500 italic mt-1 leading-relaxed">
                  * Note: Toll taxes, state border entry taxes, and parking fees
                  are extra. Fares are calculated based on garage-to-garage
                  mileage.
                </p>
              </div>

              {/* Destination FAQs */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-black uppercase text-gray-950 tracking-tight border-b border-gray-200 pb-3">
                  FAQs about {place.title}
                </h2>
                <div className="space-y-3">
                  {place.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs space-y-2"
                    >
                      <h4 className="font-bold text-xs md:text-sm text-gray-900 flex items-center gap-2">
                        <BadgeHelp size={14} className="text-[#D51745]" />
                        <span>{faq.q}</span>
                      </h4>
                      <p className="text-xs text-gray-650 leading-relaxed pl-5 font-semibold">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): Sticky Sidebar Booking Box */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              {/* Quick Reservation Box */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-md text-center space-y-5">
                <div className="inline-flex w-12 h-12 rounded-full bg-[#D51745]/10 items-center justify-center text-[#D51745]">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-black text-lg text-gray-900 uppercase">
                    Book Private Cab
                  </h3>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed font-semibold">
                    Instantly book clean vehicles with polite drivers for your
                    trip to {place.title}.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* WhatsApp Reservation Button */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <SpecularButton
                      size="md"
                      radius={10}
                      textColor="#ffffff"
                      lineColor="#25D366"
                      baseColor="#1A1822"
                      intensity={1.0}
                      shineSize={12}
                      followMouse
                      className="w-full justify-center items-center flex gap-2"
                    >
                      <span>Book via WhatsApp</span>
                    </SpecularButton>
                  </a>

                  {/* Phone Helpline button */}
                  <a
                    href="tel:+919099042156"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-gray-200 text-xs font-bold text-gray-700 hover:text-[#D51745] hover:border-[#D51745]/30 transition-all duration-150 cursor-pointer"
                  >
                    <Phone size={14} />
                    <span>Call Dispatch Hotline</span>
                  </a>
                </div>

                {/* Trust Badges inside reservation box */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100 text-[9px] text-gray-500 font-semibold">
                  <div className="flex flex-col items-center gap-1.5">
                    <ShieldCheck size={16} className="text-[#D51745]" />
                    <span>Sanitized Cabs</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <UserCheck size={16} className="text-[#D51745]" />
                    <span>Expert Drivers</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <Clock size={16} className="text-[#D51745]" />
                    <span>On-time Pickup</span>
                  </div>
                </div>
              </div>

              {/* Best Time to Visit Widget */}
              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs space-y-2.5">
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900">
                  📅 Best Time to Visit
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                  {place.bestTimeToVisit}
                </p>
                <p className="text-[10px] text-gray-500 leading-relaxed">
                  Weather is generally pleasant during these months, ideal for
                  local sightseeing and outdoor landmarks.
                </p>
              </div>
            </div>
          </div>

          {/* Lower Section: Recommendations Widget */}
          <div className="mt-20 border-t border-gray-200 pt-16">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-gray-900 mb-8 tracking-tight">
              More Tour <span className="text-[#D51745]">Destinations</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {suggestedTours.map((sug, sidx) => (
                <Link
                  href={`/places/${sug.slug}`}
                  key={sug.slug}
                  className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden group hover:border-[#D51745]/30 transition-all duration-200 shadow-sm"
                >
                  <div className="relative h-44 bg-gray-200">
                    <Image
                      src={sug.img}
                      alt={sug.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-[9px] uppercase font-bold text-neutral-50 px-2 py-0.5 rounded">
                      {sug.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-neutral-800 group-hover:text-[#D51745] transition-colors duration-150">
                      {sug.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1 font-semibold">
                      {sug.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
