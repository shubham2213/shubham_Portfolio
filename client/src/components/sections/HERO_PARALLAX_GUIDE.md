# Multi-Layer Parallax Implementation Guide

This guide shows how the multi-layer parallax system is implemented in `Hero.tsx`.

## Architecture Overview

The parallax system uses **4 distinct layers** with different movement intensities:

| Layer | Component | Multiplier | Movement | Z-Index |
|-------|-----------|------------|----------|---------|
| Layer 1 | GridBackground | 0.02 | Subtle (background) | 1 |
| Layer 2 | ParticleField | 0.04 | Medium (particles) | 2 |
| Layer 3 | HUD Elements | 0.06 | Pronounced (UI) | 3 |
| Layer 4 | Name + CTA | 0 | Fixed (no movement) | 4 |

## How It Works

### 1. Normalized Cursor Position

The `useCursorPosition` hook returns normalized coordinates from **-1 to 1**:

```typescript
// At viewport center: { x: 0, y: 0 }
// At top-left corner: { x: -1, y: -1 }
// At bottom-right corner: { x: 1, y: 1 }

// Formula:
x = (mouseX / windowWidth - 0.5) * 2
y = (mouseY / windowHeight - 0.5) * 2
```

### 2. Parallax Calculation

The `useParallax` hook calculates offset using:

```typescript
offsetX = normalizedX * multiplier * maxOffset
offsetY = normalizedY * multiplier * maxOffset

// Example with multiplier: 0.04, maxOffset: 50px
// If cursor is at right edge (x = 1):
offsetX = 1 * 0.04 * 50 = 2px to the right

// If cursor is at left edge (x = -1):
offsetX = -1 * 0.04 * 50 = -2px to the left
```

### 3. Direct DOM Manipulation

All position updates use `ref.style.transform` directly — **NEVER React state**:

```typescript
elementRef.current.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`
```

This is done inside a `requestAnimationFrame` loop for smooth 60fps updates.

## Implementation in Hero.tsx

### Layer 1 — GridBackground (multiplier: 0.02)

```tsx
// In GridBackground.tsx
const gridRef = useParallax<HTMLDivElement>({
  multiplier: 0.02,  // Subtle movement
  maxOffset: 50,
})

return (
  <div
    ref={gridRef}
    style={{
      position: 'absolute',
      zIndex: 1,
      willChange: 'transform',
      // ... grid styling
    }}
  />
)
```

### Layer 2 — ParticleField (multiplier: 0.04)

```tsx
// In ParticleField.tsx
const canvasRef = useParallax<HTMLDivElement>({
  multiplier: 0.04,  // Medium movement
  maxOffset: 50,
})

return (
  <div
    ref={canvasRef}
    style={{
      position: 'absolute',
      zIndex: 2,
      willChange: 'transform',
    }}
  >
    <Canvas>
      <Particles />
    </Canvas>
  </div>
)
```

### Layer 3 — HUD Elements (multiplier: 0.06)

```tsx
// In Hero.tsx
const hudRef = useParallax<HTMLDivElement>({
  multiplier: 0.06,  // More pronounced movement
  maxOffset: 50,
})

return (
  <div
    ref={hudRef}
    className="absolute inset-0 pointer-events-none"
    style={{ zIndex: 3, willChange: 'transform' }}
  >
    {/* HUD coordinates, status, timestamp */}
  </div>
)
```

### Layer 4 — Name + CTA (multiplier: 0)

```tsx
// In Hero.tsx
const contentRef = useParallax<HTMLDivElement>({
  multiplier: 0,  // No movement — stays fixed
  maxOffset: 0,
})

return (
  <div
    ref={contentRef}
    className="relative text-center"
    style={{ zIndex: 4 }}
  >
    <h1>SHUBHAM SHRIVASTAVA</h1>
    <button>ENTER SYSTEM_</button>
  </div>
)
```

## Mobile Behavior

On mobile (max-width: 767px), the parallax system is **completely disabled**:

- `useCursorPosition` returns `{ x: 0, y: 0 }`
- `useParallax` still runs but with zero offset
- GridBackground and ParticleField return `null` (not rendered at all)
- HUD elements and content remain visible but don't move

## Performance Optimizations

1. **Direct DOM manipulation** — No React re-renders
2. **requestAnimationFrame** — Synced with browser refresh rate
3. **willChange: transform** — GPU acceleration hint
4. **translate3d** — Forces GPU compositing
5. **Cleanup** — cancelAnimationFrame on unmount

## Customizing Multipliers

Want different parallax intensities? Just change the multiplier:

```tsx
// Very subtle (background elements)
useParallax({ multiplier: 0.01, maxOffset: 50 })

// Subtle (grid, distant elements)
useParallax({ multiplier: 0.02, maxOffset: 50 })

// Medium (particles, mid-ground)
useParallax({ multiplier: 0.04, maxOffset: 50 })

// Pronounced (HUD, foreground UI)
useParallax({ multiplier: 0.06, maxOffset: 50 })

// Strong (dramatic effect)
useParallax({ multiplier: 0.08, maxOffset: 50 })

// No movement (fixed content)
useParallax({ multiplier: 0, maxOffset: 0 })
```

## Complete Hero.tsx Structure

```tsx
export const Hero = () => {
  const mousePosition = useCursorPosition()
  
  const hudRef = useParallax<HTMLDivElement>({
    multiplier: 0.06,
    maxOffset: 50,
  })

  const contentRef = useParallax<HTMLDivElement>({
    multiplier: 0,
    maxOffset: 0,
  })

  return (
    <section id="hero" className="relative min-h-screen">
      {/* Layer 1 — Grid (0.02) */}
      <Suspense fallback={null}>
        <GridBackground />
      </Suspense>

      {/* Layer 2 — Particles (0.04) */}
      <Suspense fallback={null}>
        <ParticleField mousePosition={mousePosition} />
      </Suspense>

      {/* Layer 3 — HUD (0.06) */}
      <div ref={hudRef} style={{ zIndex: 3 }}>
        {/* Coordinates, status, timestamp */}
      </div>

      {/* Layer 4 — Content (0) */}
      <div ref={contentRef} style={{ zIndex: 4 }}>
        {/* Name, tagline, CTA */}
      </div>
    </section>
  )
}
```

## Troubleshooting

### Parallax not working?

1. Check that element has `position: absolute` or `relative`
2. Verify `willChange: transform` is set
3. Ensure mobile detection isn't blocking it (check window width)
4. Check browser console for errors

### Performance issues?

1. Reduce `maxOffset` value (try 30 instead of 50)
2. Lower multiplier values
3. Reduce particle count in ParticleField
4. Check if too many layers are active

### Jittery movement?

1. Ensure using `translate3d` (not `translate`)
2. Add `will-change: transform` to element
3. Check if other animations are conflicting
4. Verify requestAnimationFrame is being used

## Design System Compliance

This implementation follows the design system specifications:

- ✅ Section 8.1 — Multi-Layer Parallax specification
- ✅ Uses ref.style.transform directly — NEVER React state
- ✅ Disabled on mobile (max-width: 767px)
- ✅ requestAnimationFrame for smooth updates
- ✅ Normalized cursor position (-1 to 1)
- ✅ 4 distinct layers with different multipliers
- ✅ GPU-accelerated with translate3d and willChange

---

**Phase 2, Task 2.4 — Multi-Layer Parallax** ✅ Complete
