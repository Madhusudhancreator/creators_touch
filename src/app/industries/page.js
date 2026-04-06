import IndustriesPage from "@/src/features/industries/IndustriesPage";

export const metadata = {
  title:       "Industries — Creators Touch Global",
  description: "We serve Education, Healthcare, Real Estate, Retail, Food & Beverage, Hospitality, Jewellery, Construction, and Politics. One creative team, every sector.",
  openGraph: {
    title:       "Industries — Creators Touch Global",
    description: "Your industry. Our expertise. Nine sectors, one creative team.",
    type:        "website",
  },
};

export default function Page() {
  return <IndustriesPage />;
}
