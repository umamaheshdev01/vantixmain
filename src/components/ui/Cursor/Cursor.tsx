'use client';

import { useEffect, useRef } from 'react';
import { useCursorContext } from '@/context/CursorContext';
import styles from './Cursor.module.css';

export function Cursor() {
  const { state, setLabel, clearLabel } = useCursorContext();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  // Mirrors state.scale into a ref so the position-tracking loop below can
  // read the latest scale without needing to restart on every hover change.
  const scaleRef = useRef(state.scale);

  useEffect(() => {
    scaleRef.current = state.scale;
  }, [state.scale]);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    };

    let rafId: number;
    const loop = () => {
      // Lerp for the ring
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;

      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${scaleRef.current})`;
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove);
    loop();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
    // Mount-only: restarting this loop on every hover reset rx/ry to the
    // page center, which is what caused the cursor ring to visibly jump
    // back to center on every button hover before easing back to the mouse.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Global delegation: any element with a `data-cursor` attribute (even empty)
  // grows the ring on hover, matching the original site-wide cursor behavior.
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest?.('[data-cursor]');
      if (!target) return;
      setLabel(target.getAttribute('data-cursor') || '');
    };
    const onOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest?.('[data-cursor]');
      if (!target) return;
      const related = e.relatedTarget as HTMLElement | null;
      if (related && target.contains(related)) return;
      clearLabel();
    };

    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [setLabel, clearLabel]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div 
        ref={ringRef} 
        className={`${styles.ring} ${state.label ? styles.ringHovered : ''}`}
      >
        {state.label}
      </div>
    </>
  );
}
