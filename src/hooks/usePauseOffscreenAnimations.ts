import { useEffect, useRef } from 'react';

// Pause decorative CSS animation only while its section is offscreen.
export function usePauseOffscreenAnimations<T extends HTMLElement>(dependency?: unknown) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      element.classList.toggle('decorative-motion-paused', !entry.isIntersecting);
    }, { rootMargin: '100px 0px' });
    observer.observe(element);
    return () => { observer.disconnect(); element.classList.remove('decorative-motion-paused'); };
  }, [dependency]);
  return ref;
}
