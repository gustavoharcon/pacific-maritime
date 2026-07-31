import { FaLinkedin } from "react-icons/fa";

const TeamMembers = ({ data }) => {

    const getSocialMediaIcon = (icon) => {
        switch (icon) {
            case "linkedin":
                return <FaLinkedin />
            default:
                break;
        }
    }

    return (
        <div className="team-members">
            {data.map((teamMember, index) => (
                <div key={index} className="row">
                    <div className="col">
                        <img src={teamMember.image} alt={teamMember.name} />
                    </div>
                    <div className="col">
                        <h2 className="name">{teamMember.name}</h2>
                        <h3 className="position">{teamMember.position}</h3>
                        <p className="description">{teamMember.description}</p>
                        <p className="phone"><a href={`tel:${teamMember.phone}`}>{teamMember.phone}</a></p>
                        <p className="email"><a href={`mailto:${teamMember.email}`}>{teamMember.email}</a></p>
                        <ul className="social-media">
                            {teamMember.social_media.map((social, index) => (
                                <li key={index}>
                                    <a href={social.link}>{getSocialMediaIcon(social.icon)}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeamMembers