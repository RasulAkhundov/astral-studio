'use client';

import Lenis from '@studio-freight/lenis';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function LenisProvider({ children }) {
  const [lenisInstance, setLenisInstance] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.stop();

    setLenisInstance(lenis);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const interval = setTimeout(() => {
      document.querySelector('body').style.overflowY = 'auto';
      lenis.start();
    }, 3000);

    return () => {
      lenis.destroy();
      setLenisInstance(null);
      clearInterval(interval)
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
      document.querySelector('body').style.overflowY = 'hidden';
    } else {
      window.scrollTo(0, 0);
      document.querySelector('body').style.overflowY = 'hidden';
    }
  }, [pathname]);

  return children;
}