"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin, Phone, MessageSquare } from "lucide-react";
import { placeGroups, PlaceData, PlaceGroup } from "@/data/placesData";

interface RouteGroupProps {
  group: PlaceGroup;
}

function RouteGroupCarousel({ group }: RouteGroupProps) {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Dragging state variables
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // Performance Optimization States
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Prepare items for infinite seamless scroll (duplicate array if needed)
  const displayItems =
    group.items.length < 4
      ? [...group.items, ...group.items, ...group.items, ...group.items]
      : [...group.items, ...group.items];

  // Device/Touch detection to disable auto-scroll on mobile/tablet (touchscreens)
  useEffect(() => {
    const checkDevice = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      const isSmallScreen = window.innerWidth < 768;
      setShouldAnimate(!isTouch && !isSmallScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // IntersectionObserver to pause scroll loop when out of viewport
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Smooth scroll marquee loop (only on Desktop and when visible)
  useEffect(() => {
    if (!shouldAnimate || !isIntersecting) return;

    let animationFrameId: number;

    const smoothScroll = () => {
      if (!isPaused && !isMouseDownRef.current && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft += 0.8; // Constant smooth speed scroll

        // Reset scroll position seamlessly when reaching midpoint
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    animationFrameId = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, shouldAnimate, isIntersecting]);

  // Drag Handlers for Mouse (Desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isMouseDownRef.current = true;
    setIsPaused(true);
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isMouseDownRef.current = false;
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
    setIsPaused(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCall = () => {
    window.open("tel:+919099042156", "_self");
  };

  const handleBook = (place: PlaceData) => {
    const message = encodeURIComponent(
      `Hello Yashdeep Travels! I want to book a cab trip to *${place.title}*. Please confirm availability.`
    );
    window.open(`https://wa.me/919099042156?text=${message}`, "_blank");
  };

  return (
    <div className="mb-16 last:mb-0">
      {/* Subtitle & Title Row with Navigation */}
      <div className="flex items-end justify-between mb-6 px-1">
        <div>
          {group.subtitle && (
            <span className="block text-xs md:text-sm text-[#D51745] mb-1 font-neue-italic tracking-wide">
              {group.subtitle}
            </span>
          )}
          <h3 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2 uppercase">
            <span className="w-1.5 h-6 bg-[#D51745] rounded-full inline-block" />
            {group.title}
          </h3>
        </div>

        {/* Navigation Chevrons */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label={`Previous ${group.title} Slide`}
            className="w-9 h-9 rounded-full border border-gray-200 bg-white text-gray-700 hover:text-[#D51745] hover:border-[#D51745] flex items-center justify-center transition-all duration-150 cursor-pointer shadow-sm active:scale-90"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label={`Next ${group.title} Slide`}
            className="w-9 h-9 rounded-full border border-gray-200 bg-white text-gray-700 hover:text-[#D51745] hover:border-[#D51745] flex items-center justify-center transition-all duration-150 cursor-pointer shadow-sm active:scale-90"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Carousel list of cards with gradient overlays */}
      <div className="relative overflow-hidden">
        {/* Left & Right gradient overlays for the fade effect instead of CPU-heavy CSS mask-image */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#FAFAFA] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#FAFAFA] to-transparent pointer-events-none z-10" />

        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex overflow-x-auto scrollbar-none py-4 px-1 cursor-grab active:cursor-grabbing select-none gap-6"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {displayItems.map((place, idx) => (
            <div
              key={`${place.slug}-${idx}`}
              className="w-72 shrink-0 bg-white border border-gray-200/60 rounded-2xl overflow-hidden group shadow-md flex flex-col hover:shadow-lg transition-all duration-200 hover:border-gray-300 mr-1"
            >
              {/* Clickable Card Header + Content */}
              <Link
                href={`/places/${place.slug}`}
                className="cursor-pointer flex flex-col flex-1"
                draggable={false}
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
                    draggable={false}
                  />

                  {/* Tag Overlay */}
                  <span className="absolute top-3 left-3 bg-[#D51745] text-[9px] uppercase font-bold tracking-wider text-neutral-50 px-2.5 py-1 rounded">
                    {place.tag || "Outstation"}
                  </span>
                </div>

                {/* Card Contents */}
                <div className="p-5 flex flex-col flex-1 pb-0">
                  <h4 className="font-extrabold text-sm text-gray-950 tracking-tight line-clamp-1 group-hover:text-[#D51745] transition-colors duration-150 uppercase">
                    {place.title}
                  </h4>

                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold mt-1">
                    <MapPin size={10} className="text-[#D51745]" />
                    <span>{place.location}</span>
                  </div>

                  <p className="text-[11px] text-gray-600 mt-2.5 line-clamp-2 leading-relaxed font-semibold">
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

              {/* Bottom Buttons Grid */}
              <div className="p-5 pt-0">
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {/* Call Now Button */}
                  <button
                    onClick={handleCall}
                    className="bg-[#D51745] hover:bg-[#B21035] text-white py-2 rounded-lg text-center text-[10px] font-black uppercase tracking-wider transition-colors duration-150 cursor-pointer shadow-sm active:scale-95 flex items-center justify-center gap-1"
                  >
                    <Phone size={10} className="stroke-[2.5]" />
                    <span>Call Now</span>
                  </button>
                  {/* Book Now Button */}
                  <button
                    onClick={() => handleBook(place)}
                    className="py-2 rounded-lg text-center border border-neutral-200 hover:bg-neutral-50 text-[10px] font-black text-neutral-900 uppercase tracking-wider transition-colors duration-150 cursor-pointer shadow-sm active:scale-95 flex items-center justify-center gap-1"
                  >
                    <MessageSquare size={10} className="fill-neutral-900 stroke-none" />
                    <span>Book Now</span>
                  </button>
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
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <div className="inline-block px-4 py-1 bg-[#D51745] text-white font-extrabold text-[10px] uppercase tracking-widest rounded-full shadow-sm">
            POPULAR PLACES & TOURS
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight uppercase">
            EXPLORE TOP DESTINATIONS
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm font-semibold">
            Browse our categorized top travel destinations with continuous infinite carousels below!
          </p>
        </div>

        {placeGroups.map((group) => (
          <RouteGroupCarousel key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
}
