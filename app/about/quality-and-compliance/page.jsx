import HeroSection from "@/components/HeroSections/HeroSection";
import siteData from "@/data/siteData";

const qualityComplianceData = siteData.find(item => item.quality_compliance_page)?.quality_compliance_page

export async function generateMetadata() {
    return {
        title: qualityComplianceData.meta_data.title,
        description: qualityComplianceData.meta_data.description,
    }
}

const QualityAndCompliancePage = () => {
    return (
        <div className="quality-and-compliance-page-content">
            <HeroSection />
        </div>
    )
}

export default QualityAndCompliancePage