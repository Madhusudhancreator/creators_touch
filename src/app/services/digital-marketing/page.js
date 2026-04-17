import DigitalMarketingPage from "@/src/features/services/DigitalMarketingPage";

export const metadata = {
  title:       "Digital Marketing — Creators Touch Global",
  description: "SEO, paid ads, social media, and email marketing — all working together as a single growth engine for your brand.",
  openGraph: {
    title:       "Digital Marketing — Creators Touch Global",
    description: "Strategy-first digital marketing that grows your business.",
    type:        "website",
  },
};

export default function Page() {
  return <DigitalMarketingPage />;
}
