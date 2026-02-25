# 📝 Content — shubhamshrivastava.dev
> This file is the single source of truth for ALL text, data, and links on the portfolio.
> Never hardcode content inside components. Always import from client/src/data/ files.
> When content needs updating — change it here first, then update the data files.
> AI models: use this file to populate all data files in client/src/data/

---

## 📌 Quick Reference

| Item | Value |
|---|---|
| **Full Name** | Shubham Shrivastava |
| **Role Title** | Frontend Software Engineer |
| **Experience** | 2.7+ Years |
| **Current Company** | VERTEXC3 |
| **Location** | India |
| **Email** | shubhamshrivastava2213@gmail.com |
| **GitHub** | github.com/shubham2213 |
| **LinkedIn** | linkedin.com/in/shubham-shrivastava6515 |
| **Phone** | +91 9752966664 |

---

## 1. 🚀 Hero Section (Chapter 00 — INITIALIZE)

### 1.1 Boot Sequence Lines
Typed out one by one, sequentially, in JetBrains Mono green:
```
> INITIALIZING SYSTEM...
> LOADING PORTFOLIO_v2.0...
> WELCOME, VISITOR_001
```

### 1.2 Hero Name
```
SHUBHAM SHRIVASTAVA
```
Font: Orbitron 900. Color: White. Glitch fires every 5 seconds.

### 1.3 Hero Tagline
```
Frontend Engineer  //  2.7 Years  //  Currently: VERTEXC3
```
Font: JetBrains Mono 400. Color: `--color-text`.
`//` separators use `--color-cyan`.

### 1.4 CTA Button
```
[ ENTER SYSTEM ]_
```
Scrolls smoothly to the About section on click.
The trailing `_` blinks using the `blink` keyframe animation.

### 1.5 HUD Tags

Bottom-left:
```
LAT: 20.5937° N  LNG: 78.9629° E
```
(Geographic center of India — intentionally vague)

Bottom-right:
```
[LIVE CLOCK — updates every second]
Format: HH:MM:SS  IST
```

Floating background HUD elements (decorative, low opacity):
```
SYS_VER: 2.0.1
NODE: ACTIVE
UPTIME: --:--:--
SIGNAL: ████████░░  80%
MEM: 2.7GB / 8GB
```

### 1.6 Scroll Indicator
```
SCROLL
```
Font: Orbitron 400, 10px, letter-spacing 4px. Color: `--color-text-dim`.
With animated vertical line + traveling dot below it.

---

## 2. 👤 About Section (Chapter 01 — IDENTITY)

### 2.1 Section Heading
```
// CHAPTER 01 — IDENTITY
```

### 2.2 Photo Labels
Above photo:
```
SUBJECT_001
```

Below photo:
```
STATUS: ONLINE ●
```
The `●` pulses using `pulseGlow` animation in green.

### 2.3 Profile Data Card
Displayed as terminal-style readout with `→` separator:

```
NAME         →  Shubham Shrivastava
ROLE         →  Frontend Software Engineer
EXPERIENCE   →  2.7+ Years
CURRENT      →  VERTEXC3
LOCATION     →  India
EDUCATION    →  B.E. Computer Science
UNIVERSITY   →  Pune University (2017–2021)
CERT_01      →  Full Stack Web Development
CERT_02      →  AWS Certified Cloud Practitioner
```

### 2.4 Bio Tagline
Displayed below the two-column layout, above the stat counters.
Single paragraph. JetBrains Mono 300, `--color-text`, centered.

```
I build interfaces that don't just look good — they think, respond, and scale.
2.7 years deep in production React, shipping features that real users depend on.
Clean architecture, sharp UI, and a obsession with getting the details right.
```

### 2.5 Stat Counters
Three animated count-up numbers. Count from 0 to target on scroll entry.

```
50+        →  APIs Integrated
15+        →  Components Built
3          →  Production Platforms
```

Number: Orbitron 900, `--color-cyan`, `--text-display` size.
Label: JetBrains Mono 400, `--color-text-dim`, `--text-xs`.

---

## 3. ⚙️ Skills Section (Chapter 02 — STACK)

### 3.1 Section Heading
```
// CHAPTER 02 — STACK
```

### 3.2 Skill Modules

