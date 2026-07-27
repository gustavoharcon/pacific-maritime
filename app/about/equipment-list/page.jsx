import siteData from "@/data/siteData"
import HeroSection from "@/components/HeroSections/HeroSection"
import CallToAction from "@/components/CTA/CallToAction"

const equipmentListData = siteData.find(item => item.equipment_list_page)?.equipment_list_page

export async function generateMetadata() {
    return {
        title: equipmentListData.meta_data.title,
        description: equipmentListData.meta_data.description,
    }
}

const EquipmentListPage = () => {
    return (
        <>
            <HeroSection data={equipmentListData.hero_section} />
            <CallToAction />
        </>
    )
}

export default EquipmentListPage