import HeroSection from "@/components/HeroSections/HeroSection";
import TopText from "@/components/Text/TopText";
import Timeline from "@/components/Timeline";
import siteData from "@/data/siteData";


const aboutData = siteData.find(item => item.about_page)?.about_page;
const milestonesData = aboutData?.milestones_section;

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
            <section className="milestones-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={milestonesData.top_text} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Timeline data={milestonesData.timeline} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage