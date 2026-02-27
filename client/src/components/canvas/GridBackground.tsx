import React, { useRef, useEffect } from 'react'

interface GridBackgroundProps {
  mousePosition: React.RefObject<{ x: number; y: number }>
}

const GridBackgroundComponent: React.FC<GridBackgroundProps> = ({ mousePosition }) => {
  const gridRef = useRef<HTMLDivElement>(null)
  const isMobile = window.matchMedia('(max-width: 767px)').matches

  useEffect(() => {
    if (isMobile || !gridRef.current) return

    const handleMouseMove = () => {
      if (!gridRef.current) return
      
      const mouse = mousePosition.current
      const offsetX = ((mouse.x / window.innerWidth) - 0.5) * 20
      const offsetY = ((mouse.y / window.innerHeight) - 0.5) * 20
      
      gridRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mousePosition, isMobile])

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
        transition: 'transform 0.1s ease-out',
      }}
    />
  )
}

export const GridBackground = React.lazy(() =>
  Promise.resolve({ default: GridBackgroundComponent })
)
