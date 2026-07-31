import HeroSection from "@/components/HeroSections/HeroSection";
import TopTextThreeColumns from "@/components/TopTextThreeColumns";
import ThreeColumnsBackgroundImage from "@/components/ThreeColumnsBackgroundImage";
import TimelineThreeColumns from "@/components/TimelineThreeColumns";
import ColumnsWithImage from "@/components/ColumnsWithImage";
import TopText from "@/components/Text/TopText";

import siteData from "@/data/siteData.js";
import CallToAction from "@/components/CTA/CallToAction";

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
  const timeline_three_columns = homeData.timeline_three_columns;
  const products_three_columns = homeData.products_three_columns;

  return (
    <>
      <HeroSection data={hero_section} />
      <div className="three-columns-background-image-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <TopText data={top_text_three_columns.top_text} />
              <ThreeColumnsBackgroundImage className="capabilities-three-columns" data={capabilities_three_columns} />
            </div>
          </div>
        </div>
      </div>
      <TimelineThreeColumns data={timeline_three_columns} />
      <section className="columns-with-image-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <TopText data={products_three_columns.top_text} />
              <ColumnsWithImage data={products_three_columns} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
