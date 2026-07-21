import TopText from "./Text/TopText";
import ColumnTextContainer from "./Text/ColumnTextContainer";

const ThreeColumnsBackgroundImage = ({ className = "", data = {} }) => {
    const { top_text, columns } = data;

    return (
        <section className={`three-columns-background-image ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <TopText data={top_text} />
                    </div>
                </div>
                <div className="row columns-row">
                    {columns.map((column, index) => (
                        <div key={index} className="col" style={{ backgroundImage: `url(${column.top_bg_image})` }}>
                            <ColumnTextContainer data={column} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ThreeColumnsBackgroundImage;