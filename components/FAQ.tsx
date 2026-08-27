"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "How is the outstation cab fare calculated?",
    a: "Our outstation cab fare is calculated on a per-kilometer basis. A minimum travel distance limit of 250 km per calendar day is applied. State border entry taxes, highway toll taxes, and parking fees are extra and paid directly by the client based on actual receipts.",
  },
  {
    q: "Are driver allowances included in the rate?",
    a: "Driver night/day allowance (₹300/day for Sedans & SUVs, and ₹400/day for Innovas) is charged extra per calendar day. This allowance covers the driver's meals and lodging arrangements during the outstation travel.",
  },
  {
    q: "Do you offer fixed-rate one-way drop services?",
    a: "Yes! We provide fixed-rate one-way drops from Vadodara to major cities including Ahmedabad (and Ahmedabad Airport), Surat, Mumbai, Udaipur, Nashik, Shirdi, and Indore. One-way fares are inclusive of basic toll charges in most packages.",
  },
  {
    q: "Can I modify or cancel my booking later?",
    a: "Absolutely. You can modify your travel dates or cancel your reservation for free up to 24 hours before your scheduled pickup time. Just drop a message on our WhatsApp support line.",
  },
  {
    q: "How clean are the vehicles?",
    a: "Pristine hygiene is our top promise. Every cab goes through a rigorous interior vacuuming, exterior wash, and surface sanitization protocol before every single pickup.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 md:px-8 bg-[#FAFAFA] border-t border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-gray-900 tracking-tight">
            Frequently Asked <span className="text-[#D51745]">Questions</span>
          </h2>
          <p className="text-sm md:text-base text-gray-650 mt-3 font-semibold">
            Got questions about billing, toll taxes, or driver rules? Here are quick answers.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 text-gray-900 hover:text-[#D51745] font-bold text-sm md:text-base cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle size={18} className="text-[#D51745] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-gray-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-[#D51745]" : ""
                    }`}
                  />
                </button>

                {/* Accordion Body */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-48 border-t border-gray-100" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-xs md:text-sm text-gray-700 leading-relaxed bg-[#FAFAFA]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
