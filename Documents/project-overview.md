# Project Overview — shubhamshrivastava.dev

## What This Project Is

A next-generation personal portfolio website for Shubham Shrivastava, a Frontend Software Engineer with 2.7+ years of production experience. This is not a standard portfolio — it is a fully immersive, cinematic, scroll-driven web experience built to demonstrate not just the work, but the craft behind it.

The portfolio is designed to feel like booting into a living system. Every scroll is a new chapter. Every interaction communicates depth, precision, and intentionality. When someone visits this site, they should feel like they have entered a world — not viewed a webpage.

The project is also a full stack application, intentionally built to demonstrate backend and database capabilities alongside the frontend — so it can be featured on the resume as evidence of full stack experience.

---

## Who This Is For

**Primary audience — Recruiters and Hiring Managers**
They land on the site, experience the UI, see real impact numbers, and leave with a strong impression before reading a single line of the resume.

**Secondary audience — Senior Engineers and Technical Interviewers**
They explore deeper — notice the architecture, the easter egg terminal, the real-time view counters, the tech stack in the footer. Every detail signals engineering maturity.

**Tertiary audience — Potential Clients and Collaborators**
They see production-grade work across multiple platforms and reach out via the contact section.

---

## Core Goals

1. Create a portfolio that stands out immediately and is remembered long after the tab is closed
2. Demonstrate frontend engineering skill through the UI itself — not just by listing it
3. Demonstrate full stack capability through a real working backend and database
4. Be fully deployable, maintainable, and easy to update without touching component code
5. Be fast, accessible, and production-grade — not just a demo

---

## Project Name & URL

**Project Name:** shubhamshrivastava.dev  
**Frontend Deployment:** Vercel  
**Backend Deployment:** Railway  
**Database Hosting:** Supabase (PostgreSQL)

---

## Design Philosophy

**Theme:** Futuristic & Techy — Neon Glitch  
**Concept:** "Digital Organism" — the portfolio feels like a living system the user has jacked into  
**Color Palette:**
- Background: `#050505` (near black)
- Primary Accent: `#00f5ff` (electric cyan)
- Secondary Accent: `#39ff14` (toxic green)
- Text: `#c8c8c8` (muted white)
- Panel/Card: `#0a0a0a`
- Border: `rgba(0, 245, 255, 0.15)`

**Typography:**
- Display / Headings: `Orbitron` (Google Fonts) — futuristic, geometric
- Body / Code / UI labels: `JetBrains Mono` (Google Fonts) — terminal, technical

**Atmosphere Layers (always present across entire site):**
- Scanline overlay — subtle repeating horizontal lines over the entire page
- Noise/grain texture — very faint, adds depth to the black background
- Soft cursor spotlight — large radial gradient that follows the mouse, slightly illuminating the dark canvas
- Custom crosshair cursor — glowing cyan, replaces default browser cursor

---

## The 6 Chapters (Sections)

The portfolio is structured as 6 sequential chapters — not sections. The user moves through them like a story.

### Chapter 00 — INITIALIZE (Hero)
The entry point. A boot sequence types itself out on load. Then the hero fades in — particle field background, mouse parallax depth, massive glitch text of the user's name, tagline, and a single CTA button. Sets the tone for everything that follows.

### Chapter 01 — IDENTITY (About)
A system profile card that assembles itself on scroll entry. Photo with neon border. Terminal-style data readout of name, role, experience, certifications. Three animated stat counters (APIs integrated, components built, production platforms).

### Chapter 02 — STACK (Skills)
Four glowing module panels — Frameworks, Languages, Frontend Tools, Tooling & Cloud. Each skill appears as a badge that staggers in on scroll entry. Hover reveals a brief tooltip.

### Chapter 03 — WORK LOG (Projects)
Large project cards for each client and personal project. Each card features: project name, impact statement with real numbers, tech tags, live view counter (real data from backend), and a launch button. Cards respond to hover with a 3D magnetic tilt effect.

### Chapter 04 — SIGNAL (Experience Timeline)
A vertical timeline styled as a data feed. A glowing pulse dot travels down the line. Each entry — job, education, certification — types itself in as it enters the viewport.

### Chapter 05 — CONNECT (Contact)
Full screen. Massive glitching headline that cycles through words. Contact links displayed as terminal commands. Resume download button that hits the backend, logs the download, and serves the file.

---

## Interaction Model

The portfolio has four layers of interaction working simultaneously:

| Trigger | Effect | Location |
|---|---|---|
| Page load | Boot sequence, then hero fades in | Hero |
| Mouse move | Multi-layer background parallax | Hero only |
| Mouse move | Soft spotlight follows cursor | Entire page |
| Cursor near text | Letters subtly repel/attract | Hero heading, section titles |
| Scroll (normal) | Sections reveal with staggered animations | All chapters |
| Scroll (fast) | Brief chromatic aberration / RGB split | Entire page |
| Hover on nav/buttons | Neon glow intensifies | Nav, buttons, badges |
| Hover near project card | 3D magnetic tilt (8–10 degrees) | Project cards |
| Hover on name/headings | Glitch flicker triggers | Hero, About |
| Press `/` or `Ctrl+K` | Terminal easter egg overlay opens | Entire page |
| Sound toggle click | Ambient audio + UI sound effects on/off | Top-right corner |
| Contact form submit | Terminal-style loading state, success message | Contact section |
| Resume download | Logs to backend, serves PDF | Contact section |

---

## Ambient Sound

An optional sound layer toggled by a `[ ♪ SOUND ]` button in the top-right corner of the nav. Off by default.

When enabled:
- A faint low ambient hum plays in the background (server room / sci-fi idle)
- Subtle digital blip sound on hover interactions
- Soft click sound on button presses

