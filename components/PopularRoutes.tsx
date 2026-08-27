"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { placeGroups, PlaceGroup } from "@/data/placesData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const SPEED = 80; // px per second at idle drift
const IDLE = 1; // timeScale magnitude when no scrolling

interface RouteGroupProps {
  group: PlaceGroup;
}

function RouteGroupCarousel({ group }: RouteGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef(1);
  const boostRef = useRef(0);

  useGSAP(
    () => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container || group.items.length === 0) return;

      const firstCard = track.children[0] as HTMLElement;
      const cardWidth =
        firstCard.offsetWidth +
        parseFloat(getComputedStyle(firstCard).marginRight);
      const loopWidth = cardWidth * group.items.length;

      const wrapX = gsap.utils.wrap(-loopWidth, 0);
      const setX = gsap.quickSetter(track, "x", "px");
      let x = 0;

      // Tick update for auto drift
      const tick = (_time: number, deltaTime: number) => {
        boostRef.current *= 0.92;
        if (boostRef.current < 0.001) boostRef.current = 0;
        x -= directionRef.current * (IDLE + boostRef.current) * SPEED * (deltaTime / 1000);
        setX(wrapX(x));
      };
      gsap.ticker.add(tick);

      // 1. Vertical Scroll Boost (non-preventPreventDefault, passive)
      let lastScrollY = window.scrollY;
      const onWindowScroll = () => {
        const currentScrollY = window.scrollY;
        const diff = currentScrollY - lastScrollY;
        if (diff !== 0) {
          directionRef.current = diff > 0 ? 1 : -1;
          boostRef.current = gsap.utils.clamp(0, 45, boostRef.current + Math.abs(diff) * 0.06);
        }
        lastScrollY = currentScrollY;
      };
      window.addEventListener("scroll", onWindowScroll, { passive: true });

      // 2. Horizontal Wheel Support (blocks default only for horizontal scroll)
      const onWheel = (e: WheelEvent) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          e.preventDefault();
          directionRef.current = e.deltaX > 0 ? 1 : -1;
          boostRef.current = gsap.utils.clamp(0, 45, boostRef.current + Math.abs(e.deltaX) * 0.05);
        }
      };
      container.addEventListener("wheel", onWheel, { passive: false });

      // 3. Touch swipe support for mobile devices
      let lastTouchX = 0;
      const onTouchStart = (e: TouchEvent) => {
        lastTouchX = e.touches[0].clientX;
      };
      const onTouchMove = (e: TouchEvent) => {
        const touchX = e.touches[0].clientX;
        const diffX = touchX - lastTouchX;
        if (Math.abs(diffX) > 1) {
          directionRef.current = diffX > 0 ? -1 : 1;
          boostRef.current = gsap.utils.clamp(0, 45, boostRef.current + Math.abs(diffX) * 0.18);
          lastTouchX = touchX;
        }
      };
      container.addEventListener("touchstart", onTouchStart, { passive: true });
      container.addEventListener("touchmove", onTouchMove, { passive: true });

      return () => {
        gsap.ticker.remove(tick);
        window.removeEventListener("scroll", onWindowScroll);
        container.removeEventListener("wheel", onWheel);
        container.removeEventListener("touchstart", onTouchStart);
        container.removeEventListener("touchmove", onTouchMove);
      };
    },
    { scope: containerRef, dependencies: [group.items.length] }
  );

  const scroll = (direction: "left" | "right") => {
    directionRef.current = direction === "left" ? -1 : 1;
    boostRef.current = 35; // Apply a big boost to spin it!
  };

  return (
    <div className="mb-16 last:mb-0">
      {/* Subtitle & Title Row with Navigation */}
      <div className="flex items-end justify-between mb-6 px-1">
        <div>
          {group.subtitle && (
            <span className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-[#D51745] mb-1">
              {group.subtitle}
            </span>
          )}
          <h3 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#D51745] rounded-full inline-block" />
            {group.title}
          </h3>
        </div>

        {/* Navigation Chevrons */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 rounded-full border border-gray-200 bg-white text-gray-700 hover:text-[#D51745] hover:border-[#D51745] flex items-center justify-center transition-all duration-150 cursor-pointer shadow-sm active:scale-90"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 rounded-full border border-gray-200 bg-white text-gray-700 hover:text-[#D51745] hover:border-[#D51745] flex items-center justify-center transition-all duration-150 cursor-pointer shadow-sm active:scale-90"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Carousel list of cards */}
      <div
        ref={containerRef}
        className="w-full select-none overflow-hidden py-2"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div ref={trackRef} className="flex w-max will-change-transform">
          {/* Double-map items array for infinite loop scroll illusion */}
          {[...group.items, ...group.items].map((place, idx) => (
            <div
              key={`${place.slug}-${idx}`}
              className="w-72 shrink-0 bg-white border border-gray-200/60 rounded-2xl overflow-hidden group shadow-md flex flex-col hover:shadow-lg transition-all duration-200 hover:border-gray-300 mr-6"
            >
              {/* Clickable Card Header + Content */}
              <Link
                href={`/places/${place.slug}`}
                className="cursor-pointer flex flex-col flex-1"
              >
                {/* Image Frame */}
                <div className="relative h-44 overflow-hidden bg-gray-900">
                  <Image
                    src={place.img}
                    alt={place.title}
                    fill
                    sizes="300px"
                    className="object-cover transition-transform duration-300 group-hover:scale-102"
                    unoptimized
                  />

                  {/* Tag Overlay */}
                  <span className="absolute top-3 left-3 bg-[#D51745] text-[9px] uppercase font-bold tracking-wider text-neutral-50 px-2.5 py-1 rounded">
                    {place.tag || "Outstation"}
                  </span>
                </div>

                {/* Card Contents */}
                <div className="p-5 flex flex-col flex-1 pb-0">
                  <h4 className="font-extrabold text-sm text-gray-950 tracking-tight line-clamp-1 group-hover:text-[#D51745] transition-colors duration-150">
                    {place.title}
                  </h4>

                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold mt-1">
                    <MapPin size={10} className="text-[#D51745]" />
                    <span>{place.location}</span>
                  </div>

                  <p className="text-[11px] text-gray-655 mt-2.5 line-clamp-2 leading-relaxed font-semibold">
                    {place.description}
                  </p>

                  {/* Distance Row */}
                  <div className="mt-3.5 pb-3 border-b border-gray-100 text-[10px] flex items-center justify-between">
                    <span className="text-gray-400 font-semibold uppercase tracking-wider">
                      Distance
                    </span>
                    <span className="font-bold text-gray-900">
                      {place.distance}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Bottom Buttons Grid (Placed outside the Link wrapper to keep nested links valid HTML) */}
              <div className="p-5 pt-0">
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {/* Call Now Button */}
                  <a
                    href="tel:+919099042156"
                    className="bg-[#D51745] hover:bg-[#B21035] text-neutral-900 py-2 rounded-lg text-center text-[10px] font-black uppercase tracking-wider transition-colors duration-150 cursor-pointer shadow-sm active:scale-95"
                  >
                    Call Now
                  </a>
                  {/* Book Now Button */}
                  <Link
                    href={`/places/${place.slug}`}
                    className="  py-2 rounded-lg text-center border border-neutral-200 text-[10px] font-black text-neutral-900 uppercase tracking-wider transition-colors duration-150 cursor-pointer shadow-sm active:scale-95"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PopularRoutes() {
  return (
    <section
      id="routes"
      className="py-20 px-4 md:px-8 bg-[#FAFAFA] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {placeGroups.map((group) => (
          <RouteGroupCarousel key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
}