Each module has a panel title and a list of skill badges.
Tooltip text shown on badge hover.

---

**Panel 1 — FRAMEWORKS**
| Skill | Tooltip |
|---|---|
| React.js | Production UI since 2022 |
| Next.js | Full-stack React framework |
| Node.js | Backend JavaScript runtime |

---

**Panel 2 — LANGUAGES**
| Skill | Tooltip |
|---|---|
| TypeScript | Strict typing across all projects |
| JavaScript ES6+ | Core language foundation |
| HTML5 | Semantic, accessible markup |
| CSS3 | Layouts, animations, responsive |

---

**Panel 3 — FRONTEND TOOLS**
| Skill | Tooltip |
|---|---|
| React Query | Server state & caching |
| Redux | Global state management |
| Context API | Lightweight state sharing |
| Tailwind CSS v4 | Utility-first styling |
| ShadCN UI | Accessible component library |
| Radix UI | Headless UI primitives |
| Vite | Fast modern build tool |

---

**Panel 4 — TOOLING & CLOUD**
| Skill | Tooltip |
|---|---|
| Git & GitHub | Version control & collaboration |
| GitHub Actions | CI/CD automation |
| AWS (Foundational) | Cloud certified practitioner |
| Vercel | Frontend deployment |
| Postman | API testing & documentation |
| Chrome DevTools | Debugging & performance |
| Cursor IDE | AI-assisted development |

---

## 4. 💼 Projects Section (Chapter 03 — WORK LOG)

### 4.1 Section Heading
```
// CHAPTER 03 — WORK LOG
```

### 4.2 Project Cards

---

**Card 1 — AMIS Portal**
```
id:           amis-portal
title:        AMIS PORTAL
client:       VERTEXC3 → AMIS
type:         CLIENT PROJECT
accentColor:  cyan

description:
  Two production-grade portals built from interactive prototype
  to MVP, within a scalable modular architecture.

impact:
  > 50+ RESTful APIs integrated with React Query & optimistic updates
  > 15+ reusable TypeScript components built and maintained
  > Secure authentication and RBAC implemented end-to-end
  > CI/CD pipeline configured via GitHub Actions → Vercel

tags:
  React.js  TypeScript  React Query  Tailwind CSS  RBAC  GitHub Actions  Vercel

liveUrl:      null  (internal client product)
githubUrl:    null  (private repository)
```

---

**Card 2 — Teleperson Platforms**
```
id:           teleperson
title:        TELEPERSON PLATFORMS
client:       VERTEXC3 → Teleperson
type:         CLIENT PROJECT
accentColor:  green

description:
  Led frontend development across three production platforms —
  Customer, Corporate, and Enterprise B2B — in a shared
  scalable architecture supporting multiple user roles.

impact:
  > 3 platforms built: Customer, Corporate, Enterprise B2B
  > 30–35% reduction in UI-related API failure tickets
  > 20+ APIs integrated with Axios and React Query
  > Shared ShadCN component library used across all teams

tags:
  React.js  TypeScript  ShadCN UI  Axios  React Query  Redux  Modular Architecture

liveUrl:      null  (internal client product)
githubUrl:    null  (private repository)
```

---

**Card 3 — Peregrine Website**
```
id:           peregrine
title:        PEREGRINE WEBSITE
client:       VERTEXC3 → Peregrine
type:         CLIENT PROJECT
accentColor:  mixed

description:
  Converted Figma designs into a fully responsive website
  using Webflow, ensuring pixel-perfect implementation
  and cross-device compatibility.

impact:
  > Pixel-perfect Figma → Webflow conversion
  > Cross-device compatibility verified across all breakpoints
  > Performance and accessibility best practices applied

tags:
  Webflow  Figma  Responsive Design  Accessibility  Performance

liveUrl:      null  (to be updated if public)
githubUrl:    null
```

---

**Card 4 — Shopping App**
```
id:           shopping-app
title:        SHOPPING APP
client:       Personal Project
type:         PERSONAL PROJECT
accentColor:  cyan

description:
  Functional React shopping application with cart management,
  seamless navigation, and live product data from external APIs.

impact:
  > Context API + useReducer for global cart state management
  > React Router DOM for seamless multi-page navigation
  > Axios for external API integration and data handling
  > Fully responsive — mobile and desktop

tags:
  React.js  Context API  useReducer  React Router  Axios  Responsive

liveUrl:      null  (update when deployed)
githubUrl:    https://github.com/shubham2213
```

