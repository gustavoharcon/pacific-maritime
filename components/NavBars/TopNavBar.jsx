"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
// import profileDefault from "@/assets/images/profile.png";
import LogoImageLink from "@/components/LogoImageLink";
import MainMenu from "@/components/Menus/MainMenu";

const NavBar = () => {

    const { data: session } = useSession() || {};

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const pathName = usePathname();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMobileMenuOpen(false);
        // setIsProfileMenuOpen(false);
    }, [pathName]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 90);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileMenuOpen(false);
            // setIsProfileMenuOpen(false);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className={`main-menu ${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "menu-open" : ""}`}>
            <div className="container">
                <div className="row">
                    <div className="mobile-menu-column col"></div>
                    <div className="logo-column col">
                        <LogoImageLink />
                    </div>
                    <div className="main-menu-and-buttons col">
                        <div className="main-menu-column col">
                            <MainMenu session={session} />
                        </div>
                        {!session && (<div className="main-menu-buttons col">
                            <div className="main-menu-button">
                                <Link
                                    href="#our-work"
                                    aria-label="Our Work"
                                    className="btn btn-secondary btn-animation-two"
                                >
                                    Our work
                                </Link>
                            </div>
                            <div className="main-menu-button">
                                <Link
                                    href="/request-quote"
                                    aria-label="Request Quote"
                                    className="btn btn--primary btn-animation-four"
                                >
                                    Request quote
                                </Link>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;