import Link from "next/link";

const HeroTextContainer = ({ data }) => {
    const { title, subtitle, buttons } = data;

    return (
        <div className="hero-text-container">
            {
                title && <h1 className="title">{title}</h1>
            }
            {
                subtitle && <p className="subtitle">{subtitle}</p>
            }
            {
                buttons && buttons.length > 0 && (
                    <div className="buttons">
                        {buttons.map((button, index) => (
                            <div className="button" key={index}>
                                <Link className={button.button_style} href={button.url} aria-label={button.text}>
                                    {button.text}
                                </Link>

                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default HeroTextContainer;