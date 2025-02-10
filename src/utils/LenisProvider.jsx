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
  const [lenisInstance, setLenisInstance] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis({
        duration: 1.2,
        smooth: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      setLenisInstance(lenis);
      lenis.stop();

      lenisRef.current = lenis;

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      if ('scrollRestoration' in window.history) {
        delete window.history.scrollRestoration; // <-- Buraya ekledim!
      }

      return () => {
        lenis.stop();
        lenis.destroy();
        lenisRef.current = null;
        setLenisInstance(null);

        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'auto';
        }
      };
    }
  }, []);

  useEffect(() => {
    if (lenisInstance) {
      setTimeout(() => {
        lenisInstance.scrollTo(0, { immediate: true });
      }, 50); // 50ms delay
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
    }
    // document.querySelector('body').style.overflowY = 'hidden';
  }, [pathname]);


  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
}