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

# Design Specification & Architecture (design.md)
## Project: Alaka Bhargabi Sahu — Personal Portfolio Website

> **Theme**: Cybernetic AI & Modern Glassmorphism | **Author**: Alaka Bhargabi Sahu | **Status**: Active

---

### 1. Design Philosophy & Creative Direction

The portfolio embodies a **"Modern Cybernetic AI & Engineering"** aesthetic — dark, luminous, refined, and intelligent. It bridges the gap between academic rigor in Artificial Intelligence and cutting-edge web craftsmanship.

#### Core Aesthetic Pillars:
- **Futuristic & Clean**: Deep cosmic dark background (`#08090e`) layered with subtle glowing grid patterns and ambient radial gradient flares.
- **Glassmorphism**: Frosted glass panels (`backdrop-filter: blur(16px)`) with crisp hairline borders (`rgba(255, 255, 255, 0.08)`) that create visual depth.
- **Dynamic Luminous Accents**: High-vibrancy accent colors representing AI intelligence (electric cyan `#00f2fe`, neon violet `#7928ca`, and mint green `#10b981`).
- **Tactile Micro-Interactions**: Interactive magnetic hover states, smooth cubic-bezier transitions, and dynamic canvas particle networks responding smoothly to user engagement.

---

### 2. Design Tokens & Color System

All styles are defined using CSS Custom Properties in `:root`:

