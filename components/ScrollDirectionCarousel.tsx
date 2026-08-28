"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { placesData } from "@/data/placesData";

gsap.registerPlugin(useGSAP);

const SPEED = 80; // px per second at idle drift
const IDLE = 1; // timeScale magnitude when no scrolling

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="#FFFFFF"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.5 12L4.99997 12" />
    <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" />
  </svg>
);

const ScrollDirectionCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // We use the first 8 popular places from placesData
  const places = placesData.slice(0, 8);

  useGSAP(
    () => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container || places.length === 0) return;

      const firstCard = track.children[0] as HTMLElement;
      const cardWidth =
        firstCard.offsetWidth +
        parseFloat(getComputedStyle(firstCard).marginRight);
      const loopWidth = cardWidth * places.length;

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
    { scope: containerRef, dependencies: [places.length] }
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
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div ref={trackRef} className="flex w-max will-change-transform">
          {[...places, ...places].map((place, i) => (
            <Link
              href={`/places/${place.slug}`}
              key={`${place.slug}-${i}`}
              className="relative mr-6 shrink-0 block group cursor-pointer"
            >
              <div
                className="flex aspect-square h-80 sm:h-96 flex-col justify-end p-6 text-white relative overflow-hidden"
                style={{
                  clipPath: "url(#sdc-notch)",
                }}
              >
                {/* Background Image */}
                <Image
                  src={place.img}
                  alt={place.title}
                  fill
                  className="object-cover -z-10 group-hover:scale-105 transition-transform duration-500 ease-out"
                  unoptimized
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08070A]/90 via-[#08070A]/30 to-transparent -z-10" />

                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D51745] bg-[#FAFAFA] px-2.5 py-1 rounded w-max mb-2 shadow-sm">
                  {place.tag || "Popular Place"}
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
                  {place.title}
                </h3>
              </div>
              <div className="absolute bottom-0 right-0 flex h-14 w-24 items-center justify-center rounded-full bg-[#D51745] text-white shadow-lg active:scale-95 transition-all duration-150">
                <Arrow />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollDirectionCarousel;
