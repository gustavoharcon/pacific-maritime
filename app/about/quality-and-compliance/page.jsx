import HeroSection from "@/components/HeroSections/HeroSection";
import siteData from "@/data/siteData";
import TopText from "@/components/Text/TopText";
import LeftSideColumnAndFourItems from "@/components/LeftSideColumnAndFourItems";
import FaqList from "@/components/FaqList";
import CallToAction from "@/components/CTA/CallToAction";
import ColumnsWithBottomImage from "@/components/ColumnsWithBottomImage";
import { generatePageMetadata } from "@/utils/metadata";

const qualityComplianceData = siteData.find(item => item.quality_compliance_page)?.quality_compliance_page
const heroSectionData = qualityComplianceData.hero_section;
const certificationsSection = qualityComplianceData.certifications_section;
const faqsSection = qualityComplianceData.faqs_section;

export async function generateMetadata() {
    return generatePageMetadata({
        title: qualityComplianceData.meta_data.title,
        description: qualityComplianceData.meta_data.description,
        path: "/about/quality-and-compliance",
    });
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
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <ColumnsWithBottomImage data={certificationsSection.certifications_list} />
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction data={faqsSection.call_to_action} />
        </div>
    )
}

export default QualityAndCompliancePage