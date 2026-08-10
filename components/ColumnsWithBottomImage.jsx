import TopText from "./Text/TopText"

const ColumnsWithBottomImage = ({ data }) => {
    return (
        <div className="columns-with-bottom-image">
            {
                data.map((item, index) => (
                    <div className="item" key={index}>
                        <div className="column-text-container">
                            <TopText data={item.top_text} />
                        </div>
                        <div className="bottom-image-container">
                            {item.bottom_image && <img src={item.bottom_image} alt={item.bottom_image_alt} />}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ColumnsWithBottomImage