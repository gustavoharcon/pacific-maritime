"use client";

import { useState, useEffect } from "react";
import Link from "next/link"
import siteData from "@/data/siteData"
import Image from "next/image";
import white_logo from "@/assets/images/logos/Pacific-Maritime-Industries-White-Logo-with-Company-Name.png";

const footer_menu = siteData.find(item => item.footer_menu)?.footer_menu;
const bottom_credits = siteData.find(item => item.bottom_credits)?.bottom_credits;

console.log(white_logo);

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        // Initial check in case user is already scrolled down on load
        toggleVisibility();

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link href="/">
                            <Image src={white_logo} alt="Pacific Maritime Industries Corp. White Logo" width={0} height={0} />
                        </Link>
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
                        {bottom_credits && bottom_credits.menu.map((item, index) => {
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

            <button
                onClick={scrollToTop}
                className={`go-to-top ${isVisible ? "visible" : ""}`}
                aria-label="Go to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            </button>
        </footer>
    )
}

export default Footer