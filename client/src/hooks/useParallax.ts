import { useEffect, useRef } from 'react';
import { useCursorPosition } from './useCursorPosition';

interface UseParallaxOptions {
  multiplier: number; // 0 to 1 — controls parallax intensity
  maxOffset?: number; // Maximum pixel offset (default: 50)
}

/**
 * Hook to apply parallax effect to an element based on cursor position.
 * Takes a multiplier (0 to 1) to control intensity.
 * 
 * Example multipliers:
 * - 0.02 = background layer (subtle movement)
 * - 0.04 = particles layer (medium movement)
 * - 0.06 = HUD elements layer (more pronounced)
 * - 0    = no movement (stays fixed)
 * 
 * Updates element position via ref.style.transform directly — NEVER React state.
 * Disabled on mobile (max-width: 767px).
 * 
 * @returns ref to attach to the element
 */
export const useParallax = <T extends HTMLElement>({
  multiplier,
  maxOffset = 50,
}: UseParallaxOptions) => {
  const elementRef = useRef<T>(null);
  const cursorPosition = useCursorPosition();
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Skip if multiplier is 0 (no parallax)
    if (multiplier === 0) return;

    const updateParallax = () => {
      if (!elementRef.current) return;

      const { x, y } = cursorPosition.current;

      // Calculate offset based on normalized position and multiplier
      const offsetX = x * multiplier * maxOffset;
      const offsetY = y * multiplier * maxOffset;

      // Apply transform directly via ref — no React state
      elementRef.current.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;

      // Continue animation loop
      animationFrameRef.current = requestAnimationFrame(updateParallax);
    };

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(updateParallax);

    return () => {
      // Cleanup animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [multiplier, maxOffset, cursorPosition]);

  return elementRef;
};
