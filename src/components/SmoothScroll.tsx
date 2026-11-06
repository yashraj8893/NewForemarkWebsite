import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

interface LenisContextValue {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextValue>({ lenis: null });

// eslint-disable-next-line react-refresh/only-export-components
export const useLenis = () => useContext(LenisContext);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();
  const [nativeMobile, setNativeMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches);
  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)');
    const update = () => setNativeMobile(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (nativeMobile) return;
    // Initialize Lenis with refined, cinematic inertia and damping
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
    });

    lenisRef.current = lenis;
    (window as unknown as { __lenis: Lenis }).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, [nativeMobile]);

  // Handle route and anchor hash changes seamlessly
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) {
      if (location.hash) {
        const timer = setTimeout(() => document.getElementById(location.hash.slice(1))?.scrollIntoView(), 100);
        return () => clearTimeout(timer);
      }
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const timer = setTimeout(() => {
          lenis.scrollTo(element, { offset: -80, duration: 1.2 });
        }, 60);
        return () => clearTimeout(timer);
      }
    } else {
      // Immediate scroll reset to top on route change
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, location.hash, nativeMobile]);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  );
};

export default SmoothScrollProvider;
