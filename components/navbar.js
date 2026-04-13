"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "Services",   href: "/services" },
  { label: "Our Work",   href: "/work" },
  { label: "About Us",   href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Blog",       href: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === "/";

  // On inner pages the navbar always behaves as if scrolled
  // so links are dark and visible over white backgrounds.
  // On the homepage the original scroll-driven behaviour is kept.
  const active = isHome ? scrolled : true;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-500 ${
        active ? "bg-[#ffffff] shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top row: Logo | center slot | Contact */}
      <div className="relative w-full max-w-6xl mx-auto px-5 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 z-10">
          <img
            src="/assets/creator_touch_logo.png"
            alt="Creators Touch Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Center nav links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <ul className={`hidden md:flex items-center gap-1 rounded-full px-3 py-1 ${active ? "bg-white/60" : "bg-black/5"}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs font-medium px-4 py-1.5 rounded-full transition-colors duration-200 ${
                    active
                      ? "text-[#0d1b2e] hover:bg-[#0977a8] hover:text-white"
                      : "text-black/80 hover:text-black hover:bg-black/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact button */}
        <div className="hidden md:flex items-center z-10">
          <Link
            href="/contact"
            className={`text-sm font-semibold px-5 py-2 rounded-lg border transition-all duration-300 ${
              active
                ? "border-[#0977a8] text-[#0977a8] hover:bg-[#0977a8] hover:text-white"
                : "border-black text-black hover:bg-black/10"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={20} className={active ? "text-[#0d1b2e]" : "text-black"} />
          ) : (
            <Menu size={20} className={active ? "text-[#0d1b2e]" : "text-black"} />
          )}
        </button>
      </div>


{/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-white rounded-2xl shadow-lg px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm font-medium text-gray-700 hover:text-[#0977a8] py-2 px-3 rounded-lg hover:bg-[#e0f4fb] transition-colors"
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
              className="flex items-center justify-center text-sm font-semibold text-white w-full px-5 py-2.5 rounded-xl"
              style={{ backgroundColor: "#0977a8" }}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
