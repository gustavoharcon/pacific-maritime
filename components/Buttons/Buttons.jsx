import Link from "next/link";

const Buttons = ({ buttons = [], aosAnimation = "fade-up", aosDelay = 200, aosDuration = 600 }) => {
    return (
        buttons && <div className="buttons-component" data-aos={aosAnimation} data-aos-delay={aosDelay} data-aos-duration={aosDuration}> {buttons.map((button, index) => (
            <Link key={index} href={button.link} className={`btn ${button.button_style}`}>{button.text}</Link>
        ))}</div>
    )
}

export default Buttons