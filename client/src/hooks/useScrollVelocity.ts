import { useEffect, useRef } from 'react'

/**
 * useScrollVelocity
 * 
 * Tracks scroll velocity and triggers chromatic aberration effect
 * when scroll speed exceeds threshold.
 * 
 * - Monitors scroll events and calculates velocity (px per frame)
 * - Adds 'aberration' class to document.body when velocity > 80px/frame
 * - Removes class after animation completes
 * - Debounced to prevent excessive triggering
 * - Disabled on mobile (max-width: 767px)
 */
export function useScrollVelocity() {
  const lastScrollY = useRef(0)
  const lastTimestamp = useRef(0)
  const isAnimating = useRef(false)
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // Check if mobile - disable on mobile devices
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (isMobile) return

    // Initialize refs inside effect (after mount)
    lastScrollY.current = window.scrollY
    lastTimestamp.current = Date.now()

    const handleScroll = () => {
      // Skip if animation is already playing
      if (isAnimating.current) return

      // Clear existing debounce timer
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }

      // Debounce: only calculate velocity after scroll settles briefly
      debounceTimer.current = setTimeout(() => {
        const currentScrollY = window.scrollY
        const currentTimestamp = Date.now()

        // Calculate velocity (pixels per millisecond, converted to pixels per frame at 60fps)
        const deltaY = Math.abs(currentScrollY - lastScrollY.current)
        const deltaTime = currentTimestamp - lastTimestamp.current
        
        // Convert to pixels per frame (assuming 60fps = ~16.67ms per frame)
        const velocity = (deltaY / deltaTime) * 16.67

        // Update refs for next calculation
        lastScrollY.current = currentScrollY
        lastTimestamp.current = currentTimestamp

        // Trigger aberration effect if velocity exceeds threshold
        if (velocity > 80) {
          isAnimating.current = true
          document.body.classList.add('aberration')

          // Remove class after animation completes
          const handleAnimationEnd = () => {
            document.body.classList.remove('aberration')
            isAnimating.current = false
            document.body.removeEventListener('animationend', handleAnimationEnd)
          }

          document.body.addEventListener('animationend', handleAnimationEnd)
        }
      }, 50) // 50ms debounce
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }
      // Clean up any remaining class
      document.body.classList.remove('aberration')
    }
  }, [])
}
