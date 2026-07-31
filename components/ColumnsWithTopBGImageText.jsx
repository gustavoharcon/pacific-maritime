

const ColumnsWithTopBGImageText = ({ data }) => {

    return (
        <div className="columns-with-bg-image-text">
            {data.map((column, index) => (
                <div className="column" key={index}>
                    {column.top_background_image ? <div className="bg-image-container" style={{ backgroundImage: `url(${column.top_background_image})` }}></div> : null}
                    <h3 className="title">{column.title}</h3>
                    <p className="description">{column.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ColumnsWithTopBGImageText