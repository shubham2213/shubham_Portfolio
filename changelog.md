# Changelog

## [2026-02-26]
- [Fix] Created missing route files (projects, views, contact, resume) to resolve TypeScript compilation errors
- [Fix] Created missing middleware files (errorHandler, rateLimiter) to resolve TypeScript compilation errors
- [Fix] Created Prisma client export in src/prisma/index.ts
- [Fix] Updated route handlers to use correct Prisma model names (Message instead of Contact, ResumeLog instead of ResumeDownload, viewsCount instead of views)
- [Feature] Created client/src/styles/globals.css with complete CSS custom property tokens (colors, glows, gradients, fonts, spacing, animation durations, easing curves), base resets, global styles, selection color, hidden scrollbar, and Tailwind v4 import
- [Feature] Created client/src/styles/animations.css with all keyframe animations (glitch, aberration, blink, flicker, pulseGlow, travelDown, typewriter)
