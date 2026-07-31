import Link from "next/link";

const Buttons = ({ data = [] }) => {

    return (
        data && <div className="buttons-component"> {data.map((button, index) => (
            <Link key={index} href={button.link} className={`${button.button_style}`}>{button.text}</Link>
        ))}</div>
    )
}

export default Buttons