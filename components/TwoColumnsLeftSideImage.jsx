import TopText from "./Text/TopText"
import Link from "next/link";
import Buttons from "@/components/Buttons/Buttons";

const TwoColumnsLeftSideImage = ({ data, className }) => {
    const { top_text, left_side_image, numbers, buttons } = data;

    console.log(buttons);

    return (
        <div className={`two-columns-left-side-image-section ${className}`}>
            <div className="container">
                <div className="row">
                    <div
                        className="col left-column-image"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="800"
                        style={{ backgroundImage: `url(${left_side_image})` }}
                    >
                    </div>
                    <div className="col right-column">
                        <TopText data={top_text} />
                        <div className="numbers">
                            {numbers.map((item, idx) => {
                                return (
                                    <div
                                        className="item"
                                        key={idx}
                                        data-aos="fade-up"
                                        data-aos-delay={idx * 200}
                                        data-aos-duration="800"
                                    >
                                        <p className="number">{item.number}</p>
                                        <p className="text">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <Buttons data={buttons} className="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoColumnsLeftSideImage