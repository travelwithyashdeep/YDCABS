# Accessibility (a11y) Guidelines

To ensure yashdeeptravels.com remains accessible to all users (including those using screen readers, keyboard-only navigation, or low-vision display settings) and maintains high Lighthouse accessibility scores, follow these guidelines.

---

## ♿ 1. Buttons & Links Must Have Accessible Names

### Rule 1.1: Icon-Only Buttons Require `aria-label`
- **Never render icon-only buttons or links without screen reader text.**
  ```tsx
  // ❌ Bad (Screen readers announce only "button")
  <button onClick={scrollToTop} className="p-2 ...">
    <ArrowUp size={16} />
  </button>

  // ✅ Good
  <button onClick={scrollToTop} aria-label="Scroll back to top" className="p-2 ...">
    <ArrowUp size={16} />
  </button>
  ```

### Rule 1.2: Floating CTA Buttons
- Floating phone or WhatsApp action buttons must include an explicit `aria-label` and `title`:
  ```tsx
  <a
    href="tel:+919099042156"
    aria-label="Call dispatch office"
    title="Call dispatch office for booking"
    className="..."
  >
    <Phone />
  </a>
  ```

---

## 🖼️ 2. Frames & Iframes Must Have `title` Attributes

### Rule 2.1: `<iframe>` Title Required
- Every `<iframe>` element (such as embedded Google Maps) **must** contain a descriptive `title` attribute so assistive technologies can describe its purpose:
  ```tsx
  // ✅ Good
  <iframe
    src="https://maps.google.com/maps?q=..."
    title="Yashdeep Travels Office Location Map"
    className="w-full h-full border-0"
    loading="lazy"
  ></iframe>
  ```

---

## 📐 3. Sequential Heading Hierarchy

### Rule 3.1: Do Not Skip Heading Levels
- Headings (`<h1>` through `<h6>`) must strictly follow a sequentially-descending order:
  - Each page has exactly one `<h1>`.
  - Section titles are `<h2>`.
  - Subsections or card titles within sections are `<h3>`.
  - Nested detail items within cards are `<h4>`.
- **Avoid skipping levels** (e.g. jumping from `<h2>` directly to `<h4>`).
  ```tsx
  // ❌ Bad
  <h2>What Riders Say</h2>
  <div className="card">
    <h4>Vinod Shah</h4> {/* Skipped <h3> */}
  </div>

  // ✅ Good
  <h2>What Riders Say</h2>
  <div className="card">
    <h3>Vinod Shah</h3>
  </div>
  ```

---

## 🎨 4. Color Contrast Ratios (WCAG AA Compliance)

### Rule 4.1: Maintain Contrast Ratio ≥ 4.5:1
- Text against background colors must meet WCAG 2.1 AA standards:
  - **Normal text (< 18pt)**: Minimum contrast ratio of **4.5:1**.
  - **Large text (≥ 18pt / 14pt bold)**: Minimum contrast ratio of **3.0:1**.
- When using green action buttons (`#25D366`), use dark high-contrast text (`#0F172A` or `#000000`) rather than thin white text.
- For small badge tags (e.g., `text-[10px]`), use bold/black font weight and strong background contrast.

---

## 🛡️ Pre-Deployment Accessibility Checklist

- [ ] All icon-only `<button>` and `<a>` elements have `aria-label` or `title`.
- [ ] All `<iframe>` elements have a descriptive `title` attribute.
- [ ] Heading hierarchy follows strict `h1 -> h2 -> h3 -> h4` order without skipping levels.
- [ ] Text contrast on badge tags and buttons meets 4.5:1 ratio.
- [ ] Production build succeeds cleanly: `npm run build`.
