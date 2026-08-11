"use client";

import Link from "next/link";

const HeroTextContainer = ({ data }) => {
    const { title, subtitle, buttons, center_text, max_width, small_title, description_and_logo } = data;

    return (
        <div className={`hero-text-container top-text ${center_text === true ? "center-text" : ""} ${max_width ? `max-width-${max_width}` : ""}`}>
            {
                small_title &&
                <p className="small-title">{small_title}</p>
            }
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
            {
                description_and_logo && (
                    <div className="description-and-logo">
                        <p className="small-title">{description_and_logo.title}</p>
                        <img className="logo" src={description_and_logo.logo.image} alt={description_and_logo.logo.alt} />
                    </div>
                )
            }
        </div>
    )
}

export default HeroTextContainer;