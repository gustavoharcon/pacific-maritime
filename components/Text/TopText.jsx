"use client";

import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TopText = ({ data }) => {

    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
            easing: "ease-out-quad",
        });
    }, []);

    const { small_title, title, subtitle, buttons } = data;

    return (
        <div className="top-text">
            {small_title && <p className="small-title" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">{small_title}</p>}
            {title && <h2 className="title" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">{title}</h2>}
            {subtitle && <p className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" />}
            {buttons && <div className="buttons" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600"> {buttons.map((button, index) => (
                <Link key={index} href={button.link} className={`btn ${button.button_style}`}>{button.text}</Link>
            ))}</div>}
        </div>
    );
};

export default TopText;