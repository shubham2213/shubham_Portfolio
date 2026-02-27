import React from 'react'
import { useParallax } from '@/hooks/useParallax'

const GridBackgroundComponent: React.FC = () => {
  const isMobile = window.matchMedia('(max-width: 767px)').matches
  
  // Layer 1 — Background grid with subtle parallax (2% movement)
  const gridRef = useParallax<HTMLDivElement>({
    multiplier: 0.02,
    maxOffset: 50,
  })

  if (isMobile) return null

  return (
    <div
      ref={gridRef}
      style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '120%',
        height: '120%',
        zIndex: 1,
        pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(to right, rgba(0, 245, 255, 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 245, 255, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        willChange: 'transform',
      }}
    />
  )
}

export const GridBackground = React.lazy(() =>
  Promise.resolve({ default: GridBackgroundComponent })
)
