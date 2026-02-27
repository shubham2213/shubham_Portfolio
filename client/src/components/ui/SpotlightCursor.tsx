import { useEffect, useRef } from 'react';
import { useCursorPixelPosition } from '../../hooks/useCursorPixelPosition';

/**
 * SpotlightCursor — Large radial gradient that follows the mouse
 * 
 * Spec: design-system.md § 8.3
 * - 600px radius radial gradient
 * - Color: rgba(0, 245, 255, 0.04) at center fading to transparent
 * - Updates via CSS custom properties (--cursor-x, --cursor-y)
 * - Direct DOM manipulation only (no React state)
 * - Disabled on mobile (max-width: 767px)
 */
export const SpotlightCursor = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const cursorPosition = useCursorPixelPosition();

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    // Check if mobile
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (isMobile) {
      spotlight.style.display = 'none';
      return;
    }

    let animationFrameId: number;

    const updateSpotlightPosition = () => {
      const { x, y } = cursorPosition.current;
      spotlight.style.setProperty('--cursor-x', `${x}px`);
      spotlight.style.setProperty('--cursor-y', `${y}px`);
      animationFrameId = requestAnimationFrame(updateSpotlightPosition);
    };

    animationFrameId = requestAnimationFrame(updateSpotlightPosition);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorPosition]);

  return (
    <div
      ref={spotlightRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9996,
        background: `radial-gradient(
          600px circle at var(--cursor-x, 50%) var(--cursor-y, 50%),
          rgba(0, 245, 255, 0.04),
          transparent 80%
        )`,
      }}
    />
  );
};
