import ColumnTextContainer from "./Text/ColumnTextContainer"

const LeftSideColumnAndFourItems = ({ data }) => {
    return (
        <div className="left-side-column-and-four-items">
            <div className="left-side-column">
                <div className="item">
                    <ColumnTextContainer data={data[0]} />
                    {data[0].bottom_image && (
                        <div className="bottom-image-container">
                            <img src={data[0].bottom_image} alt={data[0].bottom_image_alt ? data[0].bottom_image_alt : ""} width={data[0].bottom_image_width ? data[0].bottom_image_width : "100%"} />
                        </div>
                    )}
                </div>
            </div>
            <div className="right-side-four-items">
                {data.slice(1).map((item, index) => (
                    <div className="item" key={index}>
                        <ColumnTextContainer data={item} />
                        {
                            item.bottom_image && (
                                <div className="bottom-image-container">
                                    <img src={item.bottom_image} alt={item.bottom_image_alt ? item.bottom_image_alt : ""} width={item.bottom_image_width ? item.bottom_image_width : "100%"} />
                                </div>
                            )
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeftSideColumnAndFourItems