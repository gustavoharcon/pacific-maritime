import HeroSection from "@/components/HeroSections/HeroSection";
import TopText from "@/components/Text/TopText";
import Timeline from "@/components/Timeline";
import TopTextThreeColumns from "@/components/TopTextThreeColumns";
import TeamMembers from "@/components/TeamMembers";
import Buttons from "@/components/Buttons/Buttons";
import ColumnsWithIconText from "@/components/ColumnsWithIconText";
import siteData from "@/data/siteData";


const aboutData = siteData.find(item => item.about_page)?.about_page;
const milestonesData = aboutData?.milestones_section;
const capabilities = aboutData?.capabilities_section;
const ourteamData = aboutData?.our_team_section;
const processData = aboutData?.process_section;

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
            <TopTextThreeColumns data={capabilities} className="capabilities-section" />
            <section className="our-team-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={ourteamData.top_text} />
                        </div>
                        <div className="col">
                            <TeamMembers data={ourteamData.team_members} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="process-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={processData.top_text} />
                            <ColumnsWithIconText data={processData.steps} />
                            <Buttons buttons={processData.buttons} />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutPage