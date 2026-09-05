"use client";

import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";

export default function GetInTouch() {
  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8 bg-white border-t border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-gray-900 tracking-tight">
            Get In <span className="text-[#D51745]">Touch With Us</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-3">
            Available 24 hours a day, 7 days a week. Book a cab, request
            customized tour packages, or ask for fare quotes instantly.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details (Single Unified Box) */}
          <div className="lg:col-span-5 bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-7 shadow-sm space-y-5">
            {/* Phone Info */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-[#D51745]/10 border border-[#D51745]/20 flex items-center justify-center text-[#D51745] shrink-0">
                <Phone size={18} />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-xs text-gray-500 uppercase tracking-wider">
                  Call Helpline
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                  <a
                    href="tel:+919099042156"
                    className="font-black text-base sm:text-lg text-gray-900 hover:text-[#D51745] transition-colors duration-150 whitespace-nowrap"
                  >
                    +91 90990 42156
                  </a>
                  <span className="text-gray-300 font-medium select-none hidden sm:inline">
                    /
                  </span>
                  <a
                    href="tel:+919825872134"
                    className="font-black text-base sm:text-lg text-gray-900 hover:text-[#D51745] transition-colors duration-150 whitespace-nowrap"
                  >
                    +91 98258 72134
                  </a>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* WhatsApp Info */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-[#D51745]/10 border border-[#D51745]/20 flex items-center justify-center text-[#D51745] shrink-0">
                <MessageSquare size={18} />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-xs text-gray-500 uppercase tracking-wider">
                  WhatsApp Support
                </h3>
                <a
                  href="https://wa.me/919099042156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-black text-base sm:text-lg text-gray-900 hover:text-[#D51745] mt-1 transition-colors duration-150"
                >
                  +91 90990 42156
                </a>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Email Info */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-[#D51745]/10 border border-[#D51745]/20 flex items-center justify-center text-[#D51745] shrink-0">
                <Mail size={18} />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-xs text-gray-500 uppercase tracking-wider">
                  Email Inquiry
                </h3>
                <a
                  href="mailto:bookings@yashdeepcabs.com"
                  className="block font-black text-sm md:text-base text-gray-900 hover:text-[#D51745] mt-1 transition-colors duration-150 truncate"
                >
                  bookings@yashdeepcabs.com
                </a>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Address */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-[#D51745]/10 border border-[#D51745]/20 flex items-center justify-center text-[#D51745] shrink-0">
                <MapPin size={18} />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-xs text-gray-500 uppercase tracking-wider">
                  Office Address
                </h3>
                <p className="text-xs md:text-sm text-gray-800 mt-1 leading-relaxed font-semibold">
                  101 Radhey Flats, 13/14 Sumant Park, opp. Shrenik, Par Park,
                  Akota, Vadodara, Gujarat 390007
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Availability */}
            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/80 flex items-center gap-3 text-xs text-gray-700">
              <Clock size={16} className="text-[#D51745] shrink-0" />
              <span className="font-medium">
                We operate 24/7. Outstation travel pickups can be arranged at
                any custom timing.
              </span>
            </div>
          </div>
          {/* Map Frame (7 cols) */}
          <div className="lg:col-span-7 h-96 w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg relative bg-white">
            <iframe
              src="https://maps.google.com/maps?q=Yashdeep%20Travels%20Akota%20Vadodara&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Yashdeep Travels Office Location Map"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