---

## 5. 📅 Experience Section (Chapter 04 — SIGNAL)

### 5.1 Section Heading
```
// CHAPTER 04 — SIGNAL
```

### 5.2 Timeline Entries
Displayed top to bottom, most recent first.
Each entry types itself in on scroll entry.

---

**Entry 1 — Current Role**
```
period:     AUG 2023 → PRESENT
type:       work
company:    VERTEXC3
role:       Software Engineer — Frontend
location:   India
highlight:  true  (most recent — full cyan accent)

bullets:
  > Built 2 production portals for AMIS from prototype to deployment
  > Led frontend for 3 Teleperson platforms across multiple user roles
  > Integrated 70+ REST APIs using React Query and Axios
  > Configured CI/CD pipelines via GitHub Actions → Vercel
  > Active in sprint planning, code reviews, and Agile delivery
```

---

**Entry 2 — Education**
```
period:     AUG 2017 → MAY 2021
type:       education
company:    Pune University
role:       B.E. Computer Science
location:   Pune, India
highlight:  false

bullets:
  > Bachelor of Engineering in Computer Science
  > Foundation in DSA, OS, DBMS, Networking, Software Engineering
```

---

**Entry 3 — Certification**
```
period:     2023
type:       certification
company:    Amazon Web Services
role:       AWS Certified Cloud Practitioner
location:   —
highlight:  false

bullets:
  > Foundational AWS certification covering core cloud concepts
  > IAM, EC2, S3, Lambda, and core AWS service knowledge
```

---

**Entry 4 — Certification**
```
period:     2022
type:       certification
company:    Pep Coding
role:       Full Stack Web Development
location:   —
highlight:  false

bullets:
  > Full stack curriculum covering React, Node.js, and databases
  > Foundation for professional frontend career
```

---

## 6. 📡 Contact Section (Chapter 05 — CONNECT)

### 6.1 Section Heading
```
// CHAPTER 05 — CONNECT
```

### 6.2 Glitch Headline
Line 1 (static):
```
LET'S BUILD
```

Line 2 (cycling words, glitch between each):
```
SOMETHING.
```
Cycling sequence every 3 seconds:
```
SOMETHING. → GREAT. → REAL. → TOGETHER. → SOMETHING.
```

### 6.3 Terminal Contact Links
Displayed as sequential terminal commands, typed in one by one:

```
$ open --mail      shubhamshrivastava2213@gmail.com
$ open --github    github.com/shubham2213
$ open --linkedin  linkedin.com/in/shubham-shrivastava6515
$ curl --resume    Shubham_Shrivastava_Resume.pdf  [ DOWNLOAD ]
```

Link targets:
```
mail:     mailto:shubhamshrivastava2213@gmail.com
github:   https://github.com/shubham2213
linkedin: https://linkedin.com/in/shubham-shrivastava6515
resume:   GET /api/resume/download  (backend endpoint)
```

All external links: `target="_blank" rel="noopener noreferrer"`

### 6.4 Contact Form

Field labels and placeholders:

```
Field 1:
  label:        NAME
  placeholder:  JOHN_DOE

Field 2:
  label:        EMAIL
  placeholder:  HELLO@DOMAIN.COM

Field 3:
  label:        MESSAGE
  placeholder:  WHAT ARE WE BUILDING?

Submit button:
  default:      [ TRANSMIT MESSAGE ]_
  loading:      > TRANSMITTING...|
  success:      > MESSAGE TRANSMITTED ✓
  error:        > TRANSMISSION FAILED. RETRY.
  rate-limited: > TOO MANY MESSAGES. TRY AGAIN LATER.
```

Validation messages (shown below each field on error):
```
name empty:       > NAME FIELD CANNOT BE EMPTY
name too short:   > NAME MUST BE AT LEAST 2 CHARACTERS
email empty:      > EMAIL FIELD CANNOT BE EMPTY
email invalid:    > INVALID EMAIL FORMAT
message empty:    > MESSAGE FIELD CANNOT BE EMPTY
message too short:> MESSAGE MUST BE AT LEAST 10 CHARACTERS
```

