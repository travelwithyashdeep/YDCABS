import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const PopularCabs = dynamic(() => import("@/components/PopularCabs"));
const PopularRoutes = dynamic(() => import("@/components/PopularRoutes"));
const StoryRedirect = dynamic(() => import("@/components/StoryRedirect"));
const Metrix = dynamic(() => import("@/components/Metrix"));
const Whyus = dynamic(() => import("@/components/Whyus"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const GetInTouch = dynamic(() => import("@/components/GetInTouch"));
export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://yashdeeptravels.com/#localbusiness",
        name: "Yashdeep Travels",
        telephone: "+919099042156",
        email: "bookings@yashdeepcabs.com",
        url: "https://yashdeeptravels.com",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "101 Radhey Flats, 13/14 Sumant Park, opp. Shrenik, Par Park, Akota",
          addressLocality: "Vadodara",
          addressRegion: "Gujarat",
          postalCode: "390007",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 22.3072,
          longitude: 73.1812,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "29",
        },
      },
      {
        "@type": "TaxiService",
        "@id": "https://yashdeeptravels.com/#taxiservice",
        provider: {
          "@type": "LocalBusiness",
          name: "Yashdeep Travels",
        },
        serviceType: "Cab Rental and Outstation Taxi Service",
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Vadodara",
          },
          {
            "@type": "AdministrativeArea",
            name: "Gujarat",
          },
          {
            "@type": "AdministrativeArea",
            name: "Rajasthan",
          },
          {
            "@type": "AdministrativeArea",
            name: "Maharashtra",
          },
          {
            "@type": "AdministrativeArea",
            name: "Madhya Pradesh",
          },
        ],
      },
    ],
  };
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Header & Top Bar Navigation */}
      <Navbar />
      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Banner with Booking Engine */}
        <Hero />
        {/* Fleet Tariffs & Booking Rates Cards */}
        <PopularCabs />
        {/* Infinite Scrolling Draggable Destination Routes */}
        <PopularRoutes />
        <StoryRedirect />
        {/* ScrollDirectionCarousel for Popular Places */}
        {/* Dynamic Statistics Matrix */}
        <Metrix />
        {/* Six Key Selling Features */}
        <Whyus />
        {/* Customer Reviews Masonry */}
        <Testimonials />
        {/* Booking Accordion FAQs */}
        <FAQ />
        {/* Location Map & Contact Details Card Panel */}
        <GetInTouch />
      </main>
      {/* Structured Site Footer */}
      <Footer />
    </>
  );
}
