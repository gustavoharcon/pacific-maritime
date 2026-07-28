import Link from "next/link";

const TopText = ({ data, aosAnimation = "fade-up", className = "" }) => {

    // If all the variables in data are null or undefined, return null
    if (!data || !data.small_title && !data.title && !data.subtitle && !data.buttons) return null;

    const { small_title, title, subtitle, buttons, heading_type } = data;

    return (
        <div className={`top-text ${className}`}>
            {small_title && <p className="small-title" data-aos={aosAnimation} data-aos-delay="200" data-aos-duration="600">{small_title}</p>}
            {title
                ? heading_type === "h2"
                    ? <h2 className="title" data-aos={aosAnimation} data-aos-delay="200" data-aos-duration="600">{title}</h2>
                    : heading_type === "h3"
                        ? <h3 className="title" data-aos={aosAnimation} data-aos-delay="200" data-aos-duration="600">{title}</h3>
                        : heading_type === "h4"
                            ? <h4 className="title" data-aos={aosAnimation} data-aos-delay="200" data-aos-duration="600">{title}</h4>
                            : heading_type === "h5"
                                ? <h5 className="title" data-aos={aosAnimation} data-aos-delay="200" data-aos-duration="600">{title}</h5>
                                : <h6 className="title" data-aos={aosAnimation} data-aos-delay="200" data-aos-duration="600">{title}</h6>
                : null
            }
            {subtitle && <p className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} data-aos={aosAnimation} data-aos-delay="200" data-aos-duration="600" />}
            {buttons && <div className="buttons" data-aos={aosAnimation} data-aos-delay="200" data-aos-duration="600"> {buttons.map((button, index) => (
                <Link key={index} href={button.link} className={`${button.button_style}`}>{button.text}</Link>
            ))}</div>}
        </div>
    );
};

export default TopText;