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

# Product Requirements Document (PRD)
## Project: Alaka Bhargabi Sahu — AI Engineer & Developer Portfolio

> **Theme**: Cybernetic AI & Modern Glassmorphism | **Author**: Alaka Bhargabi Sahu | **Status**: Active

---

### 1. Overview & Vision
This document outlines the requirements for the official personal portfolio website of **Alaka Bhargabi Sahu**, an Artificial Intelligence engineering student at GIET University Gunupur and Hedera Certified Foundation (HCF) credential holder.

The portfolio serves as an elite, interactive digital presence designed to showcase Alaka's technical expertise in AI/ML, web technologies, academic milestones, certifications, and hands-on projects to prospective recruiters, tech leads, hackathon panels, and research collaborators.

---

### 2. Goals & Success Metrics

#### 2.1 Core Goals
1. **Professional Showcase**: Highlight academic foundation in Artificial Intelligence (BTech, GIET University Gunupur, 2025–2029) and emerging specializations.
2. **Project Demonstration**: Present AI/ML, Web, and Distributed Ledger (Hedera) projects with live demos, code repositories, architecture overviews, and measurable impacts.
3. **Credibility & Certifications**: Prominently display verified certifications (e.g., Hedera Certified Foundation) and academic accomplishments.
4. **Frictionless Communication**: Enable visitors to connect instantly via email, LinkedIn, or download an updated resume/profile.
5. **Modern Visual Impact**: Deliver a cutting-edge, tech-forward aesthetic (dark mode, glassmorphism, glowing neural accents) reflecting an AI engineering identity.

#### 2.2 Key Performance Indicators (KPIs)
- **Performance**: Google Lighthouse score $\ge 95$ across Performance, Accessibility, Best Practices, and SEO.
- **Load Time**: Initial visual render within $< 1.2\text{s}$ on standard 4G/WiFi connections.
- **Responsiveness**: Flawless layout and interaction across mobile (360px+), tablet (768px+), and high-res desktops (1920px+).
- **Conversion**: Easy access to resume download and contact links within 1 click from anywhere on the site.

---

### 3. User Personas

| Persona | Role | Primary Goal | What They Look For |
| :--- | :--- | :--- | :--- |
| **Tech Recruiter** | Technical Talent Acquisition | Quickly evaluate candidate qualifications & fit | Clear skills overview, education details, downloadable resume, quick contact |
| **Engineering Manager** | AI / Software Engineering Lead | Assess code quality, problem solving, and architecture | Well-documented projects, GitHub links, live demos, tech stack fluency |
| **Hackathon / Research Peer** | Collaborator / Teammate | Find complementary skills for AI/ML projects | Active interests, Hedera/Web3 knowledge, presentation & engineering skills |

---

### 4. Functional Requirements

#### 4.1 Navigation (`Navbar`)
- **Sticky / Floating Glass Bar**: Stays accessible upon scroll with a frosted glass backdrop filter.
- **Brand Logo / Name**: "Alaka Bhargabi Sahu" / monogram linking to top.
- **Nav Links**: `#about`, `#skills`, `#projects`, `#certifications`, `#contact`.
- **Action CTA**: "Resume" button initiating a direct download or preview of the latest CV.
- **Mobile Drawer**: Smooth slide-in hamburger menu for screens $< 768\text{px}$.

#### 4.2 Hero Section (`#hero`)
- **Headline / Tagline**: Compelling intro reflecting AI Engineering and innovation (e.g., *"Building Intelligent Systems & Scalable Solutions"*).
- **Sub-headline**: *"AI Engineering Student at GIET University Gunupur · Hedera Certified · Innovator"*.
- **Interactive Visual**: Ambient AI-themed neural canvas or interactive particle grid responding subtly to mouse movement.
- **Call-to-Action (CTA)**:
  - Primary: "Explore Projects" (smooth scrolls to `#projects`).
  - Secondary: "Get in Touch" (smooth scrolls to `#contact`).
- **Social Proof Badges**: Quick pills for "BTech AI '29", "Hedera Certified", "Bhubaneswar, IN".

