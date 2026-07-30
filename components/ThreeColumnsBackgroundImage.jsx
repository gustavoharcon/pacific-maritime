import ColumnTextContainer from "./Text/ColumnTextContainer";

const ThreeColumnsBackgroundImage = ({ className = "", data = {} }) => {
    const { columns } = data;

    return (
        <div className={`three-columns-background-image ${className}`}>
            <div className="columns-row">
                {columns.map((column, index) => (
                    <div key={index} className={`col ${column?.shadow ? "shadow" : ""}`} style={{ backgroundImage: `url(${column.image})` }}>
                        <ColumnTextContainer data={column} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThreeColumnsBackgroundImage;