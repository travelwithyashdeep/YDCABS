export interface FleetCar {
  name: string;
  options: string;
  image: string;
  rate: string;
  minLimit: string;
  allowance: string;
  features: string[];
}

export const fleetData: FleetCar[] = [
  {
    name: "Sedan",
    options: "(Dzire, Aura, Amaze or equivalent)",
    image: "/cars/final-desire.png",
    rate: "₹11/km",
    minLimit: "300 km/day",
    allowance: "₹300",
    features: [
      "AC & Heater",
      "Sanitized Cab",
      "Carrier Available",
      "Music System",
    ],
  },
  {
    name: "SUV",
    options: "(Ertiga, Rumion, Marazzo or equivalent)",
    image: "/cars/image.png",
    rate: "₹14/km",
    minLimit: "300 km/day",
    allowance: "₹300",
    features: [
      "AC Vent Rear",
      "Spacious Seats",
      "Experienced Driver",
      "Foldable Seats",
    ],
  },
  {
    name: "Crysta",
    options: "(Innova Crysta)",
    image: "/cars/suv.png",
    rate: "₹20/km",
    minLimit: "300 km/day",
    allowance: "₹400",
    features: [
      "Pushback Captain Chairs",
      "Dual AC",
      "Premium Comfort",
      "GPS Tracker",
    ],
  },
  {
    name: "Tempo/Urbania",
    options: "(Urbania)",
    image: "/cars/urbania-white.png",
    rate: "₹35/km",
    minLimit: "300 km/day",
    allowance: "₹500",
    features: [
      "Luxury Recliners",
      "Screen TV & Audio",
      "Huge Space",
      "Perfect for Trips",
    ],
  },
  {
    name: "Luxury",
    options: "(BMW, Jaguar, Mercedes, Audi, Range Rover)",
    image: "/cars/bmw.png",
    rate: "Custom",
    minLimit: "Flexible",
    allowance: "Included",
    features: ["Luxury Recliners", "Perfect for Events"],
  },
];
