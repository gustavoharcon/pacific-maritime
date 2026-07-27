import TopText from "./Text/TopText"
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";

const Contracts = ({ data }) => {
    const { top_text, contracts_text, buttons } = data;
    return (
        <div className="contracts-component">
            <div className="column">
                <TopText data={top_text} />
            </div>
            <div className="column">
                <p
                    className="description"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                >
                    {contracts_text.description}
                </p>
                <h4
                    className="title"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                >
                    {contracts_text.title}
                </h4>
                {contracts_text.contracts.map((contract, index) => (
                    <div
                        key={index}
                        className="contract"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        data-aos-duration="800"
                        data-aos-easing="ease-in-out"
                    >
                        <p className="description">{contract.description}</p>
                        <p className="number">Contract #: {contract.number}</p>
                        <p className="contact-info-title">{contract.contact_info_title}</p>
                        <p className="contact-name">{contract.contact_name}</p>
                        <a href={`tel:${contract.contact_phone}`} className="contact-phone"><FiPhoneCall className="icon" />{contract.contact_phone}</a>
                        <a href={`mailto:${contract.contact_email}`} className="contact-email"><MdOutlineMail className="icon" />{contract.contact_email}</a>
                    </div>
                ))}
                {buttons && (
                    <div
                        className="buttons"
                        data-aos="fade-up"
                        data-aos-delay={contracts_text.contracts.length * 100}
                        data-aos-duration="800"
                        data-aos-easing="ease-in-out"
                    >
                        {buttons.map((button, index) => (
                            <Link href={button.link} key={index} className={button.button_style}>
                                {button.text}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Contracts