/**
 * ScanlineOverlay Component
 * 
 * A fixed atmospheric overlay that adds retro CRT monitor effects:
 * - Horizontal scanlines (repeating gradient every 4px)
 * - Subtle noise texture (SVG feTurbulence)
 * - Gentle flicker animation
 * 
 * This component is purely visual and never blocks user interactions.
 * Z-index: 9998 (from design-system.md Section 4.4)
 */

export const ScanlineOverlay = () => {
  // Inline SVG noise filter as base64 data URI
  const noiseSvg = `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <filter id="noise">
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.9" 
          numOctaves="4" 
          stitchTiles="stitch"
        />
      </filter>
      <rect width="300" height="300" filter="url(#noise)" opacity="1"/>
    </svg>
  `.trim())}`

  return (
    <div
      className="scanline-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9998,
        
        // Scanlines layer: horizontal lines every 4px
        background: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.08) 2px,
            rgba(0, 0, 0, 0.08) 4px
          )
        `,
        
        // Apply subtle flicker animation from animations.css
        animation: 'flicker 8s infinite',
      }}
      aria-hidden="true"
    >
      {/* Noise texture layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${noiseSvg}")`,
          backgroundRepeat: 'repeat',
          opacity: 0.035,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  )
}
