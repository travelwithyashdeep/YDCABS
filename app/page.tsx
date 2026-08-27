import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrix from "@/components/Metrix";
import PopularRoutes from "@/components/PopularRoutes";
import PopularCabs from "@/components/PopularCabs";
import ScrollDirectionCarousel from "@/components/ScrollDirectionCarousel";
import Whyus from "@/components/Whyus";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
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
        {/* ScrollDirectionCarousel for Popular Places */}
        <section className="py-20 bg-[#FAFAFA] border-t border-gray-250/20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6">
            <span className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-[#D51745] mb-1">
              Top Sightseeing
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-7 bg-[#D51745] rounded-full inline-block" />
              Popular Destinations
            </h2>
          </div>
          <ScrollDirectionCarousel />
        </section>
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
