"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";

declare global {
  interface Window {
    __lenis?: Lenis | null;
  }
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const shouldReduceMotion = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    if (shouldReduceMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = null;
    };
  }, [shouldReduceMotion]);

  return <>{children}</>;
}
