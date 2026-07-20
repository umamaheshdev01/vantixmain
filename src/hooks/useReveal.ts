import { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
  immediate?: boolean;
}

/**
 * Scroll reveal hook using IntersectionObserver.
 * Attach the returned ref to a container — all children with
 * [data-reveal] or [data-reveal-line] will be animated.
 *
 * For use in components that need manual control, or use
 * the <Reveal> component for declarative usage.
 */
export function useReveal(options: RevealOptions = {}) {
  const {
    threshold = 0.12,
    rootMargin = '0px 0px -6% 0px',
    immediate = false,
  } = options;

  const containerRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const revealEl = useCallback((el: HTMLElement) => {
    if ((el as HTMLElement & { dataset: DOMStringMap }).dataset.vgmShown) return;
    (el as HTMLElement & { dataset: DOMStringMap }).dataset.vgmShown = '1';

    if (el.hasAttribute('data-reveal-line')) {
      const group = el.parentElement?.querySelectorAll('[data-reveal-line]');
      let idx = 0;
      group?.forEach((g, i) => { if (g === el) idx = i; });
      el.style.transitionDelay = `${idx * 0.08}s`;
      el.style.clipPath = 'inset(-12% 0 -12% 0)';
      el.style.transform = 'translateY(0)';
    } else {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lines  = Array.from(container.querySelectorAll<HTMLElement>('[data-reveal-line]'));
    const blocks = Array.from(container.querySelectorAll<HTMLElement>('[data-reveal]'));
    const all    = [...lines, ...blocks];

    if (reduced) {
      all.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.clipPath = 'none';
        el.style.transition = 'none';
      });
      return;
    }

    // Set initial hidden state
    lines.forEach(l => {
      if ((l as HTMLElement & { dataset: DOMStringMap }).dataset.vgmShown) return;
      l.style.clipPath = 'inset(0 0 110% 0)';
      l.style.transform = 'translateY(0.4em)';
      l.style.transition = 'clip-path 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)';
    });

    blocks.forEach(b => {
      if ((b as HTMLElement & { dataset: DOMStringMap }).dataset.vgmShown) return;
      b.style.opacity = '0';
      b.style.transform = 'translateY(26px)';
      b.style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)';
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealEl(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      });
    }, { threshold, rootMargin });

    all.forEach(el => io.observe(el));

    // Immediately reveal above-fold elements
    const timer = setTimeout(() => {
      all.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * (immediate ? 1 : 0.92)) {
          revealEl(el);
        }
      });
    }, 200);

    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, [reduced, threshold, rootMargin, immediate, revealEl]);

  return containerRef;
}
