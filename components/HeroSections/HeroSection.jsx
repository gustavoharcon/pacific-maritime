import HeroTextContainer from "@/components/HeroTextContainer";
import MultiStepForm from "@/components/Form/MultiStepForm";

const HeroSection = ({ data }) => {

    const { background_image } = data;

    return (
        <section className="hero-section" style={{
            ...(background_image && { backgroundImage: `url(${background_image})` }),
        }}>
            <div className="container" >
                <div className="row" >
                    <div className="col">
                        <HeroTextContainer data={data} />
                    </div>
                    <div className="col">
                        <MultiStepForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;