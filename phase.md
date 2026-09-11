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

# Phased Implementation Roadmap (phase.md)
## Project: Alaka Bhargabi Sahu — AI Engineer Portfolio

> **Theme**: Cybernetic AI & Modern Glassmorphism | **Author**: Alaka Bhargabi Sahu | **Status**: Active

---

### Implementation Progress Overview

- [x] **Project Inception & Specifications**:
  - [x] `prd.md`: Product Requirements Document
  - [x] `design.md`: Design Tokens, Typography & Component Specs
  - [x] `rules.md`: Engineering Standards & Quality Constraints
  - [x] `prompt.md`: AI Agent Directives & Prompt Templates
  - [x] `phase.md`: Implementation Roadmap & Milestone Tracker
- [ ] **Phase 1**: Architecture, Scaffolding & Design System
- [ ] **Phase 2**: Floating Navigation & Interactive Neural Hero
- [ ] **Phase 3**: About Section & Categorized Skills Matrix
- [ ] **Phase 4**: Featured Projects Gallery with Interactive Filtering
- [ ] **Phase 5**: Education & Certifications Timeline
- [ ] **Phase 6**: Contact System, Socials & Form Validation
- [ ] **Phase 7**: SEO, Accessibility Audit, Performance Polish & Launch

---

### Phase Details & Checklists

---

#### Phase 1: Architecture, Scaffolding & Design System
**Objective**: Establish the file directory structure, import Google Fonts, and define all CSS variables and base reset rules.

