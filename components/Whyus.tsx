"use client";

import React from "react";

interface FeatureCard {
  title: string;
  desc: string;
  badgeText: string;
  badgeColor: string;
  linkText: string;
  linkHref: string;
  highlighted?: boolean;
}

const FEATURES: FeatureCard[] = [
  {
    title: "Doorstep Pickup & Drop",
    desc: "Safe pickups directly from your home, hotel, railway station, or airport in Vadodara at any hour.",
    badgeText: "Convenient",
    badgeColor: "bg-[#E5F1FF] text-[#0066FF]",
    linkText: "Pickup Options",
    linkHref: "/features/doorstep-pickup-drop",
  },
  {
    title: "Zero Hidden Charges",
    desc: "100% transparent pricing models. Pay strictly according to our per-km rates, toll receipts, and driver allowance.",
    badgeText: "100% Transparent",
    badgeColor: "bg-[#F3E8FF] text-[#7C3AED]",
    linkText: "Tariffs & Rates",
    linkHref: "/features/zero-hidden-charges",
    highlighted: true,
  },
  {
    title: "Professional Drivers",
    desc: "Highly experienced, licensed, and polite drivers who are familiar with outstation highways and state routes.",
    badgeText: "Safe & Polite",
    badgeColor: "bg-[#FEF3C7] text-[#D97706]",
    linkText: "Driver Guidelines",
    linkHref: "/features/professional-drivers",
  },
  {
    title: "Sanitized & Pristine Cabs",
    desc: "Every cab undergoes strict washing, interior cleaning, and sanitization before heading out to pick you up.",
    badgeText: "Hygiene First",
    badgeColor: "bg-[#D1FAE5] text-[#059669]",
    linkText: "Hygiene Standards",
    linkHref: "/features/sanitized-pristine-cabs",
  },
  {
    title: "24/7 Helpline Support",
    desc: "Round-the-clock booking assistance and active trip tracking to guarantee safety for solo/female travelers.",
    badgeText: "Always Online",
    badgeColor: "bg-[#FFE4E6] text-[#E11D48]",
    linkText: "Emergency Helpline",
    linkHref: "/features/24-7-helpline-support",
  },
  {
    title: "Flexible Trip Modals",
    desc: "Modify travel timings, edit stopovers, or request quick cancellations without complicated penalty clauses.",
    badgeText: "No Penalty",
    badgeColor: "bg-[#E0E7FF] text-[#4F46E5]",
    linkText: "Cancellation Policy",
    linkHref: "/features/flexible-trip-modals",
  },
];

export default function Whyus() {
  return (
    <section
      id="whyus"
      className="py-24 px-4 md:px-8 bg-gradient-to-tr from-[#FAFAFA] via-[#FAFAFA] to-[#FCF9F5] border-t border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight mb-4">
            But Why Yashdeep Travels?
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed font-semibold">
            Our purpose is to make travel dependable. With our{" "}
            <span className="text-[#D51745] font-black">
              Transparent Fare Guarantee & Professional Chauffeurs
            </span>
            , every trip is monitored, tracked, and tailored for your safety and
            comfort.
          </p>
        </div>
        {/* Feature Grid with Shared Borders */}
        <div className="border border-gray-200/80  bg-white overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-3">
          {FEATURES.map((feat, index) => {
            const borderClass = [
              "border-b md:border-r border-gray-200/80", // Card 0
              "border-b md:border-r border-gray-200/80", // Card 1
              "border-b border-gray-200/80", // Card 2
              "border-b md:border-b-0 md:border-r border-gray-200/80", // Card 3
              "border-b md:border-b-0 md:border-r border-gray-200/80", // Card 4
              "border-b-0 border-gray-200/80", // Card 5
            ][index];

            return (
              <div
                key={index}
                className={`p-6 md:p-8 flex flex-col justify-between h-full min-h-[240px] transition-all duration-300 ${borderClass} ${
                  feat.highlighted ? "bg-[#FCF6EE]" : "bg-white"
                }`}
              >
                {/* Top: Badge + Title + Description */}
                <div>
                  <span
                    className={`inline-flex px-2.5 py-1 rounded-md text-[10px] font-bold w-fit mb-5 ${feat.badgeColor}`}
                  >
                    {feat.badgeText}
                  </span>

                  <h3 className="font-extrabold text-lg text-gray-950 leading-snug mb-2.5">
                    {feat.title}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>
                {/* Bottom Link */}
                <a
                  href={feat.linkHref}
                  className="inline-flex items-center gap-1 text-[11px] text-gray-400 font-bold hover:text-gray-800 transition-colors mt-6 w-fit uppercase tracking-wider"
                >
                  <span>{feat.linkText}</span>
                  <span className="text-[12px] translate-y-[-0.5px]">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
