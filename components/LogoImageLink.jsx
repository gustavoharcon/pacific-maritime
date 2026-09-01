import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logos/pacific-maritime-industries-corp-logo-no-text-white-122w.png"

const LogoImageLink = () => {
    return (
        <Link href="/">
            <Image
                className="logo-img"
                src={logo}
                alt={`${process.env.NEXT_PUBLIC_COMPANY_NAME || process.env.COMPANY_NAME || "Pacific Maritime Industries Corp."} logo`}
                width={0}
                height={0}
            />
        </Link>
    );
};

export default LogoImageLink;
