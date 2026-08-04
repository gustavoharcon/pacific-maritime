import ColumnTextContainer from "./Text/ColumnTextContainer";

const ColumnsWithImage = ({ className = "", data = {} }) => {
    const { columns, width } = data;

    return (
        <section className={`columns-with-image-component ${className} ${width && `width-${width}`}`}>
            <div className="columns">
                {columns.map((column, index) => (
                    <div key={index} className={`col ${column.with_border ? 'with-border' : ''} `}>
                        {column.image && <div className="image-wrapper"><img src={column.image} alt={column.image_alt || ""} /></div>}
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