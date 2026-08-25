import siteData from "@/data/siteData";
import HeroSection from "@/components/HeroSections/HeroSection";
import ColumnsWithTopImageText from "@/components/ColumnsWithTopImageText";
import TopText from "@/components/Text/TopText";
import TwoColumnsRightSideImage from "@/components/TwoColumnsRightSideImage";
import LeftSideColumnAndFourItems from "@/components/LeftSideColumnAndFourItems";
import CallToAction from "@/components/CTA/CallToAction";
import { generatePageMetadata } from "@/utils/metadata";

const manufacturingData = siteData.find(item => item.manufacturing_capabilities_page)?.manufacturing_capabilities_page;
const callToAction = manufacturingData.call_to_action;
const workflowData = manufacturingData.workflow_section;
const equipmentData = manufacturingData.equipment_section;
const core_fabrication_processes = manufacturingData.core_fabrication_processes;

export async function generateMetadata() {
    return generatePageMetadata({
        title: manufacturingData.meta_data.title,
        description: manufacturingData.meta_data.description,
        path: "/about/manufacturing-capabilities",
    });
}

const ManufacturingCapabilitiesPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <HeroSection data={manufacturingData.hero_section} />
            {/* <TwoColumnsLeftSideImage data={twoColumnsLeftSidImageData} /> */}
            <section className="workflow-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={workflowData.top_text} />
                            <ColumnsWithTopImageText columns={workflowData.columns} buttons={workflowData.buttons} />
                            {/* <Buttons data={workflowData.buttons} /> */}
                        </div>
                    </div>
                </div>
            </section>
            <TwoColumnsRightSideImage data={core_fabrication_processes} className="core-fabrication-processes" />
            <section className="equipment-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={equipmentData.top_text} />
                            <LeftSideColumnAndFourItems data={equipmentData.equipment_list} />
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction data={callToAction} />
            {/* <ProductionCapacity data={productionCapacityData} /> */}
            {/* <section className="quality-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={qualityData.top_text} />
                        </div>
                    </div>
                    <div className="row columns-row">
                        <div className="col">
                            <TwoColumnsLeftSideImage data={qualityData.right_side_column} />
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default ManufacturingCapabilitiesPage