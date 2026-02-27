import { ButtonHTMLAttributes } from 'react';

/**
 * NeonButton Component
 * 
 * A futuristic button with cyan neon border and glow effect on hover.
 * Uses Orbitron font and follows the design system specifications.
 * 
 * @example
 * <NeonButton onClick={handleClick}>
 *   [ ENTER SYSTEM ]_
 * </NeonButton>
 */

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'cyan' | 'green';
}

export const NeonButton = ({ 
  children, 
  variant = 'cyan',
  className = '',
  ...props 
}: NeonButtonProps) => {
  const colorVar = variant === 'cyan' ? '--color-cyan' : '--color-green';
  const glowVar = variant === 'cyan' ? '--glow-cyan' : '--glow-green';

  return (
    <button
      className={`neon-button ${className}`}
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xs)',
        fontWeight: 700,
        color: `var(${colorVar})`,
        background: 'transparent',
        border: `1px solid var(${colorVar})`,
        padding: 'var(--space-2) var(--space-4)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        cursor: 'none',
        transition: 'all var(--duration-base) var(--ease-out)',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `rgba(${variant === 'cyan' ? '0, 245, 255' : '57, 255, 20'}, 0.08)`;
        e.currentTarget.style.boxShadow = `var(${glowVar})`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.boxShadow = 'none';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.98)';
        e.currentTarget.style.background = `rgba(${variant === 'cyan' ? '0, 245, 255' : '57, 255, 20'}, 0.15)`;
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.background = `rgba(${variant === 'cyan' ? '0, 245, 255' : '57, 255, 20'}, 0.08)`;
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeonButton;
