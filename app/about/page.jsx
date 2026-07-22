import HeroSection from "@/components/HeroSections/HeroSection";
import siteData from "@/data/siteData";


const aboutData = siteData.find(item => item.about_page)?.about_page;

export async function generateMetadata() {
    return {
        title: aboutData.meta_data.title,
        description: aboutData.meta_data.description,
    };
}

const AboutPage = () => {
    return (
        <>
            <HeroSection data={aboutData.hero_section} />
        </>
    )
}

export default AboutPage