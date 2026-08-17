import HeroSection from "@/components/HeroSections/HeroSection";
import TopText from "@/components/Text/TopText";
import Timeline from "@/components/Timeline";
import TwoColumnsText from "@/components/TwoColumnsText";
import TopTextThreeColumns from "@/components/TopTextThreeColumns";
import TeamMembers from "@/components/TeamMembers";
import Buttons from "@/components/Buttons/Buttons";
import ColumnsWithIconText from "@/components/ColumnsWithIconText";
import Contracts from "@/components/Contracts";
import siteData from "@/data/siteData";
import CallToAction from "@/components/CTA/CallToAction";
import { generatePageMetadata } from "@/utils/metadata";


const aboutData = siteData.find(item => item.about_page)?.about_page;
const about_pmi = aboutData?.about_pmi;
const callToAction = aboutData.call_to_action;
const ourteamData = aboutData?.our_team_section;
const processData = aboutData?.process_section;
const contractsData = aboutData?.contracts_section;

export async function generateMetadata() {
    return generatePageMetadata({
        title: aboutData.meta_data.title,
        description: aboutData.meta_data.description,
        path: "/about",
    });
}

const AboutPage = () => {
    return (
        <>
            <HeroSection data={aboutData.hero_section} />
            {/* <section className="milestones-section">
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
            </section> */}
            <TwoColumnsText data={about_pmi} />
            {/* <TopTextThreeColumns data={capabilities} className="capabilities-section" /> */}
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
            <CallToAction data={callToAction} />
            <section className="process-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={processData.top_text} />
                            <ColumnsWithIconText data={processData.steps} />
                            <Buttons data={processData.buttons} />
                        </div>
                    </div>

                </div>
            </section>
            <section className="contracts-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Contracts data={contractsData} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage