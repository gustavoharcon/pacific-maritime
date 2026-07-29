import CallToAction from "@/components/CTA/CallToAction";
import MultiStepForm from "@/components/Form/MultiStepForm";
import TopText from "@/components/Text/TopText";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import siteData from "@/data/siteData";

const requestQuoteData = siteData.find(item => item.request_quote_page)?.request_quote_page;
const contact_methods = requestQuoteData.contact_methods;

const getIcon = (iconName) => {
    switch (iconName) {
        case "phone":
            return <MdOutlineLocalPhone />;
        case "office":
            return <IoLocationOutline />;
        default:
            return null;
    }
}

export async function generateMetadata() {
    return {
        title: requestQuoteData.meta_data.title,
        description: requestQuoteData.meta_data.description,
    };
}

const RequestQuotePage = () => {
    return (
        <>
            <div className="request-quote-page-content">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={requestQuoteData.top_text} />
                            <MultiStepForm />
                        </div>
                        <div className="col contact-methods">
                            {contact_methods.map((method, index) => (
                                <div key={index} className="contact-methods-item">
                                    <div className="icon">{getIcon(method.icon)}</div>
                                    <div className="details">
                                        <h3 className="title">{method.title}</h3>
                                        {method.subtitle && <p className="subtitle" dangerouslySetInnerHTML={{ __html: method.subtitle }}></p>}
                                        {method.value && <p className="value" dangerouslySetInnerHTML={{ __html: method.value }}></p>}
                                        {
                                            method.icon === 'office' ?
                                                <a href="https://maps.app.goo.gl/vwELP8qpm7vgDPk16" target="_blank" rel="noopener noreferrer" className="btn btn-black-outline btn-animation-two directions">Get directions</a> :
                                                null
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <CallToAction />
        </>
    )
}

export default RequestQuotePage