import { Suspense, useEffect, useRef, useState } from 'react';
import { GridBackground } from '@/components/canvas/GridBackground';
import { ParticleField } from '@/components/canvas/ParticleField';
import { GlitchText, NeonButton, HUDTag } from '@/components/ui';
import { useParallax } from '@/hooks/useParallax';
import { useCursorPosition } from '@/hooks/useCursorPosition';
import { gsap } from '@/lib/gsap';

/**
 * Hero Section — Chapter 00: INITIALIZE
 * 
 * Full viewport height hero with multi-layer parallax background,
 * glitch text name, live clock, and scroll indicator.
 * 
 * Entry animation fires after boot sequence completes (2.3s delay).
 */

export const Hero = () => {
  const mousePosition = useCursorPosition();
  const [currentTime, setCurrentTime] = useState('');
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  
  // Refs for GSAP animation targets
  const heroNameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Layer 3 — HUD elements with parallax (6% movement)
  const hudRef = useParallax<HTMLDivElement>({
    multiplier: 0.06,
    maxOffset: 50,
  });

  // Layer 4 — Main content with no parallax (stays fixed)
  const contentRef = useParallax<HTMLDivElement>({
    multiplier: 0,
    maxOffset: 0,
  });

  // Live clock — updates every second
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds} IST`);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Hero entry animation — fires after boot sequence completes
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      // Skip animation, just make everything visible immediately
      if (heroNameRef.current) heroNameRef.current.style.opacity = '1';
      if (taglineRef.current) taglineRef.current.style.opacity = '1';
      if (buttonRef.current) buttonRef.current.style.opacity = '1';
      if (hudRef.current) hudRef.current.style.opacity = '1';
      if (canvasRef.current) canvasRef.current.style.opacity = '1';
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 2.3, // Fires slightly before boot sequence finishes fading out
      });

      // Animate name and particle field simultaneously
      tl.fromTo(
        heroNameRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out' },
        0
      );

      tl.fromTo(
        canvasRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power4.out' },
        0
      );

      // Tagline — 0.2s after name
      tl.fromTo(
        taglineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out' },
        0.2
      );

      // Button — 0.4s after name
      tl.fromTo(
        buttonRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out' },
        0.4
      );

      // HUD tags — 0.6s after name
      tl.fromTo(
        hudRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power4.out' },
        0.6
      );
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll indicator fade out on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollIndicatorRef.current) {
        const scrollY = window.scrollY;
        const heroHeight = window.innerHeight;
        const opacity = Math.max(0, 1 - scrollY / (heroHeight * 0.5));
        scrollIndicatorRef.current.style.opacity = String(opacity);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to About section using smooth scroll
  const handleEnterSystem = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ 
        height: '100dvh',
        minHeight: '100dvh',
      }}
    >
      {/* Layer 1 — Grid Background (absolute, z-index: 1) */}
      <Suspense fallback={null}>
        <GridBackground />
      </Suspense>

      {/* Layer 2 — Particle Field canvas (absolute, z-index: 2) */}
      <div
        ref={canvasRef}
        style={{ opacity: 0 }}
      >
        <Suspense fallback={null}>
          <ParticleField mousePosition={mousePosition} />
        </Suspense>
      </div>

      {/* Layer 3 — HUD floating elements (absolute, z-index: 3) */}
      <div
        ref={hudRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 3, willChange: 'transform', opacity: 0 }}
      >
        {/* Bottom-left: Geographic coordinates */}
        <div
          className="absolute"
          style={{
            bottom: 'var(--space-8)',
            left: 'var(--space-6)',
          }}
        >
          <HUDTag>LAT: 20.5937° N  LNG: 78.9629° E</HUDTag>
        </div>

        {/* Bottom-right: Live clock */}
        <div
          className="absolute"
          style={{
            bottom: 'var(--space-8)',
            right: 'var(--space-6)',
          }}
        >
          <HUDTag>{currentTime}</HUDTag>
        </div>

        {/* Floating decorative HUD elements — low opacity background */}
        <div
          className="absolute"
          style={{
            top: 'var(--space-12)',
            left: 'var(--space-8)',
            opacity: 0.3,
          }}
        >
          <HUDTag animated>SYS_VER: 2.0.1</HUDTag>
        </div>

        <div
          className="absolute"
          style={{
            top: 'var(--space-16)',
            right: 'var(--space-10)',
            opacity: 0.3,
          }}
        >
          <HUDTag animated accentColor="green">NODE: ACTIVE</HUDTag>
        </div>

        <div
          className="absolute"
          style={{
            bottom: 'var(--space-20)',
            left: 'var(--space-12)',
            opacity: 0.25,
          }}
        >
          <HUDTag animated>SIGNAL: ████████░░  80%</HUDTag>
        </div>
      </div>

      {/* Layer 4 — Main content center (z-index: 4) */}
      <div
        ref={contentRef}
        className="relative text-center"
        style={{ 
          zIndex: 4,
          paddingLeft: 'var(--space-6)',
          paddingRight: 'var(--space-6)',
        }}
      >
        {/* Hero name with GlitchText */}
        <div
          ref={heroNameRef}
          style={{ opacity: 0 }}
        >
          <GlitchText
            text="SHUBHAM SHRIVASTAVA"
            intensity="medium"
            interval={5000}
            as="h1"
            className="hero-name"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 900,
              color: 'var(--color-white)',
              letterSpacing: '0.05em',
              lineHeight: 1.1,
              marginBottom: 'var(--space-4)',
            }}
          />
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-base)',
            color: 'var(--color-text)',
            letterSpacing: '0.05em',
            marginBottom: 'var(--space-6)',
            maxWidth: '700px',
            margin: '0 auto var(--space-6)',
            opacity: 0,
          }}
        >
          Frontend Engineer{' '}
          <span style={{ color: 'var(--color-cyan)' }}>//</span>{' '}
          2.7 Years{' '}
          <span style={{ color: 'var(--color-cyan)' }}>//</span>{' '}
          Currently: VERTEXC3
        </p>

        {/* CTA Button with blinking cursor */}
        <div
          ref={buttonRef}
          style={{ opacity: 0 }}
        >
          <NeonButton onClick={handleEnterSystem}>
            [ ENTER SYSTEM ]
            <span
              style={{
                animation: 'blink 1000ms infinite',
                marginLeft: '2px',
              }}
            >
              _
            </span>
          </NeonButton>
        </div>
      </div>

      {/* Scroll indicator at bottom */}
      <div
        ref={scrollIndicatorRef}
        className="absolute"
        style={{
          bottom: 'var(--space-4)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-1)',
          transition: 'opacity var(--duration-base) var(--ease-out)',
        }}
      >
        {/* Vertical line with traveling dot */}
        <div
          style={{
            position: 'relative',
            width: '1px',
            height: '40px',
            background: 'var(--color-border)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: 'var(--color-cyan)',
              animation: 'travelDown 3000ms ease-in-out infinite',
            }}
          />
        </div>

        {/* SCROLL text */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '10px',
            fontWeight: 400,
            color: 'var(--color-text-dim)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}
        >
          SCROLL
        </div>
      </div>
    </section>
  );
};

export default Hero;
