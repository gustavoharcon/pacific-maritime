import siteData from "@/data/siteData";
import HeroSection from "@/components/HeroSections/HeroSection";
import CatalogsInteractive from "@/components/CatalogsInteractive";
import ShipboardFurnitureCatalog from "@/components/ShipboardFurnitureCatalog";

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
            <CatalogsInteractive data={catalogsData} />
            <ShipboardFurnitureCatalog data={catalogsData.shipboard_furniture_catalog} />
        </>
    )
}

export default CatalogsPage;