import HeroSection from "@/components/HeroSections/HeroSection";
import siteData from "@/data/siteData";
import TopText from "@/components/Text/TopText";
import LeftSideColumnAndFourItems from "@/components/LeftSideColumnAndFourItems";
import FaqList from "@/components/FaqList";

const qualityComplianceData = siteData.find(item => item.quality_compliance_page)?.quality_compliance_page
const heroSectionData = qualityComplianceData.hero_section;
const certificationsSection = qualityComplianceData.certifications_section;
const faqsSection = qualityComplianceData.faqs_section;

export async function generateMetadata() {
    return {
        title: qualityComplianceData.meta_data.title,
        description: qualityComplianceData.meta_data.description,
    }
}

const QualityAndCompliancePage = () => {
    return (
        <div className="quality-and-compliance-page-content">
            <HeroSection data={heroSectionData} />
            <section className="certifications-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={certificationsSection.top_text} />
                            <LeftSideColumnAndFourItems data={certificationsSection.certifications_list} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="faqs-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={faqsSection.top_text} />
                            <FaqList data={faqsSection} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <TopText data={faqsSection.call_to_action} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default QualityAndCompliancePage