### 6.5 Footer Content

Left:
```
© 2025 SHUBHAM SHRIVASTAVA
```

Center (nav links):
```
INITIALIZE  //  IDENTITY  //  STACK  //  WORK LOG  //  SIGNAL  //  CONNECT
```

Right:
```
BUILT WITH REACT + NODE.JS + PostgreSQL
```

All text: JetBrains Mono 400, `--text-2xs`, `--color-text-dim`.

---

## 7. 🖥️ Terminal Easter Egg (Global)

### 7.1 Header Text
```
SHUBHAM_OS v1.0 — TYPE 'help' FOR COMMANDS
```

### 7.2 Input Prompt
```
> _
```
`>` in green, `_` blinks.

### 7.3 All Commands & Responses

**`help`**
```
AVAILABLE COMMANDS:
  ls projects      → list all projects
  cat about.txt    → display bio and profile
  contact --email  → open mail client
  download resume  → download CV
  clear            → clear terminal
  help             → show this menu

  [TIP: press ESC to close terminal]
```

---

**`ls projects`**
```
PROJECTS/ (4 entries)

  [01]  amis-portal        →  Production portal — VERTEXC3/AMIS
  [02]  teleperson          →  3-platform suite — VERTEXC3/Teleperson
  [03]  peregrine           →  Webflow website — VERTEXC3/Peregrine
  [04]  shopping-app        →  Personal React project

TYPE 'cat [project-id]' FOR DETAILS
```

---

**`cat about.txt`**
```
SUBJECT: Shubham Shrivastava
ROLE:    Frontend Software Engineer
EXP:     2.7+ Years

I build interfaces that don't just look good —
they think, respond, and scale.

2.7 years deep in production React, shipping
features that real users depend on every day.

STACK:   React · Next.js · TypeScript · Node.js
         React Query · Tailwind CSS v4 · PostgreSQL

CONTACT: shubhamshrivastava2213@gmail.com
GITHUB:  github.com/shubham2213
```

---

**`contact --email`**
```
> OPENING MAIL CLIENT...
> mailto:shubhamshrivastava2213@gmail.com
```
Then opens `mailto:` link.

---

**`download resume`**
```
> INITIATING DOWNLOAD...
> FETCHING: Shubham_Shrivastava_Resume.pdf
> DOWNLOAD STARTED ✓
```
Then triggers the backend resume download endpoint.

---

**`clear`**
```
[terminal output clears]
```

---

**Unknown command (e.g. `hello`)**
```
> command not found: hello
> type 'help' to see available commands
```

---

## 8. 🔊 Ambient Sound Content

### 8.1 Sound Toggle Button States
```
Sound off (default):  [ ♪ SOUND ]
Sound on:             [ ♪ SOUND • ]
```
The `•` in cyan indicates active state.

### 8.2 Sound Files Required
Place in `client/public/sounds/`:

```
ambient-hum.mp3    → Low continuous background hum (loop: true, volume: 0.15)
ui-blip.mp3        → Short digital blip on hover  (loop: false, volume: 0.3)
ui-click.mp3       → Soft click on button press   (loop: false, volume: 0.4)
```

Source: freesound.org (CC0 license — free to use commercially)
Search terms: "ambient hum sci-fi loop", "digital blip UI", "soft click interface"

---

## 9. 🧭 Navigation Labels

### 9.1 Navbar Links
Each link maps to a section ID and a chapter number:

```
Label         →  Section ID    →  Chapter
INITIALIZE    →  #hero         →  00
IDENTITY      →  #about        →  01
STACK         →  #skills       →  02
WORK LOG      →  #projects     →  03
SIGNAL        →  #experience   →  04
CONNECT       →  #contact      →  05
```

### 9.2 Logo Text
```
SS
```
Font: Orbitron 700, 14px, letter-spacing: 3px, color: `--color-cyan`.

### 9.3 Page Title & Meta

