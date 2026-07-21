import TopText from "./Text/TopText";

const TimelineThreeColumns = ({ className = "", data = {} }) => {
    const { top_text, columns = [] } = data;

    return (
        <section className={`timeline-three-columns ${className}`}>
            <div className="container">
                {top_text && (
                    <div className="row">
                        <div className="col">
                            <TopText data={top_text} />
                        </div>
                    </div>
                )}
                <div className="timeline-wrapper">
                    <div className="timeline-line"></div>
                    <div className="row columns-row">
                        {columns.map((column, index) => (
                            <div key={index} className="col timeline-col">
                                {column.top_image && (
                                    <div className="top-image">
                                        <img src={column.top_image} alt={column.title || ""} />
                                    </div>
                                )}
                                <div className="dot-container">
                                    <span className="dot"></span>
                                </div>
                                <div className="content">
                                    <h3 className="title">{column.title}</h3>
                                    <p className="subtitle">{column.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineThreeColumns;