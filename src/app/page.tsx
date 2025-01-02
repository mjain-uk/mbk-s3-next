import HomeSection1 from "./components/home-page/section-1/HomeSection1";
import HomeSection2 from "./components/home-page/section-2/HomeSection2";
import { homeSection2Contents } from "./components/home-page/constants";
import HomeSection3 from "./components/home-page/section-3/HomeSection3";
import MbkIntroduction from "./components/home-page/mbk-introduction/MbkIntroduction";
import { getCarouselImages } from "./lib/helpers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Makeup by Kopal | Luxury Bridal and Party Makeup Services",
  description:
    "Welcome to Makeup by Kopal! Offering luxury bridal and party makeup services with premium brands like MAC, HUDA Beauty, and NARS. Book your appointment today!",
  keywords:
    "Bridal Makeup, Party Makeup, Wedding Makeup, Makeup by Kopal, Makeup Artist, London Makeup Artist, Bridal Hair, Professional Makeup Services",
};

export default function Home() {
  const { small, medium, extraSmall } = getCarouselImages();

  return (
    <main>
      <HomeSection1 />
      <MbkIntroduction />
      <HomeSection2 contents={homeSection2Contents} />
      <HomeSection3 small={small} medium={medium} extraSmall={extraSmall} />
    </main>
  );
}
