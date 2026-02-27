/**
 * HUDTag Component
 * 
 * Floating coordinate labels and system status text with optional animation.
 * Used for decorative HUD elements throughout the portfolio.
 * 
 * @example
 * <HUDTag>LAT: 20.5937° N  LNG: 78.9629° E</HUDTag>
 * 
 * @example
 * <HUDTag accentColor="cyan" animated>
 *   SYS_VER: 2.0.1
 * </HUDTag>
 */

interface HUDTagProps {
  children: React.ReactNode;
  accentColor?: 'cyan' | 'green' | 'dim';
  animated?: boolean;
  className?: string;
}

export const HUDTag = ({ 
  children, 
  accentColor = 'dim',
  animated = false,
  className = '' 
}: HUDTagProps) => {
  const getColor = () => {
    switch (accentColor) {
      case 'cyan':
        return 'var(--color-cyan)';
      case 'green':
        return 'var(--color-green)';
      default:
        return 'var(--color-text-dim)';
    }
  };

  return (
    <div
      className={`hud-tag ${className}`}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        color: getColor(),
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        opacity: 0.6,
        animation: animated ? 'float 4s ease-in-out infinite' : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default HUDTag;
