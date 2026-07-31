import TopText from "./Text/TopText";
import ColumnTextContainer from "./Text/ColumnTextContainer";
import { getIcon } from "@/utils/helperFunctions";


const TopTextThreeColumns = ({ className = "", data = {} }) => {
    const { top_text, columns } = data;

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
                                column.image !== null && column.image !== undefined ?
                                    <div className="background-image"
                                        style={{ backgroundImage: `url(${column.image})` }}
                                    >

                                    </div> :
                                    <div
                                        className="icon-container"
                                    ><div className="icon">{getIcon(column.icon)}</div></div>

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