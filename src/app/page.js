import HeroBanner          from "@/src/features/home/HeroBanner";
import ClientsSection      from "@/src/features/home/ClientsSection";
import AboutSection        from "@/src/features/home/AboutSection";
import ServicesSection     from "@/src/features/home/ServicesSection";
import WorkSection         from "@/src/features/home/WorkSection";
import LiveProjectsSection from "@/src/features/home/LiveProjectsSection";
import IndustriesSection   from "@/src/features/home/IndustriesSection";
import BlogSection         from "@/src/features/home/BlogSection";
import ReviewsSection      from "@/src/features/home/ReviewsSection";
import ContactSection      from "@/src/features/home/ContactSection";

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <ClientsSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <LiveProjectsSection />
      <IndustriesSection />
      <BlogSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
}
