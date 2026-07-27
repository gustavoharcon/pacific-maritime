

const ColumnsWithTopBGImageText = ({ data }) => {

    return (
        <div className="columns-with-bg-image-text">
            {data.map((column, index) => (
                <div className="column" key={index} data-aos="fade-up" data-aos-delay={index * 100} data-aos-duration="800" data-aos-easing="ease-in-out">
                    <div className="bg-image-container" style={{ backgroundImage: `url(${column.top_background_image})` }}></div>
                    <h3 className="title">{column.title}</h3>
                    <p className="description">{column.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ColumnsWithTopBGImageText