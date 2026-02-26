import { useEffect, useRef, useState } from 'react'

export const BootSequence: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const hasRunRef = useRef(false)

  useEffect(() => {
    // Prevent double-run in StrictMode
    if (hasRunRef.current) {
      return
    }

    hasRunRef.current = true

    // After 2500ms, start fade out
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    // Cleanup
    return () => {
      clearTimeout(fadeOutTimer)
    }
  }, [])

  // Don't render if already ran
  if (!isVisible) {
    return null
  }

  return (
    <div
      className="boot-sequence"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9995,
        background: 'var(--color-bg)',
        padding: 'var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 'var(--space-2)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity var(--duration-base) var(--ease-out)',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <div
        className="boot-line boot-line-1"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          fontWeight: 400,
          color: 'var(--color-green)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          display: 'inline-block',
          maxWidth: 'max-content',
          opacity: 0,
          animation: 'typewriter 0.8s var(--ease-linear) 0ms forwards, fadeIn 0.1s 0ms forwards',
        }}
      >
        &gt; INITIALIZING SYSTEM...
      </div>

      <div
        className="boot-line boot-line-2"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          fontWeight: 400,
          color: 'var(--color-green)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          display: 'inline-block',
          maxWidth: 'max-content',
          opacity: 0,
          animation: 'typewriter 0.8s var(--ease-linear) 700ms forwards, fadeIn 0.1s 700ms forwards',
        }}
      >
        &gt; LOADING PORTFOLIO_v2.0...
      </div>

      <div
        className="boot-line boot-line-3"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          fontWeight: 400,
          color: 'var(--color-green)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          display: 'inline-block',
          maxWidth: 'max-content',
          opacity: 0,
          animation: 'typewriter 0.8s var(--ease-linear) 1400ms forwards, fadeIn 0.1s 1400ms forwards',
        }}
      >
        &gt; WELCOME, VISITOR_001
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
