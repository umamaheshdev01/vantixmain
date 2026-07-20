import { useEffect, useRef } from 'react';
import { useCursorContext } from '@/context/CursorContext';

export function useCursor() {
  const { setLabel, clearLabel } = useCursorContext();
  
  // Return a ref to attach to the element
  const ref = useRef<HTMLElement>(null);
  const labelRef = useRef<string | null>(null);

  // Expose a way to set the label manually or via dataset
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Read initial label from data attribute if provided
    const attrLabel = el.getAttribute('data-cursor');
    if (attrLabel) labelRef.current = attrLabel;

    const onMouseEnter = () => {
      setLabel(labelRef.current || '');
    };

    const onMouseLeave = () => {
      clearLabel();
    };

    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [setLabel, clearLabel]);

  return ref;
}

// Higher level function to apply imperatively
export function applyCursor(el: HTMLElement, label: string, setLabel: (l: string) => void, clearLabel: () => void) {
  const onMouseEnter = () => setLabel(label);
  const onMouseLeave = () => clearLabel();
  
  el.addEventListener('mouseenter', onMouseEnter);
  el.addEventListener('mouseleave', onMouseLeave);
  
  return () => {
    el.removeEventListener('mouseenter', onMouseEnter);
    el.removeEventListener('mouseleave', onMouseLeave);
  };
}
