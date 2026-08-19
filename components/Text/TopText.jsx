import Link from "next/link";
import { getIcon } from "@/utils/helperFunctions";

const TopText = ({ data = {}, className = undefined }) => {

    const { small_title, title, subtitle, buttons, heading_type, align_left, icon } = data;

    return (
        <div className={`top-text ${className} ${align_left ? 'align-left' : ''}`}>
            {icon && <div className="icon-wrapper">{getIcon(icon)}</div>}
            {small_title && <p className="small-title">{small_title}</p>}
            {title
                ? heading_type === "h1"
                    ? <h1 className="title">{title}</h1>
                    : heading_type === "h3"
                        ? <h3 className="title">{title}</h3>
                        : heading_type === "h4"
                            ? <h4 className="title">{title}</h4>
                            : heading_type === "h5"
                                ? <h5 className="title">{title}</h5>
                                : heading_type === "h6"
                                    ? <h6 className="title">{title}</h6>
                                    : <h2 className="title">{title}</h2>
                : null
            }
            {subtitle && <p className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />}
            {buttons && <div className="buttons"> {buttons.map((button, index) => (
                <Link key={index} href={button.link} className={`${button.button_style}`}>{button.text}</Link>
            ))}</div>}
        </div>
    );
};

export default TopText;