import { useEffect, useState } from 'react'

interface BootSequenceProps {
  onComplete?: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    // At 2500ms: start CSS fade out (visual only)
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, 2500)

    // At 2800ms: notify parent → parent sets bootComplete = true → 
    // parent unmounts this component via {!bootComplete && ...}
    const completeTimer = setTimeout(() => {
      onComplete?.()
    }, 2800)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  // Component always renders — never returns null
  // Parent handles unmounting when bootComplete = true
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
        pointerEvents: 'auto',
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.3s ease-out',
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
