# 🎨 Design System — shubhamshrivastava.dev
> This file is the single source of truth for every visual decision in this project.
> Read this before touching any UI component, style, or animation.
> AI models must follow these rules without exception — no improvising on visual decisions.

---

## 📌 Quick Reference

| Property | Value |
|---|---|
| **Theme** | Futuristic & Techy — Neon Glitch |
| **Concept** | Digital Organism — a living system |
| **Primary Font** | Orbitron |
| **Body Font** | JetBrains Mono |
| **Primary Accent** | `#00f5ff` (Electric Cyan) |
| **Secondary Accent** | `#39ff14` (Toxic Green) |
| **Background** | `#050505` (Near Black) |
| **Base Spacing Unit** | `8px` |
| **Border Radius** | `0` — No rounded corners anywhere |

---

## 1. 🎨 Color System

### 1.1 Core Palette

| Token | Hex Value | RGB | Usage |
|---|---|---|---|
| `--color-bg` | `#050505` | `5, 5, 5` | Page background — used everywhere, always |
| `--color-panel` | `#0a0a0a` | `10, 10, 10` | Cards, panels, nav, terminal |
| `--color-panel-hover` | `#0f0f0f` | `15, 15, 15` | Card hover background |
| `--color-cyan` | `#00f5ff` | `0, 245, 255` | Primary accent — borders, headings, highlights |
| `--color-cyan-dim` | `#00b8c4` | `0, 184, 196` | Subdued cyan — secondary borders |
| `--color-green` | `#39ff14` | `57, 255, 20` | Secondary accent — success, status, timeline |
| `--color-green-dim` | `#29b30f` | `41, 179, 15` | Subdued green — secondary status |
| `--color-text` | `#c8c8c8` | `200, 200, 200` | Primary body text |
| `--color-text-dim` | `#555555` | `85, 85, 85` | Meta text, labels, subdued content |
| `--color-text-faint` | `#2a2a2a` | `42, 42, 42` | Placeholder text, disabled states |
| `--color-border` | `rgba(0,245,255,0.15)` | — | Default card/panel borders |
| `--color-border-dim` | `rgba(0,245,255,0.06)` | — | Subtle dividers, section separators |
| `--color-border-active` | `rgba(0,245,255,0.8)` | — | Focused/hovered borders |
| `--color-error` | `#ff4444` | `255, 68, 68` | Form errors, failed states |
| `--color-white` | `#ffffff` | `255, 255, 255` | Hero name, large display text only |

### 1.2 Glow Effects

| Token | Value | Usage |
|---|---|---|
| `--glow-cyan-sm` | `0 0 8px rgba(0,245,255,0.3)` | Subtle glow on badges, small elements |
| `--glow-cyan` | `0 0 10px rgba(0,245,255,0.4), 0 0 30px rgba(0,245,255,0.15)` | Default interactive glow |
| `--glow-cyan-lg` | `0 0 20px rgba(0,245,255,0.7), 0 0 60px rgba(0,245,255,0.3)` | Intense hover glow on buttons/cards |
| `--glow-green-sm` | `0 0 8px rgba(57,255,20,0.3)` | Subtle glow on green elements |
| `--glow-green` | `0 0 10px rgba(57,255,20,0.4), 0 0 30px rgba(57,255,20,0.15)` | Default green glow |
| `--glow-green-lg` | `0 0 20px rgba(57,255,20,0.7), 0 0 60px rgba(57,255,20,0.3)` | Intense green hover glow |
| `--glow-text-cyan` | `0 0 10px rgba(0,245,255,0.8)` | Text shadow for glowing text labels |
| `--glow-text-green` | `0 0 10px rgba(57,255,20,0.8)` | Text shadow for green glowing labels |

### 1.3 Gradient Tokens

| Token | Value | Usage |
|---|---|---|
| `--gradient-panel` | `linear-gradient(135deg, #0a0a0a 0%, #070707 100%)` | Card backgrounds |
| `--gradient-cyan-fade` | `linear-gradient(180deg, rgba(0,245,255,0.08) 0%, transparent 100%)` | Section top accent fades |
| `--gradient-hero-vignette` | `radial-gradient(ellipse at center, transparent 40%, #050505 100%)` | Hero edges fade to background |

### 1.4 Color Usage Rules

- ⚠️ **Never** hardcode a hex value in a component — always use CSS custom properties
- ⚠️ **Never** use pure `#000000` — always `--color-bg` (`#050505`)
- ⚠️ **Never** use white except for the hero name and major display headings
- ⚠️ **Never** use purple, blue, or pink — this palette is cyan and green only
- ✅ Primary accent (cyan) for: borders, headings with `//` prefix, button borders, active states
- ✅ Secondary accent (green) for: status indicators, success messages, timeline dot, secondary card accent
- ✅ Dim text (`--color-text-dim`) for: dates, labels, meta info, section numbers
- ✅ Error color for: form validation messages, failed API states only

