'use client';

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Register GSAP ScrollTrigger on client side
    gsap.registerPlugin(ScrollTrigger);
    setMounted(true);

    return () => {
      // Cleanup ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Avoid hydration mismatch by rendering children without GSAP initially
  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}
