import HeroSection from "@/components/HeroSections/HeroSection";
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

  return (
    <>
      <HeroSection data={hero_section} />
    </>
  );
}
