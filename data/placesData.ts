export interface PlaceToVisitItem {
  name: string;
  desc: string;
}

export interface PlaceData {
  slug: string;
  title: string;
  subtitleBanner?: string;
  location: string;
  distance: string;
  duration: string;
  description: string;
  fullDescription: string;
  introduction: string;
  placesToVisit: PlaceToVisitItem[];
  highlights: string[];
  price?: string;
  tag: string;
  img: string;
  vehicleFares: {
    sedan: string;
    suv: string;
    innova: string;
  };
  bestTimeToVisit: string;
  faqs: { q: string; a: string }[];
  category?: string;
}

export interface PlaceGroup {
  id: string;
  title: string;
  subtitle?: string;
  items: PlaceData[];
}

const createPlace = (
  slug: string,
  title: string,
  img: string,
  category: string,
  opts?: Partial<PlaceData>,
): PlaceData => {
  return {
    slug,
    title,
    img,
    category,
    location: opts?.location || "Gujarat & Nearby",
    distance: opts?.distance || "Variable",
    duration: opts?.duration || "1-3 Days",
    description:
      opts?.description ||
      `Explore ${title} with Orange Cab's premium & reliable outstation cab services.`,
    fullDescription:
      opts?.fullDescription ||
      `Travel comfortably to ${title} with Orange Cab. We offer clean, sanitized vehicles with experienced drivers for a smooth journey. Pickups from Vadodara and surrounding areas available 24/7.`,
    introduction:
      opts?.introduction ||
      `${title} is one of the top destinations visited by travelers. Plan your trip effortlessly with our customized cab packages.`,
    placesToVisit: opts?.placesToVisit || [
      {
        name: `${title} Main Site`,
        desc: `The primary landmark and attraction at ${title}.`,
      },
      {
        name: "Local Market & Food",
        desc: "Experience authentic local cuisine and shopping.",
      },
    ],
    highlights: opts?.highlights || [
      "Doorstep pickup & drop in Vadodara",
      "Experienced & polite driver",
      "Clean & sanitized cab",
      "Transparent per-km pricing",
    ],
    tag: opts?.tag || "Popular Tour",
    vehicleFares: opts?.vehicleFares || {
      sedan: "₹11/km",
      suv: "₹14/km",
      innova: "₹20/km",
    },
    bestTimeToVisit: opts?.bestTimeToVisit || "October to March",
    faqs: opts?.faqs || [
      {
        q: `How do I book a cab to ${title}?`,
        a: `You can book directly via WhatsApp or call our helpline +91 98791 17107.`,
      },
      {
        q: "Are toll taxes included in the fare?",
        a: "State taxes, toll taxes, and parking fees are extra as per actual receipts.",
      },
    ],
    ...opts,
  };
};

