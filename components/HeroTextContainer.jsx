"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroTextContainer = ({ data }) => {
    const { title, subtitle, buttons } = data;

    return (
        <div className="hero-text-container">
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