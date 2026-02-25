# 🗺️ Project Roadmap — shubhamshrivastava.dev
> **Always read this file at the start of every Cursor session.**
> Update checkboxes after every completed task. Never skip the changelog entry.

---

## 📌 Quick Reference

| Item | Detail |
|---|---|
| **Project** | shubhamshrivastava.dev — Next-Gen Portfolio |
| **Owner** | Shubham Shrivastava |
| **Version** | v1.0 |
| **Started** | TBD |
| **Target Launch** | TBD |
| **Current Phase** | Phase 0 — Not Started |
| **Overall Progress** | 0 / 12 Phases Complete |

---

## ⚠️ 1. IMPORTANT: Development Guidelines

> These rules apply to every single line of code written in this project.
> AI models must follow these without exception. These are not suggestions.

### 1.1 General Rules

- ⬜ Always read `project-overview.md` before starting any session
- ⬜ Always read `requirements.prd.md` before writing any code
- ⬜ Always read `design-system.md` before touching any UI component
- ⬜ Always update this `roadmap.md` after completing any task
- ⬜ Never start a new phase before the previous phase is marked complete
- ⬜ Never hardcode colors — always use CSS custom properties from `globals.css`
- ⬜ Never hardcode content — all text/data lives in `client/src/data/`
- ⬜ Never use `any` in TypeScript — use `unknown` and narrow it
- ⬜ Never write inline styles — Tailwind classes or CSS variables only
- ⬜ Never commit directly to main — always use feature branches

### 1.2 Naming Conventions

- ⬜ Components: `PascalCase` → `GlitchText.tsx`
- ⬜ Hooks: `camelCase` prefixed with `use` → `useGlitch.ts`
- ⬜ Utilities: `camelCase` → `gsap.ts`, `axios.ts`
- ⬜ Data files: `camelCase` → `projects.ts`, `skills.ts`
- ⬜ Styles: `kebab-case` → `globals.css`, `animations.css`
- ⬜ API routes: `kebab-case` → `/api/resume/download`
- ⬜ Database tables: `snake_case` → `resume_logs`, `admin_users`
- ⬜ Environment variables: `SCREAMING_SNAKE_CASE` → `DATABASE_URL`

### 1.3 Git Commit Convention

Every commit must follow this format:
```
type(scope): short description

feat(hero): add particle field mouse interaction
fix(contact): resolve form validation edge case
style(globals): update cyan glow intensity
chore(deps): install framer-motion
docs(roadmap): mark phase 1 complete
```

Types: `feat` | `fix` | `style` | `refactor` | `chore` | `docs` | `test`

### 1.4 Branch Strategy

```
main              ← production-ready code only
dev               ← integration branch
feature/phase-X   ← one branch per phase
fix/issue-name    ← bug fixes
```

### 1.5 Before Every AI Session — Paste These Files

In order:
1. `.cursorrules` (auto-loaded by Cursor)
2. `project-overview.md`
3. `requirements.prd.md`
4. `design-system.md`
5. This `roadmap.md`
6. The specific file(s) you are working on

### 1.6 Definition of Done (Per Task)

A task is only ✅ when:
- Code is written and works as expected
- No TypeScript errors (`tsc --noEmit` passes)
- No console errors in browser
- Visually matches the design specification
- Tested on Chrome and Firefox minimum
- Committed to the correct branch

---

## 🔄 2. Complete Application Flow

> This section describes the full end-to-end flow so AI models always understand the system.

### 2.1 User Journey Flow

```
User hits shubhamshrivastava.dev
         │
         ▼
[BOOT SEQUENCE — 2.5s]
Typing animation: "> INITIALIZING SYSTEM..."
         │
         ▼
[HERO — Chapter 00: INITIALIZE]
Particle field + parallax + glitch name + CTA button
         │
    User scrolls ▼
         │
[ABOUT — Chapter 01: IDENTITY]
System profile card assembles + stat counters animate
         │
    User scrolls ▼
         │
[SKILLS — Chapter 02: STACK]
Module panels stagger in + badge hover tooltips
         │
    User scrolls ▼
         │
[PROJECTS — Chapter 03: WORK LOG]
Project cards with 3D tilt + live view counters from API
         │
    User scrolls ▼
         │
[EXPERIENCE — Chapter 04: SIGNAL]
Timeline data feed with pulse dot animation
         │
    User scrolls ▼
         │
[CONTACT — Chapter 05: CONNECT]
Glitch headline + terminal contact links + resume download
         │
    ┌────┴────┐
    │         │
User fills  User clicks
contact     resume download
form        │
    │       ▼
    ▼    POST /api/resume/download
POST /api/contact    → logs to DB
    → saves to DB    → serves PDF file
    → returns ✓      → browser downloads
```

### 2.2 Frontend ↔ Backend Flow

```
REACT FRONTEND (Vite — port 5173)
        │
        │  Axios instance (src/lib/axios.ts)
        │  baseURL = VITE_API_BASE_URL
        │
        ▼
NODE.JS BACKEND (Express — port 4000)
        │
        │  Route → Controller → Prisma
        │
        ▼
PostgreSQL DATABASE (Supabase)
```

### 2.3 API Call Map

| Frontend Action | HTTP Method | Endpoint | Backend Action |
|---|---|---|---|
| Projects section mounts | GET | `/api/projects` | Fetch all from DB |
| Project card viewed | POST | `/api/views/:slug` | Increment viewsCount |
| Contact form submitted | POST | `/api/contact` | Validate + save message |
| Resume button clicked | GET | `/api/resume/download` | Log + stream PDF |

### 2.4 State Management Strategy

- No Redux or Zustand — React's built-in state is sufficient for v1
- Server state managed with `useState` + `useEffect` + Axios
- Animation state managed by GSAP (not React state — no re-renders)
- Sound state managed by `useSound` hook (module-level audio instance)
- Cursor position tracked via `useCursorPosition` hook (no re-render — uses refs)

---

## 📋 3. Project Overview

### 3.1 What This Project Is

A next-generation personal portfolio for Shubham Shrivastava, Frontend Software Engineer with 2.7+ years of experience. Built as a full stack application to demonstrate both frontend craft and backend capability. Designed to feel like booting into a living system — cinematic, scroll-driven, and deeply interactive.

### 3.2 Tech Stack Summary

