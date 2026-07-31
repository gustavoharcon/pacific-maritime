import siteData from "@/data/siteData"
import HeroSection from "@/components/HeroSections/HeroSection"
import CallToAction from "@/components/CTA/CallToAction"
import EquipmentSection from "@/components/EquipmentSection"

const equipmentListData = siteData.find(item => item.equipment_list_page)?.equipment_list_page

export async function generateMetadata() {
    return {
        title: equipmentListData.meta_data.title,
        description: equipmentListData.meta_data.description,
    }
}

const EquipmentListPage = () => {
    const sectionKeys = Object.keys(equipmentListData).filter(
        key => key !== "meta_data" && key !== "hero_section"
    );

    return (
        <div className="equipment-list">
            <HeroSection data={equipmentListData.hero_section} />
            {sectionKeys.map((key) => {
                const sectionData = equipmentListData[key];
                return (
                    <EquipmentSection
                        key={key}
                        sectionKey={key}
                        data={sectionData}
                    />
                );
            })}
            <CallToAction />
        </div>
    )
}

export default EquipmentListPage
