import Link from "next/link";
import Image from "next/image";
import { MapPin, Globe, Mail, ArrowRight, PlayCircle, Camera, Share2, Link as LinkIcon } from "lucide-react";

const services = [
  { label: "Video Production",         href: "/services" },
  { label: "Digital Marketing",        href: "/services" },
  { label: "Website Design",           href: "/services" },
  { label: "App Development",          href: "/services" },
  { label: "Logo Design & Branding",   href: "/services" },
  { label: "Photography",              href: "/services" },
  { label: "Graphic Design",           href: "/services" },
  { label: "SEO & Content Strategy",   href: "/services" },
  { label: "Social Media Management",  href: "/services" },
  { label: "Event Coverage",           href: "/services" },
];

const industries = [
  { label: "Education",         href: "/industries" },
  { label: "Healthcare",        href: "/industries" },
  { label: "Real Estate",       href: "/industries" },
  { label: "Retail & Malls",    href: "/industries" },
  { label: "Hospitality",       href: "/industries" },
  { label: "Politics & Govt.",  href: "/industries" },
  { label: "Jewellery",         href: "/industries" },
  { label: "Construction",      href: "/industries" },
  { label: "Food & Beverage",   href: "/industries" },
  { label: "More Industries",   href: "/industries" },
];

const company = [
  { label: "About Us",  href: "/about"         },
  { label: "Our Work",  href: "/work" },
  { label: "Services",  href: "/services"       },
  { label: "Blog",      href: "/blog"     },
  { label: "Contact",   href: "/contact"  },
];

const social = [
  { icon: Camera,     href: "#", label: "Instagram" },
  { icon: Share2,     href: "#", label: "Facebook"  },
  { icon: PlayCircle, href: "#", label: "YouTube"   },
  { icon: LinkIcon,   href: "#", label: "LinkedIn"  },
];

export default function Footer() {
  return (
    <footer>
      {/* ── CTA Banner ── */}
      {/* <div className="bg-[#e0f4fb] py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#0d1b2e]">
          We Treat Our Clients Like Partners
        </h2>
        <p className="mt-3 text-[#0d1b2e]/60 text-base max-w-md mx-auto">
          Let&apos;s find out if we&apos;re the right fit for each other.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 mt-7 text-sm font-bold text-white px-8 py-3.5 rounded-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#0977a8" }}
        >
          Get a Proposal <ArrowRight size={16} />
        </Link>
      </div> */}

      {/* ── Footer Body ── */}
      <div className="bg-[#0d1b2e] pt-14 pb-8 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_2fr_2fr] gap-10 pb-10 border-b border-white/10">

            {/* Col 1 — Brand info */}
            <div className="flex flex-col gap-5">
              <Link href="/">
                <Image
                  src="/assets/creator_touch_logo.png"
                  alt="Creators Touch Logo"
                  width={160}
                  height={60}
                  className="object-contain brightness-0 invert"
                />
              </Link>

              <ul className="flex flex-col gap-2.5 text-sm text-white/60">
                <li className="flex items-start gap-2.5">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-[#0977a8]" />
                  Based in Vijayawada, Andhra Pradesh
                </li>
                <li className="flex items-start gap-2.5">
                  <Globe size={15} className="mt-0.5 shrink-0 text-[#0977a8]" />
                  Andhra Pradesh&apos;s Top Creative Agency
                </li>
                <li className="flex items-start gap-2.5">
                  <Globe size={15} className="mt-0.5 shrink-0 text-[#0977a8]" />
                  Serving Clients Across India
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail size={15} className="mt-0.5 shrink-0 text-[#0977a8]" />
                  <a href="mailto:hello@creatorstouch.in" className="hover:text-white transition-colors">
                    hello@creatorstouch.in
                  </a>
                </li>
              </ul>

              {/* Social icons */}
              <div className="flex items-center gap-3 mt-1">
                {social.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-[#0977a8] hover:text-[#0977a8] transition-colors"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Company */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Company</p>
              <ul className="flex flex-col gap-2.5">
                {company.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors group"
                    >
                      <ArrowRight size={12} className="text-[#0977a8] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Services</p>
              <ul className="flex flex-col gap-2.5">
                {services.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors group"
                    >
                      <ArrowRight size={12} className="text-[#0977a8] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Industries */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Industries</p>
              <ul className="flex flex-col gap-2.5">
                {industries.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors group"
                    >
                      <ArrowRight size={12} className="text-[#0977a8] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Address bar ── */}
          <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-[#0977a8] mb-1">Vijayawada Office</p>
              <p className="text-xs text-white/40">MG Road, Vijayawada, Andhra Pradesh — 520 010</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0977a8] mb-1">Phone</p>
              <a href="tel:+919885933339" className="text-xs text-white/40 hover:text-white transition-colors">
                +91 98859 33339
              </a>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <p>&copy; {new Date().getFullYear()} Creators Touch Global. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <Link href="/blog"    className="hover:text-white transition-colors">Blog</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Site Map</Link>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-full bg-[#0977a8] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                <LinkIcon size={13} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