| Layer | Technology |
|---|---|
| Frontend | Vite + React 18 + TypeScript |
| Styling | Tailwind CSS v4 + CSS Custom Properties |
| Scroll Animation | GSAP + ScrollTrigger |
| Component Animation | Framer Motion |
| Smooth Scroll | Lenis |
| 3D / Canvas | React Three Fiber + GLSL |
| HTTP Client | Axios |
| Backend | Node.js 24 + Express + TypeScript |
| ORM | Prisma |
| Database | PostgreSQL (Supabase) |
| Email | — (v2, contact saves to DB only in v1) |
| Deployment (FE) | Vercel |
| Deployment (BE) | Railway |
| IDE | Cursor |

### 3.3 Key Features in v1

- ⬜ Boot sequence animation on load
- ⬜ Multi-layer parallax hero with interactive particle field
- ⬜ Custom glowing crosshair cursor
- ⬜ Lenis smooth scroll across entire page
- ⬜ Scroll velocity → chromatic aberration effect
- ⬜ Spotlight cursor (radial gradient following mouse)
- ⬜ 6 scroll-animated chapters
- ⬜ 3D magnetic tilt on project cards
- ⬜ Live project view counters (real API data)
- ⬜ Working contact form (saves to PostgreSQL)
- ⬜ Resume download with backend logging
- ⬜ Terminal easter egg (`/` or `Ctrl+K`)
- ⬜ Ambient sound toggle
- ⬜ Fully responsive (mobile graceful degradation)
- ⬜ Lighthouse score 90+

### 3.4 What is NOT in v1

- ⬜ Admin dashboard (v2)
- ⬜ JWT authentication (v2)
- ⬜ Email notifications on contact (v2)
- ⬜ Project detail pages (v2)
- ⬜ Blog section (v2)

---

## 🎨 4. Design System & Styling

### 4.1 Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#050505` | Page background — always |
| `--color-panel` | `#0a0a0a` | Cards, panels, nav background |
| `--color-cyan` | `#00f5ff` | Primary accent, borders, glows |
| `--color-green` | `#39ff14` | Secondary accent, success states |
| `--color-text` | `#c8c8c8` | Body text |
| `--color-text-dim` | `#555555` | Subdued labels, meta text |
| `--color-border` | `rgba(0,245,255,0.15)` | Card and panel borders |

### 4.2 Typography

| Token | Value | Usage |
|---|---|---|
| `--font-display` | `Orbitron` | All headings, section titles, name |
| `--font-mono` | `JetBrains Mono` | All body text, labels, UI elements |

Font size scale:
- Hero name: `clamp(3rem, 8vw, 7rem)`
- Section headings: `clamp(2rem, 5vw, 4rem)`
- Sub-headings: `1.5rem`
- Body: `1rem`
- Labels/meta: `0.75rem`
- Letter spacing on all caps: `0.2em`

### 4.3 Spacing Scale

All spacing uses multiples of 8px via CSS variables `--space-1` through `--space-16`.

### 4.4 Animation Standards

| Type | Duration | Easing |
|---|---|---|
| Fast micro-interactions | `150ms` | `ease-out` |
| Standard transitions | `300ms` | `--ease-out-expo` |
| Scroll reveal animations | `600ms` | `--ease-out-expo` |
| Boot sequence | `2500ms` | linear |
| Glitch flicker | `200ms` | `steps(1)` |
| Page-level GSAP timelines | `800ms–1200ms` | `power3.out` |

### 4.5 Component Visual Rules

- All interactive elements must glow on hover using `--glow-cyan` or `--glow-green`
- No box shadows using black — only neon glows
- Card borders: `1px solid var(--color-border)`
- Card hover border: `1px solid var(--color-cyan)`
- All section headings prefixed with `//` in cyan
- All status indicators use the green pulse `●`
- Buttons have a blinking cursor `_` appended

### 4.6 Atmosphere Layers (Always Present)

- ⬜ Scanline overlay — fixed, `pointer-events: none`, `z-index: 9998`
- ⬜ Noise grain texture — fixed, `opacity: 0.035`, `z-index: 9997`
- ⬜ Spotlight cursor — radial gradient, updates via `mousemove`
- ⬜ Custom crosshair cursor — replaces browser default globally

### 4.7 Responsive Breakpoints

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | `< 768px` | Single column, reduced animations, no 3D tilt, no parallax |
| Tablet | `768px–1024px` | Two columns where applicable, reduced particle count |
| Desktop | `> 1024px` | Full experience |

---

## 🚀 5. Development Phases

---

### ✅ / ⬜ Phase 0 — Project Setup & Configuration
> Goal: Empty repo → working dev environment with correct structure, tooling, and config.

#### 0.1 Repository Setup
- ⬜ Create GitHub repository: `shubhamshrivastava.dev`
- ⬜ Clone to local machine
- ⬜ Create root `.gitignore` covering `node_modules`, `.env`, `dist`, `.DS_Store`
- ⬜ Create root `README.md` with project description and local setup instructions
- ⬜ Create initial branch structure: `main`, `dev`
- ⬜ Create `docs/` folder and move all planning `.md` files into it

#### 0.2 Frontend Init (client/)
- ⬜ Run `npm create vite@latest client -- --template react-ts`
- ⬜ Install all frontend dependencies (see requirements.prd.md § 2.2)
- ⬜ Configure `vite.config.ts` with path aliases and API proxy
- ⬜ Configure `tsconfig.json` with strict mode and path aliases
- ⬜ Set up Tailwind CSS v4 with `@tailwindcss/vite` plugin
- ⬜ Create `client/.env` with `VITE_API_BASE_URL=http://localhost:4000/api`
- ⬜ Verify dev server runs: `npm run dev` → `localhost:5173`

#### 0.3 Backend Init (server/)
- ⬜ Create `server/` directory, run `npm init -y`
- ⬜ Install all backend dependencies (see requirements.prd.md § 3.2)
- ⬜ Configure `tsconfig.json`
- ⬜ Create `server/.env` with PORT, DATABASE_URL, CLIENT_ORIGIN
- ⬜ Create entry point `server/src/index.ts` with basic Express setup
- ⬜ Verify server runs: `npm run dev` → `localhost:4000`

#### 0.4 Database Init
- ⬜ Create Supabase project at supabase.com
- ⬜ Copy connection string URI to `server/.env` as `DATABASE_URL`
- ⬜ Run `npx prisma init` inside `server/`
- ⬜ Write full Prisma schema (see requirements.prd.md § 4.2)
- ⬜ Run `npx prisma migrate dev --name init`
- ⬜ Run `npx prisma generate`
- ⬜ Verify DB connection with `npx prisma studio`

#### 0.5 Shared Types
- ⬜ Create `shared/` directory at root
- ⬜ Create `shared/types.ts` with all shared interfaces (ApiResponse, ProjectDTO, etc.)
- ⬜ Configure path alias `@shared/*` in both client and server tsconfigs

