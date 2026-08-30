"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Phone, ChevronRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BorderGlow from "@/components/BorderGlow";
import HeroBtn from "@/components/HeroBtn";
import { placeGroups, placesData, PlaceData } from "@/data/placesData";

export default function CustomRoutesPage() {
  const [selectedGroup, setSelectedGroup] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleCall = () => {
    window.open("tel:+919099042156", "_self");
  };

  const handleBook = (place: PlaceData) => {
    const message = encodeURIComponent(
      `Hello Yashdeep Travels! I want to book a cab trip to *${place.title}*. Please confirm availability.`
    );
    window.open(`https://wa.me/919099042156?text=${message}`, "_blank");
  };

  // Filter logic: Match selected group and search query
  const filteredPlaces = placesData.filter((place) => {
    const matchesGroup =
      selectedGroup === "all" ||
      placeGroups
        .find((g) => g.id === selectedGroup)
        ?.items.some((item) => item.slug === place.slug);

    const matchesSearch =
      place.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesGroup && matchesSearch;
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAFAFA] py-12 px-4 md:px-8 text-gray-900">
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
            <span className="text-gray-400">Routes</span>
            <ChevronRight size={12} />
            <span className="text-[#D51745] font-semibold">Custom Routes</span>
          </div>

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-block px-4 py-1 bg-[#D51745] text-white font-extrabold text-[10px] uppercase tracking-widest rounded-full shadow-sm">
              Custom Routes & Tours
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight uppercase">
              Our Travel Packages
            </h1>
            <p className="text-neutral-500 text-xs sm:text-sm font-semibold">
              Browse and filter all our popular outstation destinations, weekend getaways, and local sightseeing routes.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mb-12 space-y-6">
            {/* Search Input */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search destinations, states, or landmarks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-250/60 rounded-full text-xs font-semibold text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#D51745] focus:ring-1 focus:ring-[#D51745] shadow-xs transition-all"
              />
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            {/* Filter Pill Tabs */}
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedGroup("all")}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                  selectedGroup === "all"
                    ? "bg-[#D51745] border-[#D51745] text-white shadow-sm"
                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                All Packages
              </button>
              {placeGroups.map((group) => (
                <button
                  key={group.id}
                  onClick={() => setSelectedGroup(group.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                    selectedGroup === group.id
                      ? "bg-[#D51745] border-[#D51745] text-white shadow-sm"
                      : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {group.title.replace("Popular Outstation Destinations – ", "")}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex justify-between items-center mb-6 px-1 text-xs text-gray-500 font-bold uppercase tracking-wider border-b border-gray-150 pb-2">
            <span>
              Showing {filteredPlaces.length} destination
              {filteredPlaces.length !== 1 ? "s" : ""}
            </span>
            {selectedGroup !== "all" && (
              <span className="text-[#D51745]">
                Category:{" "}
                {
                  placeGroups.find((g) => g.id === selectedGroup)?.title
                }
              </span>
            )}
          </div>

          {/* Cards Grid */}
          {filteredPlaces.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlaces.map((place) => (
                <div
                  key={place.slug}
                  className="h-full group"
                >
                  <BorderGlow
                    backgroundColor="#ffffff"
                    borderRadius={20}
                    glowColor="345 80 46"
                    colors={["#D51745", "#c41e46", "#ff4e7e"]}
                    className="w-full h-full flex flex-col overflow-hidden border border-gray-200/50 hover:border-gray-350 transition-colors shadow-md hover:shadow-lg"
                  >
                    {/* Image Area */}
                    <Link
                      href={`/places/${place.slug}`}
                      className="relative h-52 overflow-hidden bg-gray-900 block"
                    >
                      <Image
                        src={place.img}
                        alt={place.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-103"
                        unoptimized
                      />
                      {/* Tag Overlay */}
                      <span className="absolute top-4 left-4 bg-[#D51745] text-[9px] uppercase font-bold tracking-wider text-neutral-50 px-2.5 py-1 rounded">
                        {place.tag || "Outstation"}
                      </span>
                    </Link>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-1">
                      <Link href={`/places/${place.slug}`}>
                        <h3 className="font-extrabold text-base text-gray-950 tracking-tight group-hover:text-[#D51745] transition-colors duration-150 uppercase line-clamp-1">
                          {place.title}
                        </h3>
                      </Link>

                      <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold mt-1">
                        <MapPin size={10} className="text-[#D51745]" />
                        <span>{place.location}</span>
                      </div>

                      <p className="text-xs text-gray-600 mt-3.5 line-clamp-2 leading-relaxed font-semibold flex-1">
                        {place.description}
                      </p>

                      {/* Travel details summary row */}
                      <div className="grid grid-cols-2 gap-4 mt-6 py-3 border-t border-b border-gray-100 text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                        <div className="flex items-center gap-1.5">
                          <Clock size={11} className="text-[#D51745] shrink-0" />
                          <div>
                            <span className="block text-[8px] text-gray-400">Distance</span>
                            <span className="font-bold text-gray-800 text-[10px]">{place.distance}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar size={11} className="text-[#D51745] shrink-0" />
                          <div>
                            <span className="block text-[8px] text-gray-400">Duration</span>
                            <span className="font-bold text-gray-800 text-[10px]">{place.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        {/* Call Now Button */}
                        <button
                          onClick={handleCall}
                          className="bg-[#D51745] hover:bg-[#B21035] text-white py-2.5 px-3 rounded-lg text-center text-[10px] font-black uppercase tracking-wider transition-colors duration-150 cursor-pointer shadow-sm active:scale-95 flex items-center justify-center gap-1.5 w-full border border-transparent"
                        >
                          <Phone size={10} className="stroke-[2.5]" />
                          <span>Call Now</span>
                        </button>

                        {/* Book Now - HeroBtn (CtaBtn) */}
                        <HeroBtn
                          label="Book Now"
                          hoverLabel="Send WA"
                          className="w-full justify-between items-center text-[10px] font-black uppercase tracking-wider text-neutral-900 border border-neutral-250/60 bg-neutral-50 hover:bg-neutral-100 shadow-sm rounded-lg py-2.5 px-3.5"
                          onClick={() => handleBook(place)}
                        />
                      </div>
                    </div>
                  </BorderGlow>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white border border-gray-200 rounded-3xl p-8 max-w-lg mx-auto shadow-xs">
              <p className="text-sm font-semibold text-gray-600 mb-4">
                No routes or destinations match your search query. Try typing something else or select a different category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedGroup("all");
                }}
                className="px-5 py-2.5 bg-[#D51745] text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-sm active:scale-95 transition-all cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
