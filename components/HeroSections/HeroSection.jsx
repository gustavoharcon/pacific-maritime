import HeroTextContainer from "@/components/HeroTextContainer";

const HeroSection = ({ data }) => {

    const { right_column_image, full_width } = data;

    return (
        <section className={`hero-section ${full_width ? "full-width" : ""}`}>
            <div className="container" >
                <div className="row" >
                    <div className="col">
                        <HeroTextContainer data={data} />
                    </div>
                    {
                        right_column_image &&
                        <div className="col">
                            <img src={right_column_image} className="right-column-image" alt="" />
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default HeroSection;