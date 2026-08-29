"use client";
import Link from "next/link";
import { Phone, ArrowUp, MapPin, Mail } from "lucide-react";
import Strands from "@/components/Stards";
import Ydcabs from "./Ydcabs";
const footerDestinations = [
  {
    col: [
      {
        title: "Vadodara",
        links: [
          { name: "Laxmi Vilas Palace", href: "/places/laxmi-vilas-palace" },
          { name: "Statue of Unity", href: "/places/statue-of-unity-local" },
          { name: "Kirti Mandir", href: "/places/kirti-mandir" },
          { name: "Sur Sagar Lake", href: "/places/sur-sagar-lake" },
          { name: "Nilkanthdham Poicha", href: "/places/nilkanthdham-poicha" },
        ],
      },
      {
        title: "Popular Outstation Destinations - Maharashtra",
        links: [
          { name: "Mumbai", href: "/places/mumbai" },
          { name: "Nashik", href: "/places/nashik" },
          { name: "Shirdi", href: "/places/shirdi" },
          { name: "Trimbakeshwar", href: "/places/trimbakeshwar" },
        ],
      },
    ],
  },
  {
    col: [
      {
        title: "Popular Gujarat Tours",
        links: [
          { name: "Somnath - Dwarka", href: "/places/somnath-dwarka" },
          {
            name: "Dwarka - Somnath - Gir",
            href: "/places/dwarka-somnath-gir",
          },
          {
            name: "Kutch / Rann of Kutch",
            href: "/places/kutch-rann-of-kutch",
          },
          {
            name: "Ahmedabad - Modhera - Patan",
            href: "/places/ahmedabad-modhera-patan",
          },
          { name: "Statue of Unity", href: "/places/statue-of-unity-1day" },
          {
            name: "Gujarat Jyotirlinga Tour",
            href: "/places/gujarat-jyotirlinga-tour",
          },
          { name: "Gujarat Family Tour", href: "/places/gujarat-family-tour" },
          { name: "Gujarat Temple Tour", href: "/places/gujarat-temple-tour" },
        ],
      },
    ],
  },
  {
    col: [
      {
        title: "Popular Outstation Destinations - Rajasthan",
        links: [
          { name: "Udaipur", href: "/places/udaipur" },
          { name: "Mount Abu", href: "/places/mount-abu" },
          { name: "Nathdwara", href: "/places/nathdwara" },
          { name: "Chittorgarh", href: "/places/chittorgarh" },
          { name: "Jaipur", href: "/places/jaipur" },
          { name: "Jodhpur", href: "/places/jodhpur" },
          { name: "Jaisalmer", href: "/places/jaisalmer" },
        ],
      },
      {
        title: "Vadodara Se Popular 1-Day Trips",
        links: [
          {
            name: "Statue of Unity / Ekta Nagar",
            href: "/places/statue-of-unity-local",
          },
          { name: "Champaner - Pavagadh", href: "/places/champaner-pavagadh" },
          { name: "Ahmedabad", href: "/places/ahmedabad" },
          { name: "Anand - Dakor", href: "/places/anand-dakor" },
          { name: "Polo Forest", href: "/places/polo-forest" },
        ],
      },
    ],
  },
  {
    col: [
      {
        title: "Popular Outstation Destinations - Madhya Pradesh",
        links: [
          { name: "Indore", href: "/places/indore" },
          { name: "Ujjain", href: "/places/ujjain" },
          { name: "Omkareshwar", href: "/places/omkareshwar" },
          { name: "Maheshwar", href: "/places/maheshwar" },
        ],
      },
    ],
  },
];
const logo = "/YASHDEEP%20TRAVELS.svg";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0D0C10] border-t border-[#221F2B] overflow-hidden pt-16 z-10">
      {/* Absolute Strands canvas glow at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-96 w-full -z-10 opacity-30 pointer-events-none">
        <Strands
          colors={["#D51745", "#FF6B35", "#00B4D8"]}
          count={3}
          speed={0.4}
          amplitude={1.2}
          waviness={1.2}
          thickness={0.8}
          glow={2.8}
          taper={3.5}
          spread={1.2}
          intensity={0.7}
          saturation={2.5}
          opacity={1}
          scale={1.4}
        />
      </div>

      {/* Directory Links section */}

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">
        {/* Col 1: Brand Info (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 relative overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Ydcabs className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight leading-none text-white">
                Yashdeep
              </span>
              <span className="text-[9px] text-gray-400 uppercase tracking-widest leading-none mt-1">
                Travels
              </span>
            </div>
          </Link>

          <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
            Yashdeep Travels is Gujarat's premier intercity and local cab
            provider. Operating 24/7 from Vadodara, offering clean vehicles,
            expert drivers, and 100% transparent invoicing.
          </p>

          <div className="space-y-2 pt-2 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-[#D51745]" />
              <span>Opp. Railway Station, Station Road, Vadodara</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={12} className="text-[#D51745]" />
              <a
                href="mailto:bookings@yashdeepcabs.com"
                className="hover:text-white transition-colors duration-150"
              >
                bookings@yashdeepcabs.com
              </a>
            </div>
          </div>
        </div>

        {/* Col 3: Quick Links (2 cols) */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>
              <Link
                href="/"
                className="hover:text-[#D51745] transition-colors duration-150"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/our-story"
                className="hover:text-[#D51745] transition-colors duration-150"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="/#fleet"
                className="hover:text-[#D51745] transition-colors duration-150"
              >
                Our Fleet
              </Link>
            </li>
            <li>
              <Link
                href="/#routes"
                className="hover:text-[#D51745] transition-colors duration-150"
              >
                Popular Routes
              </Link>
            </li>
            <li>
              <Link
                href="/#whyus"
                className="hover:text-[#D51745] transition-colors duration-150"
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                href="/#faq"
                className="hover:text-[#D51745] transition-colors duration-150"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact helpline (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-4">
            Helpline Booking
          </h4>
          <p className="text-xs text-gray-400">
            Need immediate support or custom quotes? Talk directly with our
            dispatch office.
          </p>
          <a
            href="tel:+919099042156"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#D51745] text-white hover:bg-[#B21035] text-xs font-bold transition-all duration-150 w-full justify-center"
          >
            <Phone size={14} />
            <span>Call +91 90990 42156</span>
          </a>
        </div>
      </div>

      {/* Sub Footer with Legal Info & Back-to-top */}
      <div className="border-t border-[#221F2B]/60 py-6 text-center text-xs text-gray-500 relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>
          © {new Date().getFullYear()} Yashdeep Travels. All rights reserved.
        </span>

        <button
          onClick={scrollToTop}
          className="p-2 bg-white/5 hover:bg-[#D51745] rounded-full text-gray-400 hover:text-white transition-colors duration-150 flex items-center justify-center cursor-pointer border border-white/5"
        >
          <ArrowUp size={16} />
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 border-b border-[#221F2B]/40 pb-12 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#221F2B]/40 pb-4 mb-8">
          <h3 className="text-xs md:text-sm font-black text-[#D51745] tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#D51745] rounded-full inline-block animate-pulse" />
            Popular Destinations & Tour Packages
          </h3>
          <span className="text-[10px] md:text-xs text-gray-500 font-bold tracking-wide mt-1.5 sm:mt-0">
            Direct Cab Booking & Sightseeing Packages
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerDestinations.map((colData, colIdx) => (
            <div key={colIdx} className="space-y-8">
              {colData.col.map((group, groupIdx) => (
                <div key={groupIdx} className="space-y-4">
                  <h4 className="font-extrabold text-[10px] md:text-[11px] text-white tracking-wide border-b border-[#221F2B]/60 pb-2">
                    {group.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {group.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="text-xs text-gray-400">
                        <Link
                          href={link.href}
                          className="hover:text-[#D51745] transition-colors duration-150 flex items-start gap-1.5"
                        >
                          <span className="text-gray-655 font-bold select-none">
                            &gt;
                          </span>
                          <span className="font-medium">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Floating Call Helper Button */}
      <a
        href="tel:+919099042156"
        className="fixed bottom-24 right-6 w-14 h-14 bg-[#D51745] hover:bg-[#B21035] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(213,23,69,0.3)] hover:scale-105 transition-transform duration-200 z-40"
        title="Call dispatch office for booking"
      >
        <Phone size={22} />
      </a>

      {/* Floating WhatsApp Helper Button */}
      <a
        href="https://wa.me/919099042156"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:scale-105 transition-transform duration-200 z-40"
        title="Chat with booking agent on WhatsApp"
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          className="scale-130 mb-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_418_208)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.0205 2.73821C14.2579 0.973329 11.9136 0.000895426 9.41585 0C4.26895 0 0.0801406 4.18836 0.0783497 9.33661C0.0774543 10.9824 0.507707 12.5888 1.32479 14.0045L0 18.8434L4.94992 17.545C6.31364 18.2891 7.8493 18.6808 9.41184 18.6813H9.41585C14.5619 18.6813 18.7512 14.4925 18.7529 9.34422C18.7538 6.84914 17.7836 4.50355 16.0205 2.73866V2.73821ZM9.41585 17.1044H9.41272C8.02032 17.104 6.65437 16.7297 5.46257 16.0228L5.17915 15.8545L2.2417 16.6249L3.02565 13.7609L2.84119 13.4672C2.06441 12.2315 1.65385 10.8033 1.65475 9.33708C1.65654 5.05827 5.13796 1.57685 9.41902 1.57685C11.4919 1.57774 13.4404 2.38587 14.9057 3.85302C16.3711 5.31974 17.1774 7.26999 17.1765 9.34333C17.1747 13.6226 13.6933 17.104 9.41585 17.104V17.1044ZM13.6727 11.2922C13.4394 11.1754 12.2924 10.6112 12.0784 10.5334C11.8644 10.4554 11.7091 10.4165 11.5537 10.6502C11.3983 10.8839 10.9511 11.4095 10.815 11.5649C10.6789 11.7207 10.5427 11.74 10.3095 11.6231C10.0763 11.5062 9.32453 11.26 8.43314 10.4653C7.73965 9.84654 7.27129 9.08277 7.13523 8.84904C6.99911 8.61536 7.1209 8.48909 7.23728 8.37313C7.34203 8.26838 7.47054 8.10048 7.58738 7.96437C7.70428 7.82825 7.74277 7.73069 7.82065 7.5753C7.89858 7.41949 7.85961 7.28343 7.80143 7.16654C7.74319 7.0497 7.27671 5.90129 7.08194 5.43434C6.89253 4.97947 6.70006 5.04126 6.55722 5.03365C6.42111 5.02693 6.26577 5.02559 6.10996 5.02559C5.95416 5.02559 5.70162 5.08379 5.48763 5.3175C5.27364 5.55118 4.671 6.11575 4.671 7.26369C4.671 8.41163 5.5069 9.52154 5.62374 9.67735C5.74058 9.83315 7.26905 12.1895 9.60926 13.2004C10.1658 13.4408 10.6005 13.5845 10.9394 13.692C11.4982 13.8697 12.0068 13.8447 12.4088 13.7847C12.857 13.7175 13.7891 13.2201 13.9834 12.6752C14.1777 12.1303 14.1777 11.6629 14.1196 11.5658C14.0614 11.4686 13.9056 11.41 13.6723 11.2931L13.6727 11.2922Z"
              fill="#25D366"
            />
          </g>
          <defs>
            <clipPath id="clip0_418_208">
              <rect width="18.7529" height="18.8571" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </footer>
  );
}
