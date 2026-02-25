# Requirements — shubhamshrivastava.dev
# Product Requirements Document (PRD)

> Read project-overview.md first for full context.  
> This document defines every technical requirement needed to build the project.  
> Node.js version: 24.14.0

---

## 1. Monorepo Structure

```
shubhamshrivastava.dev/
├── client/                  ← Vite + React + TypeScript (frontend)
├── server/                  ← Node.js + Express + TypeScript (backend)
├── shared/                  ← Shared TypeScript types (used by both)
├── .cursorrules             ← Cursor IDE rules
├── .gitignore
└── README.md
```

Initialize as a single Git repository. `client/` and `server/` are independent Node projects, each with their own `package.json`, `tsconfig.json`, and `.env`.

---

## 2. Frontend — client/

### 2.1 Initialize

```bash
npm create vite@latest client -- --template react-ts
cd client
```

### 2.2 All Packages to Install

#### Core Dependencies
```bash
npm install \
  axios \
  framer-motion \
  gsap \
  @gsap/react \
  lenis \
  three \
  @react-three/fiber \
  @react-three/drei \
  react-router-dom \
  clsx
```

#### Tailwind CSS v4
```bash
npm install tailwindcss @tailwindcss/vite
```

#### Font Loading
```bash
npm install vite-plugin-webfont-dl
```

#### Dev Dependencies
```bash
npm install -D \
  @types/three \
  @types/node \
  autoprefixer \
  eslint \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser
```

### 2.3 Vite Config — client/vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../shared'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
})
```

### 2.4 TypeScript Config — client/tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@shared/*": ["../shared/*"]
    }
  },
  "include": ["src"]
}
```

### 2.5 Environment Variables — client/.env

```env
VITE_API_BASE_URL=http://localhost:4000/api
```

Production:
```env
VITE_API_BASE_URL=https://your-railway-backend-url.railway.app/api
```

### 2.6 Folder Structure — client/src/

```
src/
├── components/
│   ├── ui/                        ← Reusable atomic components
│   │   ├── GlitchText.tsx         ← Text with glitch animation, accepts intensity prop
│   │   ├── NeonButton.tsx         ← Cyan bordered button with glow hover
│   │   ├── CustomCursor.tsx       ← Crosshair cursor that replaces browser default
│   │   ├── ScanlineOverlay.tsx    ← Fixed scanline + noise texture over entire page
│   │   ├── SpotlightCursor.tsx    ← Radial gradient spotlight that follows mouse
│   │   ├── HUDTag.tsx             ← Floating coordinate/label UI element
│   │   ├── BootSequence.tsx       ← Terminal boot animation on initial load
│   │   ├── TerminalEasterEgg.tsx  ← Ctrl+K terminal overlay with command handling
│   │   ├── NavBar.tsx             ← Fixed top nav with logo, links, sound toggle
│   │   └── SoundToggle.tsx        ← Ambient sound on/off button
│   │
│   ├── sections/                  ← The 6 chapters, each self-contained
│   │   ├── Hero.tsx               ← Chapter 00: INITIALIZE
│   │   ├── About.tsx              ← Chapter 01: IDENTITY
│   │   ├── Skills.tsx             ← Chapter 02: STACK
│   │   ├── Projects.tsx           ← Chapter 03: WORK LOG
│   │   ├── Experience.tsx         ← Chapter 04: SIGNAL
│   │   └── Contact.tsx            ← Chapter 05: CONNECT
│   │
│   └── canvas/                    ← All Three.js / WebGL isolated here
│       ├── ParticleField.tsx      ← Interactive particle network in hero background
│       └── GridBackground.tsx     ← Subtle animated grid behind particles
│
├── hooks/
│   ├── useGlitch.ts               ← Glitch effect logic, returns trigger function
│   ├── useScrollProgress.ts       ← Returns 0–1 scroll progress for a ref element
│   ├── useCursorPosition.ts       ← Returns { x, y } mouse position, normalized
│   ├── useSound.ts                ← Ambient audio + UI sound effect management
│   ├── useCountUp.ts              ← Animates a number from 0 to target on trigger
│   └── useScrollVelocity.ts       ← Returns scroll speed, used for aberration effect
│
├── lib/
│   ├── gsap.ts                    ← GSAP init, ScrollTrigger.register(), defaults
│   ├── lenis.ts                   ← Lenis instance init, integrates with GSAP ticker
│   ├── axios.ts                   ← Axios instance with baseURL from env
│   └── constants.ts               ← Colors, breakpoints, animation durations, easing
│
├── data/                          ← Static content — all real data lives here
│   ├── projects.ts                ← Project list with title, desc, tags, urls
│   ├── skills.ts                  ← Skills grouped by category
│   ├── experience.ts              ← Work history and education timeline
│   └── personal.ts                ← Name, bio, contact links, certifications
│
├── styles/
│   ├── globals.css                ← CSS variables, base resets, Tailwind imports
│   ├── animations.css             ← Glitch keyframes, scanline, flicker, typewriter
│   └── fonts.css                  ← Font face declarations
│
├── types/
│   └── index.ts                   ← Frontend-specific TypeScript interfaces
│
├── App.tsx                        ← Root component, mounts all sections in order
└── main.tsx                       ← Entry point, StrictMode, renders App
```

