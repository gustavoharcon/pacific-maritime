import HeroTextContainer from "@/components/HeroTextContainer";

const HeroSection = ({ data }) => {

    const { right_column_image } = data;

    return (
        <section className="hero-section">
            <div className="container" >
                <div className="row" >
                    <div className="col">
                        <HeroTextContainer data={data} />
                    </div>
                    <div className="col">
                        <img src={right_column_image} className="right-column-image" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;