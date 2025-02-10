'use client';

import Lenis from '@studio-freight/lenis';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const LenisContext = createContext(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // lenis.stop();
    lenisRef.current = lenis;
    setLenisInstance(lenis);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
}