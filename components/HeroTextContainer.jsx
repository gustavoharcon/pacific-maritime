import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";

const HeroTextContainer = ({ data }) => {
    const { title, subtitle, buttons } = data;

    return (
        <div className="hero-text-container">
            {
                title && <h1>{title}</h1>
            }
            {
                subtitle && <p className="subtitle">{subtitle}</p>
            }
            {
                buttons && buttons.length > 0 && (
                    <div className="buttons">
                        {buttons.map((button, index) => (
                            <div className="button" key={index}>
                                {button.button_style === "primary" ? (
                                    <PrimaryButton href={button.url} aria-label={button.text}>
                                        {button.text}
                                    </PrimaryButton>
                                ) : (
                                    <SecondaryButton href={button.url} aria-label={button.text}>
                                        {button.text}
                                    </SecondaryButton>
                                )}
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default HeroTextContainer;