### 2.7 Design Tokens — client/src/styles/globals.css

```css
@import "tailwindcss";
@import "./animations.css";

:root {
  /* Colors */
  --color-bg:          #050505;
  --color-panel:       #0a0a0a;
  --color-cyan:        #00f5ff;
  --color-green:       #39ff14;
  --color-text:        #c8c8c8;
  --color-text-dim:    #555555;
  --color-border:      rgba(0, 245, 255, 0.15);
  --color-border-dim:  rgba(0, 245, 255, 0.06);

  /* Glow effects */
  --glow-cyan:   0 0 10px rgba(0, 245, 255, 0.4), 0 0 30px rgba(0, 245, 255, 0.15);
  --glow-green:  0 0 10px rgba(57, 255, 20, 0.4),  0 0 30px rgba(57, 255, 20, 0.15);

  /* Typography */
  --font-display: 'Orbitron', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;

  /* Spacing scale (8px base) */
  --space-1:  8px;
  --space-2:  16px;
  --space-3:  24px;
  --space-4:  32px;
  --space-6:  48px;
  --space-8:  64px;
  --space-12: 96px;
  --space-16: 128px;

  /* Animation */
  --duration-fast:   150ms;
  --duration-base:   300ms;
  --duration-slow:   600ms;
  --duration-glacial: 1200ms;
  --ease-out-expo:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:     cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-mono);
  overflow-x: hidden;
  cursor: none;
}

body {
  min-height: 100vh;
  overflow-x: hidden;
}

::selection {
  background: var(--color-cyan);
  color: var(--color-bg);
}

::-webkit-scrollbar { display: none; }
```

### 2.8 Animation Keyframes — client/src/styles/animations.css

