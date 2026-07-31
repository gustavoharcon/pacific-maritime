
import { getButton, getIcon } from "@/utils/helperFunctions";

const ColumnTextContainer = ({ data = {} }) => {
    const { icon, small_title, title, subtitle, buttons, categories } = data;

    return (
        <div className="column-text-container">
            <div className="text-area">
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