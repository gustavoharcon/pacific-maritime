import TopText from "./Text/TopText";
import ColumnTextContainer from "./Text/ColumnTextContainer";
import { MdOutlineEngineering, MdOutlineFactory, MdOutlineControlCamera } from "react-icons/md";


const TopTextThreeColumns = ({ className = "", data = {} }) => {
    const { top_text, columns } = data;

    const getIcon = (iconName) => {
        switch (iconName) {
            case "engineering":
                return <MdOutlineEngineering className="icon" />;
            case "fabrication":
                return <MdOutlineFactory className="icon" />;
            case "logistics":
                return <MdOutlineControlCamera className="icon" />;
            default:
                return null;
        }
    }

    return (
        <section className={`top-text-three-columns ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <TopText data={top_text} />
                    </div>
                </div>
                <div className="row columns-row">

                    {columns.map((column, index) => (
                        <div key={index} className="col">
                            {
                                column.top_bg_image !== null && column.top_bg_image !== undefined ? <div className="background-image" style={{ backgroundImage: `url(${column.top_bg_image})` }}></div> : <div className="icon-container"><div className="icon">{getIcon(column.icon)}</div></div>

                            }
                            <ColumnTextContainer data={column} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default TopTextThreeColumns;