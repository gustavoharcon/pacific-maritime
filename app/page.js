import HeroSection from "@/components/HeroSections/HeroSection";
import TopTextThreeColumns from "@/components/TopTextThreeColumns";
import ThreeColumnsBackgroundImage from "@/components/ThreeColumnsBackgroundImage";

import siteData from "@/data/siteData.js";

const homeData = siteData.find(item => item.home_page)?.home_page;

export async function generateMetadata() {
  return {
    title: homeData.meta_data.title,
    description: homeData.meta_data.description,
  };
}

export default function Home() {

  const hero_section = homeData.hero_section;
  const top_text_three_columns = homeData.top_text_three_columns;
  const capabilities_three_columns = homeData.capabilities_three_columns;

  return (
    <>
      <HeroSection data={hero_section} />
      <TopTextThreeColumns data={top_text_three_columns} />
      <ThreeColumnsBackgroundImage className="capabilities-three-columns" data={capabilities_three_columns} />
    </>
  );
}
