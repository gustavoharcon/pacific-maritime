import TopText from "./Text/TopText";
import ColumnTextContainer from "./Text/ColumnTextContainer";

const ProductsThreeColumns = ({ className = "", data = {} }) => {
    const { top_text, columns } = data;

    return (
        <section className={`products-three-columns ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <TopText data={top_text} />
                    </div>
                </div>
                <div className="row columns-row">
                    {columns.map((column, index) => (
                        <div key={index} className="col">
                            <img src={column.top_image} alt={column.top_image_description} />
                            <div className="text-container">
                                <ColumnTextContainer data={column} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsThreeColumns