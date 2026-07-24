
const Timeline = ({ data = [] }) => {
    return (
        <div className="timeline-container" data-aos="fade-up" data-aos-duration="800">
            <div className="timeline-items">
                {data.map((item, idx) => (
                    <div
                        key={idx}
                        className="timeline-item"
                        data-aos="fade-up"
                        data-aos-delay={idx * 100}
                        data-aos-duration="800"
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