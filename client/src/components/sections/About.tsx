import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { personal } from '@/data/personal'

/**
 * About Section — Chapter 01: IDENTITY
 * 
 * Two-column layout (desktop) with profile card on left and bio on right.
 * Stacks vertically on mobile with photo first.
 * 
 * Features:
 * - Profile photo placeholder with status indicator
 * - 9-row data card with terminal-style formatting
 * - Bio tagline with clean typography
 */

export const About = () => {
  const [isDesktop, setIsDesktop] = useState(
    () => window.innerWidth >= 768
  )

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const leftColumnRef = useRef<HTMLDivElement>(null)
  const rightColumnRef = useRef<HTMLDivElement>(null)
  const ctxRef = useRef<ReturnType<typeof gsap.context> | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced || !sectionRef.current) {
      // Show everything immediately if reduced motion
      if (headingRef.current) headingRef.current.style.opacity = '1'
      if (leftColumnRef.current) leftColumnRef.current.style.opacity = '1'
      if (rightColumnRef.current) rightColumnRef.current.style.opacity = '1'
      return
    }

    // Small delay lets layout settle before ScrollTrigger measures
    const initTimer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Heading reveal
        gsap.from(headingRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })

        // Left column (profile card) reveal
        gsap.from(leftColumnRef.current, {
          x: -40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })

        // Right column (bio) reveal
        gsap.from(rightColumnRef.current, {
          x: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }, sectionRef)

      // Force ScrollTrigger to recalculate after init
      ScrollTrigger.refresh()

      // Store ctx for cleanup
      ctxRef.current = ctx
    }, 100)

    return () => {
      clearTimeout(initTimer)
      ctxRef.current?.revert()
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen"
      style={{
        padding: 'var(--space-8) var(--space-6)',
      }}
    >
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
        }}
      >
        {/* Section Heading */}
        <h2
          ref={headingRef}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-display)',
            fontWeight: 700,
            letterSpacing: '0.1em',
            marginBottom: 'var(--space-8)',
            color: 'var(--color-white)',
          }}
        >
          <span style={{ color: 'var(--color-cyan)' }}>// </span>
          CHAPTER 01 — IDENTITY
        </h2>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? '40% 60%' : '1fr',
            gap: 'var(--space-6)',
            alignItems: 'start',
          }}
        >
          {/* Left Column — Profile Card */}
          <div ref={leftColumnRef}>
            <div
              style={{
                border: '1px solid var(--color-border)',
                background: 'var(--color-panel)',
                padding: 'var(--space-4)',
              }}
            >
              {/* Label above image */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-dim)',
                  marginBottom: 'var(--space-2)',
                  letterSpacing: '0.1em',
                }}
              >
                SUBJECT_001
              </div>

              {/* Image placeholder */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  maxWidth: '300px',
                  margin: '0 auto',
                  background: 'var(--color-panel-hover)',
                  border: '1px solid var(--color-border-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-text-dim)',
                  letterSpacing: '0.2em',
                }}
              >
                PHOTO
              </div>

              {/* Status label below */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text)',
                  marginTop: 'var(--space-2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-1)',
                  letterSpacing: '0.1em',
                }}
              >
                STATUS: ONLINE{' '}
                <span
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--color-green)',
                    animation: 'pulseGlow 2000ms infinite',
                  }}
                />
              </div>
            </div>

            {/* Profile Data Card */}
            <div
              style={{
                border: '1px solid var(--color-border)',
                background: 'var(--color-panel)',
                marginTop: 'var(--space-4)',
              }}
            >
              {personal.profileData.map((item, index) => (
                <div
                  key={item.label}
                  style={{
                    padding: 'var(--space-2) var(--space-3)',
                    borderTop: index > 0 ? '1px solid var(--color-border-dim)' : 'none',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--color-text-dim)',
                      minWidth: '120px',
                    }}
                  >
                    {item.label}
                  </span>
                  <span style={{ color: 'var(--color-cyan)' }}>→</span>
                  <span style={{ color: 'var(--color-text)' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Bio */}
          <div
            ref={rightColumnRef}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 300,
                  fontSize: 'var(--text-base)',
                  lineHeight: 1.8,
                  color: 'var(--color-text)',
                }}
              >
                {personal.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