#### 0.6 Folder Structure Creation
- ⬜ Create all folders in `client/src/` as defined in requirements.prd.md § 2.6
- ⬜ Create placeholder `index.ts` in each folder so Git tracks them
- ⬜ Create all folders in `server/src/` as defined in requirements.prd.md § 3.6

#### 0.7 Cursor Rules
- ⬜ Create `.cursorrules` at project root with full content from requirements.prd.md § 8
- ⬜ Verify Cursor IDE picks up the rules (check Settings → Rules)

**Phase 0 Complete when:** Both dev servers run without errors, DB is connected, all folders exist, `.cursorrules` is active.

---

### ⬜ Phase 1 — Global Foundation (The Feel Layer)
> Goal: No content yet. But the page already feels alive — cursor, scroll, atmosphere, and overlays.

#### 1.1 CSS Foundation
- ⬜ Create `client/src/styles/globals.css` with all design tokens (see design-system.md § 4.1)
- ⬜ Create `client/src/styles/animations.css` with all keyframes (glitch, aberration, blink, flicker, pulseGlow, travelDown, typewriter)
- ⬜ Import both files in `main.tsx`
- ⬜ Set `cursor: none` on `html` globally
- ⬜ Set `overflow-x: hidden` on `html` and `body`
- ⬜ Set `::selection` color to `--color-cyan`
- ⬜ Hide scrollbar via `::-webkit-scrollbar { display: none }`

#### 1.2 Custom Cursor
- ⬜ Create `CustomCursor.tsx` component
- ⬜ Outer ring: 16px circle, cyan border, follows mouse with `transform: translate(-50%, -50%)`
- ⬜ Inner dot: 4px filled cyan circle, follows mouse with no lag
- ⬜ Outer ring has 100ms lag (CSS transition) for trailing effect
- ⬜ On hover over interactive elements (a, button): ring scales to 2x, fills with cyan at 20% opacity
- ⬜ Mount in `App.tsx` outside all sections (always present)
- ⬜ Verify cursor is hidden on mobile (media query)

#### 1.3 Scanline + Noise Overlay
- ⬜ Create `ScanlineOverlay.tsx` component
- ⬜ Fixed position, covers full viewport, `pointer-events: none`
- ⬜ Scanlines: `repeating-linear-gradient` horizontal lines every 4px
- ⬜ Noise: SVG `feTurbulence` filter as a base64 background-image
- ⬜ Subtle flicker animation using `@keyframes flicker` (opacity 1 → 0.85 randomly)
- ⬜ Mount in `App.tsx` (always present, above everything)

#### 1.4 Spotlight Cursor Effect
- ⬜ Create `SpotlightCursor.tsx` component
- ⬜ Large radial gradient (600px radius) following mouse position
- ⬜ Color: `rgba(0, 245, 255, 0.04)` center → transparent
- ⬜ Update position via `mousemove` event listener using CSS custom properties (`--x`, `--y`)
- ⬜ No React state updates on mousemove — use `ref.style.setProperty` for performance
- ⬜ Mount in `App.tsx`

#### 1.5 Lenis Smooth Scroll
- ⬜ Create `client/src/lib/lenis.ts` with Lenis instance and GSAP ticker integration
- ⬜ Initialize Lenis in `App.tsx` via `useEffect`
- ⬜ Verify scroll feels like butter (inertia, deceleration)
- ⬜ Verify GSAP ScrollTrigger works correctly with Lenis (no offset issues)

#### 1.6 GSAP Setup
- ⬜ Create `client/src/lib/gsap.ts` — register ScrollTrigger, set defaults
- ⬜ Test a basic `gsap.from()` animation works on a div
- ⬜ Verify ScrollTrigger `markers: true` shows correctly in dev mode (remove before phase end)

#### 1.7 Scroll Velocity Chromatic Aberration
- ⬜ Create `useScrollVelocity.ts` hook — tracks scroll speed using `window.addEventListener('scroll')`
- ⬜ When velocity exceeds threshold → add CSS class `.aberration` to `document.body`
- ⬜ `.aberration` class applies `animation: aberration 200ms ease-out` from `animations.css`
- ⬜ Remove class after animation completes (`animationend` event)
- ⬜ Test: scroll fast → RGB split appears → settles. Scroll slow → no effect.

#### 1.8 Navbar
- ⬜ Create `NavBar.tsx` — fixed top, backdrop blur, border-bottom
- ⬜ Logo left: `SS` in Orbitron, cyan, letter-spacing 3px
- ⬜ Links center: INITIALIZE / IDENTITY / STACK / WORK / SIGNAL / CONNECT
- ⬜ Each link has `//` prefix in cyan on hover
- ⬜ Sound toggle button right: `[ ♪ SOUND ]` — off by default
- ⬜ Nav hides on scroll down, reappears on scroll up (GSAP + scroll direction detection)
- ⬜ Mobile: hamburger menu → fullscreen overlay nav

#### 1.9 Ambient Sound System
- ⬜ Create `useSound.ts` hook managing a single `Audio` instance
- ⬜ Ambient hum: low-volume looping background audio (source: freesound.org CC0)
- ⬜ UI blip: short click sound on hover events
- ⬜ Sound starts muted — user must opt in via toggle
- ⬜ Preference stored in module-level variable (not localStorage — not supported here)
- ⬜ Hook exposes: `{ isPlaying, toggle, playBlip }`
- ⬜ `SoundToggle.tsx` uses this hook and shows correct state

**Phase 1 Complete when:** Dark page with working cursor, scanlines, smooth scroll, aberration on fast scroll, and navbar. No content yet — just the living environment.

---

### ⬜ Phase 2 — Hero Section (Chapter 00: INITIALIZE)
> Goal: First impression. User lands and is immediately impressed before scrolling.

#### 2.1 Boot Sequence
- ⬜ Create `BootSequence.tsx` component
- ⬜ Shows on top of everything for 2.5 seconds on first load
- ⬜ Three lines type out sequentially using CSS `typewriter` animation:
  - `> INITIALIZING SYSTEM...`
  - `> LOADING PORTFOLIO_v2.0...`
  - `> WELCOME, VISITOR_001`
- ⬜ After 2.5s: fade out with opacity transition, then unmount
- ⬜ Hero content fades in as boot sequence fades out (coordinated with Framer Motion)
- ⬜ Only runs once per session (track with `useRef` flag)

