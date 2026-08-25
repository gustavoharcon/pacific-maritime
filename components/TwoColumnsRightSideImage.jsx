import { getIcon } from "@/utils/helperFunctions";
import TopText from "./Text/TopText"
import Buttons from "@/components/Buttons/Buttons";

const TwoColumnsRightSideImage = ({ data, className = "" }) => {
    const { top_text, right_side_image, items, buttons } = data;

    return (
        <div className={`two-columns-right-side-image-section ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col left-column">
                        <TopText data={top_text} />
                        <div className="items-container">
                            {
                                items && items.map((item, index) => {
                                    return (
                                        <div key={index} className="item">
                                            <div className="icon-wrapper">
                                                {
                                                    getIcon(item.icon)
                                                }
                                            </div>
                                            <div className="item-content">
                                                {
                                                    item.title && <h3>{item.title}</h3>
                                                }
                                                {
                                                    item.text && <p className="text">{item.text}</p>
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Buttons data={buttons} />
                    </div>
                    <div
                        className="col right-column-image"
                    >
                        <img src={right_side_image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoColumnsRightSideImage