import ColumnTextContainer from "./Text/ColumnTextContainer";

const ThreeColumnsBackgroundImage = ({ className = "", data = {} }) => {
    const { columns } = data;

    return (
        <div className={`three-columns-background-image ${className}`}>
            <div className="columns-row">
                {columns.map((column, index) => (
                    <div key={index} className="col" style={{ backgroundImage: `url(${column.top_bg_image})` }}>
                        <ColumnTextContainer data={column} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThreeColumnsBackgroundImage;