"use client";

import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import {
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  X,
  Search,
  ChevronDown,
} from "lucide-react";
import { placeGroups } from "@/data/placesData";

type TripType = "oneway" | "roundtrip" | "local";

const LOCAL_PACKAGES = [
  { id: "4hr-40km", label: "4 hrs - 40 km", sedanPrice: 800, suvPrice: 1500 },
  { id: "6hr-60km", label: "6 hrs - 60 km", sedanPrice: 1200, suvPrice: 1800 },
  { id: "8hr-80km", label: "8 hrs - 80 km", sedanPrice: 1700, suvPrice: 2200 },
  {
    id: "10hr-100km",
    label: "10 hrs - 100 km",
    sedanPrice: 2200,
    suvPrice: 2500,
  },
  {
    id: "12hr-120km",
    label: "12 hrs - 120 km",
    sedanPrice: 2500,
    suvPrice: 3000,
  },
];

interface Suggestion {
  city: string;
  subtitle: string;
  lat?: number;
  lon?: number;
}

const getAqiBadgeColor = (aqi: number) => {
  if (aqi <= 50)
    return "bg-[#D1FAE5] text-[#059669] border border-[#059669]/20";
  if (aqi <= 100)
    return "bg-[#FEF3C7] text-[#D97706] border border-[#D97706]/20";
  if (aqi <= 150)
    return "bg-[#FFEDD5] text-[#EA580C] border border-[#EA580C]/20";
  return "bg-[#FFE4E6] text-[#E11D48] border border-[#E11D48]/20";
};

const getAqiStatus = (aqi: number) => {
  if (aqi <= 50) return "Good";
  if (aqi <= 100) return "Moderate";
  if (aqi <= 150) return "Sensitive Groups";
  return "Poor";
};

const CITY_COORDS: Record<string, { lat: number; lon: number }> = {
  vadodara: { lat: 22.3072, lon: 73.1812 },
  ahmedabad: { lat: 23.0225, lon: 72.5714 },
  surat: { lat: 21.1702, lon: 72.8311 },
  rajkot: { lat: 22.3039, lon: 70.8022 },
  anand: { lat: 22.5645, lon: 72.9289 },
  nadiad: { lat: 22.6916, lon: 72.8634 },
  "statue of unity": { lat: 21.838, lon: 73.7191 },
  udaipur: { lat: 24.5854, lon: 73.7125 },
  "mount abu": { lat: 24.5925, lon: 72.7156 },
  mumbai: { lat: 19.076, lon: 72.8777 },
  nashik: { lat: 19.9975, lon: 73.7898 },
  shirdi: { lat: 19.7662, lon: 74.4762 },
  indore: { lat: 22.7196, lon: 75.8577 },
  ujjain: { lat: 23.176, lon: 75.7885 },
  somnath: { lat: 20.888, lon: 70.4012 },
  dwarka: { lat: 22.2442, lon: 68.9685 },
  diu: { lat: 20.7144, lon: 70.9822 },
  sasan: { lat: 21.161, lon: 70.5985 },
  gir: { lat: 21.161, lon: 70.5985 },
  "gir national park": { lat: 21.161, lon: 70.5985 },
  pavagadh: { lat: 22.4628, lon: 73.5242 },
  champaner: { lat: 22.4842, lon: 73.535 },
  daman: { lat: 20.3974, lon: 72.8328 },
  saputara: { lat: 20.5794, lon: 73.7483 },
  pune: { lat: 18.5204, lon: 73.8567 },
  lonavala: { lat: 18.7557, lon: 73.4091 },
  mahabaleshwar: { lat: 17.9258, lon: 73.656 },
  shrinathji: { lat: 24.9333, lon: 73.8167 },
  nathdwara: { lat: 24.9333, lon: 73.8167 },
  jaipur: { lat: 26.9124, lon: 75.7873 },
  jodhpur: { lat: 26.2389, lon: 73.0243 },
  jaisalmer: { lat: 26.9157, lon: 70.9083 },
};

