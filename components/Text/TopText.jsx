const TopText = ({ data }) => {

    const { small_title, title, subtitle, buttons } = data;

    return (
        <div className="top-text">
            {small_title && <p className="small-title">{small_title}</p>}
            {title && <h2 className="title">{title}</h2>}
            {subtitle && <p className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />}
            {buttons && <div className="buttons"> {buttons.map((button, index) => (
                <Link key={index} href={button.link} className={`btn ${button.button_style}`}>{button.text}</Link>
            ))}</div>}
        </div>
    );
};

export default TopText;