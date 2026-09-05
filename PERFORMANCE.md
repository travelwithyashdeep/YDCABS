# Performance & Asset Optimization Guidelines

To maintain fast page load times, high Lighthouse scores, fast LCP (Largest Contentful Paint), and minimal network payloads on Yashdeep Travels, follow these strict development rules.

---

## 📸 1. Image Delivery & Formats

### Rule 1.1: Always Use WebP / AVIF Formats
- **Never commit uncompressed raw PNGs or massive JPEGs** to `public/images/` or `public/cars/`.
- Run the built-in image optimization script whenever adding new assets:
  ```bash
  node scripts/convert_images.js
  ```
- Vehicle fleet images in `public/cars/` must be WebP format, resized to max 500px width at ~85% quality.

### Rule 1.2: LCP Hero Banner Standards
- **Do NOT use CSS `background-image: url('/images/hero-bg.png')` for LCP hero sections.**
  - CSS background images cannot be discovered early by the browser's preload scanner and cannot use Next.js fetch priority optimization.
- **Use Next.js `<Image>` for hero backgrounds:**
  ```tsx
  <Image
    src="/images/hero-bg.webp"
    alt="Hero Background"
    fill
    priority
    quality={80}
    sizes="100vw"
    className="object-cover object-[center_58%]"
  />
  ```
  - `priority`: Ensures `fetchpriority="high"` and eager loading.
  - `sizes="100vw"`: Helps browser select optimal display resolution.

### Rule 1.3: Remote Image Optimization (Pinterest, Wikimedia, CDNs)
- **Do NOT use `unoptimized` flag on Next.js `<Image>` components.**
  - Setting `unoptimized` bypasses Next.js image optimization, causing users to download 1200px+ (300KB+) raw images for 300px card thumbnails.
- Always ensure external CDN domains are declared in `next.config.ts`:
  ```ts
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  }
  ```
- Specify explicit `sizes` props (e.g. `sizes="(max-width: 768px) 288px, 300px"`).

---

## ⚡ 2. Early Connection Preconnecting

- Maintain preconnect hints in `app/layout.tsx` for third-party image domains to shave ~300ms off image download initiation:
  ```html
  <link rel="preconnect" href="https://i.pinimg.com" crossOrigin="anonymous" />
  <link rel="dns-prefetch" href="https://i.pinimg.com" />
  <link rel="preconnect" href="https://upload.wikimedia.org" crossOrigin="anonymous" />
  ```

---

## 🚀 3. Dynamic Code Splitting & Script Deferral

### Below-the-Fold Component Splitting
- In `app/page.tsx`, load below-the-fold components using `next/dynamic`:
  ```tsx
  const PopularCabs = dynamic(() => import("@/components/PopularCabs"));
  const PopularRoutes = dynamic(() => import("@/components/PopularRoutes"));
  const GetInTouch = dynamic(() => import("@/components/GetInTouch"));
  ```
- This prevents heavy third-party scripts (like Google Maps iframe JS ~400KB in `GetInTouch`) from blocking initial page rendering.

---

## 🛡️ Checklist Before Deployment

- [ ] New images converted to `.webp` format and placed in `public/`.
- [ ] No `unoptimized` prop added to `<Image>` tags unless strictly necessary.
- [ ] All remote image hosts added to `next.config.ts`.
- [ ] Production build verified cleanly: `npm run build`.
