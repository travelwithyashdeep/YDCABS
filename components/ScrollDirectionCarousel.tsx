"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { fleetData } from "@/data/fleetData";

gsap.registerPlugin(useGSAP);

const SPEED = 80; // px per second at idle drift
const IDLE = 1; // timeScale magnitude when no scrolling

const WhatsAppIcon = () => (
  <svg
    className="h-6 w-6 fill-current text-neutral-50"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.817 1.452 5.43.003 9.85-4.417 9.854-9.848.002-2.63-1.023-5.101-2.887-6.967C16.262 1.87 13.79 .845 11.16.845c-5.433 0-9.853 4.417-9.857 9.848 0 1.767.46 3.49 1.332 5.02L1.65 21.05l5.006-1.314zM17.07 14.5c-.274-.137-1.62-.8-1.87-.892-.25-.092-.432-.137-.613.137-.18.274-.7.892-.857 1.074-.157.18-.314.202-.588.066-1.92-.953-3.085-2.093-4.148-3.923-.274-.473-.326-.798-.057-1.066.241-.24.538-.638.7-.958.163-.32.08-.6-.04-.892-.12-.294-.613-1.48-.84-2.023-.22-.53-.443-.457-.613-.466-.16-.008-.344-.01-.527-.01-.184 0-.485.07-.74.35-.256.282-.977.954-.977 2.33 0 1.376 1.002 2.703 1.14 2.887.14.18 1.97 3.007 4.773 4.218.667.288 1.188.46 1.594.59.67.213 1.28.183 1.76.11.537-.08 1.62-.663 1.85-1.3.23-.637.23-1.183.162-1.3-.07-.116-.254-.183-.528-.32z" />
  </svg>
);

const ScrollDirectionCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // We repeat fleetData 4 times to ensure seamless infinite scrolling loop
  const cars = [...fleetData, ...fleetData, ...fleetData, ...fleetData];

  useGSAP(
    () => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container || cars.length === 0) return;

      const firstCard = track.children[0] as HTMLElement;
      const cardWidth =
        firstCard.offsetWidth +
        parseFloat(getComputedStyle(firstCard).marginRight);
      const loopWidth = cardWidth * fleetData.length;

      const wrapX = gsap.utils.wrap(-loopWidth, 0);
      const setX = gsap.quickSetter(track, "x", "px");
      let x = 0;

      let direction = 1;
      let boost = 0;

      // Tick update for auto drift
      const tick = (_time: number, deltaTime: number) => {
        boost *= 0.92;
        if (boost < 0.001) boost = 0;
        x -= direction * (IDLE + boost) * SPEED * (deltaTime / 1000);
        setX(wrapX(x));
      };
      gsap.ticker.add(tick);

      // 1. Horizontal Wheel Support (blocks default only for horizontal scroll)
      const onWheel = (e: WheelEvent) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          e.preventDefault();
          direction = e.deltaX > 0 ? 1 : -1;
          boost = gsap.utils.clamp(0, 45, boost + Math.abs(e.deltaX) * 0.05);
        }
      };
      container.addEventListener("wheel", onWheel, { passive: false });

      // 2. Touch swipe support for mobile devices
      let lastTouchX = 0;
      const onTouchStart = (e: TouchEvent) => {
        lastTouchX = e.touches[0].clientX;
      };
      const onTouchMove = (e: TouchEvent) => {
        const touchX = e.touches[0].clientX;
        const diffX = touchX - lastTouchX;
        if (Math.abs(diffX) > 1) {
          direction = diffX > 0 ? -1 : 1;
          boost = gsap.utils.clamp(0, 45, boost + Math.abs(diffX) * 0.18);
          lastTouchX = touchX;
        }
      };
      container.addEventListener("touchstart", onTouchStart, { passive: true });
      container.addEventListener("touchmove", onTouchMove, { passive: true });

      return () => {
        gsap.ticker.remove(tick);
        container.removeEventListener("wheel", onWheel);
        container.removeEventListener("touchstart", onTouchStart);
        container.removeEventListener("touchmove", onTouchMove);
      };
    },
    { scope: containerRef, dependencies: [cars.length] },
  );

  return (
    <div className="w-full">
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="sdc-notch" clipPathUnits="objectBoundingBox">
            <path d="M0.1,0 H0.9 A0.1,0.1 0 0 1 1,0.1 V0.7 A0.1,0.1 0 0 1 0.9,0.8 H0.8 A0.1,0.1 0 0 0 0.7,0.9 V0.9 A0.1,0.1 0 0 1 0.6,1 H0.1 A0.1,0.1 0 0 1 0,0.9 V0.1 A0.1,0.1 0 0 1 0.1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        ref={containerRef}
        className="w-full select-none overflow-hidden py-4"
      >
        <div ref={trackRef} className="flex w-max will-change-transform">
          {cars.map((car, i) => {
            const waMsg = `Hello Yashdeep Travels,\n\nI would like to check the availability and customized fare quotes for renting a \n\n*${car.name} ${car.options}* cab. \n\nKindly share details at your earliest convenience. \n\nThank you.`;
            const waLink = `https://wa.me/919099042156?text=${encodeURIComponent(waMsg)}`;
            return (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                key={`${car.name}-${i}`}
                className="relative mr-6 shrink-0 block group cursor-pointer select-none"
              >
                <div
                  className="flex aspect-square h-80 sm:h-96 flex-col justify-between p-6 text-neutral-50 relative overflow-hidden bg-brand rounded-3xl"
                  style={{
                    clipPath: "url(#sdc-notch)",
                  }}
                >
                  {/* Subtle radial/glow overlay background */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(213,23,69,0.08),transparent_70%)] pointer-events-none" />

                  {/* Top Row: Brand / Type & Rate */}
                  <div className="flex justify-between items-start z-10 w-full">
                    <span className="font-neue-bold-italic text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#D51745] bg-[#D51745]/10 px-2.5 py-1 rounded-md">
                      {car.name}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-neutral-350">
                      Starting at{" "}
                      <strong className="text-neutral-50 text-sm sm:text-base font-black">
                        {car.rate}
                      </strong>
                    </span>
                  </div>

                  {/* Middle Row: Vehicle Image with Hover Effect & Glow */}
                  <div className="absolute inset-0 flex items-center justify-center -translate-y-8 -translate-x-2">
                    <div className="absolute w-36 h-36 bg-[#D51745]/15 blur-3xl rounded-full pointer-events-none" />
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-[72%] max-h-[145px] sm:max-h-[165px] object-contain group-hover:scale-104 transition-transform duration-500 ease-out drop-shadow-[0_12px_20px_rgba(0,0,0,0.6)]"
                    />
                  </div>

                  {/* Bottom Row: Info Details (Avoiding Notch on right) */}
                  <div className="mt-auto z-10 max-w-[65%] text-left">
                    <p className="text-[11px] sm:text-xs text-neutral-400 line-clamp-1 font-medium">
                      {car.options.replace(/[()]/g, "")}
                    </p>
                    <p className="text-[10px] sm:text-xs text-neutral-500 mt-1">
                      Min. limit:{" "}
                      <span className="font-semibold text-neutral-300">
                        {car.minLimit}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Bottom Right Notch Button with WhatsApp Green */}
                <div className="absolute bottom-0 right-0 flex h-13 w-20 sm:h-14 sm:w-22 items-center justify-center rounded-full bg-[#25D366] text-neutral-50 shadow-lg active:scale-95 transition-all duration-150 hover:bg-[#20ba59]">
                  <WhatsAppIcon />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollDirectionCarousel;
