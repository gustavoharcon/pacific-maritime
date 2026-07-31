import CallToAction from "@/components/CTA/CallToAction";
import MultiStepForm from "@/components/Form/MultiStepForm";
import TopText from "@/components/Text/TopText";
import siteData from "@/data/siteData";
import { getIcon } from "@/utils/helperFunctions";

const requestQuoteData = siteData.find(item => item.request_quote_page)?.request_quote_page;
const contact_methods = requestQuoteData.contact_methods;

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
                                            method.icon === 'location' ?
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
        </>
    )
}

export default RequestQuotePage