#### 2.2 Particle Field Background
- ⬜ Create `canvas/ParticleField.tsx` using React Three Fiber
- ⬜ 80–100 particles as small Points in 3D space
- ⬜ Particles connected by thin lines when distance < threshold
- ⬜ Particles drift slowly using `useFrame` for animation loop
- ⬜ Mouse position passed as uniform to shader — particles near cursor gently scatter
- ⬜ Particles drift back to original position after cursor leaves area
- ⬜ Color: cyan with low opacity (`rgba(0, 245, 255, 0.6)`)
- ⬜ Particle count reduced to 40 on mobile/tablet via `useMediaQuery`
- ⬜ Canvas positioned absolutely behind all hero content

#### 2.3 Grid Background
- ⬜ Create `canvas/GridBackground.tsx` — CSS-only (no Three.js needed)
- ⬜ Thin cyan grid lines, `opacity: 0.04`, covering full hero
- ⬜ Grid shifts slightly on mouse move (multi-layer parallax — this is the back layer)
- ⬜ Disabled on mobile

#### 2.4 Multi-Layer Parallax
- ⬜ Create `useCursorPosition.ts` hook — returns normalized `{x, y}` from -1 to 1
- ⬜ Uses `ref.style.transform` directly (not React state — no re-renders)
- ⬜ Layer 1 — Grid: moves at 2% of cursor offset
- ⬜ Layer 2 — Particles canvas: moves at 4% of cursor offset
- ⬜ Layer 3 — HUD elements: moves at 6% of cursor offset
- ⬜ Layer 4 — Name/CTA: stays fixed (0% movement)
- ⬜ Disabled on mobile

#### 2.5 Glitch Text — Hero Name
- ⬜ Create `ui/GlitchText.tsx` component
- ⬜ Props: `text`, `intensity` (low/medium/high), `interval` (ms between glitches)
- ⬜ Renders text normally, triggers glitch animation every `interval` ms
- ⬜ Glitch: uses pseudo-elements `::before` and `::after` with offset + cyan/green colors
- ⬜ CSS `@keyframes glitch` from `animations.css`
- ⬜ Hero name: `SHUBHAM SHRIVASTAVA` — Orbitron, `clamp(3rem, 8vw, 7rem)`, white
- ⬜ Glitch interval: every 5 seconds, duration 300ms

#### 2.6 Hero Content Layout
- ⬜ Full viewport height (`100dvh`)
- ⬜ Content centered vertically and horizontally
- ⬜ Tagline below name: `Frontend Engineer  //  2.7 Years  //  Currently: VERTEXC3` in JetBrains Mono
- ⬜ CTA button below tagline: `[ ENTER SYSTEM ]_` with blinking cursor
- ⬜ `NeonButton.tsx` component — cyan border, transparent bg, glow on hover
- ⬜ Bottom-left HUD tag: `LAT: 23.2599° N  LNG: 77.4126° E`
- ⬜ Bottom-right: live clock updating every second via `setInterval`
- ⬜ `HUDTag.tsx` component for small monospace floating labels

#### 2.7 Hero Entry Animation
- ⬜ After boot sequence fades out — hero content animates in with GSAP timeline
- ⬜ Name fades up: `y: 30 → 0`, `opacity: 0 → 1`, duration 800ms
- ⬜ Tagline fades up: 200ms delay after name
- ⬜ CTA button fades up: 400ms delay
- ⬜ HUD tags fade in: 600ms delay
- ⬜ Particle field fades in simultaneously with name

#### 2.8 Scroll Indicator
- ⬜ Subtle animated scroll indicator at very bottom of hero
- ⬜ Small vertical line with a dot traveling down it (CSS animation)
- ⬜ Text: `SCROLL` in 10px Orbitron, letter-spacing 4px, dim color
- ⬜ Fades out once user has scrolled past hero (ScrollTrigger)

**Phase 2 Complete when:** Hero looks exactly as designed, boot sequence runs, parallax works, glitch fires, everything animated in smoothly.

---

### ⬜ Phase 3 — About + Skills Sections (Chapters 01 & 02)
> Goal: User scrolls from hero into their first content — identity and capabilities.

#### 3.1 About Section Structure
- ⬜ Create `sections/About.tsx`
- ⬜ Section heading: `// CHAPTER 01 — IDENTITY` in cyan Orbitron
- ⬜ Two-column layout: photo left, data card right (stacks on mobile)

#### 3.2 Profile Photo
- ⬜ Photo with cyan neon border (box-shadow glow)
- ⬜ Label above: `SUBJECT_001` in 10px green monospace
- ⬜ Label below: `STATUS: ONLINE ●` with pulsing green dot
- ⬜ On hover: brief glitch flicker on photo (filter: glitch keyframe)
- ⬜ Image wrapped in a container that assembles (draws in) on scroll entry via GSAP

#### 3.3 Profile Data Card
- ⬜ Terminal-style readout with `→` separator
- ⬜ All fields from personal.ts data file:
  - NAME, ROLE, EXPERIENCE, CURRENT, LOCATION, EDUCATION, CERT_01, CERT_02
- ⬜ Card border: `1px solid var(--color-border)`
- ⬜ Card assembles line by line on scroll entry (GSAP stagger, each line 80ms delay)
- ⬜ Hover on card: border brightens to full `--color-cyan`

#### 3.4 Stat Counters
- ⬜ Create `useCountUp.ts` hook — animates number from 0 to target when `trigger` is true
- ⬜ Three stat blocks below the two-column layout:
  - `50+` APIs Integrated
  - `15+` Components Built
  - `3` Production Platforms
- ⬜ Numbers in large Orbitron cyan, labels in small monospace dim
- ⬜ Count-up triggers when stats enter viewport (IntersectionObserver in hook)
- ⬜ Duration: 1500ms, easing: `easeOutExpo`

#### 3.5 Skills Section Structure
- ⬜ Create `sections/Skills.tsx`
- ⬜ Section heading: `// CHAPTER 02 — STACK`
- ⬜ Four module panels in a 2x2 grid (stacks to 1 column on mobile)

#### 3.6 Skill Module Panels
- ⬜ Each panel: dark background, cyan border, panel title in Orbitron
- ⬜ Panel titles: `FRAMEWORKS`, `LANGUAGES`, `FRONTEND TOOLS`, `TOOLING & CLOUD`
- ⬜ Skills as pill badges inside each panel
- ⬜ Badge: dark bg, cyan border, monospace text, glow on hover
- ⬜ Tooltip on hover: 1-line description (stored in `skills.ts` data)
- ⬜ Panels stagger in on scroll: each panel 150ms after the previous
- ⬜ Inside each panel, badges stagger in 50ms apart

