import HeroSection from "@/components/HeroSections/HeroSection";
import TimelineThreeColumns from "@/components/TimelineThreeColumns";
import ColumnsWithImage from "@/components/ColumnsWithImage";
import TopText from "@/components/Text/TopText";
import siteData from "@/data/siteData.js";
import ColumnsWithTopBGImageText from "@/components/ColumnsWithTopImageText";
import TwoColumnsRightSideImage from "@/components/TwoColumnsRightSideImage";
import CallToAction from "@/components/CTA/CallToAction";
import TwoColumnsCompliance from "@/components/TwoColumnsCompliance";
import EquipmentByProcess from "@/components/EquipmentByProcess";
import Buttons from "@/components/Buttons/Buttons";
import { generatePageMetadata } from "@/utils/metadata";

const homeData = siteData.find(item => item.home_page)?.home_page;

export async function generateMetadata() {
  return generatePageMetadata({
    title: homeData.meta_data.title,
    description: homeData.meta_data.description,
    path: "",
  });
}

export default function Home() {

  const hero_section = homeData.hero_section;
  const complianceData = homeData.compliance_section;
  const capabilities_top_text = homeData.capabilities_three_columns.top_text;
  const why_choose_pmi = homeData.why_choose_pmi;
  const capabilities_three_columns = homeData.capabilities_three_columns.columns;
  const equipment_by_process_section = homeData.equipment_by_process_section;

  return (
    <>
      <HeroSection data={hero_section} />
      <TwoColumnsCompliance data={complianceData} />
      <div className="three-columns-background-image-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <TopText data={capabilities_top_text} />
              {/* <ThreeColumnsBackgroundImage className="capabilities-three-columns" data={capabilities_three_columns} /> */}
              <ColumnsWithTopBGImageText className="capabilities-three-columns" columns={capabilities_three_columns} buttons={homeData.capabilities_three_columns.buttons} />
            </div>
          </div>
        </div>
      </div>
      <CallToAction data={homeData.call_to_action} />
      <TwoColumnsRightSideImage data={why_choose_pmi} />
      {/* <TimelineThreeColumns data={timeline_three_columns} /> */}
      <section className="equipment-by-process-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <TopText data={equipment_by_process_section.top_text} />
              <EquipmentByProcess data={equipment_by_process_section.columns} />
              <Buttons data={equipment_by_process_section.buttons} />
            </div>
          </div>
        </div>
      </section>
      <TwoColumnsRightSideImage data={homeData.fullfilment_and_logistics} className="fullfilment-and-logistics" />
    </>
  );
}
