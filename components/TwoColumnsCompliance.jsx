import { getIcon } from "@/utils/helperFunctions";
import TopText from "./Text/TopText";

const TwoColumnsCompliance = ({ data }) => {
    if (!data) return null;

    return (
        <section className="two-columns-compliance">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <TopText data={data.top_text} />
                    </div>
                    <div className="col">
                        <div className="items">
                            {data.items && data.items.map((item, index) => (
                                <div className="item" key={index}>
                                    <div className="icon-wrapper">
                                        {getIcon(item.icon)}
                                    </div>
                                    <div className="item-content">
                                        <div className="text-container">
                                            <h3 className="item-title">{item.title}</h3>
                                            <p className="item-subtitle">{item.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TwoColumnsCompliance;