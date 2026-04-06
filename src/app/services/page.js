import ServicesPage from "@/src/features/services/ServicesPage";

export const metadata = {
  title:       "Services — Creators Touch Global",
  description: "Explore our nine core services: strategy, branding, website design, app development, digital marketing, video production, SEO, social media, and photography.",
  openGraph: {
    title:       "Services — Creators Touch Global",
    description: "Nine specialisations. One creative team. Strategy to execution.",
    type:        "website",
  },
};

export default function Page() {
  return <ServicesPage />;
}
