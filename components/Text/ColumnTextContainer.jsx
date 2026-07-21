
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const ColumnTextContainer = ({ data = {} }) => {
    const { small_title, title, subtitle, buttons, categories } = data;

    return (
        <div className="column-text-container">
            <div className="text-area">
                {small_title && <p className="small-title">{small_title}</p>}
                {title && <h3 className="title">{title}</h3>}
                {subtitle && <p className="subtitle">{subtitle}</p>}
                {categories?.length > 0 && <div className="categories">
                    {categories.map((category, index) => (
                        <span key={index}>{category}</span>
                    ))}
                </div>}
                <div className="buttons-container">
                    {buttons?.map((button, index) => (
                        <Link key={index} href={button.link} className={`btn ${button.button_style}`}>{button.text} <span className="right-arrow"><MdKeyboardArrowRight /></span></Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ColumnTextContainer