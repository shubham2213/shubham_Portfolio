# Canvas Components — Usage Guide

This folder contains all Three.js / React Three Fiber components for the portfolio.

## Components

### ParticleField
Interactive particle network with connection lines and mouse repulsion.

### GridBackground
CSS-only animated grid with parallax mouse movement.

---

## Usage Example — Hero Section

```tsx
import { Suspense, useRef } from 'react'
import { useCursorPosition } from '@/hooks/useCursorPosition'
import { ParticleField } from '@/components/canvas/ParticleField'
import { GridBackground } from '@/components/canvas/GridBackground'

export const Hero = () => {
  const mousePositionRef = useCursorPosition()

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background layers — behind all content */}
      <Suspense fallback={null}>
        <GridBackground mousePosition={mousePositionRef} />
        <ParticleField mousePosition={mousePositionRef} />
      </Suspense>

      {/* Hero content — in front of canvas */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <h1>SHUBHAM SHRIVASTAVA</h1>
        <p>Full Stack Developer</p>
        {/* ... rest of hero content */}
      </div>
    </section>
  )
}
```

---

## Important Notes

### 1. Lazy Loading
Both components are lazy loaded using `React.lazy()`. Always wrap them in `<Suspense>` with `fallback={null}`.

### 2. Mouse Position Hook
Both components require the `useCursorPosition` hook to track mouse movement:

```tsx
const mousePositionRef = useCursorPosition()
```

Pass this ref to both components via the `mousePosition` prop.

### 3. Positioning
- **GridBackground**: `z-index: 1` (back layer)
- **ParticleField**: `z-index: 2` (middle layer)
- **Hero content**: `z-index: 10` (front layer)

Both canvas components use `position: absolute` and `pointer-events: none`.

### 4. Responsive Behavior
- **Mobile (< 768px)**: Both components return `null` (disabled)
- **Tablet (768px - 1024px)**: 40 particles
- **Desktop (> 1024px)**: 80 particles

### 5. Performance
- All animations use `useFrame` hook (no `setInterval`)
- Particles and lines update every frame at 60fps
- Geometries and materials are properly disposed on unmount
- Lazy loading prevents blocking initial page paint

### 6. Canvas Configuration
The ParticleField uses these Three.js settings:
- Camera position: `[0, 0, 15]`
- FOV: `75`
- Alpha: `true` (transparent background)
- Antialias: `true`

---

## Customization

### Particle Count
Edit the `useMemo` in `ParticleField.tsx`:

```tsx
const particleCount = useMemo(() => {
  const width = window.innerWidth
  if (width < 768) return 0
  if (width < 1024) return 40  // ← change tablet count
  return 80                     // ← change desktop count
}, [])
```

### Grid Cell Size
Edit the `backgroundSize` in `GridBackground.tsx`:

```tsx
backgroundSize: '40px 40px',  // ← change grid spacing
```

### Particle Colors
Edit the material colors in `ParticleField.tsx`:

```tsx
<pointsMaterial
  color="#00f5ff"  // ← particle color
  opacity={0.6}    // ← particle opacity
/>

<lineBasicMaterial
  color="#00f5ff"  // ← line color
  opacity={0.15}   // ← line opacity
/>
```

### Mouse Interaction Strength
Edit the force values in the `useFrame` hook:

```tsx
const mouseInfluenceRadius = 100 / 50  // ← repulsion radius
const force = ... * 0.02               // ← repulsion force
const toOrigin = ... * 0.005           // ← spring return force
```

---

## Troubleshooting

### Particles not visible
- Check that Three.js and @react-three/fiber are installed
- Verify the Canvas has a transparent background (`gl={{ alpha: true }}`)
- Ensure the hero section has `overflow: hidden` to prevent scrollbars

### Mouse interaction not working
- Verify `useCursorPosition` hook is imported and used correctly
- Check that the ref is passed to both components
- Ensure `pointer-events: none` is set on canvas containers

### Performance issues
- Reduce particle count for lower-end devices
- Increase connection distance threshold to reduce line calculations
- Disable on mobile (already implemented)

---

## Dependencies

```json
{
  "three": "^0.160.0",
  "@react-three/fiber": "^8.15.0",
  "@react-three/drei": "^9.92.0"
}
```

All dependencies are already installed in this project.