```css
/* Glitch effect */
@keyframes glitch {
  0%   { clip-path: inset(20% 0 60% 0); transform: translate(-4px, 0); }
  20%  { clip-path: inset(60% 0 10% 0); transform: translate(4px, 0); }
  40%  { clip-path: inset(40% 0 40% 0); transform: translate(-2px, 0); color: var(--color-cyan); }
  60%  { clip-path: inset(10% 0 80% 0); transform: translate(2px, 0); }
  80%  { clip-path: inset(80% 0 5%  0); transform: translate(-3px, 0); color: var(--color-green); }
  100% { clip-path: inset(0% 0 0%  0); transform: translate(0, 0); }
}

/* Chromatic aberration on fast scroll */
@keyframes aberration {
  0%   { filter: none; }
  25%  { filter: drop-shadow(2px 0 0 rgba(255,0,0,0.5)) drop-shadow(-2px 0 0 rgba(0,255,255,0.5)); }
  50%  { filter: drop-shadow(-3px 0 0 rgba(255,0,0,0.4)) drop-shadow(3px 0 0 rgba(0,255,255,0.4)); }
  75%  { filter: drop-shadow(1px 0 0 rgba(255,0,0,0.3)) drop-shadow(-1px 0 0 rgba(0,255,255,0.3)); }
  100% { filter: none; }
}

/* Cursor blink */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

/* Scanline flicker */
@keyframes flicker {
  0%, 95%, 100% { opacity: 1; }
  96%            { opacity: 0.85; }
  97%            { opacity: 1; }
  98%            { opacity: 0.9; }
}

/* Pulse glow */
@keyframes pulseGlow {
  0%, 100% { box-shadow: var(--glow-cyan); }
  50%       { box-shadow: 0 0 20px rgba(0,245,255,0.7), 0 0 60px rgba(0,245,255,0.3); }
}

/* Timeline pulse dot */
@keyframes travelDown {
  0%   { top: 0%; opacity: 1; }
  95%  { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

/* Text typewriter */
@keyframes typewriter {
  from { width: 0; }
  to   { width: 100%; }
}
```

### 2.9 Static Data Shape — client/src/data/projects.ts

```ts
export interface Project {
  id: string
  title: string
  client: string
  type: 'client' | 'personal'
  description: string
  impact: string[]
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  accentColor: 'cyan' | 'green' | 'mixed'
  viewCount?: number        // populated from API, undefined while loading
}

export const projects: Project[] = [
  {
    id: 'amis-portal',
    title: 'AMIS Portal',
    client: 'VERTEXC3 → AMIS',
    type: 'client',
    description: 'Two production-grade portals with interactive prototypes, modular architecture, and secure authentication.',
    impact: [
      '50+ RESTful APIs integrated with React Query',
      '15+ reusable TypeScript components',
      'Secure auth and RBAC implemented',
    ],
    tags: ['React.js', 'TypeScript', 'React Query', 'Tailwind CSS', 'GitHub Actions', 'Vercel'],
    accentColor: 'cyan',
  },
  {
    id: 'teleperson',
    title: 'Teleperson Platforms',
    client: 'VERTEXC3 → Teleperson',
    type: 'client',
    description: 'Three production platforms — Customer, Corporate, Enterprise B2B — in a shared scalable architecture.',
    impact: [
      '3 platforms with multiple user roles',
      '30–35% reduction in UI-related API failure tickets',
      'Shared ShadCN component library across teams',
    ],
    tags: ['React.js', 'TypeScript', 'ShadCN UI', 'Axios', 'React Query', 'Redux'],
    accentColor: 'green',
  },
  {
    id: 'peregrine',
    title: 'Peregrine Website',
    client: 'VERTEXC3 → Peregrine',
    type: 'client',
    description: 'Figma designs converted to a pixel-perfect, fully responsive Webflow website.',
    impact: [
      'Pixel-perfect Figma → Webflow implementation',
      'Cross-device compatibility verified',
      'Performance and accessibility best practices applied',
    ],
    tags: ['Webflow', 'Figma', 'Responsive Design', 'Accessibility'],
    accentColor: 'mixed',
  },
  {
    id: 'shopping-app',
    title: 'Shopping App',
    client: 'Personal Project',
    type: 'personal',
    description: 'Functional React shopping application with cart, navigation, and live API data.',
    impact: [
      'Context API + useReducer for global state',
      'React Router for seamless navigation',
      'Axios for API integration',
    ],
    tags: ['React.js', 'Context API', 'React Router', 'Axios', 'Responsive'],
    githubUrl: 'https://github.com/shubham2213',
    accentColor: 'cyan',
  },
]
```

