
import { getButton, getIcon } from "@/utils/helperFunctions";

const ColumnTextContainer = ({ data = {} }) => {
    const { icon, small_title, title, subtitle, buttons, categories, animation = "fade-up", animation_duration = "800", animation_easing = "ease-in-out" } = data;

    return (
        <div className="column-text-container">
            <div
                className="text-area"
                data-aos={animation}
                data-aos-duration={animation_duration}
                data-aos-easing={animation_easing}
            >
                {icon && <div className="icon-wrapper">{getIcon(icon)}</div>}
                {small_title && <p className="small-title">{small_title}</p>}
                {title && <h3 className="title">{title}</h3>}
                {subtitle && <p className="subtitle">{subtitle}</p>}
                {categories?.length > 0 && <div className="categories">
                    {categories.map((category, index) => (
                        <span key={index}>{category}</span>
                    ))}
                </div>}
                {buttons && buttons.length > 0 && <div className="buttons-container">
                    {buttons.map((button, index) => (
                        getButton(button, index)
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default ColumnTextContainer