import { useSound } from '@/hooks/useSound'

interface SoundToggleProps {
  className?: string
}

export function SoundToggle({ className = '' }: SoundToggleProps) {
  const { isPlaying, toggle, playClick } = useSound()

  const handleClick = () => {
    playClick()
    toggle()
  }

  return (
    <button
      onClick={handleClick}
      className={`sound-toggle text-[var(--color-text-dim)] font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] transition-all duration-[var(--duration-base)] hover:text-[var(--color-cyan)] border border-[var(--color-border)] px-[var(--space-2)] py-[var(--space-1)] hover:border-[var(--color-cyan)] hover:shadow-[var(--glow-cyan-sm)] ${className}`}
      style={{ fontFamily: 'var(--font-mono)' }}
      aria-label="Toggle ambient sound"
      aria-pressed={isPlaying}
    >
      [ ♪ SOUND {isPlaying && <span className="text-[var(--color-cyan)]">•</span>} ]
    </button>
  )
}
