"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "Services",   href: "/services" },
  { label: "Work",       href: "/work" },
  { label: "About Us",   href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Blog",       href: "/blog" },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 flex justify-center px-4 py-3"
      style={{ backgroundColor: "transparent" }}>

      {/* Pill container */}
      <div className={`w-full max-w-6xl rounded-2xl px-5 flex items-center justify-between h-16 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/10 backdrop-blur-sm shadow-none"}`}>

        {/* Video logo */}
        <Link href="/" className="flex items-center shrink-0">
          <video
            src="/assets/creator_touch.png"
            autoPlay
            loop
            muted
            playsInline
            className="h-36 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center">
          {navLinks.map((link, i) => (
            <li key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors px-4 ${scrolled ? "text-gray-700 hover:text-black" : "text-white/80 hover:text-white"}`}
              >
                {link.label}
              </Link>
              {i < navLinks.length - 1 && (
                <span className={`select-none ${scrolled ? "text-gray-300" : "text-white/30"}`}>|</span>
              )}
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/contact"
            className="flex items-center gap-2 text-sm font-medium text-white px-5 py-2.5 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--brand-navy-dark)" }}
          >
            <ArrowRight size={15} />
            Let&apos;s Work Together
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-lg px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm font-medium text-gray-700 hover:text-black py-2 px-2 rounded-lg hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 text-sm font-medium text-white w-full px-5 py-2.5 rounded-xl"
              style={{ backgroundColor: "var(--brand-navy-dark)" }}
              onClick={() => setMenuOpen(false)}
            >
              <ArrowRight size={15} />
              Let&apos;s Work Together
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
