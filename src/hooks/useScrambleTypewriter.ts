import { useRef, useCallback, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface ScrambleTypewriterOptions {
  charDelay?: number;
  scrambleTicks?: number;
  charset?: string;
  onDone?: () => void;
}

/**
 * Types `text` into the attached element one character at a time; each new
 * character briefly cycles through random glyphs before resolving. Plays
 * once via `start()` — call it, don't loop it. Respects reduced-motion by
 * setting the final text immediately.
 */
export function useScrambleTypewriter(text: string, options: ScrambleTypewriterOptions = {}) {
  const {
    charDelay = 34,
    scrambleTicks = 3,
    charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    onDone,
  } = options;

  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startedRef = useRef(false);

  const start = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const el = ref.current;
    if (!el) return;

    if (reduced) {
      el.textContent = text;
      onDone?.();
      return;
    }

    let i = 0;
    let tick = 0;
    let resolved = '';

    const step = () => {
      if (i >= text.length) {
        el.textContent = text;
        onDone?.();
        return;
      }

      const targetChar = text[i];

      if (targetChar === ' ' || tick >= scrambleTicks) {
        resolved += targetChar;
        el.textContent = resolved;
        i += 1;
        tick = 0;
        timerRef.current = setTimeout(step, charDelay);
        return;
      }

      const randomChar = charset[Math.floor(Math.random() * charset.length)];
      el.textContent = resolved + randomChar;
      tick += 1;
      timerRef.current = setTimeout(step, charDelay);
    };

    step();
  }, [text, reduced, charDelay, scrambleTicks, charset, onDone]);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  return { ref, start };
}
