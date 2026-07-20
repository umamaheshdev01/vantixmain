import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Animated counter hook that fires when scrolled into view.
 */
export function useCounter(targetValue: number, decimals = 0, duration = 1600) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      el.textContent = targetValue.toFixed(decimals);
      return;
    }

    const run = () => {
      if (hasRun.current) return;
      hasRun.current = true;
      
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        const ease = 1 - Math.pow(1 - p, 3); // cubic ease out
        const val = targetValue * ease;
        el.textContent = val.toFixed(decimals);
        
        if (p < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = targetValue.toFixed(decimals);
        }
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            run();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    io.observe(el);

    return () => {
      io.disconnect();
    };
  }, [targetValue, decimals, duration, reduced]);

  return ref;
}