export const placeGroups: PlaceGroup[] = [
  {
    id: "vadodara",
    title: "Vadodara",
    subtitle: "Local Sightseeing & Historical Landmarks",
    items: [
      createPlace(
        "laxmi-vilas-palace",
        "Laxmi Vilas Palace",
        "https://i.pinimg.com/1200x/dd/3c/cc/dd3cccfb6e5677c2a12d86a3ed9a9bbf.jpg",
        "Vadodara",
        {
          location: "Vadodara, Gujarat",
          distance: "In City",
          duration: "2 - 3 Hours",
          description:
            "Grand royal palace of the Gaekwads, four times the size of Buckingham Palace.",
          tag: "Royal Heritage",
        },
      ),
      createPlace(
        "statue-of-unity-local",
        "Statue of Unity",
        "https://i.pinimg.com/736x/a3/fc/2c/a3fc2ccc213ad27c2ce8257d7f6f62b9.jpg",
        "Vadodara",
        {
          location: "Ekta Nagar, Gujarat",
          distance: "90 km from Vadodara",
          duration: "Full Day",
          description:
            "World's tallest statue dedicated to Sardar Vallabhbhai Patel.",
          tag: "Must Visit",
        },
      ),
      createPlace(
        "kirti-mandir",
        "Kirti Mandir",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Kirti_Mandir%2C_Vadadora_%28Baroda%29_-_India_%283-2%29_%288147894472%29.jpg/330px-Kirti_Mandir%2C_Vadadora_%28Baroda%29_-_India_%283-2%29_%288147894472%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "Vadodara",
        {
          location: "Vadodara, Gujarat",
          distance: "In City",
          duration: "1 - 2 Hours",
          description:
            "The cenotaph of the Gaekwad dynasty with beautiful murals and architecture.",
          tag: "Heritage",
        },
      ),
      createPlace(
        "sur-sagar-lake",
        "Sur Sagar Lake",
        "https://i.pinimg.com/736x/f7/c2/ca/f7c2caf6be44a4393d9d2ed0c0f1625c.jpg",
        "Vadodara",
        {
          location: "Vadodara, Gujarat",
          distance: "In City",
          duration: "1 - 2 Hours",
          description:
            "Iconic lake in the heart of Vadodara featuring a magnificent 120-ft Lord Shiva statue.",
          tag: "City Icon",
        },
      ),
      createPlace(
        "nilkanthdham-poicha",
        "Nilkanthdham Poicha",
        "https://i.pinimg.com/736x/67/48/75/6748752f3b18ef56922242829fe7268a.jpg",
        "Vadodara",
        {
          location: "Poicha, Gujarat",
          distance: "60 km from Vadodara",
          duration: "Half Day",
          description:
            "Spiritual temple complex on the banks of Narmada River known for light shows.",
          tag: "Spiritual",
        },
      ),
    ],
  },
  {
    id: "popular-gujarat-tours",
    title: "Popular Gujarat Tours",
    subtitle: "Explore the Rich Culture, Wildlife & Sacred Temples of Gujarat",
    items: [
      createPlace(
        "somnath-dwarka",
        "Somnath – Dwarka",
        "https://i.pinimg.com/1200x/93/7f/91/937f91a6fd533e04e56f0903b84bf119.jpg",
        "Popular Gujarat Tours",
        {
          location: "Saurashtra, Gujarat",
          distance: "450 km",
          duration: "3 - 4 Days",
          description:
            "Divine pilgrimage package covering the holy cities of Somnath and Dwarka.",
          tag: "Pilgrimage",
        },
      ),
      createPlace(
        "dwarka-somnath-gir",
        "Dwarka – Somnath – Gir",
        "https://i.pinimg.com/736x/87/a3/22/87a322a624df9a78af6b5989867292b3.jpg",
        "Popular Gujarat Tours",
        {
          location: "Saurashtra & Gir, Gujarat",
          distance: "500 km",
          duration: "4 - 5 Days",
          description:
            "Combine holy temples with Asiatic Lion safari at Gir National Park.",
          tag: "Temple & Safari",
        },
      ),
      createPlace(
        "kutch-rann-of-kutch",
        "Kutch / Rann of Kutch",
        "https://i.pinimg.com/736x/21/25/f2/2125f290c986c8f60b644035605b54a6.jpg",
        "Popular Gujarat Tours",
        {
          location: "Kutch, Gujarat",
          distance: "400 km",
          duration: "3 - 4 Days",
          description:
            "Enchanting white salt desert, Rann Utsav celebrations & handicraft villages.",
          tag: "White Desert",
        },
      ),
      createPlace(
        "ahmedabad-modhera-patan",
        "Ahmedabad – Modhera – Patan",
        "https://i.pinimg.com/1200x/72/24/b2/7224b21336810dbf881d06b20191612b.jpg",
        "Popular Gujarat Tours",
        {
          location: "North Gujarat",
          distance: "220 km",
          duration: "2 Days",
          description:
            "UNESCO Heritage site Rani ki Vav stepwell & Sun Temple at Modhera.",
          tag: "UNESCO Heritage",
        },
      ),
      createPlace(
        "statue-of-unity-tour",
        "Statue of Unity",
        "https://i.pinimg.com/736x/a3/fc/2c/a3fc2ccc213ad27c2ce8257d7f6f62b9.jpg",
        "Popular Gujarat Tours",
        {
          location: "Ekta Nagar, Gujarat",
          distance: "90 km",
          duration: "1 - 2 Days",
          description:
            "World class tourist spot with laser shows, valley of flowers & Sardar Sarovar Dam.",
          tag: "Popular",
        },
      ),
      createPlace(
        "gujarat-jyotirlinga-tour",
        "Gujarat Jyotirlinga Tour",
        "https://i.pinimg.com/736x/e7/32/17/e73217f7c2a3858dc3025a60b6a087bc.jpg",
        "Popular Gujarat Tours",
        {
          location: "Somnath & Nageshwar",
          distance: "500 km",
          duration: "4 Days",
          description:
            "Visit both sacred Jyotirlingas in Gujarat: Somnath Mahadev & Nageshwar.",
          tag: "Spiritual",
        },
      ),
      createPlace(
        "gujarat-family-tour",
        "Gujarat Family Tour",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "Popular Gujarat Tours",
        {
          location: "Gujarat Circuit",
          distance: "Customized",
          duration: "5 - 7 Days",
          description:
            "Complete family holiday covering temples, beaches, wildlife & heritage.",
          tag: "Family Special",
        },
      ),
      createPlace(
        "gujarat-temple-tour",
        "Gujarat Temple Tour",
        "https://i.pinimg.com/736x/7c/a3/98/7ca398aa853b2e3888303d00c72c367a.jpg",
        "Popular Gujarat Tours",
        {
          location: "Sacred Sites of Gujarat",
          distance: "Customized",
          duration: "4 - 6 Days",
          description:
            "Covering Palitana, Ambaji, Dakor, Somnath, Dwarka & Akshardham.",
          tag: "Devotional",
        },
      ),
    ],
  },
  {
    id: "outstation-rajasthan",
    title: "Popular Outstation Destinations – Rajasthan",
    subtitle: "Royal Palaces, Forts & Desert Safaris",
    items: [
      createPlace(
        "udaipur",
        "Udaipur",
        "https://i.pinimg.com/1200x/c5/53/a9/c553a905eba990e449fb7d53f54a2c27.jpg",
        "Rajasthan",
        {
          location: "Rajasthan",
          distance: "260 km from Vadodara",
          duration: "2 - 3 Days",
          description:
            "City of Lakes featuring City Palace, Lake Pichola & Saheliyon Ki Bari.",
          tag: "City of Lakes",
        },
      ),
      createPlace(
        "mount-abu",
        "Mount Abu",
        "https://i.pinimg.com/736x/38/8f/d2/388fd2805d6a300e54b90bad8ddd165d.jpg",
        "Rajasthan",
        {
          location: "Rajasthan",
          distance: "340 km from Vadodara",
          duration: "2 - 3 Days",
          description:
            "Only hill station in Rajasthan famous for Dilwara Temples & Nakki Lake.",
          tag: "Hill Station",
        },
      ),
      createPlace(
        "nathdwara",
        "Nathdwara",
        "https://i.pinimg.com/736x/7f/0a/11/7f0a11912fc3b026f686bdaf17f69180.jpg",
        "Rajasthan",
        {
          location: "Rajasthan",
          distance: "300 km from Vadodara",
          duration: "2 Days",
          description:
            "Holy temple town of Shrinathji and the World's Tallest Shiva Statue (Statue of Belief).",
          tag: "Devotional",
        },
      ),
      createPlace(
        "chittorgarh",
        "Chittorgarh",
        "https://i.pinimg.com/736x/a2/5b/e9/a25be9f8cce2b1d2aca46d39578e1e3b.jpg",
        "Rajasthan",
        {
          location: "Rajasthan",
          distance: "370 km from Vadodara",
          duration: "2 - 3 Days",
          description:
            "India's largest fort complex steeped in Rajput bravery & history.",
          tag: "Historic Fort",
        },
      ),
      createPlace(
        "jaipur",
        "Jaipur",
        "https://i.pinimg.com/1200x/25/d2/e2/25d2e287737d268cd421cc45f104530f.jpg",
        "Rajasthan",
        {
          location: "Rajasthan",
          distance: "650 km from Vadodara",
          duration: "3 - 4 Days",
          description:
            "The Pink City of India - Hawa Mahal, Amer Fort & Jantar Mantar.",
          tag: "Pink City",
        },
      ),
      createPlace(
        "jodhpur",
        "Jodhpur",
        "https://i.pinimg.com/1200x/5e/eb/3b/5eeb3b8e313a5f959d030c3f3ec245ec.jpg",
        "Rajasthan",
        {
          location: "Rajasthan",
          distance: "550 km from Vadodara",
          duration: "3 - 4 Days",
          description: "The Blue City dominated by the mighty Mehrangarh Fort.",
          tag: "Blue City",
        },
      ),
      createPlace(
        "jaisalmer",
        "Jaisalmer",
        "https://i.pinimg.com/1200x/7c/f9/a4/7cf9a4e798828e604ba5bc7f3ef2bec4.jpg",
        "Rajasthan",
        {
          location: "Rajasthan",
          distance: "750 km from Vadodara",
          duration: "4 - 5 Days",
          description:
            "Golden sand dunes, camel safaris & living Golden Fort of Rajasthan.",
          tag: "Golden City",
        },
      ),
    ],
  },
  {
    id: "outstation-mp",
    title: "Popular Outstation Destinations – Madhya Pradesh",
    subtitle: "Spiritual Shrines, Cleanest Cities & Heritage",
    items: [
      createPlace(
        "indore",
        "Indore",
        "https://i.pinimg.com/736x/4e/e0/64/4ee064a5da5990cf92cd0e5fa57478a2.jpg",
        "Madhya Pradesh",
        {
          location: "Madhya Pradesh",
          distance: "340 km from Vadodara",
          duration: "2 Days",
          description:
            "India's cleanest city famous for Rajwada Palace & Sarafa Night Food Market.",
          tag: "Food & Heritage",
        },
      ),
      createPlace(
        "ujjain",
        "Ujjain",
        "https://i.pinimg.com/736x/c2/1c/17/c21c175e65c0a3ff13245f0dfd141879.jpg",
        "Madhya Pradesh",
        {
          location: "Madhya Pradesh",
          distance: "370 km from Vadodara",
          duration: "2 Days",
          description:
            "Home to Mahakaleshwar Jyotirlinga & Mahakal Lok corridor.",
          tag: "Mahakal Jyotirlinga",
        },
      ),
      createPlace(
        "omkareshwar",
        "Omkareshwar",
        "https://i.pinimg.com/1200x/0a/5f/30/0a5f307e078cbcdf553c962fed91cc19.jpg",
        "Madhya Pradesh",
        {
          location: "Madhya Pradesh",
          distance: "410 km from Vadodara",
          duration: "2 - 3 Days",
          description:
            "Sacred island temple shaped like the OM symbol on Narmada River.",
          tag: "Sacred Island",
        },
      ),
      createPlace(
        "maheshwar",
        "Maheshwar",
        "https://i.pinimg.com/1200x/81/d0/ea/81d0ea01f01b60b51c2a78eb6d759a1f.jpg",
        "Madhya Pradesh",
        {
          location: "Madhya Pradesh",
          distance: "390 km from Vadodara",
          duration: "2 Days",
          description:
            "Ancient riverside fort city of Ahilyabai Holkar famous for Maheshwari sarees.",
          tag: "Riverside Fort",
        },
      ),
    ],
  },
  {
    id: "outstation-maharashtra",
    title: "Popular Outstation Destinations – Maharashtra",
    subtitle: "Coastal Cities, Jyotirlingas & Holy Shrines",
    items: [
      createPlace(
        "mumbai",
        "Mumbai",
        "https://i.pinimg.com/736x/b3/55/98/b35598f744056a00ecbd1048092f42a4.jpg",
        "Maharashtra",
        {
          location: "Maharashtra",
          distance: "410 km from Vadodara",
          duration: "2 - 3 Days",
          description:
            "The financial capital - Gateway of India, Marine Drive & Siddhivinayak Temple.",
          tag: "City of Dreams",
        },
      ),
      createPlace(
        "nashik",
        "Nashik",
        "https://i.pinimg.com/1200x/f1/24/13/f124134af74368aaf2aa75e98eb913a9.jpg",
        "Maharashtra",
        {
          location: "Maharashtra",
          distance: "360 km from Vadodara",
          duration: "2 Days",
          description:
            "Holy Kumbh Mela city on Godavari river and wine capital of India.",
          tag: "Holy City",
        },
      ),
      createPlace(
        "shirdi",
        "Shirdi",
        "https://i.pinimg.com/736x/58/63/7d/58637d74bb8d37af61e2a1b93769c239.jpg",
        "Maharashtra",
        {
          location: "Maharashtra",
          distance: "440 km from Vadodara",
          duration: "2 - 3 Days",
          description: "World famous pilgrimage shrine of Sri Sai Baba.",
          tag: "Sai Baba Temple",
        },
      ),
      createPlace(
        "trimbakeshwar",
        "Trimbakeshwar",
        "https://i.pinimg.com/736x/2f/f8/dc/2ff8dcc710b629467a463e778e51b205.jpg",
        "Maharashtra",
        {
          location: "Maharashtra",
          distance: "380 km from Vadodara",
          duration: "2 Days",
          description:
            "Ancient Jyotirlinga temple at the origin of river Godavari near Nashik.",
          tag: "Jyotirlinga",
        },
      ),
    ],
  },

  {
    id: "vadodara-1day-trips",
    title: "Vadodara se popular 1-Day Trips",
    subtitle: "Best Quick Getaways & Day Outings from Vadodara",
    items: [
      createPlace(
        "statue-of-unity-1day",
        "Statue of Unity / Ekta Nagar",
        "https://i.pinimg.com/736x/a3/fc/2c/a3fc2ccc213ad27c2ce8257d7f6f62b9.jpg",
        "Vadodara se popular 1-Day Trips",
        {
          location: "Ekta Nagar, Gujarat",
          distance: "90 km",
          duration: "1 Day",
          description:
            "World's tallest statue, Sardar Sarovar Dam, Jungle Safari & Glow Garden.",
          tag: "1-Day Special",
        },
      ),
      createPlace(
        "champaner-pavagadh",
        "Champaner – Pavagadh",
        "https://i.pinimg.com/1200x/d7/25/32/d725328e659184f019b20ea67f890b26.jpg",
        "Vadodara se popular 1-Day Trips",
        {
          location: "Panchmahal, Gujarat",
          distance: "45 km",
          duration: "1 Day",
          description:
            "UNESCO World Heritage Site with Kalika Mata Temple ropeway & ancient fort.",
          tag: "1-Day Special",
        },
      ),
      createPlace(
        "ahmedabad-1day",
        "Ahmedabad",
        "https://i.pinimg.com/236x/d8/ef/dd/d8efdd1199e325592df547e1bd7c5c78.jpg",
        "Vadodara se popular 1-Day Trips",
        {
          location: "Gujarat",
          distance: "110 km",
          duration: "1 Day",
          description:
            "Sabarmati Ashram, Riverfront, Science City & Kankaria Lake.",
          tag: "1-Day Special",
        },
      ),
      createPlace(
        "anand-dakor",
        "Anand – Dakor",
        "https://i.pinimg.com/1200x/fd/e4/47/fde4471a9ff792719df142315f6babca.jpg",
        "Vadodara se popular 1-Day Trips",
        {
          location: "Kheda & Anand, Gujarat",
          distance: "50 km",
          duration: "1 Day",
          description:
            "Ranchhodraiji Temple at Dakor & Amul Dairy Experience at Anand.",
          tag: "1-Day Special",
        },
      ),
      createPlace(
        "polo-forest",
        "Polo Forest",
        "https://i.pinimg.com/736x/8c/7f/b8/8c7fb8aa67e4d84f7518d7ef8f0c3ec2.jpg",
        "Vadodara se popular 1-Day Trips",
        {
          location: "Sabarkantha, Gujarat",
          distance: "220 km",
          duration: "1 Day",
          description:
            "Lush ancient forest with 15th-century Jain temples & river views.",
          tag: "Nature Getaway",
        },
      ),
      createPlace(
        "modhera-patan",
        "Modhera + Patan",
        "https://i.pinimg.com/1200x/b8/eb/28/b8eb287b4cc7c2f8228ede53ddf2abc6.jpg",
        "Vadodara se popular 1-Day Trips",
        {
          location: "North Gujarat",
          distance: "220 km",
          duration: "1 Day",
          description:
            "Sun Temple Modhera & UNESCO Heritage Rani ki Vav stepwell.",
          tag: "Heritage Day Trip",
        },
      ),
      createPlace(
        "udaipur-1day",
        "Udaipur",
        "https://i.pinimg.com/1200x/c5/53/a9/c553a905eba990e449fb7d53f54a2c27.jpg",
        "Vadodara se popular 1-Day Trips",
        {
          location: "Rajasthan",
          distance: "260 km",
          duration: "1 Day Express",
          description:
            "Express same-day tour to Udaipur City Palace and Lake Pichola.",
          tag: "Express Trip",
        },
      ),
      createPlace(
        "mount-abu-1day",
        "Mount Abu",
        "https://i.pinimg.com/736x/38/8f/d2/388fd2805d6a300e54b90bad8ddd165d.jpg",
        "Vadodara se popular 1-Day Trips",
        {
          location: "Rajasthan",
          distance: "340 km",
          duration: "1 Day Express",
          description:
            "Express day trip to Dilwara Temples, Nakki Lake & Sunset Point.",
          tag: "Express Trip",
        },
      ),
      createPlace(
        "sarangpur-1day",
        "Sarangpur",
        "https://i.pinimg.com/736x/09/d8/77/09d8778af04ce14dd1b491e74c1664e4.jpg",
        "Vadodara se popular 1-Day Trips",
        {
          location: "Botad, Gujarat",
          distance: "160 km",
          duration: "1 Day",
          description:
            "Sacred Kashtabhanjan Dev Hanumanji Temple & Salangpur Dham.",
          tag: "1-Day Special",
        },
      ),
      createPlace(
        "ambaji-1day",
        "Ambaji",
        "https://i.pinimg.com/736x/af/fb/8a/affb8ad99be7bcb25227316f77bf89c6.jpg",
        "Vadodara se popular 1-Day Trips",
        {
          location: "Banaskantha, Gujarat",
          distance: "300 km",
          duration: "1 Day",
          description:
            "Holy Shakti Peeth temple of Goddess Amba & Gabbar Hill ropeway.",
          tag: "1-Day Special",
        },
      ),
    ],
  },
];

// Flatten all items for routes and dynamic slug pages
export const placesData: PlaceData[] = placeGroups.flatMap(
  (group) => group.items,
);
