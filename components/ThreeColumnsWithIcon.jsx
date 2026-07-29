import Link from "next/link";
import { getIcon } from "@/utils/helperFunctions";

const ThreeColumnsWithIcon = ({ data }) => {

    const { items, align_left } = data;

    return (
        <div className={`three-columns-with-icon-component ${align_left ? 'align-left' : ''}`}>
            {
                items.map((item, index) => (
                    <div className="item" key={index}>
                        <div className="icon-container">
                            {getIcon(item.icon)}
                        </div>
                        <div className="content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            {item.link && <Link href={item.link.url} className="link" target={item.link.target || "_self"}>{item.link.text}</Link>}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ThreeColumnsWithIcon