# Changelog

## [2026-02-26]
- [Fix] Created missing route files (projects, views, contact, resume) to resolve TypeScript compilation errors
- [Fix] Created missing middleware files (errorHandler, rateLimiter) to resolve TypeScript compilation errors
- [Fix] Created Prisma client export in src/prisma/index.ts
- [Fix] Updated route handlers to use correct Prisma model names (Message instead of Contact, ResumeLog instead of ResumeDownload, viewsCount instead of views)
