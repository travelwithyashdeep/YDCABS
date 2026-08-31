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
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Info */}

            <div className="p-5 flex items-start border border-neutral-200 rounded-xl gap-4">
              <span className="w-10 h-10 rounded-lg bg-[#D51745]/10 border border-[#D51745]/20 flex items-center justify-center text-[#D51745] shrink-0">
                <Phone size={18} />
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider">
                  Call Helpline
                </h4>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-1">
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
            {/* WhatsApp Info */}
            <div className="p-5 flex items-start border border-neutral-200 rounded-xl gap-4">
              <span className="w-10 h-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                <MessageSquare size={18} />
              </span>
              <div>
                <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider">
                  WhatsApp Support
                </h4>
                <a
                  href="https://wa.me/919099042156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-black text-lg text-gray-900 hover:text-[#25D366] mt-1 transition-colors duration-150"
                >
                  +91 90990 42156
                </a>
              </div>
            </div>
            {/* Email Info */}
            <div className="p-5 flex items-start border border-neutral-200 rounded-xl gap-4">
              <span className="w-10 h-10 rounded-lg bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8] shrink-0">
                <Mail size={18} />
              </span>
              <div>
                <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider">
                  Email Inquiry
                </h4>
                <a
                  href="mailto:bookings@yashdeepcabs.com"
                  className="block font-black text-sm md:text-base text-gray-900 hover:text-[#D51745] mt-1 transition-colors duration-150"
                >
                  bookings@yashdeepcabs.com
                </a>
              </div>
            </div>
            {/* Address */}
            <div className="p-5 flex items-start border border-neutral-200 rounded-xl gap-4">
              <span className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                <MapPin size={18} />
              </span>
              <div>
                <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider">
                  Office Address
                </h4>
                <p className="text-xs md:text-sm text-gray-800 mt-1.5 leading-relaxed font-semibold">
                  101 Radhey Flats, 13/14 Sumant Park, opp. Shrenik, Par Park,
                  Akota, Vadodara, Gujarat 390007
                </p>
              </div>
            </div>
            {/* Availability */}
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 flex items-center gap-3 text-xs text-gray-700">
              <Clock size={16} className="text-[#D51745]" />
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
