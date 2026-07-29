import ColumnTextContainer from "./Text/ColumnTextContainer";

const ColumnsWithImage = ({ className = "", data = {} }) => {
    const { columns } = data;

    return (
        <section className={`columns-with-image-component ${className}`}>
            <div className="columns">
                {columns.map((column, index) => (
                    <div key={index} className={`col ${column.with_border ? 'with-border' : ''}`}>
                        <img src={column.image} alt={column.image_alt} />
                        <div className="text-container">
                            <ColumnTextContainer data={column} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ColumnsWithImage;