- [ ] Create folder structure: `css/`, `js/`, `assets/icons/`, `assets/images/`.
- [ ] Create `css/variables.css` implementing all design tokens from [design.md](file:///c:/Users/alaka/OneDrive/Documents/Portfolio/design.md) (colors, gradients, shadows, transitions, spacing).
- [ ] Create `css/base.css` with modern CSS reset, custom scrollbar styling, fluid container, and typography setups for **Outfit**, **Inter**, and **JetBrains Mono**.
- [ ] Set up `index.html` skeleton with HTML5 semantic doctype, meta tags, and font link imports.
- [ ] **Deliverable**: Clean, responsive layout skeleton with functional color variables and typography tokens.

---

#### Phase 2: Floating Navigation & Interactive Neural Hero
**Objective**: Build an eye-catching, luminous first-screen experience with an interactive neural particle network.

- [ ] Construct the glassmorphic floating navbar (`<header>` / `<nav>`):
  - Brand identity / monogram link.
  - Smooth anchor links (`#about`, `#skills`, `#projects`, `#certifications`, `#contact`).
  - "Resume" download / preview button.
  - Responsive mobile hamburger menu with smooth slide-in drawer.
- [ ] Build the interactive HTML5 2D Canvas (`js/canvas.js`):
  - Neural network particle nodes drifting smoothly.
  - Dynamic proximity connections (lines connecting nearby nodes).
  - Mouse/cursor proximity attraction and luminous glow reaction.
  - Automatic resize handler with device-pixel-ratio scaling for retina screens.
- [ ] Hero Section content (`#hero`):
  - Availability badge: *"Available for AI Research & High-Impact Projects"*.
  - Main Headline: *"Building Intelligent Systems & Scalable AI Solutions"*.
  - Subtitle introducing Alaka Bhargabi Sahu (BTech AI, GIET University Gunupur).
  - Action buttons: "Explore Work" (primary gradient) & "Get in Touch" (glass border).
  - Quick stat pills: *"BTech AI '29"*, *"Hedera Certified"*, *"Bhubaneswar, IN"*.
- [ ] **Deliverable**: Breathtaking landing experience with fluid 60fps canvas animations and glass navbar.

---

#### Phase 3: About Section & Categorized Skills Matrix
**Objective**: Detail Alaka's academic background, technical passions, and categorized technical proficiencies.

- [ ] Build `#about` section:
  - Narrative bio highlighting AI/ML studies at GIET University Gunupur.
  - Visual cards for key focal areas: Artificial Intelligence, Deep Learning, Web Engineering, and Web3/DLT.
  - Location & academic badge display.
- [ ] Build `#skills` section:
  - Category 1: **AI & Data Science** (Python, Machine Learning, Data Structures, Neural Networks).
  - Category 2: **Software & Web Engineering** (HTML5, Vanilla CSS3, JavaScript ES6+, Responsive Design, Git).
  - Category 3: **DLT & Specialized Tech** (Hedera Hashgraph, Smart Contracts, Consensus Service).
  - Category 4: **Engineering Strengths** (Problem Solving, Presentations, Technical Collaboration).
  - Interactive hover effects with ambient cyan and violet border glows.
- [ ] **Deliverable**: Engaging, well-structured representation of technical depth and capabilities.

---

#### Phase 4: Featured Projects Gallery with Interactive Filtering + ContainerScroll Animation
**Objective**: Showcase real-world engineering projects with dynamic category filtering, rich card interactions, and a cinematic scroll-driven 3D animation using `ContainerScroll` from Aceternity UI.

> **⚠️ Tech Stack Note**: This phase upgrades the project shell from Vanilla HTML/CSS/JS to a **Next.js + shadcn + Tailwind CSS + TypeScript** monorepo to support the React component ecosystem. Follow the steps below in order.

---

##### 4.0 Prerequisites: Check Project Support

The current portfolio is Vanilla HTML/JS. The `ContainerScroll` component requires:

| Requirement | Status | Action Required |
| :--- | :--- | :--- |
| **React / Next.js** | ❌ Not Present | Initialize via shadcn CLI |
| **TypeScript** | ❌ Not Present | Included in shadcn init |
| **Tailwind CSS** | ❌ Not Present | Included in shadcn init |
| **shadcn/ui** | ❌ Not Present | Initialize via shadcn CLI |
| **framer-motion** | ❌ Not Present | `npm install framer-motion` |

---

##### 4.1 Setup Project via shadcn CLI

Run the following commands from the `Portfolio/` root directory in PowerShell:

```powershell
# Step 1: Initialize a new Next.js project with shadcn (TypeScript + Tailwind auto-configured)
npx shadcn@latest init

# When prompted, choose:
# ✔ Which style would you like to use? → Default
# ✔ Which color would you like to use as base color? → Zinc
# ✔ Would you like to use CSS variables for colors? → yes
```

> **Why shadcn's `init` command?**
> `shadcn init` bootstraps a Next.js 14+ App Router project that automatically configures:
> - TypeScript (`tsconfig.json`)
> - Tailwind CSS (`tailwind.config.ts` + `postcss.config.js`)
> - Path alias `@/` pointing to project root
> - `components.json` registry descriptor

---

##### 4.2 Install Required NPM Dependencies

```powershell
# Core animation library (required by ContainerScroll)
npm install framer-motion

# If lucide-react icons are needed
npm install lucide-react
```

---

##### 4.3 Default Component Path & `/components/ui` Folder

After `shadcn init`, shadcn registers its component output path in `components.json`:

```json
{
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui"
  }
}
```

> **Why `/components/ui` is critical:**
> `@/components/ui` is the **canonical shadcn component registry path**. The demo file imports using `@/components/ui/container-scroll-animation`, so the component **must** live there. If using a custom path, every import reference throughout the app will break. Always keep UI primitives in this folder.

If the folder was not auto-created, create it manually:

```powershell
mkdir components/ui
```

---

##### 4.4 Copy-Paste Component Files

**File 1**: Copy to `components/ui/container-scroll-animation.tsx`

```tsx
"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{ perspective: "1000px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
```

**File 2**: Copy to `components/HeroScrollDemo.tsx` (demo integration):

```tsx
"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[500px] pt-[1000px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Explore my <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Featured Projects
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=75"
          alt="Projects preview showing code on a dark screen"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
```

> **Image Asset**: The placeholder image uses an Unsplash URL of a code editor
> (`photo-1555066931-4365d14bab8c`) — a real, publicly accessible stock photo.
> Replace with a screenshot of any of your own projects (NeuroVision AI, AlgoFlow, etc.).

---

##### 4.5 Component Integration Analysis

| Question | Answer |
| :--- | :--- |
| **Props passed?** | `titleComponent` (JSX node with section heading) and `children` (portfolio preview image or project grid) |
| **State managed?** | `isMobile` (boolean) — local `useState` tracking `window.innerWidth <= 768` |
| **Context / Hooks?** | `useScroll` and `useTransform` from `framer-motion` — no external provider needed |
| **Required assets?** | Image inside `<Card>` — use Unsplash URL or a Next.js `<Image>` with local asset |
| **Responsive behavior?** | Mobile: `scale [0.7, 0.9]`, height `h-[60rem]`; Desktop: `scale [1.05, 1]`, height `h-[80rem]` |
| **Best placement?** | Above or between the Projects filter gallery in `app/page.tsx` as a cinematic section intro |

---

##### 4.6 Embed in Page (`app/page.tsx`)

```tsx
import { HeroScrollDemo } from "@/components/HeroScrollDemo";

export default function Home() {
  return (
    <main>
      {/* ... Hero Section ... */}
      <HeroScrollDemo />
      {/* ... Projects filter grid below ... */}
    </main>
  );
}
```

---

##### 4.7 Existing Vanilla Projects Gallery Tasks

- [x] Build `#projects` section container with filter pills (`All`, `AI & Machine Learning`, `Web Development`, `Web3 & Hedera`)
- [x] Implement `js/projects.js` to manage project data and real-time filtering transitions
- [x] Craft project cards (gradient banner, category badge, summary, tech tags, GitHub + Live Demo links)
- [x] Add 3D card tilt and luminous hover elevation effects
- [ ] **NEW**: Integrate `ContainerScroll` animation above the projects grid as the section intro
- [ ] **NEW**: Add `framer-motion` scroll-driven 3D perspective tilt to project showcase entrance

---

- [ ] **Deliverable**: Interactive, filterable project showcase with a cinematic `ContainerScroll` intro animation, highlighting practical AI, Web, and Hedera engineering skills with a scroll-reactive 3D effect.


#### Phase 5: Education & Certifications Timeline
**Objective**: Highlight academic credentials from GIET University Gunupur and the Hedera Certified Foundation credential.

- [ ] Build `#certifications` section with a vertical luminous timeline.
- [ ] GIET University Gunupur Milestone Card:
  - Bachelor of Technology (BTech) in Artificial Intelligence (2025–2029).
  - Coursework & academic highlights.
- [ ] Hedera Certified Foundation (HCF) Card:
  - Credential verification badge.
  - Core areas tested: Hashgraph Consensus, Token Service, Smart Contracts.
  - Verification link / credential ID presentation.
- [ ] Key Honors & Presentation Milestones card.
- [ ] **Deliverable**: Verifiable and visually compelling educational and credential history.

---

#### Phase 6: Contact System, Socials & Form Validation
**Objective**: Provide direct, multi-channel communication for recruiters, collaborators, and visitors.

- [ ] Build `#contact` section:
  - Direct email card (`alakabhargabisahu@gmail.com`) with one-click "Copy to Clipboard" and `mailto:` link.
  - LinkedIn card (`linkedin.com/in/alaka-bhargabi-sahu-691501385`) with external link.
  - Location indicator: Bhubaneswar, Odisha, India.
- [ ] Interactive contact form:
  - Fields: Name, Email, Subject, Message.
  - Real-time client-side validation with helpful error states.
  - Success modal / toast notification upon submission.
- [ ] Back-to-top floating action button (FAB) appearing after scrolling past hero.
- [ ] Footer with copyright, tech stack attribution, and social icon links.
- [ ] **Deliverable**: Seamless, functional contact hub with zero friction.

---

#### Phase 7: SEO, Accessibility Audit, Performance Polish & Launch
**Objective**: Guarantee peak performance, 95+ Lighthouse scores, and search engine discoverability.

- [ ] Add complete Open Graph (`og:*`) and Twitter Card meta tags to `<head>`.
- [ ] Inject JSON-LD `Person` structured schema markup.
- [ ] Run full accessibility audit:
  - Verify keyboard tab navigation across all interactive elements.
  - Confirm high contrast ratios ($\ge 4.5:1$).
  - Validate all ARIA attributes and image `alt` texts.
- [ ] Optimize assets and verify 60fps performance across desktop and mobile browsers.
- [ ] Write deployment documentation for hosting on GitHub Pages, Vercel, or Netlify.
- [ ] **Deliverable**: Production-ready, top-tier portfolio ready to publish to the world.
