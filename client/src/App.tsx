import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CustomCursor } from './components/ui/CustomCursor'
import { ScanlineOverlay } from './components/ui/ScanlineOverlay'
import { SpotlightCursor } from './components/ui/SpotlightCursor'
import { NavBar } from './components/ui/NavBar'
import { BootSequence } from './components/ui/BootSequence'
import { initLenis } from './lib/lenis'

function App() {
  const [bootComplete, setBootComplete] = useState(false)

  useEffect(() => {
    const lenis = initLenis()

    // Mark boot as complete after boot sequence duration
    const bootTimer = setTimeout(() => {
      setBootComplete(true)
    }, 2500)

    return () => {
      lenis.destroy()
      clearTimeout(bootTimer)
    }
  }, [])

  return (
    <>
      <CustomCursor />
      <SpotlightCursor />
      <ScanlineOverlay />
      
      <AnimatePresence mode="wait">
        {!bootComplete && <BootSequence key="boot" />}
      </AnimatePresence>

      {bootComplete && <NavBar />}

      {/* Temporary test sections - will be replaced with actual components */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: bootComplete ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center"
          style={{ paddingTop: 'var(--space-8)' }}
        >
          <div className="text-center">
            <h1
              className="text-[var(--color-white)] font-[var(--font-display)] text-[4rem] font-black mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              CHAPTER 00 — INITIALIZE
            </h1>
            <p className="text-[var(--color-text)] font-[var(--font-mono)]">
              Scroll down to test navbar behavior
            </p>
          </div>
        </section>

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
      </motion.main>
    </>
  )
}

export default App
