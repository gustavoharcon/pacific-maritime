"use client";

import Link from "next/link";

const HeroTextContainer = ({ data }) => {
    const { title, subtitle, buttons, center_text, max_width } = data;

    return (
        <div className={`hero-text-container ${center_text === true ? "center-text" : ""} ${max_width ? `max-width-${max_width}` : ""}`}>
            {
                title && (
                    <h1 className="title">
                        {title}
                    </h1>
                )
            }
            {
                subtitle && (
                    <p className="subtitle">
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