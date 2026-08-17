import siteData from "@/data/siteData";
import HeroSection from "@/components/HeroSections/HeroSection";
import CatalogsClientContainer from "@/components/CatalogsClientContainer";
import CallToAction from "@/components/CTA/CallToAction";

import { generatePageMetadata } from "@/utils/metadata";

const catalogsData = siteData.find(item => item.catalogs_page)?.catalogs_page;

export async function generateMetadata() {
    return generatePageMetadata({
        title: catalogsData.meta_data.title,
        description: catalogsData.meta_data.description,
        path: "/catalogs-and-downloads",
    });
}

const CatalogsPage = () => {
    return (
        <>
            {/* <HeroSection data={catalogsData.hero_section} /> */}
            <CatalogsClientContainer catalogsData={catalogsData} />
        </>
    )
}

export default CatalogsPage;