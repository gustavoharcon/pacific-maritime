
import { MdOutlineEngineering, MdOutlineFactory, MdOutlineControlCamera, MdOutlineLocalPhone, MdOutlineScreenshotMonitor, MdCompress, MdOutlineBlinds, MdOutlineMail } from "react-icons/md";
import { LuDroplet, LuZap } from "react-icons/lu";
import { FaPlusMinus } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

export const getIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
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
        default:
            return null;
    }
}

export default getIcon;