---
theme: "Cybernetic AI & Modern Glassmorphism"
aesthetic: "Dark Mode / Futuristic / High-Aesthetic"
palette:
  background: "#07080d"
  surface: "#0e111a"
  elevated: "#151926"
  accent_primary: "#00f2fe" # Electric Cyan
  accent_secondary: "#7928ca" # Neon Violet
  accent_tertiary: "#10b981" # Mint Emerald
  text_primary: "#f8fafc"
  text_secondary: "#94a3b8"
typography:
  headings: "Outfit, sans-serif"
  body: "Inter, sans-serif"
  code: "JetBrains Mono, monospace"
author: "Alaka Bhargabi Sahu"
affiliation: "GIET University Gunupur (B.Tech AI 2025-2029)"
credentials: ["Hedera Certified Foundation (HCF)"]
version: "1.0.0"
---

# Development Rules & Engineering Standards (rules.md)
## Project: Alaka Bhargabi Sahu — AI Engineer Portfolio

> **Theme**: Cybernetic AI & Modern Glassmorphism | **Author**: Alaka Bhargabi Sahu | **Status**: Active

---

### 1. Technology Stack & Architectural Constraints

#### 1.1 Core Technologies
- **Structure**: Semantic **HTML5**.
- **Styling**: **Vanilla CSS3** with CSS Custom Properties (Design Tokens).
  - *Rule*: **Avoid TailwindCSS** unless explicitly requested by the user. Do not introduce heavy CSS frameworks (Bootstrap, Bulma) that compromise design originality or add unnecessary bloat.
- **Interactivity**: Pure **Modern ES6+ JavaScript** (Modules, Intersection Observer, Canvas API).
- **Framework Constraint**: Keep this project lightweight, static-deployable, and dependency-free. Do not introduce React, Vue, or Next.js unless explicitly instructed.
- **Icons & Visuals**: Inline SVG or lightweight icon sets (e.g., Lucide SVGs). Never load bulky font icon bundles.

---

### 2. Design Aesthetics & Visual Quality (Non-Negotiable)

1. **Rich Aesthetics**: The user must be wowed at first glance. Generic, default, or rudimentary styling is strictly prohibited.
2. **Curated Color Harmonies**:
   - Strictly adhere to the dark cybernetic AI theme defined in `design.md`.
   - Never use standard primary colors (plain red, green, blue). Use tailored HSL/HEX gradients and luminous neon tones.
3. **Typography**:
   - Default browser fonts (Times New Roman, Arial) are prohibited.
   - Use Google Fonts: **Outfit** for headings and brand titles, **Inter** for body copy, and **JetBrains Mono** for tags, metrics, and code snippets.
4. **Interactive Polish & Micro-Animations**:
   - Every interactive element (buttons, cards, links, tabs) must have distinct hover, focus, and active feedback.
   - Utilize smooth cubic-bezier transitions (`cubic-bezier(0.16, 1, 0.3, 1)`).
   - Animate page sections into view using `IntersectionObserver`.
5. **No Broken Placeholders**:
   - Never leave broken image tags, generic placeholder boxes, or `lorem ipsum` filler.
   - All content must authentically represent Alaka Bhargabi Sahu's background, education at GIET University Gunupur, and Hedera certification.

---

### 3. File & Directory Organization

The codebase must follow a modular, scalable structure:

```
Portfolio/
├── prd.md                 # Product Requirements Document
├── design.md              # UI/UX Specifications & Design System
├── rules.md               # Coding Rules & Quality Guidelines
├── prompt.md              # AI Agent Instructions & Prompts
├── phase.md               # Phased Execution Roadmap
├── Profile.pdf            # Source Profile & Resume
├── index.html             # Main Single Page Application Entry
├── css/
│   ├── variables.css      # Design tokens, color palette, typography
│   ├── base.css           # Resets, typography, layout container
│   ├── components.css     # Navbar, cards, buttons, timeline, modals
│   └── animations.css     # Keyframes, hover effects, neural canvas styles
├── js/
│   ├── app.js             # Main entry point & initialization
│   ├── canvas.js          # Interactive neural network particle background
│   ├── navigation.js      # Smooth scroll, active spy, mobile drawer
│   └── projects.js        # Dynamic project rendering & filter tabs
└── assets/
    ├── icons/             # Custom SVG icons
    └── images/            # Optimized project graphics & avatars
```

---

### 4. HTML & Semantic Standards

1. **Single `<h1>`**: Exactly one `<h1>` per page, located in the Hero section describing the developer's core identity.
2. **Semantic Landmarks**: Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` appropriately. Do not construct entire layouts using nested `<div>` tags.
3. **Unique IDs**: Every interactive element and major section must have a unique, descriptive ID (e.g., `id="projects-filter-ai"`, `id="btn-download-resume"`).
4. **Form Inputs**: Every form input must have a corresponding `<label>` (either visually present or accessible via `aria-label` / `sr-only`).

---

### 5. CSS Rules & Standards

1. **CSS Custom Properties**: All colors, radii, shadows, and spacing increments must reference `var(--token)` from `variables.css`.
2. **Mobile-First Media Queries**: Write default styles for mobile viewports, using `@media (min-width: ...)` to scale layouts upward.
3. **No `!important`**: Never use `!important` to force specificity. Structure class cascades cleanly.
4. **Accessibility Focus States**: Always preserve visible focus indicators (`:focus-visible`) for keyboard users. Never set `outline: none` without providing an alternative focus ring.
5. **Reduced Motion**: Always respect user motion preferences:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```

---

### 6. JavaScript Standards

1. **ES6+ Syntax**: Use `const`/`let`, arrow functions, object destructuring, template literals, and async/await. Avoid `var`.
2. **Modular Functions**: Keep functions pure and focused on a single responsibility.
3. **Performance First**:
   - Use `requestAnimationFrame` for custom animations and canvas rendering.
   - Use `passive: true` for scroll and touch listeners.
   - Use `IntersectionObserver` rather than continuous scroll polling.
4. **Error Handling**: Gracefully handle missing elements or network operations (e.g. form submission) with `try...catch` blocks and user-friendly UI alerts.

---

### 7. SEO & Accessibility (a11y) Rules

1. **Meta Tags**: Always include `meta charset="UTF-8"`, `meta name="viewport"`, `meta name="description"`, and `meta name="keywords"`.
2. **Social Open Graph**: Complete `og:title`, `og:description`, `og:image`, `og:type`, and Twitter card tags.
3. **Structured Data**: Include JSON-LD schema (`https://schema.org/Person`) describing Alaka Bhargabi Sahu, GIET University, and AI Engineering skills.
4. **Image Alt Text**: Every image element (`<img>`) must have meaningful, context-rich `alt` text. Decorative visuals must use `alt=""` and `aria-hidden="true"`.

---

### 8. Git & Workflow Standards

- **Commit Message Format**: Follow [Conventional Commits](https://www.conventionalcommits.org/):
  - `feat(hero): add interactive neural network canvas`
  - `style(cards): implement glassmorphic glow hover states`
  - `docs(prd): update functional requirements for projects showcase`
  - `fix(nav): correct mobile drawer backdrop blur on iOS Safari`
- **Testing**: Validate HTML through W3C Validator, test keyboard tab flow, and run Lighthouse audits prior to release.
