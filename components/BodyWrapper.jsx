"use client";
import { Analytics } from "@vercel/analytics/next";

import { usePathname } from "next/navigation";
import MicrosoftClarity from "@/components/MicrosoftClarity";

const BodyWrapper = ({ children }) => {
  const pathname = usePathname();

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

  return <body className={pageClass}>{children}<Analytics /><MicrosoftClarity /></body>;
};

export default BodyWrapper;
