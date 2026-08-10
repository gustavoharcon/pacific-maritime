import siteData from "@/data/siteData";
import HeroSection from "@/components/HeroSections/HeroSection";
import ColumnsWithTopImageText from "@/components/ColumnsWithTopImageText";
import TopText from "@/components/Text/TopText";
import Buttons from "@/components/Buttons/Buttons";
import LeftSideColumnAndFourItems from "@/components/LeftSideColumnAndFourItems";

const manufacturingData = siteData.find(item => item.manufacturing_capabilities_page)?.manufacturing_capabilities_page;
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