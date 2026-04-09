import { fetchBlocks, getBlock } from "@/src/lib/api";

import HeroBanner        from "@/src/features/home/HeroBanner";
import ClientsSection    from "@/src/features/home/ClientsSection";
import AboutSection      from "@/src/features/home/AboutSection";
import ServicesSection   from "@/src/features/home/ServicesSection";
import WorkSection          from "@/src/features/home/WorkSection";
import LiveProjectsSection  from "@/src/features/home/LiveProjectsSection";
import IndustriesSection    from "@/src/features/home/IndustriesSection";
import BlogSection       from "@/src/features/home/BlogSection";
import ReviewsSection    from "@/src/features/home/ReviewsSection";
import ContactSection    from "@/src/features/home/ContactSection";

/**
 * Homepage — server component.
 *
 * Fetches all blocks from the backend at request time (ISR, 60 s cache).
 * Each section receives its block as a prop; all sections fall back to
 * hardcoded defaults when block is null (API down or section missing).
 */
export default async function HomePage() {
  const blocks = await fetchBlocks();
  const block  = (section) => getBlock(blocks, section);

  return (
    <main>
      <HeroBanner        block={block("hero")}       />
      <ClientsSection    block={block("clients")}    />
      <AboutSection      block={block("about")}      />
      <ServicesSection   block={block("services")}   />
      <WorkSection          block={block("work")}        />
      <LiveProjectsSection />
      <IndustriesSection    block={block("industries")} />
      <BlogSection />
      <ReviewsSection    block={block("reviews")}    />
      <ContactSection    block={block("contact")}    />
    </main>
  );
}
