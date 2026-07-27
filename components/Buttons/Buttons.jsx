import Link from "next/link";

const Buttons = ({ data = [], aosAnimation = "fade-up", aosDelay = 200, aosDuration = 600 }) => {

    return (
        data && <div className="buttons-component" data-aos={aosAnimation} data-aos-delay={aosDelay} data-aos-duration={aosDuration}> {data.map((button, index) => (
            <Link key={index} href={button.link} className={`${button.button_style}`}>{button.text}</Link>
        ))}</div>
    )
}

export default Buttons