**Phase 3 Complete when:** About card assembles smoothly, counters count up, all 4 skill panels stagger in correctly.

---

### ⬜ Phase 4 — Projects + Experience Sections (Chapters 03 & 04)
> Goal: The meat of the portfolio — real work, real impact numbers, real interactions.

#### 4.1 Projects Section Structure
- ⬜ Create `sections/Projects.tsx`
- ⬜ Section heading: `// CHAPTER 03 — WORK LOG`
- ⬜ Load project data from `client/src/data/projects.ts` (static for now — API in Phase 10)
- ⬜ Display 4 project cards in vertical stack (full-width on desktop, single column on mobile)

#### 4.2 Project Card Component
- ⬜ Create reusable `ProjectCard.tsx` (inside `components/ui/`)
- ⬜ Props: `project: Project`, `viewCount?: number`
- ⬜ Card layout:
  - Top-left: client label in dim monospace
  - Main: project title in large Orbitron
  - Middle: impact bullet points with `>` prefix
  - Bottom: tech tag pills
  - Bottom-right: view counter placeholder `VIEWED BY — PEOPLE` (— until API loads)
  - Bottom-right: `[ VIEW PROJECT ]` button (links to liveUrl or githubUrl)
- ⬜ Card border uses `accentColor` from project data (cyan / green / mixed)
- ⬜ Card type label: `CLIENT PROJECT` or `PERSONAL PROJECT` in top-right corner

#### 4.3 3D Magnetic Card Tilt
- ⬜ Each card responds to `mousemove` inside its bounds
- ⬜ `rotateX` and `rotateY` calculated from cursor position relative to card center
- ⬜ Max rotation: 8 degrees in any direction
- ⬜ `transform-style: preserve-3d` on card container
- ⬜ Smooth return to `rotateX(0) rotateY(0)` on `mouseleave` (300ms transition)
- ⬜ Neon border glow intensifies during tilt
- ⬜ Disabled on mobile/touch devices

#### 4.4 Card Scroll Reveal
- ⬜ Cards start: `opacity: 0`, `y: 60px`
- ⬜ Each card animates in with ScrollTrigger when it enters viewport
- ⬜ Stagger: 200ms between cards

#### 4.5 Experience Section Structure
- ⬜ Create `sections/Experience.tsx`
- ⬜ Section heading: `// CHAPTER 04 — SIGNAL`
- ⬜ Vertical timeline centered on page (shifts left on mobile)

#### 4.6 Timeline Component
- ⬜ Vertical line: `2px solid var(--color-border)` running top to bottom
- ⬜ Animated pulse dot: absolute positioned circle, `animation: travelDown` loops
- ⬜ Dot glows with `--glow-cyan`, travels down the full line height, then restarts
- ⬜ Timeline entries from `experience.ts` data file

#### 4.7 Timeline Entry Animation
- ⬜ Each entry: date left, content right (or alternating on desktop)
- ⬜ Entry content: role/title in Orbitron, company in cyan, date range in dim mono
- ⬜ Entries start invisible, type themselves in when ScrollTrigger fires
- ⬜ Typing effect: `typewriter` CSS animation on each line
- ⬜ Stagger: 100ms between lines within each entry, 300ms between entries

**Phase 4 Complete when:** All project cards render with tilt, experience timeline animates correctly with pulse dot.

---

### ⬜ Phase 5 — Contact + Easter Egg (Chapter 05)
> Goal: End of the story — memorable finish and the hidden terminal that people share.

#### 5.1 Contact Section Structure
- ⬜ Create `sections/Contact.tsx`
- ⬜ Full viewport height section
- ⬜ Section heading: `// CHAPTER 05 — CONNECT`

#### 5.2 Glitch Headline
- ⬜ Massive text: `LET'S BUILD` line 1, `SOMETHING.` line 2
- ⬜ Font: Orbitron, `clamp(3.5rem, 9vw, 8rem)`, white
- ⬜ `SOMETHING` cycles through words every 3 seconds: `GREAT` → `REAL` → `TOGETHER` → `SOMETHING`
- ⬜ Word transition: glitch effect fires between each word swap
- ⬜ Implemented with `GlitchText.tsx` + a `setInterval` for word cycling

#### 5.3 Contact Links (Terminal Style)
- ⬜ Four lines that type themselves in sequentially on scroll entry:
  - `$ open --mail    shubhamshrivastava2213@gmail.com`
  - `$ open --github  github.com/shubham2213`
  - `$ open --linkedin linkedin.com/in/shubham-shrivastava6515`
  - `$ curl --resume  Shubham_Shrivastava_Resume.pdf  [ DOWNLOAD ]`
- ⬜ Each line is a real clickable link
- ⬜ `[ DOWNLOAD ]` triggers the backend resume endpoint
- ⬜ Hover on each line: full line brightens to cyan
- ⬜ Typewriter animation: lines appear 400ms apart

#### 5.4 Contact Form
- ⬜ Below the terminal links: a minimal contact form
- ⬜ Fields: Name, Email, Message (all styled as terminal input fields)
- ⬜ Input style: no border-radius, bottom border only in cyan, dark background, monospace font
- ⬜ Submit button: `[ TRANSMIT MESSAGE ]_`
- ⬜ On submit: loading state shows `> TRANSMITTING...` with blinking cursor
- ⬜ On success: shows `> MESSAGE TRANSMITTED ✓` in green
- ⬜ On error: shows `> TRANSMISSION FAILED. RETRY.` in red-ish
- ⬜ Form calls `POST /api/contact` (wired to static handler for now, real API in Phase 10)

#### 5.5 Footer
- ⬜ Below contact section
- ⬜ Left: `© SHUBHAM SHRIVASTAVA`
- ⬜ Right: `BUILT WITH REACT + NODE.JS + PostgreSQL`
- ⬜ Both in 11px dim monospace
- ⬜ Center: row of nav links

#### 5.6 Terminal Easter Egg
- ⬜ Create `ui/TerminalEasterEgg.tsx`
- ⬜ Global `keydown` event listener for `/` or `Ctrl+K` — opens terminal
- ⬜ `Escape` closes terminal
- ⬜ Panel slides up from bottom of screen (Framer Motion `y: 100% → 0`)
- ⬜ Terminal header: `SHUBHAM_OS v1.0 — TYPE 'help' FOR COMMANDS`
- ⬜ Input field at bottom: blinking green cursor
- ⬜ Command history scrolls above input
- ⬜ Supported commands:
  - `help` → lists all commands with descriptions
  - `ls projects` → lists all 4 projects
  - `cat about.txt` → outputs bio text from `personal.ts`
  - `contact --email` → opens `mailto:` link
  - `download resume` → triggers resume download endpoint
  - `clear` → clears terminal output
  - Unknown command → `> command not found: [input]`
