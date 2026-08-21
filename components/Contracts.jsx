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
                <p className="description">
                    {contracts_text.description}
                </p>
                <h4 className="title">
                    {contracts_text.title}
                </h4>
                {contracts_text.contracts.map((contract, index) => (
                    <div
                        key={index}
                        className="contract"
                    >
                        {contract.contact_info_title && <p className="contact-info-title">{contract.contact_info_title}</p>}
                        {contract.description && <p className="description">{contract.description}</p>}
                        {contract.number && <p className="number">Contract #: {contract.number}</p>}
                        {contract.contact_name && <p className="contact-name">{contract.contact_name}</p>}
                        {contract.contact_phone && <a href={`tel:${contract.contact_phone}`} className="contact-phone"><FiPhoneCall className="icon" />{contract.contact_phone}</a>}
                        {contract.contact_email && <a href={`mailto:${contract.contact_email}`} className="contact-email"><MdOutlineMail className="icon" />{contract.contact_email}</a>}
                    </div>
                ))}
                {buttons && (
                    <div className="buttons">
                        {buttons.map((button, index) => (
                            <Link
                                href={button.link}
                                key={index}
                                className={button.button_style}
                                aria-label={button.text}
                            >
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