export default function ContactForm() {
  const [tripType, setTripType] = useState<TripType>("oneway");
  const [localPackage, setLocalPackage] = useState("8hr-80km");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [carType, setCarType] = useState("");

  // AQI states
  const [pickupAqi, setPickupAqi] = useState<number | null>(null);
  const [dropoffAqi, setDropoffAqi] = useState<number | null>(null);
  const [pickupAqiLoading, setPickupAqiLoading] = useState(false);
  const [dropoffAqiLoading, setDropoffAqiLoading] = useState(false);

  // Autocomplete suggestions
  const [pickupSuggestions, setPickupSuggestions] = useState<Suggestion[]>([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState<Suggestion[]>(
    [],
  );
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);
  const [showDropoffDropdown, setShowDropoffDropdown] = useState(false);

  // Mobile modal state
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [mobileSearchField, setMobileSearchField] = useState<
    "pickup" | "dropoff" | null
  >(null);
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");
  const [mobileSuggestions, setMobileSuggestions] = useState<Suggestion[]>([]);

  // Refs for closing dropdowns on click-outside
  const pickupRef = useRef<HTMLDivElement>(null);
  const dropoffRef = useRef<HTMLDivElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  // Fallback local list of places
  const localPlaces: Suggestion[] = React.useMemo(() => {
    const list: Suggestion[] = [
      { city: "Vadodara", subtitle: "Gujarat, India" },
      { city: "Ahmedabad", subtitle: "Gujarat, India" },
      { city: "Surat", subtitle: "Gujarat, India" },
      { city: "Rajkot", subtitle: "Gujarat, India" },
      { city: "Anand", subtitle: "Gujarat, India" },
      { city: "Nadiad", subtitle: "Gujarat, India" },
      { city: "Statue of Unity", subtitle: "Ekta Nagar, Gujarat" },
      { city: "Udaipur", subtitle: "Rajasthan, India" },
      { city: "Mount Abu", subtitle: "Rajasthan, India" },
      { city: "Mumbai", subtitle: "Maharashtra, India" },
      { city: "Nashik", subtitle: "Maharashtra, India" },
      { city: "Shirdi", subtitle: "Maharashtra, India" },
      { city: "Indore", subtitle: "Madhya Pradesh, India" },
      { city: "Ujjain", subtitle: "Madhya Pradesh, India" },
    ].map((item) => {
      const cityKey = item.city.toLowerCase().trim();
      const coords = CITY_COORDS[cityKey] || {};
      return { ...item, ...coords };
    });

    placeGroups.forEach((group) => {
      group.items.forEach((item) => {
        if (
          !list.some((p) => p.city.toLowerCase() === item.title.toLowerCase())
        ) {
          const cityKey = item.title.toLowerCase().trim();
          const coords = CITY_COORDS[cityKey] || {};
          list.push({
            city: item.title,
            subtitle: item.location || "Gujarat & Nearby",
            ...coords,
          });
        }
      });
    });

    return list;
  }, []);

  // Fetch suggestions helper
  const fetchSuggestions = async (
    query: string,
    callback: (s: Suggestion[]) => void,
  ) => {
    if (query.length < 2) {
      callback([]);
      return;
    }

    // 1. Search local supported places first for instant client-side autocomplete
    const localFiltered = localPlaces.filter(
      (p) =>
        p.city.toLowerCase().includes(query.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(query.toLowerCase()),
    );

    if (localFiltered.length > 0) {
      callback(localFiltered.slice(0, 7));
      return;
    }

    // 2. Network fallback if not found in local curated list
    try {
      const response = await fetch(
        `/api/places?q=${encodeURIComponent(query)}`,
      );
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          callback(data);
          return;
        }
      }
    } catch (e) {
      console.warn("Failed to fetch suggestions from API, returning empty", e);
    }

    callback([]);
  };

  const handleSelectPlace = async (
    field: "pickup" | "dropoff",
    s: Suggestion,
  ) => {
    if (s.lat == null || s.lon == null) {
      if (field === "pickup") setPickupAqi(null);
      else setDropoffAqi(null);
      return;
    }

    const setAqi = field === "pickup" ? setPickupAqi : setDropoffAqi;
    const setLoading =
      field === "pickup" ? setPickupAqiLoading : setDropoffAqiLoading;

    setLoading(true);
    try {
      const res = await fetch(
        `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${s.lat}&longitude=${s.lon}&current=us_aqi`,
      );
      if (res.ok) {
        const data = await res.json();
        const aqiValue = data?.current?.us_aqi;
        if (typeof aqiValue === "number") {
          setAqi(aqiValue);
        } else {
          setAqi(null);
        }
      } else {
        setAqi(null);
      }
    } catch (e) {
      console.error("Failed to fetch AQI", e);
      setAqi(null);
    } finally {
      setLoading(false);
    }
  };

  // Clear AQI states on input change if value is too short
  useEffect(() => {
    if (pickup.length < 2) {
      setPickupAqi(null);
    }
  }, [pickup]);

  useEffect(() => {
    if (dropoff.length < 2) {
      setDropoffAqi(null);
    }
  }, [dropoff]);

  useEffect(() => {
    if (
      tripType === "local" &&
      carType !== "Sedan (Dzire/Etios)" &&
      carType !== "SUV (Ertiga/Triber)"
    ) {
      setCarType("Sedan (Dzire/Etios)");
    }
  }, [tripType, carType]);

  // Debounced search for Desktop pickup
  useEffect(() => {
    if (pickup.length < 2) {
      setPickupSuggestions([]);
      return;
    }
    const delayDebounce = setTimeout(() => {
      fetchSuggestions(pickup, (suggestions) => {
        setPickupSuggestions(suggestions);
        if (suggestions.length > 0) {
          setShowPickupDropdown(true);
        }
      });
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [pickup]);

  // Debounced search for Desktop dropoff
  useEffect(() => {
    if (dropoff.length < 2) {
      setDropoffSuggestions([]);
      return;
    }
    const delayDebounce = setTimeout(() => {
      fetchSuggestions(dropoff, (suggestions) => {
        setDropoffSuggestions(suggestions);
        if (suggestions.length > 0) {
          setShowDropoffDropdown(true);
        }
      });
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [dropoff]);

  // Debounced search for Mobile search modal
  useEffect(() => {
    if (mobileSearchQuery.length < 2) {
      setMobileSuggestions(localPlaces.slice(0, 8));
      return;
    }
    const delayDebounce = setTimeout(() => {
      fetchSuggestions(mobileSearchQuery, setMobileSuggestions);
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [mobileSearchQuery, localPlaces]);

  // Close dropdowns on outside clicks
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (pickupRef.current && !pickupRef.current.contains(e.target as Node)) {
        setShowPickupDropdown(false);
      }
      if (
        dropoffRef.current &&
        !dropoffRef.current.contains(e.target as Node)
      ) {
        setShowDropoffDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleInputFocus = (field: "pickup" | "dropoff") => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setMobileSearchField(field);
      setMobileSearchQuery(field === "pickup" ? pickup : dropoff);
      setMobileSuggestions(localPlaces.slice(0, 8));
      setIsMobileSearchOpen(true);
      setTimeout(() => {
        mobileInputRef.current?.focus();
      }, 100);
    } else {
      if (field === "pickup") {
        setShowPickupDropdown(true);
      } else {
        setShowDropoffDropdown(true);
      }
    }
  };

  const handleMobileSelect = (suggestion: Suggestion) => {
    if (mobileSearchField === "pickup") {
      setPickup(suggestion.city);
      handleSelectPlace("pickup", suggestion);
    } else if (mobileSearchField === "dropoff") {
      setDropoff(suggestion.city);
      handleSelectPlace("dropoff", suggestion);
    }
    setIsMobileSearchOpen(false);
    setMobileSearchField(null);
    setMobileSearchQuery("");
  };

  // WhatsApp form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!pickup.trim()) {
      toast.error("Please enter a pickup location.");
      return;
    }
    if (tripType !== "local" && !dropoff.trim()) {
      toast.error("Please enter a dropoff location.");
      return;
    }
    if (!carType) {
      toast.error("Please select a cab.");
      return;
    }
    if (!pickupDate) {
      toast.error("Please select a pickup date.");
      return;
    }
    if (!pickupTime) {
      toast.error("Please select a pickup time.");
      return;
    }

    const tripTypeName =
      tripType === "oneway"
        ? "One Way Outstation Trip"
        : tripType === "roundtrip"
          ? "Round Trip Outstation"
          : "Local Sightseeing/Transfer";

    const selectedPkg = LOCAL_PACKAGES.find((p) => p.id === localPackage);
    let localPackageText = "";
    if (tripType === "local" && selectedPkg) {
      let pkgFare = "";
      if (carType.toLowerCase().includes("sedan")) {
        pkgFare = `₹${selectedPkg.sedanPrice}`;
      } else if (
        carType.toLowerCase().includes("suv") &&
        !carType.toLowerCase().includes("premium")
      ) {
        pkgFare = `₹${selectedPkg.suvPrice}`;
      } else {
        pkgFare = "Quote on request";
      }
      localPackageText = `• *Local Package:* ${selectedPkg.label} (${pkgFare})\n`;
    }

    const message = `*Yashdeep Travels - Cab Booking Inquiry*

Hello, I would like to request a fare quote and check vehicle availability for the following trip:

*Booking Details:*
• *Service Type:* ${tripTypeName}
• *Pickup Location:* ${pickup}
${tripType !== "local" ? `• *Drop-off Location:* ${dropoff}\n` : ""}${localPackageText}• *Preferred Vehicle:* ${carType}
• *Travel Date:* ${pickupDate}
• *Pickup Time:* ${pickupTime}

Please share the availability and customized fare estimates at your earliest convenience. Thank you.`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/919099042156?text=${encoded}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="w-full max-w-md bg-slate-900/40 sm:bg-slate-900/35 backdrop-blur-md border border-white/30 p-4 sm:p-5 rounded-3xl shadow-2xl relative">
      {/* Trip Type Tabs in Pill format like mockup */}
      <div className="flex bg-black/10 p-1.5 rounded-full mb-6 border border-white/10">
        {(["oneway", "roundtrip", "local"] as const).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setTripType(type)}
            className={`flex-1 py-2 text-center text-xs md:text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
              tripType === type
                ? "bg-white text-gray-900 shadow-md"
                : "text-white/80 hover:text-white"
            }`}
          >
            {type === "oneway"
              ? "One way"
              : type === "roundtrip"
                ? "Round Trip"
                : "Local"}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Pickup Location + AQI badge grouped so space-y-4 rhythm stays stable */}
        <div className="space-y-1">
          <div ref={pickupRef} className="relative">
            <input
              type="text"
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onFocus={() => handleInputFocus("pickup")}
              className="w-full pl-4 pr-10 py-3.5 rounded-xl bg-white border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              <MapPin size={16} />
            </span>

            {/* Suggestions Dropdown (Desktop only) */}
            {showPickupDropdown && pickupSuggestions.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-20 max-h-60 overflow-y-auto">
                {pickupSuggestions.map((s, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setPickup(s.city);
                      setShowPickupDropdown(false);
                      setPickupSuggestions([]);
                      handleSelectPlace("pickup", s);
                    }}
                    className="w-full text-left px-4 py-3 text-xs md:text-sm hover:bg-gray-50 flex items-center gap-2 border-b border-gray-100 last:border-b-0 cursor-pointer"
                  >
                    <MapPin size={14} className="text-gray-400 shrink-0" />
                    <div>
                      <div className="font-bold text-gray-900">{s.city}</div>
                      <div className="text-[10px] text-gray-500">
                        {s.subtitle}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {pickupAqi !== null && (
            <div className="flex items-center gap-1.5 text-xs font-semibold pl-1 select-none">
              <span className="text-white/60">Pickup AQI:</span>
              <span
                className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold ${getAqiBadgeColor(pickupAqi)}`}
              >
                {pickupAqi} - {getAqiStatus(pickupAqi)}
              </span>
            </div>
          )}
        </div>

        {/* Dropoff Location (Hidden in Local Trip Type) + AQI badge grouped */}
        {tripType !== "local" && (
          <div className="space-y-1">
            <div ref={dropoffRef} className="relative">
              <input
                type="text"
                placeholder="Enter drop location"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                onFocus={() => handleInputFocus("dropoff")}
                className="w-full pl-4 pr-10 py-3.5 rounded-xl bg-white border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                <MapPin size={16} />
              </span>

              {/* Suggestions Dropdown (Desktop only) */}
              {showDropoffDropdown && dropoffSuggestions.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-20 max-h-60 overflow-y-auto">
                  {dropoffSuggestions.map((s, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setDropoff(s.city);
                        setShowDropoffDropdown(false);
                        setDropoffSuggestions([]);
                        handleSelectPlace("dropoff", s);
                      }}
                      className="w-full text-left px-4 py-3 text-xs md:text-sm hover:bg-gray-50 flex items-center gap-2 border-b border-gray-100 last:border-b-0 cursor-pointer"
                    >
                      <MapPin size={14} className="text-gray-400 shrink-0" />
                      <div>
                        <div className="font-bold text-gray-900">{s.city}</div>
                        <div className="text-[10px] text-gray-500">
                          {s.subtitle}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {dropoffAqi !== null && (
              <div className="flex items-center gap-1.5 text-xs font-semibold pl-1 select-none">
                <span className="text-white/60">Dropoff AQI:</span>
                <span
                  className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold ${getAqiBadgeColor(dropoffAqi)}`}
                >
                  {dropoffAqi} - {getAqiStatus(dropoffAqi)}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Local Package Option List (Only shown for Local Trip Type) */}
        {tripType === "local" && (
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-white/70 pl-1">
              Select Local Package
            </label>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1.5 dark-scrollbar">
              {LOCAL_PACKAGES.map((pkg) => {
                const isSelected = localPackage === pkg.id;
                const isSedan = carType.toLowerCase().includes("sedan");
                const isSuv =
                  carType.toLowerCase().includes("suv") &&
                  !carType.toLowerCase().includes("premium");

                let mainPrice = "";
                let secondaryPrice = "";

                if (isSedan) {
                  mainPrice = `₹${pkg.sedanPrice}`;
                  secondaryPrice = `SUV: ₹${pkg.suvPrice}`;
                } else if (isSuv) {
                  mainPrice = `₹${pkg.suvPrice}`;
                  secondaryPrice = `Sedan: ₹${pkg.sedanPrice}`;
                } else {
                  mainPrice = `₹${pkg.sedanPrice} / ₹${pkg.suvPrice}`;
                  secondaryPrice = "Sedan / SUV Fares";
                }

                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setLocalPackage(pkg.id)}
                    className={`w-full text-left p-3.5 rounded-xl border flex items-center justify-between gap-3 transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? "bg-white border-[#D51745] shadow-lg shadow-black/15 font-bold"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected ? "border-[#D51745]" : "border-white/30"
                        }`}
                      >
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#D51745]" />
                        )}
                      </span>
                      <span
                        className={`text-xs md:text-sm font-semibold truncate ${
                          isSelected ? "text-gray-900" : "text-white"
                        }`}
                      >
                        {pkg.label}
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <div
                        className={`text-xs md:text-sm font-black whitespace-nowrap ${
                          isSelected ? "text-[#D51745]" : "text-white"
                        }`}
                      >
                        {mainPrice}
                      </div>
                      <div
                        className={`text-[9px] font-medium leading-none mt-0.5 whitespace-nowrap ${
                          isSelected ? "text-gray-500" : "text-white/40"
                        }`}
                      >
                        {secondaryPrice}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Vehicle Preference Selection */}
        <div className="relative">
          <select
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            className={`w-full pl-4 pr-10 py-3.5 rounded-xl bg-white border border-gray-200 text-sm appearance-none cursor-pointer focus:outline-none focus:border-red-500 transition-colors duration-150 ${
              carType ? "text-gray-900 font-medium" : "text-gray-400"
            }`}
          >
            <option value="" disabled className="text-gray-400">
              Cab Type
            </option>
            <option value="Sedan (Dzire/Etios)" className="text-gray-900">
              Sedan (Dzire/Etios)
            </option>
            <option value="SUV (Ertiga/Triber)" className="text-gray-900">
              SUV (Ertiga/Triber)
            </option>
            {tripType !== "local" && (
              <>
                <option
                  value="Premium SUV (Innova Crysta)"
                  className="text-gray-900"
                >
                  Premium SUV (Innova Crysta)
                </option>
                <option value="Tempo Traveller" className="text-gray-900">
                  Tempo Traveller
                </option>
              </>
            )}
          </select>
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <ChevronDown size={14} />
          </span>
        </div>

        {/* Date and Time Pickers Side-by-Side */}
        <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-2.5 sm:gap-3 min-w-0">
          <div className="relative min-w-0">
            <span className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <Calendar size={14} />
            </span>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full min-w-0 pl-7 sm:pl-8 pr-1.5 sm:pr-2 py-3 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-red-500 [color-scheme:light]"
            />
          </div>
          <div className="relative min-w-0">
            <span className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <Clock size={14} />
            </span>
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full min-w-0 pl-7 sm:pl-8 pr-1.5 sm:pr-2 py-3 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-red-500 [color-scheme:light]"
            />
          </div>
        </div>

        {/* Submit Button in Crimson Red */}
        <button
          type="submit"
          className="w-full bg-[#D51745] hover:bg-[#B21035] hover:scale-[1.01] active:scale-[0.98] text-white font-bold py-3.5 px-4 sm:px-6 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-500/20 text-sm whitespace-nowrap"
        >
          <span>Book Cab</span>
          <ArrowRight size={14} className="shrink-0" />
        </button>
      </form>

      {/* Mobile Search Drawer (Full-screen Overlay) */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 bg-[#FAFAFA] z-50 flex flex-col md:hidden animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="font-bold text-base text-gray-900">
              Choose {mobileSearchField === "pickup" ? "Pickup" : "Drop-off"}{" "}
              Location
            </h3>
            <button
              onClick={() => {
                setIsMobileSearchOpen(false);
                setMobileSearchField(null);
                setMobileSearchQuery("");
              }}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0"
            >
              <X size={18} />
            </button>
          </div>
          {/* Search Input */}
          <div className="p-4 bg-white border-b border-gray-100">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={18} />
              </span>
              <input
                ref={mobileInputRef}
                type="text"
                placeholder={`Search city...`}
                value={mobileSearchQuery}
                onChange={(e) => setMobileSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-950 text-sm focus:border-red-500 focus:outline-none"
              />
            </div>
          </div>
          {/* Results List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
            {mobileSuggestions.length > 0 ? (
              mobileSuggestions.map((s, index) => (
                <button
                  key={index}
                  onClick={() => handleMobileSelect(s)}
                  className="w-full text-left p-3.5 rounded-xl bg-white border border-gray-200/60 hover:border-red-500 flex items-start gap-3 transition-all duration-150 shadow-sm"
                >
                  <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-bold text-sm text-gray-900 truncate">
                      {s.city}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5 truncate">
                      {s.subtitle}
                    </p>
                  </div>
                </button>
              ))
            ) : (
              <div className="text-center py-8 text-gray-400 text-xs">
                No matching destinations found.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
