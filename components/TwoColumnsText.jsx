import TopText from "./Text/TopText";

const TwoColumnsText = ({ data, className = "" }) => {

    const { left_side, right_side } = data;

    return (
        <section className={`two-columns-with-text-section ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col left-side-col">
                        <TopText data={left_side.top_text} />
                    </div>
                    <div className="col right-side-col">
                        <TopText data={right_side.top_text} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TwoColumnsText