#### 4.3 About Section (`#about`)
- **Biography**: Narrative highlighting academic background, passion for artificial intelligence, machine learning, and modern engineering.
- **Highlights Grid**:
  - *Education*: GIET University Gunupur (B.Tech in Artificial Intelligence, 2025–2029).
  - *Location*: Bhubaneswar, Odisha, India.
  - *Focus Areas*: Machine Learning, Neural Networks, Web Development, Distributed Ledger Technology (Hedera).
- **Personal Value Proposition**: Emphasis on continuous learning, presentation skills, problem solving, and collaborative engineering.

#### 4.4 Skills Matrix (`#skills`)
- Categorized skill cards with visual progress/competency tags:
  1. **Artificial Intelligence & Data**: Machine Learning fundamentals, Python, Data Structures & Algorithms, Neural Networks.
  2. **Software & Web Engineering**: Modern HTML5, CSS3/Vanilla CSS, JavaScript (ES6+), Responsive Design, Git/GitHub.
  3. **Certifications & Specialized**: Hedera Certified Foundation (HCF), Distributed Ledger Technologies.
  4. **Core Competencies**: Engineering problem solving, technical presentations, teamwork, rapid prototyping.

#### 4.5 Projects Gallery (`#projects`)
- **Filter Tabs**: `All`, `AI & Machine Learning`, `Web Development`, `Web3 / Hedera`.
- **Project Cards**:
  - Title & One-line elevator pitch.
  - Description of the challenge, solution, and technical architecture.
  - Tech stack pills (e.g., Python, TensorFlow, JavaScript, Hedera SDK).
  - External links: "GitHub Repository" (source code) and "Live Demo" (if deployed).
  - Visual preview banner / mockups.

#### 4.6 Education & Certifications (`#certifications`)
- **Timeline / Milestone Cards**:
  - **GIET University Gunupur**: Bachelor of Technology (BTech) in Artificial Intelligence (2025 – 2029).
  - **Hedera Certified Foundation (HCF)**: Verification badge, date of credential, core competencies (Hashgraph, Smart Contracts, Consensus Service).
  - **Key Achievements & Presentations**: Highlight participation in tech summits, hackathons, and university workshops.

#### 4.7 Contact Section (`#contact`)
- **Direct Channels**:
  - Email: `alakabhargabisahu@gmail.com` with one-click copy and `mailto:` action.
  - LinkedIn: `linkedin.com/in/alaka-bhargabi-sahu-691501385` with external redirect.
  - Location: Bhubaneswar, Odisha, India.
- **Interactive Message Form**:
  - Input fields: Name, Email, Subject, Message.
  - Form validation (HTML5 + JS email syntax verification).
  - Accessible feedback state (success / error notification).

#### 4.8 Footer
- Copyright notice: `© 2026 Alaka Bhargabi Sahu. All rights reserved.`
- Back to top floating button / link.
- Quick links and social icons (GitHub, LinkedIn, Email).

---

### 5. Non-Functional Requirements

#### 5.1 Performance & Optimization
- Vanilla CSS and pure ES6+ JavaScript to avoid unnecessary framework overhead and achieve instantaneous page loads.
- WebP/SVG formats for all visual assets with responsive `srcset` where appropriate.
- Minified styles and scripts for production deployment.

#### 5.2 Accessibility (a11y)
- Full compliance with **WCAG 2.1 AA** standards.
- High color contrast ratio ($\ge 4.5:1$ for normal text, $\ge 3:1$ for large headings).
- Keyboard navigable with visible `:focus-visible` rings.
- ARIA landmarks and aria-labels on icon-only buttons.

#### 5.3 SEO & Metadata
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Primary `<h1>` tag with structured `<h2>` and `<h3>` heading hierarchy.
- OpenGraph and Twitter Card metadata for rich previews when shared on LinkedIn, Twitter, and WhatsApp.
- JSON-LD structured data (`Person` schema) embedding name, educational affiliation, and social profiles.

---

### 6. Scope & Roadmap Summary
- **Current Release (v1.0)**: Complete single-page portfolio with responsive sections, dynamic canvas background, project gallery, certifications showcase, and contact integration.
- **Future Enhancements (v1.1+)**: Interactive blog/articles section, live AI model playground/demos, downloadable dynamic PDF resume generator.
