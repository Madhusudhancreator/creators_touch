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
        src="/assets/images/banner.jpeg"
        alt="Banner"
        className="hidden md:block absolute inset-0 w-full h-full will-change-transform"
        style={{ transformOrigin: "center center", transition: "transform 0.1s linear" }}
      />

      {/* Mobile background image — starts below the navbar (top-16 = 64px) */}
      <img
        src="/assets/images/bannermobile.png"
        alt="Banner"
        className="block md:hidden absolute inset-x-0 bottom-0 top-16 w-full object-cover object-top"
      />

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/75" /> */}

    </section>
  );
}
