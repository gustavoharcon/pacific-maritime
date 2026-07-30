
import { MdOutlineEngineering, MdOutlineFactory, MdOutlineControlCamera, MdOutlineLocalPhone, MdOutlineScreenshotMonitor, MdCompress, MdOutlineBlinds, MdOutlineMail, MdKeyboardArrowRight, MdOutlineAttachMoney, MdOutlineWorkOutline } from "react-icons/md";
import { LuDroplet, LuZap } from "react-icons/lu";
import { FaPlusMinus } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { RiCompasses2Fill } from "react-icons/ri";

import Link from "next/link";

export const getIcon = (iconName) => {
    switch (iconName) {
        case "engineering":
            return <MdOutlineEngineering className="icon" />;
        case "fabrication":
            return <MdOutlineFactory className="icon" />;
        case "logistics":
            return <MdOutlineControlCamera className="icon" />;
        case "plus-minus":
            return <FaPlusMinus className="icon" />
        case "phone":
            return <MdOutlineLocalPhone className="icon" />;
        case "location":
            return <IoLocationOutline className="icon" />;
        case "2x":
            return <div className="text-icon">2x</div>;
        case "water-lightning":
            return (
                <div className="combined-icon">
                    <LuDroplet className="icon-drop" />
                    <LuZap className="icon-zap" />
                </div>
            );
        case "blinds":
            return <MdOutlineBlinds className="icon" />;
        case "compress":
            return <MdCompress className="icon" />;
        case "screen":
            return <MdOutlineScreenshotMonitor className="icon" />;
        case "mail":
            return <MdOutlineMail className="icon" />;
        case "arrow-right":
            return <MdKeyboardArrowRight className="icon" />;
        case "clock":
            return <FiClock className="icon" />;
        case "dollar":
        case "money":
            return <MdOutlineAttachMoney className="icon" />;
        case "briefcase":
        case "work":
            return <MdOutlineWorkOutline className="icon" />;
        case "drafting-compass":
            return <RiCompasses2Fill className="icon" />;
        default:
            return null;
    }
}

export const getButton = (button, index) => {
    return (
        <Link key={index} href={button.link} target={button?.target || "_self"} className={`${button.button_style}`}>{button.text} {button.icon ? <span className="button-icon">{getIcon(button.icon)}</span> : null}</Link>
    )
}