"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroBanner() {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const scrollY = window.scrollY;
      const progress = Math.min(1, scrollY / window.innerHeight);
      imgRef.current.style.transform = `scale(${1 + progress * 0.10})`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="-mt-[104px] relative overflow-hidden h-screen">
      {/* Background image */}
      <img
        ref={imgRef}
        src="/assets/images/banner.jpeg"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        style={{ transformOrigin: "center center", transition: "transform 0.1s linear" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/75" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">

        {/* Triangle with headline */}
        <div className="relative flex items-center justify-center w-[320px] h-[280px] md:w-[440px] md:h-[380px]">

          {/* SVG triangle shape */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 440 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Glowing triangle */}
            <polygon
              points="220,360 20,20 420,20"
              fill="rgba(9,119,168,0.12)"
              stroke="#0977a8"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Inner lighter triangle */}
            <polygon
              points="220,310 60,55 380,55"
              fill="rgba(9,119,168,0.06)"
              stroke="rgba(9,119,168,0.3)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>

          {/* Text inside triangle */}
          <div className="relative z-10 text-center px-8 mt-4">
            <p className="text-[#0977a8] text-xs font-semibold uppercase tracking-widest mb-2">Your</p>
            <h1 className="text-white text-2xl md:text-3xl font-bold leading-snug">
              Digital Gateway
            </h1>
            <p className="text-white text-2xl md:text-3xl font-bold">
              to <span style={{ color: "#0977a8" }}>Growth</span>
            </p>
          </div>
        </div>

        {/* Three service labels positioned around the triangle */}
        <div className="relative w-full max-w-3xl mt-[-60px] md:mt-[-80px]">

          {/* Web Site — left */}
          <div className="absolute left-0 top-[-80px] md:top-[-100px] flex flex-col items-center gap-1">
            <span className="text-white font-bold text-sm md:text-base tracking-wide">Web Site</span>
            {/* Curved arrow SVG pointing right-up toward triangle */}
            <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="rotate-[-20deg]">
              <path
                d="M10 50 Q50 10 75 20"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="4 3"
              />
              <polygon points="75,14 75,26 82,20" fill="rgba(255,255,255,0.5)" />
            </svg>
          </div>

          {/* Digital Marketing — right */}
          <div className="absolute right-0 top-[-80px] md:top-[-100px] flex flex-col items-center gap-1">
            <span className="text-white font-bold text-sm md:text-base tracking-wide">Digital Marketing</span>
            {/* Curved arrow SVG pointing left-down toward triangle */}
            <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="rotate-[20deg] scale-x-[-1]">
              <path
                d="M10 50 Q50 10 75 20"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="4 3"
              />
              <polygon points="75,14 75,26 82,20" fill="rgba(255,255,255,0.5)" />
            </svg>
          </div>

          {/* App Development — bottom center */}
          <div className="flex flex-col items-center mt-[20px]">
            {/* Arrow pointing up toward triangle tip */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 35 Q20 10 20 5"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="4 3"
              />
              <polygon points="14,10 26,10 20,2" fill="rgba(255,255,255,0.5)" />
            </svg>
            <span className="text-white font-bold text-sm md:text-base tracking-wide mt-1">App Development</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex gap-4">
          <Link
            href="/contact"
            className="text-sm font-semibold text-white px-7 py-3 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#0977a8" }}
          >
            Let&apos;s Work Together
          </Link>
          <Link
            href="/work"
            className="text-sm font-semibold text-white px-7 py-3 rounded-xl border border-white/40 hover:bg-white/10 transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