### 2.10 Axios Instance — client/src/lib/axios.ts

```ts
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
```

### 2.11 GSAP + Lenis Init — client/src/lib/gsap.ts

```ts
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

gsap.defaults({
  ease: 'power3.out',
  duration: 0.8,
})

export { gsap, ScrollTrigger }
```

```ts
// client/src/lib/lenis.ts
import Lenis from 'lenis'
import { gsap } from './gsap'

export function initLenis(): Lenis {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  })

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  return lenis
}
```

---

## 3. Backend — server/

### 3.1 Initialize

```bash
mkdir server && cd server
npm init -y
```

### 3.2 All Packages to Install

#### Core Dependencies
```bash
npm install \
  express \
  cors \
  dotenv \
  helmet \
  express-rate-limit \
  @prisma/client \
  zod
```

#### Dev Dependencies
```bash
npm install -D \
  typescript \
  ts-node \
  ts-node-dev \
  prisma \
  @types/express \
  @types/cors \
  @types/node
```

### 3.3 TypeScript Config — server/tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "baseUrl": ".",
    "paths": {
      "@shared/*": ["../shared/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

### 3.4 Package Scripts — server/package.json scripts

```json
{
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "db:generate": "prisma generate",
    "db:migrate": "prisma migrate dev",
    "db:studio": "prisma studio",
    "db:seed": "ts-node src/prisma/seed.ts"
  }
}
```

### 3.5 Environment Variables — server/.env

```env
# Server
PORT=4000
NODE_ENV=development

# Database (from Supabase project settings → Connection String → URI)
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT_REF].supabase.co:5432/postgres"

# CORS — frontend origin
CLIENT_ORIGIN=http://localhost:5173
```

Production additions:
```env
NODE_ENV=production
CLIENT_ORIGIN=https://shubhamshrivastava.dev
```

### 3.6 Folder Structure — server/src/

```
src/
├── routes/
│   ├── projects.ts      ← GET /api/projects
│   ├── views.ts         ← POST /api/views/:projectId
│   ├── contact.ts       ← POST /api/contact
│   └── resume.ts        ← GET /api/resume/download
│
├── controllers/
│   ├── projects.controller.ts
│   ├── views.controller.ts
│   ├── contact.controller.ts
│   └── resume.controller.ts
│
├── middleware/
│   ├── errorHandler.ts  ← Global error handler
│   ├── validate.ts      ← Zod schema validation middleware
│   └── rateLimiter.ts   ← Rate limiting config
│
├── lib/
│   └── prisma.ts        ← Prisma client singleton
│
├── prisma/
│   └── seed.ts          ← Seed initial project + skill data
│
├── types/
│   └── index.ts         ← Server-specific types
│
└── index.ts             ← Express app entry point
```

### 3.7 Express Entry Point — server/src/index.ts

```ts
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import { projectsRouter } from './routes/projects'
import { viewsRouter } from './routes/views'
import { contactRouter } from './routes/contact'
import { resumeRouter } from './routes/resume'
import { errorHandler } from './middleware/errorHandler'
import { apiLimiter } from './middleware/rateLimiter'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_ORIGIN }))
app.use(express.json())
app.use('/api', apiLimiter)

app.use('/api/projects', projectsRouter)
app.use('/api/views',    viewsRouter)
app.use('/api/contact',  contactRouter)
app.use('/api/resume',   resumeRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

### 3.8 Prisma Client Singleton — server/src/lib/prisma.ts

```ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ log: ['query'] })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

---

## 4. Database — Prisma Schema

### 4.1 Initialize Prisma

```bash
cd server
npx prisma init
```

### 4.2 Full Schema — server/prisma/schema.prisma

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Project {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  client      String
  type        String   // "client" | "personal"
  description String
  impact      String[]
  tags        String[]
  liveUrl     String?
  githubUrl   String?
  accentColor String   @default("cyan")
  viewsCount  Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("projects")
}

