import { useEffect, useRef, useCallback } from 'react';

/**
 * Magnetic cursor effect — element follows mouse with a spring factor.
 * Returns a ref to attach to the element you want to be magnetic.
 */
export function useMagnetic(factorX = 0.28, factorY = 0.34) {
  const ref = useRef<HTMLElement>(null);
  const reducedRef = useRef<boolean>(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const el = ref.current;
    if (!el || isTouchDevice || reducedRef.current) return;

    el.style.transition = `transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)`;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${x * factorX}px, ${y * factorY}px)`;
    };

    const onMouseLeave = () => {
      el.style.transform = 'translate(0, 0)';
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [factorX, factorY]);

  return ref;
}

/**
 * Apply magnetic effect to a given element imperatively.
 * Used by the MagneticButton component.
 */
export function applyMagnetic(
  el: HTMLElement,
  factorX = 0.28,
  factorY = 0.34,
): () => void {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (reduced || isTouch) return () => {};

  el.style.transition = `transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)`;

  const onMouseMove = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * factorX}px, ${y * factorY}px)`;
  };
  const onMouseLeave = () => { el.style.transform = 'translate(0, 0)'; };

  el.addEventListener('mousemove', onMouseMove);
  el.addEventListener('mouseleave', onMouseLeave);
  return () => {
    el.removeEventListener('mousemove', onMouseMove);
    el.removeEventListener('mouseleave', onMouseLeave);
  };
}

export function useMagneticRef<T extends HTMLElement>(
  factorX = 0.28,
  factorY = 0.34,
): React.RefObject<T | null> {
  const ref = useRef<T>(null);

  const cleanup = useRef<(() => void) | null>(null);

  const attachMagnetic = useCallback(() => {
    if (cleanup.current) cleanup.current();
    if (ref.current) {
      cleanup.current = applyMagnetic(ref.current, factorX, factorY);
    }
  }, [factorX, factorY]);

  useEffect(() => {
    attachMagnetic();
    return () => { cleanup.current?.(); };
  }, [attachMagnetic]);

  return ref;
}
