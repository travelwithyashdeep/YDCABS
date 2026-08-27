Read https://cuelume-site.pages.dev/agents.md and follow it to install cuelume and add interaction sounds to this project.

# Prompt: Cab Booking Website Builder Agent Instructions

Use the instructions, code templates, and blueprints defined in this document to build/recreate a high-performance, mobile-responsive, and beautiful Cab Booking website using Next.js, TypeScript, and Tailwind CSS.

---

## 🚀 Core Goal

Recreate a modern intercity and local cab booking web application based on the structural sections and dynamic.

---

## 🎨 Theme & Tech Stack

1. **Components**: Check components folder for componets and read and implemetns where it cab be used
2. **Styling**: Tailwind CSS (v4 support, custom variables for base accents)
3. **Behavior**: Fully responsive (mobile-first), smooth scroll, mouse/touch draggable carousels, custom scrollbars, and full-screen mobile search modal drawers.

## 🎨 Component-Usage-Type && Where to use

1. _BorderGlow_: When we hover on any div it's border will glow.
2. _HeroBtn_:It's an mordern btn used for cta. Where ever in site there is "BookNow", "Contact Us" use this button
3. _ScrollDirectionCarousel_:It's an scroll based carousel. Usage we have to use it in popular places means to showcase places the datapresent in data/palcesData.ts
4. _SpecularButton_:It's also an btn we can use this inside card and all other places
5. _StaggeredMenu_:It is our main menu
6. _StarBorder_: Star border is border glow for button. we can use this for our secondary cta btn
7. _Stards_: You have to use this in footer as it an glow component on bootom as aboulte

## 🎨 Demo code how to use

4. _SpecularButton_: <SpecularButton
   size="lg"
   radius={18}
   tint="#ffffff"
   tintOpacity={0}
   blur={0}
   textColor="#f5f5f5"
   lineColor="#ffffff"
   baseColor="#525252"
   intensity={1}
   shineSize={10}
   shineFade={40}
   thickness={1}
   speed={0.35}
   followMouse
   proximity={250}
   autoAnimate={false}
   onClick={() => console.log('clicked')}
   > Get Started
   > </SpecularButton>

---

## 📁 Directory & File Blueprint

```text
├── app/
│   ├── api/
│   │   └── places/
│   │       └── route.ts         # Proxy for LocationIQ search autocomplete
│   ├── places/
│   │   └── [slug]/
│   │       └── page.tsx         # Dynamic tour page (SEO, details, fares, must-see spots)
│   ├── globals.css              # Custom font loading, CSS variables, scrollbars
│   ├── layout.tsx               # Root layout, Google Fonts (Geist), Metadata
│   └── page.tsx                 # Main page assembling all home sections
├── components/
│   ├── Navbar.tsx               # Header, top bar, dynamic links, mobile drawer
│   ├── Hero.tsx                 # Hero section with headline and the Contact Form
│   ├── Contact-form.tsx         # Interactive booking engine (Live search, WhatsApp link)
│   ├── PopularCabs.tsx          # Fleet card tariffs using overlay SVG shapes
│   ├── Metrix.tsx               # Statistics grid
│   ├── PopularRoutes.tsx        # Seamless infinite scrolling travel group carousels
│   ├── Whyus.tsx                # Six key selling point cards
│   ├── Testimonials.tsx         # Google Reviews card grid
│   ├── FAQ.tsx                  # Collapsible accordions for general questions
│   ├── GetInTouch.tsx           # Contact cards (Call, WA, Email) + Google Map iframe
│   └── Footer.tsx               # Categorized footer links, legal info, floating WA button
├── data/
│   └── placesData.ts            # Central dataset for dynamic routes, routes group list
└── public/
    └── [Assets/Images]          # Logos, car models, background patterns
```

---

## 📊 Data Model Schema (`data/placesData.ts`)

Define all outstation/local destinations in a centralized file. Keep the following structures and helper function intact to construct your dataset:

<!-- Already placed moc data  -->

```typescript
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
  tag: string; // e.g. "Popular Tour", "1-Day Special"
  img: string; // Image URL
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

// Helper function to simplify place object creation
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
    location: opts?.location || "Outstation Tour",
    distance: opts?.distance || "Variable",
    duration: opts?.duration || "1-2 Days",
    description:
      opts?.description ||
      `Explore ${title} with our premium outstation cab services.`,
    fullDescription:
      opts?.fullDescription ||
      `Travel comfortably to ${title} with our clean, sanitized vehicles and expert drivers. Available 24/7.`,
    introduction:
      opts?.introduction ||
      `${title} is one of the top destinations. Plan your trip effortlessly with our customized cab packages.`,
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
      "Doorstep pickup & drop",
      "Experienced & polite driver",
      "Clean & sanitized cab",
      "Transparent pricing",
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
        a: `You can book directly via WhatsApp or call our helpline.`,
      },
    ],
    ...opts,
  };
};

// Array of grouped places
export const placeGroups: PlaceGroup[] = [
  {
    id: "sample-group",
    title: "Sample Tours",
    subtitle: "Explore Beautiful Destinations",
    items: [
      createPlace(
        "laxmi-vilas-palace",
        "Laxmi Vilas Palace",
        "https://i.pinimg.com/1200x/18/ec/53/18ec5370f93db7fac6ef65d2b971c3cd.jpg",
        "Sample Category",
        {
          location: "Vadodara, Gujarat",
          distance: "In City",
          duration: "2 - 3 Hours",
          tag: "Royal Heritage",
        },
      ),
    ],
  },
];

export const placesData: PlaceData[] = placeGroups.flatMap(
  (group) => group.items,
);
```

