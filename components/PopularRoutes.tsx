"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import { placeGroups, PlaceGroup } from "@/data/placesData";

interface RouteGroupProps {
  group: PlaceGroup;
}

function RouteGroupCarousel({ group }: RouteGroupProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });

  // Infinite Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animId: number;
    const speed = 0.45; // Smooth scroll speed

    const autoScroll = () => {
      if (!isHovered && !isDragging) {
        scrollContainer.scrollLeft += speed;
        // Since we duplicated the items array, half of the scrollWidth is the loop boundary
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= halfWidth) {
          scrollContainer.scrollLeft = scrollContainer.scrollLeft - halfWidth;
        }
      }
      animId = requestAnimationFrame(autoScroll);
    };

    animId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animId);
  }, [isHovered, isDragging]);

  // Dragging event handlers for desktop mouse swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      scrollLeft: scrollContainer.scrollLeft,
    };
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const dx = e.clientX - dragStartRef.current.x;
    scrollContainer.scrollLeft = dragStartRef.current.scrollLeft - dx;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.touches[0].clientX,
      scrollLeft: scrollContainer.scrollLeft,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const dx = e.touches[0].clientX - dragStartRef.current.x;
    scrollContainer.scrollLeft = dragStartRef.current.scrollLeft - dx;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const scroll = (direction: "left" | "right") => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const offset = direction === "left" ? -320 : 320;
    scrollContainer.scrollBy({ left: offset, behavior: "smooth" });
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
        ref={scrollContainerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseUpOrLeave();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing py-2 select-none scrollbar-hide scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Double-map items array for infinite loop scroll illusion */}
        {[...group.items, ...group.items].map((place, idx) => (
          <div
            key={`${place.slug}-${idx}`}
            className="w-72 shrink-0 bg-white border border-gray-200/60 rounded-2xl overflow-hidden group shadow-md flex flex-col hover:shadow-lg transition-all duration-200 hover:border-gray-300"
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
                {/* Duration Overlay */}
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
