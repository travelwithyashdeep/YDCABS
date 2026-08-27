export interface FeatureDetail {
  slug: string;
  title: string;
  badgeText: string;
  badgeColor: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
}

export const featuresData: FeatureDetail[] = [
  {
    slug: "doorstep-pickup-drop",
    title: "Doorstep Pickup & Drop",
    badgeText: "Convenient",
    badgeColor: "bg-[#E5F1FF] text-[#0066FF]",
    description: "Safe pickups directly from your home, hotel, railway station, or airport in Vadodara at any hour.",
    fullDescription: "We offer hassle-free doorstep pickup and drop services anywhere in Vadodara and surrounding regions. Whether you need a 3:00 AM pickup for an early morning flight, or a drop-off at a remote destination, our drivers will navigate directly to your location. You won't have to carry heavy bags to a bus station or pay extra for connecting rides. We bridge the gap between your starting point and destination seamlessly.",
    benefits: [
      "Saves time and transit hassle",
      "Available 24/7/365 across Vadodara",
      "Safe for solo travelers, seniors, and families",
      "Direct terminal-to-door transit"
    ],
    faqs: [
      {
        q: "Do you charge extra for pickups inside Vadodara?",
        a: "No, doorstep pickup within the main city limits of Vadodara is completely free and included in your base cab package."
      },
      {
        q: "Can I schedule a pickup at midnight?",
        a: "Yes, our pickup and drop services run 24 hours a day. Please book at least 3 hours in advance for late-night schedules."
      }
    ]
  },
  {
    slug: "zero-hidden-charges",
    title: "Zero Hidden Charges",
    badgeText: "100% Transparent",
    badgeColor: "bg-[#F3E8FF] text-[#7C3AED]",
    description: "100% transparent pricing models. Pay strictly according to our per-km rates, toll receipts, and driver allowance.",
    fullDescription: "Hidden charges are the biggest headache when renting outstation cabs. At Yashdeep Travels, we operate on a strictly transparent billing system. Our quotes detail the exact per-kilometer rate, driver allowance, and toll costs. What we quote is what you pay. There are no surprise booking fees, fuel surcharges, or mysterious administration fees added at the end of your trip.",
    benefits: [
      "No booking fees or surprise surcharges",
      "Itemized GST bills on request",
      "Pay only for actual kilometers run",
      "Tolls & state taxes billed at actuals with receipt proof"
    ],
    faqs: [
      {
        q: "Are tolls and state border entry taxes included in the initial quote?",
        a: "Our initial quote lists estimated rates. Toll receipts and state borders are paid directly by the client or charged at actuals with receipts to maintain complete transparency."
      },
      {
        q: "What is the driver allowance for?",
        a: "The driver allowance covers food and lodging costs for our driver during outstation trips, billed at a fixed rate per calendar day."
      }
    ]
  },
  {
    slug: "professional-drivers",
    title: "Professional Drivers",
    badgeText: "Safe & Polite",
    badgeColor: "bg-[#FEF3C7] text-[#D97706]",
    description: "Highly experienced, licensed, and polite drivers who are familiar with outstation highways and state routes.",
    fullDescription: "Your safety depends on the hands at the wheel. Our drivers are licensed professionals with years of experience navigating national and state highways. They are polite, speak local languages, and undergo vetting to ensure absolute security for you and your family. They are trained in defensive driving and long-distance navigation.",
    benefits: [
      "Defensive driving trained chauffeurs",
      "No night-driving fatigue policies",
      "Local route and landmark experts",
      "Polite, helpful, and courteous behavior"
    ],
    faqs: [
      {
        q: "Are the drivers trained for mountain terrain?",
        a: "Yes, our drivers have extensive experience driving on diverse and challenging terrains including ghats, highways, and rural routes."
      },
      {
        q: "Can the driver speak English or Hindi?",
        a: "Yes, all our drivers are fluent in Hindi and Gujarati, and many can understand and speak basic English."
      }
    ]
  },
  {
    slug: "sanitized-pristine-cabs",
    title: "Sanitized & Pristine Cabs",
    badgeText: "Hygiene First",
    badgeColor: "bg-[#D1FAE5] text-[#059669]",
    description: "Every cab undergoes strict washing, interior cleaning, and sanitization before heading out to pick you up.",
    fullDescription: "Hygiene is non-negotiable for a comfortable ride. Every vehicle in our fleet is thoroughly cleaned, vacuumed, and sanitized before it reaches your doorstep. We ensure fresh upholstery, odor-free interiors, properly working seatbelts, and fully operational air conditioning for a pleasant journey.",
    benefits: [
      "Deep sanitization and interior vacuuming before every trip",
      "Pristine air vents and filters",
      "Fresh, clean seat covers",
      "Well-maintained suspension and mechanics for a smooth ride"
    ],
    faqs: [
      {
        q: "How often are the cabs cleaned?",
        a: "Every single cab goes through a detailed clean-up, wash, and sanitization cycle before it is dispatched for a booking."
      },
      {
        q: "Do the cars have functional AC?",
        a: "Yes, all our vehicles are premium models equipped with powerful, regularly-serviced air conditioning units."
      }
    ]
  },
  {
    slug: "24-7-helpline-support",
    title: "24/7 Helpline Support",
    badgeText: "Always Online",
    badgeColor: "bg-[#FFE4E6] text-[#E11D48]",
    description: "Round-the-clock booking assistance and active trip tracking to guarantee safety for solo/female travelers.",
    fullDescription: "Travel plans can shift unexpectedly, which is why our dispatch desk and helpdesk are open 24 hours a day, 7 days a week. We track active trips using GPS to ensure you are on route and safe at all times. If you face any delays or route deviations, our team is always ready to coordinate.",
    benefits: [
      "Round-the-clock real human assistance",
      "Live GPS tracking for active trips",
      "Emergency SOS coordination protocols",
      "Instant backup vehicle dispatch if needed"
    ],
    faqs: [
      {
        q: "Whom should I call in case of delays or route changes?",
        a: "You can call our 24/7 hotline at +91 90990 42156 immediately. Our support team will coordinate with the driver in real-time."
      },
      {
        q: "Are the trips monitored for safety?",
        a: "Yes, we utilize real-time GPS tracking on all vehicles to monitor speed, route compliance, and ensure passenger safety."
      }
    ]
  },
  {
    slug: "flexible-trip-modals",
    title: "Flexible Trip Modals",
    badgeText: "No Penalty",
    badgeColor: "bg-[#E0E7FF] text-[#4F46E5]",
    description: "Modify travel timings, edit stopovers, or request quick cancellations without complicated penalty clauses.",
    fullDescription: "Life is unpredictable, and travel itineraries change. We offer unmatched flexibility to accommodate your plans. You can adjust your route mid-trip, change departure timings, or cancel bookings without facing heavy penalty fees. We believe in stress-free booking management.",
    benefits: [
      "Free cancellations up to 24 hours before dispatch",
      "Flexible route deviations and stopovers allowed",
      "No hidden modification fees for date changes",
      "Easy extension options while on the go"
    ],
    faqs: [
      {
        q: "Can I extend my trip while on the road?",
        a: "Yes! You can coordinate with our support team to extend the booking duration, and extra kilometers will be billed at the standard rate."
      },
      {
        q: "What is your cancellation policy?",
        a: "Bookings cancelled up to 24 hours prior to the scheduled pickup time incur zero cancellation charges."
      }
    ]
  }
];
