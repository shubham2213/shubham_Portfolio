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