- ⬜ Mount in `App.tsx` (always available regardless of scroll position)

**Phase 5 Complete when:** Contact section looks cinematic, form works (even with mock), terminal opens, all commands respond correctly.

---

### ⬜ Phase 6 — UI Polish & Responsive
> Goal: Everything works. Now make it perfect.

#### 6.1 Mobile Responsive Pass
- ⬜ Hero: single column, font size reduced, no parallax, no particle field (or very low count)
- ⬜ About: stacked layout (photo top, data card below)
- ⬜ Skills: single column panels
- ⬜ Projects: single column, no 3D tilt
- ⬜ Experience: left-aligned timeline (not centered)
- ⬜ Contact: reduced font sizes, form full width
- ⬜ Nav: hamburger menu working
- ⬜ Custom cursor: hidden on touch devices
- ⬜ All animations still play on mobile (just simplified)

#### 6.2 Cross-Browser Testing
- ⬜ Chrome (latest) — full test
- ⬜ Firefox (latest) — full test
- ⬜ Safari (if available) — check for webkit-specific issues
- ⬜ Edge (latest) — smoke test

#### 6.3 Performance Audit
- ⬜ Run Lighthouse audit in Chrome DevTools
- ⬜ Performance score: target 90+
- ⬜ Three.js canvas: lazy-loaded, not blocking initial paint
- ⬜ Images: optimized, correct formats (WebP preferred)
- ⬜ Fonts: subset via Google Fonts `display=swap`
- ⬜ GSAP ScrollTrigger: initialized after mount (no SSR issues)
- ⬜ No unused CSS — Tailwind v4 purges by default
- ⬜ Bundle size: analyze with `vite-bundle-visualizer`

#### 6.4 Accessibility Pass
- ⬜ All interactive elements reachable via keyboard (`Tab` key)
- ⬜ `aria-label` on icon-only buttons (sound toggle, close buttons)
- ⬜ `prefers-reduced-motion` media query — disable GSAP animations for users who opt out
- ⬜ Color contrast: all text meets WCAG AA against dark background
- ⬜ Focus styles visible (neon outline)

#### 6.5 Final UI Details
- ⬜ Verify all section heading numbers are correct (00–05)
- ⬜ Verify all data from `data/` files renders correctly in all sections
- ⬜ Remove all `console.log` statements
- ⬜ Remove all GSAP `markers: true` debug lines
- ⬜ Verify no placeholder/lorem ipsum text remains
- ⬜ Verify all external links open in `_blank` with `rel="noopener noreferrer"`
- ⬜ Verify resume PDF is placed in `client/public/` and accessible

**Phase 6 Complete when:** Lighthouse 90+, works on mobile, no console errors, zero placeholder content.

---

### ⬜ Phase 7 — Backend Foundation
> Goal: Express server running, properly structured, connected to DB, no routes yet.

#### 7.1 Express App Structure
- ⬜ Entry point `server/src/index.ts` complete (see requirements.prd.md § 3.7)
- ⬜ Helmet middleware active
- ⬜ CORS configured with `CLIENT_ORIGIN` env variable
- ⬜ Rate limiter applied to all `/api` routes
- ⬜ Global error handler middleware created

#### 7.2 Error Handler Middleware
- ⬜ Create `server/src/middleware/errorHandler.ts`
- ⬜ Catches all unhandled errors from route handlers
- ⬜ Returns consistent JSON: `{ success: false, error: "message" }`
- ⬜ Logs error to console in development
- ⬜ Never exposes stack traces in production

#### 7.3 Validation Middleware
- ⬜ Create `server/src/middleware/validate.ts`
- ⬜ Takes a Zod schema, returns Express middleware
- ⬜ Validates `req.body` against schema
- ⬜ On failure: returns 400 with field-level error details
- ⬜ On success: calls `next()`

#### 7.4 Prisma Singleton
- ⬜ Create `server/src/lib/prisma.ts` (see requirements.prd.md § 3.8)
- ⬜ Verify connection: test query with `prisma.project.findMany()`

#### 7.5 Database Seeding
- ⬜ Create `server/prisma/seed.ts`
- ⬜ Seeds all 4 projects with real data matching `client/src/data/projects.ts`
- ⬜ Seeds all skills
- ⬜ Run: `npm run db:seed`
- ⬜ Verify data appears in Prisma Studio

**Phase 7 Complete when:** Server starts, connects to DB, seeded data visible in Prisma Studio.

---

### ⬜ Phase 8 — API Development
> Goal: All 4 endpoints built, tested with Postman, returning correct responses.

#### 8.1 Projects Route
- ⬜ Create `server/src/routes/projects.ts`
- ⬜ Create `server/src/controllers/projects.controller.ts`
- ⬜ `GET /api/projects` — fetch all projects ordered by `createdAt` desc
- ⬜ Returns `ApiResponse<ProjectDTO[]>`
- ⬜ Test in Postman: returns seeded projects with viewsCount

#### 8.2 Views Route
- ⬜ Create `server/src/routes/views.ts`
- ⬜ Create `server/src/controllers/views.controller.ts`
- ⬜ `POST /api/views/:projectId` — find project by slug, increment `viewsCount` by 1
- ⬜ Returns `{ success: true, data: { viewsCount: N } }`
- ⬜ Returns 404 if slug not found
- ⬜ Test in Postman: call twice, verify count increments

#### 8.3 Contact Route
- ⬜ Create `server/src/routes/contact.ts`
- ⬜ Create `server/src/controllers/contact.controller.ts`
- ⬜ Define Zod schema for contact payload (name, email, message with rules from PRD)
- ⬜ Apply `contactLimiter` rate limit (5 messages per hour per IP)
- ⬜ Apply `validate` middleware with Zod schema
- ⬜ On valid: save to `messages` table, return 201
- ⬜ Test in Postman: valid payload → 201. Invalid email → 400 with field error.

#### 8.4 Resume Route
- ⬜ Create `server/src/routes/resume.ts`
- ⬜ Create `server/src/controllers/resume.controller.ts`
- ⬜ Place `Shubham_Shrivastava_Resume.pdf` in `server/public/`
- ⬜ Hash requester IP with `crypto.createHash('sha256')`
- ⬜ Save log entry to `resume_logs` table
- ⬜ Stream PDF file with correct Content-Type and Content-Disposition headers
- ⬜ Return 404 if file missing
- ⬜ Test in Postman: file downloads, log entry appears in Prisma Studio

