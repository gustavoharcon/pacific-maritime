"use client";

import { usePathname } from "next/navigation";

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

  return <body className={pageClass}>{children}</body>;
};

export default BodyWrapper;
