import { useEffect, useState } from 'react'
import { CustomCursor } from './components/ui/CustomCursor'
import { ScanlineOverlay } from './components/ui/ScanlineOverlay'
import { SpotlightCursor } from './components/ui/SpotlightCursor'
import { NavBar } from './components/ui/NavBar'
import { BootSequence } from './components/ui/BootSequence'
import { Hero } from './components/sections/Hero'
import { initLenis } from './lib/lenis'
import { useScrollVelocity } from './hooks/useScrollVelocity'

function App() {
  const [bootComplete, setBootComplete] = useState(false)

  useScrollVelocity()

  useEffect(() => {
    const lenis = initLenis()

    return () => {
      lenis.destroy()
    }
  }, [])

  const handleBootComplete = () => {
    setBootComplete(true)
  }

  return (
    <>
      {/* Global overlays - correct z-index layering */}
      <ScanlineOverlay />
      <SpotlightCursor />
      <CustomCursor />

      {/* NavBar - z-index 100 */}
      {bootComplete && <NavBar />}

      {/* Boot sequence - self-managed lifecycle, no AnimatePresence */}
      {!bootComplete && (
        <BootSequence onComplete={handleBootComplete} />
      )}

      {/* Main content - Hero becomes interactive after bootComplete */}
      <main>
        <Hero isInteractive={bootComplete} />

        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-[var(--color-panel)]"
        >
          <div className="text-center">
            <h2
              className="text-[var(--color-white)] font-[var(--font-display)] text-[3rem] font-black mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-[var(--color-cyan)]">// </span>
              CHAPTER 01 — IDENTITY
            </h2>
            <p className="text-[var(--color-text)] font-[var(--font-mono)]">
              About section content will go here
            </p>
          </div>
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h2
              className="text-[var(--color-white)] font-[var(--font-display)] text-[3rem] font-black mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-[var(--color-cyan)]">// </span>
              CHAPTER 02 — STACK
            </h2>
            <p className="text-[var(--color-text)] font-[var(--font-mono)]">
              Skills section content will go here
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-[var(--color-panel)]"
        >
          <div className="text-center">
            <h2
              className="text-[var(--color-white)] font-[var(--font-display)] text-[3rem] font-black mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-[var(--color-cyan)]">// </span>
              CHAPTER 03 — WORK LOG
            </h2>
            <p className="text-[var(--color-text)] font-[var(--font-mono)]">
              Projects section content will go here
            </p>
          </div>
        </section>

        <section
          id="experience"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h2
              className="text-[var(--color-white)] font-[var(--font-display)] text-[3rem] font-black mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-[var(--color-cyan)]">// </span>
              CHAPTER 04 — SIGNAL
            </h2>
            <p className="text-[var(--color-text)] font-[var(--font-mono)]">
              Experience section content will go here
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-[var(--color-panel)]"
        >
          <div className="text-center">
            <h2
              className="text-[var(--color-white)] font-[var(--font-display)] text-[3rem] font-black mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-[var(--color-cyan)]">// </span>
              CHAPTER 05 — CONNECT
            </h2>
            <p className="text-[var(--color-text)] font-[var(--font-mono)]">
              Contact section content will go here
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
