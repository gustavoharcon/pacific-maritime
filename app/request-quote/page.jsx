import MultiStepForm from "@/components/Form/MultiStepForm";
import TopText from "@/components/Text/TopText";
import siteData from "@/data/siteData";
import ThreeColumnsWithIcon from "@/components/ThreeColumnsWithIcon";
import { generatePageMetadata } from "@/utils/metadata";

const requestQuoteData = siteData.find(item => item.request_quote_page)?.request_quote_page;
const contactMethods = requestQuoteData.contact_methods;

export async function generateMetadata() {
    return generatePageMetadata({
        title: requestQuoteData.meta_data.title,
        description: requestQuoteData.meta_data.description,
        path: "/request-quote",
    });
}

const RequestQuotePage = () => {
    return (
        <>
            <div className="request-quote-page-content">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TopText data={requestQuoteData.top_text} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col contact-methods">
                            <ThreeColumnsWithIcon data={contactMethods} />
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className="col">
                            <MultiStepForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RequestQuotePage