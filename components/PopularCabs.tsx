"use client";

import Link from "next/link";
import { Navigation } from "lucide-react";
import { fleetData as FLEET } from "@/data/fleetData";
import ScrollDirectionCarousel from "./ScrollDirectionCarousel";
export default function PopularCabs() {
  return (
    <section
      id="fleet"
      className="py-20 px-4 md:px-8 bg-[#FAFAFA] border-t border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black  text-gray-900 tracking-tight">
            Our Premium <span className="text-[#D51745]">Fleet & Fares</span>
          </h2>
          <p className="text-sm md:text-base text-gray-650 mt-3 font-semibold">
            Choose from our pristine, sanitized vehicle range for local travel,
            corporate needs, or long-distance family tours.
          </p>
        </div>
        <section className="py-20 bg-[#FAFAFA] border-t border-gray-250/20 overflow-hidden">
          <ScrollDirectionCarousel />
        </section>
        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLEET.map((car, index) => {
            const isLast = index === FLEET.length - 1;
            const waMsg = `Hello Yashdeep Travels, I would like to check the availability and customized fare quotes for renting a *${car.name} ${car.options}* cab. Kindly share details at your earliest convenience. Thank you.`;
            const waLink = `https://wa.me/919099042156?text=${encodeURIComponent(waMsg)}`;
            return (
              <div
                key={index}
                className="relative group w-full max-w-sm mx-auto"
              >
                {/* Footer strip — sits BEHIND the card, z-0, peeking out at the bottom */}
                <div
                  className={`absolute inset-x-0 bottom-0 z-0 rounded-b-3xl pt-5 pb-2 transition-all duration-200 ${
                    isLast
                      ? "bg-neutral-200 border border-neutral-200"
                      : "bg-blue-500"
                  }`}
                >
                  <ul
                    className={`flex items-center justify-center gap-x-4 px-4 text-[11px] tracking-wide ${
                      isLast ? "text-gray-950 font-black" : "text-neutral-50"
                    }`}
                  >
                    {car.features.slice(0, 3).map((feature, i) => (
                      <li key={feature} className="flex items-center gap-x-4">
                        {i !== 0 && (
                          <span
                            className={`h-1 w-1 rounded-full ${isLast ? "bg-gray-900/40" : "bg-white/70"}`}
                          />
                        )}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Main card — sits ON TOP, z-10, its bottom edge stops short so the footer peeks out below */}
                <div
                  className={`relative z-10 rounded-3xl p-4 pb-6 transition-all duration-300 ${
                    isLast
                      ? "bg-brand border border-[#D4AF37]/50 shadow-[0_8px_30px_rgba(212,175,55,0.15)] group-hover:shadow-[0_8px_30px_rgba(212,175,55,0.25)] group-hover:border-[#D4AF37]"
                      : "bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                  }`}
                >
                  {isLast && (
                    <span className="absolute -top-3 -right-2 bg-linear-to-r from-[#D4AF37] to-[#FFD700] text-gray-955 text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-md z-20 flex items-center gap-1 border text-neutral-800 border-white/10 select-none">
                      PREMIUM
                    </span>
                  )}

                  <div className="flex gap-4">
                    {/* Vehicle image */}
                    <div
                      className={`h-24 w-24 shrink-0 overflow-hidden rounded-2xl flex items-center justify-center transition-colors duration-200 ${
                        isLast ? "bg-white/5" : "bg-gray-50"
                      }`}
                    >
                      <img
                        src={car.image}
                        alt={car.name}
                        className="h-full w-full group-hover:scale-120 transition duration-200 object-contain p-1.5"
                      />
                    </div>
                    {/* Name + trip details */}
                    <div className="flex flex-col justify-center">
                      <h2
                        className={`text-2xl font-bold leading-tight line-clamp-1 ${
                          isLast ? "text-neutral-50" : "text-gray-900"
                        }`}
                      >
                        {car.name}
                      </h2>
                      <p
                        className={`text-[11px] mt-0.5 font-semibold leading-tight line-clamp-1 ${
                          isLast ? "text-neutral-300" : "text-gray-500"
                        }`}
                      >
                        {car.options}
                      </p>
                      <div className="mt-2 flex gap-8">
                        <div>
                          <p className="text-xs text-gray-400">
                            Min Round Trip
                          </p>
                          <p
                            className={`text-sm font-semibold ${
                              isLast ? "text-neutral-300" : "text-gray-900"
                            }`}
                          >
                            {car.minLimit}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">
                            Driver Allowance
                          </p>
                          <p
                            className={`text-sm font-semibold ${
                              isLast ? "text-neutral-300" : "text-gray-900"
                            }`}
                          >
                            {car.allowance}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className={`my-2 border-t ${isLast ? "border-white/10" : "border-gray-100"}`}
                  />

                  {/* Rate + Book row */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">Round Trip Rate</p>
                      <p
                        className={`text-lg font-bold ${
                          isLast ? "text-[#D4AF37] font-black" : "text-gray-900"
                        }`}
                      >
                        {car.rate}
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <Link
                        className={`transition py-2.5 px-5 rounded-full text-xs font-black ${
                          isLast
                            ? "bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-netral-950 hover:scale-102 hover:shadow-[0_4px_12px_rgba(212,175,55,0.2)]"
                            : "bg-neutral-950 text-neutral-50 hover:bg-dark"
                        }`}
                        href={waLink}
                      >
                        Book Cab
                      </Link>
                      <Link
                        className={`p-3 ml-2 flex items-center justify-center rounded-full transition ${
                          isLast
                            ? "bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-gray-955 hover:scale-102 hover:shadow-[0_4px_12px_rgba(212,175,55,0.2)]"
                            : "bg-neutral-950 text-neutral-50"
                        }`}
                        href={waLink}
                      >
                        <Navigation size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="h-7"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