model Message {
  id        String   @id @default(cuid())
  name      String
  email     String
  message   String
  read      Boolean  @default(false)
  createdAt DateTime @default(now())

  @@map("messages")
}

model Skill {
  id         String @id @default(cuid())
  name       String
  category   String // "frameworks" | "languages" | "frontend_tools" | "tooling_cloud"
  proficiency Int   @default(100) // 0–100

  @@map("skills")
}

model ResumeLog {
  id          String   @id @default(cuid())
  downloadedAt DateTime @default(now())
  ipHash      String?  // hashed, never raw IP stored

  @@map("resume_logs")
}
```

### 4.3 Run Migrations

```bash
npx prisma migrate dev --name init
npx prisma generate
```

---

## 5. API Endpoints — Full Specification

### 5.1 GET /api/projects

Returns all projects with their current view counts.

**Request:** No body required.

**Response 200:**
```json
{
  "success": true,
  "data": [
    {
      "id": "cuid123",
      "slug": "amis-portal",
      "title": "AMIS Portal",
      "client": "VERTEXC3 → AMIS",
      "type": "client",
      "description": "...",
      "impact": ["50+ APIs integrated", "..."],
      "tags": ["React.js", "TypeScript"],
      "liveUrl": null,
      "githubUrl": null,
      "accentColor": "cyan",
      "viewsCount": 142
    }
  ]
}
```

**Response 500:**
```json
{ "success": false, "error": "Failed to fetch projects" }
```

---

### 5.2 POST /api/views/:projectId

Increments the view count for a project by 1.

**Request:** No body required. `projectId` is the project's `slug` (e.g. `amis-portal`).

**Response 200:**
```json
{
  "success": true,
  "data": { "viewsCount": 143 }
}
```

**Response 404:**
```json
{ "success": false, "error": "Project not found" }
```

---

### 5.3 POST /api/contact

Validates and saves a contact message to the database.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hey Shubham, I'd love to work with you."
}
```

**Validation rules (Zod):**
- `name` — string, min 2 chars, max 100 chars, required
- `email` — valid email format, required
- `message` — string, min 10 chars, max 2000 chars, required

**Response 201:**
```json
{
  "success": true,
  "message": "Message received."
}
```

**Response 400 (validation error):**
```json
{
  "success": false,
  "error": "Validation failed",
  "details": [{ "field": "email", "message": "Invalid email format" }]
}
```

---

### 5.4 GET /api/resume/download

Logs the download event and serves the resume PDF.

**Request:** No body required.

**Behavior:**
1. Hash the requester's IP (`crypto.createHash('sha256')`) — store hash only, never raw IP
2. Insert a row into `resume_logs`
3. Stream the PDF file from `server/public/resume.pdf` as a download response

**Response:** Binary PDF file stream with headers:
```
Content-Type: application/pdf
Content-Disposition: attachment; filename="Shubham_Shrivastava_Resume.pdf"
```

**Response 404 (file missing):**
```json
{ "success": false, "error": "Resume not found" }
```

---

## 6. Shared Types — shared/types.ts

```ts
// Used by both client and server

export interface ApiResponse<T = null> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface ProjectDTO {
  id: string
  slug: string
  title: string
  client: string
  type: 'client' | 'personal'
  description: string
  impact: string[]
  tags: string[]
  liveUrl?: string | null
  githubUrl?: string | null
  accentColor: 'cyan' | 'green' | 'mixed'
  viewsCount: number
}

export interface ContactPayload {
  name: string
  email: string
  message: string
}

export interface ViewsResponse {
  viewsCount: number
}
```

---

## 7. Rate Limiting — server/src/middleware/rateLimiter.ts

```ts
import rateLimit from 'express-rate-limit'

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Too many requests, slow down.' },
})

export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { success: false, error: 'Too many messages sent. Try again later.' },
})
```

---

## 8. .cursorrules

