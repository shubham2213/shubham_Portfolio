# Changelog

## [2026-02-26]
- [Fix] Created missing route files (projects, views, contact, resume) to resolve TypeScript compilation errors
- [Fix] Created missing middleware files (errorHandler, rateLimiter) to resolve TypeScript compilation errors
- [Fix] Created Prisma client export in src/prisma/index.ts
- [Fix] Updated route handlers to use correct Prisma model names (Message instead of Contact, ResumeLog instead of ResumeDownload, viewsCount instead of views)
- [Feature] Created client/src/styles/globals.css with complete CSS custom property tokens (colors, glows, gradients, fonts, spacing, animation durations, easing curves), base resets, global styles, selection color, hidden scrollbar, and Tailwind v4 import
- [Feature] Created client/src/styles/animations.css with all keyframe animations (glitch, aberration, blink, flicker, pulseGlow, travelDown, typewriter)
- [Feature] Created client/src/hooks/useCursorPosition.ts hook for tracking mouse position using refs and setProperty (no React state)
- [Feature] Created client/src/components/ui/CustomCursor.tsx component with outer ring (16px, 100ms lag) and inner dot (4px, immediate), hover interactions on interactive elements, click animation, and mobile hidden
- [Feature] Mounted CustomCursor component in client/src/App.tsx
- [Feature] Created client/src/components/ui/ScanlineOverlay.tsx component with fixed position (inset: 0), pointer-events: none, z-index: 9998, scanlines layer (repeating-linear-gradient every 4px), noise layer (SVG feTurbulence at 0.035 opacity), and flicker animation (8s infinite)
- [Feature] Mounted ScanlineOverlay component in client/src/App.tsx alongside CustomCursor
- [Feature] Created client/src/components/ui/SpotlightCursor.tsx component with 600px radial gradient (rgba(0, 245, 255, 0.04) to transparent), CSS custom properties (--cursor-x, --cursor-y), direct DOM manipulation via setProperty, z-index: 9996, pointer-events: none, and disabled on mobile (max-width: 767px)
- [Feature] Mounted SpotlightCursor component in client/src/App.tsx between CustomCursor and ScanlineOverlay
- [Feature] Created client/src/lib/gsap.ts with GSAP initialization, ScrollTrigger plugin registration, and default settings (ease: 'power3.out', duration: 0.8)
- [Feature] Created client/src/lib/lenis.ts with initLenis function that initializes Lenis with exact settings (duration: 1.2, custom easing function, vertical orientation, smoothWheel: true), integrates with GSAP ticker, and sets lagSmoothing(0)
- [Feature] Integrated Lenis smooth scroll in client/src/App.tsx using useEffect with proper cleanup (lenis.destroy() on unmount)
- [Feature] Added GSAP verification test animation in client/src/App.tsx with test box (50x50px cyan), gsap.from() animation (opacity 0→1, y: 40→0), ScrollTrigger integration with debug markers, prefers-reduced-motion check, gsap.context() wrapper, and proper cleanup with ctx.revert()
- [Refactor] Removed GSAP test animation from client/src/App.tsx after successful verification (all checks passed: GSAP context created, ScrollTrigger fired, Lenis smooth scroll working)
- [Docs] Updated docs/roadmap.md to mark Phase 1, Task 1.6 (GSAP Setup Verification) as complete — Phase 1 now 67% complete
- [Feature] Added .aberration CSS class to client/src/styles/animations.css that applies aberration keyframe animation (200ms ease-out forwards)
- [Feature] Created client/src/hooks/useScrollVelocity.ts hook that tracks scroll velocity using refs, calculates pixels per frame at 60fps, adds 'aberration' class to document.body when velocity exceeds 80px/frame, removes class on animationend event, debounced at 50ms, and disabled on mobile (max-width: 767px)
- [Feature] Exported useScrollVelocity from client/src/hooks/index.ts
- [Fix] Fixed React purity error in useScrollVelocity by initializing lastTimestamp ref with 0 and setting Date.now() inside useEffect
- [Fix] Fixed TypeScript error in useScrollVelocity by using setTimeout instead of window.setTimeout for correct type inference
- [Feature] Created client/src/components/ui/NavBar.tsx with fixed top positioning (height: 64px/--space-8), background rgba(5,5,5,0.85) with backdrop-filter blur(12px), border-bottom 1px solid --color-border-dim, z-index 100, padding 0 48px (--space-6), logo 'SS' in Orbitron 700 14px cyan with 3px letter-spacing, center nav links (INITIALIZE/IDENTITY/STACK/WORK LOG/SIGNAL/CONNECT) in JetBrains Mono 11px uppercase with 0.15em letter-spacing, hover state with color change to --color-text and '// ' prefix fade-in in cyan, active section tracking with IntersectionObserver, sound toggle placeholder button '[ ♪ SOUND ]', scroll behavior using GSAP (scrolling down → translateY -100%, scrolling up → translateY 0, 300ms ease-out transition), mobile hamburger menu with fullscreen overlay, smooth scroll to sections on click, TypeScript interfaces for props and nav links
- [Feature] Mounted NavBar component in client/src/App.tsx with 6 temporary test sections (hero, about, skills, projects, experience, contact) for testing navbar scroll behavior, active section tracking, and smooth scroll navigation
