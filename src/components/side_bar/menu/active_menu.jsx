import React from "react";

const ActiveMenu = ({ hover = [false, 0], ite = "DASHBOARD", icon }) => {
  return (
    <div className="w-full bg-s">
      <li
        className={`p-5 ${
          hover[0] && 1 == hover[1]
            ? "bg-t text-s rounded-l-[2rem] rounded-r-none"
            : hover[0] && 1 == hover[1] - 1
            ? "rounded-tl-none  rounded-tr-none rounded-bl-none "
            : hover[0] && 1 == hover[1] + 1
            ? "rounded-tl-none rounded-br-none rounded-bl-none "
            : "rounded-none"
        } cursor-pointer  bg-s flex gap-4 items-center text-lg`}
      >
        {icon} {ite}
      </li>
    </div>
  );
};

export default ActiveMenu;
