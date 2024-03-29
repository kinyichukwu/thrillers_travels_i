"use client";
import { useState } from "react";
import Menu from "./menu";
import ActiveMenu from "./active_menu";

import { FaHome, FaPlaneDeparture } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { GiPieChart } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";

const menu = [
  ["DASHBOARD", <FaHome className="text-p text-xl" />],
  ["FLIGHTS", <FaPlaneDeparture className="text-p text-xl" />],
  ["WALLETS", <FaWallet className="text-p text-xl" />],
  ["REPORTS", <BiSolidReport className="text-p text-xl" />],
  ["STATISTICS", <GiPieChart className="text-p text-xl" />],
  ["SETTINGS", <IoMdSettings className="text-p text-xl" />],
];
const FullMenu = () => {
  const [hover, setHover] = useState([true, 1]);
  return (
    <nav className="bg-s">
      <ul className={`ml-5 ${hover[0] && "bg-t"}`}>
        {menu.map((item, index) =>
          index == hover[1] ? (
            <ActiveMenu
              hover={hover}
              ite={item[0]}
              icon={item[1]}
              key={index}
            />
          ) : (
            <Menu
              hover={hover}
              ite={item[0]}
              index={index}
              icon={item[1]}
              key={index}
            />
          )
        )}
      </ul>
    </nav>
  );
};

export default FullMenu;
