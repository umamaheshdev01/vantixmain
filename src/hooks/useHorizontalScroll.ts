import { useEffect, useRef } from 'react';

/**
 * Maps vertical scroll progress of an outer container to horizontal translation of an inner track.
 */
export function useHorizontalScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null); // The tall container (e.g. 240vh)
  const trackRef = useRef<HTMLDivElement>(null);   // The horizontally scrolling track

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    let ticking = false;

    // Calculate max translation distance (track width - viewport width + some padding)
    const getDist = () => Math.max(0, track.scrollWidth - window.innerWidth + window.innerWidth * 0.06);

    const size = () => {
      wrapper.style.height = `${window.innerHeight + getDist()}px`;
    };

    const update = () => {
      const rect = wrapper.getBoundingClientRect();
      const total = wrapper.offsetHeight - window.innerHeight;
      
      // Calculate progress (0 to 1)
      let prog = 0;
      if (total > 0) {
        prog = Math.min(1, Math.max(0, -rect.top / total));
      }
      
      track.style.transform = `translate3d(${-prog * getDist()}px, 0, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    const onResize = () => {
      size();
      update();
    };

    // Initial setup
    size();
    update();

    // Sometimes track width needs a tick to compute correctly after mounting
    const timer = setTimeout(() => {
      size();
      update();
    }, 400);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      clearTimeout(timer);
    };
  }, []);

  return { wrapperRef, trackRef };
}
