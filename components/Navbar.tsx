"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SpecularButton from "@/components/SpecularButton";
import { Phone, MessageSquare, Menu, X } from "lucide-react";
import Ydcabs from "./Ydcabs";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { label: "Home", link: "/" },
    { label: "Our Fleet", link: "/#fleet" },
    { label: "Popular Routes", link: "/#routes" },
    { label: "Why Us", link: "/#whyus" },
    { label: "FAQs", link: "/#faq" },
    { label: "Contact Us", link: "/#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-30 flex flex-col">
        {/* Top Bar for Contact Details */}
        <div
          className={`w-full bg-[#08070A] border-b border-[#221F2B]/50 px-4 md:px-8 text-xs text-gray-400 flex justify-between items-center transition-all duration-300 ${
            scrolled ? "h-0 py-0 border-b-0 overflow-hidden" : "py-2"
          }`}
        >
          <div className="flex items-center gap-4">
            <a
              href="tel:+919099042156"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-150"
            >
              <Phone size={12} className="text-[#D51745]" />
              <span>+91 90990 42156</span>
            </a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="hidden sm:inline">24/7 Cab Booking Vadodara</span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <Link
              href="mailto:bookings@yashdeepcabs.com"
              target="_blank"
              className="hidden sm:inline"
            >
              bookings@yashdeepcabs.com
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919099042156"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors duration-150 font-medium"
            >
              <MessageSquare size={12} className="text-[#25D366]" />
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main Header */}
        <header
          className={`w-full transition-all duration-300 ${
            scrolled
              ? "bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#E5E7EB] py-3 shadow-lg"
              : "bg-[#FAFAFA] py-5 border-b border-[#E5E7EB]/10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 select-none group"
            >
              <div className="w-10 h-10 relative overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Ydcabs className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-none text-gray-900">
                  Yashdeep
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest leading-none mt-1">
                  Travels
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.link}
                  className="text-sm font-semibold text-gray-600 hover:text-[#D51745] transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA & Menu Toggle button */}
            <div className="flex items-center gap-4">
              {/* Helpline Action */}
              <div className="hidden sm:block">
                <a
                  href={`https://wa.me/919099042156?text=${encodeURIComponent("Hello Yashdeep Travels, I am visiting your website and would like to inquire about cab bookings, outstation packages, and vehicle availability. Please connect me with an agent. Thank you.")}`}
                >
                  <SpecularButton
                    size="md"
                    radius={10}
                    textColor="#ffffff"
                    lineColor="#D51745"
                    baseColor="#1A1822"
                    intensity={0.8}
                    speed={0.4}
                    shineSize={12}
                    followMouse
                  >
                    Book Inquiry
                  </SpecularButton>
                </a>
              </div>

              {/* Mobile Menu Trigger (Hamburger) */}
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="md:hidden w-10 h-10 rounded-lg border border-[#E5E7EB] bg-white flex items-center justify-center text-gray-700 hover:text-[#D51745] hover:border-[#D51745]/30 transition-all duration-150 cursor-pointer"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Nav Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-[#FAFAFA] border-b border-[#E5E7EB] shadow-xl md:hidden animate-fade-in z-20">
              <nav className="flex flex-col p-4 space-y-3">
                {navLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.link}
                    onClick={handleLinkClick}
                    className="px-4 py-2.5 rounded-lg text-sm font-bold text-gray-700 hover:text-[#D51745] hover:bg-[#D51745]/5 transition-all duration-150 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                  </Link>
                ))}
                <div className="pt-2 border-t border-[#E5E7EB]/60">
                  <a
                    href="tel:+919099042156"
                    onClick={handleLinkClick}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#D51745] text-white font-bold text-xs"
                  >
                    <Phone size={14} />
                    <span>Call +91 90990 42156</span>
                  </a>
                </div>
              </nav>
            </div>
          )}
        </header>
      </div>
      {/* Spacer to prevent layout overlap beneath fixed header */}
      <div className="h-28 shrink-0" />
    </>
  );
}
