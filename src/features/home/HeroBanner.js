
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const DEFAULT_DATA = {
  eyebrow:       "Your",
  headline:      "Digital Gateway",
  subheadline:   "to Growth",
  ctas: [
    { label: "Let's Work Together", href: "/contact", variant: "primary" },
    { label: "View Our Work",        href: "/work",    variant: "outline" },
  ],
  labels: [
    { position: "left",   text: "Web Site"          },
    { position: "right",  text: "Digital Marketing" },
    { position: "bottom", text: "App Development"   },
  ],
};

export default function HeroBanner({ block = null }) {
  const data   = block?.data ?? DEFAULT_DATA;
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const scrollY   = window.scrollY;
      const progress  = Math.min(1, scrollY / window.innerHeight);
      imgRef.current.style.transform = `scale(${1 + progress * 0.10})`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftLabel   = data.labels?.find((l) => l.position === "left")   ?? DEFAULT_DATA.labels[0];
  const rightLabel  = data.labels?.find((l) => l.position === "right")  ?? DEFAULT_DATA.labels[1];
  const bottomLabel = data.labels?.find((l) => l.position === "bottom") ?? DEFAULT_DATA.labels[2];

  return (
    <section className="-mt-[65px] relative overflow-hidden h-screen bg-white">
      {/* Desktop background image */}
      <img
        ref={imgRef}
        src="/assets/images/banner.png"
        alt="Banner"
        className="hidden md:block absolute inset-0 w-full h-full will-change-transform"
        style={{ transformOrigin: "center center", transition: "transform 0.1s linear" }}
      />

      {/* Mobile background image — starts below the navbar (top-16 = 64px) */}
      <img
        src="/assets/images/bannermobile.png"
        alt="Banner"
        className="block h-[100vh] md:hidden absolute inset-x-0 bottom-0 top-16 w-full object-cover object-top"
      />

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/75" /> */}

      <style>{`
        @keyframes hero-float {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-14px); }
          100% { transform: translateY(0px); }
        }
        .hero-float-img {
          animation: hero-float 3.5s ease-in-out infinite;
        }
        .hero-float-img:hover {
          animation-play-state: paused;
          filter: brightness(1.08) drop-shadow(0 8px 24px rgba(9,119,168,0.25));
          transition: filter 0.3s ease;
        }
        .hero-float-img-delay1 { animation-delay: 0.6s; }
        .hero-float-img-delay2 { animation-delay: 1.2s; }
      `}</style>

      {/* Left image → Web Development */}
      <Link
        href="/services/web-development"
        aria-label={leftLabel.text}
        className="hero-float-img absolute left-0 top-1/2 -translate-y-1/2 w-40 md:w-64 lg:w-96 z-10 cursor-pointer"
      >
        <img
          src="/assets/images/one.png"
          alt={leftLabel.text}
          className="w-full h-full object-contain"
        />
      </Link>

      {/* Right image → Digital Marketing */}
      <Link
        href="/services/app-development"
        aria-label={rightLabel.text}
        className="hero-float-img hero-float-img-delay1 absolute right-0 top-1/2 -translate-y-1/2 w-40 md:w-64 lg:w-96 z-10 cursor-pointer"
      >
        <img
          src="/assets/images/two.png"
          alt={rightLabel.text}
          className="w-full h-full object-contain"
        />
      </Link>

      {/* Bottom image → App Development */}
      <Link
        href="/services/digital-marketing"
        aria-label={bottomLabel.text}
        className="hero-float-img hero-float-img-delay2 absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 md:w-72 lg:w-96 z-10 cursor-pointer"
      >
        <img
          src="/assets/images/three.png"
          alt={bottomLabel.text}
          className="w-full h-full object-contain"
        />
      </Link>

    </section>
  );
}
