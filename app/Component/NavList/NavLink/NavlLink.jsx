import React from "react";
import { NavLink } from "react-router";

const NavlLink = ({ url, title, children_true, children }) => {
  return (
    <NavLink
      className={` ${
        children_true
          ? "  nav_activ_text_colors nav_activ_bg_colors  nav_activ_left_border_colors rounded-l-[4px]"
          : ""
      } flex gap-[10px] items-center  py-[8px] px-[8px] my-[8px] text-black`}
      to={url}
    >
      {children}
      {title}
    </NavLink>
  );
};

export default NavlLink;
