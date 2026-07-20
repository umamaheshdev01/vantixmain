import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Scroll-based parallax hook.
 * Translate3d based on element's distance from the vertical center of the viewport.
 */
export function useParallax(speed = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2 - vh / 2;
      
      // Calculate translation (similar to original logic)
      // speed = 0.25 -> center * 0.25 * -0.3
      const translateY = center * speed * -0.3;
      el.style.transform = `translate3d(0, ${translateY}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // Initial position

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [speed, reduced]);

  return ref;
}
