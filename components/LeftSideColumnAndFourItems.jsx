import ColumnTextContainer from "./Text/ColumnTextContainer"

const LeftSideColumnAndFourItems = ({ data }) => {
    return (
        <div className="left-side-column-and-four-items">
            <div className="left-side-column">
                <ColumnTextContainer data={data[0]} />
            </div>
            <div className="right-side-four-items">
                {data.slice(1).map((item, index) => (
                    <div className="item" key={index}>
                        <ColumnTextContainer data={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeftSideColumnAndFourItems