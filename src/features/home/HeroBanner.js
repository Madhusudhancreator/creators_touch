"use client";

import { useEffect, useRef } from "react";

export default function HeroBanner() {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const scrollY = window.scrollY;
      const progress = Math.min(1, scrollY / window.innerHeight);
      const scale = 1 + progress * 0.10; // subtle: 1 → 1.08
      imgRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="-mt-[88px] overflow-hidden">
      <img
        ref={imgRef}
        src="/assets/images/banner.jpeg"
        alt="Banner"
        className="w-full h-screen object-cover will-change-transform"
        style={{ transformOrigin: "center center", transition: "transform 0.1s linear" }}
      />
    </section>
  );
}
