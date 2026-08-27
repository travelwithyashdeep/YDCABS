"use client";

import React from "react";
import { Compass, Users, Milestone, Star } from "lucide-react";

interface MetricItem {
  value: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
}

const METRICS: MetricItem[] = [
  {
    value: "500,000+",
    label: "Kilometers Driven",
    desc: "Safe & comfortable journeys completed",
    icon: <Milestone size={24} className="text-[#D51745]" />,
  },
  {
    value: "15,000+",
    label: "Happy Customers",
    desc: "Families, tourists & corporate clients",
    icon: <Users size={24} className="text-[#D51745]" />,
  },
  {
    value: "250+",
    label: "Tour Routes Covered",
    desc: "Intercity, local, and outstation trips",
    icon: <Compass size={24} className="text-[#D51745]" />,
  },
  {
    value: "4.9 / 5",
    label: "Google Rating",
    desc: "Highly rated driver manners & cleanliness",
    icon: <Star size={24} className="text-[#D51745] fill-[#D51745]" />,
  },
];

export default function Metrix() {
  return (
    <section className="py-12 bg-white border-t border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((met, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-[#D51745]/10 flex items-center justify-center shrink-0 border border-[#D51745]/20">
                {met.icon}
              </div>
              <div>
                <span className="block font-black text-2xl md:text-3xl tracking-tight text-gray-950 leading-none">
                  {met.value}
                </span>
                <span className="block text-sm font-bold text-gray-800 mt-1">
                  {met.label}
                </span>
                <span className="block text-xs text-gray-600 mt-1 font-semibold">
                  {met.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