**Phase 8 Complete when:** All 4 endpoints tested and working in Postman. DB records confirmed.

---

### ⬜ Phase 9 — Frontend ↔ Backend Integration
> Goal: Replace all static/mock data with real API calls. Live view counters. Working contact form.

#### 9.1 Projects API Integration
- ⬜ In `Projects.tsx`: replace static `projects` import with `useEffect` + Axios call to `GET /api/projects`
- ⬜ Loading state: show skeleton cards (dim pulsing placeholder blocks) while fetching
- ⬜ Error state: show `> FAILED TO LOAD PROJECTS` terminal-style error message
- ⬜ Successful load: project cards render with real `viewsCount` from DB
- ⬜ On mount of each project card: fire `POST /api/views/:slug` to increment count
- ⬜ Verify: view count in DB increases each time the projects section is viewed

#### 9.2 Contact Form Integration
- ⬜ In `Contact.tsx`: replace mock form handler with Axios `POST /api/contact`
- ⬜ Loading state: `> TRANSMITTING...` with blinking cursor
- ⬜ Success: `> MESSAGE TRANSMITTED ✓` in green
- ⬜ Validation error (400): show field-specific error messages in red below each input
- ⬜ Rate limit error (429): `> TOO MANY MESSAGES. TRY AGAIN LATER.`
- ⬜ Network error (500): `> TRANSMISSION FAILED. RETRY.`
- ⬜ Test end-to-end: submit form, verify message in Prisma Studio

#### 9.3 Resume Download Integration
- ⬜ In `Contact.tsx`: resume download button calls `GET /api/resume/download` via Axios with `responseType: 'blob'`
- ⬜ Frontend creates an object URL and triggers download programmatically
- ⬜ On click: brief terminal message `> DOWNLOADING RESUME...`
- ⬜ Test end-to-end: click download, file downloads, log entry appears in Prisma Studio

#### 9.4 Terminal Easter Egg Integration
- ⬜ `download resume` command in terminal calls the same resume endpoint
- ⬜ `ls projects` command fetches from projects API (or uses already-loaded state)
- ⬜ Verify all terminal commands work with real data

**Phase 9 Complete when:** Every API call works end-to-end. No mock data remains. All states (loading/error/success) handled.

---

### ⬜ Phase 10 — Final Testing & Pre-Deploy
> Goal: Everything is perfect before going live.

#### 10.1 End-to-End Test
- ⬜ Full user journey test: land → scroll all 6 chapters → submit contact → download resume → open terminal
- ⬜ Verify no visual regressions from API integration
- ⬜ Verify boot sequence still runs correctly
- ⬜ Verify all GSAP animations still fire correctly
- ⬜ Verify terminal easter egg works in all sections

#### 10.2 Final Performance Check
- ⬜ Lighthouse score: Performance 90+, Accessibility 90+, Best Practices 90+, SEO 90+
- ⬜ First Contentful Paint: under 1.5s
- ⬜ No layout shift (CLS score near 0)
- ⬜ Fonts loaded without flash

#### 10.3 SEO & Meta
- ⬜ `<title>` tag: `Shubham Shrivastava — Frontend Engineer`
- ⬜ `<meta name="description">` — 150 char description
- ⬜ Open Graph tags for social sharing preview
- ⬜ Favicon created and linked (small `SS` monogram in cyan)
- ⬜ `robots.txt` allowing indexing

#### 10.4 Environment Variables Audit
- ⬜ All `client/.env` values confirmed for production
- ⬜ All `server/.env` values confirmed for production
- ⬜ No secrets committed to Git (verify with `git log`)
- ⬜ `.env` files in `.gitignore`

**Phase 10 Complete when:** Everything tested, Lighthouse green, SEO done, no secrets in repo.

---

### ⬜ Phase 11 — Deployment
> Goal: Live at shubhamshrivastava.dev.

#### 11.1 Backend Deploy (Railway)
- ⬜ Push `server/` to GitHub
- ⬜ Create new Railway project, connect GitHub repo
- ⬜ Set root directory to `server/`
- ⬜ Set start command: `npm run build && npm start`
- ⬜ Add all production environment variables
- ⬜ Run `npx prisma migrate deploy` against production DB
- ⬜ Copy Railway public URL
- ⬜ Test all 4 endpoints via Postman against production URL

#### 11.2 Frontend Deploy (Vercel)
- ⬜ Push `client/` to GitHub
- ⬜ Import repo in Vercel, set root directory to `client/`
- ⬜ Set build command: `npm run build`, output: `dist`
- ⬜ Add `VITE_API_BASE_URL` = Railway backend URL
- ⬜ Deploy and verify live URL works

#### 11.3 Domain Setup
- ⬜ Purchase `shubhamshrivastava.dev` domain
- ⬜ Point domain to Vercel via DNS settings
- ⬜ Verify HTTPS is active (Vercel handles SSL automatically)
- ⬜ Update `CLIENT_ORIGIN` in Railway env variables to `https://shubhamshrivastava.dev`
- ⬜ Redeploy backend with updated CORS origin

#### 11.4 Post-Launch Verification
- ⬜ Open `https://shubhamshrivastava.dev` in fresh browser (incognito)
- ⬜ Run full user journey test on production
- ⬜ Submit a test contact form — verify it saves to production DB
- ⬜ Download resume — verify log entry in production DB
- ⬜ Test on mobile device (not emulator — real device)
- ⬜ Share URL with one person and get their reaction

**Phase 11 Complete when:** Live at `shubhamshrivastava.dev`, all features working in production, tested on real mobile.**

---

## 📁 6. Recommended Folder Structure

