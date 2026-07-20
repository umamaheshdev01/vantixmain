import { useState, useEffect } from 'react';
import type { Theme } from '@/types';

export function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>('cream');

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      // Determine current theme by checking all elements with data-theme
      const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-theme]'));
      let currentTheme: Theme = 'cream';

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        // If the top of the section is above the nav (64px) and bottom is below it
        if (rect.top <= 64 && rect.bottom > 64) {
          currentTheme = (section.getAttribute('data-theme') as Theme) || 'cream';
          break;
        }
      }

      setTheme(currentTheme);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on mount to set initial state
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { scrolled, theme };
}
