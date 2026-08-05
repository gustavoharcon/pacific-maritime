import TopText from "./Text/TopText";

const TwoColumnsText = ({ data, className = "" }) => {

    const { left_side, right_side } = data;

    return (
        <section className={`two-columns-with-text-section ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col left-side-col">
                        <TopText data={left_side.top_text} />
                        {
                            left_side.image && (
                                <div className="bottom-image-container">
                                    <img src={left_side.image} alt={left_side.image_alt ? left_side.image_alt : ""} width={left_side.image_width ? left_side.image_width : "100%"} />
                                </div>
                            )
                        }
                    </div>
                    <div className="col right-side-col">
                        <TopText data={right_side.top_text} />
                        {
                            right_side.image && (
                                <div className="bottom-image-container">
                                    <img src={right_side.image} alt={right_side.image_alt ? right_side.image_alt : ""} width={right_side.image_width ? right_side.image_width : "100%"} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TwoColumnsText