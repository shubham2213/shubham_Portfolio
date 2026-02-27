import { useEffect, useRef } from 'react';

interface CursorPixelPosition {
  x: number;
  y: number;
}

/**
 * Hook to track raw mouse position in pixels for UI positioning.
 * Returns {x, y} in pixel coordinates (e.g., x: 500px, y: 300px).
 * Used for CustomCursor, SpotlightCursor, and other UI elements that need exact positioning.
 * Uses ref — NEVER React state for performance.
 * Disabled on mobile (max-width: 767px) — returns {x: 0, y: 0}.
 */
export const useCursorPixelPosition = () => {
  const positionRef = useRef<CursorPixelPosition>({ x: 0, y: 0 });
  const isMobileRef = useRef<boolean>(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth <= 767;
      if (isMobileRef.current) {
        positionRef.current = { x: 0, y: 0 };
      }
    };

    checkMobile();

    const handleMouseMove = (e: MouseEvent) => {
      // Skip on mobile
      if (isMobileRef.current) return;

      // Store raw pixel coordinates
      positionRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return positionRef;
};
