import TopText from "./Text/TopText";
import { getIcon } from "@/utils/helperFunctions";

const ProductionCapacity = ({ data }) => {
    return (
        <section className="production-capacity-section">
            <div className="container">
                <div className="row">
                    <div className="col left-side-column">
                        <TopText data={data.top_text} />
                    </div>
                    <div className="col right-side-column">
                        {data.production_statistics.map((statistic, index) => (
                            <div key={index} className="production-statistic">
                                <p className="number">{statistic.icon && getIcon(statistic.icon)} <span>{statistic.number}</span></p>
                                <p className="text">{statistic.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductionCapacity