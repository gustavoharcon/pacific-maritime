import MultiStepForm from "@/components/Form/MultiStepForm";
import TopText from "@/components/Text/TopText";
import siteData from "@/data/siteData";

const requestQuoteData = siteData.find(item => item.request_quote_page)?.request_quote_page;

export async function generateMetadata() {
    return {
        title: requestQuoteData.meta_data.title,
        description: requestQuoteData.meta_data.description,
    };
}

const RequestQuotePage = () => {
    return (
        <div className="request-quote-page-content">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <TopText data={requestQuoteData.top_text} />
                        <MultiStepForm />
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}

export default RequestQuotePage