Place this file at the project root. Cursor reads it automatically.

```
# Cursor Rules — shubhamshrivastava.dev

## Stack
- Frontend: Vite + React 18 + TypeScript (strict mode)
- Backend: Node.js 24 + Express + TypeScript
- Database: PostgreSQL via Prisma ORM
- Styling: Tailwind CSS v4 + CSS custom properties
- Animation: GSAP + ScrollTrigger for scroll animations, Framer Motion for component transitions
- Smooth scroll: Lenis (integrated with GSAP ticker)
- 3D: React Three Fiber + @react-three/drei

## Coding Rules
- Always use TypeScript. Never use `any` — use `unknown` and narrow it.
- All colors come from CSS custom properties (--color-cyan, etc.). Never hardcode hex values.
- All animation durations come from CSS custom properties (--duration-fast, etc.).
- Never use inline styles. Use Tailwind classes or CSS variables only.
- All API calls go through the Axios instance at src/lib/axios.ts.
- All GSAP usage goes through src/lib/gsap.ts (where ScrollTrigger is registered).
- Components in /ui are pure and take only props — no direct API calls.
- Components in /sections manage their own data fetching and GSAP animation init.
- All canvas/Three.js code lives in /canvas — never inside section components.
- Use named exports everywhere except page-level components.
- All interfaces live in src/types/index.ts or shared/types.ts.

## Design Rules
- Background is always #050505. Never use pure #000000.
- Primary accent is --color-cyan (#00f5ff). Secondary is --color-green (#39ff14).
- Font for headings/display: Orbitron. Font for everything else: JetBrains Mono.
- Glitch effects use the .glitch keyframe defined in animations.css.
- Every interactive element must have a hover state that uses neon glow.
- No shadows that use black — glows only, using the --glow-cyan or --glow-green variables.

## Component Rules
- Every new component must have a TypeScript interface for its props.
- Framer Motion variants should be defined outside the component, above it.
- GSAP ScrollTrigger animations must be initialized in useEffect with a cleanup that calls ScrollTrigger.kill().
- Three.js components must use useFrame hook — no setInterval or setTimeout in canvas code.

## File Naming
- Components: PascalCase (GlitchText.tsx)
- Hooks: camelCase prefixed with use (useGlitch.ts)
- Utilities/lib: camelCase (gsap.ts)
- Data files: camelCase (projects.ts)
- Styles: kebab-case (globals.css)

## Backend Rules
- All route handlers are thin — logic lives in controllers.
- All request bodies are validated with Zod before touching the database.
- All Prisma queries go through the singleton in src/lib/prisma.ts.
- Never return raw database errors to the client — use the global error handler.
- Never store raw IPs — always hash with SHA-256 before saving.
```

---

## 9. Deployment Checklist

### Frontend → Vercel
```
1. Push client/ to GitHub
2. Import repo in Vercel
3. Set root directory: client
4. Set build command: npm run build
5. Set output directory: dist
6. Add environment variable: VITE_API_BASE_URL = https://your-backend.railway.app/api
```

### Backend → Railway
```
1. Push server/ to GitHub
2. Create new project in Railway
3. Set root directory: server
4. Set start command: npm run build && npm start
5. Add all environment variables from server/.env
6. Copy the Railway public URL → use as VITE_API_BASE_URL in Vercel
```

### Database → Supabase
```
1. Create new project in Supabase
2. Go to Settings → Database → Connection String → URI
3. Copy URI into server/.env as DATABASE_URL
4. Run: npx prisma migrate deploy (from server/)
5. Run: npm run db:seed (to populate initial data)
```

---

## 10. What is NOT in v1 (v2 scope)

- Admin dashboard (`/admin` protected route)
- JWT authentication (`POST /api/auth/login`)
- `admin_users` table in schema
- Blog / writing section
- Project detail pages
- Analytics dashboard

---

*Document version: 1.0*
*Next document: roadmap.md*