---

## 2. 📝 Typography

### 2.1 Font Families

#### Display Font — Orbitron
- **Source:** Google Fonts
- **Weights used:** 400 (Regular), 700 (Bold), 900 (Black)
- **Usage:** Hero name, all section headings, project titles, stat numbers, navbar logo, button text
- **Character:** Geometric, futuristic, spaced — the "face" of the portfolio
- **Load:** `@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap')`

#### Mono Font — JetBrains Mono
- **Source:** Google Fonts
- **Weights used:** 300 (Light), 400 (Regular), 600 (SemiBold)
- **Usage:** All body text, labels, data cards, terminal content, taglines, nav links, skill badges, HUD tags, timestamps
- **Character:** Clean, technical, readable — the "voice" of the portfolio
- **Load:** `@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&display=swap')`

### 2.2 Font Size Scale

| Token | Value | Responsive | Usage |
|---|---|---|---|
| `--text-hero` | `clamp(3rem, 8vw, 7rem)` | Scales with viewport | Hero name only |
| `--text-display` | `clamp(2rem, 5vw, 4rem)` | Scales with viewport | Section headings (Chapter titles) |
| `--text-xl` | `clamp(1.5rem, 3vw, 2.5rem)` | Scales with viewport | Project titles, major sub-headings |
| `--text-lg` | `1.5rem` | Fixed | Sub-section headings |
| `--text-md` | `1.125rem` | Fixed | Card titles, important body text |
| `--text-base` | `1rem` | Fixed | Standard body text, descriptions |
| `--text-sm` | `0.875rem` | Fixed | Secondary body, skill descriptions |
| `--text-xs` | `0.75rem` | Fixed | Labels, meta, timestamps, tags |
| `--text-2xs` | `0.625rem` | Fixed | HUD coordinates, tiny system labels |

### 2.3 Font Weight Usage

| Weight | Value | Usage |
|---|---|---|
| Light | 300 | Long-form body text, descriptions |
| Regular | 400 | Standard body, labels, monospace UI |
| SemiBold | 600 | Highlighted values in data cards, important labels |
| Bold | 700 | Sub-headings, card titles, button text |
| Black | 900 | Hero name, major section display headings |

### 2.4 Letter Spacing

| Context | Value |
|---|---|
| All-caps labels and headings | `0.2em` |
| Navbar links | `0.15em` |
| HUD tags | `0.1em` |
| Button text | `0.15em` |
| Body text | `0` (normal) |
| Hero name | `0.05em` |

### 2.5 Line Height

| Context | Value |
|---|---|
| Display headings | `1.1` |
| Body text | `1.7` |
| Terminal / monospace UI | `1.6` |
| Card data rows | `2.0` |
| Button text | `1` |

### 2.6 Typography Rules

- ⚠️ **Never** mix Orbitron and JetBrains Mono in the same text element
- ⚠️ **Never** use Orbitron below `0.75rem` — it becomes illegible
- ⚠️ **Never** use regular weight (400) for Orbitron headings — minimum Bold (700)
- ✅ All section headings are prefixed with `// ` in `--color-cyan`
- ✅ All-caps text always has `letter-spacing: 0.2em`
- ✅ Numbers and statistics always use Orbitron in `--color-cyan`
- ✅ Code-style content (terminal, commands) always uses JetBrains Mono 400

### 2.7 Text Effects

| Effect | CSS | When to use |
|---|---|---|
| Glowing text | `text-shadow: var(--glow-text-cyan)` | Section headings, active nav items |
| Glitch text | `GlitchText.tsx` component | Hero name, contact headline |
| Typewriter | `animation: typewriter` keyframe | Terminal content, boot sequence, timeline |
| Dim prefix | `color: var(--color-text-dim)` | `//` prefix before headings rendered separately |

---

## 3. 📐 Spacing System

### 3.1 Base Unit

All spacing is built on an **8px base unit**. Never use arbitrary values.

| Token | Value | Usage |
|---|---|---|
| `--space-1` | `8px` | Icon padding, tiny gaps |
| `--space-2` | `16px` | Inner component padding, small gaps |
| `--space-3` | `24px` | Standard component padding |
| `--space-4` | `32px` | Card padding, section element gaps |
| `--space-6` | `48px` | Large internal spacing |
| `--space-8` | `64px` | Section padding top/bottom (mobile) |
| `--space-10` | `80px` | Medium section padding |
| `--space-12` | `96px` | Section padding top/bottom (tablet) |
| `--space-16` | `128px` | Section padding top/bottom (desktop) |
| `--space-20` | `160px` | Hero vertical padding |
| `--space-24` | `192px` | Extra large gaps between major blocks |

