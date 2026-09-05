import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import ContactForm from "./Contact-form";
export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center py-12 sm:py-16 lg:py-20 pb-28 sm:pb-24 lg:pb-20 px-4 md:px-8 overflow-hidden bg-[#faf8f5]">
      {/* Background image optimized with Next.js Image for LCP */}
      <Image
        src="/images/hero-bg.webp"
        alt="Yashdeep Travels Hero Background"
        fill
        priority
        quality={80}
        sizes="100vw"
        className="object-cover object-[center_58%] sm:object-[center_58%] lg:object-[center_56%] pointer-events-none transition-all duration-300"
      />
      {/* Subtle overlay to ensure text stands out slightly but remains clean */}
      <div className="absolute inset-0 bg-black/15 z-0 pointer-events-none" />
      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Yellow Headline */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left space-y-4">
          {/* drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] */}
          <h1 className="text-5xl  md:text-7xl font-bold drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]  tracking-tight text-neutral-50  leading-none ">
            Where will you <br />
            go next?
          </h1>
          <div className="flex items-center gap-3">
            <Link
              href={"tel:+919099042156"}
              className="bg-brand rounded-3xl hover:scale-110 transition duration-200 text-neutral-50 font-medium px-4 py-3 flex items-center gap-2"
            >
              <Phone size={18} />
              <span>Book a Cab</span>
            </Link>{" "}
            <a
              href={`https://wa.me/919099042156?text=${encodeURIComponent("Hello Yashdeep Travels, I am visiting your website and would like to inquire about cab bookings, outstation packages, and vehicle availability. Please connect me with an agent. Thank you.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] px-4 py-3 flex items-center hover:scale-110 transition duration-200 gap-2 rounded-3xl font-medium text-neutral-50 cursor-pointer shadow-sm"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_418_208)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0205 2.73821C14.2579 0.973329 11.9136 0.000895426 9.41585 0C4.26895 0 0.0801406 4.18836 0.0783497 9.33661C0.0774543 10.9824 0.507707 12.5888 1.32479 14.0045L0 18.8434L4.94992 17.545C6.31364 18.2891 7.8493 18.6808 9.41184 18.6813H9.41585C14.5619 18.6813 18.7512 14.4925 18.7529 9.34422C18.7538 6.84914 17.7836 4.50355 16.0205 2.73866V2.73821ZM9.41585 17.1044H9.41272C8.02032 17.104 6.65437 16.7297 5.46257 16.0228L5.17915 15.8545L2.2417 16.6249L3.02565 13.7609L2.84119 13.4672C2.06441 12.2315 1.65385 10.8033 1.65475 9.33708C1.65654 5.05827 5.13796 1.57685 9.41902 1.57685C11.4919 1.57774 13.4404 2.38587 14.9057 3.85302C16.3711 5.31974 17.1774 7.26999 17.1765 9.34333C17.1747 13.6226 13.6933 17.104 9.41585 17.104V17.1044ZM13.6727 11.2922C13.4394 11.1754 12.2924 10.6112 12.0784 10.5334C11.8644 10.4554 11.7091 10.4165 11.5537 10.6502C11.3983 10.8839 10.9511 11.4095 10.815 11.5649C10.6789 11.7207 10.5427 11.74 10.3095 11.6231C10.0763 11.5062 9.32453 11.26 8.43314 10.4653C7.73965 9.84654 7.27129 9.08277 7.13523 8.84904C6.99911 8.61536 7.1209 8.48909 7.23728 8.37313C7.34203 8.26838 7.47054 8.10048 7.58738 7.96437C7.70428 7.82825 7.74277 7.73069 7.82065 7.5753C7.89858 7.41949 7.85961 7.28343 7.80143 7.16654C7.74319 7.0497 7.27671 5.90129 7.08194 5.43434C6.89253 4.97947 6.70006 5.04126 6.55722 5.03365C6.42111 5.02693 6.26577 5.02559 6.10996 5.02559C5.95416 5.02559 5.70162 5.08379 5.48763 5.3175C5.27364 5.55118 4.671 6.11575 4.671 7.26369C4.671 8.41163 5.5069 9.52154 5.62374 9.67735C5.74058 9.83315 7.26905 12.1895 9.60926 13.2004C10.1658 13.4408 10.6005 13.5845 10.9394 13.692C11.4982 13.8697 12.0068 13.8447 12.4088 13.7847C12.857 13.7175 13.7891 13.2201 13.9834 12.6752C14.1777 12.1303 14.1777 11.6629 14.1196 11.5658C14.0614 11.4686 13.9056 11.41 13.6723 11.2931L13.6727 11.2922Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_418_208">
                    <rect width="18.7529" height="18.8571" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Send a message</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Booking Form */}
        <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
