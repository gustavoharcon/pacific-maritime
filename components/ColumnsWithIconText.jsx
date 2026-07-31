import { BsBadge3D } from "react-icons/bs";
import { MdOutlineEngineering, MdOutlineFactory, MdOutlineControlCamera } from "react-icons/md";

const ColumnsWithIconText = ({ data }) => {

    const getColumnIcon = (icon) => {
        switch (icon) {
            case "design-and-quote":
                return <BsBadge3D className="icon" />
            case "engineering":
                return <MdOutlineEngineering className="icon" />
            case "fabrication":
                return <MdOutlineFactory className="icon" />
            case "logistics":
                return <MdOutlineControlCamera className="icon" />
            default:
                return <BsBadge3D className="icon" />
        }
    }

    return (
        <div className="columns-with-icon-text">
            {data.map((column, index) => (
                <div className="column" key={index}>
                    <div className="icon-container">
                        {getColumnIcon(column.icon)}
                    </div>
                    <h3 className="title">{column.title}</h3>
                    <p className="description">{column.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ColumnsWithIconText