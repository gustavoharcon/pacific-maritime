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

                    {right_column_image && <div
                        className="col col-with-bg"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="800"
                        style={{
                            ...(right_column_image && { backgroundImage: `url(${right_column_image})` }),
                        }}>
                    </div>}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;