### 3.2 Spacing Rules

- ⚠️ **Never** use values not in the scale (e.g., `13px`, `22px`, `37px`)
- ⚠️ **Never** use `margin` for layout — use `gap` with flexbox/grid
- ✅ Section top/bottom padding: `--space-16` desktop, `--space-12` tablet, `--space-8` mobile
- ✅ Card internal padding: `--space-4` (32px) all sides
- ✅ Nav height: `--space-8` (64px)
- ✅ All layout uses `--space-6` (48px) horizontal page padding on desktop

---

## 4. 📏 Layout System

### 4.1 Breakpoints

| Name | Width | Behavior |
|---|---|---|
| `mobile` | `< 768px` | Single column, simplified animations, no 3D effects |
| `tablet` | `768px – 1024px` | Two columns where applicable, reduced particle count |
| `desktop` | `1024px – 1440px` | Full experience, all effects active |
| `wide` | `> 1440px` | Max content width capped, centered |

```css
/* Tailwind v4 custom breakpoints in globals.css */
@custom-media --mobile  (max-width: 767px);
@custom-media --tablet  (min-width: 768px) and (max-width: 1023px);
@custom-media --desktop (min-width: 1024px);
@custom-media --wide    (min-width: 1440px);
```

### 4.2 Max Content Width

| Context | Max Width |
|---|---|
| Page content | `1280px` |
| Section content | `1200px` |
| Narrow content (About card) | `960px` |
| Ultra-narrow (Contact form) | `640px` |

All content containers: `max-width: Xpx; margin: 0 auto; padding: 0 var(--space-6);`

### 4.3 Grid System

| Section | Desktop Layout | Mobile Layout |
|---|---|---|
| Hero | Full width, centered | Full width, centered |
| About | 2 columns (40% photo / 60% card) | 1 column stacked |
| Skills | 2×2 grid | 1 column |
| Projects | 1 column full-width cards | 1 column |
| Experience | Centered timeline | Left-aligned timeline |
| Contact | 2 columns (headline / links) + form below | 1 column stacked |

### 4.4 Z-Index Scale

| Layer | Z-Index | Element |
|---|---|---|
| Base content | `0` | All sections |
| Canvas (particles) | `1` | Three.js canvas behind hero |
| Cards | `10` | Project cards during tilt |
| Nav | `100` | Fixed navbar |
| Cursor spotlight | `9996` | Radial gradient overlay |
| Noise overlay | `9997` | Fixed grain texture |
| Scanlines | `9998` | Fixed scanline overlay |
| Custom cursor | `9999` | Crosshair cursor |
| Terminal easter egg | `10000` | Fullscreen terminal panel |

---

## 5. 🔲 Border & Shape System

### 5.1 Border Radius

**This portfolio uses zero border radius everywhere.**

