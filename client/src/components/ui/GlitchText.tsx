import { useEffect, useRef, useState } from 'react';

/**
 * GlitchText Component
 * 
 * Creates a glitch effect on text with RGB color split using cyan and green layers.
 * The effect triggers at specified intervals and uses the glitch keyframe animation.
 * 
 * @example
 * // Basic usage
 * <GlitchText text="SHUBHAM SHRIVASTAVA" intensity="high" />
 * 
 * @example
 * // As a heading with custom interval
 * <GlitchText 
 *   text="CONTACT" 
 *   as="h2" 
 *   intensity="medium" 
 *   interval={3000}
 *   className="text-4xl font-bold"
 * />
 */
interface GlitchTextProps {
  text: string;
  intensity?: 'low' | 'medium' | 'high';
  interval?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  style?: React.CSSProperties;
}

const GlitchText = ({
  text,
  intensity = 'medium',
  interval = 5000,
  className = '',
  as: Element = 'span',
  style,
}: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const beforeRef = useRef<HTMLSpanElement>(null);
  const afterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);

      const intensityConfig = {
        low: { offset: 2, duration: 150 },
        medium: { offset: 4, duration: 200 },
        high: { offset: 6, duration: 300 },
      };

      const config = intensityConfig[intensity];

      if (beforeRef.current && afterRef.current) {
        beforeRef.current.style.animation = `glitch ${config.duration}ms ease-out`;
        afterRef.current.style.animation = `glitch ${config.duration}ms ease-out`;
        
        beforeRef.current.style.setProperty('--glitch-offset', `-${config.offset}px`);
        afterRef.current.style.setProperty('--glitch-offset', `${config.offset}px`);
      }

      setTimeout(() => {
        setIsGlitching(false);
        if (beforeRef.current && afterRef.current) {
          beforeRef.current.style.animation = '';
          afterRef.current.style.animation = '';
        }
      }, config.duration);
    };

    const intervalId = setInterval(triggerGlitch, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [intensity, interval]);

  return (
    <Element className={`glitch-wrapper ${className}`} style={style}>
      <span className="glitch-main">{text}</span>
      <span
        ref={beforeRef}
        className={`glitch-before ${isGlitching ? 'active' : ''}`}
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        ref={afterRef}
        className={`glitch-after ${isGlitching ? 'active' : ''}`}
        aria-hidden="true"
      >
        {text}
      </span>
    </Element>
  );
};

export default GlitchText;
