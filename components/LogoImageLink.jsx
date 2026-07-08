import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/placeholder-logo.png";

const LogoImageLink = () => {
    return (
        <Link href="/">
            <Image
                className="logo-img"
                src={logo}
                alt={`${process.env.COMPANY_NAME} logo`}
                width={100}
                height={100}
            />
        </Link>
    );
};

export default LogoImageLink;
