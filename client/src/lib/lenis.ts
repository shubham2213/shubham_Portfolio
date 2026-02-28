import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './gsap'

export function initLenis(): Lenis {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  })

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  // Tell ScrollTrigger to use Lenis scroll position
  lenis.on('scroll', () => {
    ScrollTrigger.update()
  })

  // Override ScrollTrigger's scroll reading to use Lenis
  ScrollTrigger.scrollerProxy(document.documentElement, {
    scrollTop(value?: number) {
      if (arguments.length && value !== undefined) {
        lenis.scrollTo(value)
      }
      return lenis.scroll
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
    pinType: document.documentElement.style.transform
      ? 'transform'
      : 'fixed',
  })

  ScrollTrigger.addEventListener('refresh', () => lenis.resize())
  ScrollTrigger.refresh()

  return lenis
}
