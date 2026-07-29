"use client";

import Link from "next/link";
import "aos/dist/aos.css";

const HeroTextContainer = ({ data }) => {
    const { title, subtitle, buttons, center_text } = data;

    return (
        <div className={`hero-text-container ${center_text === true ? "center-text" : ""}`}>
            {
                title && (
                    <h1 className="title" data-aos="fade-up" data-aos-duration="800">
                        {title}
                    </h1>
                )
            }
            {
                subtitle && (
                    <p className="subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                        {subtitle}
                    </p>
                )
            }
            {
                buttons && buttons.length > 0 && (
                    <div className="buttons">
                        {buttons.map((button, index) => (
                            <div className="button" key={index}>
                                <Link className={button.button_style} href={button.link} aria-label={button.text}>
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