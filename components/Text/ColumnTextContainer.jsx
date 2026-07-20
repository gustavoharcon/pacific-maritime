
import Link from "next/link";

const ColumnTextContainer = ({ data = {} }) => {
    const { small_title, title, subtitle, buttons } = data;

    return (
        <div className="column-text-container">
            <div className="text-area">
                {small_title && <p className="small-title">{small_title}</p>}
                {title && <h2 className="title">{title}</h2>}
                {subtitle && <p className="subtitle">{subtitle}</p>}
                <div className="buttons-container">
                    {buttons?.map((button, index) => (
                        <Link key={index} href={button.link} className="btn btn-black-outline">{button.text}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ColumnTextContainer