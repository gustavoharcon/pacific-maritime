import React from "react";
import Link from "next/link";
import siteData from "@/data/siteData";

const MainMenu = ({ session }) => {
  // Find the main_menu block in siteData
  const mainMenuObj = siteData.find((item) => item.main_menu);
  const menuItems = mainMenuObj ? mainMenuObj.main_menu : [];

  return (
    <ul className="main-menu-list">
      {menuItems.map((item, index) => (
        <li key={index} className="main-menu-item">
          <Link href={item.menu_url}>
            {item.menu_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
