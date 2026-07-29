import HeroSection from "@/components/HeroSections/HeroSection"
import TopText from "@/components/Text/TopText";
import ThreeColumnsWithIcon from "@/components/ThreeColumnsWithIcon";
import siteData from "@/data/siteData"
import ContactForm from "@/components/Form/ContactForm";

const contactData = siteData.find(item => item.contact_page)?.contact_page;
const contactInfoSection = contactData.contact_info_section;
const sendMessageSection = contactData.send_a_message_section;

export async function generateMetadata() {
    return {
        title: contactData.meta_data.title,
        description: contactData.meta_data.description,
    };
}

const ContactPage = () => {
    return (
        <div className="contact-page-content">
            <HeroSection data={contactData.hero_section} />
            <section className="contact-info-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={contactInfoSection.top_text} />
                            <ThreeColumnsWithIcon data={contactInfoSection.three_columns_with_icon} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="send-a-message-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={sendMessageSection.top_text} />
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage