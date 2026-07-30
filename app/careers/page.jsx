import siteData from "@/data/siteData"
import HeroSection from "@/components/HeroSections/HeroSection";
import TopText from "@/components/Text/TopText";
import JobListings from "@/components/JobListings";

const careersData = siteData.find(item => item.careers_page)?.careers_page;
const jobOpeningsSection = careersData.job_openings_section;

const CareersPage = () => {
    return (
        <div className="careers-page-content">
            <HeroSection data={careersData.hero_section} />
            <section className="job-openings-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={jobOpeningsSection.top_text} />
                        </div>
                        <div className="col">
                            <JobListings data={jobOpeningsSection.job_listings} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CareersPage