```css
:root {
  /* Surface & Background Colors */
  --bg-base: #07080d;
  --bg-surface: #0e111a;
  --bg-elevated: #151926;
  --bg-glass: rgba(14, 17, 26, 0.72);
  --bg-glass-card: rgba(21, 25, 38, 0.55);
  --bg-glass-hover: rgba(30, 36, 54, 0.75);

  /* Luminous Accent Gradients */
  --accent-cyan: #00f2fe;
  --accent-violet: #8a2be2;
  --accent-purple: #7928ca;
  --accent-emerald: #10b981;
  --accent-amber: #f59e0b;

  --grad-primary: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  --grad-ai: linear-gradient(135deg, #7928ca 0%, #00f2fe 100%);
  --grad-surface: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%);

  /* Border & Stroke Accents */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-focus: rgba(0, 242, 254, 0.5);
  --border-glow: rgba(121, 40, 202, 0.35);

  /* Text & Contrast Hierarchy */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --text-accent: #38bdf8;

  /* Shadows & Ambient Glows */
  --glow-cyan: 0 0 24px rgba(0, 242, 254, 0.25);
  --glow-violet: 0 0 24px rgba(121, 40, 202, 0.3);
  --shadow-card: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
  --shadow-dropdown: 0 16px 40px 0 rgba(0, 0, 0, 0.6);

  /* Typography System */
  --font-display: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-code: 'JetBrains Mono', 'Fira Code', monospace;

  /* Layout Spacing (8pt Grid) */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;

  /* Radii */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-normal: 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-spring: 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

### 3. Typography Scale & Hierarchy

| Element | Font Family | Weight | Size (Desktop) | Size (Mobile) | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (`H1`)** | Outfit | 800 (Bold) | `clamp(2.5rem, 5vw, 4.2rem)` | `2.25rem` | 1.1 | -0.03em |
| **Section Title (`H2`)**| Outfit | 700 (Bold) | `clamp(1.8rem, 3.5vw, 2.5rem)`| `1.6rem` | 1.2 | -0.02em |
| **Card Header (`H3`)**  | Outfit | 600 (Semi) | `1.35rem` | `1.2rem` | 1.3 | -0.01em |
| **Subheadings / Lead**  | Inter  | 400/500    | `1.15rem` | `1.05rem` | 1.6 | normal |
| **Body Paragraph**      | Inter  | 400 (Reg)  | `1.0rem`  | `0.95rem` | 1.65 | normal |
| **Code / Micro Tags**   | JetBrains Mono | 500| `0.85rem` | `0.8rem` | 1.4 | +0.02em |

---

### 4. Layout Architecture & Wireframe Map

```
+------------------------------------------------------------------+
| [Logo: ABS]          [About] [Skills] [Projects] [Cert] [Contact] [Resume CTA] |  <- Floating Glass Navbar
+------------------------------------------------------------------+
|                                                                  |
|   [Status Pill: Available for AI Research & Projects]            |
|   <h1> Building Intelligent Systems & Scalable AI Solutions </h1> |
|   <p> Alaka Bhargabi Sahu · BTech Artificial Intelligence        |
|       GIET University Gunupur · Hedera Certified                 |
|                                                                  |
|   [Explore Projects CTA]    [Get In Touch CTA]                   |
|                                                                  |
|   (Interactive Neural Particle Canvas Network in background)     |
+------------------------------------------------------------------+
| SECTION: ABOUT ME                                                |
| +--------------------------------+ +---------------------------+ |
| | Bio & Academic Journey         | | Quick Stat Cards          | |
| | - GIET University Gunupur      | | - AI & ML Specialization  | |
| | - Focus: Deep Learning, Web    | | - Hedera HCF Certified    | |
| | - Bhubaneswar, Odisha, India   | | - Problem Solver          | |
| +--------------------------------+ +---------------------------+ |
+------------------------------------------------------------------+
| SECTION: CORE SKILLS & EXPERTISE                                 |
| [AI & Data Science]   [Web Engineering]   [DLT / Hedera]   [Core]|
| [Cards with glowing icons, proficiency tags & interactive hover] |
+------------------------------------------------------------------+
| SECTION: FEATURED PROJECTS                                       |
| Filter: [ All ] [ AI & ML ] [ Web Apps ] [ Blockchain / DLT ]    |
| +-------------------------+ +-------------------------+          |
| | Project 1: AI Engine    | | Project 2: Hedera DApp  |          |
| | Neural Net Classifier   | | Micro-transactions App  |          |
| | [Python] [TensorFlow]   | | [Hedera SDK] [JS]       |          |
| | [GitHub] [Live Demo]    | | [GitHub] [Live Demo]    |          |
| +-------------------------+ +-------------------------+          |
+------------------------------------------------------------------+
| SECTION: EDUCATION & CERTIFICATIONS                              |
| Timeline:                                                        |
| * 2025 - 2029: B.Tech in Artificial Intelligence (GIET Univ)    |
| * 2025: Hedera Certified Foundation (HCF Credential)            |
+------------------------------------------------------------------+
| SECTION: CONTACT & CONNECT                                       |
| [Email: alakabhargabisahu@gmail.com]                             |
| [LinkedIn: linkedin.com/in/alaka-bhargabi-sahu-691501385]        |
| [Direct Message Form with instant interactive validation]        |
+------------------------------------------------------------------+
| FOOTER: Copyright 2026 Alaka Bhargabi Sahu · Built with Precision|
+------------------------------------------------------------------+
```

---

### 5. Component Specifications

#### 5.1 Glassmorphic Navbar
- **Container**: Floating capsule with `margin: 16px auto; max-width: 1200px; border-radius: 9999px;`
- **Effects**: `backdrop-filter: blur(16px); background: var(--bg-glass); border: 1px solid var(--border-subtle);`
- **Active State Indicator**: Glowing underline or capsule pill sliding beneath active section link.

#### 5.2 Hero Canvas Animation (`NeuralMesh`)
- An HTML5 2D canvas dynamically resized to viewport width and height.
- Nodes represent data/neural network vertices drifting smoothly in 2D space.
- Connections (lines) dynamically drawn when distance between vertices is $< 120\text{px}$, with opacity proportional to distance.
- Mouse cursor acts as a gravitation/excitation point causing nearby nodes to glow with cyan/violet luminescence.

#### 5.3 Interactive Project Cards
- **Structure**:
  - Top visual preview banner / mockup placeholder with subtle gradient mask.
  - Category tag pill (e.g., `Deep Learning`, `Web3`).
  - Title with hover gradient text fill.
  - Concise impact-oriented summary.
  - Tech tags (interactive pill list).
  - External link buttons: "Code" (GitHub icon) and "Live" (External link icon) with ripple hover effect.
- **Card Hover Motion**: Subtle 3D tilt effect (`transform: translateY(-6px) scale(1.01); box-shadow: var(--shadow-card), var(--glow-cyan);`).

#### 5.4 Skills Badge Grid
- Categorized flex layout containing icon + title + competency tags.
- Animated progress glow along card top border on hover.

#### 5.5 Education & Certification Timeline
- Vertical glowing track with node pulses.
- Each milestone features:
  - Official institution / credential badge (`GIET University Gunupur`, `Hedera Certified Foundation`).
  - Dates and credential verification identifiers.
  - Key focus areas and achievements bullet points.

#### 5.6 Contact Section & Interactive Form
- Dual-column layout: Left column showcases direct contact channels with one-click copy buttons; Right column provides a clean, responsive contact form.
- Form inputs feature floating focus states with luminous border highlights (`--border-focus`).

---

### 6. Motion & Micro-Interactions

| Interaction | Trigger | Visual Response | Duration / Easing |
| :--- | :--- | :--- | :--- |
| **Button Hover** | `:hover` | Gradient shift, 2px upward translation, subtle ambient glow | `0.25s ease` |
| **Card Hover** | `:hover` | Border glow transition, `-6px` elevation, inner shadow bloom | `0.3s cubic-bezier(0.16, 1, 0.3, 1)` |
| **Nav Scroll** | `window.onscroll` | Navbar condenses slightly, background opacity increases to 90% | `0.3s ease` |
| **Section Reveal** | Intersection Observer | Elements fade in and slide up `24px` into final position | `0.6s cubic-bezier(0.16, 1, 0.3, 1)` |
| **Copy Email** | Click | Tooltip transforms from "Copy Email" to "Copied!" with checkmark | `0.2s spring` |

---

### 7. Responsive Breakpoints

```css
/* Mobile Devices */
@media (max-width: 640px) {
  /* Single-column project grid, mobile hamburger navigation, condensed hero */
}

/* Tablets & Small Laptops */
@media (min-width: 641px) and (max-width: 1024px) {
  /* 2-column project cards, compressed navbar links */
}

/* High-Resolution Desktops */
@media (min-width: 1025px) {
  /* 3-column project cards, full-width timeline, optimal spacing */
}
```
