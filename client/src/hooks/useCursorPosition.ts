import { useEffect, useRef } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

/**
 * Hook to track mouse position and update element via CSS custom properties.
 * Uses ref.style.setProperty directly — NEVER React state for performance.
 * Returns normalized {x, y} position.
 */
export const useCursorPosition = () => {
  const positionRef = useRef<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return positionRef;
};