---

## ⚡ Core Component Mechanics

### 1. Booking Form (`components/Contact-form.tsx`)

This is the core interactive booking engine:

- **Tabs**: "One Way", "Round Trip", and "Local".
  - If "Local" is selected, the Drop-off location input field must be hidden.
  - Adjust state variables `tripType` and `transferType` dynamically.
- **Fields**: Pickup Location, Drop-off Location, Transfer Type (Dropdown), Pickup Date, Pickup Time.
- **Autocomplete Engine**:
  - Desktop dropdown: Triggers search when typing 2+ chars. Fetches predictions from server-side `/api/places` using a debounced timer (300ms) with a fallback local list.
  - Mobile modal search drawer: Clicking the input field opens a full-screen mobile search view showing a query search input and styled scrollable list items with a Map Pin icon next to each result.
- **WhatsApp Form Submission**:
  - Action button click constructs a formatted Markdown message detailing:
    - Pickup Location, Drop-off Location, Transfer Type, Pickup Date, and Pickup Time.
  - Encodes the text message and opens `https://wa.me/{PHONE_NUMBER}?text={MESSAGE}` in a new tab.

### 2. Live Autocomplete Endpoint (`app/api/places/route.ts`)

- Implements a Next.js serverless route `GET`.
- Proxy requests to LocationIQ Autocomplete API:
  `https://api.locationiq.com/v1/autocomplete?key={TOKEN}&q={QUERY}&countrycodes=in&limit=7&format=json`
- Map and format responses into `{ city: string, subtitle: string }` items. Eliminate duplicate predictions and handle fallback responses gracefully.

### 3. Dynamic Car tariff cards (`components/PopularCabs.tsx`)

- Loop through the car fleet configurations.
- Each card renders a top SVG banner filled with the car's theme color (e.g., orange, teal, gold, dark grey).
- The car image overlay absolute-positions itself on top of the custom SVG path with a scaling transition effect on group hover.
- Details like Round Trip Rate, Minimum Travel distance limits, Driver Allowance, and a booking button linking to WhatsApp are grouped in the lower card body.

### 4. Categorized Infinite Carousels (`components/PopularRoutes.tsx`)

- Iterate over `placeGroups`.
- Display a slide container with constant smooth automatic scrolling enabled (`requestAnimationFrame` updating `scrollLeft`).
- Pause scrolling on mouse hover or active dragging.
- Support mouse-drag and touch-drag behaviors via event listeners (`onMouseDown`, `onMouseUp`, `onMouseMove`, `onMouseLeave`, `onTouchStart`, etc.) allowing users to swipe left and right.
- Bind left and right navigation chevron buttons to trigger smooth page offset increments (e.g., `scrollBy({ left: 320, behavior: 'smooth' })`).

### 5. Dynamic Detailed Pages (`app/places/[slug]/page.tsx`)

- Generate static paths using `generateStaticParams()` reading `placesData`.
- Define rich SEO metadata with `generateMetadata()` capturing specific routes (canonical tags, keywords list, open graph attributes, and image fallback).
- Layout structure:
  - Dynamic breadcrumbs at the top.
  - Hero header banner featuring the place title, custom background, distance tag, and description.
  - Columns:
    - Left side (8 cols): Hero image, introduction quote box, long description copy, key highlights with checkmark icons, MUST-SEE attractions list (rendered numerically), fare comparison table, and destination-specific FAQs.
    - Right side (4 cols): Sticky Sidebar offering quick-booking cards with WhatsApp booking buttons, quick helpline calls, and trust indicators.
  - Lower page section: A "More Destinations" footer widget showing 3 cards suggesting alternate tours from the dataset.

---

## 🛠️ Customize Checklist for a New Website

Copy the website code, then customize these properties to launch a brand new variation:

1. **Brand Constants**:
   - Change labels, headers, and footer texts from "Orange Cab" to your new brand name.
   - Customize layout file canonical links and metadata titles.
2. **Colors & Fonts**:
   - Edit `app/globals.css` base colors (`#C41E46` and `#D51745`) to represent your brand palette.
   - Provide a dynamic font file or use standard Google Web Fonts in `app/layout.tsx`.
3. **Contact Details**:
   - Change WhatsApp phone number `919099042156` and helpline string `+91 9099042156` across files.
   - Replace email addresses, physical office addresses, Google Map iframe link coordinates, and Google Search reviews references.
4. **Data Seed**:
   - Replace `placeGroups` array items in `data/placesData.ts` with your specific city/state tour destinations, travel distances, fares, and local landmarks.
5. **Assets**:
   - Update `/logo-icon.png`, hero background pattern `@/public/images/hero-bg.png`, and car silhouette illustrations in the `/public` folder.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
