import React from "react";
import Link from "next/link";
import siteData from "@/data/siteData";
import { FaChevronDown } from "react-icons/fa6";

const MainMenu = ({ session }) => {
  // Find the main_menu block in siteData
  const mainMenuObj = siteData.find((item) => item.main_menu);
  const menuItems = mainMenuObj ? mainMenuObj.main_menu : [];

  return (
    <ul className="main-menu-list">
      {menuItems.map((item, index) => (
        <li key={index} className={`main-menu-item ${item.sub_menu && item.sub_menu.length > 0 ? "has-sub-menu" : ""}`}>
          <Link href={item.menu_url}>
            {item.menu_name}
            {item.sub_menu && item.sub_menu.length > 0 && (
              <FaChevronDown className="sub-menu-chevron" />
            )}
          </Link>
          {item.sub_menu && item.sub_menu.length > 0 && (
            <ul className="sub-menu">
              {item.sub_menu.map((subItem, subIndex) => (
                <li key={subIndex} className="sub-menu-item">
                  <Link href={subItem.link}>
                    {subItem.text}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
