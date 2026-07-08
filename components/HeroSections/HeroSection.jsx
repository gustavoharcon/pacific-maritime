import HeroTextContainer from "@/components/HeroTextContainer";

const HeroSection = ({ data }) => {

    const { background_image } = data;

    return (
        <section className="hero-section">
            <div className="container">
                <div className="row" style={background_image && { backgroundImage: `url(${background_image})` }}>
                    <div className="col">
                        <HeroTextContainer data={data} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;