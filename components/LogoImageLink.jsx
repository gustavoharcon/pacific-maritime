import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/Pacific Maritime Industries White Logo.png";

const LogoImageLink = () => {
    return (
        <Link href="/">
            <Image
                className="logo-img"
                src={logo}
                alt={`${process.env.COMPANY_NAME} logo`}
                width={0}
                height={0}
            />
        </Link>
    );
};

export default LogoImageLink;