```
shubhamshrivastava.dev/
│
├── client/                              ← Frontend (Vite + React + TypeScript)
│   ├── public/
│   │   ├── favicon.ico
│   │   └── Shubham_Shrivastava_Resume.pdf
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── GlitchText.tsx
│   │   │   │   ├── NeonButton.tsx
│   │   │   │   ├── CustomCursor.tsx
│   │   │   │   ├── ScanlineOverlay.tsx
│   │   │   │   ├── SpotlightCursor.tsx
│   │   │   │   ├── HUDTag.tsx
│   │   │   │   ├── BootSequence.tsx
│   │   │   │   ├── TerminalEasterEgg.tsx
│   │   │   │   ├── NavBar.tsx
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   └── SoundToggle.tsx
│   │   │   ├── sections/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── About.tsx
│   │   │   │   ├── Skills.tsx
│   │   │   │   ├── Projects.tsx
│   │   │   │   ├── Experience.tsx
│   │   │   │   └── Contact.tsx
│   │   │   └── canvas/
│   │   │       ├── ParticleField.tsx
│   │   │       └── GridBackground.tsx
│   │   ├── hooks/
│   │   │   ├── useGlitch.ts
│   │   │   ├── useScrollProgress.ts
│   │   │   ├── useCursorPosition.ts
│   │   │   ├── useSound.ts
│   │   │   ├── useCountUp.ts
│   │   │   └── useScrollVelocity.ts
│   │   ├── lib/
│   │   │   ├── gsap.ts
│   │   │   ├── lenis.ts
│   │   │   ├── axios.ts
│   │   │   └── constants.ts
│   │   ├── data/
│   │   │   ├── projects.ts
│   │   │   ├── skills.ts
│   │   │   ├── experience.ts
│   │   │   └── personal.ts
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   ├── animations.css
│   │   │   └── fonts.css
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── .env
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── package.json
│
├── server/                              ← Backend (Node.js + Express + TypeScript)
│   ├── public/
│   │   └── Shubham_Shrivastava_Resume.pdf
│   ├── src/
│   │   ├── routes/
│   │   │   ├── projects.ts
│   │   │   ├── views.ts
│   │   │   ├── contact.ts
│   │   │   └── resume.ts
│   │   ├── controllers/
│   │   │   ├── projects.controller.ts
│   │   │   ├── views.controller.ts
│   │   │   ├── contact.controller.ts
│   │   │   └── resume.controller.ts
│   │   ├── middleware/
│   │   │   ├── errorHandler.ts
│   │   │   ├── validate.ts
│   │   │   └── rateLimiter.ts
│   │   ├── lib/
│   │   │   └── prisma.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   ├── .env
│   ├── tsconfig.json
│   └── package.json
│
├── shared/                              ← Shared TypeScript types
│   └── types.ts
│
├── docs/                                ← All planning documents
│   ├── project-overview.md
│   ├── requirements.prd.md
│   ├── roadmap.md                      ← This file
│   ├── design-system.md
│   └── content.md
│
├── .cursorrules
├── .gitignore
└── README.md
```

---

## 🔒 7. Non-Functional Requirements (From PRD)

### 7.1 Performance
- ⬜ Lighthouse Performance score: 90+
- ⬜ First Contentful Paint: < 1.5 seconds
- ⬜ Three.js canvas: lazy loaded, does not block initial paint
- ⬜ GSAP ScrollTrigger: initialized after hydration only
- ⬜ No layout shift (CLS: < 0.1)
- ⬜ Fonts: subset loaded with `display=swap`

### 7.2 Security
- ⬜ Helmet.js active on all API responses
- ⬜ CORS restricted to `CLIENT_ORIGIN` only
- ⬜ All request bodies validated with Zod before any DB operation
- ⬜ Raw IP addresses never stored — SHA-256 hash only
- ⬜ Rate limiting on all API routes (100 req / 15 min general, 5 / hour for contact)
- ⬜ No secrets in client-side code or Git history
- ⬜ Error messages never expose internal stack traces in production

### 7.3 Reliability
- ⬜ Global error handler catches all unhandled Express errors
- ⬜ All API call states handled: loading, success, error
- ⬜ Backend unavailable: frontend degrades gracefully (static data shown, no crashes)
- ⬜ Form submission: idempotent — submitting twice shows error, doesn't double-save

### 7.4 Accessibility
- ⬜ `prefers-reduced-motion`: all GSAP and CSS animations disabled
- ⬜ Keyboard navigable: all interactive elements reachable via Tab
- ⬜ Focus styles: visible neon outline
- ⬜ WCAG AA color contrast for all text
- ⬜ Semantic HTML: proper heading hierarchy (h1 → h2 → h3)
- ⬜ `aria-label` on all icon-only or non-obvious interactive elements

### 7.5 Maintainability
- ⬜ All content in `client/src/data/` — no hardcoded text in components
- ⬜ All colors/tokens in `globals.css` — no hardcoded hex values in components
- ⬜ `.cursorrules` ensures AI models follow project conventions in every session
- ⬜ TypeScript strict mode — no `any` types anywhere

---

## 📊 8. Progress Summary

> Update this table at the end of every work session.

| Phase | Name | Status | Completion |
|---|---|---|---|
| Phase 0 | Project Setup | ⬜ Not Started | 0% |
| Phase 1 | Global Foundation | ⬜ Not Started | 0% |
| Phase 2 | Hero Section | ⬜ Not Started | 0% |
| Phase 3 | About + Skills | ⬜ Not Started | 0% |
| Phase 4 | Projects + Experience | ⬜ Not Started | 0% |
| Phase 5 | Contact + Easter Egg | ⬜ Not Started | 0% |
| Phase 6 | UI Polish + Responsive | ⬜ Not Started | 0% |
| Phase 7 | Backend Foundation | ⬜ Not Started | 0% |
| Phase 8 | API Development | ⬜ Not Started | 0% |
| Phase 9 | Frontend ↔ Backend Integration | ⬜ Not Started | 0% |
| Phase 10 | Final Testing + Pre-Deploy | ⬜ Not Started | 0% |
| Phase 11 | Deployment | ⬜ Not Started | 0% |

**Overall: 0 / 12 Phases Complete**

---

## 📝 9. Notes & Decisions

> Add a new entry here whenever a technical decision is made during development.
> Format: `[DATE] — Decision — Reason`

| Date | Decision | Reason |
|---|---|---|
| Pre-build | Use Vite over Next.js | Familiar tooling, faster velocity, no SSR needed for portfolio |
| Pre-build | Use PostgreSQL over MongoDB | Relational data fits perfectly, more impressive on resume |
| Pre-build | UI-first development | Most visible work done first, UI never blocked by backend |
| Pre-build | No admin dashboard in v1 | Keeps scope manageable, planned for v2 |
| Pre-build | Contact saves to DB only (no email) | Simpler v1 scope, email notifications planned for v2 |
| Pre-build | Separate .env files for client and server | Cleaner separation, different variables needed in each |
| Pre-build | Lenis + GSAP over CSS scroll-snap | More control, better performance, professional scroll feel |
| Pre-build | React Three Fiber for particles | Cleaner React integration than raw Three.js |

---

## 🔄 10. Changelog

> Log every meaningful change to the project here.
> This is the living history of the project.

```
[DATE] — v1.0.0 — Project planning complete. All 6 documentation files created.
                   Tech stack finalized. Ready to begin Phase 0.
```

---

*Document version: 1.0*
*Total phases: 12*
*Total tracked tasks: 150+*
*Always update this file. Never let it go stale.*