```html
<title>Shubham Shrivastava — Frontend Software Engineer</title>

<meta name="description"
  content="Frontend Software Engineer with 2.7+ years building production-grade
  web applications with React, TypeScript, and Node.js. Based in India." />

<meta property="og:title"
  content="Shubham Shrivastava — Frontend Software Engineer" />

<meta property="og:description"
  content="Frontend Software Engineer with 2.7+ years building production-grade
  web applications with React, TypeScript, and Node.js." />

<meta property="og:url" content="https://shubhamshrivastava.dev" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Shubham Shrivastava — Frontend Software Engineer" />
```

---

## 10. 📁 Data File Mapping

> This section tells AI models exactly which content goes into which data file.

### `client/src/data/personal.ts`
Maps to: Hero (§1), About (§2), Nav (§9)
```ts
export const personal = {
  name:        'Shubham Shrivastava',
  nameShort:   'SS',
  role:        'Frontend Software Engineer',
  experience:  '2.7+ Years',
  company:     'VERTEXC3',
  location:    'India',
  email:       'shubhamshrivastava2213@gmail.com',
  github:      'https://github.com/shubham2213',
  linkedin:    'https://linkedin.com/in/shubham-shrivastava6515',
  phone:       '+91 9752966664',
  education:   'B.E. Computer Science',
  university:  'Pune University (2017–2021)',
  certifications: [
    'Full Stack Web Development — Pep Coding',
    'AWS Certified Cloud Practitioner',
  ],
  bio: `I build interfaces that don't just look good — they think, respond, and scale.
2.7 years deep in production React, shipping features that real users depend on.
Clean architecture, sharp UI, and an obsession with getting the details right.`,
  stats: [
    { value: 50, suffix: '+', label: 'APIs Integrated' },
    { value: 15, suffix: '+', label: 'Components Built' },
    { value: 3,  suffix: '',  label: 'Production Platforms' },
  ],
  hud: {
    lat:    '20.5937° N',
    lng:    '78.9629° E',
    sysVer: '2.0.1',
  },
}
```

### `client/src/data/projects.ts`
Maps to: Projects section (§4)
Contains all 4 project objects with the exact fields defined in §4.2.
(See requirements.prd.md §2.9 for the full TypeScript interface)

### `client/src/data/skills.ts`
Maps to: Skills section (§3)
```ts
export interface Skill {
  name: string
  category: 'frameworks' | 'languages' | 'frontend_tools' | 'tooling_cloud'
  tooltip: string
}
```
All skills with tooltips listed in §3.2 above.

### `client/src/data/experience.ts`
Maps to: Experience section (§5)
```ts
export interface TimelineEntry {
  id:        string
  period:    string
  type:      'work' | 'education' | 'certification'
  company:   string
  role:      string
  location:  string
  highlight: boolean
  bullets:   string[]
}
```
All 4 entries listed in §5.2 above.

### `client/src/data/terminal.ts`
Maps to: Terminal Easter Egg (§7)
```ts
export const terminalCommands: Record<string, string> = {
  help:             '...',   // full help text from §7.3
  'ls projects':    '...',   // project list from §7.3
  'cat about.txt':  '...',   // bio text from §7.3
  clear:            'CLEAR', // special keyword — clears output
}
```

---

## 11. ✏️ Content Update Guide

> When you need to update any content, follow this process:

**To update a project:**
1. Edit the relevant entry in this file under §4.2
2. Update `client/src/data/projects.ts` to match
3. If project is in the DB (post Phase 9), run `npm run db:seed` to re-seed
4. Update the Changelog in `roadmap.md`

**To update experience/timeline:**
1. Edit the relevant entry in this file under §5.2
2. Update `client/src/data/experience.ts` to match
3. Update the Changelog in `roadmap.md`

**To add a new skill:**
1. Add the skill + tooltip to the correct panel in §3.2
2. Add to `client/src/data/skills.ts`
3. If skills are in the DB, add a new seed entry

**To update contact links:**
1. Update §6.3 in this file
2. Update `client/src/data/personal.ts`
3. Update terminal responses in `client/src/data/terminal.ts`

**To update bio or tagline:**
1. Edit §2.4 in this file
2. Update `personal.bio` in `client/src/data/personal.ts`
3. Update `cat about.txt` response in `client/src/data/terminal.ts`

---

*Document version: 1.0*
*Next document: .cursorrules (standalone)*
