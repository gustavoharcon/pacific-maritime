import HeroSection from "@/components/HeroSections/HeroSection"
import siteData from "@/data/siteData.js"
import TextAndTableOfContents from "@/components/TextAndTableOfContents"

const tosData = siteData.find(item => item.terms_of_service_page)?.terms_of_service_page;
const heroSection = tosData.hero_section;

console.log(tosData);

export async function generateMetadata() {
    return {
        title: tosData.meta_data.title,
        description: tosData.meta_data.description,
    };
}

const TermsOfService = () => {
    return (
        <div className="terms-of-service-page-content">
            <HeroSection data={heroSection} />
            <div className="terms-and-table-of-contents-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TextAndTableOfContents data={tosData.text_and_table_of_contents} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsOfService