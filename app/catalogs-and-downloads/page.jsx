import siteData from "@/data/siteData";
import HeroSection from "@/components/HeroSections/HeroSection";
import CatalogsClientContainer from "@/components/CatalogsClientContainer";
import CallToAction from "@/components/CTA/CallToAction";

const catalogsData = siteData.find(item => item.catalogs_page)?.catalogs_page;

export async function generateMetadata() {
    return {
        title: catalogsData.meta_data.title,
        description: catalogsData.meta_data.description,
    };
}

const CatalogsPage = () => {
    return (
        <>
            <HeroSection data={catalogsData.hero_section} />
            <CatalogsClientContainer catalogsData={catalogsData} />
            <CallToAction />
        </>
    )
}

export default CatalogsPage;