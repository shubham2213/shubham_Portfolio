# Cursor Position Hooks — Architecture Guide

This document explains the separation of concerns pattern used for cursor tracking.

## Two Hooks, Two Purposes

### `useCursorPosition()` — Normalized Coordinates

**Purpose:** Mathematical calculations and effects (parallax, animations)

**Returns:** `{ x: -1 to 1, y: -1 to 1 }`

**Use Cases:**
- Parallax effects (`useParallax` hook)
- 3D tilt calculations
- Any effect that needs relative position from center

**Example:**
```tsx
const cursorPosition = useCursorPosition()
// At viewport center: { x: 0, y: 0 }
// At top-left corner: { x: -1, y: -1 }
// At bottom-right: { x: 1, y: 1 }
```

**Used By:**
- `useParallax.ts`
- `Hero.tsx` (passes to ParticleField)

---

### `useCursorPixelPosition()` — Raw Pixel Coordinates

**Purpose:** UI element positioning (cursor, spotlight, tooltips)

**Returns:** `{ x: pixels, y: pixels }`

**Use Cases:**
- Custom cursor positioning
- Spotlight effects
- Tooltips that follow mouse
- Any UI element that needs exact pixel position

**Example:**
```tsx
const cursorPosition = useCursorPixelPosition()
// At any position: { x: 543, y: 287 } (actual pixel coordinates)
```

**Used By:**
- `CustomCursor.tsx`
- `SpotlightCursor.tsx`

---

## Why Two Hooks?

### Single Responsibility Principle
Each hook has ONE clear job:
- `useCursorPosition` = math/calculations
- `useCursorPixelPosition` = raw tracking

### Zero Coupling
Components don't need to know about coordinate systems:
- `CustomCursor` asks for pixels → gets pixels
- `useParallax` asks for normalized → gets normalized
- No conversions needed in components

### Performance
- No unnecessary conversions in render loops
- Each hook optimized for its specific use case
- Parallax can add smoothing without affecting cursor

### Maintainability
- Clear naming tells you exactly what you get
- Easy to debug: check which hook a component uses
- Easy to extend: add `useCursorVelocity()`, `useCursorAngle()`, etc.

### Testability
- Each hook tested independently
- Mock one without affecting the other
- Clear contracts: "returns pixels" vs "returns -1 to 1"

---

## Decision Tree: Which Hook to Use?

```
Need cursor position?
│
├─ For UI positioning (cursor, tooltip, spotlight)?
│  └─ Use useCursorPixelPosition() → { x: pixels, y: pixels }
│
└─ For effects/calculations (parallax, tilt, animations)?
   └─ Use useCursorPosition() → { x: -1 to 1, y: -1 to 1 }
```

---

## Implementation Details

Both hooks share the same architecture:

1. **Ref-based storage** — No React state (performance)
2. **Mobile detection** — Returns `{x: 0, y: 0}` on mobile
3. **Resize handling** — Updates mobile state on window resize
4. **Event cleanup** — Removes listeners on unmount

The ONLY difference is the coordinate system returned.

---

## Adding New Cursor Hooks

Following this pattern, you can easily add:

```tsx
// useCursorVelocity.ts
export const useCursorVelocity = () => {
  // Returns { vx: pixels/s, vy: pixels/s }
  // Uses useCursorPixelPosition internally
}

// useCursorAngle.ts
export const useCursorAngle = () => {
  // Returns { angle: radians }
  // Uses useCursorPosition internally
}

// useCursorDistance.ts
export const useCursorDistance = (targetRef: RefObject<HTMLElement>) => {
  // Returns { distance: pixels }
  // Uses useCursorPixelPosition internally
}
```

Each hook has ONE job, composes with others, and is independently testable.

---

## Industry Pattern

This is the same pattern used in production libraries:

**React Router:**
```tsx
useLocation()  → location object
useParams()    → URL params
useNavigate()  → navigation function
```

**Framer Motion:**
```tsx
useMotionValue()  → raw animated value
useTransform()    → transformed value
useSpring()       → spring physics value
```

**Our Cursor Hooks:**
```tsx
useCursorPosition()      → normalized coordinates
useCursorPixelPosition() → raw pixel coordinates
useParallax()            → parallax transform
```

Composable, not monolithic. ✅

---

**Architecture Pattern:** Separation of Concerns  
**Principle:** Single Responsibility  
**Benefit:** Maintainability, Testability, Scalability
