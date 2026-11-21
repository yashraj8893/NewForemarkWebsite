import { createContext, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import type Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

// Keep the context contract for menus and dialogs. Native browser scrolling
// does not require a Lenis instance or a permanent animation frame loop.
interface LenisContextValue { lenis: Lenis | null }
const LenisContext = createContext<LenisContextValue>({ lenis: null });
// eslint-disable-next-line react-refresh/only-export-components
export const useLenis = () => useContext(LenisContext);

export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  // Stroke-dash SVG animations repaint large diagrams while the page is moving.
  // Freeze only those decorative strokes during scrolling; resume at rest.
  useEffect(() => {
    let timer: number | undefined;
    const markScrolling = () => {
      document.documentElement.classList.add('page-is-scrolling');
      window.clearTimeout(timer);
      timer = window.setTimeout(() => document.documentElement.classList.remove('page-is-scrolling'), 180);
    };
    window.addEventListener('scroll', markScrolling, { passive: true });
    return () => {
      window.removeEventListener('scroll', markScrolling);
      window.clearTimeout(timer);
      document.documentElement.classList.remove('page-is-scrolling');
    };
  }, []);
  useEffect(() => {
    if (location.hash) {
      const timer = window.setTimeout(() => {
        const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (!target) return;
        const offset = window.innerWidth >= 768 ? 80 : 0;
        window.scrollTo({ top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset), behavior: 'auto' });
      }, 100);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);
  return <LenisContext.Provider value={{ lenis: null }}>{children}</LenisContext.Provider>;
};
export default SmoothScrollProvider;
