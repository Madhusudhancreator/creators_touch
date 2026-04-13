"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POSTS, normalizeDbPost } from "./posts";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
// Show DB posts only when there are MORE than this many (i.e. > 1 means ≥ 2)
const MIN_DB_COUNT = 1;

const INITIAL = 4;
const BATCH   = 2;

/* ── useInView: same pattern as home AboutSection ─────────────── */
function useInView(ref, threshold = 0.08) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return inView;
}

/* ── Individual card ───────────────────────────────────────────── */
function PostCard({ post, index, featured }) {
  const ref   = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className={featured ? "col-span-full" : ""}
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? "translateY(0)" : "translateY(44px)",
        transition: `opacity 0.7s ease ${index * 0.08}s, transform 0.7s ease ${index * 0.08}s`,
      }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group relative flex overflow-hidden rounded-2xl"
        style={{ height: featured ? "520px" : "380px", display: "block" }}
      >
        {/* Image */}
        <img
          src={post.img}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
        />

        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5" />

        {/* Hover darkening */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

        {/* Tag badge */}
        <div className="absolute top-5 left-5 z-10">
          <span
            className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm"
            style={{ backgroundColor: "rgba(9,119,168,0.85)", color: "#fff" }}
          >
            {post.tag}
          </span>
        </div>

        {/* Arrow — appears on hover */}
        <div
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full flex items-center justify-center border border-white/20 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
          style={{ backgroundColor: "#0977a8" }}
        >
          <ArrowRight size={15} className="text-white" />
        </div>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
          {/* Excerpt fades in on hover */}
          <p
            className={`text-white/75 text-sm leading-relaxed mb-3 opacity-0 translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 ${featured ? "max-w-2xl" : "line-clamp-2"}`}
            style={{ transitionDelay: "0.04s", minHeight: "40px" }}
          >
            {post.excerpt}
          </p>

          <h2 className={`font-bold text-white leading-snug ${featured ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"}`}>
            {post.title}
          </h2>

          <p className="text-white/40 text-xs mt-2 tracking-wide">
            {post.date}&ensp;·&ensp;{post.read}
          </p>
        </div>
      </Link>
    </div>
  );
}

/* ── Listing page ──────────────────────────────────────────────── */
export default function BlogListing() {
  const [visible, setVisible] = useState(INITIAL);
  const [mounted, setMounted] = useState(false);
  const [posts, setPosts]     = useState(POSTS);

  useEffect(() => setMounted(true), []);

  // Fetch from DB on mount; use DB posts only when count > MIN_DB_COUNT
  useEffect(() => {
    fetch(`${API_URL}/api/blogs`)
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null)
      .then((dbPosts) => {
        if (Array.isArray(dbPosts) && dbPosts.length > MIN_DB_COUNT) {
          setPosts(dbPosts.map(normalizeDbPost));
        }
      });
  }, []);

  const shown   = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  return (
    <main style={{ backgroundColor: "#0d1b2e", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section
        className="pt-32 pb-20 px-6 text-center"
        style={{
          opacity:    mounted ? 1 : 0,
          transform:  mounted ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <p
          className="text-xs uppercase tracking-[0.4em] font-semibold mb-4"
          style={{ color: "#0977a8" }}
        >
          Insights &amp; Ideas
        </p>
        <h1
          className="font-extrabold text-white tracking-tight leading-none"
          style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
        >
          The Blog.
        </h1>
        <p className="mt-5 text-white/40 text-base max-w-md mx-auto leading-relaxed">
          Strategies, stories, and perspectives from the Creators Touch team.
        </p>
      </section>

      {/* Separator */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      {/* ── Cards grid ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {shown.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} featured={i === 0} />
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setVisible((v) => v + BATCH)}
              className="flex items-center gap-3 text-sm font-semibold text-white/60 hover:text-white border border-white/15 hover:border-white/40 px-8 py-3.5 rounded-full transition-all duration-300"
            >
              Load More
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(9,119,168,0.5)" }}
              >
                <ArrowRight size={11} className="text-white" />
              </span>
            </button>
          </div>
        )}
      </section>

    </main>
  );
}
