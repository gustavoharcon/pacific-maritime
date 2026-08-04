import { getIcon } from "@/utils/helperFunctions";

const ColumnsWithTopBGImageText = ({ data }) => {

    return (
        <div className="columns-with-top-image-text">
            {data.map((column, index) => (
                <div className="column" key={index}>
                    {column.top_image ? <img src={column.top_image} alt="" className="top-image" /> : null}
                    {
                        column.icon ? <div className="icon-wrapper">{getIcon(column.icon)}</div> : null
                    }
                    <h3 className="title">{column.title}</h3>
                    <p className="description">{column.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ColumnsWithTopBGImageText