import React from "react";

const Menu = ({ hover = [false, 0], ite = "DASHBOARD", index, icon }) => {
  return (
    <li
      className={`p-5 ${
        hover[0] && 0 == hover[1]
          ? "bg-t text-s rounded-[2rem] "
          : hover[0] && index == hover[1] - 1
          ? "rounded-tl-none  rounded-tr-none rounded-bl-none "
          : hover[0] && index == hover[1] + 1
          ? "rounded-tl-none rounded-br-none rounded-bl-none "
          : "rounded-none"
      } cursor-pointer rounded-[2rem] z-10  bg-s flex gap-4 items-center text-lg`}
    >
      {icon} {ite}
    </li>
  );
};

export default Menu;
