const CallToAction = ({ data }) => {

    const { title, subtitle, buttons } = data;

    return (
        <section className="call-to-action">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>{title}</h2>
                    </div>
                    <div className="col">
                        <p className="text">{subtitle}</p>
                        <div className="buttons">
                            {buttons.map((button, index) => (
                                <a
                                    key={index}
                                    href={button.link}
                                    className={`${button.button_style}`}
                                    aria-label={`Button to ${button.text}`}
                                >
                                    {button.text}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction;