
const Timeline = ({ data = [] }) => {
    return (
        <div className="timeline-container">
            <div className="timeline-items">
                {data.map((item, idx) => (
                    <div
                        key={idx}
                        className="timeline-item"
                    >
                        <div className="dot-container"><div className="timeline-dot"></div></div>
                        <div className="timeline-content">
                            <span className="timeline-year">{item.year}</span>
                            <h3 className="timeline-title">{item.title}</h3>
                            <p className="timeline-desc">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;