- `border-radius: 0` on all cards, buttons, inputs, badges, panels
- No rounded corners. No pill shapes. Hard edges only.
- The sharpness is intentional — it's part of the military/tech aesthetic
- The only exception: the cursor circle (it's a circle by definition)

### 5.2 Border Styles

| Context | Style |
|---|---|
| Card default | `1px solid var(--color-border)` |
| Card hover | `1px solid var(--color-cyan)` |
| Card active/focused | `1px solid var(--color-border-active)` |
| Input default | `none; border-bottom: 1px solid var(--color-border)` |
| Input focused | `border-bottom: 1px solid var(--color-cyan)` |
| Nav bar bottom | `1px solid var(--color-border-dim)` |
| Section separator | `1px solid var(--color-border-dim)` |
| Skill badge | `1px solid var(--color-border)` |
| Skill badge hover | `1px solid var(--color-cyan)` |
| Timeline line | `2px solid var(--color-border)` |

### 5.3 Border Rules

- ⚠️ **Never** use `border-radius` > 0 (except cursor)
- ⚠️ **Never** use black borders or shadows — glows only
- ✅ Inputs use bottom-border only (no box border) — terminal aesthetic
- ✅ On hover: border transitions to full cyan, box-shadow adds glow
- ✅ All border transitions: `transition: border-color 300ms ease, box-shadow 300ms ease`

---

## 6. ✨ Animation System

### 6.1 Duration Tokens

| Token | Value | Usage |
|---|---|---|
| `--duration-instant` | `100ms` | Immediate micro-feedback (cursor ring scale) |
| `--duration-fast` | `150ms` | Quick hover states, badge color changes |
| `--duration-base` | `300ms` | Standard transitions (border, opacity, color) |
| `--duration-slow` | `600ms` | Scroll-reveal animations, card reveals |
| `--duration-glacial` | `1200ms` | Section entry timelines, major reveals |
| `--duration-boot` | `2500ms` | Boot sequence total duration |

### 6.2 Easing Tokens

| Token | Value | Usage |
|---|---|---|
| `--ease-linear` | `linear` | Typewriter animations, looping |
| `--ease-out` | `ease-out` | Simple hover states |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Balanced transitions |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Scroll reveals, dramatic entries |
| `--ease-out-back` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful snap (used sparingly) |
| `--ease-steps` | `steps(1)` | Glitch effects — no interpolation |

### 6.3 GSAP Defaults

```ts
// Set in client/src/lib/gsap.ts
gsap.defaults({
  ease: 'power3.out',   // = --ease-out-expo equivalent
  duration: 0.8,
})
```

| GSAP ease | Equivalent | Usage |
|---|---|---|
| `power3.out` | Expo out | Most scroll reveals |
| `power2.out` | Quad out | Faster, less dramatic reveals |
| `power4.out` | Quart out | Hero entry animations |
| `linear` | Linear | Looping animations (timeline pulse, scanlines) |
| `steps(X)` | Step | Glitch animations |

### 6.4 Scroll Animation Standards

All GSAP ScrollTrigger animations follow this pattern:

```ts
gsap.from(element, {
  y: 40,            // start 40px below final position
  opacity: 0,       // start invisible
  duration: 0.8,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: element,
    start: 'top 85%',   // fires when element top hits 85% from top of viewport
    end: 'top 50%',
    toggleActions: 'play none none none',
  }
})
```

Standard starting states:
- Elements entering from below: `y: 40, opacity: 0`
- Elements entering from left: `x: -40, opacity: 0`
- Elements entering from right: `x: 40, opacity: 0`
- Elements scaling in: `scale: 0.95, opacity: 0`
- Stagger between sibling elements: `stagger: 0.1` (100ms)

### 6.5 Hover Animation Standards

All interactive elements follow this hover pattern:

```css
.interactive-element {
  transition:
    border-color var(--duration-base) var(--ease-out),
    box-shadow   var(--duration-base) var(--ease-out),
    color        var(--duration-fast) var(--ease-out),
    transform    var(--duration-base) var(--ease-out-expo);
}

.interactive-element:hover {
  border-color: var(--color-cyan);
  box-shadow: var(--glow-cyan);
}
```

### 6.6 Keyframe Animations Reference

All defined in `client/src/styles/animations.css`:

| Animation | Duration | Trigger | Effect |
|---|---|---|---|
| `glitch` | `200ms` | JavaScript interval | Letter scramble + RGB split on text |
| `aberration` | `200ms` | Fast scroll detected | Full-page RGB color split |
| `blink` | `1000ms infinite` | Always | Cursor blink in terminal/typewriter |
| `flicker` | `8000ms infinite` | Always | Subtle scanline opacity flicker |
| `pulseGlow` | `2000ms infinite` | Always | Breathing glow on status indicators |
| `travelDown` | `3000ms infinite` | Always | Pulse dot traveling down timeline |
| `typewriter` | `varies` | Scroll trigger | Text reveals left-to-right |

### 6.7 Animation Rules

- ⚠️ **Never** animate layout properties (`width`, `height`, `margin`, `padding`) — causes reflow
- ⚠️ **Never** use `setTimeout` for animation sequencing — use GSAP timelines
- ⚠️ **Always** kill ScrollTrigger instances in `useEffect` cleanup to prevent memory leaks
- ⚠️ **Always** respect `prefers-reduced-motion` — wrap all GSAP init in a check
- ✅ Only animate: `transform`, `opacity`, `filter`, `box-shadow`, `color`, `border-color`
- ✅ Three.js animations use `useFrame` hook exclusively — no `setInterval`
- ✅ Cursor position updates use `ref.style.setProperty` — never React state

```ts
// Reduced motion check — wrap all GSAP animations in this
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (!prefersReduced) {
  // GSAP animation here
}
```

---

## 7. 🧩 Component Design Specifications

### 7.1 CustomCursor

```
Outer ring:
  size:         16px × 16px
  shape:        circle (border-radius: 50%)
  border:       1.5px solid var(--color-cyan)
  background:   transparent
  transition:   transform 100ms ease, border-color 200ms ease
  lag:          100ms behind actual cursor (CSS transition delay)

Inner dot:
  size:         4px × 4px
  shape:        circle
  background:   var(--color-cyan)
  transition:   none (snaps immediately)

On hover over interactive elements (a, button, [role=button]):
  outer ring:   scale(2.5), background: rgba(0,245,255,0.1)
  inner dot:    opacity: 0

On click:
  outer ring:   scale(0.8) for 100ms, then back to 1

Mobile:
  display: none
```

### 7.2 NeonButton

```
Structure:     <button> with text content + optional trailing cursor `_`

Default state:
  background:   transparent
  border:       1px solid var(--color-cyan)
  color:        var(--color-cyan)
  font:         Orbitron 700, var(--text-xs), letter-spacing: 0.15em
  padding:      var(--space-2) var(--space-4)   (16px 32px)
  text-transform: uppercase
  cursor:       none (custom cursor handles it)

Hover state:
  background:   rgba(0, 245, 255, 0.08)
  box-shadow:   var(--glow-cyan)
  transition:   all var(--duration-base) var(--ease-out)

Active/click state:
  background:   rgba(0, 245, 255, 0.15)
  transform:    scale(0.98)

Disabled state:
  opacity: 0.3
  pointer-events: none
```

### 7.3 GlitchText

```
Props:
  text: string                    — the text to display
  intensity: 'low'|'medium'|'high' — controls clip-path offset amount
  interval: number                — ms between glitch triggers (default: 5000)
  className?: string

Structure:
  <span class="glitch-wrapper">
    <span class="glitch-main">{text}</span>
    <span class="glitch-before" aria-hidden>{text}</span>   ← ::before layer
    <span class="glitch-after"  aria-hidden>{text}</span>   ← ::after layer
  </span>

Intensity levels:
  low:    offset ±2px,  duration 150ms
  medium: offset ±4px,  duration 200ms
  high:   offset ±6px,  duration 300ms

Before layer: color var(--color-cyan),  translateX(-offset)
After layer:  color var(--color-green), translateX(+offset)
Both layers use clip-path: inset() to show only a slice
```

### 7.4 HUDTag

```
Usage: Floating coordinate labels, system status text

Style:
  font:         JetBrains Mono 400, var(--text-2xs)
  color:        var(--color-text-dim)
  letter-spacing: 0.1em
  text-transform: uppercase
  opacity:      0.6

Optional props:
  accentColor: 'cyan'|'green'   — changes color to accent
  animated: boolean             — slow float animation (translateY ±4px, 4s infinite)
```

### 7.5 ProjectCard

```
Structure:
  ┌─────────────────────────────────────────┐
  │ [CLIENT LABEL]            [TYPE BADGE]  │
  │                                         │
  │  PROJECT TITLE (Orbitron xl)            │
  │                                         │
  │  > Impact line one                      │
  │  > Impact line two                      │
  │  > Impact line three                    │
  │                                         │
  │  [tag] [tag] [tag] [tag]               │
  │                                         │
  │  VIEWED BY 142 PEOPLE    [ LAUNCH ] →  │
  └─────────────────────────────────────────┘

Default state:
  background:   var(--gradient-panel)
  border:       1px solid var(--color-border)
  padding:      var(--space-4) (32px all sides)

Hover state:
  border-color: var(--color-cyan)  [cyan card] OR var(--color-green) [green card]
  box-shadow:   var(--glow-cyan)   OR var(--glow-green)
  transform:    rotateX(Xdeg) rotateY(Ydeg)  ← from mouse position
  background:   var(--color-panel-hover)

3D tilt config:
  max-rotation: 8 degrees
  perspective:  1000px on parent container
  transition on mouseleave: transform 300ms var(--ease-out)

Accent colors:
  cyan card:  border and glow use --color-cyan, --glow-cyan
  green card: border and glow use --color-green, --glow-green
  mixed card: left border cyan, right border green (gradient border)

View counter:
  font:    JetBrains Mono var(--text-xs) var(--color-text-dim)
  loading: "VIEWED BY — PEOPLE"
  loaded:  "VIEWED BY 142 PEOPLE"

Tag pill:
  font:       JetBrains Mono 400 var(--text-2xs)
  color:      var(--color-text-dim)
  border:     1px solid var(--color-border)
  padding:    4px 8px
  hover:      border-color var(--color-cyan), color var(--color-cyan)
```

### 7.6 SkillBadge

```
Default state:
  font:         JetBrains Mono 400 var(--text-xs)
  color:        var(--color-text)
  background:   var(--color-panel)
  border:       1px solid var(--color-border)
  padding:      var(--space-1) var(--space-2)   (8px 16px)
  letter-spacing: 0.05em
  text-transform: uppercase

Hover state:
  color:        var(--color-cyan)
  border-color: var(--color-cyan)
  box-shadow:   var(--glow-cyan-sm)
  cursor:       none

Tooltip on hover:
  position:     absolute, above badge
  font:         JetBrains Mono 300 var(--text-2xs)
  color:        var(--color-text-dim)
  background:   var(--color-panel)
  border:       1px solid var(--color-border-dim)
  padding:      4px 8px
  animation:    fadeIn 150ms ease
```

### 7.7 NavBar

```
Structure:
  [SS LOGO]          [links: 00/01/02/03/04/05]          [♪ SOUND]

Position:   fixed top-0, full width
Height:     var(--space-8) = 64px
Background: rgba(5,5,5,0.85) with backdrop-filter: blur(12px)
Border:     border-bottom: 1px solid var(--color-border-dim)
Z-index:    100
Padding:    0 var(--space-6) = 0 48px

Logo:
  font:           Orbitron 700 14px
  color:          var(--color-cyan)
  letter-spacing: 3px

Nav links:
  font:           JetBrains Mono 400 var(--text-2xs)
  color:          var(--color-text-dim)
  letter-spacing: 0.15em
  text-transform: uppercase
  gap:            var(--space-4) = 32px between links

  Hover:
    color:  var(--color-text)
    before: content '// ' in var(--color-cyan) fades in

  Active (current section):
    color:       var(--color-cyan)
    text-shadow: var(--glow-text-cyan)

Scroll behavior:
  Scrolling down → nav translates Y: -100% (hides)
  Scrolling up   → nav translates Y: 0 (shows)
  Transition:    transform 300ms var(--ease-out)

Mobile:
  Logo only + hamburger icon
  Menu opens as fullscreen overlay
```

### 7.8 ScanlineOverlay

```
Position: fixed, inset: 0, pointer-events: none
Z-index:  9998

Scanlines layer:
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.08) 2px,
    rgba(0, 0, 0, 0.08) 4px
  )

Noise layer:
  background-image: SVG feTurbulence (base64 encoded)
  opacity: 0.035
  mix-blend-mode: overlay

Flicker:
  animation: flicker 8000ms infinite steps(1)
  (very subtle — barely perceptible, adds to living feel)
```

### 7.9 TerminalEasterEgg

```
Trigger:    keydown '/' OR keydown 'k' with Ctrl/Cmd
Close:      keydown 'Escape' OR click outside

Animation:
  Open:   translateY(100%) → translateY(0), duration 400ms ease-out-expo
  Close:  translateY(0) → translateY(100%), duration 300ms ease-in

Panel:
  position:     fixed, bottom: 0, left: 0, right: 0
  height:       400px (desktop), 70vh (mobile)
  background:   var(--color-panel)
  border-top:   1px solid var(--color-border)
  z-index:      10000

Header bar:
  height:       40px
  border-bottom: 1px solid var(--color-border-dim)
  text:         "SHUBHAM_OS v1.0 — TYPE 'help' FOR COMMANDS"
  font:         JetBrains Mono var(--text-xs) var(--color-text-dim)

Output area:
  overflow-y:   auto
  padding:      var(--space-3)
  font:         JetBrains Mono 400 var(--text-sm)
  line-height:  1.8

Input line:
  display:      flex, align-items: center
  border-top:   1px solid var(--color-border-dim)
  padding:      var(--space-2) var(--space-3)

  Prompt prefix: '> ' in var(--color-green)
  Input field:   no border, transparent bg, full width, JetBrains Mono
  Cursor:        blinking '|' in green (animation: blink 1s infinite)

Command output colors:
  Normal output:    var(--color-text)
  Success/found:    var(--color-green)
  Error/not found:  var(--color-error)
  System messages:  var(--color-text-dim)
  Highlighted data: var(--color-cyan)
```

### 7.10 Form Inputs (Contact Form)

```
All inputs have terminal / command-line aesthetic:

Structure:
  label:   JetBrains Mono var(--text-xs) var(--color-text-dim), uppercase, letter-spacing 0.1em
  input:   full-width, no box border, only bottom border
  helper:  error message below, var(--text-2xs) var(--color-error)

Input default:
  background:     transparent
  border:         none
  border-bottom:  1px solid var(--color-border)
  color:          var(--color-text)
  font:           JetBrains Mono 400 var(--text-base)
  padding:        var(--space-2) 0
  outline:        none

Input focus:
  border-bottom:  1px solid var(--color-cyan)
  box-shadow:     0 2px 0 0 rgba(0,245,255,0.3)

Input error:
  border-bottom:  1px solid var(--color-error)

Placeholder text:
  color:          var(--color-text-faint)
  font:           JetBrains Mono 300 (lighter weight)

Textarea (message field):
  min-height: 120px
  resize: vertical
  Same styles as input
```

---

## 8. 🌐 Atmosphere & Special Effects

### 8.1 Multi-Layer Parallax (Hero Only)

```
Layer structure (back to front):
  Layer 1 — Grid lines:      moves at 2% of cursor offset   z-index: 1
  Layer 2 — Particles:       moves at 4% of cursor offset   z-index: 2
  Layer 3 — HUD elements:    moves at 6% of cursor offset   z-index: 3
  Layer 4 — Name + CTA:      0% movement (fixed)            z-index: 4

Implementation:
  On mousemove, read normalized cursor position: x = (e.clientX / window.innerWidth - 0.5)
  Each layer: transform: translateX(x * multiplier * px) translateY(y * multiplier * px)
  Use ref.style.transform directly — never React state

Mobile: Parallax disabled entirely
```

### 8.2 Particle Field (Hero Background)

```
Library: React Three Fiber

Config:
  particle count:   80 (desktop), 40 (tablet), 0 (mobile — use CSS grid only)
  particle size:    1.5px points
  particle color:   var(--color-cyan) at 0.6 opacity
  connection lines: drawn between particles within 150px distance
  line color:       var(--color-cyan) at 0.15 opacity
  animation speed:  very slow drift (0.0005 units/frame)

Mouse interaction:
  particles within 100px of cursor: repel away (force: 0.02)
  force diminishes with distance (inverse square)
  particles return to origin when cursor leaves area (spring force: 0.005)

Performance:
  useFrame for all updates — no setInterval
  Lazy loaded — does not block initial paint
  disposed properly on component unmount
```

### 8.3 Spotlight Cursor Effect

```
Implementation:
  Single div, fixed position, pointer-events: none
  background: radial-gradient(
    600px circle at var(--cursor-x) var(--cursor-y),
    rgba(0, 245, 255, 0.04),
    transparent 80%
  )

Update:
  document.addEventListener('mousemove', (e) => {
    spotlightEl.style.setProperty('--cursor-x', e.clientX + 'px')
    spotlightEl.style.setProperty('--cursor-y', e.clientY + 'px')
  })

Mobile: disabled
```

### 8.4 Scroll Velocity → Chromatic Aberration

```
Threshold: scroll velocity > 80px per frame triggers effect

Effect:
  document.body.classList.add('aberration')
  CSS class applies: animation: aberration 200ms ease-out forwards

  @keyframes aberration:
    filter: drop-shadow(2px 0 0 rgba(255,0,0,0.5)) drop-shadow(-2px 0 0 rgba(0,255,255,0.5))

Cleanup:
  Remove class on animationend event
  Debounce to prevent triggering on every scroll frame

Mobile: disabled (touch scroll feels different)
```

### 8.5 3D Card Tilt

```
Applies to: ProjectCard components only

Config:
  perspective: 1000px (set on card parent container)
  max-rotation: 8 degrees
  transform-style: preserve-3d

Calculation on mousemove:
  const rect = card.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8
  const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 8
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

Reset on mouseleave:
  card.style.transition = 'transform 300ms var(--ease-out)'
  card.style.transform = 'rotateX(0deg) rotateY(0deg)'

Cleanup:
  Remove transition on next mousemove to avoid lag

Mobile: disabled (touch devices)
```

---

## 9. 📱 Responsive Design Rules

### 9.1 What Changes on Mobile

| Feature | Desktop | Mobile |
|---|---|---|
| Particle field | 80 particles, interactive | Hidden (CSS grid only) |
| Parallax | Active (3 layers) | Disabled |
| 3D card tilt | Active | Disabled |
| Spotlight cursor | Active | Disabled |
| Custom cursor | Crosshair | Hidden (use system cursor) |
| Chromatic aberration | On fast scroll | Disabled |
| Scanlines | Active | Active (kept — lightweight) |
| Noise overlay | Active | Active (kept) |
| Boot sequence | Full animation | Full animation |
| All GSAP reveals | Active | Active (simplified: y: 20 not 40) |
| Ambient sound | Toggle available | Toggle available |
| Terminal easter egg | Keyboard shortcut | Disabled (no keyboard) |
| Nav | Full links | Hamburger → overlay |

### 9.2 Touch Interaction Replacements

| Desktop Interaction | Mobile Replacement |
|---|---|
| 3D card tilt on hover | Standard scale(1.02) on tap |
| Parallax on mousemove | Static background |
| Cursor crosshair | System cursor |
| Terminal via keyboard | Not available |

### 9.3 Mobile Typography Adjustments

- Hero name: `clamp(2.5rem, 10vw, 4rem)` on mobile
- Section headings: `clamp(1.5rem, 7vw, 2.5rem)` on mobile
- All letter-spacing values reduced by 30% on mobile

---

## 10. ♿ Accessibility Standards

### 10.1 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable all CSS animations */
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

```ts
// Disable all GSAP animations
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (!prefersReduced) {
  // All GSAP scroll animations here
}
```

### 10.2 Focus Styles

```css
/* Visible focus ring for keyboard navigation */
:focus-visible {
  outline: 1.5px solid var(--color-cyan);
  outline-offset: 4px;
  box-shadow: var(--glow-cyan-sm);
}
```

### 10.3 Color Contrast Requirements

| Text | Background | Ratio | WCAG Level |
|---|---|---|---|
| `--color-text` (#c8c8c8) | `--color-bg` (#050505) | 12.6:1 | AAA ✅ |
| `--color-cyan` (#00f5ff) | `--color-bg` (#050505) | 14.7:1 | AAA ✅ |
| `--color-green` (#39ff14) | `--color-bg` (#050505) | 13.2:1 | AAA ✅ |
| `--color-text-dim` (#555) | `--color-bg` (#050505) | 4.6:1 | AA ✅ |

### 10.4 Semantic HTML Requirements

```
Page structure:
  <header>    → NavBar
  <main>      → All 6 section chapters
  <section>   → Each chapter (with aria-label="Chapter name")
  <footer>    → Footer content

Heading hierarchy:
  <h1>  → Hero name (one per page)
  <h2>  → Section chapter titles (Chapter 00–05)
  <h3>  → Sub-section headings (card titles, panel titles)
  <h4>  → Minor labels (client names, category titles)

Interactive elements:
  All buttons: descriptive aria-label if icon-only
  Sound toggle: aria-label="Toggle ambient sound"
  Close buttons: aria-label="Close terminal"
  External links: aria-label includes "(opens in new tab)"
```

---

## 11. 🔤 Content Formatting Standards

### 11.1 Text Casing Rules

| Element | Case | Example |
|---|---|---|
| Section chapter labels | UPPERCASE | `// CHAPTER 02 — STACK` |
| Nav links | UPPERCASE | `INITIALIZE` |
| Skill badges | UPPERCASE | `REACT.JS` |
| Tag pills | Mixed case | `React Query` |
| Terminal commands | lowercase | `ls projects` |
| Terminal output | Mixed | varies |
| Body descriptions | Sentence case | `Integrated 50+ REST APIs...` |
| HUD tags | UPPERCASE | `LAT: 23.2599° N` |
| Button labels | UPPERCASE | `ENTER SYSTEM` |

### 11.2 Section Heading Format

Every section heading follows this exact format:
```
// CHAPTER [XX] — [NAME]
```

- `//` prefix: `var(--color-cyan)`, same size as heading
- `CHAPTER [XX]`: `var(--color-text-dim)`, smaller
- `—` separator: `var(--color-text-dim)`
- `[NAME]`: `var(--color-white)`, full heading size

### 11.3 Terminal Command Format

```
$ [command]  [argument]    [value/link]    [optional label]
```

Example:
```
$ open --mail    shubhamshrivastava2213@gmail.com
$ curl --resume  Shubham_Shrivastava_Resume.pdf  [ DOWNLOAD ]
```

Formatting:
- `$` prefix: `var(--color-green)`
- command + flags: `var(--color-text-dim)`
- value/link: `var(--color-cyan)`
- optional action label: `var(--color-text-dim)` in brackets

---

## 12. 📋 Design Checklist for New Components

Before considering any new component complete, verify:

- ⬜ Uses only CSS custom property tokens — no hardcoded hex values
- ⬜ Uses only spacing scale values — no arbitrary pixel values
- ⬜ Uses correct font (Orbitron for display, JetBrains Mono for everything else)
- ⬜ Has hover state with neon glow
- ⬜ Has `transition` on all animating properties
- ⬜ Uses `border-radius: 0` (no rounded corners)
- ⬜ Is keyboard accessible (focusable + visible focus ring)
- ⬜ Has `aria-label` if icon-only or non-obvious
- ⬜ Respects `prefers-reduced-motion`
- ⬜ Has TypeScript interface for all props
- ⬜ Renders correctly on mobile (or is explicitly hidden with a comment explaining why)
- ⬜ Has no `console.log` statements
- ⬜ Matches the visual specification in this document

---

*Document version: 1.0*
*Next document: content.md*
