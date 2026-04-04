"use client";

import { useEffect, useRef } from "react";

export default function PageBlur({ children }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const blur = () => {
      el.style.filter    = "blur(6px)";
      el.style.transform = "scale(0.995)";
      el.style.opacity   = "0.72";
    };

    const clear = () => {
      el.style.filter    = "";
      el.style.transform = "";
      el.style.opacity   = "";
    };

    document.addEventListener("mouseleave", blur);
    document.addEventListener("mouseenter", clear);

    return () => {
      document.removeEventListener("mouseleave", blur);
      document.removeEventListener("mouseenter", clear);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{ transition: "filter 0.5s ease, transform 0.5s ease, opacity 0.5s ease" }}
    >
      {children}
    </div>
  );
}
