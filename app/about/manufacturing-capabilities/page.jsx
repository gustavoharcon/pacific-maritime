import siteData from "@/data/siteData";
import HeroSection from "@/components/HeroSections/HeroSection";
import TwoColumnsLeftSideImage from "@/components/TwoColumnsLeftSideImage";
import CallToAction from "@/components/CTA/CallToAction";
import ColumnsWithTopBGImageText from "@/components/ColumnsWithTopBGImageText";
import TopText from "@/components/Text/TopText";
import Buttons from "@/components/Buttons/Buttons";
import LeftSideColumnAndFourItems from "@/components/LeftSideColumnAndFourItems";

const manufacturingData = siteData.find(item => item.manufacturing_capabilities_page)?.manufacturing_capabilities_page;
const twoColumnsLeftSidImageData = manufacturingData.two_columns_left_side_image;
const workflowData = manufacturingData.workflow_section;
const equipmentData = manufacturingData.equipment_section;

export async function generateMetadata() {
    return {
        title: manufacturingData.meta_data.title,
        description: manufacturingData.meta_data.description,
    };
}

const ManufacturingCapabilitiesPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <HeroSection data={manufacturingData.hero_section} />
            <TwoColumnsLeftSideImage data={twoColumnsLeftSidImageData} />
            <div className="workflow-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={workflowData.top_text} />
                            <ColumnsWithTopBGImageText data={workflowData.columns} />
                            <Buttons data={workflowData.buttons} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="equipment-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={equipmentData.top_text} />
                            <LeftSideColumnAndFourItems data={equipmentData.equipment_list} />
                        </div>
                    </div>
                </div>
            </div>
            <CallToAction />
        </div>
    )
}

export default ManufacturingCapabilitiesPage