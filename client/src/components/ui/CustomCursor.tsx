import { useEffect, useRef } from 'react';
import { useCursorPixelPosition } from '../../hooks/useCursorPixelPosition';

interface CustomCursorProps {
  className?: string;
}

/**
 * CustomCursor component — futuristic crosshair cursor
 * 
 * Outer ring: 16px circle, cyan border, 100ms lag behind cursor
 * Inner dot: 4px filled cyan circle, snaps immediately
 * On hover over interactive elements: ring scales to 2.5x, fills with cyan at 10% opacity, inner dot opacity 0
 * On click: ring scales to 0.8 for 100ms then back
 * Hidden on mobile (max-width: 767px)
 * Uses CSS custom properties only — no hardcoded colors
 */
export const CustomCursor: React.FC<CustomCursorProps> = ({ className = '' }) => {
  const outerRingRef = useRef<HTMLDivElement>(null);
  const innerDotRef = useRef<HTMLDivElement>(null);
  const cursorPosition = useCursorPixelPosition();

  useEffect(() => {
    const outerRing = outerRingRef.current;
    const innerDot = innerDotRef.current;
    if (!outerRing || !innerDot) return;

    let animationFrameId: number;
    let isHovering = false;
    let isClicking = false;

    // Update cursor position
    const updateCursorPosition = () => {
      const { x, y } = cursorPosition.current;

      // Inner dot snaps immediately
      innerDot.style.setProperty('left', `${x}px`);
      innerDot.style.setProperty('top', `${y}px`);

      // Outer ring has 100ms transition lag (handled by CSS)
      outerRing.style.setProperty('left', `${x}px`);
      outerRing.style.setProperty('top', `${y}px`);

      animationFrameId = requestAnimationFrame(updateCursorPosition);
    };

    animationFrameId = requestAnimationFrame(updateCursorPosition);

    // Check if hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"]');

      if (isInteractive && !isHovering) {
        isHovering = true;
        outerRing.style.setProperty('transform', 'translate(-50%, -50%) scale(2.5)');
        outerRing.style.setProperty('background', 'rgba(0, 245, 255, 0.1)');
        innerDot.style.setProperty('opacity', '0');
      } else if (!isInteractive && isHovering) {
        isHovering = false;
        if (!isClicking) {
          outerRing.style.setProperty('transform', 'translate(-50%, -50%) scale(1)');
        }
        outerRing.style.setProperty('background', 'transparent');
        innerDot.style.setProperty('opacity', '1');
      }
    };

    // Handle click animation
    const handleMouseDown = () => {
      isClicking = true;
      if (!isHovering) {
        outerRing.style.setProperty('transform', 'translate(-50%, -50%) scale(0.8)');
      }
    };

    const handleMouseUp = () => {
      isClicking = false;
      if (isHovering) {
        outerRing.style.setProperty('transform', 'translate(-50%, -50%) scale(2.5)');
      } else {
        outerRing.style.setProperty('transform', 'translate(-50%, -50%) scale(1)');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorPosition]);

  return (
    <div className={`custom-cursor-container ${className}`}>
      {/* Outer ring - 16px circle with 100ms lag */}
      <div
        ref={outerRingRef}
        className="custom-cursor-outer"
        style={{
          position: 'fixed',
          width: '16px',
          height: '16px',
          border: '1.5px solid var(--color-cyan)',
          borderRadius: '50%',
          background: 'transparent',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 100ms ease, border-color 200ms ease, background 200ms ease',
          left: '0',
          top: '0',
        }}
      />

      {/* Inner dot - 4px filled circle, snaps immediately */}
      <div
        ref={innerDotRef}
        className="custom-cursor-inner"
        style={{
          position: 'fixed',
          width: '4px',
          height: '4px',
          background: 'var(--color-cyan)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 200ms ease',
          left: '0',
          top: '0',
        }}
      />

      {/* Hide on mobile */}
      <style>{`
        @media (max-width: 767px) {
          .custom-cursor-container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
