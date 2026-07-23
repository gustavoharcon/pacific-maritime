import Link from "next/link"
import siteData from "@/data/siteData"
import Image from "next/image";
import white_logo from "@/assets/images/logos/Pacific-Maritime-Industries-White-Logo-with-Company-Name.png";

const footer_menu = siteData.find(item => item.footer_menu)?.footer_menu;
const bottom_credits = siteData.find(item => item.bottom_credits)?.bottom_credits;

console.log(white_logo);

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Image src={white_logo} alt="Pacific Maritime Industries Corp. White Logo" width={0} height={0} />
                    </div>
                </div>
                <div className="row">
                    {footer_menu.map((item, index) => {
                        return (
                            <div key={index} className="col">
                                <h4><Link href={item.link}>{item.menu_name}</Link></h4>
                                {item.sub_menu && <ul>
                                    {item.sub_menu.map((sub_item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link href={sub_item.link}>{sub_item.text}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>}
                            </div>
                        )
                    })}
                </div>
                <div className="row">
                    <div className="col menu-column">
                        {bottom_credits.menu.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Link href={item.link}>{item.text}</Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col copyright-column"><p>{bottom_credits.copyright_text}</p></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer