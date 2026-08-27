import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { featuresData } from "@/data/featuresData";
import {
  Check,
  Phone,
  MessageSquare,
  ChevronRight,
  ArrowLeft,
  BadgeHelp,
  ShieldCheck,
  UserCheck,
  Clock,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return featuresData.map((feat) => ({
    slug: feat.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const feat = featuresData.find((f) => f.slug === slug);
  if (!feat) {
    return {
      title: "Feature Not Found - Yashdeep Travels",
    };
  }

  return {
    title: `${feat.title} | Yashdeep Travels Vadodara`,
    description:
      feat.description ||
      `Read about our ${feat.title} feature. Yashdeep Travels offers comfortable outstation and local cabs in Vadodara.`,
    alternates: {
      canonical: `/features/${slug}`,
    },
    openGraph: {
      title: `${feat.title} - Yashdeep Travels`,
      description: feat.description,
      type: "website",
    },
  };
}

export default async function FeaturePage({ params }: PageProps) {
  const { slug } = await params;
  const feat = featuresData.find((f) => f.slug === slug);

  if (!feat) {
    notFound();
  }

  // Get other features for the bottom recommendation widget
  const otherFeatures = featuresData.filter((f) => f.slug !== slug);

  // WhatsApp CTA link setup
  const waMsg = `Hello Yashdeep Travels, I was reading about your *${feat.title}* service and would like to inquire further about booking a cab. Kindly share service details and package availability. Thank you.`;
  const waLink = `https://wa.me/919099042156?text=${encodeURIComponent(waMsg)}`;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAFAFA] py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
            <Link
              href="/"
              className="hover:text-gray-900 transition-colors duration-150"
            >
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-gray-400">Features</span>
            <ChevronRight size={12} />
            <span className="text-[#D51745] font-semibold">{feat.title}</span>
          </div>

          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-gray-900 mb-6 uppercase tracking-wider transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          {/* Banner Details */}
          <div className="bg-white rounded-3xl border border-gray-200/80 p-6 md:p-10 shadow-xs mb-12 flex flex-col items-start gap-4">
            <span
              className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase ${feat.badgeColor}`}
            >
              {feat.badgeText}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
              {feat.title}
            </h1>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl leading-relaxed font-semibold">
              {feat.description}
            </p>
          </div>

          {/* Grid Layout: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column (8 cols): Deep details, benefits, FAQs */}
            <div className="lg:col-span-8 space-y-10">
              {/* Detailed Description */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-950 tracking-tight border-b border-gray-250/60 pb-3">
                  Overview
                </h2>
                <p className="text-sm text-gray-650 leading-relaxed font-medium">
                  {feat.fullDescription}
                </p>
              </div>

              {/* Core Benefits */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-950 tracking-tight border-b border-gray-250/60 pb-3">
                  Key Customer Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {feat.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs md:text-sm text-gray-600 bg-white p-4 rounded-2xl border border-gray-200/60 shadow-xs font-semibold"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#D51745]/10 flex items-center justify-center text-[#D51745] shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-950 tracking-tight border-b border-gray-250/60 pb-3">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {feat.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-gray-200/60 shadow-xs space-y-2"
                    >
                      <h4 className="font-extrabold text-sm md:text-base text-gray-950 flex items-center gap-2">
                        <BadgeHelp size={16} className="text-[#D51745]" />
                        <span>{faq.q}</span>
                      </h4>
                      <p className="text-xs md:text-sm text-gray-650 leading-relaxed pl-6 font-medium">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): Booking Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              {/* Quick Reservation Box */}
              <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm text-center space-y-5">
                <div className="inline-flex w-12 h-12 rounded-full bg-[#D51745]/10 items-center justify-center text-[#D51745]">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-gray-950">
                    Safe & Secure Booking
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed font-semibold">
                    Rent clean, sanitized vehicles with expert drivers for local
                    travel and outstation tours.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* WhatsApp Reservation Button */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-full bg-black text-neutral-50 hover:bg-gray-800 active:scale-95 rounded-full items-center justify-center font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <MessageSquare size={14} className="mr-2" />
                    <span>Book via WhatsApp</span>
                  </a>

                  {/* Phone Helpline button */}
                  <a
                    href="tel:+919099042156"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-gray-200 text-xs font-bold text-gray-600 hover:text-[#D51745] hover:border-[#D51745]/30 transition-all cursor-pointer"
                  >
                    <Phone size={12} />
                    <span>Call Hotline Booking</span>
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
            </div>
          </div>

          {/* Recommendations Widget */}
          <div className="mt-20 border-t border-gray-250/60 pt-16">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-8 tracking-tight">
              More Service <span className="text-[#D51745]">Features</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherFeatures.map((other, oidx) => (
                <Link
                  href={`/features/${other.slug}`}
                  key={other.slug}
                  className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-xs group hover:border-[#D51745]/30 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-md text-[9px] font-bold w-fit mb-4 ${other.badgeColor}`}
                    >
                      {other.badgeText}
                    </span>
                    <h4 className="font-extrabold text-base text-gray-950 group-hover:text-[#D51745] transition-colors duration-150 mb-2">
                      {other.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-semibold line-clamp-2">
                      {other.description}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[10px] text-gray-400 font-bold hover:text-gray-800 transition-colors mt-6 w-fit uppercase tracking-wider">
                    <span>Read Details</span>
                    <span>→</span>
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
