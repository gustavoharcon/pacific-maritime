import { getIcon } from "@/utils/helperFunctions";
import Link from "next/link";

const ColumnsWithTopBGImageText = ({ columns, buttons }) => {

    return (
        <div className="columns-with-top-image-text">
            {columns.map((column, index) => (
                <div className="column" key={index}>
                    {column.top_image ? <img src={column.top_image} alt="" className="top-image" /> : null}
                    {
                        column.icon ? <div className="icon-wrapper">{getIcon(column.icon)}</div> : null
                    }
                    <h3 className="title">{column.title}</h3>
                    <p className="description">{column.description}</p>
                </div>
            ))}
            {buttons ?
                <div className="buttons">
                    {buttons.map((button, index) => (
                        <Link href={button.link} className={button.button_style} key={index}>{button.text}</Link>
                    ))}
                </div>
                : null}
        </div>
    )
}

export default ColumnsWithTopBGImageText