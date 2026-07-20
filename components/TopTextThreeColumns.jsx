import TopText from "./Text/TopText";
import ColumnTextContainer from "./Text/ColumnTextContainer";

const TopTextThreeColumns = ({ data = {} }) => {
    const { top_text, columns } = data;

    return (
        <section className="top-text-three-columns">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <TopText data={top_text} />
                    </div>
                </div>
                <div className="row columns-row">

                    {columns.map((column, index) => (
                        <div key={index} className="col">
                            <div className="background-image" style={{ backgroundImage: `url(${column.top_bg_image})` }}></div>
                            <ColumnTextContainer data={column} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default TopTextThreeColumns;