When disabled: complete silence. User preference is respected.

---

## Hidden Easter Egg — Terminal Mode

Accessible anywhere on the site by pressing `/` or `Ctrl+K`. A terminal panel slides up from the bottom of the screen.

Supported commands:
```
ls projects        → lists all projects with one-line descriptions
cat about.txt      → displays the full about/bio text
contact --email    → opens the mail client with email pre-filled
download resume    → triggers resume download + backend log
clear              → clears terminal output
help               → lists all available commands
```

This easter egg rewards curious visitors, directly demonstrates frontend interactivity, and is the feature most likely to be shared or remembered.

---

## Full Stack Architecture

```
USER BROWSER
     ↕  HTTP (JSON via REST API)
REACT FRONTEND — Vite + React + TypeScript
     ↕  Axios API calls
NODE.JS BACKEND — Express + TypeScript
     ↕  Prisma ORM
PostgreSQL DATABASE — hosted on Supabase
```

### Backend Features (v1)

| Feature | Endpoint | Description |
|---|---|---|
| Get all projects | `GET /api/projects` | Returns projects with view counts |
| Increment view | `POST /api/views/:projectId` | Logs a project view |
| Contact form | `POST /api/contact` | Saves message + sends email via Resend |
| Resume download | `GET /api/resume/download` | Logs download + serves PDF |

### Database Tables (v1)

| Table | Key Columns |
|---|---|
| `projects` | id, title, description, tags, live_url, github_url, views_count |
| `messages` | id, name, email, message, created_at, read |
| `skills` | id, name, category, proficiency |
| `resume_logs` | id, downloaded_at, ip_hash |

---

## Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| Frontend Framework | Vite + React + TypeScript | Fast build, familiar tooling, strong typing |
| Styling | Tailwind CSS v4 + CSS Custom Properties | Utility-first speed + fine-grained animation control |
| Animation | GSAP + ScrollTrigger | Industry-standard scroll-driven storytelling |
| Animation (components) | Framer Motion | React-native component transitions and interactions |
| Smooth Scroll | Lenis | Buttery inertia scrolling, integrates with GSAP |
| 3D / Canvas | React Three Fiber + GLSL shaders | Particle field, hero background depth |
| HTTP Client | Axios | API calls from frontend to backend |
| Backend Framework | Node.js + Express + TypeScript | Transparent, widely understood, full control |
| ORM | Prisma | Type-safe DB access, schema-first, modern standard |
| Database | PostgreSQL | Production-standard, relational, impressive on resume |
| Email Service | Resend | Simple API, reliable delivery |
| Fonts | Orbitron + JetBrains Mono | Google Fonts, loaded via Vite plugin |
| Frontend Deployment | Vercel | Zero config, optimal for React/Vite |
| Backend Deployment | Railway | Simple Node.js hosting, free tier |
| Database Hosting | Supabase | Managed PostgreSQL, generous free tier |
| IDE | Cursor | AI-assisted development with .cursorrules context |

---

## What is NOT in v1 (Planned for v2)

- Admin dashboard — protected `/admin` route to manage projects, view messages, see analytics
- JWT authentication — for admin login
- Project detail pages — individual pages per project with deeper case study content
- Blog / writing section
- Dark/light theme toggle

---

## Build Strategy

**Frontend first.** The entire UI is built with static/mock data before any backend exists. Once the UI is complete and polished, the backend is built and integrated by replacing mock data with real API calls.

This approach means:
- The most visible, impressive part is done first
- UI decisions are never blocked by backend readiness
- Each phase has a clear, demonstrable deliverable

---

## Folder Structure (Monorepo)

```
shubhamshrivastava.dev/
├── client/                  ← Vite + React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          ← Reusable atoms (GlitchText, NeonButton, Cursor, etc.)
│   │   │   ├── sections/    ← The 6 chapters (Hero, About, Skills, Projects, etc.)
│   │   │   └── canvas/      ← Three.js / WebGL components
│   │   ├── hooks/           ← useGlitch, useScrollProgress, useCursorPosition, useSound
│   │   ├── lib/             ← GSAP init, Lenis init, constants
│   │   ├── data/            ← Static content: projects.ts, skills.ts, experience.ts
│   │   ├── styles/          ← globals.css, animations.css, design tokens
│   │   └── types/           ← Shared TypeScript interfaces
│   └── public/              ← Resume PDF, favicon, static assets
│
├── server/                  ← Node.js + Express backend
│   ├── src/
│   │   ├── routes/          ← projects, contact, resume, views
│   │   ├── controllers/     ← business logic per route
│   │   ├── middleware/       ← error handling, validation, cors
│   │   ├── lib/             ← Prisma client, Resend client
│   │   └── types/           ← Shared TypeScript interfaces
│   └── prisma/
│       └── schema.prisma    ← Database schema
│
├── shared/                  ← Types used by both client and server
│   └── types.ts
│
├── .cursorrules             ← Cursor IDE rules (auto-loaded)
└── README.md
```

---

## Success Criteria

The portfolio is considered complete and successful when:

- A visitor lands on the URL and says "I've never seen a portfolio like this"
- Every interaction (scroll, hover, mouse move, click) feels intentional and alive
- The contact form works end-to-end — message saved to DB, email delivered
- The resume download is tracked and logged
- Project view counts update in real time
- The terminal easter egg is fully functional
- The site scores 90+ on Lighthouse performance
- The site is fully responsive on mobile (interactions gracefully degraded)
- It is live at shubhamshrivastava.dev

---

*Document version: 1.0*  
*Last updated: Pre-build planning phase*  
*Next document: requirements.prd.md*
