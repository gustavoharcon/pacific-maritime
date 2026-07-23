"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BodyWrapper = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 50,
      once: false,
      mirror: true,
      easing: "ease-out-quad",
    });
  }, []);

  const getPageClass = (path) => {
    if (!path || path === "/") {
      return "home-page";
    }
    const cleanPath = path
      .split("/")
      .filter(Boolean)
      .join("-");
    return cleanPath ? `${cleanPath}-page` : "home-page";
  };

  const pageClass = getPageClass(pathname);

  return <body className={pageClass}>{children}</body>;
};

export default BodyWrapper;
