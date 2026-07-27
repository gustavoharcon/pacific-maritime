import ColumnTextContainer from "./Text/ColumnTextContainer"

const LeftSideColumnAndFourItems = ({ data }) => {
    return (
        <div className="left-side-column-and-four-items">
            <div className="left-side-column">
                <div className="item">
                    <ColumnTextContainer data={data[0]} />
                    <div className="bottom-image-container">
                        <img src={data[0].bottom_image} alt="" />
                    </div>
                </div>
            </div>
            <div className="right-side-four-items">
                {data.slice(1).map((item, index) => (
                    <div className="item" key={index}>
                        <ColumnTextContainer data={item} />
                        <div className="bottom-image-container">
                            <img src={item.bottom_image} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeftSideColumnAndFourItems