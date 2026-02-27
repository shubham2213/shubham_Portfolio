import { Suspense} from 'react'
import { GridBackground } from '@/components/canvas/GridBackground'
import { ParticleField } from '@/components/canvas/ParticleField'
import { useParallax } from '@/hooks/useParallax'
import { useCursorPosition } from '@/hooks/useCursorPosition'

export const Hero = () => {
  const mousePosition = useCursorPosition()
  
  // Layer 3 — HUD elements with more pronounced parallax (6% movement)
  const hudRef = useParallax<HTMLDivElement>({
    multiplier: 0.06,
    maxOffset: 50,
  })

  // Layer 4 — Name + CTA with no parallax (0% movement — stays fixed)
  const contentRef = useParallax<HTMLDivElement>({
    multiplier: 0,
    maxOffset: 0,
  })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: 'var(--space-8)' }}
    >
      {/* Layer 1 — Grid Background (multiplier: 0.02) */}
      <Suspense fallback={null}>
        <GridBackground />
      </Suspense>

      {/* Layer 2 — Particle Field (multiplier: 0.04) */}
      <Suspense fallback={null}>
        <ParticleField mousePosition={mousePosition} />
      </Suspense>

      {/* Layer 3 — HUD Elements (multiplier: 0.06) */}
      <div
        ref={hudRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 3, willChange: 'transform' }}
      >
        {/* Top-left HUD coordinate */}
        <div
          className="absolute top-[var(--space-8)] left-[var(--space-6)]"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-2xs)',
            color: 'var(--color-text-dim)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: 0.6,
          }}
        >
          LAT: 23.2599° N
        </div>

        {/* Top-right HUD coordinate */}
        <div
          className="absolute top-[var(--space-8)] right-[var(--space-6)]"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-2xs)',
            color: 'var(--color-text-dim)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: 0.6,
          }}
        >
          LONG: 77.4126° E
        </div>

        {/* Bottom-left HUD status */}
        <div
          className="absolute bottom-[var(--space-8)] left-[var(--space-6)]"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-2xs)',
            color: 'var(--color-green)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: 0.6,
          }}
        >
          SYSTEM: ONLINE
        </div>

        {/* Bottom-right HUD timestamp */}
        <div
          className="absolute bottom-[var(--space-8)] right-[var(--space-6)]"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-2xs)',
            color: 'var(--color-text-dim)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: 0.6,
          }}
        >
          {new Date().toISOString().split('T')[0]}
        </div>
      </div>

      {/* Layer 4 — Main Content (multiplier: 0 — no parallax, stays fixed) */}
      <div
        ref={contentRef}
        className="relative text-center px-[var(--space-6)]"
        style={{ zIndex: 4 }}
      >
        {/* Chapter label */}
        <div
          className="mb-[var(--space-4)]"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-dim)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: 'var(--color-cyan)' }}>// </span>
          CHAPTER 00
        </div>

        {/* Hero name */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 900,
            color: 'var(--color-white)',
            letterSpacing: '0.05em',
            lineHeight: 1.1,
            marginBottom: 'var(--space-4)',
          }}
        >
          SHUBHAM
          <br />
          SHRIVASTAVA
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-base)',
            color: 'var(--color-text)',
            letterSpacing: '0.05em',
            marginBottom: 'var(--space-6)',
            maxWidth: '600px',
            margin: '0 auto var(--space-6)',
          }}
        >
          Frontend Engineer — Building digital experiences with precision
        </p>

        {/* CTA Button */}
        <button
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-xs)',
            fontWeight: 700,
            color: 'var(--color-cyan)',
            background: 'transparent',
            border: '1px solid var(--color-cyan)',
            padding: 'var(--space-2) var(--space-4)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: 'none',
            transition: 'all var(--duration-base) var(--ease-out)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 245, 255, 0.08)'
            e.currentTarget.style.boxShadow = 'var(--glow-cyan)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.boxShadow = 'none'
          }}
          onClick={() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          ENTER SYSTEM_
        </button>
      </div>
    </section>
  )
}
