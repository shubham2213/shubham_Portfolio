import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'

interface NavLink {
  label: string
  href: string
  chapter: string
}

interface NavBarProps {
  className?: string
}

const navLinks: NavLink[] = [
  { label: 'INITIALIZE', href: '#hero', chapter: '00' },
  { label: 'IDENTITY', href: '#about', chapter: '01' },
  { label: 'STACK', href: '#skills', chapter: '02' },
  { label: 'WORK LOG', href: '#projects', chapter: '03' },
  { label: 'SIGNAL', href: '#experience', chapter: '04' },
  { label: 'CONNECT', href: '#contact', chapter: '05' },
]

export function NavBar({ className = '' }: NavBarProps) {
  const navRef = useRef<HTMLElement>(null)
  const lastScrollY = useRef(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Scroll hide/show behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Don't hide nav if at the very top
      if (currentScrollY <= 64) {
        if (navRef.current) {
          gsap.to(navRef.current, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          })
        }
        lastScrollY.current = currentScrollY
        return
      }

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down - hide
        if (navRef.current) {
          gsap.to(navRef.current, {
            y: '-100%',
            duration: 0.3,
            ease: 'power2.out',
          })
        }
      } else {
        // Scrolling up - show
        if (navRef.current) {
          gsap.to(navRef.current, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          })
        }
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Track active section based on scroll position
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          setActiveSection(id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-50% 0px -50% 0px',
    })

    // Observe all sections
    navLinks.forEach((link) => {
      const sectionId = link.href.replace('#', '')
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Handle smooth scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] h-[var(--space-8)] bg-[rgba(5,5,5,0.85)] backdrop-blur-[12px] border-b border-[var(--color-border-dim)] ${className}`}
        style={{
          paddingLeft: 'var(--space-6)',
          paddingRight: 'var(--space-6)',
        }}
      >
        <div className="h-full flex items-center justify-between max-w-[1280px] mx-auto">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-[var(--color-cyan)] font-[var(--font-display)] font-bold text-[14px] tracking-[3px] transition-opacity duration-[var(--duration-fast)] hover:opacity-80"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            SS
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-[var(--space-4)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link relative text-[11px] uppercase tracking-[0.15em] font-[var(--font-mono)] font-normal transition-colors duration-[var(--duration-base)] ${
                    isActive
                      ? 'text-[var(--color-cyan)]'
                      : 'text-[var(--color-text-dim)] hover:text-[var(--color-text)]'
                  }`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    textShadow: isActive ? 'var(--glow-text-cyan)' : 'none',
                  }}
                >
                  <span className="nav-link-prefix">{isActive ? '// ' : ''}</span>
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Sound Toggle Placeholder */}
          <button
            className="hidden md:block text-[var(--color-text-dim)] font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] transition-colors duration-[var(--duration-base)] hover:text-[var(--color-cyan)] border border-[var(--color-border)] px-[var(--space-2)] py-[var(--space-1)] hover:border-[var(--color-cyan)]"
            style={{ fontFamily: 'var(--font-mono)' }}
            aria-label="Toggle ambient sound"
          >
            [ ♪ SOUND ]
          </button>

          {/* Mobile Hamburger */}
          <button
            className="hamburger-button md:hidden flex flex-col gap-[6px] w-[24px] h-[18px] relative z-[101]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-full h-[2px] bg-[var(--color-cyan)] transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
              }`}
            />
            <span
              className={`block w-full h-[2px] bg-[var(--color-cyan)] transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-full h-[2px] bg-[var(--color-cyan)] transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu fixed inset-0 z-[99] bg-[var(--color-bg)] flex flex-col items-center justify-center gap-[var(--space-4)] transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace('#', '')
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-[var(--text-lg)] uppercase tracking-[0.2em] font-[var(--font-mono)] font-normal transition-colors duration-[var(--duration-base)] ${
                isActive
                  ? 'text-[var(--color-cyan)]'
                  : 'text-[var(--color-text-dim)] hover:text-[var(--color-text)]'
              }`}
              style={{
                fontFamily: 'var(--font-mono)',
                textShadow: isActive ? 'var(--glow-text-cyan)' : 'none',
              }}
            >
              {isActive && <span className="text-[var(--color-cyan)]">// </span>}
              {link.label}
            </a>
          )
        })}

        {/* Mobile Sound Toggle */}
        <button
          className="mt-[var(--space-4)] text-[var(--color-text-dim)] font-[var(--font-mono)] text-[var(--text-sm)] uppercase tracking-[0.15em] transition-colors duration-[var(--duration-base)] hover:text-[var(--color-cyan)] border border-[var(--color-border)] px-[var(--space-3)] py-[var(--space-2)] hover:border-[var(--color-cyan)]"
          style={{ fontFamily: 'var(--font-mono)' }}
          aria-label="Toggle ambient sound"
        >
          [ ♪ SOUND ]
        </button>
      </div>

      {/* Add hover effect styles */}
      <style>{`
        .nav-link {
          position: relative;
        }

        .nav-link-prefix {
          display: inline-block;
          color: var(--color-cyan);
          opacity: 0;
          transition: opacity var(--duration-base) ease-out;
        }

        .nav-link:hover .nav-link-prefix {
          opacity: 1;
        }

        .nav-link:hover .nav-link-prefix::before {
          content: '// ';
        }
      `}</style>
    </>
  )
}
