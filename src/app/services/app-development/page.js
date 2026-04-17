import AppDevelopmentPage from "@/src/features/services/AppDevelopmentPage";

export const metadata = {
  title:       "App Development — Creators Touch Global",
  description: "iOS and Android mobile applications built with React Native. From concept and prototype to App Store launch and beyond.",
  openGraph: {
    title:       "App Development — Creators Touch Global",
    description: "Apps people actually want to use — iOS, Android, React Native.",
    type:        "website",
  },
};

export default function Page() {
  return <AppDevelopmentPage />;
}
