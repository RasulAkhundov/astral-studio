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
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    setLenisInstance(lenis);
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    
    if (lenis) {
      // Sayfa değişimlerinde scroll'u sıfırla
      lenis.scrollTo(0, { immediate: true });
      // Lenis'in internal scroll değerini manuel sıfırla
      lenis.__isLocked = false;
      lenis.targetScroll = 0;
      lenis.animatedScroll = 0;
      // lenis.actualScroll = 0;
    }
    
    // Güvenli olması için native scroll'u da sıfırla
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
}