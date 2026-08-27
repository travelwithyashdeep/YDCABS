"use client";

import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Vinod Shah",
    role: "Nathdwara Round Trip",
    comment: "Recently we rented car from Yash Deep Travels to Nathdwara. The rates are very reasonable and the driver provided us was cooperative and friendly in nature. We would suggest everyone to avail the service of Yash Deep Travels.",
    rating: 5,
    date: "7 months ago",
  },
  {
    name: "Shishir Kadakia",
    role: "Regular Corporate Client",
    comment: "The Taxi service of Neel from Yashdeep travel is very reliable. The car and driver provided are always dependable. I have used their services for many years and I would highly recommend. You never have to worry once you confirm service with them. Neel also personally follows up with you after the service is provided for any comments!",
    rating: 5,
    date: "2 years ago",
  },
  {
    name: "Rinal Parikh",
    role: "Local Guide",
    comment: "Great service.. Reliable, efficient and most importantly CLEAN and Safe cabs for every trip! Pickups and drop offs on the location provided - Hassle free and safe!",
    rating: 5,
    date: "2 years ago",
  },
  {
    name: "Nancy Jhaveri",
    role: "Outstation Client",
    comment: "Neel is very responsive and is always available. The cars are in excellent condition, clean and well maintained. I highly recommend Shaileshbhai as the driver. He was very accommodative and cooperative. Highly recommend Yashdeep Travels.",
    rating: 5,
    date: "4 years ago",
  },
  {
    name: "Chintan Naik",
    role: "Vadodara Mumbai Expressway",
    comment: "Yashdeep Travels serves the best. The professional care is an added element to the service. Excellent experience on Vadodara Mumbai highway. The driver was a gentleman. All my future travels will always be with Yashdeep Travels.",
    rating: 5,
    date: "5 years ago",
  },
  {
    name: "Harshavardhan Gawade",
    role: "Local Guide",
    comment: "Excellent experience. The driver complied perfectly with our requests: no gutka/cigarettes on duty, and he kept the vehicle completely clean and drove very safely throughout the journey.",
    rating: 5,
    date: "2 years ago",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 md:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block matching Image 1 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16 border-b border-gray-150 pb-8">
          {/* Left: Title block */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              {/* Google Logo */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.15-3.15C17.43 1.68 14.93.5 12 .5c-4.96 0-9.27 3.47-11.26 7.45l3.8 2.94c1.17-3.52 4.46-6.35 8.46-6.35z"
                />
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.77-.07-1.56-.2-2.32H12v4.51h6.47c-.28 1.48-1.12 2.73-2.38 3.58l3.7 2.87c2.16-2 3.7-4.93 3.7-8.64z"
                />
                <path
                  fill="#FBBC05"
                  d="M4.54 13.91a6.98 6.98 0 0 1 0-3.82V7.15H.74A11.96 11.96 0 0 0 0 12c0 1.74.34 3.4.96 4.93l3.58-3.02z"
                />
                <path
                  fill="#34A853"
                  d="M12 23.5c3.24 0 5.97-1.08 7.96-2.91l-3.7-2.87c-1.08.73-2.47 1.16-4.26 1.16-4 0-7.29-2.83-8.46-6.35H.96v3.02C2.95 20.03 7.26 23.5 12 23.5z"
                />
              </svg>
              <span className="text-[11px] font-bold tracking-wider text-[#D51745] uppercase">
                Google Verified Reviews
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold  text-gray-900 tracking-tight leading-none">
              What Riders Say On Google
            </h2>
          </div>

          {/* Right: Ratings block */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Rating Pill */}
            <div className="flex items-center gap-2 border border-gray-200 bg-white py-2.5 px-4 rounded-full shadow-sm text-xs font-semibold text-gray-700">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="text-[#D51745] fill-[#D51745] stroke-[#D51745]"
                  />
                ))}
              </div>
              <span>4.9 / 5 Rating on Google</span>
            </div>

            {/* Verify Link */}
            <a
              href="https://www.google.com/search?q=Yashdeep+Travels+Vadodara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D51745] hover:text-[#B21035] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-150"
            >
              <span>Verify on Google</span>
              <svg
                className="w-3.5 h-3.5 stroke-current"
                fill="none"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test, index) => (
            <div
              key={index}
              className="bg-[#FAFAFA] border border-gray-200 p-6 rounded-2xl relative shadow-sm hover:border-[#D51745]/20 transition-all duration-200"
            >
              {/* Quote Mark */}
              <span className="absolute top-4 right-4 text-[#D51745]/10 pointer-events-none">
                <Quote size={40} className="fill-current" />
              </span>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: test.rating }).map((_, sidx) => (
                  <Star
                    key={sidx}
                    size={14}
                    className="text-[#D51745] fill-[#D51745]"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-xs md:text-sm text-gray-800 leading-relaxed italic mb-6">
                "{test.comment}"
              </p>

              {/* Author Footer */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-auto">
                <div>
                  <h4 className="font-bold text-sm text-gray-950">
                    {test.name}
                  </h4>
                  <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                    {test.role}
                  </span>
                </div>
                <span className="text-[10px] text-gray-500">{test.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block matching Image 2 */}
        <div className="mt-16 bg-[#FAFAFA] border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start md:items-center gap-4">
            {/* Google Logo Box */}
            <div className="w-12 h-12 rounded-2xl bg-amber-50/50 flex items-center justify-center shrink-0 border border-amber-100/50">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.15-3.15C17.43 1.68 14.93.5 12 .5c-4.96 0-9.27 3.47-11.26 7.45l3.8 2.94c1.17-3.52 4.46-6.35 8.46-6.35z"
                />
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.77-.07-1.56-.2-2.32H12v4.51h6.47c-.28 1.48-1.12 2.73-2.38 3.58l3.7 2.87c2.16-2 3.7-4.93 3.7-8.64z"
                />
                <path
                  fill="#FBBC05"
                  d="M4.54 13.91a6.98 6.98 0 0 1 0-3.82V7.15H.74A11.96 11.96 0 0 0 0 12c0 1.74.34 3.4.96 4.93l3.58-3.02z"
                />
                <path
                  fill="#34A853"
                  d="M12 23.5c3.24 0 5.97-1.08 7.96-2.91l-3.7-2.87c-1.08.73-2.47 1.16-4.26 1.16-4 0-7.29-2.83-8.46-6.35H.96v3.02C2.95 20.03 7.26 23.5 12 23.5z"
                />
              </svg>
            </div>
            {/* Text details */}
            <div className="flex flex-col">
              <h3 className="font-extrabold text-sm md:text-base text-gray-950 uppercase tracking-tight">
                Want to verify our rating & reviews on Google?
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                Search "Yashdeep Travels Vadodara" on Google to view real
                customer ratings, driver feedback & location details.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <a
            href="https://www.google.com/search?q=Yashdeep+Travels+Vadodara"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D51745] hover:bg-[#B21035] text-white font-extrabold text-xs tracking-wider uppercase py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-150 shadow-md shadow-red-500/10 cursor-pointer text-center whitespace-nowrap"
          >
            <span>Search Yashdeep Travels on Google</span>
            <svg
              className="w-3.5 h-3.5 stroke-current"
              fill="none"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
