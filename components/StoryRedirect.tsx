"use client";

import Link from "next/link";
import StarBorder from "@/components/StarBorder";
import { ChevronRight } from "lucide-react";

export default function StoryRedirect() {
  return (
    <section className="py-16 bg-[#FAFAFA] border-y border-gray-200/50">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <span className="text-xs uppercase tracking-widest text-[#D51745] font-black">
          The Yashdeep Journey
        </span>
        <h2 className="font-semibold text-4xl md:text-4xl text-gray-900 tracking-tight leading-tight max-w-2xl mx-auto">
          It all started with a cab ride in 2019.
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
          Before we owned a single car, our family took a ride that changed
          everything. From one vehicle to traveling over 22 lakh kilometers
          across India, read the story of how we built Yashdeep Travels.
        </p>
        <div className="pt flex justify-center">
          <div className="bg-white flex items-center justify-center gap px-7 py-3 shadow-lg  cursor-pointer rounded-lg ">
            Read Story <ChevronRight />
          </div>
        </div>
      </div>
    </section>
  );
}
